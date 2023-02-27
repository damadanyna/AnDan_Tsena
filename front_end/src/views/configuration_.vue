<template>
<div class=" w-full h-full px-3 flex-col overflow-auto duration-1000" id="fournFrame_">
    <img_bg v-if="$store.state.imgTemp[0]!=''"></img_bg>
    <formulaire_modif_ v-if="$store.state.show_form[0]"></formulaire_modif_>
    <div class=" h-2/5 ">
        <div @click="type_='bg'" class="flex absolute right-2 delay-500  h-30 sm:w-20 w-full">
            <input class="hidden" accept="image/*" @change="change_files2()" type="file" name="images" id="fourn_profil_bg">
            <div class="flex mr-0 relative">
                <label for="fourn_profil_bg" class=""> 
                    <div class=" fixed my_bg2 mt-3 p-3 rounded-full border-white border-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5" viewBox="0 0 24 24" fill="#fff ">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z" /></svg>
                    </div>
                </label>
            </div>
        </div>
        <img v-if="$store.state.fournisseur.fourn_img_bg!=null" class=" teptep2_ h-full w-full object-cover" :src="loadImg2()" alt="">
        <div v-else class=" bg-black w-full h-full"></div>
    </div>
    <div :class="isTop_?' w-full bg-stone-900':' '" class=" z-30 sticky duration-700 top-0 px-4 flex w-full justify-between -mt-8">
        <div class=" flex flex-row items-center">
            <div class=" w-40 h-40 sm:w-auto sm:h-auto   border-8 border-stone-900  rounded-full">
                <!-- <img v-if="$store.state.fournisseur.fourn_img_log_middle!=null" :class="isTop_?' w-14 h-14':'w-40 h-40 '" class=" teptep2_ duration-1000  border border-black object-cover rounded-full" :src=" loadImg()" alt=""> -->
                <img v-if="$store.state.fournisseur.fourn_img_log_middle!=null" :class="isTop_?' w-14 h-14':'w-40 h-40 '" class=" teptep2_ duration-1000  border border-black object-cover rounded-full" :src=" loadImg()" alt="">
                <div v-else class=" w-40 h-40 duration-1000 bg-black  border border-black rounded-full"></div>
            </div>
            <div :class="isTop_?'ml-1':'ml-4'" class=" flex flex-col ">
                <div class=" flex">
                    <div class="flex absolute -ml-14  delay-500  h-30 sm:w-20 w-full">
                        <input accept="image/*" class="hidden" @change="change_files()" type="file" name="images" id="fourn_profil">
                        <div class="flex mr-0 relative">
                            <label for="fourn_profil" class=""> 
                                <div class=" fixed  my_bg2 mt-3 p-3 rounded-full border-white border-2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5" viewBox="0 0 24 24" fill="#fff ">
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z" /></svg>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div class="flex flex-row">
                        <span :class="isTop_?'text-base font-semibold':' text-xl sm:text-4xl'" class=" text-white" v-text="$store.state.fournisseur.fourn_name"> </span>
                    </div>
                </div>
                <div :class="isTop_?' hidden':'flex'" class="  flex-row">
                    <svg class="w-4 ml-2 mr-1 fill-current text-gray-600" viewBox="0 0 24 24">
                        <path d="M12 18H6v-4h6m9 0v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6m0-10H4v2h16V4z"></path>
                    </svg>
                    <span class=" text-xs sm:text-base text-gray-500" v-text="$store.state.fournisseur.ville_id+'/'+$store.state.fournisseur.localisation_"></span>
                </div>
                <div :class="isTop_?' hidden':'flex'" class="  flex-row">
                    <svg class="w-4 ml-2 mr-1 fill-current text-gray-600" viewBox="0 0 24 24">
                        <path d="M12 18H6v-4h6m9 0v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6m0-10H4v2h16V4z"></path>
                    </svg>
                    <span class=" text-xs sm:text-base text-gray-500" v-text="$store.state.fournisseur.fourn_email"></span>
                </div>
                <div class="flex flex-row">
                    <span :class="isTop_?' text-xs':'text-xl'" class=" text-green-500" v-text="$store.state.fournisseur.fourn_tel"></span>
                </div>
            </div>
        </div>
        <div :class="isTop_?' mt-3':' '" class=" absolute sm:static flex flex-col">
            <div class="flex flex-row mt-3 fill-current text-white">
                <svg class="mx-1 w-5" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" /></svg>
                <svg class="mx-1 w-5" viewBox="0 0 24 24">
                    <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" /></svg>
                <svg class="mx-1 w-5" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z" /></svg>
                <svg class="mx-1 w-5" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" /></svg>
                <svg class="mx-1 w-5" viewBox="0 0 24 24">
                    <path d="m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" /></svg>
            </div>

            <div @click="showForm_('not')" class=" mt-2 cursor-pointer flex  w-full flex-row">
                <div class="flex bg-green-700 px-4 rounded-md">
                    <span class=" text-white">Réseaus socieaux</span>
                    <svg class="ml-3 fill-current text-white w-5" viewBox="0 0 24 24" data-v-ce048c48="">
                        <path d="M20.7 7c-.3.4-.7.7-.7 1 0 .3.3.6.6 1 .5.5 1 .9.9 1.4 0 .5-.5 1-1 1.5L16.4 16 15 14.7l4.2-4.2-1-1-1.4 1.4L13 7.1l4-3.8c.4-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1.1 0 1.4M3 17.2l9.6-9.6 3.7 3.8L6.8 21H3v-3.8M7 2v3h3v2H7v3H5V7H2V5h3V2h2z" data-v-ce048c48=""></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div @click="showForm_('perso')" class=" cursor-pointer flex  w-full flex-row">
        <div class="flex bg-green-700 px-4 rounded-md">
            <span class=" text-white">Modifier vos information</span>
            <svg class="ml-3 fill-current text-white w-5" viewBox="0 0 24 24" data-v-ce048c48="">
                <path d="M20.7 7c-.3.4-.7.7-.7 1 0 .3.3.6.6 1 .5.5 1 .9.9 1.4 0 .5-.5 1-1 1.5L16.4 16 15 14.7l4.2-4.2-1-1-1.4 1.4L13 7.1l4-3.8c.4-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1.1 0 1.4M3 17.2l9.6-9.6 3.7 3.8L6.8 21H3v-3.8M7 2v3h3v2H7v3H5V7H2V5h3V2h2z" data-v-ce048c48=""></path>
            </svg>
        </div>
    </div>
