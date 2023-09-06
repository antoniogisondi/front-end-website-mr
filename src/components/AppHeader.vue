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
    <header class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col px-3">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                        <ul class="navbar-nav">
                            <li class="nav-item" v-for="(item, index) in menu" :key="index">
                                <router-link class="nav-link" :to="{ name: item.route_name }">
                                    {{ item.label }}
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss"></style>
