<template>
<div class=" w-full h-full fixed justify-center flex items-center">
    <div class=" w-72 items-center justify-center bg-gray-900 px-5 py-3 break-words flex flex-row rounded-md">
        <svg v-if="$store.state.save_img.success==false" class=" fill-current text-orange-500 w-7" viewBox="0 0 24 24">
            <path d="M13 2.03c4.73.47 8.5 4.22 8.95 8.97A9.976 9.976 0 0 1 13 21.93v-2c3.64-.43 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4.05V2.03m-2 .03v2c-1.43.2-2.78.78-3.9 1.68L5.67 4.26A9.827 9.827 0 0 1 11 2.06M4.26 5.67 5.69 7.1A8.017 8.017 0 0 0 4.05 11h-2c.2-1.96.95-3.81 2.21-5.33M2.06 13h2c.18 1.42.75 2.77 1.63 3.9l-1.42 1.43A10.04 10.04 0 0 1 2.06 13m5.04 5.37c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26l1.43-1.37M12 7.5 7.5 12H11v4h2v-4h3.5L12 7.5z" /></svg>
        <svg v-else class=" fill-current text-green-500 w-7" viewBox="0 0 24 24">
            <path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
        <span class=" ml-1 text-white" v-text="$store.state.save_img.indexing+'/'+$store.state.save_img.end"> </span>
        <span class=" ml-5 text-white" v-text="$store.state.save_img.message"></span>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
