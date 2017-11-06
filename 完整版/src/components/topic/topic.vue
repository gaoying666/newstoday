<template>
  <div id="topic">
    <div id="nav">
      <div id="navicon">
        <img id="images" :src="require('@/assets/imgs/jrtt.png')">
      </div>
      <div id="navbar">
        <router-link to="/topic/all">头条</router-link>
        <router-link to="/topic/news">新闻</router-link>
        <router-link to="/topic/money">科技</router-link>
        <router-link to="/topic/play">娱乐</router-link>
        <router-link to="/topic/junshi">军事</router-link>
        <router-link to="/topic/star">星座</router-link>
      </div>
    </div>
     <div id="topiclist">
       <ul>
        <li v-for="(item, index) in topicList">
          <router-link :to="'/topic/detail/' + item.category + '/' + index" class="one">
            <div id="pic" v-show=" item.pic ">
              <img :src=" item.pic " >
            </div>
            <div id="titles">
            <span>{{ item.title }}</span>
            </div>
            <div id="come">
              <span id="left-1">{{ item.src }}</span>
              <span id="right-2">{{ item.time }}</span>
            </div>
          </router-link>
        </li>
       </ul>
       <p v-show="topicList.length" id="end">新闻加载完毕</p>
      <div id="loding" v-show="!topicList.length">
        <p id="tip">拼命加载，请耐心等待...</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { getTopic } from '@/api/getData'
  export default {
    data () {
      return {
        topicList: []
      }
    },
    created () {
      this._getTopic()
    },
    methods: {
      // 自定义的规则
      _getTopic () {
        // 定义参数
        let paramstype
        switch (this.$route.params.type) {
          case 'all':
            paramstype = '头条'
            break
          case 'money':
            paramstype = '科技'
            break
          case 'star':
            paramstype = '星座'
            break
          case 'junshi':
            paramstype = '军事'
            break
          case 'play':
            paramstype = '娱乐'
            break
          case 'news':
            paramstype = '新闻'
            break
        }
        let params = {
          channel: paramstype
        }
        console.log(params)
        getTopic(params).then((res) => {
          if (res.status === 200 && res.data.result.result.list.length) {
            console.log(res.data.result.result.list)
            this.topicList = res.data.result.result.list
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    watch: {
      // 检测路由信息的变化，重新发送请求
      $route: function () {
        console.log(this.$route)
        this._getTopic()
        this.topicList = []
      }
    }
  }
</script>

<style scoped>
  html{
    list-style: none;
  }
  #nav{ 
    width: 100%;
    height: 5.0rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
  }
  #navicon{
    width: 100%;
    height: 4.5rem;
    background: green;
    overflow: hidden;
  }
  #images{
    display: block;
    margin: 3px auto;  
  }     
  #navbar{
    width: 100%;
    height: 1.8rem;
    background-color: #f6f6f6;
    display:flex;
    align-items: center;
    justify-content: space-around;
  }
  a{
    flex-grow: 1;
    height: 100%;
    text-align: center;
    line-height: 1.8rem;
    color: #80bd01;
  }
  .router-link-active{
    background-color: #80bd01;
    color: #FFF;
  } 
  #topiclist{
    width: 100%;
    background: #FFF;
    margin-bottom: 2rem;
    margin-top: 6.1rem;
  }
  .one{
    display: inline-block;
    width: 100%;
    height: auto;
    background: #F7F7F7;
    border-bottom: 1px solid #ccc;
    margin-top: 5px;
  }
  #pic{
    display: block;
    overflow: hidden;
    width: 80%;
    margin: 0 auto;
    margin-top: 3px;
    overflow: hidden;
  }
  #pic img{
    display: block;
    margin:0 auto;
    width: 100%;
  }
  #titles{
    margin-top: 3px;
    display: inline-block;
    padding: 0 1.5rem;
    font-size: 16px;
  }
  #come{
    padding-bottom: 0.5rem;
    font-size: 10px;
    margin: 0 auto;
    margin-left: 3.5rem;
  }
  #loding{
    display: block;
    margin-left: 25%;
    color: #42B983;
  }
  #end{
    display: block;
    width: 80%;
    height: 2.5rem;
    text-align: center;
    line-height: 3rem;
    color: gray;
    margin: 0 auto;
  }
</style>