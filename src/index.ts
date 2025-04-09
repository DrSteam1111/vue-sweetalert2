// @ts-ignore
import {SweetAlertOptions} from 'sweetalert2-neutral';
// @ts-ignore
import Swal from 'sweetalert2-neutral/dist/sweetalert2.js';

type TVueSwalInstance = typeof Swal & typeof Swal.fire;

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $swal: TVueSwalInstance;
  }
}

class VueSweetalert2 {
  static install(vue: any, options: SweetAlertOptions = {}): void {
    const swalLocalInstance: typeof Swal = Swal.mixin(options);

    const swalFunction = function(...args: Parameters<typeof Swal['fire']>) {
      return swalLocalInstance.fire.call(swalLocalInstance, ...args);
    };

    Object.assign(swalFunction, Swal);

    Object.keys(Swal)
      //@ts-ignore
      .filter(key => typeof Swal[key] === 'function')
      .forEach(methodName => {
        //@ts-ignore
        swalFunction[methodName] = swalLocalInstance[methodName].bind(swalLocalInstance);
      })

    vue.config.globalProperties.$swal = swalFunction;
    vue.provide('$swal', swalFunction);
  }
}

export default VueSweetalert2;
