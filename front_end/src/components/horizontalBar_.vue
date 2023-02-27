<template>
<div class=" flex  bg-neutral-900 border-r border-r-gray-800 py-3 ">
    <button @click="$store.state.showMenu?$store.state.showMenu=false:$store.state.showMenu=true" class="flex absolute sm:hidden right-2 px-1 ">
        <svg class="fill-current text-white w-7" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
    </button>  
    <div class="flex absolute sm:hidden left-2 px-1 ">
      <div class="text-white"> Menus</div>
      </div>
    <div class=" flex w-full flex-col">
        <div class="flex w-full justify-center items-center flex-col">
            <img  v-if="$store.state.fournisseur.fourn_img_log_middle!=null"   class=" teptep2_ w-24 h-24 duration-1000  border border-black object-cover rounded-full" :src=" loadImg()" alt="">
         
            <div v-else class="border w-24 h-24 p-3 rounded-full ">
                <svg class="  w-full fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" /></svg>
            </div>
            <span class=" text-sm font-semibold sm:font-normal sm:text-xs text-green-500 mt-2 ">Votre boutique</span>
            <span class=" sm:text-xs text-white font-bold  relative " v-text="$store.state.fournisseur.fourn_name"></span>
            
        </div>
        <div class="flex flex-col mt-6">
            <router-link :to="{name:item.name_}" v-for=" item,i in listeNavBar" :key="i" class="flex flex-row  ">
                <div class="flex w-full px-3  py-2  border-l-4 border-transparent">
                    <svg class=" w-6 fill-current text-stone-400" viewBox="0 0 24 24" v-html="item.ico"> </svg> 
                    <span class=" ml-4 text-stone-400" v-text=" item.label"> </span>
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
            listeNavBar: [{
                label: 'Tableau de Bord',
                name_: 'tableauDebord',
                ico: '<path d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3v10z" />'
            }, {
                label: 'Mes Produits',
                name_: 'produit',
                ico: '<path d="m6 19 3-3.86 2.14 2.58 3-3.86L18 19H6M6 4h5v8l-2.5-1.5L6 12M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />'
            }, {
                label: 'Tableau Analytique',
                name_: 'analytique',
                ico: '<path d="M12 3 2 12h3v8h14v-8h3M9 18H7v-6h2m4 6h-2v-8h2m4 8h-2v-4h2" />'
            }, {
                label: 'Mon Profile',
                name_: 'profil',
                ico: '<path d="M17.25 12c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.29.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.19.69l-.25 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.3L10 16.85c-.44-.18-.83-.41-1.19-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42a.351.351 0 0 1 .08-.45l1.48-1.16c-.03-.22-.05-.45-.05-.68 0-.23.02-.46.05-.68l-1.48-1.16a.353.353 0 0 1-.08-.45l1.4-2.42c.09-.16.27-.22.43-.16l1.74.71c.36-.28.75-.52 1.19-.69l.25-1.86c.03-.16.18-.29.35-.29h2.8c.17 0 .32.13.35.29L14 7.15c.43.17.83.41 1.19.69l1.74-.71c.16-.06.34 0 .43.16l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.22.05.45.05.68M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 7c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2z" />'
            }, ]
        }
    },
    methods:{

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

<style scoped>
div a.router-link-exact-active span {
    color: #22c55e;
    background: black;
}

a.router-link-exact-active div {
    background: black;
    border-left: 4px solid #22c55e;
    fill: #22c55e;
}

div a.router-link-exact-active svg {
    fill: #22c55e;

}

/* nav .router-link-exact-active{
  
  
} */
.border_ {
    border: 4px solid rgb(23, 23, 23)
}
</style>
