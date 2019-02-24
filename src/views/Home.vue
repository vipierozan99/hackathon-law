<template>
  <div>
    <v-parallax src="http://www.hytest.hallmarkautogroup.com/wp-content/uploads/2014/02/01b1.jpg">
      <v-layout align-center column justify-center>
        <v-layout align-center justify-center row wrap>
          <v-flex xs12>
            <v-card class="backLogo"></v-card>
          </v-flex>
        </v-layout>
        <v-layout align-start justify-space-around row>
          <v-flex xs2>
            <h1 class="display-4 font-weight-thin mb-3 teste">2</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="display-4 font-weight-thin mb-3 verde">B</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="display-4 font-weight-thin mb-3 azul">R</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="display-4 font-weight-thin mb-3 amarelo">A</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="display-4 font-weight-thin mb-3 teste">V</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="display-4 font-weight-thin mb-3 teste">E</h1>
          </v-flex>
        </v-layout>
        <v-layout justify-center row>
          <v-flex xs8>
            <h1 class="font-weight-bold teste">
              Somos uma plataforma que conecta mulheres que desconhecem ou tem duvidas sobre seus direitos
              a uma rede de advogadas dispostas a ajudá-lase orienta-las de forma voluntária.
            </h1>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-parallax>

    <v-parallax src="http://www.planwallpaper.com/static/images/6942095-abstract-background-wallpaper.jpg">
      <v-layout align-center column justify-center>
        <h1 class="display-3 font-weight-bold">Não sou advogada como Funiona?</h1>
      </v-layout>
      <v-layout justify-center row>
          <v-flex xs8>
            <h1 class="font-weight-bold">
              Você se cadastra, conta qual é seu problema ou sua duvida, e então é só aguarda que o mais rapido possivel 
              uma voluntaria vai te aconcelhar.
            </h1>
          </v-flex>
        </v-layout>
    </v-parallax>

    <v-parallax
      src="http://www.hytest.hallmarkautogroup.com/wp-content/uploads/2014/02/01b1.jpg"
    >
      <v-layout align-center column justify-center>
        <v-layout align-center justify-center row wrap>
          <v-flex xs12>
            <h1 class="display-3 font-weight-thin mb-3 teste">Sou Advogada como posso participar?</h1>
          </v-flex>
        </v-layout>
      </v-layout>

      <v-layout justify-center row>
          <v-flex xs8>
            <h1 class="font-weight-bold teste">
              Você se cadastra, e fica aguardando uma duvida, quando receber você dá apoio a pessoa que pergunto :D .
            </h1>
          </v-flex>
        </v-layout>
    </v-parallax>

    <v-parallax src="http://www.planwallpaper.com/static/images/6942095-abstract-background-wallpaper.jpg">
      
      
      <v-layout row align-center justify-space-around>
        <v-flex xs4>
          <h3 class="display-2 ">emergencia 180</h3>
        </v-flex>
        <v-flex xs4>
          <h3 class="display-2 ">lalalala</h3>
        </v-flex>
        <v-flex xs4>
          <h3 class="display-2">2 passo</h3>
        </v-flex>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
.teste {
  color: #000;
  
}
.verde {
  color: #1b5e20;
  font-family: hero light; 
}
.azul {
  color: #01579b;
}
.amarelo {
  color: #ffca28;
}
.backLogo {
  border-radius: 200px 0px 200px 0px;
  -moz-border-radius: 200px 0px 200px 0px;
  -webkit-border-radius: 200px 0px 200px 0px;
  border: 0px solid #000000;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(51%, rgba(255, 255, 255, 1)),
    color-stop(51%, rgba(5, 5, 5, 1)),
    color-stop(100%, rgba(5, 5, 5, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 51%,
    rgba(5, 5, 5, 1) 51%,
    rgba(5, 5, 5, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#050505', GradientType=1 );
  width: 333px;
  height: 200px;
}
</style>

