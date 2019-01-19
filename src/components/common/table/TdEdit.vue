<template>
    <td class="td-edit">
        <div ref="text" class="text" v-if="!editShow">
            <More v-if="ellipsis" :text="value"></More>
            <p ref="ellipsis" class="ellipsis text-ellipsis" style="white-space: nowrap" :class="{
                    'text-ellipsis': ellipsis,
                    'inline-block': !ellipsis,
                    'block': ellipsis
                }"
               @click="editShow = true">{{value}}</p>
        </div>
        <div class="edit" v-if="editShow">
            <input type="text" v-model="model">
            <button @click="confirm">勾</button>
            <button @click="cancel">删</button>
        </div>
    </td>
</template>

<script>
    import More from './More'
    export default {
        name: "TdEdit",
        props: [
            'object',
            'name',
            'value'
        ],
        components: {
            More
        },
        data(){
            return {
                editShow: false,
                ellipsis: false,
                model: this.value
            }
        },
        created(){
            this.$nextTick(() => {
                this.ellipsisText();
            })
        },
        methods: {
            ellipsisText(){
                const text = this.$refs.text;
                const ellipsis = this.$refs.ellipsis;
                console.log(ellipsis.clientWidth);
                console.log(text.clientWidth);
                this.ellipsis = ellipsis.offsetWidth > text.clientWidth;
            },
            cancel(){
                this.model = this.value;
                this.editShow = false;
            },
            confirm(){
                this.$emit('updateValue',
                    this.object, this.name, this.model
                );
                this.editShow = false
            },
            showMore(){
                this.$modal('')
            }
        },
        watch: {
            value(){
                this.$nextTick(() => {
                    this.ellipsisText();
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .td-edit{
        /*.text, .edit{*/
            /*width: 100%;*/
        /*}*/
        .text{
            .ellipsis{

            }
            .more{
                color: dodgerblue;
            }
        }
        .edit{

        }
        input{
            width: 100%;
        }
    }
</style>
