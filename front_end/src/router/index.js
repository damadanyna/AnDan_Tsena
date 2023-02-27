import { createRouter, createWebHistory } from "vue-router";
import tableauDebord from "../views/tableauDeBord_.vue";
import produit from "../views/produit_.vue";
import profil from "../views/configuration_.vue";
import analytique from "../views/analytique_.vue"
import productProperty from "../views/produit/myProduct_.vue"
import formulaire from '../views/fomulaire_.vue'
import inscription from '../views/authentification/inscription_.vue'

const routes = [{
        path: "/tableauDebord",
        name: "tableauDebord",
        component: tableauDebord,
    }, {
        path: "/accueil",
        name: "tableauDebord",
        component: tableauDebord,
    }, {
        path: "/produit",
        name: "produit",
        component: produit,
        children: [{
            path: "/produit/:id",
            name: "myProduct",
            component: productProperty,
        }]
    }, {
        path: "/analytique",
        name: "analytique",
        component: analytique,
    }, {
        path: "/profil",
        name: "profil",
        component: profil,
    }, {
        path: "/formulaire",
        name: "formulaire",
        component: formulaire,
    }, {
        path: "/inscription",
        name: "inscription",
        component: inscription,
    },
    {
        path: "/",
        redirect: "/accueil",
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;