<template>
  <div class="ours---kintai-list">
    <KintaiList :times="times"></KintaiList>
  </div>
</template>

<script>
// @ is an alias to /src
import KintaiList from '../components/organisms/KintaiList'

export default {
  name: 'kintai-list-template',
  data() {
    return {
      user: {
        id: 10001
      },
      times: [
        {
          id: 10001,
          in_time: '2019-12-23T08:47:35.126+09:00',
          out_time: null,
          user_id: 10001,
          category: '出退勤',
          created_at: '2019-12-23T08:47:35.126+09:00',
          updated_at: '2019-12-23T08:47:35.126+09:00',
          deleted_at: null
        },
        {
          id: 10003,
          in_time: '2019-12-23T08:47:35.128+09:00',
          out_time: '2019-12-23T08:47:35.128+09:00',
          user_id: 10001,
          category: '起床睡眠',
          created_at: '2019-12-23T08:47:35.128+09:00',
          updated_at: '2019-12-23T08:47:35.128+09:00',
          deleted_at: null
        }
      ]
    }
  },
  components: {
    KintaiList
  }
}
</script>
