<template>
<nav class=" py-2  flex items-center justify-between">
    <div class=" flex items-center">
        <div @click="$store.state.showMenu?$store.state.showMenu=false:$store.state.showMenu=true"  class=" flex sm:hidden mr-2 lg:mr-4">
            <svg class=" w-6 text-white fill-current" viewBox="0 0 24 24"><path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" /></svg>
        </div>
        <div class="hidden sm:flex mr-2 lg:mr-4">
            <svg class=" w-6 text-white fill-current" viewBox="0 0 24 24"><path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" /></svg>
        </div>
        <div class="flex flex-row items-center">
            <div class="">
                <div class=" z-0 flex flex-row items-center  relative scale-125 ">
                    <span class=" sm:text-xl font-bold rounded-l-md pl-1 text-gray-500">An</span>
                    <span class=" sm:text-xl text-white  rounded-r-full">Da</span>
                </div>
                <span class=" z-10 absolute -mt-7 border_ ml-11  bg-img-grad rounded-full px-1 text-white text-xs font-bold"> Tsena </span>
            </div>
        </div>
    </div>
    <div class="hidden sm:flex lg:ml-40 flex-row  bg-slate-800 border py-1 border-gray-800 rounded-full px-3">
        <svg viewBox="0 0 24 24" class=" w-6 ">
            <path class=" fill-current  text-green-500" d="M19.31 18.9c.44-.69.69-1.52.69-2.4 0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 23.39 22.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5M5 20v-8H2l10-9 10 9h-1.82c-1.18-1.23-2.84-2-4.68-2-3.58 0-6.5 2.92-6.5 6.5 0 1.29.38 2.5 1.03 3.5H5z" /></svg>
        <input v-model="findValue_" placeholder="Rechercher" type="text" class=" w-1 sm:w-72 lg:w-96 text-white px-5 bg-transparent border-none outline-none">
        <div @click="findValue_=''" class=" cursor-pointer flex ">
            <svg viewBox="0 0 24 24" class=" w-5">
                <path class=" fill-current text-green-500" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
        </div>
    </div>
    <div class=" flex flex-row ">
        <router-link :to="{name:'formulaire'}" class=" mr-2 sm:mr-4 flex flex-row bg-img-grad pl-1 pr-2 sm:pl-2 sm:pr-4 rounded-md items-center">
            <svg class=" w-4 sm:w-6 fill-current text-white" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                <span class=" text-white  uppercase text-xs sm:text-sm font-bold"> Vendre</span>
        </router-link>
        <div @click="$store.state.searchBar?$store.state.searchBar=false:$store.state.searchBar=true" class=" flex px-1 mr-1 sm:hidden border border-white rounded-xl">
            <svg class=" w-4 fill-current text-white" viewBox="0 0 24 24"><path d="m15.5 14 5 5-1.5 1.5-5-5v-.79l-.27-.28A6.471 6.471 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3 6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27h.79m-6-9.5-.55.03c-.24.52-.61 1.4-.88 2.47h2.86c-.27-1.07-.64-1.95-.88-2.47-.18-.03-.36-.03-.55-.03M13.83 7a4.943 4.943 0 0 0-2.68-2.22c.24.53.55 1.3.78 2.22h1.9M5.17 7h1.9c.23-.92.54-1.69.78-2.22A4.943 4.943 0 0 0 5.17 7M4.5 9.5c0 .5.08 1.03.23 1.5h2.14l-.12-1.5.12-1.5H4.73c-.15.47-.23 1-.23 1.5m9.77 1.5c.15-.47.23-1 .23-1.5s-.08-1.03-.23-1.5h-2.14a9.48 9.48 0 0 1 0 3h2.14m-6.4-3-.12 1.5.12 1.5h3.26a9.48 9.48 0 0 0 0-3H7.87m1.63 6.5c.18 0 .36 0 .53-.03.25-.52.63-1.4.9-2.47H8.07c.27 1.07.65 1.95.9 2.47l.53.03m4.33-2.5h-1.9c-.23.92-.54 1.69-.78 2.22A4.943 4.943 0 0 0 13.83 12m-8.66 0a4.943 4.943 0 0 0 2.68 2.22c-.24-.53-.55-1.3-.78-2.22h-1.9z" /></svg>
          </div>
        <div @click="dec()" >
            <img  v-if="$store.state.fournisseur.fourn_img_log_middle!=null" class="  rounded-xl w-6 h-6 teptep2_ duration-1000  border border-black object-cover" :src=" loadImg()" alt="">
            <div v-else  class=" border border-white rounded-xl">
                       <svg class=" w-6 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
      
            </div>
       </div>
          
    </div>
</nav>
</template>

<script>
export default {
    data() {
        return {
            findValue_: '',
            liste_menu: [{
                label: 'Tableau de bord',
                url: '/tableauDebord',
                icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z'
            }, {
                label: 'boite',
                url: '/boite',
                icon: 'M12 18H6v-4h6m9 0v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6m0-10H4v2h16V4z'
            }, {
                label: 'abonnee',
                url: '/abonnee',
                icon: 'M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9 3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3 3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3 3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13v-1.75M0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9-.59.68-.95 1.62-.95 2.65V20H0m24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65 2.56.34 4.45 1.51 4.45 2.9V20z'

            }]
        }
    },
    methods:{
        dec() {
            
            this.$store.commit('chek_', {
                methode: 'post',
                url: 'api/logout',
                data: {}
            })
            window.location='/'
        },

        loadImg() {  
            try {
                return require(`../../../img/compressed/${this.$store.state.fournisseur.fourn_img_log_middle}`);
            } catch (error) {
                return null
            } 
        },
    }

}
</script>

<style>
</style>
