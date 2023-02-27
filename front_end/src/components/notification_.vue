<template>
<div id="notify" class="show_ opacity-0 fixed bg-stone-800 rounded-md pr-3 pl-4 py-2 text-white top-5 right-5 flex flex-row items-center">
    <svg class=" mr-3 fill-current text-red-500 w-5" viewBox="0 0 24 24">
        <path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z" /></svg>
    <span v-text="$store.state.show_notif[1]"></span>
    <button @click="set_hidden()">
        <svg class=" ml-14 fill-current text-white w-4" viewBox="0 0 24 24">
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
    </button>
</div>
</template>

<script>
 export default {
     data() {
         return { 
         }
     },
     methods: {
         set_hidden() {
             var notif = document.getElementById('notify')
             notif.classList.remove('show_')
            //   notif.style.animation = 'show_not .7s backwards '
         }
     },
     mounted() {
        setTimeout(() => {
            this.set_hidden()
        }, 3600);
     }
 }
</script>

<style scoped >

.show_ {
    animation-delay: 2000ms;
    animation: show_not .7s  forwards;
}
@keyframes show_not {
    0% {
        opacity: 0;
        right: -70px;
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }

}

@keyframes show_not2 {
    0% {
        right: initial;
        opacity: 1;
    }

    80% {
        opacity: 1;
    }

    100% { 
        right: -70;
    }

}
</style>
