import _ from 'underscore'
import {View} from '../lib/backbone'

class Projects extends View {

  constructor(options) {
    this.events = {
      'click .grid-item': 'toggleView'
    }
    super(options)
  }

  toggleView: function (e) {
    e.preventDefault()
  }

}

export default Projects
