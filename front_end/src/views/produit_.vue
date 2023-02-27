<template>
<div>
    <product v-if="$route.name=='produit'" />
    <router-view v-else />
</div>
</template>

<script>
import product from './produit/listeProduit_.vue'
export default {
    components: {
        product
    }
}
</script>

<style>

</style>
