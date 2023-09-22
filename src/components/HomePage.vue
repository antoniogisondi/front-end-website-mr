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
        <div class="container px-0 mx-0 container-image text-center">
            <div class="row mx-0">
                <div class="col-12">
                    <div class="text">
                        <p>
                            Una costruzione con cui puoi stare bene
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container px-0 mx-0 container-custom-about-us text-center">
            <div data-aos="fade-right" class="row mx-0">
                <div class="col-12">
                    <h1 class="custom-heading">Chi Siamo</h1>
                    <p class="custom-description">Siamo un'azienda edile con una lunga tradizione di eccellenza nel
                        settore
                        delle costruzioni. Scopri di più su di noi e sulla nostra missione.</p>
                </div>
            </div>
            <div data-aos="fade-left" class="row mx-0">
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
                    <router-link class="btn btn-success" :to="{ name: 'contact_us' }">Contattaci</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  

<style lang="scss">
.container-image {
    background-image: url('../assets/bg-mr.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100vw;
    height: 100vh;
}

.container-custom-about-us {
    background-color: rgba(235, 235, 235, 255);
    max-width: 100vw;
}

.container-custom-contacts {
    background-color: rgba(20, 20, 18, 255);
    max-width: 100vw;
}
</style>