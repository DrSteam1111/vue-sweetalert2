import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2-neutral';

import 'sweetalert2-neutral/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2, <%= JSON.stringify(options, null, 2) %>);

export default ({}, inject) => {
  inject('swal', Vue.swal)
}
