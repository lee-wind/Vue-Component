<template>
    <div class="time" @click="stopPropagation($event)">
        <input type="text" :value="time" @focus="showTime" @input="updateTime($event)">
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
    import Bus from '@/bus'
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
                hours: [

                ],
                minutes: [

                ],
                seconds: [

                ],
                hour: '',
                minute: '',
                second: '',
                timeShow: false,
                hourShow: true,
                minuteShow: false,
                secondShow: false,
            }
        },
        created(){
            this.initTime();
            Bus.$on('hideTime', () => { //Time组件外其他元素点击隐藏Time组件
                if(this.timeShow){
                    console.log('隐藏时间');
                    this.close();
                }
            })
        },
        methods: {
            initTime(){
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
            showTime(){
                Bus.$emit('hideTime'); //通知其他Time组件下拉隐藏
                Bus.$emit('hideDate');
                Bus.$emit('hideSelectList');
                if(!this.timeShow){
                    this.timeShow = true;
                }
            },
            selectHour(hour){
                this.hourShow = false;
                this.minuteShow = true;
                this.$emit('change', hour + ':' + this.minute + ':' + this.second);
            },
            selectMinute(minute){
                this.minuteShow = false;
                this.secondShow = true;
                this.$emit('change', this.hour + ':' + minute + ':' + this.second);
            },
            selectSecond(second){
                this.second = second;
                this.$emit('change', this.hour + ':' + this.minute + ':' + second);
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
                this.$emit('change', this.hour + ':' + this.minute + ':' + this.second);
                this.reset();
                this.timeShow = false;
            },
            reset(){
                this.hourShow = true;
                this.minuteShow = false;
                this.secondShow = false;
            },
            format(text){
                return text < 10 ? ('0' + text) : text;
            },
            updateTime(event){
                let target = event.target || event.srcElement;
                this.$emit('change', target.value);
            },
            stopPropagation(event){
                event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
            }
        },
        watch: {
            time: {
                handler(newValue){
                    let date = new Date();
                    this.hour = newValue.substring(0, 2) ? newValue.substring(0, 2) : this.format(date.getHours());
                    this.minute = newValue.substring(3, 5) ? newValue.substring(3, 5) : this.format(date.getMinutes());
                    this.second = newValue.substring(6) ? newValue.substring(6) : this.format(date.getSeconds());
                },
                immediate: true
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
        position: relative;
        display: inline-block;
        width: calc((30px + 5px * 2) * 7 + 1px * 2);
        margin: 5px;
        input{
            width: 100%;
        }
        .time-container{
            position: absolute;
            border: 1px solid #eeeeee;
            font-size: 16px;
            z-index: 999;
            background-color: #ffffff;
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
