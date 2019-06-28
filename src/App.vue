<template>
  <div id="app">
    <div class="overflow-auto">
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="3" use-router></b-pagination-nav>
  </div>
  <b-container class="pagina" id="dista">
    <b-card
      v-for="cerveja in cervejas" :key="cerveja.index"
      id="dist"
      :per-page="5"
      :title="cerveja.name"
      :current-page="1"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 15rem"
      class="mb-2">

    <b-card-text>
      <!-- {{ cerveja.description }} -->
    </b-card-text>

    <b-button v-b-modal.modal-1>Descrição</b-button>
  </b-card>
  
  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>

    <!-- <router-view/> -->
  </b-container>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Cerveja from './services/cervejasApi'
export default {
  name: 'App',
  
  data() {
    return {
      cervejas: []
    }
  },

  mounted () {
    Cerveja.listar().then(res => {
      this.cervejas = res.data
      console.log(this.cervejas)
    }).catch(err => {
      console.log(err)
    })

  },

  methods: {
  },
}
</script>

<style>
 .pagina {
    margin-top: 70px;
    padding: 0px;
    /* justify-content: center; */
    /* align-items: center; */
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
 }
 #dist {
   margin: 10px;
 }

 #app {
 }

</style>
