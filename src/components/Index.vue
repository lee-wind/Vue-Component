<template>
    <div class="index">
        <Pagination :current-page="currentPage" :page-size="pageSize"
                    :total="total" @page-change="pageChange"/>
        <p>日期：{{date}}</p>
        <!--<Date v-model="date"></Date>-->
        <p>时间：{{time}}</p>
        <Time v-model="time"></Time>
    </div>
</template>

<script>
    import Pagination from './common/pagination/Pagination'
    import Date from './common/calendar/Date'
    import Time from './common/calendar/Time'
    export default {
        name: "Index",
        components: {
            Pagination,
            Date,
            Time,
        },
        data(){
            return {
                total: 11,
                currentPage: 1,
                pageSize: 10,
                date: '',
                time: '14:09:08'
            }
        },
        methods: {
            pageChange(page){
                console.log(page);
                this.currentPage = page;
            }
        }
    }
</script>

<style scoped>

</style>
