<template>
  <div>
    <hr />
    <div class="card">
      <h5 class="card-header">{{ article.header }}</h5>
      <div class="card-body">
        <p class="card-text">{{ article.text }}</p>
        <button class="btn btn-primary" @click="navigateToArticle">
          Read More..
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
  data() {
    return {
      article: {
        articleId: 0,
        username: "admin",
        header: "Cyber Monitor",
        text: "Hello, how are you?",
        pictureLink: "",
      },
    };
  },
  props: ["articleIdProps"],
  methods: {
    navigateToArticle() {
      this.$router.push({
        path: `/article/${this.article.articleId}`,
        meta: { requiresAuth: true }
      });
    },
  },
  created() {
    this.article = eventBus.getArticle(this.articleIdProps)
  },
};
</script>



