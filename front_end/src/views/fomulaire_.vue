<template>
<div class="absolute z-20 left-0 flex w-full flex-col overflow-y-auto sm:overflow-hidden" style=" width:100%;height:92%" :class="this.$store.state.theme_dark?'bg-gray ':''">
    <saving_progress class=" z-50" v-if="$store.state.save_img.show_"></saving_progress>
    <div class="flex flex-col">
        <span class=" py-3 sm:py-0 text-green-400 " v-text="isFull?'Vue en mode Public':'Mode Edition'"> </span>
    </div>
    <div class=" absolute group right-4" @click="$router.go(-1)">
        <svg class=" w-9" viewBox="0 0 24 24">
            <path class=" fill-current text-green-700  duration-300 group-hover:text-white" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
    </div>
    <div :class="isFull?' justify-start  sm:justify-center':'mt-2'" class=" sm:mt-0 flex-col sm:flex-row h-full flex w-full   ">
        <div :class="isFull?' w-full':' w-full sm:w-2/3'" class=" flex flex-col sm:flex-row-reverse sm:justify-center h-full ">
            <div :class="isFull?' sm:justify-center':' sm:p-6 sm:pl-8 justify-start'" class=" flex flex-row w-full pr-4">
                <span v-if="this.$store.state.imgTemp[0][indexImg]==''" class=" bg-stone-700 w-full h-full"></span>
                <img v-else :src="this.$store.state.imgTemp[0][indexImg]" alt="" style="object:cover" class="h-full w-auto sm:pb-3">
                <div :class="isFull?'right-3 mt-3 flex-row-reverse':'right-3 sm:right-auto  flex-row'" class="flex absolute items-center">
                    <div @click="isFull==true?isFull=false:isFull=true" class=" ">
                        <div class="mr-2 flex flex-row items-center  border border-white my_bg2">
                            <span v-text="isFull?'Retour':'Voire' " class=" mr-1 text-xs text-white"></span>
                            <svg v-if="!isFull" class=" fill-current text-white w-7" viewBox="0 0 24 24">
                                <path d="M5 5h5v2H7v3H5V5m9 0h5v5h-2V7h-3V5m3 9h2v5h-5v-2h3v-3m-7 3v2H5v-5h2v3h3z" /></svg>
                            <svg v-else class=" fill-current text-white w-7" viewBox="0 0 24 24">
                                <path d="M14 14h5v2h-3v3h-2v-5m-9 0h5v5H8v-3H5v-2m3-9h2v5H5V8h3V5m11 3v2h-5V5h2v3h3z" /></svg>
                        </div>
                    </div>
                    <div @click="isFull==true?isFull=false:isFull=true" class=" ">
                        <div class=" flex flex-row items-center py-1">
                            <div class="flex delay-500  h-30 sm:w-20 w-full">
                                <input class="hidden" @change="change_files()" multiple accept="image/*" type="file" name="images" id="prod_img">
                                <div class="flex mr-0 relative">
                                    <label for="prod_img" class="">
                                        <div class="  my_bg2  p-3 rounded-full border-white border-2 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" class=" w-5 h-5" viewBox="0 0 24 24" fill="#fff ">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z" /></svg>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute my_bg2 sm:bg-transparent rounded-r-lg sm:border-none  flex-col flex sm:flex-col   sm:static  sm:left-1 max-h-full overflow-y-auto overflow-x-hidden">

                <div v-for="item,i in this.$store.state.imgTemp[0]" :key="i" @click="indexImg=i" class=" mx-1 sm:mx-0 cursor-pointer mt-5 flex flex-row">
                    <span v-if="item==''" class=" bg-stone-700  w-14 h-10"></span>
                    <img v-else :src="item" alt="" style="object:cover" class=" w-14 h-10">
                    <div class=" hidden sm:flex p-2">
                        <input class="hidden" @change="change_file(i)" multiple accept="image/*" type="file" name="images" :id="'prod_img_'+i">
                        <div class="flex mr-0 relative">
                            <label :for="'prod_img_'+i" class="">
                                <div class=" cursor-pointer">
                                    <svg v-if="!isFull" class=" ml-3 fill-current text-white w-5" viewBox="0 0 24 24">
                                        <path d="M20.7 7c-.3.4-.7.7-.7 1 0 .3.3.6.6 1 .5.5 1 .9.9 1.4 0 .5-.5 1-1 1.5L16.4 16 15 14.7l4.2-4.2-1-1-1.4 1.4L13 7.1l4-3.8c.4-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1.1 0 1.4M3 17.2l9.6-9.6 3.7 3.8L6.8 21H3v-3.8M7 2v3h3v2H7v3H5V7H2V5h3V2h2z" /></svg>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isFull" class=" absolute border border-gray-500 duration-500 bottom-0 flex w-full  sm:w-4/5 my_bg2 py-5 flex-row">
            <div class="flex px-4 flex-row justify-start w-full">
                <div class=" w-3/4">
                    <div class="flex flex-row">
                        <span class=" block mt-5 mr-3 bg-img-grad w-2 h-2"></span>
                        <span class=" text-white text-3xl font-bold" v-text="this.$store.state.listeProd_[0].label"></span>
                    </div>
                    <div class="flex flex-row w-full">
                        <div class="flex w-full">
                            <span class=" text-gray-400 text-base " v-text="this.$store.state.listeProd_[0].detail"></span>
                        </div>
                    </div>
                    <div class=" mt-2">
                        <span class="  py-1 rounded-lg font-bold text-xl text-white  " v-text="this.$store.state.listeProd_[0].prix+' Ar'"></span>
                    </div>
                </div>
            </div>
            <!-- 0347685439 -->
        </div>

        <div v-if="!isFull" class=" w-full sm:w-1/2 flex h-full  right-1  px-5 flex-col mt-4">
            <div class="flex flex-col justify-start w-full bg-stone-900 px-11 py-2 rounded-md">
                <div class="flex flex-col">
                    <span class=" text-green-700 font font-bold">1. Nom du produit mis en vente</span>
                    <div class="flex w-full  flex-row">
                        <span class=" block mt-5 mr-3 bg-img-grad w-2 h-2"></span>
                        <input_ class=" w-full" :inputs_="inputs[0]"></input_>
                    </div>
                </div>
                <div class="flex flex-col">
                    <span class=" text-green-700 font font-bold">2.Categorie (Ex: Telephne) </span>
                    <div class="flex w-full  flex-row">
                        <span class=" block mt-5 mr-3 bg-img-grad w-2 h-2"></span>
                        <div class="flex mt-2 flex-row group pl-4 pr-1 items-center rounded-lg w-full  border border-stone-500">
                            <svg v-html="inputs[1].ico_" class=" w-4 fill-current  text-stone-500" viewBox="0 0 24 24"> </svg>
                            <select v-if="inputs[2].model_==''" @mouseup="update_cate()" v-model="inputs[1].model_" name="" id="" class=" w-full text-white  bg-stone-900 outline-none py-1">
                                <option class=" text-white" v-for=" item,i in  cat_" :key="i" :value="item.cat_id" v-text="item.cat_label"></option>
                            </select>
                            <select v-else name="" id="" class=" w-full text-white  bg-stone-900 outline-none py-1">
                                <option class=" text-white" :value="cat_.cat_id" v-text="cat_.cat_label"></option>
                            </select>
                            <div @click="clear_select()" v-if="inputs[1].model_!=''" class=" ">
                                <svg class=" text-white fill-current w-5" viewBox="0 0 24 24">
                                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <span class=" text-green-700 font font-bold">3.Sous-categorie (Ex: samsung)</span>
                    <div class="flex w-full  flex-row">
                        <span class=" block mt-5 mr-3 bg-img-grad w-2 h-2"></span>
                        <div class="flex mt-2 flex-row group px-4 rounded-lg w-full  border border-stone-500">
                            <svg v-html="inputs[2].ico_" class=" w-4 fill-current  text-stone-500" viewBox="0 0 24 24"> </svg>
                            <select @change="update_sous_cate()" v-model="inputs[2].model_" name="" id="" class=" w-full text-white  bg-stone-900 outline-none py-1">
                                <option class=" text-white" v-for=" item,i in  sous_cat" :key="i" :value="item.sous_cat_id" v-text="item.sous_cat_label"></option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full mt-3">
                    <span class=" text-green-700 font font-bold">4. Déscription</span>
                    <div class="flex w-full  flex-row">
                        <span class=" block mt-5 mr-3 bg-img-grad w-2 h-2"></span>
                        <input_ class=" w-full" :inputs_="inputs[3]"></input_>
                    </div>
                </div>
                <div class=" mt-3">
                    <span class=" text-green-700 font font-bold">5. Prix ArTTC</span>

                    <div class="flex w-full  flex-row">
                        <span class=" block mt-5 mr-3 bg-img-grad w-2 h-2"></span>
                        <input_ class=" w-full" :inputs_="inputs[4]"></input_>
                    </div>
                </div>
                <div class=" mt-3 flex flex-col">
                    <span class=" text-white">Ce produit est-il disponible pour en vente ?</span>
                    <div @click="disp==true?disp=false:disp=true">
                        <span v-if="disp" title="Ne pas disponible en vente" class=" bg-img-grad text-white px-3 py-1 rounded-sm">Disponible </span>
                        <span v-else title="Rendre ce produit disponible en vente" class=" bg-stone-500 text-white px-3 py-1 rounded-sm">Non Disponible </span>
                    </div>
                </div>
                <div class=" mt-7 flex flex-row w-full justify-center ">
                    <div @click="set_product()" class=" rounded-md bg-green-600 flex flex-row px-4 ">
                        <svg class=" text-white w-5 fill-current" viewBox="0 0 24 24">
                            <path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" /></svg>
                        <span title="Ce produit est disponible" class=" text-white px-1 py-1 rounded-sm">Enregister </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import io from 'socket.io-client'
