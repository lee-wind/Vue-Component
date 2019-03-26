<template>
    <div class="input">
        <label for="">{{label}}</label>
        <input :type="type" :value="model" :placehoder="placeholder"
               :minlength="minlength" :maxlength="maxlength"
               @change="change">
        <span ref="warn" v-if="isWarn" style="color: red"></span>
    </div>
</template>

<script>
    export default {
        name: "Input",
        model: {
            prop: 'model',
            event: 'change'
        },
        props: {
            model: {
                default: ''
            },
            required: {
                default: false
            },
            label: {
                default: ''
            },
            type: {
                default: 'text'
            },
            requireText: {
                default: '不能为空',
            },
            minlength: {
                default: -1
            },
            maxlength: {
                default: -1
            },
            placeholder: {
                default: ''
            }
        },
        data(){
            return{
                isWarn: false,
            }
        },
        methods: {
            change($event){
                if(this.required){
                    this.isWarn = !$event.target.value;
                    if(this.isWarn){
                        this.$nextTick(() => {
                            console.log(this.$refs);
                            this.$refs.warn.innerText = this.requireText;
                        })
                    }
                }
                this.$emit('change', $event.target.value);
            }
        }
    }
</script>

<style scoped lang="scss">
    .input{
        input{
            padding: 0 10px;
            height: 50px;
            line-height: 50px;
            border: 1px solid grey;
        }
    }
</style>
