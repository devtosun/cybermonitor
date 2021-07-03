<template>
  <div>
    <ArticleCard
      v-for="article in articles"
      :articleIdProps="article.articleId"
      :key="article.articleId"
    >
    </ArticleCard>
  </div>
</template>

<script>
import ArticleCard from "./common/ArticleCard.vue";
import { eventBus } from "../main";

export default {
  data() {
    return {
      loaded: false,
      articles: [],
    };
  },
  components: {
    ArticleCard,
  },
  created() {
    eventBus.$on("articles", (articles) => {
      this.articles = articles;
    });
    if (this.loaded == false) {
      this.articles = eventBus.getAllArticles();
    }
  },
};
</script>

