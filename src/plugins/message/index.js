import Message from './Message'

export default {
    install (Vue, options){
        Vue.prototype.$message = (title, message) => {
            let msg = Vue.extend(Message);
            let messageEl = new msg({
                propsData: {
                    title,
                    message
                }
            }).$mount().$el;
            document.body.appendChild(messageEl);
        }
    }
}
