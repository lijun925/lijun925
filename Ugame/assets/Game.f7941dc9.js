import{d as b,a as m,b as y,r as w,E as c}from"./index.d6a1f066.js";import{N as G}from"./NetFunc.6716c01f.js";var q={template:`
        <div class="game">
        <div class="g-name">{{msg.title}}</div>
        <div class="introduce">
          <video :src="msg.video " autoplay="autoplay" muted="muted" controls="controls" loop="loop" poster="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.qhimg.com%2Ft01e7dd43ce25305f82.jpg&refer=http%3A%2F%2Fp9.qhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657724696&t=5645e2c1e1dab6dcc7102b6db381627a"></video>
        </div>

        <div class="u-rating"> \u8BC4\u5206:{{msg.rating}}</div>

        <div class="mark" @click="TapCall">\u6253\u5206call</div>

         <div class="star">
        \u6253\u5206: <el-rate
         v-model="value" @click="Tapvalue"
        :texts="['20\u5206', '40\u5206', '60\u5206', '80\u5206', '100\u5206']"
        show-text/></div>

        <div class="leave">\u7559\u8A00:  <input placeholder="\u8F93\u5165\u60A8\u7684\u8BC4\u4EF7\u5427" class="evaluate" v-model="uLeave"/>  <div class="btn" @click="TapLeave">\u63D0\u4EA4</div></div>

        <div class="showLeave">
             <div class="show-box" v-for="item in msg.boards">
                <div class="Thead">
                 <div class="s-head">
                 <img :src="item.avatar"/>
                 </div>
                 <div>\u7528\u6237: {{item.username}}</div>
                </div>

                <div class="s-leave">{{item.content}}</div>
                <div class="s-time">{{item.createdAt}}</div>

             </div>
        </div>



    </div>
    
    `,setup(L){const r=b(),g=r.query,u=m(),t=y();console.log("\u72B6\u6001",t.state.isLogin),console.log("\u6570\u636E",t.state.list);const n=new G,o=m(""),a=w({id:"",title:"",video:"",rating:"",createdAt:"",boards:[]});async function v(){const s="http://192.168.176.49:3300/rsearchGames",i=r.query.id,l=s+"?id="+i,e=await n.GetUrl_searchGames(l);console.log("\u6E38\u620F",e.msg),a.id=e.msg[0].id,a.title=e.msg[0].subtitle,a.rating=e.msg[0].rating,a.video=e.msg[0].video,a.createdAt=e.msg[0].createdAt,a.boards=e.msg[0].boards.reverse()}v();let d=m(0);function p(){let s=20;s=u.value*s,d.value=s}async function f(){if(t.state.isLogin===!1)c({message:"\u60A8\u672A\u767B\u5F55\uFF0C\u4E0D\u80FD\u6253\u5206\u54E6\uFF0C\u8BF7\u767B\u5F55\u518D\u6765",type:"warning"});else if(d.value===0)c({message:"\u60A8\u5C1A\u672A\u6253\u5206\u54E6",type:"warning"});else{const i="http://192.168.176.49:3300/r/addrate"+"?rating="+d.value+"&gamesid="+r.query.id,l=await n.GetUrl_callGrade(i);console.log("\u6253\u5206\u7ED3\u679C",l),v()}}async function h(){if(t.state.isLogin===!1)c({message:"\u60A8\u672A\u767B\u5F55\uFF0C\u4E0D\u80FD\u7559\u8A00\u54E6\uFF0C\u8BF7\u767B\u5F55\u518D\u6765",type:"warning"});else if(o.value==="")c({message:"\u8BF7\u8F93\u5165\u7559\u8A00\u5185\u5BB9",type:"warning"});else{const s="http://192.168.176.49:3300/r/addboard",i=t.state.list[0].name,l=t.state.list[0].avatar,e=s+"?username="+i+"&content="+o.value+"&avatar="+l+"&gamesid="+a.id;await n.GetUrl_leave(e),o.value="",v()}}return{msg:a,value:u,TapLeave:h,uLeave:o,id:g,TapCall:f,Tapvalue:p,grades:d}}};export{q as default};
