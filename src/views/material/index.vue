<template>
    <el-card>
        <bread-crumb slot="header">
            <template slot="title">素材管理</template>
        </bread-crumb>
        <el-row>
            <el-tabs @tab-click="changeTab" v-model="activeName">
                <el-tab-pane label="全部图片" name="all">
                    <div class="img-list">
                        <!-- {{list}} -->
                        <el-card :body-style="{ padding: '0px' }" class="img-card" v-for="item in list" :key="item.id">
                            <img :src="item.url" alt="">
                            <el-row type="flex" justify="space-around" style="height:40px; font-size:18px;background-color:#f4f5f6" align="middle">
                                <i @click="collectOrCollect(item)" :style="{color:item. is_collected?'red':'#000'}" class="el-icon-star-on"></i>
                                <i class="el-icon-delete"></i>
                            </el-row>
                        </el-card>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="收藏图片" name="collect">
                    <div class="img-list">
                        <!-- {{list}} -->
                        <el-card :body-style="{ padding: '0px' }" class="img-card" v-for="item in list" :key="item.id">
                            <img class="img-item" :src="item.url" alt="">
                        </el-card>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <!-- <el-button type="primary">上传图片</el-button> -->
        </el-row>
        <el-row type="flex" justify="center">
          <el-pagination
            @current-change="changePage"
            background
            layout="prev, pager, next"
            :page-size="page.pageSize"
            :current-page="page.currentPage"
            :total="page.total">
          </el-pagination>
        </el-row>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 当前选中的标签
      list: [], // 用于接收图片数据
      page: {
        pageSize: 8, // 每页显示的数据
        total: 0, // 总条数
        currentPage: 1

      }
    }
  },
  methods: {
    // 收藏或者取消收藏
    collectOrCollect (item) {
      this.$axios({
        url: `/user/images/${item.id}`,
        method: 'put',
        data: {
          collect: !item.is_collected // 如果已收藏那么就取消收藏，如果未那么点击收藏
        }
      }).then(result => {
        this.getMaterial()
      })
    },
    // 点击换页
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    // 切换tab栏
    changeTab () {
      this.page.currentPage = 1
      this.getMaterial()
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          page: this.page.currentPage,
          per_page: this.page.pageSize,
          collect: this.activeName === 'collect' // 判断是否收藏true是收藏，false是全部
        }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoped>
    .img-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        .img-card{
            width: 150px;
            height: 150px;
            margin: 20px 50px;
            img{
                width: 100%;
                height: 110px;
                vertical-align: middle;
            }
            .img-item{
                height: 150px;
            }
            i{
              cursor: pointer;
            }
        }
    }
</style>
