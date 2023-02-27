<template>
<div class=" w-full h-full flex flex-col sm:flex-row items-center mt-20 sm:mt-0">
    <div class=" w-full flex justify-center items-center">
        <div class="flex flex-col">
            <div class="flex flex-row items-center absolute sm:static sm:-left-4 ">
                <div v-if="$route.name=='inscription'" class="flex flex-row absolute  bottom-28">
                    <div v-for="i in 3" :class="i!=1?' ml-12':'ml-2 '" :key="i" class="  font-bold py-3 px-5 rounded-full">
                        <span :class=" i<=$store.state.index+1?'text-green-500 ':' text-white '" class="" v-text="i"></span>
                        <div :class=" i<=$store.state.index+1?' border border-green-500 text-green-500':'border border-white text-white '"></div>
                    </div>
                </div>
                <div class="">
                    <div class=" z-0 flex flex-row items-center ">
                        <span class=" text-4xl sm:text-8xl font-bold rounded-l-md pl-1 text-gray-500">An</span>
                        <span class=" text-4xl sm:text-8xl text-white  rounded-r-full">Da</span>
                    </div>
                    <span class=" z-10 absolute   -mt-11 sm:-mt-20 border_ ml-20 sm:ml-52 bg-img-grad rounded-full px-1 text-white text-xs sm:text-mg font-bold"> Tsena </span>
                </div>
            </div>
            <div class="flex flex-col items-center mt-24 sm:mt-0">
                <span class="  absolute sm:static top-0 right-5 text-stone-300 text-2xl" v-text="$route.name=='inscription'?'Fournisseur Inscription':'Fournisseur Connexion'"> </span>
                <span class="flex text-stone-400">Bienvennue sur ce site de vente </span>
                <span class="flex text-gray-400 font-bold">Dévopper par AnDa entreprise</span>
                <span class="flex text-green-500">Bonne navigation !</span>
            </div>
        </div>
    </div>
    <div v-if="$route.name!='inscription'" class="w-full flex justify-center items-center">
        <div class="flex flex-col ">
            <div class="flex mt-3 flex-row group px-4 rounded-lg  border border-stone-500">
                <svg class=" w-4 fill-current  text-stone-500" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                <input v-model="user.fourn_tel" type="text" placeholder=" Numero téléphone" class=" py-1 px-1 text-white bg-transparent outline-none">
            </div>
            <div class="flex mt-2 flex-row group px-4 rounded-lg  border border-stone-500">
                <svg class=" w-4 fill-current  text-stone-500" viewBox="0 0 24 24">
                    <path d="M12 17a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z" /></svg>
                <input v-model="user.fourn_pass" type="text" placeholder="Votre Mot de passe" class=" py-1 px-1 text-white bg-transparent outline-none">
            </div>
            <button @click="connexion()" class=" text-white font-semibold py-1 mt-4 text-center rounded-lg bg-green-600"> Se connecter </button>
            <router-link :to="{name:'inscription'}" class=" text-white font-semibold py-1 mt-2 text-center rounded-lg border border-white"> Créer un compte </router-link>
        </div>
    </div>
    <inscrip v-else></inscrip>
</div>
</template>

<script>
import inscrip from '../authentification/inscription_.vue'
export default {
    props: {},
    data() {
        return {
            user: {
                fourn_tel: '',
                fourn_pass: ''
            }
        }
    },
    components: {
        inscrip
    },
    methods: {
        connexion() {
            this.$store.commit('enreg_', {
                methode: 'post',
                url: 'api/login',
                data: {
                    fourn_tel: this.user.fourn_tel,
                    fourn_pass: this.user.fourn_pass
                }
            })
            window.location = '/accueil'
        },
    },
    created() {}
}
</script>

<style scoped>
.border_ {
    border: 5px solid rgb(23, 23, 23);

}

.l {}
</style>
