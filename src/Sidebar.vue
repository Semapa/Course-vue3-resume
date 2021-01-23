<template>
  <form class="card card-w30" @submit.prevent="submitHandler">
  <div class="form-control">
    <label for="type">Тип блока</label>
    <select id="type" v-model="type">
      <option value="title" >Заголовок</option>
      <option value="subtitle">Подзаголовок</option>
      <option value="avatar">Аватар</option>
      <option value="text">Текст</option>
    </select>
  </div>

  <div class="form-control">
    <label for="value">Значение</label>
    <textarea id="value" rows="3"></textarea>
  </div>

  <button class="btn primary">Добавить</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      type: 'title'
    }
  },
  methods: {
    submitHandler () {
      console.log('Type', this.type)
    }
  }

}
</script>
