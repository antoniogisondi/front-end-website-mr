<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-custom">
            <div class="container-fluid p-0 m-0 w-100">
                <router-link :to="{ name: 'homepage' }" class="navbar-brand mx-5">
                    <img src="../assets/logo-mr.png" alt="Logo Azienda Edile" class="logo img-fluid w-75">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
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
    </header>
</template>

<style lang="scss">
.navbar-custom {
    background-color: white;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.799);
}

.navbar-brand img {
    max-width: 200px;
}

.navbar-toggler-icon {
    color: #fff;
}

.navbar-link {
    color: black;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 15px;
    transition: background-color 0.3s;
}

.navbar-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
}

.nav-link-text {
    display: inline-block;
    margin: 0;
}
</style>
