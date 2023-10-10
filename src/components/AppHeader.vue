<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<template>
    <header :class="$route.meta.headerClass">
        <nav class="navbar navbar-expand-lg navbar-custom">
            <div class="container-fluid p-0 m-0 w-100">
                <router-link :to="{ name: 'homepage' }" class="navbar-brand mx-5">
                    <img src="../assets/logo-mr.png" alt="Logo Azienda Edile" class="logo img-fluid w-75">
                </router-link>
                <button class="navbar-toggler data-bs-toggle" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mx-5" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link :to="{ name: 'homepage' }" class="navbar-link">
                                <span class="nav-link-text">Welcome</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'contact_us' }" class="navbar-link">
                                <span class="nav-link-text">Contattaci</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'services' }" class="navbar-link">
                                <span class="nav-link-text">Servizi</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'blog' }" class="navbar-link">
                                <span class="nav-link-text">Blog</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div :class="$route.meta.bgImage"></div>
    </header>
</template>

<style lang="scss">
// META FOR WORKS PAGE OF PROJECTS
.header-pages {
    background-color: white;
    height: 150px;
    box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
}

.background-image {
    background-image: none;
}

// END

// NAVBAR TRANSPARENT ON JUMBOTRON
header {
    height: 100vh;
}

.background-image {
    background-image: url('../assets/bg-header-2.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: -100;
}

// END
</style>
