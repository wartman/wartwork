import {Model, Collection} from '../lib/backbone'

class Project extends Model {}

class Projects extends Collection {

  constructor(models, options) {
    this.url = '/api/projects'
    this.model = Project
    super(models, options)
  }

  parse(resp) {
    var projects = resp
    if (resp.ok && resp.projects) {
      projects = resp.projects
    } else if (!resp.ok) {
      throw new Error(resp.reason)
    }
    return projects
  }

}

export default Projects
