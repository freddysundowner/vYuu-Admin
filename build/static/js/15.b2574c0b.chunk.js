(this.webpackJsonptokshop=this.webpackJsonptokshop||[]).push([[15],{196:function(e,t,s){"use strict";s.r(t);var a=s(16),r=s(0),n=s(12),o=s(2),i=s(53),c=s(43),d=s(44),l=s(49),m=s(18),p=s(1);t.default=()=>{const{token:e}=Object(o.i)(),t=Object(r.useRef)(""),[s,u]=Object(r.useState)(!1),{register:b,handleSubmit:h,watch:g,formState:{errors:j}}=Object(i.a)();t.current=g("newPassword");return Object(p.jsx)("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:Object(p.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:Object(p.jsx)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:Object(p.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:Object(p.jsxs)("div",{className:"w-full",children:[Object(p.jsx)("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Reset password"}),Object(p.jsxs)("form",{onSubmit:h((t=>{let{newPassword:s}=t;u(!0),l.a.resetPassword({newPassword:s,token:e}).then((e=>{u(!1),Object(m.c)(e.message)})).catch((e=>{u(!1),Object(m.b)(e?e.response.data.message:e.message)}))})),children:[Object(p.jsx)(d.a,{label:"Password"}),Object(p.jsx)(a.Input,{label:"Password",name:"newPassword",type:"password",placeholder:"Password",...b("newPassword",{required:"You must specify a password",minLength:{value:10,message:"Password must have at least 10 characters"}}),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"}),Object(p.jsx)(c.a,{errorName:j.newPassword}),Object(p.jsx)("div",{className:"mt-6"}),Object(p.jsx)(d.a,{label:"Confirm Password"}),Object(p.jsx)(a.Input,{label:"Confirm Password",name:"confirm_password",type:"password",placeholder:"Confirm Password",...b("confirm_password",{validate:e=>e===t.current||"The passwords do not match"}),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"}),Object(p.jsx)(c.a,{errorName:j.confirm_password}),Object(p.jsx)(a.Button,{disabled:s,type:"submit",block:!0,className:"mt-4 h-12",children:"Reset"})]}),Object(p.jsx)("p",{className:"mt-4",children:Object(p.jsx)(n.b,{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",to:"/login",children:"Already have an account? Login"})})]})})})})})}},42:function(e,t,s){"use strict";var a=s(70),r=s.n(a),n=s(8),o=s.n(n);const i=r.a.create({baseURL:"https://api.vyuu.ai",timeout:5e5,headers:{Accept:"application/json","Content-Type":"application/json"}});i.interceptors.request.use((function(e){let t;return o.a.get("adminInfo")&&(t=JSON.parse(o.a.get("adminInfo"))),{...e,headers:{authorization:t?`Bearer ${t.token}`:null}}}));const c=e=>e.data,d={get:(e,t,s)=>i.get(e,t,s).then(c),post:(e,t)=>i.post(e,t).then(c),put:(e,t,s)=>i.put(e,t,s).then(c),patch:(e,t)=>i.patch(e,t).then(c),delete:e=>i.delete(e).then(c)};t.a=d},43:function(e,t,s){"use strict";s(0);var a=s(1);t.a=e=>{let{errorName:t}=e;return Object(a.jsx)(a.Fragment,{children:t&&Object(a.jsx)("span",{className:"text-red-400 text-sm mt-2",children:t.message})})}},44:function(e,t,s){"use strict";s(0);var a=s(16),r=s(1);t.a=e=>{let{label:t}=e;return Object(r.jsx)(a.Label,{className:"col-span-4 sm:col-span-2 font-medium text-sm",children:t})}},49:function(e,t,s){"use strict";var a=s(42);const r={registerAdmin:e=>a.a.post("/admin/register",e),loginAdmin:e=>a.a.post("/admin/login",e),loginUser:e=>a.a.post("/login",e),authenticateUser:e=>a.a.post("/authenticate/social",e),forgetPassword:e=>a.a.put("/admin/forget-password",e),resetPassword:e=>a.a.put("/admin/reset-password",e),signUpWithProvider:e=>a.a.post("/admin/signup",e),addAdmin:e=>a.a.post("/admin",e),getAllAdmin:()=>a.a.get("/admin"),getAdminById:e=>a.a.get(`/admin/id/${e}`),updateAdmin:(e,t)=>a.a.patch(`/admin/${e}`,t),deleteAdmin:e=>a.a.delete(`/admin/${e}`),updateAppSettings:e=>a.a.post("/admin/app/settings",e),getAppSettings:()=>a.a.get("/admin/app/settings")};t.a=r}}]);
//# sourceMappingURL=15.b2574c0b.chunk.js.map