<script>
export default {
    data() {
        return {
            menu: [
                {
                    label: 'Home',
                    route_name: 'homepage'
                },
                {
                    label: 'Servizi',
                    route_name: 'services'
                },
                {
                    label: 'Progetti',
                    route_name: 'projects'
                },
                {
                    label: 'Chi siamo',
                    route_name: 'about_us'
                },
                {
                    label: 'Contattaci',
                    route_name: 'contact_us'
                },
                {
                    label: 'Blog',
                    route_name: 'blog'
                }
            ]


        }
    },
}
</script>

<template>
    <header class="container-fluid mx-0 header-component">
        <div class="row position-relative">
            <div class="col px-0 position-absolute">
                <nav class="navbar navbar-expand-lg navbar-dark px-5">
                    <router-link class="navbar-brand navbar-custom" :to="{ name: 'homepage' }">
                        <img src="../assets/logo-mr.png" alt="Logo Azienda Edile" class="logo">
                    </router-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.header-component {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;
}
</style>
