import{u as v,r as a,a as _,c as f}from"./index.14391e10.js";var b={template:`
    
    <div class="search-content">
    <a href="#" class="classify"></a>
    <div class="search">
        <form action="">
            <input type="search" placeholder="\u91D1\u5C5E\u9AD8\u8FBE\uFF0C\u54D2\u54D2\u54D2">
        </form>
    </div>
    <a href="#" class="logins">\u767B\u5F55</a>
   </div>
    `},F={template:`
     <div class="main">

     <div class="m-icon">
       <div v-for="item in Icon" class="icon">
       <div class="ic"> 
         <img :src="item.ic" />
       </div>
         
         <div class="con"> {{item.con}} </div>
       </div>
     </div>

     

       <div class="m-img">
       <el-carousel class="elcar" height="6.5rem">
       <el-carousel-item v-for="item in tImg" :key="item">
       <img :src="item"/>
       
       </el-carousel-item>
       </el-carousel>
       
       </div>

      <div> 
      <div class="control">
      <el-button type="primary" @click="TapUser">\u7528\u6237\u767B\u5F55\u72B6\u6001{{v}}
      </el-button></div>
      
      
      <div class="skip"><el-button @click="TapVIP" type="primary">{{aa}}</el-button></div>
      </div>
      
      <div class="control">
      <el-button type="primary" @click="Tap">\u751F\u6210\u968F\u673A\u6570
      </el-button>
      </div>

      {{ra}}

     
   

     </div>

     

     
    `,setup(q){const n=[{ic:"https://gw.alicdn.com/imgextra/i4/O1CN01XCiY1B1px9ivHkDGm_!!6000000005426-2-tps-183-144.png_q90.jpg_.webp",con:"\u5929\u732B\u65B0\u54C1"},{ic:"https://gw.alicdn.com/imgextra/i3/O1CN01FgQFp81spmBXqQMtA_!!6000000005816-2-tps-183-144.png_q90.jpg_.webp",con:"\u4ECA\u65E5\u7206\u6B3E"},{ic:"https://gw.alicdn.com/imgextra/i1/O1CN01tsk5OY1q0MUo5PJga_!!6000000005433-2-tps-183-144.png_q90.jpg_.webp",con:"\u5929\u732B\u56FD\u9645"},{ic:"https://gw.alicdn.com/imgextra/i2/O1CN01yK3Cxn1sTnAx1fOjq_!!6000000005768-2-tps-183-144.png_q90.jpg_.webp",con:"\u98DE\u732A\u65C5\u884C"},{ic:"https://gw.alicdn.com/imgextra/i1/O1CN01iZIGkz1URSOUdRHqS_!!6000000002514-2-tps-183-144.png_q90.jpg_.webp",con:"\u5929\u732B\u8D85\u5E02"},{ic:"https://gw.alicdn.com/tfs/TB1WgOmesieb18jSZFvXXaI3FXa-183-144.png_q90.jpg_.webp?getAvatar=1",con:"\u5206\u7C7B"},{ic:"https://gw.alicdn.com/imgextra/i4/O1CN01XCiY1B1px9ivHkDGm_!!6000000005426-2-tps-183-144.png_q90.jpg_.webp",con:"\u5929\u732B\u65B0\u54C1"},{ic:"https://gw.alicdn.com/imgextra/i3/O1CN01FgQFp81spmBXqQMtA_!!6000000005816-2-tps-183-144.png_q90.jpg_.webp",con:"\u4ECA\u65E5\u7206\u6B3E"},{ic:"https://gw.alicdn.com/imgextra/i1/O1CN01tsk5OY1q0MUo5PJga_!!6000000005433-2-tps-183-144.png_q90.jpg_.webp",con:"\u5929\u732B\u56FD\u9645"},{ic:"https://gw.alicdn.com/imgextra/i1/O1CN01iZIGkz1URSOUdRHqS_!!6000000002514-2-tps-183-144.png_q90.jpg_.webp",con:"\u5929\u732B\u8D85\u5E02"}],o=["https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20150730%2Ftaobaoshangpindacuxuanchuanhaibaosheji_4746792.jpg&refer=http%3A%2F%2Fimg.redocn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655716014&t=671e18dab4670561eb2f64db5ae9290a","https:gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F016fb655688ed40000012716e0edda.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655716028&t=7777495f2990067ba8f42e1e43679532","https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.sccnn.com%2Fbimg%2F339%2F14632.jpg&refer=http%3A%2F%2Fimg.sccnn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655716014&t=38d4bf959d6d8f10b664dd51a0b3458e"],s=v(),p=a(!1),e=a("\u53BB\u767B\u5F55"),i=_(),t=a(i.state.isLogin);function m(){return t.value=!t.value,console.log(t),i.commit=t.value,t.value===!1?e.value="\u53BB\u767B\u5F55":e.value="\u53BB\u670D\u52A1\u9875"}const r=f(()=>i.state.isLogin);function g(){let d=Math.round(Math.random()*255),u=Math.round(Math.random()*255),h=Math.round(Math.random()*255);t.value===!1?s.push({name:"login"}):s.push({name:"service",query:{id:c.value,r:d,g:u,b:h}})}const c=a();function l(){c.value=Math.floor(Math.random()*100)}return{Icon:n,tImg:o,user:p,TapUser:m,aa:e,TapVIP:g,d:r,v:t,Tap:l,ra:c}}},j={template:`
    <C_header  />
    <C_main />
    `,components:{C_header:b,C_main:F}};export{j as default};
