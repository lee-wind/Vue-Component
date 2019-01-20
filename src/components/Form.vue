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
    </form>
</template>

<script>
    import Radio from './common/form/Radio'
    import Checkbox from './common/form/Checkbox'
    export default {
        name: "Form",
        components: {
            Radio,
            Checkbox
        },
        data(){
            return{
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
        }
    }
</script>

<style scoped lang="scss">

</style>
