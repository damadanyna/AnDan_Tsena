<template>
<div class=" fixed top-0 left-0  my_bg2 w-full  h-full flex justify-center items-center" style="z-index:100">
        <div v-if="typeIs=='publication'" class=" rounded-lg  bg-white flex flex-col ">
            <span class=" h-3 rounded-t-lg bg-stone-600 "></span> 
            <div class=" text-xl px-7 py-3">Vendre ce produit en public ?</div>
            <div class=" flex pb-1 px-4  w-full justify-end"> 
                <button  @click="$store.state.showFrame==true?$store.state.showFrame=false:$store.state.showFrame=true" class=" outline-green-900  focus:border-stone-500 mr-5 bg-img-grad px-3 rounded-md text-white">Annuler</button>
                <button class="  rounded-md text-white bg-stone-500 outline-green-900 px-3 focus:border-stone-500 " >Oui</button>
            </div>
        </div>
</div>
</template>

<script>
export default {
    props: {
        typeIs: {}
    },
    mounted() { 
    }
}
</script>

<style scoped>

</style>
