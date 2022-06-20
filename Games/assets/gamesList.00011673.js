import{r as g,a as s,u}from"./index.5991006d.js";import{N as d}from"./NetFunc.6716c01f.js";var h={template:`
    <ul class="g-list" v-infinite-scroll="GetGames" style="overflow: auto" infinite-scroll-distance='1'>
      
    <li v-for="item in list.lists" :key="item" class="list-game infinite-list-item" @click="goGame(item)">
    <el-image :src="item.thumbnail" class="el-img">
        <template #error>
        <div class="image-slot img">
        <el-image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.qhimg.com%2Ft01e7dd43ce25305f82.jpg&refer=http%3A%2F%2Fp9.qhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657724696&t=5645e2c1e1dab6dcc7102b6db381627a">
              </el-image>
        </div>
      </template>

        </el-image>
        <div class="g-title">{{item.subtitle}}</div>
        <div class="g-rating">{{item.rating}}</div>
 </li>
    
</ul>
    `,setup(p){const a=new d,t=g({lists:[]}),l=s(!1);let e=s(-1);async function m(){e.value++;const o="http://192.168.206.49:3300/r/list"+"?next="+e.value,n=await a.GetUrl_games(o);t.lists=[...t.lists,...n.msg],console.log("\u6E38\u620F\u6570\u636E",t.lists)}const c=u();function r(i){c.push({name:"Game",query:{id:i.id}})}return{list:t,isLoading:l,next:e,GetGames:m,goGame:r}}};export{h as default};
