<template>
<div class=" flex flex-row justify-center items-center absolute my_bg2 z-50 top-0 left-0 " style=" height: 100%; width: 100%;">
  <personal v-if=" this.$store.state.show_form[1]=='perso'"></personal>
  <socieaux v-else></socieaux>
</div>
</template>

<script>
import personal from './formulaire/personal_.vue'
import socieaux from './formulaire/social_.vue'
export default {
    components:{
        personal,
        socieaux
    }
}
</script>

<style>

</style>
