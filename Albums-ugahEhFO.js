import{d as y,h as C,c as m,z as I,aC as S,o as s,e as N,w as n,cW as x,cc as B,t as i,x as d,n as r,cX as w,y as z,F as u,A as p,I as F,f as a,s as $,H as g,k as l,m as A,l as H,cY as V,_ as D}from"./index-w4SHPE6S.js";import{b as f}from"./fancybox.utils-OAcz400z.js";import{f as E}from"./images_empty_state-cbOn8Fdm.js";const P=["onClick"],j=y({__name:"Albums",props:{images:{},albumName:{},route:{}},setup(k){const c=k,{t:v}=C(),t=m(()=>I.md.value?3:2),b=m(()=>c.route?{is:S,to:c.route}:{is:"div"});return(e,L)=>(s(),N(V,{class:"album-card"},{default:n(()=>[r(x,B(b.value,{divider:!1,target:"_blank",class:"d-block pb-3 text-4 text-shade-1 text-underline-hover"}),{default:n(()=>[d(i(e.albumName),1)]),_:1},16),r(w,{class:z(["align-items-center d-flex justify-content-center overflow-hidden pt-0",e.images.length>0?"gap-5":"gap-0 empty-state-container flex-direction-column text-2 text-shade-2 text-center"])},{default:n(()=>[e.images.length?(s(!0),l(u,{key:0},H(e.images.slice(0,t.value),(h,o)=>(s(),l("div",{key:o,class:"position-relative"},[r(p,{class:"cursor-pointer",src:a($)(h,a(F).SIZE256),onClick:g(_=>a(f)(e.images,o),["stop"])},null,8,["src","onClick"]),e.images.length>t.value&&o===t.value-1?(s(),l("div",{key:0,class:"cursor-pointer overlay text-7",onClick:g(_=>a(f)(e.images,o),["stop"])},i(`+${e.images.length-t.value}`),9,P)):A("",!0)]))),128)):(s(),l(u,{key:1},[r(p,{"img-classes":"aspect-ratio-1",class:"fallback-image","fallback-image":a(E)},null,8,["fallback-image"]),d(" "+i(a(v)("emptyStates.no_images_in_the_album")),1)],64))]),_:1},8,["class"])]),_:1}))}}),U=D(j,[["__scopeId","data-v-9d910f3f"]]);export{U as default};
//# sourceMappingURL=Albums-ugahEhFO.js.map
