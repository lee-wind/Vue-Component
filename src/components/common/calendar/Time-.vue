<template>
    <div class="time">
        <input type="text" v-model="timeText" @click="showTime">
        <div class="time-container" v-if="timeShow">
            <div class="hours" v-if="hourShow">
                <div class="header">
                    <p>时</p>
                </div>
                <ul class="list">
                    <li class="list-item" v-for="(text, i) in hours" :key="i"
                        :class="{ active: hour == text }"
                        @click="selectHour(text)">{{text}}</li>
                </ul>
                <div class="footer">
                    <span class="pointer" @click="close">确定</span>
                </div>
            </div>
            <div class="minutes" v-if="minuteShow">
                <div class="header clearfix">
                    <span class="float-left pointer" @click="toHour">时</span>
                    <p>分</p>
                </div>
                <ul class="list">
                    <li class="list-item" v-for="(text, i) in minutes" :key="i"
                        :class="{ active: minute == text }"
                        @click="selectMinute(text)">{{text}}</li>
                </ul>
                <div class="footer">
                    <span class="pointer" @click="close">确定</span>
                </div>
            </div>
            <div class="seconds" v-if="secondShow">
                <div class="header clearfix">
                    <span class="float-left pointer" @click="toMinute">分</span>
                    <p>秒</p>
                </div>
                <ul class="list">
                    <li class="list-item" v-for="(text, i) in seconds" :key="i"
                        :class="{ active: second == text }"
                        @click="selectSecond(text)">{{text}}</li>
                </ul>
                <div class="footer">
                    <span class="pointer" @click="close">确定</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Time",
        model: {
            prop: 'time',
            event: 'change'
        },
        props: {
            time: {
                default: '',
            }
        },
        data(){
            return{
                timeText: '',
                hours: [

                ],
                minutes: [

                ],
                seconds: [

                ],
                hour: '00',
                minute: '00',
                second: '00',
                timeShow: false,
                hourShow: true,
                minuteShow: false,
                secondShow: false,
            }
        },
        created(){
            this.initTime();
            this.setTimeText();
            for(let i = 0; i <=24; i++){
                if(i < 10){
                    this.hours.push('0' + i);
                    continue;
                }
                this.hours.push(i);
            }
            for(let i = 0; i <=60; i++){
                if(i < 10){
                    this.minutes.push('0' + i);
                    continue;
                }
                this.minutes.push(i);
            }
            for(let i = 0; i <=60; i++){
                if(i < 10){
                    this.seconds.push('0' + i);
                    continue;
                }
                this.seconds.push(i);
            }
        },
        methods: {
            initTime(){
                let date = new Date();
                console.log(this.time);
                if(this.time){
                    this.hour = this.time.substring(0, 2);
                    this.minute = this.time.substring(3, 5);
                    this.second = this.time.substring(6);
                }else{
                    this.hour = this.format(date.getHours());
                    this.minute = this.format(date.getMinutes());
                    this.second = this.format(date.getSeconds());
                }
            },
            showTime(){
                this.timeShow = true;
                if(!this.time){
                    this.initTime();
                }
            },
            selectHour(hour){
                this.hour = hour;
                this.hourShow = false;
                this.minuteShow = true;
                this.setTimeText();
            },
            selectMinute(minute){
                this.minute = minute;
                this.minuteShow = false;
                this.secondShow = true;
                this.setTimeText();
            },
            selectSecond(second){
                this.second = second;
                this.setTimeText();
            },
            toHour(){
                this.minuteShow = false;
                this.hourShow = true;
            },
            toMinute(){
                this.secondShow = false;
                this.minuteShow = true;
            },
            close(){
                this.timeShow = false;
                this.reset();
            },
            reset(){
                this.hour = true;
                this.minute = false;
                this.second = false;
            },
            setTimeText(){
                this.timeText = this.hour + ':' + this.minute + ':' + this.second;
            },
            format(text){
                return text < 10 ? ('0' + text) : text;
            }
        },
        watch: {
            timeText(newValue){
               this.$emit('change', newValue);
            },
            
        }
    }
</script>

<style scoped lang="scss">
    .hours, .minutes, .seconds{
        /*width: calc((40px + 5px * 2) * 7 + 1px * 2);*/
        /*margin: 5px;*/
        /*border: 1px solid #eeeeee;*/
    }
    .time{
        margin: 5px;
        .time-container{
            width: calc((30px + 5px * 2) * 7 + 1px * 2);
            border: 1px solid #eeeeee;
            font-size: 16px;
            .header{
                p{
                    text-align: center;
                }
            }
            .list{
                //font-size: 0;
                $baseWidth: 30px;
                .list-item{
                    width: $baseWidth;
                    height: $baseWidth;
                    text-align: center;
                    line-height: $baseWidth;
                    margin: 5px;
                    //font-size: 24px;
                    display: inline-block;
                    cursor: pointer;
                    border-radius: 50%;
                    //border: 1px solid #1e90ff;
                    &:hover{
                        background-color: pink;
                        color: #ffffff;
                    }
                    &.active{
                        background-color: pink;
                        color: #ffffff;
                    }
                }
            }
            .footer{
                text-align: right;
            }
        }
    }
</style>
