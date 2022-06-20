import{d as u,a as l,r as d,u as f}from"./index.5991006d.js";import{N as v}from"./NetFunc.6716c01f.js";var y={template:`
    <ul class="g-list" v-infinite-scroll="searchName" style="overflow: auto" infinite-scroll-distance='1' v-if="flag">
      
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

<div class="sorrys" v-if="!flag">
   
   <div class="sorry"><img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.B9iC8ltI-u1_faWamRdqBwAAAA?pid=ImgDet&rs=1"/></div>
   <div class="so-text">SORRY \u627E\u4E0D\u5230\u8BE5\u6E38\u620F</div>
</div>
    `,setup(p){const r=u();let s=l(-1);const c=new v,e=d({lists:[]}),t=l(!0);async function m(){if(t.value===!1)return;const i="http://192.168.206.49:3300/r/searchName";s.value++;const g=i+"?subtitle="+r.query.subtitle+"&pages="+s.value,a=await c.GetUrl_searchName(g);console.log("\u8FD4\u56DE\u67E5\u8BE2\u7ED3\u679C",a),e.lists=[...e.lists,...a.msg],console.log("\u6E38\u620F\u6570\u636E",e.lists),a.msg.length===0&&(t.value=!1)}const o=f();function n(i){o.push({name:"Game",query:{id:i.id}})}return{pages:s,list:e,searchName:m,goGame:n,flag:t}}};export{y as default};
