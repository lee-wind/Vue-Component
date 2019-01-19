<template>
    <div class="alert" :class="{ 'fade-in': fadeIn, 'fade-out': !fadeIn }">
        <transition name="slide" @after-leave="afterLeave">
            <div class="container" v-if="show">
                <div class="header">

                </div>
                <div class="body">
                    {{text}}
                </div>
                <div class="footer">
                    <button @click="close">确定</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Bus from '@/bus'
    export default {
        name: "Alert",
        props: [
            'text',
        ],
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
        },
    }
</script>

<style scoped lang="scss">
    @mixin transition{
        transition: all .3s;
    }
    .alert{
        &.fade-in{
            background-color: rgba(0, 0, 0, .5);
            @include transition;
        }
        &.fade-out{
            background-color: rgba(0, 0, 0, 0);
            @include transition;
        }
        @mixin absolute{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
        @include absolute;
        background-color: rgba(0, 0, 0, .5);
        @mixin center{
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .container{
            position: absolute;
            @include center;
            background-color: #ffffff;
            .header{

            }
            .body{
                width: 200px;
                min-height: 100px;
            }
            .footer{

            }
        }
        @mixin slide{
            top: 38%;
            left: 50%;
            opacity: 0;
        }
        .slide-enter{
            @include slide;
            transform: translate(-50%, 0);
        }
        .slide-enter-to{
            @include center;
            opacity: 1;
            @include transition;
        }
        .slide-leave-to{
            @include slide;
            transform: translate(-50%, 0);
            @include transition;
        }
    }
</style>

