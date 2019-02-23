<template>
  <div id="CadastroAdv">
    <v-card class="mx-auto" color="#ffffff" white max-width="400">
      <v-card-title primary-title>
        <div>
          
        </div>
      </v-card-title>

      <v-form>
        <v-container xs12 sm4 text-xs-center>

          <v-layout row wrap>
            <v-text-field label="Nome Completo"></v-text-field>
          </v-layout>

          <v-layout row wrap>
            <v-text-field label="OAB"></v-text-field>
          </v-layout>

          <v-layout row wrap>
            <v-text-field label="E-mail"></v-text-field>
          </v-layout>

          <v-layout row wrap>
            <v-text-field label="Senha"></v-text-field>
          </v-layout>

          <v-layout row wrap>
            <v-text-field label="Confirme Senha"></v-text-field>
          </v-layout>

          <v-layout align-center>
            <div>
              <v-btn small>Cadastrar</v-btn>
            </div>
          </v-layout>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