import input_ from '../components/input_.vue'
import saving_progress from '../components/note/saving_img.vue'

var socket = io('http://localhost:4044')
export default {
    props: {
        _data_: {}
    },
    components: {
        // frame,
        input_,
        saving_progress,
    },
    data() {
        return {
            indexImg: 0,
            isFull: false,
            sous_cat: {},
            sou_cat_temp: {},
            cat_: {},
            disp:true,
            img_temp: [],
            cat_temp: {},
            inputs: [{
                model_: '',
                ico_: '<path d="M12 18H6v-4h6m9 0v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6m0-10H4v2h16V4z" />',
                plh_: "Nom du produit",
                type_: "text",
            }, {
                model_: '',
                ico_: '<path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />',
                plh_: 'Categorie',
                type_: 'text',
            }, {
                model_: '',
                ico_: '<path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />',
                plh_: 'Sous-Categorie',
                type_: 'text',
            }, {
                model_: '',
                ico_: '<path d="m20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />',
                plh_: 'Description',
                type_: 'text',
            }, {
                model_: '',
                ico_: '<path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />',
                plh_: 'Prix',
                type_: 'text',
            }, ],
            categorie: {}
        };
    },
    methods: {
        get_cat() {
            this.$store.commit('enreg_', {
                methode: 'get',
                url: 'api/categorie',
                data: {},
            })
        },
        get_sous_cat() {
            this.$store.commit('enreg_', {
                methode: 'get',
                url: 'api/sous_categorie',
                data: {},
            })
        },
        update_sous_cate() {
            for (let i = 0; i < this.sou_cat_temp.length; i++) {
                const element = this.sou_cat_temp[i];
                if (element.sous_cat_id == this.inputs[2].model_) {
                    for (let j = 0; j < this.cat_temp.length; j++) {
                        const elt = this.cat_temp[j];
                        if (elt.cat_id == element.id_cat) {
                            this.cat_ = elt;
                            this.inputs[1].model_ = elt.cat_id
                        }
                    }
                }
            }
        },
        update_cate() {
            if (this.inputs[1].model_ != '') {
                var array = []
                for (let i = 0; i < this.sou_cat_temp.length; i++) {
                    const element = this.sou_cat_temp[i];
                    if (this.inputs[1].model_ == element.id_cat) {
                        array.push(element)
                    }
                }
                this.sous_cat = array
            } else {
                this.sous_cat = this.sou_cat_temp
            }
        },
        set_product() {
            // console.log(this.inputs); 
            var cod_=(Math.random() + 1).toString(36).substring(2)
            this.$store.commit('enreg_', {
                    methode:'post',
                    url: 'api/produit',
                    data: { 
                        prod_id:cod_,
                        fourn_id: this.$store.state.fournisseur.fourn_id,
                        prod_label: this.inputs[0].model_,
                        cat_id: this.inputs[1].model_,
                        sous_cat_id: this.inputs[2].model_,
                        prod_description: this.inputs[3].model_,
                        prod_prix: this.inputs[4].model_,
                        prod_disp: this.disp, 
                    }
                })  
            this.$store.commit('uploadFile', [this.$store.state.imgTemp[1], this.$store.state.imgTemp[2],cod_])
        },
        clear_select() {
            this.inputs[1].model_ = ''
            this.inputs[2].model_ = ''

            this.cat_ = this.cat_temp
            this.sous_cat = this.sou_cat_temp
        },
        split2(val) {
            var sous_cat = [];
            for (let i = 0; i < val.length; i++) {
                const element = val[i];
                sous_cat.push({
                    id_cat: element.split(',')[0],
                    sous_cat_id: element.split(',')[1],
                    sous_cat_label: element.split(',')[2]
                })
            }
            return sous_cat;
        },
        split1(val) {
            var categorie_ = [];
            for (let i = 0; i < val.length; i++) {
                const element = val[i];
                categorie_.push({
                    cat_id: element.split(',')[0],
                    cat_label: element.split(',')[1],
                })
            }
            return categorie_;
        },
        change_files() {
            this.img_temp = []
            var img_val = document.getElementById('prod_img')
            for (let i = 0; i < img_val.files.length; i++) {
                const element = URL.createObjectURL(img_val.files[i]);
                this.img_temp.push(element)
            }
            this.$store.state.imgTemp[0] = this.img_temp;
            this.$store.state.imgTemp[1] = img_val.files;
            this.$store.state.imgTemp[2] = 'prod';
        },
        change_file(val) {
            var img_val = document.getElementById('prod_img_' + val)
            this.$store.state.imgTemp[0][val] = URL.createObjectURL(img_val.files[0]); 
            this.$store.state.imgTemp[1][val]=URL.createObjectURL(img_val.files[0]); 
            this.$store.state.imgTemp[2] = 'prod';
        },
    },
    beforeMount() {
        this.get_cat()
        this.get_sous_cat()
       this.$store.state.imgTemp= [
            ['', '', '', ''],
            ['', '', ''], ''
        ]
    },
    mounted() {
        socket.on('sous_categorie', (data) => {
            var array = []
            for (let i = 0; i < data.reponse.length; i++) {
                const element = data.reponse[i];
                array.push(`${element['cat_id']}`, `${element['sous_cat_id']}`, element.sous_cat_label)
                array.push('][')
            }
            this.$cookies.set('souca__', array);
        })

        socket.on('categorie', (data) => {
            var array = []
            for (let i = 0; i < data.reponse.length; i++) {
                const element = data.reponse[i];
                array.push(`${element['cat_id']}`, element.cat_label)
                array.push('][')
            }
            this.$cookies.set('ca__', array);
        })
        const c = this.$cookies.get('ca__').split(',][,');
        this.cat_ = this.split1(c)
        this.cat_temp = this.split1(c)

        const k = this.$cookies.get('souca__').split('][,');
        this.sous_cat = this.split2(k)
        this.sou_cat_temp = this.split2(k)

    },
}
</script>

<style scoped>
img {
    position: relative;
    object-fit: cover;
    transition: .7s;
}
</style>