</div>
</template>

<script>
import formulaire_modif_ from './configuration/formulaire_.vue'
import img_bg from './configuration/img_bg.vue'
export default {
    components: {
        formulaire_modif_,
        img_bg
    },
    data() {
        return {
            isTop_: false,
            showInput: {
                boutique: false
            },
            mydleImg: this.$store.state.fournisseur.fourn_img_log_middle,
            inputs: [{
                model_: '',
                ico_: '<path d="M12 18H6v-4h6m9 0v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6m0-10H4v2h16V4z" />',
                plh_: "Nom de votre boutique",
                type_: "text"
            }, {
                model_: '',
                ico_: '<path d="m20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />',
                plh_: 'adresse email du boutique',
                type_: 'email'
            }, {
                model_: '',
                ico_: '<path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />',
                plh_: 'Numéro de téléphone',
                type_: 'text'
            }],
        }
    },
    methods: {
        loadImg() {
            try {
                return require(`../../../img/compressed/${this.$store.state.fournisseur.fourn_img_log_middle}`);
            } catch (error) {
                return null
            }
        },
        loadImg2() {
            try {
                return require(`../../../img/compressed/${this.$store.state.fournisseur.fourn_img_bg}`)
            } catch (error) {
                return null
            }
        },
        change_files() {
            var img_val = document.getElementById('fourn_profil')
            this.$store.state.imgTemp[0] = URL.createObjectURL(img_val.files[0])
            this.$store.state.imgTemp[1] = img_val.files[0];
            this.$store.state.imgTemp[2] = 'logo';

        },
        change_files2() {
            var img_val = document.getElementById('fourn_profil_bg')
            this.$store.state.imgTemp[0] = URL.createObjectURL(img_val.files[0])
            this.$store.state.imgTemp[1] = img_val.files[0];
            this.$store.state.imgTemp[2] = 'bg';

        },
        showForm_(val) {
            this.$store.state.show_form[0] = true
            this.$store.state.show_form[1] = val
        }
    },
    mounted() {
        this.$store.state.imgTemp= [  '', '', ''  ]
    },
    created() {}
}
</script>

<style scoped>
#nav a.router-link-exact-active span {
    color: #22c55e;
    font-weight: bold;
}

#nav a.router-link-exact-active path {
    fill: #22c55e;

}
</style>
