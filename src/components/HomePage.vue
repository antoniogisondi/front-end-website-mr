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
    <div class="container-fluid p-0 m-0">
        <div class="container px-0 mx-0 container-custom-about-us">
            <div class="row mx-0 d-flex justify-content-center py-4">
                <div data-aos="fade-right" class="col-4 text-start pt-5">
                    <h1>Chi Siamo</h1>
                    <p>Siamo un'azienda edile con una lunga tradizione di eccellenza nel
                        settore
                        delle costruzioni. Scopri di più su di noi e sulla nostra missione.</p>

                    <h2 class="custom-subheading">La Nostra Missione</h2>
                    <p class="custom-subdescription">La nostra missione è fornire soluzioni edili di alta qualità che
                        soddisfino
                        le esigenze e le aspettative dei nostri clienti, garantendo sempre la massima professionalità e
                        attenzione
                        ai dettagli.</p>

                    <h2 class="custom-subheading">La Nostra Storia</h2>
                    <p class="custom-subdescription">Da oltre 20 anni operiamo nel settore edile, realizzando progetti
                        di successo
                        e guadagnandoci la fiducia di clienti soddisfatti. La nostra esperienza è la tua garanzia di
                        qualità.</p>
                </div>
                <div data-aos="fade-left" class="col col-size d-flex justify-content-end">
                    <img src="../assets/about-us-img.png" alt="about-us">
                </div>
            </div>
        </div>
        <ServicesHome />
        <Projects />
        <div class="container-fluid px-0 mx-0 footer d-flex justify-content-around">
            <div class="row mx-0 mt-5 w-25">
                <div class="col-4">
                    <img class="logo" src="../assets/logo-mr.png" alt="logo-mr">
                </div>
            </div>
            <div class="row mx-0 d-flex justify-content-center mt-5 w-75">
                <div class="col">
                    <h5>SERVIZI</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Opere Edili
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Restauri
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Ristrutturazioni
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Consolidamenti
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Progettazioni
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h5>CONTATTI</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Opere Edili
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Restauri
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Ristrutturazioni
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Consolidamenti
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Progettazioni
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h5>DOVE SIAMO</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Opere Edili
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Restauri
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Ristrutturazioni
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Consolidamenti
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link text-muted">
                                Progettazioni
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template> 


<style lang="scss">
@use '../styles/generals.scss' as *;

// FOOTER
.logo {
    max-width: 200px;
}

.footer {
    height: 100vh;
    background-image: url('../assets/bg-footer.png');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>