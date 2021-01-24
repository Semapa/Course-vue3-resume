<template>
  <div class="container column">
    <sidebar @sendType="addNode"></sidebar>
    <resume ref="refResume"></resume>
  </div>
  <comments></comments>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    addNode (type, value) {
      this.$refs.refResume.createNodeResume(type, value)
    },
    computed () {

    }
  }

}
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
