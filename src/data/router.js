import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/HomePage.vue';
import Services from '../pages/Services.vue';
import Projects from '../pages/Projects.vue';
import ContactUs from '../pages/ContactUs.vue';
import Blog from '../pages/Blog.vue';
import ThankYou from '../pages/ThankYou.vue';
import Works from '../pages/Works.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
            meta: {
                bgImage: 'background-image',
            }
        },
        {
            path: '/services',
            name: 'services',
            component: Services,
            meta: {
                headerClass: 'header-pages',
                bgImage: 'bg-none',
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/contact-us',
            name: 'contact_us',
            component: ContactUs,
            meta: {
                headerClass: 'header-pages',
                bgImage: 'bg-none',
            }
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
            meta: {
                headerClass: 'header-pages',
                bgImage: 'bg-none',
            }
        },
        {
            path: '/thank-you',
            name: 'thank_you',
            component: ThankYou,
            meta: {
                headerClass: 'header-pages',
                bgImage: 'bg-none',
            }
        },
        {
            path: '/works/:slug',
            name: 'works',
            component: Works,
            props: true,
            meta: {
                headerClass: 'header-pages',
                bgImage: 'bg-none',
            }
        },
    ]
});

export { router };