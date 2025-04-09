// @ts-ignore
import Swal from 'sweetalert2-neutral/dist/sweetalert2.js';
class VueSweetalert2 {
    static install(vue, options = {}) {
        const swalLocalInstance = Swal.mixin(options);
        const swalFunction = function (...args) {
            return swalLocalInstance.fire.call(swalLocalInstance, ...args);
        };
        Object.assign(swalFunction, Swal);
        Object.keys(Swal)
            //@ts-ignore
            .filter(key => typeof Swal[key] === 'function')
            .forEach(methodName => {
            //@ts-ignore
            swalFunction[methodName] = swalLocalInstance[methodName].bind(swalLocalInstance);
        });
        vue.config.globalProperties.$swal = swalFunction;
        vue.provide('$swal', swalFunction);
    }
}
export default VueSweetalert2;
//# sourceMappingURL=index.js.map