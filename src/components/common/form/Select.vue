<template>
    <div class="select">
        <!--{{list}}-->
        <div class="select-box">
            <p class="text">{{selected | filterValue(list, id, value)}}</p>
            <span class="icon"></span>
        </div>
        <ul class="select-list" v-for="(item, i) in list" :key="i">
            <li class="select-item" @click="selectKey(item[id])">
                {{item[value]}}
            </li>
        </ul>
    </div>
</template>

<script>
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
        methods: {
            selectKey(id){
                this.$emit('change', id)
            }
        },
        filters: {
            filterValue(selected, list, id, value){
                let result = list.find(item => {
                    console.log(item);
                   return item[id] === selected
                });
                console.log(result);
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
        .select-box{

        }
    }
</style>
