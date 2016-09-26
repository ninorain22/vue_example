<template>
    <div>
        <!--//`v-if`是vue的一个指令-->
        <!--//`$route.path`是当前路由对象的路径，会被解析为绝对路径当-->
        <!--//`$route.path !== '/time-entries/log-time'`为`true`是显示，`false`，为不显示。-->
        <!--//v-link 路由跳转地址-->
        <button
                v-if="$route.path !== '/time-entries/log-time'"
                v-link="'/time-entries/log-time'"
                class="btn btn-primary">
            创建
        </button>

        <div v-if="$route.path === '/time-entries/log-time'">
            <h3>创建</h3>
        </div>

        <hr>

        <!--//下一级视图-->
        <router-view></router-view>

        <div class="time-entries">
            <p v-if="!timeEntries.length"><strong>还没有任何任务</strong></p>

            <div class="list-group">
                <!--//v-for 循环渲染-->
                <a class="list-group-item" v-for="timeEntry in timeEntries">
                    <div class="row">
                        <div class="col-sm-2 user-details">
                            <!--//`:src`属性，这个是vue的属性绑定简写`v-bind`可以缩写为`:`-->
                            <!--// 比如a标签的`href`可以写为`:href`-->
                            <!--//并且在vue的指令里就一定不要写插值表达式了(`:src={{xx}}`)，vue自己会去解析-->
                            <img src="https://avatars1.githubusercontent.com/u/10184444?v=3&s=460" class="avatar img-circle img-responsive" />
                            <p class="text-center">
                                <strong>
                                    <!--{{ timeEntry.user.name }}-->
                                    name
                                </strong>
                            </p>
                        </div>

                        <div class="col-sm-2 text-center time-block">
                            <h3 class="list-group-item-text total-time">
                                <i class="glyphicon glyphicon-time"></i>
                                {{ timeEntry.totalTime }}
                            </h3>
                            <p class="label label-primary text-center">
                                <i class="glyphicon glyphicon-calendar"></i>
                                {{ timeEntry.date }}
                            </p>
                        </div>

                        <div class="col-sm-7 comment-section">
                            <p>{{ timeEntry.comment }}</p>
                        </div>

                        <div class="col-sm-1">
                            <button
                                class="btn btn-xs btn-danger delete-button"
                                @click="deleteTimeEntry(timeEntry)">
                            X
                            </button>
                        </div>

                    </div>
                </a>

            </div>
        </div>
    </div>
</template>

<style>
    .avatar {
        height: 75px;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .user-details {
        background-color: #f5f5f5;
        border-right: 1px solid #ddd;
        margin: -10px 0;
    }
    .time-block {
        padding: 10px;
    }
    .comment-section {
        padding: 20px;
    }
</style>

<script>
import { deleteTime } from '../vuex/actions'
import { timeEntries } from '../vuex/getters'

export default {
  vuex: {
    getters: {
      timeEntries
    },
    actions: {
      deleteTime
    }
  },
  methods: {
    deleteTimeEntry (timeEntry) {
      if (window.confirm('confirm delete?')) {
        this.$http.post('http://vue.com/api/test/delete', {
          id: timeEntry.id
        }).then(function (ret) {
          console.log(ret)
        })
        this.deleteTime(timeEntry)
      }
    }
  }
}
</script>