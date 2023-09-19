<script>
export default {
    data() {
        return {

        }
    },
}
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand navbar-custom" :to="{ name: 'homepage' }">
                <img src="../assets/logo-mr.png" alt="Logo Azienda Edile" class="logo img-fluid w-75">
            </router-link>
            <router-link :to="{ name: 'homepage'}">
            <a class="navbar-brand" href="/">Welcome</a>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <router-link :to="{ name: 'contact_us'}">
                    <a class="nav-link active" aria-current="page" href="/contact-us">Contattaci</a>
                </router-link>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Lorem</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Ipsum</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
</template>
<!-- <template>
    <header class="container-fluid mx-0 header-component">
        <div class="row position-relative">
            <div class="col px-0 position-absolute">
                <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3">
                </nav>
            </div>
        </div>
    </header>
</template> -->



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
