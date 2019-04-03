<template>
    <div>
        Cinema
        <CommonFooter :bottom-active="bottomActive"/>
    </div>
</template>

<script>
import CommonFooter from "@/components/common/CommonFooter"
export default {
    name:"Cinema",
    components:{
        CommonFooter
    },
    data(){
        return{
            bottomActive:1
        }
    }
}
</script>