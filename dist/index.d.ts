import { SweetAlertOptions } from 'sweetalert2-neutral';
import Swal from 'sweetalert2-neutral/dist/sweetalert2.js';
type TVueSwalInstance = typeof Swal & typeof Swal.fire;
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $swal: TVueSwalInstance;
    }
}
declare class VueSweetalert2 {
    static install(vue: any, options?: SweetAlertOptions): void;
}
export default VueSweetalert2;
