<template>
    <div class="table">
        <table>
            <Thead :list="theadList"></Thead>
            <tbody>
            <tr v-for="(item, index) in td" :key="index">
                <TdEdit :object="item" name="name" :value="item.name" @updateValue="updateValue"></TdEdit>
            </tr>
            </tbody>
        </table>
        <table>
            <Thead :list="theadList"></Thead>
            <tbody>
            <tr v-for="(item, index) in td" :key="index">
                <Td :text="item.name"></Td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Thead from './common/table/Thead'
    import Td from './common/table/Td'
    import TdEdit from './common/table/TdEdit'
    export default {
        name: "Table",
        props: [

        ],
        components: {
            Thead,
            Td,
            TdEdit
        },
        data(){
            return{
                theadList: [
                    'wind',
                    'sun',
                    'rain'
                ],
                tbodyList: [

                ],
                td: []
            }
        },
        mounted(){
            this.td = [{
                name: '玫瑰少年玫瑰少年玫瑰少年玫瑰少年玫瑰少年玫瑰少年玫瑰少年玫瑰少年' +
                    '玫瑰少年玫瑰少年玫瑰少年玫瑰少年玫瑰少年玫瑰少年玫瑰少年玫瑰少年' +
                    '玫瑰少年玫瑰少年玫瑰少年玫瑰少年玫瑰少年玫瑰少年玫瑰少年玫瑰少年',
                age: '18',
                sex: '男'
            },{
                name: 'wind',
                age: '18',
                sex: '男'
            }]
        },
        methods: {
            updateValue(object, name, value){
                console.log(name);
                console.log(value);
                object.name = value;
                console.log(object);
            }
        }
    }
</script>

<style lang="scss">
    .table{
        font-size: 18px;
    }
    table{
        width: 400px;
    }
    th:nth-of-type(1){
        width: 200px;
    }
    th:nth-of-type(2){
        width: 100px;
    }
    th:nth-of-type(3){
        width: 100px;
    }
    td{
        border: 1px solid #eee;
    }
</style>
