<template>
    <div>
        我的
        <CommonFooter :bottom-active="bottomActive"/>
    </div>
</template>
<script>
import CommonFooter from "@/components/common/CommonFooter"
export default {
    name:'My',
    components:{
        CommonFooter
    },
    data(){
        return{
            bottomActive:3
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
