<template>
  <div class="wrapper">
    <i id="left" class="fa-solid fa-angle-left"></i>
    <ul class="carousel">
      <li v-for="item in items" class="card">
        <a :href="'document/' + item.id">
          <div class="contCard">
            <h4 class="textCard">
              {{ item.title }}
            </h4>
          </div>
        </a>
      </li>
    </ul>
    <i id="right" class="fa-solid fa-angle-right"></i>
  </div>
</template>

<style scoped>
/* Import Google font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

a {
  text-decoration: none;
  color: inherit;
}
.carousel ul {
  padding-inline-start: 0px;
}
.wrapper {
  max-width: 1100px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper i {
  top: 50%;
  height: 30px;
  width: 30px;
  cursor: pointer;
  font-size: 1.25rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 50px;
  background: #ffffff69;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translateY(-50%);
  transition: transform 0.1s linear;
}
.wrapper i:active {
  transform: translateY(-50%) scale(0.85);
}
.wrapper i:first-child {
  left: 0px;
}
.wrapper i:last-child {
  right: 0px;
}
.wrapper .carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% / 4) - 1px);
  margin: 0 0 -8px 40px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  border-radius: 8px;
  scroll-behavior: smooth;
  scrollbar-width: none;
  width: auto;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel.no-transition {
  scroll-behavior: auto;
}
.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}
.carousel.dragging .card {
  cursor: grab;
  user-select: none;
}
.carousel :where(.card, .img) {
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel .card {
  scroll-snap-align: start;
  height: 200px;
  width: 200px;
  list-style: none;
  background: #d9d9d9;
  cursor: pointer;
  flex-direction: column;
  border-radius: 8px;
  color: #464646;
}

.carousel .card h2 {
  font-weight: 500;
  font-size: 1.56rem;
  margin: 30px 0 5px;
}
.carousel .card span {
  color: #6a6d78;
  font-size: 1.31rem;
}

@media screen and (max-width: 900px) {
  .wrapper .carousel {
    grid-auto-columns: calc((100% / 2) - 10px);
  }
}

@media screen and (max-width: 600px) {
  .wrapper .carousel {
    grid-auto-columns: 100%;
  }
}

.textCard {
  font-size: medium;
  font-weight: 600;
  text-align: center;
}

.contCard {
  padding: 10px 10px;
  display: flex;
  align-items: baseline;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const resultado = ref(null);
const itemss = ref([null]);

const items = ref([{ id: "6486ad09fe9d2f87306da469", title: "Acuerto yonoseque" }]);

onMounted(() => {
  axios
    .get("http://localhost:3000/api/v1/document?year=2023")
    .then(function (response) {
      // handle success
      resultado.value = Object.values(response.data.data).slice(0, 8);
      for (const key in resultado.value) {
        if (Object.prototype.hasOwnProperty.call(resultado.value, key)) {
          const { _id, title } = resultado.value[key];
          items.value.push({ id: _id, title });
        }
      }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper");
  const carousel = document.querySelector(".carousel");
  const firstCardWidth = carousel.querySelector(".card").offsetWidth;
  const arrowBtns = document.querySelectorAll(".wrapper i");
  const carouselChildrens = [...carousel.children];

  let isDragging = false,
    isAutoPlay = true,
    startX,
    startScrollLeft,
    timeoutId;

  // Get the number of cards that can fit in the carousel at once
  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  // Insert copies of the last few cards to beginning of carousel for infinite scrolling
  carouselChildrens
    .slice(-cardPerView)
    .reverse()
    .forEach((card) => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

  // Insert copies of the first few cards to end of carousel for infinite scrolling
  carouselChildrens.slice(0, cardPerView).forEach((card) => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });

  // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
  carousel.classList.add("no-transition");
  carousel.scrollLeft = carousel.offsetWidth;
  carousel.classList.remove("no-transition");

  // Add event listeners for the arrow buttons to scroll the carousel left and right
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
  });

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (
      Math.ceil(carousel.scrollLeft) ===
      carousel.scrollWidth - carousel.offsetWidth
    ) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
  };

  const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 5000);
  };
  autoPlay();

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("scroll", infiniteScroll);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);
});
</script>
