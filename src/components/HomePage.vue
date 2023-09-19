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
        <div class="container-image">
            <div class="row">
                <div class="col-12 d-flex justify-content-center align-items-center">
                    <div class="text text-center">
                        <p>
                            Una costruzione con cui puoi stare bene
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-custom-about-us pt-md-5">
            <div class="custom-content">
                <div data-aos="fade-right" class="row custom-row">
                    <div class="col-12 my-3">
                        <h1 class="custom-heading">Chi Siamo</h1>
                        <p class="custom-description">Siamo un'azienda edile con una lunga tradizione di eccellenza nel
                            settore
                            delle costruzioni. Scopri di più su di noi e sulla nostra missione.</p>
                    </div>
                </div>
                <div data-aos="fade-left" class="row custom-row">
                    <div class="col-12 my-3">
                        <h2 class="custom-subheading">La Nostra Missione</h2>
                        <p class="custom-subdescription">La nostra missione è fornire soluzioni edili di alta qualità che
                            soddisfino
                            le esigenze e le aspettative dei nostri clienti, garantendo sempre la massima professionalità e
                            attenzione
                            ai dettagli.</p>
                    </div>
                </div>
                <div data-aos="fade-right" class="row custom-row">
                    <div class="col-12 my-3">
                        <h2 class="custom-subheading">La Nostra Storia</h2>
                        <p class="custom-subdescription">Da oltre 20 anni operiamo nel settore edile, realizzando progetti
                            di successo
                            e guadagnandoci la fiducia di clienti soddisfatti. La nostra esperienza è la tua garanzia di
                            qualità.</p>
                    </div>
                </div>
            </div>
        </div>
        <ServicesHome />
        <Projects />
        <div class="container-custom-contacts">
            <div class="custom-content">
                <div class="row">
                    <div class="col-12 my-5">
                        <h1 class="custom-heading">Contattaci</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mb-4">
                        <img src="../assets/contacts.jpg" class="img-fluid">
                    </div>
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <router-link class="btn btn-success" :to="{ name: 'contact_us' }">Contattaci</router-link>
                    </div>
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
    width: 100vw;
    height: 100vh;
}
</style>