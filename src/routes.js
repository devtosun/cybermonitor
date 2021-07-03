import Home from "./components/Home.vue"
import PageNotFound from "./components/Error.vue"
import Article from "./components/Article.vue"

export const routes = [
	{path: "/", component: Home},
    {path: "/error", component: PageNotFound},
    {path: "/error/:id", component: PageNotFound},
    {path: "/article/:id", component: Article},
    {path: "*", redirect: "/error"},
];