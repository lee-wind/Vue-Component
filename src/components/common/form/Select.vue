<template>
    <div class="select" @click="stopPropagation">
        <!--{{list}}-->
        <div class="select-box" @click="showSelectList">
            <p class="text">{{selected | filterValue(list, id, value)}}</p>
            <!--<input type="text" :value="selected | filterValue(list, id, value)" readonly>-->
            <span class="icon"></span>
        </div>
        <ul class="select-list" v-if="selectListShow">
            <li class="select-item" v-for="(item, i) in list" :key="i"
                @click="selectKey(item[id])">
                {{item[value]}}
            </li>
        </ul>
    </div>
</template>

<script>
    import Bus from '@/bus'
    export default {
        name: "Select",
        model: {
            prop: 'selected',
            event: 'change'
        },
        props: {
            selected: '',
            list: {
                default(){
                    return [];
                }
            },
            id: '',
            value: ''
        },
        created(){
            Bus.$on('hideSelectList', (obj) => {
                // if(this.selfClick){
                //     console.log('隐藏select组件');
                //     this.selectListShow = false;
                // }
                console.log(obj === this)
                if(obj !== this){
                    console.log('隐藏select组件');
                    this.selectListShow = false;
                }
            })
        },
        data(){
            return {
                selectListShow: false,
            }
        },
        methods: {
            selectKey(id){
                this.$emit('change', id);
                this.close()
            },
            showSelectList(){
                Bus.$emit('hideTime');
                Bus.$emit('hideDate');
                Bus.$emit('hideSelectList', this);
                //console.log(this.selectListShow);
                this.selectListShow = !this.selectListShow;
                // if(!this.selectListShow){
                //     this.selectListShow = true;
                // }
            },
            stopPropagation(event){
                event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
                //let target = event.target || event.srcElement;
            },
            close(){
                this.selectListShow = false;
            }
        },
        filters: {
            filterValue(selected, list, id, value){
                let result = list.find(item => {
                    //console.log(item);
                   return item[id] === selected
                });
               // console.log(result);
                if(result){
                    return result[value];
                }
                return '';
            }
        }
    }
</script>

<style scoped lang="scss">
    .select{
        width: 300px;
        position: relative;
        font-size: 30px;
        $paddingWidth: 5px;
        .select-box{
            position: relative;
            height: 50px;
            cursor: pointer;
            p{
                height: 50px;
                line-height: 50px;
                padding-right: 50px;
                padding-left: $paddingWidth;
                border: 1px solid grey;
            }
            .icon{
                position: absolute;
                /*display: inline-block;*/
                vertical-align: middle;
                width: 50px;
                height: 50px;
                top: 0;
                right: 0;
                /*border: 1px solid grey;*/
                &:after{
                    position: absolute;
                    content: '';
                    /*width: 25px;*/
                    /*height: 25px;*/
                    width: 0;
                    height: 0;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    vertical-align: middle;
                    /*background-color: pink;*/
                    border-top: 20px solid grey;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                }
            }
        }
        .select-list{
            position: absolute;
            width: 100%;
            z-index: 999;
            background-color: #ffffff;
            .select-item{
                padding: $paddingWidth;
                height: 50px;
                cursor: pointer;
                border-right: 1px solid grey;
                border-bottom: 1px solid grey;
                border-left: 1px solid grey;
                &:hover{
                    color: #ffffff;
                    background-color: dodgerblue;
                    border-right: 1px solid dodgerblue;
                    border-bottom: 1px solid dodgerblue;
                    border-left: 1px solid dodgerblue;
                }
            }
        }
    }
</style>
