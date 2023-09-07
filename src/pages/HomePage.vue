<script>
export default {
    data() {
        return {
            slides: [
                {
                    img: 'http://www.digimastricostruzioni.it/images/portfolio01B.jpg',
                    title: 'I NOSTRI LAVORI',
                    text: 'lorem ipsum dolor sit amet'
                },
                {
                    img: 'http://www.digimastricostruzioni.it/images/portfolio08B.jpg',
                    title: 'I NOSTRI LAVORI',
                    text: 'lorem ipsum dolor sit amet'
                },
                {
                    img: 'http://www.digimastricostruzioni.it/images/portfolio13B.jpg',
                    title: 'I NOSTRI LAVORI',
                    text: 'lorem ipsum dolor sit amet'
                }
            ],
            movimento: 0,
            autoScroll: null
        }
    },
    created() {
        this.startAutoScroll
    },
    methods: {
        prevSlide() {
            this.movimento--;
            if (this.movimento < 0) {
                this.movimento = this.slides.length - 1;
            }
        },
        nextSlide() {
            this.movimento++;
            if (this.movimento > this.slides.length - 1) {
                this.movimento = 0;
            }
        },
        startAutoScroll() {
            this.autoScroll = setInterval(() => {
                this.nextSlide();
            }, 2000);
        },
        stopAutoScroll() {
            clearInterval(this.autoScroll);
        }
    }
}
</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="slider-container-wrapper d-flex justify-content-center p-0" @mouseover="stopAutoScroll"
                @mouseleave="startAutoScroll">
                <img :src="slides[movimento].img">
                <div class="overlay">
                    <h2>{{ slides[movimento].title }}</h2>
                    <p>{{ slides[movimento].text }}</p>
                </div>
                <div class="prev" @click="prevSlide">
                    <i class="fa-solid fa-angle-right fa-rotate-180"></i>
                </div>
                <div class="next" @click="nextSlide">
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 text-center">
                <h1 class="display-4">Matera Riccardo Artigiano Edile</h1>
                <p class="lead">La tua soluzione per progetti edili di qualità.</p>
            </div>
        </div>
        <div class="row my-5">
            <div class="col-md-6">
                <h2>Nostri Servizi</h2>
                <ul class="list-group">
                    <li class="list-group-item">Costruzioni residenziali e commerciali</li>
                    <li class="list-group-item">Ristrutturazioni e restauri</li>
                    <li class="list-group-item">Impianti elettrici e idraulici</li>
                    <li class="list-group-item">Progettazione e consulenza</li>
                </ul>
            </div>
            <div class="col-md-6">
                <h2>Progetti Recenti</h2>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Villa Moderna sul Lago</h5>
                        <p class="card-text">Una villa con vista mozzafiato sul lago.</p>
                    </div>
                </div>
                <div class="card mt-3">
                    <div class="card-body">
                        <h5 class="card-title">Ristrutturazione Loft Urbano</h5>
                        <p class="card-text">Trasforma il tuo loft in un'oasi di stile.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.slider-container-wrapper {
    width: 100vw;
    position: relative;

    img {
        width: 100vw;
        max-height: 500px;
        object-fit: cover;
    }

    .prev {
        position: absolute;
        top: 50%;
        right: 90%;
    }

    .next {
        position: absolute;
        top: 50%;
        left: 90%;
    }

    .overlay {
        position: absolute;
        bottom: 45%;
        color: black;
        padding: 20px;
        text-align: center;
    }
}
</style>