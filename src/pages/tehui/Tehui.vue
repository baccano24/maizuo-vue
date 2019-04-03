<template>
    <div>
        特惠
        <CommonFooter :bottom-active="bottomActive"/>
    </div>
</template>
<script>
import CommonFooter from "@/components/common/CommonFooter"
export default {
    name:'tehui',
    components:{
        CommonFooter
    },
    data(){
        return{
            bottomActive:2
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
