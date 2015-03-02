exports.single = function (req, res) {
  req.documents.page(req.params).fetch().then(function (page) {
    res.json({
      ok: true,
      page: page.toJSON()
    })
  }).catch(function (err) {
    res.json({
      ok: false,
      code: err.code,
      reason: err.message // TODO: should NOT SEND if env == production
    })
  })
}

exports.collection = function (req, res) {
  req.collections.pages().fetch().then(function (pages) {
    res.json({
      ok: true,
      pages: pages.toJSON()
    })
  }).catch(function (err) {
    res.json({
      ok: false,
      code: err.code,
      reason: err.message // TODO: should NOT SEND if env == production
    })
  })
}