import Vue from 'vue';
import CarShipping from "@/components/car-shipping/car-shipping.component.vue";
import Header from "@/components/header/header.component.vue";
import Footer from '@/components/footer/footer.component.vue';

Vue.component('cs-header', Header);
Vue.component('cs-footer', Footer);
Vue.component('cs-car-shipping', CarShipping);