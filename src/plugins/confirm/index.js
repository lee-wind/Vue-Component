import Confirm from './Confirm'
import myMixin from "../plugin";

export default {
    install (Vue, options){
        Vue.prototype.$confirm = (msg) => {
            return new Promise((resolve) => {
                let confirm = Vue.extend({
                    mixins: [myMixin, Confirm]
                });
                let confirmEl = new confirm({
                    propsData: {
                        msg,
                        resolve,
                    }
                }).$mount().$el;
                document.body.appendChild(confirmEl);
            });
        }
    }
}
