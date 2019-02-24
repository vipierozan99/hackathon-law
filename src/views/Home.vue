<template>
  <div>
    <v-layout align-center justify-center row fill-height wrap>
      <v-card class="backLogo" style="margin 50px">
        <v-card-title class="headline mb-0"><h1>2Brave</h1></v-card-title>
      </v-card>
    </v-layout>

    <v-layout align-center justify-center row fill-height wrap>
      <v-card  Class="informativo" style="margin 30px">
        <v-card-title class="headline mb-0"><h1>Titulo</h1></v-card-title>
        <div>Text text text texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext   texttexttexttexttexttexttexttexttext \n saddassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          asdsaaaaaaaaaaaaaaa
          asdasdasdasasdasdsadasd
        </div>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
.informativo{
  width: 90%;

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
  width: 500px;
  height: 300px;
  margin: 30px;
}

</style>

