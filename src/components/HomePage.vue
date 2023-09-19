<script>
import Services from '../pages/Services.vue';
import Projects from '../pages/Projects.vue';
import Blog from '../pages/Blog.vue';
export default {
    components: {
        Services,
        Projects,
        Blog
    },
    data() {
        return {

        }
    }
}
</script>
<template>
    <div class="container-fluid image">
        <div class="row">
            <div class="col-12 col-md-6 d-flex flex-row justify-content-center align-items-center">
                <div class="text">
                    <p>
                        Una costruzione con cui puoi stare bene
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-custom-about-us pt-5">
        <div class="custom-content">
            <div class="custom-row">
                <div class="custom-col">
                    <h1 class="custom-heading">Chi Siamo</h1>
                    <p class="custom-description">Siamo un'azienda edile con una lunga tradizione di eccellenza nel settore
                        delle costruzioni. Scopri di più su di noi e sulla nostra missione.</p>
                </div>
            </div>
            <div class="custom-row">
                <div class="custom-col">
                    <h2 class="custom-subheading">La Nostra Missione</h2>
                    <p class="custom-subdescription">La nostra missione è fornire soluzioni edili di alta qualità che
                        soddisfino le esigenze e le aspettative dei nostri clienti, garantendo sempre la massima
                        professionalità e attenzione ai dettagli.</p>
                </div>
            </div>
            <div class="custom-row">
                <div class="custom-col">
                    <h2 class="custom-subheading">La Nostra Storia</h2>
                    <p class="custom-subdescription">Da oltre 20 anni operiamo nel settore edile, realizzando progetti di
                        successo e guadagnandoci la fiducia di clienti soddisfatti. La nostra esperienza è la tua garanzia
                        di qualità.</p>
                </div>
            </div>
        </div>
    </div>
    <Services />
    <Projects />
    <div class="container-custom-contacts">
        <div class="custom-content">
            <div class="custom-row">
                <div class="custom-col">
                    <h1 class="custom-heading">Contattaci</h1>
                </div>
            </div>
            <div class="row d-flex flex-row justify-content-end">
                <div class="col card-size-contacts">
                    <img src="../assets/contacts.jpg" class="card-img-top">
                </div>
                <div class="col col-right">
                    <router-link class="btn btn-success" :to="{ name: 'contact_us' }">Contattaci</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.image {
    background-image: url('../assets/bg-mr.jpg');
    min-width: 100vw;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
}

.text {
    p {
        font-size: 50px;
    }
}
</style>