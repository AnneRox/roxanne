import Vue from 'vue';
if (process.browser) {
	const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr');
	Vue.use(VueAwesomeSwiper);
}

// require styles
import 'swiper/dist/css/swiper.css';
