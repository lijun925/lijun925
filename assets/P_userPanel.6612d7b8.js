import{u as d}from"./index.14391e10.js";var m={template:`
  
    <div class="order">

    <div class="u-avatar">
      <div class="avatar">
        <img src="https://img1.baidu.com/it/u=852527378,739232243&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"/>
      </div>
    </div>


    <div v-for="(item,list) in ulist" class="cell">
    <router-link :to="item.link">
    <div><el-icon><Promotion /></el-icon>
    <span v-text="item.name" @click="TapSe(list)"/></div>
    <el-icon><ArrowRight /></el-icon>
    </router-link>

    </div>
    </div>
   
    `,setup(){const i=[{name:"\u670D\u52A1",link:"/service"},{name:"\u6536\u85CF",link:"/dl"},{name:"\u670B\u53CB\u5708",link:"/dl"},{name:"\u5361\u5305",link:"/dl"},{name:"\u8868\u8BF7",link:"/dl"},{name:"\u8BBE\u7F6E",link:"/dl"}],e=d();function t(a){let l=Math.floor(Math.random()*100),n=Math.round(Math.random()*255),r=Math.round(Math.random()*255),o=Math.round(Math.random()*255);a===0?(console.log("\u4F20\u9012"),e.push({name:"service",query:{id:l,r:n,g:r,b:o}})):a!==0&&e.push({name:"dl"})}return{ulist:i,TapSe:t}}};export{m as default};
