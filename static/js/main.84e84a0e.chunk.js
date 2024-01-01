(this["webpackJsonpcart-e-commerce"]=this["webpackJsonpcart-e-commerce"]||[]).push([[0],{62:function(e,t,a){e.exports=a(85)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(54),l=a.n(r),o=(a(69),a(38)),s=a(3),i=(a(70),a(57)),m=a(36),d=a(60),u=a(52),p=(a(71),a(25)),g=a(19);const E=Object(g.c)({name:"cartslice",initialState:{cartState:[],isOpen:!1},reducers:{Open:e=>{e.isOpen=!e.isOpen},AddToCart:(e,t)=>{const a=e.cartState.find(e=>e.id===t.payload.id);if(a)a.quantity+=1;else{const a={...t.payload,quantity:1};e.cartState.push(a)}},RemoveFromCart:(e,t)=>{e.cartState=e.cartState.filter(e=>e.id!==t.payload.id),console.log(t.payload)},ClearFromCart:(e,t)=>{e.cartState=[]}}});var y=E.reducer;const{Open:f,AddToCart:b,RemoveFromCart:v,ClearFromCart:h}=E.actions;var j=a(11);var C=()=>{const e=Object(j.b)(),t=Object(j.c)(e=>e.cart.cartState),a=Object(j.c)(e=>e.productts.error);return n.a.createElement(n.a.Fragment,null,a?n.a.createElement(i.a,{variant:"danger"},a," Data From Server "):n.a.createElement(u.a,{expand:"lg",fixed:"top",className:"bg-body-tertiary nav_css"},n.a.createElement(m.a,null,n.a.createElement(o.b,{to:"/",className:"navbar-brand"},"My Store"),n.a.createElement(u.a.Collapse,{id:"basic-navbar-nav "},n.a.createElement(d.a,{className:"ms-auto "},n.a.createElement(o.b,{className:"nav-link",to:"/"},"Products"),n.a.createElement(p.a,{variant:"outline",className:"ms-5 btn_style",onClick:()=>e(f())},n.a.createElement("div",null,t.length),n.a.createElement("i",{className:"fa-solid fa-cart-shopping"})))))))},N=a(35);const O=Object(g.b)("productSlice/getProducts",async(e,t)=>{const{rejectWithValue:a}=t;try{const e=await fetch("https://fakestoreapi.com/products"),t=await e.json();return console.log(t,"data"),t}catch(c){return a(c.message)}}),S=Object(g.b)("productSlice/getCategories",async(e,t)=>{const{rejectWithValue:a}=t;try{const e=await fetch("https://fakestoreapi.com/products/categories"),t=await e.json();return console.log(t,"data"),t}catch(c){return a(c.message)}}),k=Object(g.b)("productSlice/specificeCategory",async(e,t)=>{const{rejectWithValue:a}=t;try{const t=await fetch("https://fakestoreapi.com/products/category/".concat(e)),a=await t.json();return console.log(a,"data"),a}catch(c){return a(c.message)}});var x=Object(g.c)({name:"productSlice",initialState:{products:[],isloading:!1,error:null,categories:[]},extraReducers:{[O.pending]:(e,t)=>{e.isloading=!0,e.error=null},[O.fulfilled]:(e,t)=>{e.isloading=!1,e.products=t.payload,console.log(t.payload,"action")},[O.rejected]:(e,t)=>{e.isloading=!1,e.error=t.payload},[S.pending]:(e,t)=>{e.isloading=!0,e.error=null},[S.fulfilled]:(e,t)=>{e.isloading=!1,e.categories=t.payload},[S.rejected]:(e,t)=>{e.isloading=!1,e.error=t.payload},[k.pending]:(e,t)=>{e.isloading=!0,e.error=null},[k.fulfilled]:(e,t)=>{e.isloading=!1,e.products=t.payload},[k.rejected]:(e,t)=>{e.isloading=!1,e.error=t.payload}}}).reducer,F=a(58),w=a(59);a(82);var T=()=>{const e=Object(j.b)(),{products:t,isloading:a,categories:r}=Object(j.c)(e=>e.productts);return console.log(r,"categories"),Object(c.useEffect)(()=>{e(O()),e(S())},[]),n.a.createElement("div",null,a?n.a.createElement("h2",{className:"loadng"},"Loading..."):n.a.createElement(n.a.Fragment,null,r.map(t=>n.a.createElement("div",{className:"Cat_Style"},n.a.createElement(p.a,{key:t,variant:"outline-secondary",size:"sm",onClick:()=>e(k(t))},t))),n.a.createElement(F.a,{md:2,xs:1,lg:3,className:"g-3  marg"},null===t||void 0===t?void 0:t.map(t=>n.a.createElement(w.a,{key:t.id},n.a.createElement(N.a,{className:"mt-2",style:{width:"auto ",height:"auto"}},n.a.createElement(N.a.Img,{variant:"top",src:t.image,className:"img-css mt-3"}),n.a.createElement(N.a.Body,null,n.a.createElement(N.a.Title,null,"Tilte"),n.a.createElement(N.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement("div",{className:"d-flex justify-content-between   justify-content-center"},n.a.createElement(p.a,{variant:"primary btn-secondary",className:"mb-3",onClick:()=>e(b(t))},"Add To Cart"),n.a.createElement("div",{className:"text-muted justifay"}," ","Price ",t.price,"$")))))))))},P=a(28),q=a(61);a(83);var z=()=>{const e=Object(j.b)(),{isOpen:t,cartState:a}=Object(j.c)(e=>e.cart);console.log(a);const c=a.reduce((e,t)=>e+=t.price*t.quantity,0);return n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,{show:t,onHide:()=>e(f()),placement:"end"},n.a.createElement(P.a.Header,{closeButton:!0},n.a.createElement(P.a.Title,null,"Cart")),n.a.createElement(P.a.Body,{className:" ",style:{width:"auto "}},null===a||void 0===a?void 0:a.map(t=>n.a.createElement(q.a,{key:t.id,gap:3,className:"mb-5 d-flex justify-content-center align-items-center",direction:"horizontal"},n.a.createElement("img",{src:t.image,alt:"Girl in a jacket",width:"100px",height:"90px",style:{objectFit:"cover"}}),n.a.createElement("div",{className:"p-2 font_size"},t.title),n.a.createElement("div",{className:"p-2 font_size"},"x",t.quantity),n.a.createElement("div",{className:"p-2"},t.price,"$"),n.a.createElement(p.a,{className:"close",variant:"outlined",onClick:()=>e(v(t))},n.a.createElement("i",{class:"fa-regular fa-circle-xmark"})))),n.a.createElement("div",{className:"d-flex justify-content-between pt-4 "},n.a.createElement("span",null,"Total Price : ",c.toFixed(2),"$"),n.a.createElement(p.a,{variant:"danger mb-5 ",size:"sm",onClick:()=>e(h())},"Clear")))))};var B=function(){return Object(j.c)(e=>e.cart.isOpen),n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(C,null),n.a.createElement(z,null),n.a.createElement(m.a,{className:""},n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/",element:n.a.createElement(T,null)}))))))};var _=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,87)).then(t=>{let{getCLS:a,getFID:c,getFCP:n,getLCP:r,getTTFB:l}=t;a(e),c(e),n(e),r(e),l(e)})};a(84);const A=Object(g.a)({reducer:{productts:x,cart:y}});l.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j.a,{store:A},n.a.createElement(B,null)))),_()}},[[62,1,2]]]);
//# sourceMappingURL=main.84e84a0e.chunk.js.map