<template>
  <div>
    <div v-if="loaded">
      <h5>{{ article.header }}</h5>
      <hr />
      <p>{{ article.text }}</p>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  data() {
    return {
      id: this.$route.params.id,
      loaded: false,
      article: {
        articleId: 0,
        username: "test",
        header: "test",
        text: "test",
        pictureLink: "",
      },
    };
  },
  created() {
    eventBus.$on("articles", () => {
      this.article = eventBus.getArticle(this.$route.params.id);
      this.loaded = true;
    });
    if (this.loaded == false) {
      const temp = eventBus.getArticle(this.$route.params.id);
      if (typeof temp != "undefined") {
        this.article = eventBus.getArticle(this.$route.params.id);
        this.loaded = true;
      }
    }
    //console.log(this.$route.params.id);
  },
};
</script>