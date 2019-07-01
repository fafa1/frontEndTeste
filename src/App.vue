<template>
  <div>
    <div>
      <b-navbar type="dark" fixed="top" variant="dark">
        <b-navbar-nav>
          <b-nav-item to="cerveja">Home</b-nav-item>
          <b-nav-item to="cadastro">Cadastro</b-nav-item>
          <b-nav-item to="login">Login</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <div>
  <!-- <b-form inline class="search" @submit="onSubmit">
    <label class="sr-only" for="inline-form-input-name">Pesquisar</label>
    <b-input
      v-model="dado"
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Jane Doe">
    </b-input>

    <b-button type="submit" variant="primary">Search</b-button>
  </b-form> -->
</div>
    
    <transition name="moveInUp">
      <router-view/>
    </transition>
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
      dado: null
    }
  },

  methods: {

   onSubmit () {
     Cerveja.filtarNome(this.dado)
     console.log(this.dado)
   } 
  }

}
</script>

<style lang="scss">
 #app {
   /* margin: 60px; */
   align-items: center;
 }

 .search {
   margin-top: 70px;
   margin-left: 100px;
 }

.bg-dark {
  margin-bottom: 40px
}

.moveInUp-enter-active {
  animation: fadeIn 2s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveInUp-leave-active {
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp {
 0% {
  transform: translateY(0);
 }
  100% {
  transform: translateY(-400px);
 }
}
</style>
