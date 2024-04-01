(this.webpackJsonptokshop=this.webpackJsonptokshop||[]).push([[20],{203:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t(16),l=(t(43),t(71),t(44),t(47),t(11)),r=(t(61),t(45)),o=t(211),c=t(209),i=t(18),d=t(46),b=t(1);a.default=()=>{const{state:{adminInfo:e,token:a}}=Object(s.useContext)(l.a),[t,m]=Object(s.useState)([{name:"Cash On Delivery",amount:0,enabled:!0}]);Object(s.useEffect)((()=>{e.shopId&&d.a.getShippingMethods(e.shopId).then((e=>{e&&(console.log(e.data[0].shippingMethods),m(e.data[0].shippingMethods))})).catch((e=>{Object(i.b)("There is a server error!")}))}),[e]);const h=(e,a)=>{let s=[...t];s[a][e.target.name]=e.target.value,m(s),console.log(s),console.log(t)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(r.a,{children:"Shipping Methods"}),Object(b.jsxs)("div",{className:"container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg",children:[Object(b.jsx)(n.Button,{className:"h-10 px-6 mb-5",onClick:()=>{m([...t,{name:"",amount:0,enabled:!0}])},children:"Add +"}),Object(b.jsxs)("form",{onSubmit:a=>{a.preventDefault(),console.log(t),d.a.saveShippingMethods(e.shopId,{data:t}).then((e=>{Object(i.c)("Updated shipping methods")})).catch((e=>Object(i.b)(e.message)))},children:[t.map(((e,a)=>Object(b.jsxs)("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[Object(b.jsx)("div",{className:"col-span-4 sm:col-span-2",children:Object(b.jsx)(n.Input,{name:"name",placeholder:"Name",onChange:e=>h(e,a),value:e.name,className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"})}),Object(b.jsx)("div",{className:"col-span-4 sm:col-span-2",children:Object(b.jsx)(n.Input,{name:"amount",placeholder:"Amount",onChange:e=>h(e,a),value:e.amount,type:"number",className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"})}),Object(b.jsx)("div",{className:"flex-grow scrollbar-hide w-full",children:Object(b.jsxs)("div",{className:"grid grid-cols-12 gap-3 xl:gap-12 lg:gap-12",children:[Object(b.jsx)("button",{className:"col-span-6 sm:col-span-3",onClick:()=>(e=>{let a=[...t];a.splice(e,1),m(a)})(a),children:"Remove"}),Object(b.jsxs)("div",{className:"col-span-4 sm:col-span-4",children:[Object(b.jsx)("input",{name:"enabled",onChange:e=>h(e,a),type:"hidden",value:e.enabled,className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"}),Object(b.jsx)(o.a,{control:Object(b.jsx)(c.a,{name:"enabled",value:e.enabled,checked:e.enabled,onChange:s=>{let n=[...t];n[a].enabled=!e.enabled,m(n),console.log(n)},inputProps:{"aria-label":"controlled"}}),label:"Enabled"})]})]})})]},a))),Object(b.jsx)("div",{className:"flex flex-row-reverse pr-6 pb-6",children:Object(b.jsx)(n.Button,{type:"submit",className:"h-12 px-6",children:"Save"})})]})]})]})}},61:function(e,a,t){"use strict";t(0);var s=t(16),n=t(1);a.a=e=>{let{setRole:a,register:t,name:l,label:r}=e;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(s.Select,{onChange:e=>a(e.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white",name:l,...t(`${l}`,{required:`${r} is required!`}),children:[Object(n.jsx)("option",{value:"",defaultValue:!0,hidden:!0,children:"Admin role"}),Object(n.jsx)("option",{value:"admin",children:"Admin"}),Object(n.jsx)("option",{value:"restricted",children:"Restricted"})]})})}},71:function(e,a,t){"use strict";var s=t(0),n=t(53),l=t(8),r=t.n(l),o=t(48),c=t.n(o),i=t(2),d=t(49),b=t(11),m=t(17),h=t(18);a.a=e=>{const{state:a}=Object(s.useContext)(b.a),{adminInfo:t}=a,[l,o]=Object(s.useState)(""),[g,p]=Object(s.useState)(""),u=Object(i.h)(),{isDrawerOpen:j,closeDrawer:O,setIsUpdate:f}=Object(s.useContext)(m.a),{register:x,handleSubmit:v,setValue:w,clearErrors:D,formState:{errors:k}}=Object(n.a)();return Object(s.useEffect)((()=>{if(!j)return w("email"),w("password"),w("joiningDate"),w("role"),D("email"),D("password"),D("joiningDate"),void D("role");e&&d.a.getAdminById(e).then((e=>{e&&(w("email",e.admin.email),w("password"),w("joiningDate",e.admin.joiningData),w("role",e.admin.role),p(c()(e.joiningData).format("YYYY-MM-DD")))})).catch((e=>{Object(h.b)("There is a server error!")}))}),[e,w,j,t.email,D]),Object(s.useEffect)((()=>{if("/setting"===u.pathname||"/edit-profile"===u.pathname&&r.a.get("adminInfo")){const e=JSON.parse(r.a.get("adminInfo"));w("email",e.email),w("role",e.role),o(e.image),p(c()(e.joiningData).format("YYYY-MM-DD"))}}),[]),{register:x,handleSubmit:v,onSubmit:a=>{const s={email:a.email,password:a.password,joiningDate:g||c()(new Date).format("YYYY-MM-DD"),role:a.role};e?(d.a.updateAdmin(e,{email:t.email,data:s}).then((e=>{f(!0),Object(h.c)("Admin Updated Successfully!")})).catch((e=>Object(h.b)(e.message))),O()):(d.a.addAdmin(s).then((e=>{f(!0),Object(h.c)(e.message)})).catch((e=>Object(h.b)(e.message))),O())},errors:k,setImageUrl:o,imageUrl:l,selectedDate:g,setSelectedDate:p}}}}]);
//# sourceMappingURL=20.e15ccdce.chunk.js.map