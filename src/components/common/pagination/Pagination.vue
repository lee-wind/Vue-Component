<template>
    <div class="pagination nowrap" v-if="hasData">
        <p>{{pages}}</p>
        <ul class="list clearfix">
            <li class="item">
                <a class="prev" @click="prev()">上一页</a>
            </li>
            <li class="item">
                <a :class="{ active: currentPage ===  firstPage }"
                   @click="selectPage(firstPage)">{{firstPage}}</a>
            </li>
            <li class="item" v-if="isLeftEllipsisShow">
                <a>左...</a>
            </li>
            <li class="item" v-for="page in pages">
                <a :class="{ active: currentPage === page }"
                   @click="selectPage(page)">{{page}}</a>
            </li>
            <li class="item" v-if="isRightEllipsisShow">
                <a>右...</a>
            </li>
            <li class="item" v-if="totalPage > 1">
                <a :class="{ active: currentPage ===  totalPage }"
                   @click="selectPage(totalPage)">{{totalPage}}</a>
            </li>
            <li class="item">
                <a class="next" @click="next()">下一页</a>
            </li>
        </ul>
        <form>
            <input type="text" v-model="formPage" oninput="value=value.replace(/[^\d]/g,'')">
            <span class="button" @click="searchByPage">搜索</span>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            total: {
                default: 0
            },
            currentPage: {
                default: 1
            },
            pageSize: {
                default: 10
            },
            pageNumber: {
                default: 10
            },
        },
        data(){
            return{
                firstPage: 1,
                formerPage: null,
                formPage: ''
                // pages: [
                //     1,2,3,44,555,6666,7,8
                // ],
            }
        },
        computed: {
            hasData(){
                return this.total > 0;
            },
            totalPage(){
                return Math.ceil(this.total / this.pageSize);
            },
            pages(){
                let start = 2;
                let end = null;
                if(!this.isOverPageNumber){
                    end = this.totalPage - 1;
                    return this.getPages(start, end);
                }
                if(!this.isLeftEllipsisShow){
                    end = this.pageNumber - 2;
                    return this.getPages(start, end);
                }
                if(!this.isRightEllipsisShow){
                    start = this.rightEllipsisValue;
                    end = this.totalPage - 1;
                    return this.getPages(start, end);
                }

                const formerStart = sessionStorage.getItem("formerStart") ? Number.parseInt(sessionStorage.getItem("formerStart")) : 0;
                const formerEnd = sessionStorage.getItem("formerEnd") ? Number.parseInt(sessionStorage.getItem("formerEnd")) : 0;
                if(formerStart < this.currentPage && this.currentPage <= formerEnd){
                    start = formerStart;
                    end = formerEnd;
                }else{
                    start = this.currentPage;
                    end = start  + (this.pageNumber - 5);
                }
                sessionStorage.setItem("formerStart", start);
                sessionStorage.setItem("formerEnd", end);
                return this.getPages(start, end);
            },
            isOverPageNumber(){
                return this.totalPage > this.pageNumber;
            },
            leftEllipsisValue(){
                return this.firstPage + 3;
            },
            rightEllipsisValue(){
                return this.totalPage - this.pageNumber + 3;
            },
            isLeftEllipsisShow(){
                return this.isOverPageNumber && this.currentPage >= this.leftEllipsisValue;
            },
            isRightEllipsisShow(){
                return this.isOverPageNumber && this.currentPage < this.rightEllipsisValue;
            },

        },
        methods: {
            selectPage(currentPage){
                //this.currentPage = currentPage;
                this.$emit('page-change', currentPage);
            },
            prev(){
                let currentPage = this.currentPage - 1;
                if(currentPage >= this.firstPage){
                    this.selectPage(currentPage);
                }
            },
            next(){
                let currentPage = this.currentPage + 1;
                if(currentPage <= this.totalPage){
                    this.selectPage(currentPage);
                }
            },
            searchByPage(){
                if(this.formPage){
                    let formPage = Number.parseInt(this.formPage);
                    if(formPage < 1 || formPage > this.totalPage){
                        return;
                    }
                    this.selectPage(formPage);
                    this.formPage = '';
                }
            },
            getPages(start, end){
                let pages = [];
                for(let i = start; i <= end; i++){
                    pages.push(i);
                }
                return pages;
            }
        }
    }
</script>

<style scoped lang="scss">
    .pagination{
        $radius: 3px;
        $border: 1px solid gray;
        $margin: 2px;
        $padding: 5px 10px;
        font-size: 16px;
        .list{
            display: inline-block;
            .item{
                margin: $margin;
                display: inline-block;
                a{
                    /*display: inline-block;*/
                    cursor: pointer;
                    padding: $padding;
                    border: $border;
                    border-radius: $radius;
                    &.active{
                        background-color: dodgerblue;
                        border: 1px solid dodgerblue;
                        color: #ffffff;
                    }
                    &.prev,&.next{
                        /*font-size: 13.5px;*/
                    }
                }
            }
        }
        form{
            display: inline-block;
            input{
                width: 50px;
                margin: $margin;
                padding: $padding;
                border: $border;
                border-radius: $radius;
                text-align: center;
            }
            input[type=button]{
                /*font-size: 13.5px;*/
            }
        }
    }
</style>
