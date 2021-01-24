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
    <textarea id="value" rows="3" v-model="value"></textarea>
  </div>

  <button class="btn primary"
          :disabled="checkStatusBtn">Добавить</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      type: 'title',
      value: '',
      MIN_LENGTH: 4
    }
  },
  methods: {
    submitHandler () {
      console.log('Type: ', this.type)
      this.$emit('sendType', this.type, this.value)
    }
  },
  computed: {
    checkStatusBtn () {
      return this.value.length < this.MIN_LENGTH
    }
  }

}
</script>
