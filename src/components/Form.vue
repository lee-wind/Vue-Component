<template>
    <form>
        {{selectRadio}}
        <div class="form-item">
            <Radio v-for="radio in radios" v-model="selectRadio"
                   name="'sex'" :value="radio.id" :key="radio.id">
                {{radio.value}}</Radio>
        </div>
        {{selectCheckbox}}
        <div class="form-item">
            <Checkbox v-for="checkbox in checkboxs" v-model="selectCheckbox"
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
                radios: [{
                    id: 1,
                    value: '男'
                },{
                    id: 2,
                    value: '女'
                }],
                checkboxs: [{
                    id: 3,
                    value: '游戏'
                },{
                    id: 4,
                    value: '音乐'
                }],
                selectRadio: 2,
                selectCheckbox: [],
            }
        },
        mounted(){
            this.selectCheckbox.push(3);
        }
    }
</script>

<style scoped lang="scss">

</style>
