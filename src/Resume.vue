<template>
  <div class="card card-w70" id="resume">
<!--    <h1> TypeMsg: {{ typeNode }}</h1>-->
<!--    <h1>Резюме Nickname</h1>-->
<!--    <div class="avatar">-->
<!--      <img src="https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png">-->
<!--    </div>-->
<!--    <h2>Опыт работы</h2>-->
<!--    <p>-->
<!--      главный герой американского мультсериала «Рик и Морти», гениальный учёный, изобретатель, атеист (хотя в некоторых сериях он даже молится Богу, однако, каждый раз после чудесного спасения ссылается на удачу и вновь отвергает его существование), алкоголик, социопат, дедушка Морти. На момент начала третьего сезона ему 70 лет[1]. Рик боится пиратов, а его главной слабостью является некий - "Санчезиум". Исходя из того, что существует неограниченное количество вселенных, существует неограниченное количество Риков, герой сериала предположительно принадлежит к измерению С-137. В серии комикcов Рик относится к измерению C-132, а в игре «Pocket Mortys» — к измерению C-123[2]. Прототипом Рика Санчеза является Эмметт Браун, герой кинотрилогии «Назад в будущее»[3].-->
<!--    </p>-->
<!--    <h3>Добавьте первый блок, чтобы увидеть результат</h3>-->
  </div>
</template>

<script>
export default {
  // props: ['typeNode'],
  data () {
    return {

    }
  },
  methods: {
    createNodeResume (node, content) {
      console.log('createNodeResume(data)-', node, content)
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
        // default:
        //   break
      }
    }
  }
}
</script>
