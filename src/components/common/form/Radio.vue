<template>
    <div class="radio">
        <input :id="value" type="radio" :name="name"
               :value="value" :checked="model == value"
               @click="change">
        <label :for="value">
            <span class="icon"></span>
            <span class="text">
                <slot></slot>
            </span>
            <!--</span>-->
            <!--<span class="text">-->
                <!--<slot></slot>-->
            <!--</span>-->
        </label>
    </div>
</template>

<script>
    export default {
        name: "Radio",
            model: {
                prop: 'model',
                event: 'change'
            },
            props: {
                model: '',
                name: '',
                value: ''
            },
            methods: {
                change($event){
                    console.log($event.target.value);
                    this.$emit('change', $event.target.value)
                }
            }
    }
</script>

<style scoped lang="scss">
    .radio{
        position: relative;
        display: inline-block;
        vertical-align: top;
        margin: 0 5px;
        font-size: 28px;
        height: 50px;
        line-height: 50px;
        border: 1px solid grey;
        label{
            position: relative;
            padding-left: 35px;
            /*display: inline-block;*/
            /*!*vertical-align: middle;*!*/
            cursor: pointer;
            /*font-size: 0;*/
            .icon{
                position: absolute;
                /*display: inline-block;*/
                /*vertical-align: top;*/
                width: 28px;
                height: 28px;
                left: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                border: 1px solid grey;
                border-radius: 50%;
                &::before{
                    content: '';
                    /*width: 14px;*/
                    /*height: 14px;*/
                    /*border-radius: 50%;*/
                    /*background-color: grey;*/
                    display: block;
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    margin: auto;
                    border-radius: 50%;
                    background-color: grey;
                }
            }
            .text{
                font-size: 28px;
            }
            /*.text{*/
                /*display: inline-block;*/
                /*!*vertical-align: middle;*!*/
            /*}*/
        }
        input[type=radio]{
            display: none;
            &:checked+label {
                color: dodgerblue;
                /*border: 1px solid dodgerblue;*/
                &>.icon {
                    /*background-color: dodgerblue;*/
                    border: 1px solid dodgerblue;
                    &::before{
                        background-color: dodgerblue;
                    }
                }
            }
            /*&:checked+label+span{*/
                /*color: dodgerblue;*/
            /*}*/
        }
    }
</style>
