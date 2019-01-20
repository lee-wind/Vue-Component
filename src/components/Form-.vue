<template>
    <form>
        {{selectRadio}}
        <div class="form-item">
            <div class="radio" v-for="radio in radios">
                <input :id="radio.value" type="radio" v-model="selectRadio" :value="radio.value">
                <label :for="radio.value"></label>
                <span>{{radio.value}}</span>
            </div>
        </div>
        {{selectCheckbox}}
        <div class="form-item">
            <div class="checkbox" v-for="checkbox in checkboxs">
                <input :id="checkbox.value" type="checkbox" v-model="selectCheckbox" :value="checkbox.value">
                <label :for="checkbox.value"></label>
                <span>{{checkbox.value}}</span>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "Form",
        data(){
            return{
                radios: [{
                    value: '男'
                },{
                    value: '女'
                }],
                checkboxs: [{
                    value: '游戏'
                },{
                    value: '音乐'
                }],
                selectRadio: '男',
                selectCheckbox: [],
            }
        }
    }
</script>

<style scoped lang="scss">
    .radio{
        display: inline-block;
        margin: 0 5px;
        label{
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: 15px;
            height: 15px;
            border: 1px solid grey;
            border-radius: 50%;
            cursor: pointer;
            &::after{
                content: '';
                display: block;
                position: absolute;
                width: 7px;
                height: 7px;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: auto;
                border-radius: 50%;
                background-color: grey;
            }
        }
        input[type=radio]{
            display: none;
            &:checked+label {
                border: 1px solid dodgerblue;
                &::after {
                    background-color: dodgerblue;
                }
            }
            &:checked+label+span{
                color: dodgerblue;
            }
        }
    }
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
