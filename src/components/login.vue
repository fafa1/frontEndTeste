<template>
  <div>
    <b-card-group deck class="card-">
    <b-card
      header="Login"
      header-tag="header"
      footer=""
      footer-tag="footer"
      title="Entre com suas Credenciais">

      <b-card-text>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email"
            label-for="input-1"
            description="Entre com seu Email">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Digite seu email">
            </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Password"
            label-for="input-2"
            description="Entre com sua senha">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              required
              placeholder="Digite sua senha">
            </b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>

      </b-card-text>
      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
    </b-card>

  </b-card-group>
  </div>
</template>

<script>
import Cerveja from '../services/cervejasApi'
export default {
  name: 'login',

  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },

  methods: {
    async onSubmit () {
      // enviar para o back-end
      Cerveja.login(this.form.email, this.form.password)
      this.onReset()
    },

    onReset() {
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
  }
}
</script>

<style scoped>
#pagina {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.card-deck {
  max-width: 650px;
  margin-left: 25%;
  margin-bottom: 40px;
}

</style>

