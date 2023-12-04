import Vue from 'vue';
import VueSweetalert2 from '@goodmartian/vue-sweetalert2-neutral';

Vue.use(VueSweetalert2, <%= JSON.stringify(options, null, 2) %>);

export default ({}, inject) => {
  inject('swal', Vue.swal)
}
