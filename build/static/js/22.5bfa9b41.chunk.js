(this.webpackJsonptokshop=this.webpackJsonptokshop||[]).push([[22],{104:function(e,t,a){"use strict";var l=a(0),s=a.n(l),c=a(12),r=a(16),n=a(41),d=a(60),i=a(64),j=a(54),o=a(77),b=a(63),x=a(76),h=a(58),u=a(1);const O=e=>{let{products:t}=e;const{title:a,serviceId:l,handleModalOpen:s,handleUpdate:O}=Object(h.a)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i.a,{id:l,title:a}),Object(u.jsx)(j.a,{children:Object(u.jsx)(o.a,{id:l})}),Object(u.jsx)(r.TableBody,{children:null===t||void 0===t?void 0:t.map(((e,t)=>Object(u.jsxs)(r.TableRow,{children:[Object(u.jsx)(r.TableCell,{children:Object(u.jsxs)("div",{className:"flex items-center",children:[Object(u.jsx)(r.Avatar,{className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none",src:e.images[0],alt:e.name}),Object(u.jsx)("div",{children:Object(u.jsx)("h2",{className:"text-sm font-medium",children:e.name})})]})}),Object(u.jsx)(r.TableCell,{children:Object(u.jsx)("div",{className:"flex flex-row",children:e.interest.map((e=>Object(u.jsx)("span",{className:"bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center  px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300",children:e.name})))})}),Object(u.jsxs)(r.TableCell,{children:[Object(u.jsxs)("span",{className:"text-sm",children:["$",e.price]})," "]}),Object(u.jsxs)(r.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm",children:e.quantity})," "]}),Object(u.jsx)(r.TableCell,{children:e.quantity>0?Object(u.jsx)(r.Badge,{type:"success",children:"Selling"}):Object(u.jsx)(r.Badge,{type:"danger",children:"Sold Out"})}),Object(u.jsxs)(r.TableCell,{children:[Object(u.jsx)("span",{className:"text-sm",children:e.discountedPrice})," "]}),Object(u.jsx)(r.TableCell,{children:Object(u.jsx)(c.b,{to:`/product/${e._id}`,className:"flex justify-center text-center text-gray-400 hover:text-green-600",children:Object(u.jsx)(d.a,{id:"details",Icon:n.q,title:"Details",bgColor:"#10B981"})})}),Object(u.jsx)(r.TableCell,{children:Object(u.jsx)(b.a,{id:e._id,status:e.available})}),Object(u.jsx)(r.TableCell,{children:Object(u.jsx)(b.a,{id:e._id,status:e.feature,customValue:!e.feature,customeKey:"feature"})}),Object(u.jsx)(r.TableCell,{children:Object(u.jsx)(x.a,{id:e._id,title:e.name,handleUpdate:O,handleModalOpen:s})})]},t+1)))})]})};t.a=s.a.memo(O)},197:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a(16),c=(a(125),a(50)),r=a(57),n=a(67),d=a(51),i=a(56),j=a(45),o=a(17),b=a(104),x=a(54),h=a(77),u=a(11),O=a(1);t.default=()=>{const{state:e,dispatch:t}=Object(l.useContext)(u.a),{adminInfo:a}=e,{toggleDrawer:g,currentPage:m,handleChangePage:p,searchText:f,category:C,setCategory:y,searchRef:T,handleSubmitForAll:v,sortedField:w,setSortedField:N,limitData:P}=Object(l.useContext)(o.a),{data:k,loading:S}=Object(c.a)((()=>i.a.getAllProducts({page:m,limit:P,category:C,title:f,price:w,userid:"admin"==a.role?"":a._id}))),{serviceData:D}=Object(r.a)(k.products);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{children:"Products"}),Object(O.jsx)(x.a,{children:Object(O.jsx)(h.a,{})}),Object(O.jsx)(s.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:Object(O.jsx)(s.CardBody,{children:Object(O.jsxs)("form",{onSubmit:v,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[Object(O.jsxs)("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[Object(O.jsx)(s.Input,{ref:T,className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",type:"search",name:"search",placeholder:"Search by product name"}),Object(O.jsx)("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-1"})]}),Object(O.jsx)("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:Object(O.jsxs)(s.Select,{onChange:e=>N(e.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",children:[Object(O.jsx)("option",{value:"All",defaultValue:!0,hidden:!0,children:"Price"}),Object(O.jsx)("option",{value:"Low",children:"Low to High"}),Object(O.jsx)("option",{value:"High",children:"High to Low"})]})})]})})}),S?Object(O.jsx)(d.a,{loading:S}):0!==(null===D||void 0===D?void 0:D.length)?Object(O.jsxs)(s.TableContainer,{className:"mb-8 rounded-b-lg",children:[Object(O.jsxs)(s.Table,{children:[Object(O.jsx)(s.TableHeader,{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(s.TableCell,{children:"Product name"}),Object(O.jsx)(s.TableCell,{children:"Category"}),Object(O.jsx)(s.TableCell,{children:"Price"}),Object(O.jsx)(s.TableCell,{children:"Stock"}),Object(O.jsx)(s.TableCell,{children:"Status"}),Object(O.jsx)(s.TableCell,{children:"Discount"}),Object(O.jsx)(s.TableCell,{children:"Details"}),Object(O.jsx)(s.TableCell,{className:"text-center",children:"Published"}),Object(O.jsx)(s.TableCell,{className:"text-center",children:"Featured"}),Object(O.jsx)(s.TableCell,{className:"text-right",children:"Actions"})]})}),Object(O.jsx)(b.a,{products:k.products})]}),Object(O.jsx)(s.TableFooter,{children:Object(O.jsx)(s.Pagination,{totalResults:null===k||void 0===k?void 0:k.totalDoc,resultsPerPage:15,onChange:p,label:"Product Page Navigation"})})]}):Object(O.jsx)(n.a,{title:"Product"})]})}},63:function(e,t,a){"use strict";var l=a(0),s=a(2),c=a(86),r=a(18),n=a(56),d=a(17),i=a(65),j=a(46),o=a(1);t.a=e=>{let{id:t,status:a,customValue:b="",customeKey:x=""}=e;const h=Object(s.h)(),{setIsUpdate:u}=Object(l.useContext)(d.a);return Object(o.jsx)("span",{className:"cursor-pointer text-xl flex justify-center text-center",onClick:()=>((e,t)=>{console.log(t),Object(r.c)("please wait..."),"/users"===h.pathname&&i.a.updateUserById(e,{accountDisabled:t}).then((e=>{u(!0),Object(r.c)("status updated")})).catch((e=>Object(r.b)(e.message))),"/products"===h.pathname&&(console.log(x),(x="feature")?n.a.updateProduct(e,{[x]:b}).then((e=>{console.log(e),u(!0),Object(r.c)("status updated")})).catch((e=>Object(r.b)(e.message))):n.a.updateProduct(e,{available:!t}).then((e=>{console.log(e),u(!0),Object(r.c)("status updated")})).catch((e=>Object(r.b)(e.message)))),"/shops"===h.pathname&&j.a.updateShop(e,{open:!t}).then((e=>{console.log(e),u(!0),Object(r.c)("status updated")})).catch((e=>Object(r.b)(e.message)))})(t,a),children:1==a?Object(o.jsx)(c.b,{className:"text-green-500"}):Object(o.jsx)(c.a,{className:"text-orange-500"})})}}}]);
//# sourceMappingURL=22.5bfa9b41.chunk.js.map