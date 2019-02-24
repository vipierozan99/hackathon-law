<template>
  <div>
    <v-parallax src="http://www.wallpaperstalk.com/wp-content/uploads/2019/01/ailQ04b3B.jpg">
      <v-layout align-center column justify-center>
        <v-layout align-center justify-center row wrap>
          <v-flex xs12>
            <v-card class="backLogo"></v-card>
          </v-flex>
        </v-layout>
        <v-layout align-start justify-space-around row>
          <v-flex xs2>
            <h1 class="display-4 font-weight-medium mb-3 teste">2</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="display-4 font-weight-medium mb-3 verde">B</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="display-4 font-weight-medium mb-3 amarelo">R</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="display-4 font-weight-medium mb-3 azul">A</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="display-4 font-weight-medium mb-3 teste">V</h1>
          </v-flex>
          <v-flex xs2>
            <h1 class="display-4 font-weight-bold mb-3 teste">E</h1>
          </v-flex>
        </v-layout >
        <v-layout justify-center row>
          <h1 class="teste">Somos uma plataforma que conecta mulheres que desconhecem ou tem duvidas sobre seus direitos 
                            a uma rede de advogadas dispostas a ajudá-lase orienta-las de forma voluntária.
          </h1>
        </v-layout>
      </v-layout>
    </v-parallax>

    <v-parallax
      src="http://www.hytest.hallmarkautogroup.com/wp-content/uploads/2014/02/01b1.jpg"
    >
      <v-layout align-center column justify-center>
        <h1>Como Funiona?</h1>
      </v-layout>
    </v-parallax>

    <v-parallax src="http://www.planwallpaper.com/static/images/6942095-abstract-background-wallpaper.jpg"
    >
      <v-layout align-center column justify-center>
        <v-layout align-center justify-center row wrap>
          <v-flex xs12>
            <h1 class="display-4 font-weight-thin mb-3 teste">Como Participar?</h1>
          </v-flex>
        </v-layout>
        </v-layout>

        <v-layout row justify-space-around>
          <v-flex xs2>
            <h3 class="display-2 teste">1 passo</h3>
          </v-flex>
          <v-flex xs2>
            <h3 class="display-2 teste">2 passo</h3>
          </v-flex>
        </v-layout>
      
    </v-parallax>

    <v-parallax src="http://www.wallpaperstalk.com/wp-content/uploads/2019/01/ailQ04b3B.jpg"
    >
      <v-layout align-center column justify-center>
        <v-layout align-center justify-center row wrap>
          <v-flex xs12>
            <h1 class="display-4 font-weight-thin mb-3 teste">Como Participar?</h1>
          </v-flex>
        </v-layout>
        </v-layout>

        <v-layout row justify-space-around>
          <v-flex xs2>
            <h3 class="display-2 teste">1 passo</h3>
          </v-flex>
          <v-flex xs2>
            <h3 class="display-2 teste">2 passo</h3>
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

