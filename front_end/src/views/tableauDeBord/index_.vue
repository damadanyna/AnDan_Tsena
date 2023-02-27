<template>
<div class=" flex flex-col px-4 py-3 ">
    <div class="flex flex-row">
        <abonnement_/>
        <activityBoutique_/>
        <nombreVue_/>
    </div>
    <div class="flex flex-row mt-10">
        <visiteurBoite_/>
        <produitDisp_/> 
    </div>
</div>
</template>

<script>
import abonnement_ from './_abonnement_.vue';
import activityBoutique_ from './_activityBoutique_.vue';
import nombreVue_ from './_nombreVue_.vue';
import visiteurBoite_ from './_visiteurBoite_.vue';
import produitDisp_ from './_produitDisponible_.vue';

export default {
    components: {
        abonnement_,
        activityBoutique_,
        nombreVue_,
        visiteurBoite_,
        produitDisp_
    }
}
</script>

<style>

</style>
