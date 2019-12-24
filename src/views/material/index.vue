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
                                <i class="el-icon-star-on"></i>
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

    </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 当前选中的标签
      list: [] // 用于接收图片数据
    }
  },
  methods: {
    changeTab () {
      this.getMaterial()
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect' // 判断是否收藏true是收藏，false是全部
        }
      }).then(result => {
        this.list = result.data.results
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
        }
    }
</style>
