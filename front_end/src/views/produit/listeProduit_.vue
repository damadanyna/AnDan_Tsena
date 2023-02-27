<template>
<div class="flex h-full w-full flex-col">
    <div class="flex flex-col h-full  w-full"> 
        <div v-if="liste_img==null" class="w-full duration-700 max-h-full grid-cols-1 grid sm:grid-cols-2 sm:mb-14  xl:grid-cols-3 overflow-y-auto">
            <div v-for="k in  6" :key="k" class=" border opacity-100 border-gray-800  flex flex-col items-center justify-center py-3  duration-300 my-7 mx-8   ">
                <div class="teptep_  item-center block h-40 w-40 border border-black relative  bg-stone-600 ">
                </div>
                <div class="flex px-1 text-left w-full flex-col">
                    <span class="teptep_  bg-stone-600 w-28 h-6 mb-1 "></span>
                    <span class="teptep_  bg-stone-600 w-full h-3 mb-1 "></span>
                    <span class="teptep_  bg-stone-600 w-full h-3 mb-1 "></span>
                    <div class="flex text-left mt-3 flex-col">
                        <span class="teptep_  bg-stone-600 w-14 h-3 mb-1 "></span>
                        <span class="teptep_  bg-stone-600 w-14 h-5 mb-1 "></span>
                    </div>
                    <div>
                        <span class="teptep_  bg-stone-600 w-28 h-6 mb-1 "></span>
                     </div>
                </div>
            </div>
        </div>

        <div v-else class="w-full duration-700 max-h-full grid-cols-1 grid sm:grid-cols-2 sm:mb-14  xl:grid-cols-3 overflow-y-auto">
            <router-link :class="item.public?'border opacity-100 border-gray-800  hover:border-green-500 ':'border  hover:border-white border-gray-800  opacity-30'" :to="{name:'myProduct',query:{name:item.label},params:{id:i}}" v-for="item,i in  this.$store.state.listeProd_" :key="i" class=" flex flex-col items-center justify-center py-3  duration-300 my-7 mx-8   ">
                <div class="flex item-center h-40 w-40 border border-black relative teptep2_   ">
                    <img :src="require(`../../../../images/${item.img}`)" alt="" class="h-full w-auto">
                </div>
                <div class="flex px-1 text-left w-full flex-col">
                    <span class=" text-white font-bold" v-text="item.label"></span>
                    <span class=" text-gray-400 text-sm" v-text="item.description"></span>
                    <div class="flex text-left mt-3 flex-col">
                        <span class=" text-gray-400 text-sm" v-text="'à partir de'"></span>
                        <span class=" text-white font-bold" v-text="item.prix+' Ar'"></span>
                    </div>
                    <div>
                        <span v-if=" item.public" title="Disponible en vente" class=" bg-img-grad text-white px-3 rounded-sm" >Disponible</span>
                        <span v-else title="Ne pas disponible en vente" class=" bg-gray-500 text-white px-3 rounded-sm" >Disponible</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isLoad: true,
            liste_img: null
        }
    },
    components: {},
    methods: {},
    mounted() {
    },
    created(){
        setTimeout(() => {
            this.liste_img=this.$store.state.listeProd_
        }, 500);
    }
}
</script>

<style scoped>
img:hover {
    transform: scale(1.05);
    cursor: pointer;
}

img {
    position: relative;
    object-fit: cover;
    transition: .3s;
}

.teptep_ {
    animation: skeleton .3s ease-in-out infinite alternate;
}
@keyframes skeleton {
    to {
        opacity: 0.6;
    }
}
</style>
