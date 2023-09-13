<script>

export default {
    data() {
        return {


            cards: [
                {
                    name: 'Nuove Costruzioni',
                    img_path: 'src/assets/logo-edifici.jpg',
                    title: 'Nuove Costruzioni',
                    route_name: 'new_constructions'
                },
                {
                    name: 'Ristrutturazioni',
                    img_path: 'src/assets/logo-ristrutturazioni.jpg',
                    title: 'Ristrutturazioni',
                    route_name: 'renovations'
                },
                {
                    name: 'Restauri',
                    img_path: 'src/assets/logo-costruzioni.jpg',
                    title: 'Restauri',
                    route_name: 'restorations'
                },
            ]
        }
    },
}
</script>
<template>
    <div class="container-custom-project">
        <div class="custom-content-card">
            <div class="custom-row-card">
                <div class="col-12">
                    <h1 class="custom-heading">I Nostri Progetti</h1>
                </div>
                <div class="custom-col-card d-flex flex-row justify-content-center">
                    <div class="card card-size mx-4" v-for="(card, index) in cards" :key="index">
                        <img :src="card.img_path" class="card-img-top" :alt="card.name">
                        <div class="card-body">
                            <router-link class="btn btn-outline-info" :to="{ name: card.route_name }">SCOPRI DI
                                PIU'</router-link>
                        </div>
                        <div class="text">
                            <h3>{{ card.title }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>