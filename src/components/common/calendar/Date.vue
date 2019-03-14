<template>
    <div class="date" ref="date" @click="stopPropagation($event)">
        <!--{{dateArea}}-->
        <input type="text" :value="selectedDate" @focus="showDate" @input="updateDate($event)">
        <div class="calendar" v-if="dateShow">
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
            <div class="footer text-right">
                <button @click="close">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Bus from '@/bus';
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
                dateArea: 'currentMonthDate',
                prevMonthDate: [],
                currentMonthDate: [],
                nextMonthDate: [],
                dateShow: false,
            }
        },
        created(){
            this.init();
            Bus.$on('hideDate', () => {  //Date组件外元素点击隐藏Date组件
                // console.log(this.$el);
                // console.log(event.target);
                if(this.dateShow){
                    console.log('隐藏Date组件');
                    this.close();
                }
            })
        },
        methods: {
            init(){
                // const currentDate = new Date();
                // this.year = currentDate.getFullYear();
                // this.month = currentDate.getMonth();
                // this.date = currentDate.getDate();
                this.fillDate(this.year, this.month);
            },
            fillDate(year, month){
                this.reset();
                const firstDay = new Date(year, month, 1).getDay(); //当月第一天星期几
                const lastDay = new Date(year, month + 1, 0).getDate(); //当月最后一天星期几
                const formerMonthLastDate = new Date(year, month, 0).getDate();
                //console.log(firstDay);
                //console.log(lastDay);
                //console.log(formerMonthLastDate);
                let prevMonthDateLength = firstDay === 0 ? 7 : firstDay - 1;
                for(let i = formerMonthLastDate - prevMonthDateLength;
                    i <= formerMonthLastDate; i++){
                    this.prevMonthDate.push(i);
                }
                for(let i = 1; i <= lastDay; i++){
                    this.currentMonthDate.push(i);
                }
                let nextMonthLength = 42 - prevMonthDateLength - lastDay;
                for(let i = 1; i < nextMonthLength; i++){
                    this.nextMonthDate.push(i);
                }
                //this.$emit('change', this.year + '-' + this.format(this.month + 1) + '-' + this.format(this.date));
                //this.dateText = this.year + '-' + (this.month + 1) + '-' + this.date;
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
                this.$emit('change', this.year + '-' + this.format(this.month + 1) + '-' + this.format(this.date));
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
                this.$emit('change', this.year + '-' + this.format(this.month + 1) + '-' + this.format(this.date));
            },
            selectDate(date, dateArea){
                this.date = date;
                switch (dateArea) {
                    case 'prevMonthDate':
                        this.toPrevMonth();
                        break;
                    case 'nextMonthDate':
                        this.toNextMonth();
                        break;
                    default:
                        this.dateArea = dateArea;
                        this.fillDate(this.year, this.month);
                        this.$emit('change', this.year + '-' + this.format(this.month + 1) + '-' + this.format(this.date));
                }
            },
            reset(){
                this.prevMonthDate = [];
                this.currentMonthDate = [];
                this.nextMonthDate = [];
            },
            showDate(){
                Bus.$emit('hideDate'); //通知其他Date组件下拉隐藏
                Bus.$emit('hideTime');
                if(!this.dateShow){
                    this.dateShow = true;
                }
            },
            updateDate(event){
                let target = event.target || event.srcElement;
                console.log(target.value);
            },
            format(text){
                return text < 10 ? ('0' + text) : text;
            },
            close(){
                this.$emit('change', this.year + '-' + this.format(this.month + 1) + '-' + this.format(this.date));
                this.dateShow = false;
            },
            stopPropagation(event){
                event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
            }
        },
        watch: {
            selectedDate: {
                handler(newValue, oldValue){
                    console.log(newValue);
                    console.log(oldValue);
                    const currentDate = new Date();
                    this.year = newValue.substring(0, 4)
                        ? Number.parseInt(newValue.substring(0, 4)) : currentDate.getFullYear();
                    this.month = newValue.substring(5, 7)
                        ? Number.parseInt(newValue.substring(5, 7)) - 1 : currentDate.getMonth();
                    this.date = newValue.substring(8)
                        ? Number.parseInt(newValue.substring(8)) : currentDate.getDate();
                },
                immediate: true
            },
        }
    }
</script>

<style scoped lang="scss">
    .date{
        position: relative;
        display: inline-block;
        width: calc((40px + 5px * 2) * 7 + 1px * 2);
        input{
            width: 100%;
        }
        .calendar{
            position: absolute;
            width: 100%;
            $base-width: 40px;
            $margin: 5px;
            border: 1px solid #eeeeee;
            background-color: #ffffff;
            z-index: 999;
            /*margin: 5px;*/
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
    }
</style>
