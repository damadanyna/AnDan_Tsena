<template>
<div class=" w-full h-screen flex flex-col justify-between sm:h-full" :class="this.$store.state.theme_dark?'bg-gray ':''">
    <notif v-if="$store.state.show_notif[0]"></notif>
    <div v-if=" $store.state.logged" class="wfull flex flex-col justify-between sm:h-full">
        <navigation class="border-b border-b-gray-800 px-2 sm:px-7 "></navigation>
        <footerSearch v-if="$store.state.searchBar" class=" w-full mt-2 z-20 flex"></footerSearch>
        <div class="flex  h-screen  w-full flex-row  ">
            <horizonNav class="hidden sm:flex w-1/5" />
            <div :class="$store.state.showMenu?'w-full h-screen flex sm:hidden ':'w-0 flex sm:hidden  z-20 h-screen sm:static '" class="absolute duration-100">
                <horizonNav v-if="$store.state.showMenu" class=" z-20 w-full h-full "> </horizonNav>
            </div>
            <router-view class=" w-full h-full" />
        </div>
    </div>
    <connexion v-else />
</div>
</template>

<script>
import horizonNav from './components/horizontalBar_.vue'
import navigation from './components/nav_bar.vue'
import footerSearch from './components/barDeRecherche_.vue'
import connexion from './views/authentification/connexion_.vue'
import notif from './components/notification_.vue'
export default {
    components: {
        navigation,
        horizonNav,
        connexion,
        footerSearch,
        notif
    },
    data() {
        return {};
    },
    methods: {
        check_logged() {
            this.$store.commit('chek_', {
                methode: 'get',
                url: 'api/check',
                data: {}
            })
            // window.location='/accueil'
        },
        get_cat() {
            this.$store.commit('enreg_', {
                methode: 'get',
                url: 'api/categorie',
                data: {},
            })  
        },
        get_sous_cat() {
            this.$store.commit('enreg_', {
                methode: 'get',
                url: 'api/sous_categorie',
                data: {},
            })
        },

    },
    mounted() {
        this.check_logged()
        this.get_cat()
        this.get_sous_cat()

    },
    beforeCreate() {}
};
</script>

<style>
.shadowing {
    box-shadow: 0px 0px 15px rgb(175, 175, 175);
}

.bg-gray {
    background: rgb(23, 23, 23);
}

.text-gray {
    color: rgb(23, 23, 23);
}
</style>
