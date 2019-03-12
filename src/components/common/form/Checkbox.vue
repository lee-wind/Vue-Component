<template>
    <div class="checkbox">
        <input :id="value" type="checkbox" v-model="values" :value="value"
               @change="change">
        <label :for="value"></label>
        <span>
            <slot></slot>
        </span>
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
                values: this.model
            }
        },
        methods: {
            change($event){
                console.log(this.values);
                this.$emit('change', this.values)
            }
        }
    }
</script>

<style scoped lang="scss">
    .checkbox{
        display: inline-block;
        margin: 0 5px;
        label{
            display: inline-block;
            vertical-align: middle;
            width: 15px;
            height: 15px;
            border: 1px solid grey;
            border-radius: 3px;
            cursor: pointer;
        }
        input[type=checkbox]{
            display: none;
            &:checked+label {
                $border: 1px solid dodgerblue;
                border: $border;
                &::after {
                    content: '';
                    display: block;
                    width: 5px;
                    height: 10px;
                    margin: 0 auto;
                    border-right: $border;
                    border-bottom: $border;
                    transform: rotate(35deg);
                }
            }
            &:checked+label+span{
                color: dodgerblue;
            }
        }
    }
</style>
