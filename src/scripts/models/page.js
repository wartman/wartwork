import {Model, Collection} from '../lib/backbone'

class Page extends Model {}

class Pages extends Collection {

  constructor(models, options) {
    this.url = '/api/page'
    this.model = Page
    super(models, options)
  }

  parse(resp) {
    var Pages = resp
    if (resp.ok && resp.Pages) {
      Pages = resp.Pages
    } else if (!resp.ok) {
      throw new Error(resp.reason)
    }
    return Pages
  }

}

export default Pages
