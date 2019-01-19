<template>
    <div class="my-mask" :class="{ 'fade-in': fadeIn, 'fade-out': !fadeIn }">
        <transition name="slide" @after-leave="afterLeave">
            <div class="container" v-if="show">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    import Bus from '@/bus'
    export default {
        name: "MyMask",
        provide(){
            return {
                close: this.close
            }
        },
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
    }
</script>

<style lang="scss">
    @mixin transition{
        transition: all .3s;
    }
    .my-mask{
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
            width: 400px;
            position: absolute;
            @include center;
            background-color: #ffffff;
            $padding: 10px;
            border-radius: 3px;
            .header{
                padding: $padding;
                .close{
                    float: right;
                    margin-left: 5px;
                    cursor: pointer;
                    color: gray;
                    &::after{
                        content: "\2716";
                        font-size: 16px;
                        vertical-align: top;
                    }
                }
                border-bottom: 1px solid #E5ECEE;
            }
            .body{
                padding: $padding;
                min-height: 200px;
                max-height: 300px;
                overflow: auto;
            }
        }
        @mixin slide{
            top: 45%;
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
