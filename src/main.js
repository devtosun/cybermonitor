import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from "./routes";
import "./bootstrap.min.css"
import axios from 'axios';

export const eventBus = new Vue({
	data: {
		url: "http://localhost:8000/api/v1/article/",
		articles: [],
	},
	methods: {
		getArticle(articleId) {
			return this.articles.find(x => x.articleId == articleId);
		},
		getAllArticles() {
			return this.articles;
		},
	},
	watch: {
		articles() {
			eventBus.$emit("articles", this.articles);
		}
	},
	created() {
		axios.get(this.url + "all").then(response => {
			this.articles = response.data;
		});
	}
});

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history',
});

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
