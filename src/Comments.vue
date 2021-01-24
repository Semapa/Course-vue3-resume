<template>
  <div class="container">
    <p>
      <button class="btn primary" @click="loadComments">Загрузить комментарии</button>
    </p>
    <div class="card" v-if="isComments">
      <h2>Комментарии</h2>
      <ul class="list">
        <li class="list-item" v-for="comment in comments" :key="comment.id">
          <div>
            <p><strong>{{comment.email}}</strong></p>
            <small>{{comment.body}}</small>
          </div>
        </li>
      </ul>
    </div>
    <div class="loader" v-if="!isLoaded"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      isComments: false,
      isLoaded: true,
      comments: []
    }
  },
  methods: {
    async loadComments () {
      this.isLoaded = false
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42')

      this.isLoaded = true
      this.comments = data
      this.isComments = true
    }
  }
}
</script>
