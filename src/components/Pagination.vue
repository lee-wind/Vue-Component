<template>
    <div class="pagination">
        {{pages}}
        <ul class="list">
            <li class="item">
                <a class="prev" @click="prev()">上一页</a>
            </li>
            <li class="item">
                <a :class="{ active: currentPage ===  firstPage }"
                   @click="selectPage(firstPage)">{{firstPage}}</a>
            </li>
            <li class="item" v-if="isLeftEllipsisShow">
                <a>...</a>
            </li>
            <li class="item" v-for="page in pages">
                <a :class="{ active: currentPage === page }"
                   @click="selectPage(page)">{{page}}</a>
            </li>
            <li class="item" v-if="isRightEllipsisShow">
                <a>...</a>
            </li>
            <li class="item">
                <a :class="{ active: currentPage ===  totalPage }"
                   @click="selectPage(totalPage)">{{totalPage}}</a>
            </li>
            <li class="item">
                <a class="next" @click="next()">下一页</a>
            </li>
        </ul>
        <form>
            <input type="text" v-model="formPage" oninput="value=value.replace(/[^\d]/g,'')">
            <input type="button" value="搜索" @click="searchByPage">
        </form>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        data(){
            return{
                total: 402,
                currentPage: 1,
                pageSize: 10,
                pageNumber: 10,
                firstPage: 1,
                formerPage: null,
                formPage: ''
                // pages: [
                //     1,2,3,44,555,6666,7,8
                // ],
            }
        },
        computed: {
            totalPage(){
                return Math.ceil(this.total / this.pageSize);
            },
            pages(){
                let pages = [];
                let start = 2;
                let end = null;
                let actualPageNumber = this.pageNumber - 2;
                if(this.isOnlyRightEllipsisShow){
                    end = actualPageNumber;
                }
                // if(this.isRightEllipsisShow){
                //     actualPageNumber--;
                //     end = this.rightEllipsisValue;
                // }
                // if(this.isLeftEllipsisShow){
                //     actualPageNumber--;
                //     start = this.leftEllipsisValue;
                // }
                //end = start + actualPageNumber;
                console.log(start);
                console.log(end);
                //console.log(actualPageNumber);
                for(let i = start; i <= end; i++){
                    pages.push(i);
                }
                return pages;
            },
            leftEllipsisValue(){
                return this.firstPage + 3;
            },
            rightEllipsisValue(){
                return this.totalPage - 3;
            },
            isLeftEllipsisShow(){
                return this.currentPage >= this.leftEllipsisValue;
            },
            isRightEllipsisShow(){
                return this.currentPage <= this.rightEllipsisValue;
            },
            isOnlyLeftEllipsisShow(){
                return this.currentPage > this.totalPage - this.pageNumber - 2;
            },
            isOnlyRightEllipsisShow(){
                return this.currentPage < this.pageNumber - 2;
            }

        },
        methods: {
            selectPage(currentPage){
                this.currentPage = currentPage;
            },
            prev(){
                let currentPage = this.currentPage - 1;
                if(currentPage > this.firstPage){
                    this.selectPage(currentPage);
                }
            },
            next(){
                let currentPage = this.currentPage + 1;
                if(currentPage < this.totalPage){
                    this.selectPage(currentPage);
                }
            },
            searchByPage(){
                if(this.formPage){
                    this.selectPage(this.formPage);
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    .pagination{
        $radius: 3px;
        $border: 1px solid gray;
        $margin: 2px;
        $padding: 5px 10px;
        .list{
            display: flex;
            flex-wrap: wrap;
            .item{
                margin: $margin;
                a{
                    display: inline-block;
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
                        font-size: 13.5px;
                    }
                }
            }
        }
        form{
            display: flex;
            input{
                width: 50px;
                margin: $margin;
                padding: $padding;
                border: $border;
                border-radius: $radius;
                text-align: center;
            }
            input[type=button]{
                font-size: 13.5px;
            }
        }
    }
</style>
