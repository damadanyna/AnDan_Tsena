<template>
    <div class=" w-96 flex flex-col bg-white  px-11 pt-4 pb-6 rounded-md">
        <span class=" text-stone-600 text-2xl font-bold">Modification</span>
        <span class=" text-stone-600 text-sm break-words mt-4">En validant la modification vous pouvez les modifiers qu'apres 90 jours.</span>
        <input_ v-for="item,i in inputs " :key="i" :inputs_="item"></input_>

        <div class="flex flex-row justify-end mt-4">
            <button @click="$store.state.show_form[0]=false" class=" border border-stone-700 px-4 rounded-md">Annuler</button>
            <button @click="save_()" class=" items-center ml-4 px-4 bg-green-500 flex flex-row text-white rounded-md">
                <svg class=" w-5 fill-current text-white " viewBox="0 0 24 24">
                    <path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
                <span>Valider</span>
            </button>
        </div>
    </div>
</template>

<script>
import input_ from '../../../components/input_.vue';
export default {

    components: {
        input_,
    },
    data() {
        return {
            inputs: [{
                model_: this.$store.state.fournisseur.fourn_name,
                ico_: '<path d="M12 18H6v-4h6m9 0v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6m0-10H4v2h16V4z" />',
                plh_: "Nom de votre boutique",
                type_: "text",
                is_white:true,
            }, {
                model_: this.$store.state.fournisseur.fourn_email,
                ico_: '<path d="m20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />',
                plh_: 'adresse email du boutique',
                type_: 'email',
                is_white:true,
            }, {
                model_: this.$store.state.fournisseur.fourn_tel,
                ico_: '<path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />',
                plh_: 'Numéro de téléphone',
                type_: 'text',
                is_white:true,
            }, {
                model_: this.$store.state.fournisseur.fourn_nif,
                ico_: '<path d="M4 17V9H2V7h4v10H4m18-2a2 2 0 0 1-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1 1.5 1.5V15m-8 0v2H8v-4a2 2 0 0 1 2-2h2V9H8V7h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4z"></path>',
                plh_: "Numero d'identification fiscal",
                type_: 'text',
                is_white:true,
            }, {
                model_: this.$store.state.fournisseur.fourn_stat,
                ico_: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2v7m4 0h-2V7h2v10m4 0h-2v-4h2v4z"></path>',
                plh_: "Numero statistique",
                type_: 'text',
                is_white:true,
            }, {
                model_: this.$store.state.fournisseur.ville_id,
                ico_: '<path d="M19 15h-2v-2h2m0 6h-2v-2h2M13 7h-2V5h2m0 6h-2V9h2m0 6h-2v-2h2m0 6h-2v-2h2m-6-6H5V9h2m0 6H5v-2h2m0 6H5v-2h2m8-6V5l-3-3-3 3v2H3v14h18V11h-6z"></path>',
                plh_: "Ville",
                type_: 'text',
                is_white:true,
            }, {
                model_: this.$store.state.fournisseur.localisation_,
                ico_: '<path d="M19 15h-2v-2h2m0 6h-2v-2h2M13 7h-2V5h2m0 6h-2V9h2m0 6h-2v-2h2m0 6h-2v-2h2m-6-6H5V9h2m0 6H5v-2h2m0 6H5v-2h2m8-6V5l-3-3-3 3v2H3v14h18V11h-6z"></path>',
                plh_: "Localisation du magasin",
                type_: 'text',
                is_white:true,
            }],
        }
    },
    methods:{
        save_(){
            if(this.$store.state.show_form[1]=='perso'){
                this.$store.commit('enreg_', {
                    methode:'put',
                    url: 'api/fournisseur',
                    data: {
                        fourn_name: this.inputs[0].model_,
                        fourn_email: this.inputs[1].model_,
                        fourn_tel: this.inputs[2].model_,
                        fourn_nif: this.inputs[3].model_,
                        fourn_stat: this.inputs[4].model_,
                        ville_id: this.inputs[5].model_, 
                        localisation_: this.inputs[6].model_
                    }
                }) 
                this.$store.state.show_form[0]=false
            }
        }
    }
}
</script>

<style>

</style>