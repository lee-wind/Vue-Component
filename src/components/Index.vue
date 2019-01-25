<template>
    <div class="index">
        <Pagination :current-page="currentPage" :page-size="pageSize"
                    :total="total" @page-change="pageChange"/>
        <Calendar></Calendar>
    </div>
</template>

<script>
    import Pagination from './common/pagination/Pagination'
    import Calendar from './common/calendar/Calendar'
    export default {
        name: "Index",
        components: {
            Pagination,
            Calendar
        },
        data(){
            return {
                total: 11,
                currentPage: 1,
                pageSize: 10,
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
