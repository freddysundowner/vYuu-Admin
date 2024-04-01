(this.webpackJsonptokshop=this.webpackJsonptokshop||[]).push([[21],{201:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t(16),l=t(43),c=(t(71),t(44)),i=t(47),n=t(11),o=(t(61),t(45)),d=t(123),m=t(1);a.default=()=>{const{state:{adminInfo:e,token:a}}=Object(r.useContext)(n.a),{register:t,handleSubmit:j,onSubmit:b,errors:u}=Object(d.a)(e._id);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.a,{children:"Woocommerce Settings"}),Object(m.jsx)("div",{className:"container p-6 mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg",children:Object(m.jsxs)("form",{onSubmit:j(b),children:[Object(m.jsx)("div",{className:"p-6 flex-grow scrollbar-hide w-full max-h-full",children:Object(m.jsxs)("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[Object(m.jsx)(c.a,{label:"Woocommerce Shop Url"}),Object(m.jsxs)("div",{className:"col-span-8 sm:col-span-4",children:[Object(m.jsx)(i.a,{register:t,defaultValue:"",label:"Woocommerce Shop Url",name:"wcUrl",type:"wcUrl",placeholder:"Url"}),Object(m.jsx)(l.a,{errorName:u.wcUrl})]})]})}),Object(m.jsx)("div",{className:"p-6 flex-grow scrollbar-hide w-full max-h-full",children:Object(m.jsxs)("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[Object(m.jsx)(c.a,{label:" Security Key"}),Object(m.jsxs)("div",{className:"col-span-8 sm:col-span-4",children:[Object(m.jsx)(i.a,{register:t,defaultValue:"",label:"SecurityKey ",name:"wcSecretKey",type:"wcSecretKey",placeholder:"security key"}),Object(m.jsx)(l.a,{errorName:u.wcSecretKey})]})]})}),Object(m.jsx)("div",{className:"p-6 flex-grow scrollbar-hide w-full max-h-full",children:Object(m.jsxs)("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[Object(m.jsx)(c.a,{label:"Consumer Key"}),Object(m.jsxs)("div",{className:"col-span-8 sm:col-span-4",children:[Object(m.jsx)(i.a,{register:t,defaultValue:"",label:"ConsumerKey ",name:"wcConsumerKey",type:"wcConsumerKey",placeholder:"consumer key"}),Object(m.jsx)(l.a,{errorName:u.wcConsumerKey})]})]})}),Object(m.jsx)("div",{className:"flex flex-row-reverse pr-6 pb-6",children:Object(m.jsx)(s.Button,{type:"submit",className:"h-12 px-6",children:"Update Settings"})})]})})]})}},61:function(e,a,t){"use strict";t(0);var r=t(16),s=t(1);a.a=e=>{let{setRole:a,register:t,name:l,label:c}=e;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(r.Select,{onChange:e=>a(e.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white",name:l,...t(`${l}`,{required:`${c} is required!`}),children:[Object(s.jsx)("option",{value:"",defaultValue:!0,hidden:!0,children:"Admin role"}),Object(s.jsx)("option",{value:"admin",children:"Admin"}),Object(s.jsx)("option",{value:"restricted",children:"Restricted"})]})})}},71:function(e,a,t){"use strict";var r=t(0),s=t(53),l=t(8),c=t.n(l),i=t(48),n=t.n(i),o=t(2),d=t(49),m=t(11),j=t(17),b=t(18);a.a=e=>{const{state:a}=Object(r.useContext)(m.a),{adminInfo:t}=a,[l,i]=Object(r.useState)(""),[u,g]=Object(r.useState)(""),p=Object(o.h)(),{isDrawerOpen:h,closeDrawer:x,setIsUpdate:O}=Object(r.useContext)(j.a),{register:f,handleSubmit:w,setValue:y,clearErrors:S,formState:{errors:v}}=Object(s.a)();return Object(r.useEffect)((()=>{if(!h)return y("email"),y("password"),y("joiningDate"),y("role"),S("email"),S("password"),S("joiningDate"),void S("role");e&&d.a.getAdminById(e).then((e=>{e&&(y("email",e.admin.email),y("password"),y("joiningDate",e.admin.joiningData),y("role",e.admin.role),g(n()(e.joiningData).format("YYYY-MM-DD")))})).catch((e=>{Object(b.b)("There is a server error!")}))}),[e,y,h,t.email,S]),Object(r.useEffect)((()=>{if("/setting"===p.pathname||"/edit-profile"===p.pathname&&c.a.get("adminInfo")){const e=JSON.parse(c.a.get("adminInfo"));y("email",e.email),y("role",e.role),i(e.image),g(n()(e.joiningData).format("YYYY-MM-DD"))}}),[]),{register:f,handleSubmit:w,onSubmit:a=>{const r={email:a.email,password:a.password,joiningDate:u||n()(new Date).format("YYYY-MM-DD"),role:a.role};e?(d.a.updateAdmin(e,{email:t.email,data:r}).then((e=>{O(!0),Object(b.c)("Admin Updated Successfully!")})).catch((e=>Object(b.b)(e.message))),x()):(d.a.addAdmin(r).then((e=>{O(!0),Object(b.c)(e.message)})).catch((e=>Object(b.b)(e.message))),x())},errors:v,setImageUrl:i,imageUrl:l,selectedDate:u,setSelectedDate:g}}}}]);
//# sourceMappingURL=21.8e8a62f6.chunk.js.map