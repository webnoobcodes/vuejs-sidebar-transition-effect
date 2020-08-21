import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faSearch, faBell, faPowerOff, faUser, faCogs, faTh, faShareAlt, faStar, faComment } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faSearch, faBell, faPowerOff, faUser, faCogs, faTh, faShareAlt, faStar, faComment)

Vue.component('fa-icon', FontAwesomeIcon)