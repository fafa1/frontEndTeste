<template>
  <div>
    <div class="pag-navegacao">
      <b-pagination-nav :link-gen="linkGen" v-model="page" :number-of-pages="15" use-router></b-pagination-nav>
    </div>
    <b-form inline class="search" @submit="onSubmit">
    <label class="sr-only" for="inline-form-input-name">Pesquisar</label>
    <b-input
      v-model="dado"
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Nome da cerveja">
    </b-input>

    <b-button type="submit" variant="primary">Search</b-button>
  </b-form>
    <b-container class="pagina">
      <b-card
        id="dist"
        v-for="cerveja in cervejas" :key="cerveja.index"
        :title="cerveja.name"
        :img-src="cerveja.image_url"
        img-height="310"
        img-top
        tag="article"
        style="max-width: 15rem"
        class="mb-2">

      <b-card-text>
        {{ cerveja.description }}
      </b-card-text>

      <!-- <b-button v-b-modal.modal-1>Descrição</b-button> -->
    </b-card>
    
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">descrição</p>
    </b-modal>

    </b-container>
  </div>
</template>

<script>
import Cerveja from '../services/cervejasApi'

export default {
  name: 'cerveja',

  components: {
  },
  
  data() {
    return {
      cervejas: [],
      paginas: null,
      page: 1,
      dado: null
    }
  },

  mounted () {
    this.obterCerveja(8)
  },

  methods: {
    obterCerveja (pag) {
      Cerveja.listar(pag).then(res => {
        this.cervejas = res.data
        // this.paginas = res.config.params.page
      }).catch(error => {
        console.log(error)
      })
    },

    onSubmit () {
      if (this.dado) {
        Cerveja.filtarNome(this.dado).then(res => {
          this.cervejas = res.data
        })
      }
    
    //  console.log(this.dado)
   },

    linkGen(pageNum) {
      console.log(this.page)
      // colocar o retorno correto para tirar o undefined do navegador
        return `?${this.obterCerveja(this.page)}`
      }
  }
}
</script>

<style lang="scss">
  .card-img-top {
    padding: 14px;
  }
  .pag-navegacao {
    margin-top: 67px;
    margin-left: 35%;
    // margin-left: 50px;
  }
 .pagina {
   margin: auto;
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
</style>
