<script setup>
import simpleSearchButton from "../../buttons/simpleSearchButton.vue";
import carf from "../utils/carousel.vue";
import slider from "../utils/slider.vue";
import recomendationSlider from "../utils/recomendSlider.vue";
import { ref, onMounted } from "vue";

let btnSimpleClass = ref("alm");
let clickOnBottom = ref(false);

const simpleClick = () => {
  btnSimpleClass.value = "alm2";
  clickOnBottom.value = true;
};

const isClickedOutside = ref(false);

//PASAR
const prueba = ref("simplesearch?word=csu");
const inputValue = ref("");
const storedValue = ref("");

const storeInputValue = () => {
  storedValue.value = inputValue.value;
  window.location.href = "/simplesearch?word=" + storedValue.value;
};
</script>

<template>
  <div class="main-lg">
    <div class="tituloz">
      <H1
        >SISTEMA DE INFORMACIÓN NORMATIVA, JURISPRUDENCIAL Y DE CONCEPTOS DE
        RÉGIMEN LEGAL</H1
      >
    </div>
    <div class="m1">
      <div class="messagge-main">
        <p class="Desc">
          Esta es una herramienta diseñada para recopilar, organizar y difundir
          la legislación, jurisprudencia y conceptos relacionados con el régimen
          legal de la Universidad Nacional de Colombia.

          <br />
          <br />

          Nuestro objetivo principal es facilitar el acceso y la consulta de la
          información legal relevante para los profesionales del derecho, como
          abogados, jueces, investigadores y estudiantes. Proporciona una
          plataforma centralizada donde se pueden encontrar leyes, decretos,
          reglamentos, resoluciones judiciales, entre otros.
        </p>

        <div class="alm">
          <simpleSearchButton class="btn-unloged" v-slot:name-button
            ><a href="/simplesearch">Busqueda simple</a></simpleSearchButton
          >

          <simpleSearchButton class="btn-unloged-as" v-slot:name-button
            ><a href="/advancedsearch">Busqueda avanzada</a></simpleSearchButton
          >
        </div>
      </div>
    </div>
    <div class="aaaaa">
      <slider />
    </div>
  </div>
</template>

<style scoped>
.btn-unloged {
  height: 250px;
  width: 250px;
  margin: 0 20px;
  background-image: url("../../../assets/simplesearch.jpg");
  background-size: cover;
  background-position: center;
  font-size: 20px;
  font-weight: bolder;
  color: white;
}
.btn-unloged:hover{
  scale: 1.01 ;
}

.btn-unloged-as {
  height: 250px;
  width: 250px;
  margin: 0 20px;
  background-image: url("../../../assets/advanced_search.jpg");
  background-size: cover;
  background-position: center;
  font-size: 20px;
  font-weight: bolder;
  color: white;
}

.btn-unloged-as:hover{
  scale: 1.01 ;
}
.search_input {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.search_input input {
  width: 250px;
  height: 40px;
  border: 2px solid;
  border-color: gray;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  padding-left: 5px;
  transition: all 0.7s ease;
}

.search_input input:focus {
  outline: none;
  border-color: #0500ff;
}
.search_input input:hover {
  outline: none;
  border-color: #0500ff;
}
.alm {
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-lg {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tituloz {
  width: 100%;
  font-weight: bold;
}
.tituloz h1 {
  width: 100%;
  font-weight: bold;
  color: aliceblue;
}

.aaaaa {
  margin-top: 0;
  background-color: rgb(217, 217, 217, 0.15);
  padding: 30px 10px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.m1 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 40px 0;
}

.messagge-main {
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.recomendaciones {
  max-width: 550px;
  min-width: 550px;
}

.recomendaciones rec {
  text-align: center;
  color: brown;
}

.Desc {
  margin: 50px 0;
  width: 400px;
}

.titulo {
  background-color: rgb(217, 217, 217, 0.15);
  border-radius: 10px 10px 2px 2px;
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 400;
}

.base {
  margin-top: 5px;
  background-color: rgb(217, 217, 217, 0.15);
  border-radius: 2px 2px 2px 2px;
  padding: 20px;
}

.material-symbols-outlined {
  display: flex;
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50px;
  transition: all 0.7s ease;
  margin: 0 5px;
  font-variation-settings: "FILL" 1, "wght" 700, "GRAD" 200, "opsz" 48;
}

.material-symbols-outlined:hover {
  cursor: pointer;
  background-color: rgba(128, 128, 128, 0.452);
  color: rgb(9, 176, 218);
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}
</style>
