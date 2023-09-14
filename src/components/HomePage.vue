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
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 p-0 image">
                <img src="../assets/bg-mr.jpg" alt="logo">
                <div class="absolute">
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
    position: relative;

    img {
        width: 100vw;
        height: 100vh;
    }

    .absolute {
        position: absolute;
        top: 50%;
        left: 230%;
        transform: translate(-230%, -50%);

        p {
            font-size: 50px;
        }
    }
}
</style>