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
    <header class="container-fluid mx-0">
        <div class="row">
            <div class="col px-0">
                <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
                    <div class="container">
                        <router-link class="navbar-brand" :to="{ name: 'homepage' }">
                            <img src="../assets/logo-mr.png" alt="Logo Azienda Edile" class="logo">
                        </router-link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item" v-for="(item, index) in menu" :key="index">
                                    <router-link class="nav-link" :to="{ name: item.route_name }">
                                        {{ item.label }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<style lang="scss"></style>
