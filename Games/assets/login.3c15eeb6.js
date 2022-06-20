import{N as x}from"./NetFunc.6716c01f.js";import{b as L,c as z,u as T,a as i,r as U,E as e}from"./index.5991006d.js";var Y={template:`
      
     <div class="logins">
          <div class="register" v-if="show">
              <div class="dl">\u767B\u5F55</div>

              <div class="user">
              <input placeholder="\u8BF7\u8F93\u5165\u8D26\u53F7" class="yh" v-model="uname"/>
              </div>
              <div class="user">
              <input placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" type="password" class="yh" v-model="upass"/>
              </div> 

              <div class="u-dl" @click="TapLogin">\u767B\u5F55</div>

              <div class="go-zc" @click="TapShow">\u6CA1\u6709\u8D26\u53F7?\u7ACB\u5373\u6CE8\u518C</div>

              <div class="quit" @click="TapQuit">\u9000\u51FA\u767B\u5F55</div>
          </div>

          <div class="sign" v-if="!show">
              <div class="dl">\u6CE8\u518C</div>

                  <div class="u-avatar">
                     <img :src="imgs[i]"/>
                  </div>
              <div class="user">
              <input placeholder="\u8F93\u5165\u6635\u79F0" class="yh" v-model="rname"/>
              </div>

              <div class="user">
              <input placeholder="\u6CE8\u518C\u90AE\u7BB1" class="yh" v-model="remail"/>
              </div>
              <div class="user">
              <input placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" type="password" class="yh" v-model="rpass"/>
              </div> 

              <div class="u-dl" @click="TapRegister">\u6CE8\u518C</div>

            
          </div>

          
     </div>
    
    `,setup(W){const g=new x,t=L(),h=z(()=>t.state.isLogin),w=T(),a=i(!0),n=i(""),p=i(""),c=i(""),r=i(""),d=i("");let o=i(0);function y(){a.value=!a.value,o.value=Math.floor(Math.random()*10),console.log(o.value)}const u=U(["https://thirdwx.qlogo.cn/mmopen/vi_32/rpWsnqquMsSvZExo7y1mOiaCnuicmoFzj9rpub6LjKtMiazTaaCyhf57fGzTAKe6qQbqh2CYM265LlFFqGyr56C3Q/132","https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ere66YhQsiaaymDgaYiaic0ssJZCLbd7dicUVk2QlyjHrwJQWtvrPpWlzkPwQ6ngEVF2ZZO05jZUGhkLQ/132","https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erppbecYxyJ6DKQX29JoziaJA5CtibZmXd5GeapIbOId0kt9YXP9wVRyYeKeoicBWgIia88x58JzEyibrQ/132","https://thirdwx.qlogo.cn/mmopen/vi_32/Ipwf4bCI8LJmdxg6icSft1ZbQK796Ze839V9hCGUgQOJOKAiciaNIPXWQQP0GCFGV6UCPWy7AcnSUCAWWTSGHN8sw/132","https://thirdwx.qlogo.cn/mmopen/vi_32/o1FuQj6qEiaZwLVe4DjQFWGhiaByibSzUzzVJhzHJDX4PF6E3nmo4GVkNu0ibRaVWicVLOLmiaGec49hQxkxoh1MaK1A/132","https://thirdwx.qlogo.cn/mmopen/vi_32/qxWEIjy9XYfHHJ5YuawBmCeziaesYnYAVJqkOmfraemwljMS6jDWicicQxicDTeVg7vVYo9ZeXuqOkk8srdQ95Hib1A/132","https://thirdwx.qlogo.cn/mmopen/vi_32/a8ibq87l4H8JUFIx6bOq96XFFPicbxase3iblIn3jktfMwGfwkhJnBdylcIol4ibWwWs1zBUgM3dycibmznRWqceOvA/132","https://thirdwx.qlogo.cn/mmopen/vi_32/U9Q1QddmI9OdFvsoEU4Qz0eSia8aLP2dCMPzQZlNNkW8p2gsw84XvumLa3MopTNQNib3x2sPsUTVBK7LOunOlYUw/132","https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEIXib7h3WibsFl7ic8eoEgK3FHTWEnKfoR2HRF3VNrhIqbUaLlQTNE07qUYwqq4GQE1MmYT5Tdb2stIA/132","https://thirdwx.qlogo.cn/mmopen/vi_32/Ug3vL4QjoP8aibic57eXV4ex3ibFnEhwp6D8rY2ZJyexXD6U992oy9GJplJdJWs6D9Bds41SL1vN03SYODyTkicjfg/132"]);function f(){t.commit("ChangeLogin",!1)}async function q(){const m="http://192.168.206.49:3300/r/login";if(n.value===""||r.value==="")e({message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u548C\u5BC6\u7801",type:"warning"});else{const l=m+"?email="+n.value+"&pass="+r.value,s=await g.GetUrl_login(l);if(console.log("\u8FD4\u56DE\u7ED3\u679C",s),s.msg==="\u8BE5\u8D26\u53F7\u4E0D\u5B58\u5728!")e({message:s.msg,type:"error"});else if(s.msg==="\u5BC6\u7801\u4E0D\u6B63\u786E!")e({message:s.msg,type:"error"});else{w.push({name:"gamesList"});const b=!0;t.commit("ChangeLogin",b),t.commit("UserMessage",s.msg)}}}let v=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;async function Q(){if(!v.test(c.value))e({message:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E",type:"warning"});else{const l="http://192.168.206.49:3300/r/registered"+"?email="+c.value+"&pass="+d.value+"&avatar="+u[o.value]+"&name="+p.value;console.log(l);const s=await g.GetUrl_registered(l);console.log("\u8FD4\u56DE\u7ED3\u679C",s),s.msg==="\u6CA1\u6709\u6635\u79F0"?e({message:s.msg,type:"warning"}):s.msg==="\u6CA1\u6709\u90AE\u7BB1"?e({message:s.msg,type:"warning"}):s.msg==="\u6CA1\u6709\u5BC6\u7801"?e({message:s.msg,type:"warning"}):s.msg==="\u8BE5\u8D26\u53F7\u5B58\u5728\uFF0C\u8BF7\u518D\u6CE8\u518C\u65B0\u7684\u8D26\u53F7"?e({message:s.msg,type:"warning"}):(e({message:s.msg,type:"success"}),setTimeout(function(){a.value=!a.value},3e3))}}return{isLogin:h,show:a,i:o,TapShow:y,uname:n,upass:r,rname:p,remail:c,rpass:d,imgs:u,TapLogin:q,TapRegister:Q,str:v,TapQuit:f}}};export{Y as default};
