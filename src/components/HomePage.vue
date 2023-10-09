<script>
import 'aos/dist/aos.css';
import AOS from 'aos';
import ServicesHome from '../pages/ServicesHome.vue'
import Projects from '../pages/Projects.vue';
import Blog from '../pages/Blog.vue';
export default {
    components: {
        ServicesHome,
        Projects,
        Blog
    },
    data() {
        return {

        }
    },
    mounted() {
        AOS.init();

    }
}
</script>

<template>
    <div class="container-fluid p-0">
        <div class="container px-0 mx-0 container-custom-about-us text-center d-flex flex-column align-items-center">
            <div data-aos="fade-right" class="row mx-0">
                <div class="col-12">
                    <h1 class="custom-heading">Chi Siamo</h1>
                    <p class="custom-description">Siamo un'azienda edile con una lunga tradizione di eccellenza nel
                        settore
                        delle costruzioni. Scopri di più su di noi e sulla nostra missione.</p>
                </div>
            </div>
            <div data-aos="fade-left" class="row mx-0 row-size">
                <div class="col-12">
                    <h2 class="custom-subheading">La Nostra Missione</h2>
                    <p class="custom-subdescription">La nostra missione è fornire soluzioni edili di alta qualità che
                        soddisfino
                        le esigenze e le aspettative dei nostri clienti, garantendo sempre la massima professionalità e
                        attenzione
                        ai dettagli.</p>
                </div>
            </div>
            <div data-aos="fade-right" class="row mx-0">
                <div class="col-12">
                    <h2 class="custom-subheading">La Nostra Storia</h2>
                    <p class="custom-subdescription">Da oltre 20 anni operiamo nel settore edile, realizzando progetti
                        di successo
                        e guadagnandoci la fiducia di clienti soddisfatti. La nostra esperienza è la tua garanzia di
                        qualità.</p>
                </div>
            </div>
        </div>
        <ServicesHome />
        <Projects />
        <div class="container px-0 mx-0 container-custom-contacts text-center">
            <div class="row mx-0">
                <div class="col-12 d-flex justify-content-center">
                    <h1 class="custom-heading">Contattaci</h1>
                </div>
            </div>
            <div class="row mx-0 d-flex justify-content-center align-items-center">
                <div class="col-12">
                    <img src="../assets/contacts.jpg" class="img-fluid">
                </div>
                <div class="col-12 mt-3">
                    <router-link :to="{ name: 'contact_us' }">
                        <button class="bn632-hover bn22">Contattaci</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  

<style lang="scss">
// CUSTOM ABOUT US
.container-custom-about-us {
    background-color: rgba(235, 235, 235, 255);
    max-width: 100vw;

    .row-size {
        max-width: 100%;
    }
}

.container-custom-contacts {
    background-color: rgba(20, 20, 18, 255);
    max-width: 100vw;
}

// END

// CONTACT US BUTTONS EFFECTS
.bn632-hover {
    width: 160px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.bn632-hover:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.bn632-hover:focus {
    outline: none;
}

.bn632-hover.bn22 {
    background-image: linear-gradient(to right,
            #0ba360,
            #3cba92,
            #30dd8a,
            #2bb673);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}
</style>