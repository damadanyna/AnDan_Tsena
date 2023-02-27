<template>
<div class="flex h-full w-full flex-col px-5 pb-4 overflow-y-auto" style=" max-height:92vh">
    <table class=" w-full">
        <tr class=" z-50 text-stone-400 bg-neutral-900 sticky top-0 py-3">
            <th class=" py-3">
                <div class="flex items-center flex-row">
                    <div class="p-2 rounded-full bg-black">
                        <svg class=" w-5 text-stone-400 fill-current" viewBox="0 0 24 24">
                            <path d="m6 19 3-3.86 2.14 2.58 3-3.86L18 19H6M6 4h5v8l-2.5-1.5L6 12M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" /></svg>
                    </div>
                    <span class="ml-3">Produit</span>
                </div>
            </th>
            <th class=" py-3">
                <div class="flex items-center flex-row">
                    <div class="p-2 rounded-full bg-black">
                        <svg class=" w-5 text-stone-400 fill-current" viewBox="0 0 24 24">
                            <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 4v4h6V8H5m8 0v4h6V8h-6m-8 6v4h6v-4H5m8 0v4h6v-4h-6z" /></svg>
                    </div>
                    <span class="ml-3"> Total du Commande</span>
                </div>
            </th>
            <th class=" py-3">
                <div class="flex items-center flex-row">
                    <div class="p-2 rounded-full bg-black">
                        <svg class=" w-5 text-stone-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5.36 0 .72 0 1.08-.05a6.09 6.09 0 0 1-.08-.95c0-.56.08-1.12.24-1.66-.41.1-.82.16-1.24.16a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5c0 .29-.03.59-.08.88.66-.25 1.37-.38 2.08-.38 1.17 0 2.31.34 3.29 1 .27-.5.51-1 .71-1.5-1.73-4.39-6-7.5-11-7.5M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m6 5.5v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" /></svg>
                    </div>
                    <span class="ml-3">Nombre de vue</span>
                </div>
            </th>
            <th class=" py-3  ">
                <div class="flex items-center flex-row">
                    <div class="p-2 rounded-full bg-black">
                        <svg class=" w-5 text-stone-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 18c0 1 .25 1.92.67 2.74l-.67.61-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11-.79-.38-1.68-.61-2.62-.61-3.31 0-6 2.69-6 6m7-4h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z" /></svg>
                    </div>
                    <span class="ml-3">Nombre Like</span>
                </div>
            </th>
        </tr>
        <tr v-for="item,i in  this.$store.state.listeProd_" :key="i"  :class="item.public?'border-b opacity-100 border-gray-800  hover:border-green-500 ':'border-b  hover:border-white border-gray-800  opacity-30'"  class=" z-20 border-b text-white border-b-stone-700">
            <td class=" py-4">
                <div class=" w-full  flex flex-row">
                    <div>
                        <img class=" z-0 w-14 h-14 rounded-full" :src="`${require('../../../images/'+item.img)}`" alt="">
                    </div>
                    <div class=" w-full flex flex-col px-3">
                        <span class=" text-green-500 2xl font-bold" v-text=" item.label"></span>
                        <span class=" text-stone-300" v-text=" item.description"></span>
                        <div class="flex justify-end"> 
                            <span class=" text-stone-600 text-xs" v-text="item.date"></span>
                        </div>
                    </div>
                </div>
            </td>
            <td class=" py-4">
               <div class="flex items-center flex-row">
                    <div class="p-2 rounded-full ">
                        <svg class=" w-5 text-stone-400 fill-current" viewBox="0 0 24 24">
                            <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 4v4h6V8H5m8 0v4h6V8h-6m-8 6v4h6v-4H5m8 0v4h6v-4h-6z" /></svg>
                    </div>
                    <div class="flex ">
                    <span class="ml-1 text-2xl ">12 </span>
                    <span class=" text-green-700 font-bold text-xs " >Voire plus</span>
                    </div>
                </div>
              
            </td>
            <td class=" py-4">
               <div class="flex items-center flex-row">
                    <div class="p-2 rounded-full ">
                      <svg class=" w-5 text-stone-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5.36 0 .72 0 1.08-.05a6.09 6.09 0 0 1-.08-.95c0-.56.08-1.12.24-1.66-.41.1-.82.16-1.24.16a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5c0 .29-.03.59-.08.88.66-.25 1.37-.38 2.08-.38 1.17 0 2.31.34 3.29 1 .27-.5.51-1 .71-1.5-1.73-4.39-6-7.5-11-7.5M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m6 5.5v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" /></svg>
                  </div>
                  <div class="flex ">
                    <span class="ml-1 text-2xl ">12 </span>
                    <span class=" text-green-700 font-bold text-xs " >Voire plus</span>
                  </div>
                </div>
              
            </td> 
            <td class=" py-4">
               <div class="flex items-center flex-row">
                    <div class="p-2 rounded-full ">
                      <svg class=" w-5 text-stone-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 18c0 1 .25 1.92.67 2.74l-.67.61-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11-.79-.38-1.68-.61-2.62-.61-3.31 0-6 2.69-6 6m7-4h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z" /></svg>
                   </div>
                   <div class="flex ">
                    <span class="ml-1 text-2xl ">12 </span>
                    <span class=" text-green-700 font-bold text-xs " >Voire plus</span>
                   </div>
                </div>
              
            </td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    components: {},
}
</script>

<style scoped>
img:hover {
    transform: scale(1.05);
    cursor: pointer;
}

img {
    position: relative;
    object-fit: cover;
    transition: .3s;
}
</style>
