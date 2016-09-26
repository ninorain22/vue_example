<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划表
        </a>
        <ul class="nav navbar-nav">
          <li><a v-link="'/home'">首页</a></li>
          <li><a v-link="'/time-entries'">计划列表</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
      <div class="col-sm-3">
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import store from './vuex/store'
import { initTimeEntries } from './vuex/actions'
import { totalTime } from './vuex/getters'

export default {
  components: {
    sidebar: Sidebar
  },
  store,
  vuex: {
    getters: {
      totalTime
    },
    actions: {
      initTimeEntries
    }
  },
  ready () {
    let timeEntries = {}
    this.$http.get('http://vue.com/api/test/timeEntries')
        .then(function (ret) {
          timeEntries = JSON.parse(ret.data).data
          this.initTimeEntries(timeEntries)
        })
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
