<template>
<div class="absolute z-20 left-0 flex w-full flex-col overflow-y-auto sm:overflow-hidden" style=" width:100%;height:92%" :class="this.$store.state.theme_dark?'bg-gray ':''">
    <div class="flex flex-col">
        <span class=" py-3 sm:py-0 text-green-400 " v-text="isFull?'Vue en mode Public':'Mode Edition'"> </span>
    </div>
    <div class=" absolute group right-4" @click="$router.go(-1)">
        <svg class=" w-9" viewBox="0 0 24 24">
            <path class=" fill-current text-green-700  duration-300 group-hover:text-white" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
    </div>
    <div :class="isFull?' justify-start  sm:justify-center':'mt-2'" class=" sm:mt-0 flex-col sm:flex-row h-full flex w-full   ">
        <div :class="isFull?' w-full':' w-full sm:w-2/3'" class=" flex flex-col sm:flex-row-reverse sm:justify-center h-full ">
            <div :class="isFull?' sm:justify-center':' sm:p-6 sm:pl-8 justify-start'" class=" flex flex-row w-full">
                <img :src="require(`../../../../images/${this.$store.state.listeProd_[$route.params.id].moreImg[indexImg]}`)" alt="" style="object:cover" class="h-full w-auto sm:pb-3">
                <div :class="isFull?'right-3 mt-3':'right-3 mt-3 sm:right-auto '" @click="isFull==true?isFull=false:isFull=true" class=" absolute  border border-white my_bg2">
                    <div class="mr-2 flex flex-row items-center">
                        <span v-text="isFull?'Retour':'Voire' " class=" mr-1 text-xs text-white"></span>
                        <svg v-if="!isFull" class=" fill-current text-white w-7" viewBox="0 0 24 24">
                            <path d="M5 5h5v2H7v3H5V5m9 0h5v5h-2V7h-3V5m3 9h2v5h-5v-2h3v-3m-7 3v2H5v-5h2v3h3z" /></svg>
                        <svg v-else class=" fill-current text-white w-7" viewBox="0 0 24 24">
                            <path d="M14 14h5v2h-3v3h-2v-5m-9 0h5v5H8v-3H5v-2m3-9h2v5H5V8h3V5m11 3v2h-5V5h2v3h3z" /></svg>
                    </div>
                </div>

                <input class="hidden" @change="change_files()" type="file" name="images" id="img_prod">
                <label for="img_prod" :class="isFull?'right-3 mt-14':'right-3 sm:right-auto mt-14'" class="absolute border border-white my_bg2">
                    <div class=" flex flex-row items-center  py-1  pr-3 ">
                        <span v-text="'Editer' " class=" mr-1 text-xs text-white"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5" viewBox="0 0 24 24" fill="#fff ">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z" /></svg>
                    </div>
                </label>
            </div>
            <div class="absolute my_bg2 sm:bg-transparent rounded-r-lg sm:border-none  flex-col flex sm:flex-col   sm:static  sm:left-1 max-h-full overflow-y-auto overflow-x-hidden">
                <div @click="indexImg=i" class=" mx-1 sm:mx-0 cursor-pointer mt-5 flex flex-row" v-for="item, i in this.$store.state.listeProd_[$route.params.id].moreImg" :key="i">
                    <img :class="indexImg==i?' border-green-400':' border-gray-500 sm:border-transparent opacity-70 sm:opacity-40'" :src="require(`../../../../images/${item}`)" alt="" class="border-2  w-10 h-10 ">
                    <div class=" hidden sm:flex p-2">

                        <label v-if="!isFull" for="img_prod">
                                <svg xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5" viewBox="0 0 24 24" fill="#fff ">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z" /></svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isFull" class=" absolute border border-gray-500 duration-500 bottom-0 flex w-full  sm:w-4/5 my_bg2 py-5 flex-row">
            <div class="flex px-4 flex-row justify-start w-full">
                <div class=" w-3/4">
                    <div class="flex flex-row">
                        <span class=" block mt-5 mr-3 bg-img-grad w-2 h-2"></span>
                        <span class=" text-white text-3xl font-bold" v-text="this.$store.state.listeProd_[$route.params.id].label"></span>
                    </div>
                    <div class="flex flex-row w-full">
                        <div class="flex w-full">
                            <span class=" text-gray-400 text-base " v-text="this.$store.state.listeProd_[$route.params.id].detail"></span>
                        </div>
                    </div>
                    <div class=" mt-2">
                        <span class="py-1 rounded-lg font-bold text-xl text-white" v-text="this.$store.state.listeProd_[$route.params.id].prix+' Ar'"></span>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!isFull" class=" w-full sm:w-1/2 flex h-full  right-1 bg-stone-900 px-5 flex-col">
            <div class="flex flex-col justify-start w-full">
                <div class="flex flex-col">
                    <span class=" text-green-700">1. Nom du produit mis en vente</span>
                    <div class="flex w-full border-b border-b-gray-500  justify-between flex-row">
                        <div class=" flex flex-row">
                            <span class=" block mt-5 mr-3 bg-img-grad w-2 h-2"></span>
                            <span class=" text-white text-3xl font-bold" v-text="this.$store.state.listeProd_[$route.params.id].label"></span>
                        </div>
                        <svg class=" ml-3 fill-current text-white w-5" viewBox="0 0 24 24">
                            <path d="M20.7 7c-.3.4-.7.7-.7 1 0 .3.3.6.6 1 .5.5 1 .9.9 1.4 0 .5-.5 1-1 1.5L16.4 16 15 14.7l4.2-4.2-1-1-1.4 1.4L13 7.1l4-3.8c.4-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1.1 0 1.4M3 17.2l9.6-9.6 3.7 3.8L6.8 21H3v-3.8M7 2v3h3v2H7v3H5V7H2V5h3V2h2z" /></svg>
                    </div>
                </div>
                <div class="flex flex-col w-full mt-3">
                    <span class=" text-green-700">2. Déscription</span>
                    <div class="flex flex-row border-b border-b-gray-500">
                        <div class="flex flex-row justify-between w-full ">
                            <div class="flex">
                                <span class=" text-gray-400 text-base " v-text="this.$store.state.listeProd_[$route.params.id].detail"></span>
                            </div>
                            <svg class=" ml-3 fill-current text-white w-5" viewBox="0 0 24 24">
                                <path d="M20.7 7c-.3.4-.7.7-.7 1 0 .3.3.6.6 1 .5.5 1 .9.9 1.4 0 .5-.5 1-1 1.5L16.4 16 15 14.7l4.2-4.2-1-1-1.4 1.4L13 7.1l4-3.8c.4-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1.1 0 1.4M3 17.2l9.6-9.6 3.7 3.8L6.8 21H3v-3.8M7 2v3h3v2H7v3H5V7H2V5h3V2h2z" /></svg>
                        </div>
                    </div>
                </div>
                <div class=" mt-3">
                    <span class=" text-green-700">3. Prix ArTTC</span>
                    <div class="flex justify-between flex-row border-b border-b-gray-500">
                        <span class="  py-1 rounded-lg font-bold text-xl text-white  " v-text="this.$store.state.listeProd_[$route.params.id].prix+' Ar'"></span>
                        <svg class=" ml-3 fill-current text-white w-5" viewBox="0 0 24 24">
                            <path d="M20.7 7c-.3.4-.7.7-.7 1 0 .3.3.6.6 1 .5.5 1 .9.9 1.4 0 .5-.5 1-1 1.5L16.4 16 15 14.7l4.2-4.2-1-1-1.4 1.4L13 7.1l4-3.8c.4-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1.1 0 1.4M3 17.2l9.6-9.6 3.7 3.8L6.8 21H3v-3.8M7 2v3h3v2H7v3H5V7H2V5h3V2h2z" /></svg>
                    </div>
                </div>
                <div class=" mt-3 flex flex-col">
                    <span class=" text-white">Ce produit est-il disponible pour en vente ?</span>
                    <div @click="$store.state.showFrame==true?$store.state.showFrame=false:$store.state.showFrame=true">
                        <span title="Ce produit est disponible" class=" bg-img-grad text-white px-3 py-1 rounded-sm">Disponible </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <frame v-if=" $store.state.showFrame" :typeIs="'publication'" /> -->
</div>
</template>

<script>
// import frame from '../../components/modalFrame_.vue'
export default {
    data() {
        return {
            indexImg: 0,
            isFull: false,
        };
    },
    components: {
        // frame
    },
    methods: {
        setRoute(item, i) {
            this.$router.replace({
                name: 'produit',
                query: {
                    name: item.label
                },
                params: {
                    id: i
                }
            })
        },
    },
    mounted() {},
}
</script>

<style scoped>
img {
    position: relative;
    object-fit: cover;
    transition: .7s;
}
</style>
