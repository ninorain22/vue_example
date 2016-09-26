<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <!--<input-->
            <!--type="date"-->
            <!--class="form-control"-->
            <!--v-model="timeEntry.date"-->
            <!--placeholder="Date"-->
        <!--/>-->
        <date-picker :time.sync="timeEntry.date" :option="option" :limit="limit" v-model="timeEntry.date"></date-picker>
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input
            type="number"
            class="form-control"
            v-model="timeEntry.totalTime"
            placeholder="Hours"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input
            type="text"
            class="form-control"
            v-model="timeEntry.comment"
            placeholder="Comment"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <button v-link="'/time-entries'" class="btn btn-danger">取消</button>
    <hr>
  </div>
</template>

<script>
  import { updateTime } from '../vuex/actions'
  import myDatepicker from 'vue-datepicker'

  export default {
    components: {
      'date-picker': myDatepicker
    },
    data () {
      return {
        timeEntry: {
          user: {
            name: 'test',
            email: 'test@test.com',
            image: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
          },
          totalTime: 0
        },
        starttime: '',
        endtime: '',
        testTime: '',
        multiTime: '',
        option: {
          type: 'day',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD HH:mm:ss',
          placeholder: 'when?',
          inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'line-height': '22px',
            'font-size': '16px',
            'border': '2px solid #fff',
            'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
            'border-radius': '2px',
            'color': '#5F5F5F'
          },
          color: {
            header: '#ccc',
            headerText: '#f00'
          },
          buttons: {
            ok: 'Ok',
            cancel: 'Cancel'
          },
          overlayOpacity: 0.5, // 0.5 as default
          dismissible: true // as true as default
        },
        timeoption: {
          type: 'min',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD HH:mm'
        },
        multiOption: {
          type: 'multi-day',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD HH:mm'
        },
        limit: [{
          type: 'weekday',
          available: [1, 2, 3, 4, 5]
        }
        ]
      }
    },
    vuex: {
      actions: {
        updateTime
      }
    },
    methods: {
      save () {
        this.$http.post('http://vue.com/api/test/create', {
          comment: this.timeEntry.comment,
          total_time: this.timeEntry.totalTime,
          date: this.timeEntry.date
        }).then(function (ret) {
          let timeEntry = JSON.parse(ret.data).data
          this.updateTime(timeEntry)
          this.timeEntry = {}
        })
      }
    }
  }
</script>
