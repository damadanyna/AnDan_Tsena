<template>
<div class="flex mt-2 flex-row group px-4 rounded-lg w-full  border border-stone-500">
    <svg v-html="template.ico_" class=" w-4 fill-current  text-stone-500" viewBox="0 0 24 24"> </svg>
    <input v-if="!template.is_white && !template.is_select" v-model="template.model_" :type="template.type_" :placeholder="template.plh_" class=" py-1 px-1 w-full text-white bg-transparent outline-none">
    <input v-else-if="template.is_white && !template.is_select" v-model="template.model_" :type="template.type_" :placeholder="template.plh_" class=" py-1 px-1 w-full text-black bg-transparent outline-none">
     
</div>
</template>

<script>
 
export default {
    props: {
        inputs_: {}
    },
    data() {
        return {
            template: this.inputs_
        }
    },
    beforeCreate(){ 
    }
}
</script>

<style>

</style>
[
