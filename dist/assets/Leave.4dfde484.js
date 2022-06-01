import{N as y}from"./NetFunc.e88c210a.js";import{N as a,t as g,r as u}from"./index.35204ec9.js";var h={template:`
      

    <div class="leave">
       <div>
        
       <el-input v-model="names" placeholder="\u8BF7\u8F93\u5165\u540D\u5B57" style="width:80%" class="el-na"/>
       <el-input v-model="leave" :rows="2" type="textarea" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" style="width:80%" class="el-le"/>

       <van-button type="primary" size="normal" @click="TapSubmit">\u63D0\u4EA4\u7559\u8A00</van-button>

         
       </div>

      <div class="listle">
      <div v-for="item in lists.list" class="leave-list">
      <div> name: {{item.name}} </div> 
      <div> content: {{item.ans}} </div>
      <div> time: {{item.time}} </div>
      </div>
      </div>
        
    </div>
    `,components:{[a.Component.name]:a.Component},setup(w){const m=new y,c=g({list:""});async function v(){const i="https://movie.pzzzr.com/getQuest",n={name:"123"},r=(await m.GetUrl(i,n)).data;let d={};for(let e in r.msg){const l=r.msg[e];d[e]=JSON.parse(l)}const p=Object.values(d).sort((e,l)=>l.time-e.time);for(let e of p)e.time=new Date(e.time).toLocaleString();c.list=p}v();const t=u(""),s=u("");async function f(){if(t.value===""&&s.value==="")return a({type:"warning",message:"\u54CE\u563F\uFF0C\u540D\u5B57\u548C\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"});{a({type:"success",message:"\u7559\u8A00\u6210\u529F"});const i="https://movie.pzzzr.com/postQuest",n={name:t.value,ans:s.value},o=await m.PostUrl(i,n);console.log("\u663E\u793A\u8BBF\u95EE\u7ED3\u679C",o),o.data.msg,v(),t.value="",s.value=""}}return{TapSubmit:f,names:t,leave:s,lists:c}}};export{h as default};
