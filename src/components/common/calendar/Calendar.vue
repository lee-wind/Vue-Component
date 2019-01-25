<template>
    <div class="calendar">
        <div class="header">

        </div>
        <ul class="list">
            <li>日</li>
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
        </ul>
        <ul class="list">

        </ul>
    </div>
</template>

<script>
    export default {
        name: "Calendar",
        data(){
            return{
                date: []
            }
        },
        created(){
            this.getDate();
        },
        methods: {
            getDate(){
                const currentDate = new Date();
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const date = currentDate.getDate();
                console.log(year);
                console.log(month);
                console.log(date);
            },
            fillDate(year, month){
                const firstDay = new Date(year, month, 1).getDay(); //当月第一天星期几
                const lastDay = new Date(year, month + 1, 0).getDate(); //当月最后一天星期几

            }
        }
    }
</script>

<style scoped lang="scss">
    .calendar{
        .header{

        }
        .list{
            li{
                display: inline-block;
            }
        }
    }
</style>
