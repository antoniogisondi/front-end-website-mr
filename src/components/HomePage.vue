<script>
import AboutUs from '../pages/AboutUs.vue';
import Services from '../pages/Services.vue';
import Projects from '../pages/Projects.vue';
import Contacts from '../pages/Contacts.vue';
import Blog from '../pages/Blog.vue';
export default {
    components: {
        AboutUs,
        Services,
        Projects,
        Contacts,
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
    <AboutUs />
    <Projects />
    <Services />
    <Contacts />
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