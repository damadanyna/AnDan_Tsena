import io from 'socket.io-client'
var socket = io('http://localhost:4044')
import store from '../store'

socket.on('check_', (data) => {
    store.state.fournisseur = data;
})

socket.on('categorie', (data) => {
    store.state.categorie = data.reponse;

})
socket.on('sous_categorie', (data) => {
    store.state.sous_categorie = data.reponse;

})

export default socket