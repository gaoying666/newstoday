<template>
  <transition name="slide">
    <div id="topic-detail">
        <div id="nav">
            <div id="header">
                <div id="back" @click="returnback">
                    <img :src="require('@/assets/icons/back.png')" alt="" />
                </div>
                <span>新闻详情</span>
            </div>
        </div>
      <div class="content" v-for="item in topicList">
          <h3> {{ item.title }} </h3>
          <img class="imgpic" :src="item.pic" alt="">
          <div class="topicContent" v-html="item.content">
               {{ item.content }}
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
  // 引入请求数据的方法
  import { getDetail } from '@/api/getData'
  export default {
    data () {
      return {
        topicList: [],
        arr: []
      }
    },
    created () {
      // console.log(this.$parent.$route.path)
      let str = this.$parent.$route.path
      this.arr = str.split('/')
      // console.log(this.arr)
      this._getTopicDetail()
    },
    methods: {
      returnback () {
        this.$router.back()
      },
      _getTopicDetail () {
        let paramstype
        switch (this.arr[3]) {
          case 'news':
            paramstype = '头条'
            break
          case 'finance':
            paramstype = '财经'
            break
          case 'tech':
            paramstype = '科技'
            break
          case 'mil':
            paramstype = '军事'
            break
          case 'ent':
            paramstype = '娱乐'
            break
          case 'edu':
            paramstype = '教育'
            break
        }
        let params = {
          channel: paramstype,
          num: 1,
          start: this.arr[4]
        }
        getDetail(params).then((res) => {
          if (res.status === 200 && res.data.result.result.list.length) {
            // console.log(res.data.result.result.list[0].content)
            console.log(res.data.result.result.list)
            this.topicList = res.data.result.result.list
            // console.log(this.topicList)
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped> 
  .topicContent{
    font-size: 0.6rem;
    text-indent:25px;
  } 
  #topic-detail{
    width: 100%;
    background: #FFF;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
  }
    #nav{
      width: 100%;
      height:4.0rem;
      background:#fff;
    }
   #nav>#header{
      width: 100%;
      height: 3rem;
      background: #008000;
      color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 666;
    }
    #nav>#header>#back{
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.2rem;
        margin-top:1rem;
      }
     #nav>#header>#back>img{
          display: block;
          width: 1.2rem;
          height: 1.2rem;
       }
     #nav>#header>span{
       display: block;
        font-size: 1rem;
        color:#fff;
        float: left;
        margin-left:40%;
        margin-top:-1.5rem;
        /*margin -1.5rem auto;*/
        text-align:center;
        z-index: 100; 
        font-weight: 900;
      }
    .content{
      width: 100%;
      padding-bottom: 35px;
    }
    .content h3{
        width: 92.6%;
        margin: 0 auto;
        margin-top: 4.0rem;
        font-size: 1.3rem;
        line-height: 1.5rem;
        letter-spacing:0.1rem;
        font-family: '幼圆';
      }

      .topicContent{
        width: 92.6%;
        margin: 0 auto;
        margin-top: 0.9rem;
        font-size: 0.85rem;
        line-height: 1.5rem;
      }
      .imgpic{
        width: 92%;
        margin: 0 auto;
        margin-top: 1rem;
        display: block;
      }
</style>