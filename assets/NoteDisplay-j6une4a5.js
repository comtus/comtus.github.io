import{d as c,o as s,e as n,s as l,f as r,t as a,_ as d}from"./index-DEl4yMDF.js";const u=["innerHTML"],m=["textContent"],v=["textContent"],f=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const o=p;return(e,t)=>e.noteHtml?(s(),n("div",{key:0,class:l(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,u)):e.note?(s(),n("div",{key:1,class:l(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,m)],2)):(s(),n("div",{key:2,class:l(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[r("p",{textContent:a(o.placeholder||"No notes.")},null,8,v)],2))}}),k=d(f,[["__file","/home/suresh/code/presentations/slidev/sample/node_modules/.pnpm/@slidev+client@0.46.1_postcss@8.4.33_typescript@5.3.3_vite@5.0.11/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{k as N};