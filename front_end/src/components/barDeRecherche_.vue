<template>
<div class=" flex flex-row  bg-slate-800 border py-1 border-gray-800 rounded-full px-3">
    <svg viewBox="0 0 24 24" class=" w-8 sm:w-6 ">
        <path class=" fill-current  text-green-500" d="M19.31 18.9c.44-.69.69-1.52.69-2.4 0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 23.39 22.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5M5 20v-8H2l10-9 10 9h-1.82c-1.18-1.23-2.84-2-4.68-2-3.58 0-6.5 2.92-6.5 6.5 0 1.29.38 2.5 1.03 3.5H5z" /></svg>
    <input v-model="findValue_" placeholder="Rechercher" type="text" class="  w-96 text-white px-5 bg-transparent border-none outline-none">
    <div @click="findValue_=''" class=" cursor-pointer flex ">
        <svg viewBox="0 0 24 24" class=" w-5">
            <path class=" fill-current text-green-500" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            findValue_: '',
        }
    }

}
</script>

<style>

</style>
