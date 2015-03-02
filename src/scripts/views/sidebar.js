import _ from 'underscore'
import {View} from '../lib/backbone'

class Sidebar extends View {

  constructor(options) {
    this.events = {
      'click .option-projects': 'openProjects',
      'click .option-about': 'openAbout',
      'click .option-contact': 'openContact'
    }
    super(options)
  }

  openProjects(e) {
    e.preventDefault()
    this._toggleSelected(e.target)
    this._toggleSection('.sidebar-section--projects')
  }

  openAbout(e) {
    e.preventDefault()
    this._toggleSelected(e.target)
    this._toggleSection('.sidebar-section--about')
  }

  openContact(e) {
    e.preventDefault()
    this._toggleSelected(e.target)
    this._toggleSection('.sidebar-section--contact')
  }

  _toggleSelected(target) {
    this.$('.sidebar-menu .option a').removeClass('is-selected')
    this.$(target).addClass('is-selected')
  }

  _toggleSection(section) {
    this.$('.sidebar-section').hide()
    this.$(section).show()
  }

}

export default Sidebar
