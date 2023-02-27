<template>
<div class=" my_bg2 fixed w-full h-full flex flex-col top-0 left-0 overflow-hidden z-50">
    <div class=" flex fixed flex-col right-12 justify-end top-1/3">
        <button class=" flex flex-row items-center border border-white  text-white px-6  rounded-md py-1">
            <svg class="fill-current text-white w-6 " viewBox="0 0 24 24">
                <path d="M17 17H7v-3l-4 4 4 4v-3h12v-6h-2M7 7h10v3l4-4-4-4v3H5v6h2V7z" /></svg>
            <span>Changer</span>
        </button>

        <button @click="saveimage()" class="flex mt-4 flex-row items-center bg-img-grad text-white px-6  rounded-md py-1">
            <svg class="fill-current text-white w-6 " viewBox="0 0 24 24">
                <path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
            <span class=" font-semibold">Valider</span>
        </button>
    </div>
    <div class="flex flex-col">
        <span class=" text-green-500 text-2xl">Preparation </span>
        <span class=" text-white">importation de l'image </span>
        <div @click="cancel()" class="flex fixed right-12 top-5">
            <svg class=" fill-current text-white w-9 " viewBox="0 0 24 24">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
        </div>
    </div>

    <div class="flex flex-row justify-center">
        <img :src="$store.state.imgTemp[0]" class="" style=" height: 70vh;" alt="">
    </div>
</div>
</template>

<script>
export default {
    props: {
        type_: {}
    },
    methods: {
        cancel() {
            this.$store.state.imgTemp[0] = ''
            this.$store.state.imgTemp[1] = ''
        },
        saveimage() {
            // if (this.type_ == 'product') {
                
            // } else {

            // }
                this.$store.commit('uploadFile', [this.$store.state.imgTemp[1], this.$store.state.imgTemp[2]])
                this.close_()

        },
        close_() {
            this.$store.state.imgTemp[0] = ""
        }
    },
    mounted() {
        console.log(this.type_);
    }

}
</script>

<style>

</style>
