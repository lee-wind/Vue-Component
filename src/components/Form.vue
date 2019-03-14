<template>
    <form>
        {{selectedRadio}}
        <div class="form-item">
            <button @click="setRadio">设置Radio</button>
            <Radio v-for="radio in radios" v-model="selectedRadio"
                   name="'sex'" :value="radio.id" :key="radio.id">
                {{radio.value}}</Radio>
        </div>
        {{selectedCheckbox}}
        <div class="form-item">
            <button @click="setCheckBox">设置checkBox</button>
            <Checkbox v-for="checkbox in checkBoxs" v-model="selectedCheckbox"
                   :value="checkbox.id" :key="checkbox.id">
                {{checkbox.value}}</Checkbox>
        </div>
        {{name}}
        <div class="form-item">
            <Input label="姓名" v-model="name" required="true" requireText="不能为空" validate=""/>
        </div>
        <div class="form-item">
            <Submit/>
        </div>
    </form>
</template>

<script>
    import Input from './common/form/Input'
    import Submit from './common/form/Submit'
    import Radio from './common/form/Radio'
    import Checkbox from './common/form/Checkbox'
    export default {
        name: "Form",
        components: {
            Input,
            Submit,
            Radio,
            Checkbox
        },
        data(){
            return{
                name: 'wind',
                radios: [],
                checkBoxs: [],
                selectedRadio: 2,
                selectedCheckbox: [3],
            }
        },
        mounted(){
            //this.selectedCheckbox.push(3);
        },
        methods: {
            setRadio(){
                this.radios = [{
                    id: 1,
                    value: '男'
                },{
                    id: 2,
                    value: '女'
                }]
            },
            setCheckBox(){
                this.checkBoxs = [{
                    id: 3,
                    value: '游戏'
                },{
                    id: 4,
                    value: '音乐'
                }]
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
