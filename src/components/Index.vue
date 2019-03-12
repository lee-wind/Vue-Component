<template>
    <div class="index">
        <Pagination :current-page="currentPage" :page-size="pageSize"
                    :total="total" @page-change="pageChange"/>
        <p>日期：{{date}}</p>
        <Date v-model="date"></Date>
    </div>
</template>

<script>
    import Pagination from './common/pagination/Pagination'
    import Date from './common/calendar/Date'
    export default {
        name: "Index",
        components: {
            Pagination,
            Date
        },
        data(){
            return {
                total: 11,
                currentPage: 1,
                pageSize: 10,
                date: ''
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
