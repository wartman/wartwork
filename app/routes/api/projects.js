exports.single = function (req, res) {
  req.documents.project(req.params).fetch().then(function (project) {
    res.json({
      ok: true,
      project: project.toJSON()
    })
  }).catch(function (err) {
    res.json({
      ok: false,
      code: err.code,
      message: err.message // TODO: should NOT SEND if env == production
    })
  })
}

exports.collection = function (req, res) {
  req.collections.projects().fetch().then(function (projects) {
    res.json({
      ok: true,
      projects: projects.toJSON()
    })
  }).catch(function (err) {
    res.json({
      ok: false,
      code: err.code,
      message: err.message // TODO: should NOT SEND if env == production
    })
  })
}