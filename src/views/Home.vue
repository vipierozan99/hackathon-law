<template>
  <div>
    <v-parallax src="https://firebasestorage.googleapis.com/v0/b/hackathon-law.appspot.com/o/01b1.jpg?alt=media&token=a62e345c-d4a6-4ca2-ad8b-f94220a5aa2d">
      <v-layout align-center column justify-center>
        <v-layout align-center justify-center row wrap>
          <v-flex xs12>
            <v-card class="backLogo">
              <v-img height="200px" width="150px" src="https://firebasestorage.googleapis.com/v0/b/hackathon-law.appspot.com/o/Logo2brave.jpg?alt=media&token=d17ff5c8-7b84-4e43-aa1b-1bab97fbebcb"></v-img>
            </v-card>
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
              Acreditamos que a informação é o primeiro passo para tomar uma decisão 
              
              O que você vai encontrar aqui?
              
              Aqui você encontra facilidade de informação e os primeiros passos para tomar caso tenha sofrido 
              algum tipo de violencia e descriminição contra mulher.
            </h1>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-parallax>

    <v-parallax src="https://firebasestorage.googleapis.com/v0/b/hackathon-law.appspot.com/o/6942095-abstract-background-wallpaper.jpg?alt=media&token=9c863684-c9c0-431a-a698-94f8b6c7736a">
      <v-layout align-center column justify-center>
        <h1 class="display-3 font-weight-bold">Não sou advogada como Funciona?</h1>
      </v-layout>
      <v-layout justify-center row>
          <v-flex xs8>
            <h1 class="font-weight-bold">
              Você coloca seu email e senha, conta qual é seu problema ou sua duvida, e uma advogada voluntária 
              entrara em contato para lhe auxiliar.
            </h1>
          </v-flex>
        </v-layout>
    </v-parallax>

    <v-parallax
      src="https://firebasestorage.googleapis.com/v0/b/hackathon-law.appspot.com/o/01b1.jpg?alt=media&token=a62e345c-d4a6-4ca2-ad8b-f94220a5aa2d"
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
              Você se cadastra, aguarda surgir uma dúvida, quando encontra-la você dá seu apoio a esta mulher.
            </h1>
          </v-flex>
        </v-layout>
    </v-parallax>

    <v-parallax src="https://firebasestorage.googleapis.com/v0/b/hackathon-law.appspot.com/o/6942095-abstract-background-wallpaper.jpg?alt=media&token=9c863684-c9c0-431a-a698-94f8b6c7736a">
      
      
      <v-layout row align-center justify-space-around>
        <v-flex xs6>
          <h3 class="display-2 ">delegacia da mulher 180</h3>
        </v-flex>
        <v-flex xs6>
          <h3 class="display-2 ">Policia militar 190</h3>
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
  border-radius: 80px 0px 80px 0px;
  -moz-border-radius: 80px 0px 80px 0px;
  -webkit-border-radius: 80px 0px 80px 0px;
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
  width: 150px;
  height: 200px;
}
</style>

