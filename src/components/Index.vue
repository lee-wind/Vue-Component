<template>
    <div class="index">
        <Pagination :current-page="currentPage" :page-size="pageSize"
                    :total="total" @page-change="pageChange"/>
        <p>日期：{{date}}</p><button @click="setDate">设置日期</button>
        <Date v-model="date"></Date>
        <p>日期：{{date}}</p><button @click="setDate">设置日期</button>
        <Date v-model="date"></Date>
        <p>时间：{{time}}</p><button @click="setTime">设置时间</button>
        <Time v-model="time"></Time>
        <p>时间：{{time}}</p><button @click="setTime">设置时间</button>
        <Time v-model="time"></Time>
        <p>选择：{{selected}}</p><button @click="setList">设置列表</button>
        <Select :list="list" id="id" value="text" v-model="selected"></Select>
        <p>选择：{{selected}}</p><button @click="setList">设置列表</button>
        <Select :list="list" id="id" value="text" v-model="selected"></Select>
    </div>
</template>

<script>
    import Pagination from './common/pagination/Pagination'
    import Date from './common/calendar/Date'
    import Time from './common/calendar/Time'
    import Select from './common/form/Select'
    export default {
        name: "Index",
        components: {
            Pagination,
            Date,
            Time,
            Select
        },
        data(){
            return {
                total: 11,
                currentPage: 1,
                pageSize: 10,
                date: '',
                time: '',
                list: [],
                selected: 1
            }
        },
        methods: {
            pageChange(page){
                console.log(page);
                this.currentPage = page;
            },
            setDate(){
              this.date = '2019-03-05'
            },
            setTime(){
                this.time = '14:09:08';
            },
            setList(){
                this.list = [{
                    id: 1,
                    text: 'wind'
                },{
                    id: 2,
                    text: 'sun'
                }]
            }
        }
    }
</script>

<style scoped>

</style>
