import { createStore } from "vuex";

import axios from 'axios'

export default createStore({
    state: {
        theme_dark: true,
        showMenu: false,
        searchBar: false,
        showFrame: false,
        logged: false,
        show_form: [false, 'perso'],
        fournisseur: {},
        categorie: {},
        sous_categorie: {},
        show_notif: [false, ''],
        imgTemp: [
            ['', '', '', ''],
            ['', '', ''], ''
        ],
        //save image
        save_img: {
            show_: false,
            indexing: 0,
            end: 0,
            message: 'importation',
            success: false
        },
        index: 0,
        getItemOfProd_: {},
        listeProd_: [{
                idProd_: 1,
                img: "img1.jpg",
                moreImg: [
                    "img1.jpg",
                    "img2.jpg",
                    "img3.jpg",
                    "img4.jpg",
                ],
                label: "Mofo",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: false,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
            {
                idProd_: 2,
                img: "img2.jpg",
                moreImg: ["img2.jpg", "img1.jpg", "img3.jpg", "img4.jpg"],
                label: "Cake",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: false,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
            {
                idProd_: 3,
                img: "img3.jpg",
                moreImg: ["img3.jpg", "img2.jpg", "img13.jpg", "img4.jpg"],
                label: "Cake",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: true,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
            {
                idProd_: 4,
                img: "img13.jpg",
                moreImg: ["img13.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
                label: "Cake",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: true,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
            {
                idProd_: 5,
                img: "img5.jpg",
                moreImg: ["img5.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
                label: "Cake",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: false,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
            {
                idProd_: 6,
                img: "img6.jpg",
                moreImg: ["img6.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
                label: "Longouste",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: true,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
            {
                idProd_: 7,
                img: "img7.jpg",
                moreImg: ["img7.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
                label: "Cake",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: true,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
            {
                idProd_: 8,
                img: "img8.jpg",
                moreImg: ["img8.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
                label: "Cake",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: true,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
            {
                idProd_: 9,
                img: "img9.jpg",
                moreImg: ["img9.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
                label: "Cake",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: true,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
            {
                idProd_: 10,
                img: "img10.jpg",
                moreImg: ["img10.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
                label: "Cake",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: false,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
            {
                idProd_: 11,
                img: "img11.jpg",
                moreImg: ["img11.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
                label: "Cake",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: true,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
            {
                idProd_: 12,
                img: "img12.jpg",
                moreImg: ["img12.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
                label: "Cake",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: false,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
            {
                idProd_: 13,
                img: "img12.jpg",
                moreImg: ["img12.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
                label: "Cake",
                description: "Produit comméstible pret à être manger",
                prix: "2000",
                public: false,
                detail: "Avec boullant de poullet",
                fournisseur: "Mt Fianar",
                reaction: "",
                date: "il y a 2j",
            },
        ],
    },
    getters: {},
    mutations: {

        async enreg_(state, array) {
            try {
                var _r = null;
                if (array.methode == 'post') {
                    _r = await axios.post(array.url, array.data)
                    console.log(_r);
                } else if (array.methode == 'put') {
                    _r = await axios.put(array.url, array.data)
                } else if (array.methode == 'get') {
                    _r = await axios.get(array.url)

                }
            } catch (e) {
                alert('Erreur de connexion')
            }
        },
        async chek_(state, array) {
            try {
                var _r = null;
                if (array.methode == 'post') {
                    _r = await axios.post(array.url, array.data)
                    if (_r.data.status) {
                        state.fournisseur = _r.data.data
                    }
                } else {
                    _r = await axios.get(array.url)
                    if (_r.data.status) {
                        if (_r.data.status == true) {
                            state.logged = true;
                            state.fournisseur = _r.data.data
                        } else if (_r.data.status == 401) {
                            state.show_notif[0] = true
                            state.show_notif[1] = _r.data.message
                        } else if (_r.data.status == 403) {
                            state.show_notif[0] = true
                            state.show_notif[1] = _r.data.message
                        }
                    }
                }
            } catch (e) {
                alert('Erreur de connexion')
                console.log(e);
            }
        },
        async getOne_(state, array) {
            try {
                const _r = await axios.post(array.url)
                let _d = _r.data
                if (_d.status) {
                    console.log(_d);
                }
            } catch (e) {
                alert('Erreur de connexion')
            }
        },
        async uploadFile(state, array) {
            try {
                let _r = null;
                if (array[1] == 'bg') {
                    let formData = new FormData();
                    formData.append("usr-img", array[0]);
                    _r = await axios.post('api/imgBg', formData)
                    if (_r.data.status) {
                        this.commit('chek_', { url: 'api/login', methode: 'post', data: { fourn_tel: state.fournisseur.fourn_tel, fourn_pass: state.fournisseur.fourn_pass } })
                    }

                } else if (array[1] == 'logo') {
                    let formData = new FormData();
                    formData.append("usr-img", array[0]);
                    _r = await axios.post('api/img', formData)
                    if (_r.data.status) {
                        this.commit('chek_', { url: 'api/login', methode: 'post', data: { fourn_tel: state.fournisseur.fourn_tel, fourn_pass: state.fournisseur.fourn_pass } })
                    }
                } else if (array[1] == 'prod') {
                    state.save_img.show_ = true;
                    state.save_img.end = array[0].length;
                    for (let i = 0; i < array[0].length; i++) {
                        let formData = new FormData();
                        formData.append("usr-img", array[0][i]);
                        _r = await axios.post('api/prod_img/' + array[2], formData)
                        state.save_img.indexing = i + 1
                        if (i + 1 == array[0].length) {
                            state.save_img.message = 'Succées'
                            state.save_img.success = true
                            setTimeout(() => {
                                state.save_img.show_ = false;
                            }, 1500);
                            setTimeout(() => {
                                state.save_img.success = false
                                state.save_img.message = 'Importation'
                            }, 1600);
                        }
                    }
                }
            } catch (e) {
                console.log(e);
                alert("Erreur du connexion")
            }
        },
    },
    actions: {},
    modules: {},
});