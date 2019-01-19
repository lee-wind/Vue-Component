<template>
    <td>
        <div class="text" ref="text">
            <p ref="raw" :class="{
                'inline-block': !ellipsis,
                'block': ellipsis,
                'nowrap': nowrap
            }">{{text}}</p>
            <div v-if="ellipsis" style="overflow: auto">
                <More v-if="ellipsis" :title="title" :text="text"></More>
                <!--<span class="more float-right" v-if="ellipsis" @click="showMore">更多</span>-->
                <p ref="ellipsis" style="white-space: nowrap" class="text-ellipsis"></p>
            </div>
        </div>
    </td>
</template>

<script>
    import More from './More'
    export default {
        name: "Td",
        props: [
            'title',
            'text'
        ],
        components: {
            More
        },
        data(){
            return {
                ellipsis: false,
                nowrap: true,
            }
        },
        created(){
            this.$nextTick(() => {
                this.textEllipsis();
            })
        },
        methods: {
            textEllipsis(){
                const textEl = this.$refs.text;
                const rawEl = this.$refs.raw;
                if(rawEl.clientWidth > textEl.clientWidth * 2){
                    let index = 0;
                    this.ellipsis = true;
                    for(let i = 0; i < this.text.length; i++){
                        rawEl.innerHTML = this.text.substring(0, i);
                        if(rawEl.clientWidth > textEl.clientWidth){
                            index = i - 1;
                            break;
                        }
                    }
                    rawEl.innerHTML = this.text.substring(0, index);
                    this.$nextTick(() => {
                        const ellipsisEl = this.$refs.ellipsis;
                        console.log(ellipsisEl);
                        console.log("省略: " + this.text.substring(index));
                        ellipsisEl.innerHTML = this.text.substring(index);
                    })
                }else{
                    this.ellipsis = false;
                }
                this.nowrap = false;
            },
        }
    }
</script>

<style scoped lang="scss">
    td{
        padding: 5px;
    }
    .nowrap{
        white-space: nowrap;
    }
</style>
