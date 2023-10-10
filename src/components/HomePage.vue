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
        <div class="container-fluid px-0 mx-0 footer">
            <div class="row mx-0">
                <div class="col-4 ms-5 mt-5">
                    <img class="logo img-fluid" src="../assets/logo-mr.png" alt="logo-mr">
                </div>
            </div>
            <div class="row">
                <div class="col">

                </div>
                <div class="col">

                </div>
                <div class="col">

                </div>
            </div>
        </div>
    </div>
</template> 

<!-- <router-link :to="{ name: 'contact_us' }">
    <button class="bn632-hover bn22">Contattaci</button>
</router-link> -->
<style lang="scss">
@use '../styles/generals.scss' as *;

// FOOTER
.logo {
    max-width: 200px;
}

.footer {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/bg-footer.png');
    background-size: cover;
    background-repeat: no-repeat;
}

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

// END
</style>