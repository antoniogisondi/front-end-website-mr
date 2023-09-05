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
                    route_name: 'ask_us'
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
                    <span class="px-3" v-for="(item, index) in menu" :key="index">
                        {{ item.label }}
                    </span>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss"></style>
