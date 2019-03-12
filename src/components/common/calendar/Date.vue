<template>
    <div class="date">
        <input type="text" :value="dateText">
        <div class="calendar">
            <div class="header clearfix">
                <span class="float-left pointer" @click="toPrevMonth">上月</span>
                <span class="float-right pointer" @click="toNextMonth">下月</span>
                <p class="text-center">{{year}}年{{month + 1}}月</p>
            </div>
            <ul class="day-list">
                <li>日</li>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
            </ul>
            <ul class="date-list">
                <li class="prev-month-date" v-for="i in prevMonthDate"
                    :class="{ active: date === i && dateArea === 'prevMonthDate'}"
                    @click="selectDate(i, 'prevMonthDate')">{{i}}</li>
                <li class="current-month-date" v-for="i in currentMonthDate"
                    :class="{ active: date === i && dateArea === 'currentMonthDate'}"
                    @click="selectDate(i, 'currentMonthDate')">{{i}}</li>
                <li class="next-month-date" v-for="i in nextMonthDate"
                    :class="{ active: date === i && dateArea === 'nextMonthDate'}"
                    @click="selectDate(i, 'nextMonthDate')">{{i}}</li>
            </ul>
            <!--<p>{{prevMonthDate}}</p>-->
            <!--<p>{{currentMonthDate}}</p>-->
            <!--<p>{{nextMonthDate}}</p>-->
        </div>
    </div>
</template>

<script>
    import Input from '../form/Input'
    export default {
        name: "Date",
        model: {
            prop: 'selectedDate',
            event: 'change'
        },
        props: {
            selectedDate: {
                default: ''
            }
        },
        data(){
            return {
                year: '',
                month: '',
                date: '',
                dateArea: '',
                dateText: '',
                prevMonthDate: [],
                currentMonthDate: [],
                nextMonthDate: [],
            }
        },
        created(){
            this.init();
        },
        methods: {
            init(){
                const currentDate = new Date();
                this.year = currentDate.getFullYear();
                this.month = currentDate.getMonth();
                this.date = currentDate.getDate();
                this.dateArea = 'currentMonthDate';
                this.fillDate(this.year, this.month);
            },
            fillDate(year, month){
                this.reset();
                const firstDay = new Date(year, month, 1).getDay(); //当月第一天星期几
                const lastDate = new Date(year, month + 1, 0).getDate(); //当月最后一天星期几
                const formerMonthLastDate = new Date(year, month, 0).getDate();
                console.log(firstDay);
                console.log(lastDate);
                console.log(formerMonthLastDate);
                let prevMonthDateLength = firstDay === 0 ? 7 : firstDay - 1;
                for(let i = formerMonthLastDate - prevMonthDateLength;
                    i <= formerMonthLastDate; i++){
                    this.prevMonthDate.push(i);
                }
                for(let i = 1; i <= lastDate; i++){
                    this.currentMonthDate.push(i);
                }
                let nextMonthLength = 42 - prevMonthDateLength - lastDate;
                for(let i = 1; i < nextMonthLength; i++){
                    this.nextMonthDate.push(i);
                }

                this.dateText = this.year + '-' + (this.month + 1) + '-' + this.date;
            },
            toPrevMonth(){
                if(this.month - 1 < 0){
                     this.month = 11;
                     this.year--;
                }else{
                    this.month --;
                }
                this.dateArea = 'currentMonthDate';
                this.fillDate(this.year, this.month);
            },
            toNextMonth(){
                if(this.month + 1 > 11){
                    this.month = 0;
                    this.year++;
                }else{
                    this.month ++;
                }
                this.dateArea = 'currentMonthDate';
                this.fillDate(this.year, this.month);
            },
            selectDate(date, dateArea){
                this.date = date;
                this.dateArea = dateArea;
                this.dateText = this.year + '-' + (this.month + 1) + '-' + this.date;
            },
            reset(){
                this.prevMonthDate = [];
                this.currentMonthDate = [];
                this.nextMonthDate = [];
            },
            change($event){
                console.log($event.target);

            }
        },
        watch: {
            dateText(newVal){
                this.$emit('change', newVal);
            }
        }
    }
</script>

<style scoped lang="scss">
    .calendar{
        $base-width: 40px;
        $margin: 5px;
        width: calc((40px + 5px * 2) * 7 + 1px * 2);
        border: 1px solid #eeeeee;
        margin: 5px;
        .header{

        }
        ul{
            overflow: auto;
            li{
                float: left;
                width: $base-width;
                height: $base-width;
                line-height: $base-width;
                margin: $margin;
                text-align: center;
                /*background-color: pink;*/
                &.prev-month-date, &.next-month-date{
                    color: grey;
                }
            }
            &.date-list{
                li{
                    border-radius: 50%;
                    cursor: pointer;
                    &.active{
                        color: #ffffff;
                        background-color: pink;
                    }
                    &:hover{
                        color: #ffffff;
                        background-color: pink;
                    }
                }
            }
        }
    }
</style>
