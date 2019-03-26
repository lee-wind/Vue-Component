<template>
    <div class="checkbox">
        <input :id="value" type="checkbox" v-model="values" :value="value"
               @change="change">
        <label :for="value">
            <span class="icon"></span>
            <span class="text">
                <slot></slot>
            </span>
        </label>
    </div>
    <!--:checked="values.includes(value)"-->
</template>

<script>
    export default {
        name: "Checkbox",
        model: {
            prop: 'model',
            event: 'change'
        },
        props: {
            model: '',
            value: ''
        },
        data(){
            return{
                values: []
            }
        },
        methods: {
            change(){
                console.log(this.values);
                this.$emit('change', this.values)
            }
        },
        watch: {
            model: {
                handler(newValue){
                    this.values = newValue;
                },
                immediate: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .checkbox{
        display: inline-block;
        margin: 0 5px;
        height: 50px;
        line-height: 50px;
        border: 1px solid grey;
        label{
            position: relative;
            padding-left: 35px;
            cursor: pointer;
            .icon{
                position: absolute;
                width: 28px;
                height: 28px;
                left: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                border: 1px solid grey;
            }
        }
        input[type=checkbox]{
            display: none;
            &:checked+label {
                $border: 2px solid dodgerblue;
                /*border: 1px solid dodgerblue;*/
                &>.icon {
                    &::before {
                        content: '';
                        display: block;
                        width: 10px;
                        height: 20px;
                        margin: 0 auto;
                        border-right: $border;
                        border-bottom: $border;
                        transform: rotate(35deg);
                    }
                }
            }
            &:checked+label+span{
                color: dodgerblue;
            }
        }
    }
</style>
