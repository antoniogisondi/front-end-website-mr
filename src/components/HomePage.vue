<script>
import AboutUs from '../pages/AboutUs.vue';
import Services from '../pages/Services.vue';
import Projects from '../pages/Projects.vue';
import ContactUs from '../pages/ContactUs.vue';
import Blog from '../pages/Blog.vue';
export default {
    components: {
        AboutUs,
        Services,
        Projects,
        ContactUs,
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
            <div class="col-12 p-0 image">
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
    <ContactUs />
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
        left: 65%;

        p {
            font-size: 50px;
        }
    }
}
</style>