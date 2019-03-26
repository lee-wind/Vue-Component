<template>
    <form>
        {{selectedRadio}}
        <div class="form-item">
            <!--<button @click="setRadio">Radio设置</button>-->
           <button>Radio设置</button>
            <Radio v-for="radio in radios" v-model="selectedRadio"
                   name="'sex'" :value="radio.id" :key="radio.id">
                {{radio.value}}</Radio>
        </div>
        {{selectedCheckbox}}
        <div class="form-item">
            <button @click="setCheckBox">checkBox设置</button>
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
        created(){
            this.setRadio();
            this.setCheckBox();
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
    form{
        font-size: 28px;
        button{
            height: 50px;
            line-height: 50px;
            border: 1px solid #333333;
            padding: 0 10px;
        }
    }
</style>
