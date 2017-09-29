// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import firebase from 'firebase';
import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import VueFire from 'vuefire'


//----- Se instalo un Global Event Bus para comunicar componentes -------------
//   npm install vue-events
//   URL:  https://github.com/cklmercer/vue-events  
//-----------------------------------------------------------------------------
import VueEvents from 'vue-events'
Vue.use(VueEvents)

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueFire)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/animate'


new Vue({
  el: '#q-app',
  data: function () {
    return {
      arrayUsuarios: { }
    }
  },
  mounted: function () {
      const unUsuario="danilo biondi"
      console.log("se monta la APP")
  },
  created: function () {
    console.log("se acaba de crear la instancia de APP")
    
  },  
  router,
  render: h => h(require('./App'))
})
