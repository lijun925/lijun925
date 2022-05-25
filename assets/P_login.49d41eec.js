import{r as e,u as v,E as n}from"./index.14391e10.js";var b={template:`
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="\u767B\u5F55\u5E10\u53F7" name="first">
    
    <el-input v-model="input" placeholder="\u8BF7\u8F93\u5165\u5E10\u53F7" class="el-inp"/>
    <el-input v-model="input1" type="password" show-password placeholder="\u8BF7\u8F93\u5165\u5E10\u53F7\u5BC6\u7801" />

    <div class="el-round" @click="Taplogin"><el-button type="primary" round>\u767B\u5F55</el-button></div>
    
    </el-tab-pane>
    <el-tab-pane label="\u6CA1\u6709\u5E10\u53F7?\u6CE8\u518C\u4E00\u4E0B" name="second">
    <el-input v-model="input2" placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801" class="el-inp"/>
    <el-input v-model="input3" type="password" show-password placeholder="\u8BF7\u8BBE\u7F6E\u60A8\u7684\u5BC6\u7801" />

    <div class="el-round"><el-button type="primary" round>\u6CE8\u518C</el-button></div>
    </el-tab-pane>
   
    </el-tabs>

      <div class="l-time" v-if="flag">{{time}}</div>
    `,setup(m){const i=e("first");let l=e(3);function o(){}const a=e(!1),p=v(),t=e(""),s=e(""),u=e(""),r=e("");function c(){if(t.value!=""&&s.value!=""){n({message:"\u7528\u6237:"+t.value+"\u767B\u5F55\u6210\u529F,",type:"success"}),a.value=!0;const d=setInterval(()=>{l.value--,l.value===0&&(clearInterval(d),l.value=3,p.push({name:"index",query:{flag:a.value}}),a.value=!1)},1e3)}else n({message:"\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",type:"warning"})}return{activeName:i,handleClick:o,input:t,input1:s,input2:u,input3:r,Taplogin:c,flag:a,time:l}}};export{b as default};
