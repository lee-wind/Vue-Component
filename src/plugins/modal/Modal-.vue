<template>
    <div class="modal" :class="{ 'fade-in': fadeIn, 'fade-out': !fadeIn }">
        <transition name="slide" @after-leave="afterLeave">
            <div class="container" v-if="show">
                <div class="header">
                    <span class="close" @click="close"></span>
                    <p class="title text-ellipsis">{{title}}</p>
                </div>
                <div class="body">
                    <body-content></body-content>
                </div>
                <div class="footer">
                    <button @click="cancel">取消</button>
                    <button @click="confirm">确定</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Mask from '../Mask'
    export default {
        name: "Modal",
        components: [
            Mask
        ],
        props: [
            'title',
            'resolve',
        ],
        methods: {
            confirm(){
                this.resolve();
                this.close();
            },
            cancel(){
                this.close();
            },
        }
    }
</script>

<style scoped lang="scss">
    @mixin transition{
        transition: all .3s;
    }
    .modal{
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
                .close{
                    float: right;
                    &::after{
                        content: "\2716";
                        font-size: 16px;
                    }
                }
            }
            .body{
                /*width: 200px;*/
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
