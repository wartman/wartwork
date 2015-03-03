import _ from 'underscore'
import {View} from '../lib/backbone'

class Sidebar extends View {

  constructor(options) {
    this.events = {
      'click .option-toggle': 'toggleTab',
    }
    super(options)
  }

  toggleTab(e) {
    e.preventDefault()
    var target = this.$(e.target)
    var tab = target.data("tab")
    this.$('.option-toggle').removeClass('is-selected')
    target.addClass('is-selected')
    this.$('.sidebar-section').hide()
    this.$('.sidebar-section--' + tab).show()
  }

}

export default Sidebar
