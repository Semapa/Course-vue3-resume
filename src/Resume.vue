<template>
  <div class="card card-w70" id="resume">
    <h1 v-if="!isContent"> Добавьте первый блок, чтобы увидеть результат.</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isContent: false
    }
  },
  methods: {
    createNodeResume (node, content) {
      this.isContent = true
      const resume = document.getElementById('resume')
      switch (node) {
        case 'title': {
          const resumeTitle = document.createElement('h1')
          resumeTitle.innerHTML = content
          resume.append(resumeTitle)
          break
        }
        case 'subtitle': {
          const resumeSubtitle = document.createElement('h2')
          resumeSubtitle.innerHTML = content
          resume.append(resumeSubtitle)
          break
        }
        case 'avatar': {
          const resumeAvatar = document.createElement('div')
          resumeAvatar.innerHTML = `
              <div class="avatar">
                <img src="https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png">
              </div>
              `
          resume.append(resumeAvatar)
          break
        }
        case 'text': {
          const resumeText = document.createElement('p')
          resumeText.innerHTML = content
          resume.append(resumeText)
          break
        }
        default:
          break
      }
    }
  }
}
</script>
