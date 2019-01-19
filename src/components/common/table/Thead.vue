<template>
    <thead>
        <tr>
            <th v-for="(item, index) in list" :key="index">
                {{item}}
            </th>
        </tr>
    </thead>
</template>

<script>
    export default {
        name: "Thead",
        props: {
            list: {

            }
        },
    }
</script>

<style scoped>

</style>
