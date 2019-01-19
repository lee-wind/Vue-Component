import myMixin from '../plugin'
import Modal from './Modal'

export default {
    install (Vue, options){
        Vue.prototype.$modal = ({
            title,
            content,
            bodyContent
        }) => {
            return new Promise((resolve) => {
                Modal.components = {
                    'body-content': bodyContent
                };
                let modal = Vue.extend({
                    mixins: [myMixin, Modal]
                });
                let modalEl = new modal({
                    propsData: {
                        title,
                        content,
                        resolve,
                    }
                }).$mount().$el;
                document.body.appendChild(modalEl);
            })
        }
    }
}
