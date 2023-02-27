<template>
<div class=" w-full h-full flex fex-row">
    <div class=" w-full flex justify-center items-center">
        <div class="flex flex-col ">
            <div v-if="this.$store.state.index ==0" class=" flex flex-col ">
                <div class="flex flex-row" @click="$store.state.index=0">
                    <span class=" text-stone-500">Formulaire d'inscription</span>
                </div>
                <input_ v-for="item, i in inputs[0]" :key="i" :inputs_="item"></input_>
            </div>
            <div v-else-if="this.$store.state.index ==1" class=" flex flex-col ">
                <div class="flex flex-row" @click="$store.state.index=0">
                    <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                    <span class=" text-stone-500">Precedant</span>
                </div>
                <input_ v-for="item, i in inputs[1]" :key="i" :inputs_="item"></input_>
            </div>
            <div v-else class=" flex flex-col ">
                <div class="flex flex-row" @click="$store.state.index=1">
                    <svg class=" w-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z" /></svg>
                    <span class=" text-stone-500">Precedant</span>
                </div>
                <input_ v-for="item, i in inputs[2]" :key="i" :inputs_="item"></input_>
            </div>
            <button @keydown="this.validate?show_():''" :class="verify_()" @click="this.validate?show_():''" class=" text-white font-semibold py-1 mt-4 text-center rounded-lg"> Suivant </button>
            <router-link to="/" class=" text-white font-semibold py-1 mt-2 text-center rounded-lg border border-white">Se connecter</router-link>
        </div>
    </div>
</div>
</template>

<script>
import input_ from '@/components/input_.vue';
export default {
    components: {
        input_
    },
    data() {
        return {
            index: 0,
            validate: false,
            inputs: [
                [{
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
                [{
                    model_: '',
                    ico_: '<path d="M12 18H6v-4h6m9 0v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6m0-10H4v2h16V4z" />',
                    plh_: "localisation du votre boutique",
                    type_: "text"
                }, {
                    model_: '',
                    ico_: '<path d="M4 17V9H2V7h4v10H4m18-2a2 2 0 0 1-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1 1.5 1.5V15m-8 0v2H8v-4a2 2 0 0 1 2-2h2V9H8V7h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4z" />',
                    plh_: "Numero d'indentification fiscale",
                    type_: 'text'
                }, {
                    model_: '',
                    ico_: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2v7m4 0h-2V7h2v10m4 0h-2v-4h2v4z" />',
                    plh_: 'Statistique',
                    type_: 'text'
                }, ],
                [{
                    model_: '',
                    ico_: '<path d="M19 15h-2v-2h2m0 6h-2v-2h2M13 7h-2V5h2m0 6h-2V9h2m0 6h-2v-2h2m0 6h-2v-2h2m-6-6H5V9h2m0 6H5v-2h2m0 6H5v-2h2m8-6V5l-3-3-3 3v2H3v14h18V11h-6z" />',
                    plh_: 'Choissez une Ville',
                    type_: 'text'
                }, {
                    model_: '',
                    ico_: '<path d="M12 17a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z" />',
                    plh_: 'Mots de passe',
                    type_: 'text'
                }, {
                    model_: '',
                    ico_: '<path d="M12 17a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3z" />',
                    plh_: 'Verification du Mots de passe',
                    type_: 'text'
                }]
            ],
        }
    },
    methods: {
        show_() {
            if (this.$store.state.index < 2) {
                this.$store.state.index += 1;
            } else if (this.$store.state.index == 2) {
                this.$store.state.index = 2
                this.$store.commit('enreg_', {
                    methode:'post',
                    url: 'api/register',
                    data: {
                        fourn_name: this.inputs[0][0].model_,
                        fourn_email: this.inputs[0][1].model_,
                        fourn_tel: this.inputs[0][2].model_,
                        localisation_: this.inputs[1][0].model_,
                        fourn_nif: this.inputs[1][1].model_,
                        fourn_stat: this.inputs[1][2].model_,
                        ville_id: this.inputs[2][0].model_,
                        fourn_pass: this.inputs[2][2].model_,
                        fourn_status: true,
                    }
                }) 
               window.location = '/'
            }
        },
        verify_() {

            if (this.$store.state.index <= 2) {
                for (let i = 0; i < this.inputs[this.$store.state.index].length; i++) {
                    const element = this.inputs[this.$store.state.index][i];
                    if (element.model_ == "") {
                        return 'bg-gray-600'
                    }
                }
                this.validate = true
                return 'bg-green-600'
            }
            return 'bg-gray-600'
        },
    }
}
</script>

<style scoped> 
    </style>
