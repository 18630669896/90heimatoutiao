<template>
    <el-card>
        <bread-crumb slot="header">
            <!-- 插槽内容 -->
            <template slot="title">评论管理</template>
        </bread-crumb>
        <el-table :data="list">
            <el-table-column prop="title" width="500" label="标题"></el-table-column>
            <el-table-column :formatter="formatterBoolean" prop="comment_status" label="评论状态"></el-table-column>
            <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
            <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
            <el-table-column label="操作">
                <!-- 需要根据状态来判断是关闭还是打开 -->
                <!-- 作用于插槽 -->
                <template slot-scope="obj">
                    <!-- {{obj.row}} -->
                    <el-button size="small" type="text">修改</el-button>
                    <el-button @click="openOrCloseStatus(obj.row)" size="small" type="text">{{obj.row.comment_status?'关闭':'打开'}}评论</el-button>
                </template>

            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getComment () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then(result => {
        this.list = result.data.results
      })
    },
    openOrCloseStatus (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您确定要${mess}评论吗`, '提示').then(() => {
        this.$axios({
          url: '/comments/status',
          method: 'put',
          params: {
            article_id: row.id.toString()
          },
          data: {
            allow_comment: !row.comment_status
          }
        }).then(result => {
          // 表示执行成功
          debugger
          this.getComment()
        })
      })
    },
    formatterBoolean (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getComment() // 获取数据
  }
}
</script>

<style>

</style>
