import{r as o,b as c}from"./index.14391e10.js";var v={template:`
     \u6211\u662F\u670D\u52A1

     \u63A5\u6536100\u4EE5\u5185\u7684\u53C2\u6570\u662F{{msg}}

     \u80CC\u666F\u989C\u8272\u53C2\u6570\u662F 

     {{rgb}}
    `,setup(){const r=document.body,u=o("");console.log(r);const s=o(""),a=o(""),t=o(""),l=o(""),e=c();return console.log("\u83B7\u53D6\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E",e.query),s.value=e.query.id,a.value=e.query.r,t.value=e.query.g,l.value=e.query.b,u.value="rgb("+a.value+","+t.value+","+l.value+")",r.style.backgroundColor=u.value,{msg:s,r:a,g:t,b:l,aa:r,rgb:u}}};export{v as default};
