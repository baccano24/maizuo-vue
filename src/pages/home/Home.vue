<template>
    <div>
        <Lunbotu class="lunbotu"/>
        <NavMenu :actived-menu-index="activedMenuIndex" @change="changeActiveMenuIndex"/>
        <MovieContent :menu-index="activedMenuIndex"/>
        <CommonFooter />
    </div>
</template>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import NavMenu from "./components/NavMenu"
import Lunbotu from "@/components/common/Lunbotu"
import MovieContent from "@/components/common/MovieContent";
import CommonFooter from "@/components/common/CommonFooter"
export default {
    name:"Home",
    components:{
        Lunbotu,
        NavMenu,
        MovieContent,
        CommonFooter
    },
    data(){
        return{
            activedMenuIndex:0
        }
    },
    methods: {
        changeActiveMenuIndex(index){
            this.activedMenuIndex=index
        }
    },
}
</script>

<style lang="stylus" scoped>
.lunbotu{
    height 200px;
}
</style>
