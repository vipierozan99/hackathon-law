<template>
  <div id="CadastroMulher">

    <v-card class="mx-auto" color="#ffffff" white max-width="400">
        <v-card-title primary-title>
          <div>
              <h1 class="HeadLine mb-0">Cadastro Mulher</h1>
          </div>
        </v-card-title>

      <v-form>
        <v-container xs12 sm4 text-xs-center>
          <v-layout row wrap>
            <v-text-field label="Login"></v-text-field>
          </v-layout>

          <v-layout row wrap>
            <v-text-field label="Senha"></v-text-field>
          </v-layout>

          <v-layout row wrap>
            <v-text-field label="Confirme Senha"></v-text-field>
          </v-layout>

          <v-layout row wrap>
            <v-text-field label="Pergunta de Segurança"></v-text-field>
          </v-layout>

          <v-layout row wrap>
            <v-text-field label="Resposta de segurança"></v-text-field>
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
</script>

<style>
</style>
