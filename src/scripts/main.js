import Sidebar from './views/sidebar'
import Projects from './models/projects'

class App {

  constructor() {
    this.projects =  new Projects()
    this.sidebar = new Sidebar({
      el: '#primary-sidebar',
      collection: this.projects
    })
  }

}

var app = new App()
