import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../pages/Homepage.vue';
import Services from '../pages/Services.vue';
import Projects from '../pages/Projects.vue';
import AboutUs from '../pages/AboutUs.vue';
import ContactUs from '../pages/ContactUs.vue';
import Blog from '../pages/Blog.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/services',
            name: 'services',
            component: Services
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/about-us',
            name: 'about_us',
            component: AboutUs
        },
        {
            path: '/contact-us',
            name: 'contact_us',
            component: ContactUs
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
    ]
});

export { router };