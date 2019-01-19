import Alert from './Alert'

export default {
    install (Vue, options){
        Vue.prototype.$alert = (text) => {
            let alert = Vue.extend(Alert);
            let alertEl = new alert({
                propsData: {
                    text: text
                }
            }).$mount().$el;
            document.body.appendChild(alertEl);
        }
    }
}
