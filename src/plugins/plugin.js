import Bus from '@/bus'

const myMixin = {
    data(){
        return{
            fadeIn: false,
            show: false,
        }
    },
    created(){
        this.fadeIn = false;
    },
    mounted(){
        this.show = true;
        this.fadeIn = true;
        this.hide();
    },
    methods: {
        hide(){
            Bus.$on('hidePlugin', () => {
                console.log('隐藏插件');
                this.close();
            })
        },
        afterLeave(el){
            Bus.$off('hidePlugin');
            document.body.removeChild(this.$el);
        },
        close(){
            this.fadeIn = false;
            this.show = false;
        }
    }
};

export default myMixin;
