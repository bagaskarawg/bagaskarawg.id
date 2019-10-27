(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{12:function(t,e,s){"use strict";s.r(e);var a={methods:{handleScroll:function(t){var e=document.getElementById("navbar");window.scrollY>=1?e.classList.add("shadow-lg"):e.classList.remove("shadow-lg")}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},data:function(){return{isOpen:!1}}},i=s(0),l=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"fixed bg-red-700 w-full z-20",attrs:{id:"navbar"}},[s("div",{staticClass:"w-full sm:p-5 sm:h-16 sm:flex sm:justify-between sm:items-center"},[s("div",{staticClass:"w-full sm:w-auto flex items-center justify-between px-4 py-3 sm:p-0"},[s("inertia-link",{staticClass:"text-white",attrs:{href:t.route("home")}},[s("strong",[t._v("Bagaskara Wisnu Gunawan")])]),t._v(" "),s("div",{staticClass:"sm:hidden"},[s("button",{staticClass:"block text-white focus:outline-none",attrs:{type:"button"},on:{click:function(e){t.isOpen=!t.isOpen}}},[s("svg",{staticClass:"h-6 w-6 fill-current",attrs:{viewBox:"0 0 24 24"}},[t.isOpen?s("path",{attrs:{"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}}):t._e(),t._v(" "),t.isOpen?t._e():s("path",{attrs:{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}})])])])],1),t._v(" "),s("nav",{staticClass:"w-full sm:w-auto bg-red-700 sm:bg-transparent font-semibold text-white px-2 pt-2 pb-4 sm:flex sm:p-0",class:t.isOpen?"block":"hidden"},[s("a",{staticClass:"block px-2 py-1 hover:underline",attrs:{href:t.route("blog.index")}},[t._v("Blog")]),t._v(" "),s("a",{staticClass:"block px-2 py-1 hover:underline sm:mt-0 sm:ml-2",attrs:{href:"#skills"}},[t._v("Skills")]),t._v(" "),s("a",{staticClass:"block px-2 py-1 hover:underline sm:mt-0 sm:ml-2",attrs:{href:"#work experiences"}},[t._v("Work Experiences")]),t._v(" "),s("a",{staticClass:"block px-2 py-1 hover:underline sm:mt-0 sm:ml-2",attrs:{href:"#showcases"}},[t._v("Showcases")]),t._v(" "),s("a",{staticClass:"block px-2 py-1 hover:underline sm:mt-0 sm:ml-2",attrs:{href:"#contact"}},[t._v("Contact")])])])])}),[],!1,null,null,null).exports,n={},r=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-red-700 text-center text-white text-base p-5"},[this._v("\n  Copyright © "+this._s((new Date).getFullYear())+" - "),e("span",{staticClass:"font-bold"},[this._v("Bagaskara Wisnu Gunawan")]),this._v(". All rights reserved.\n")])}),[],!1,null,null,null).exports,o={},c={components:{Navbar:l,FooterBar:r,Jumbotron:Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"bg-red-700 pt-16 flex justify-center items-center",staticStyle:{"min-height":"25rem"}},[s("div",{staticClass:"w-full sm:w-4/6 md:w-3/6 lg:w-3/6 xl:w-3/6 p-5 text-center text-white z-10"},[s("img",{staticClass:"rounded-full mx-auto",attrs:{src:"https://secure.gravatar.com/avatar/3bfa4c41912fe733d8244f0d2146b18a?s=200"}}),t._v("\n      Hello, I'm "),s("h2",{staticClass:"font-semibold text-2xl mb-2 text-white"},[t._v("Bagaskara Wisnu Gunawan")]),t._v("\n      a full-stack web developer with more than 4 years of experience developing web applications using "),s("strong",[t._v("Laravel")]),t._v(", "),s("strong",[t._v("Ruby on Rails 3")]),t._v(", and "),s("strong",[t._v("Vue.js")]),t._v(".\n      "),s("inertia-link",{staticClass:"block max-w-full w-64 mx-auto mt-4 p-4 border border-red text-white hover:bg-white hover:text-red-700 hover:font-semibold",attrs:{href:"https://bagaskarawg.id/blog/who-am-i",id:"about-me"}},[t._v("More about me")])],1)])])}),[],!1,null,null,null).exports},props:{title:String},watch:{title:{immediate:!0,handler:function(t){document.title=t?"".concat(t," - ").concat(this.$page.app.name):this.$page.app.name}}}},d=Object(i.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("navbar"),this._v(" "),e("jumbotron"),this._v(" "),e("div",{staticClass:"p-t-2"},[this._t("default")],2),this._v(" "),e("footer-bar")],1)}),[],!1,null,null,null).exports,p={data:function(){return{containerClass:"",headingClass:""}},props:{title:String,face:String},mounted:function(){switch(this.face){case"secondary":this.containerClass="bg-red-700 text-white",this.headingClass="text-white";break;default:this.headingClass="text-red-700"}}},m=Object(i.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-h-0 w-full p-5",class:t.containerClass},[s("h2",{staticClass:"text-2xl font-semibold mb-3",class:t.headingClass,attrs:{id:t.title.toLowerCase()}},[t._v(t._s(t.title))]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null).exports,h={mounted:function(){switch(this.size){case"sm":this.width=this.height="24px";break;case"md":this.width=this.height="32px";break;case"lg":this.width=this.height="48px";break;case"xl":this.width=this.height="64px";break;case"2xl":this.width=this.height="72px";break;default:this.width=this.height="16px"}},data:function(){return{height:"16px",width:"16px"}},props:{name:{type:String,required:!0},size:{type:String,default:"lg"}}},u=Object(i.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return"laravel"==t.name.toLowerCase()?s("svg",{attrs:{width:t.width,height:t.height,version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 1248",preserveAspectRatio:"xMidYMid meet"}},[s("title",[t._v("Laravel")]),t._v(" "),s("metadata",[t._v("Created by potrace 1.15, written by Peter Selinger 2001-2017")]),t._v(" "),s("g",{attrs:{transform:"translate(0.000000,1248.000000) scale(0.100000,-0.100000)",fill:"#c53030",stroke:"none"}},[s("path",{attrs:{d:"M1260 11805 c-646 -373 -1188 -689 -1204 -704 -16 -14 -35 -40 -42 -58 -21 -48 -21 -8018 0 -8066 7 -18 26 -44 42 -58 16 -15 1075 -629 2354 -1365 l2325 -1339 70 0 70 0 2325 1338 c1279 736 2338 1351 2354 1365 65 61 60 -33 66 1381 l5 1284 1099 633 c605 348 1113 643 1129 654 16 12 37 41 48 63 18 40 19 91 19 1403 0 1478 3 1398 -54 1456 -15 14 -556 331 -1204 704 l-1177 678 -65 1 -65 0 -1145 -659 c-630 -362 -1167 -672 -1193 -688 -29 -19 -58 -49 -75 -77 l-27 -46 -3 -1286 -2 -1285 -950 -547 c-523 -301 -952 -547 -955 -547 -3 0 -5 1118 -5 2485 0 2462 0 2486 -20 2525 -11 21 -34 50 -52 63 -18 14 -555 325 -1193 693 l-1160 668 -70 4 -70 3 -1175 -676z m2193 -295 c521 -300 947 -547 947 -550 0 -3 -428 -251 -951 -552 l-951 -547 -949 547 c-522 300 -949 549 -949 552 0 7 1893 1099 1901 1097 3 -1 431 -247 952 -547z m6858 -1271 c481 -276 906 -521 945 -544 l71 -40 -945 -544 c-520 -300 -953 -545 -962 -545 -9 -1 -442 244 -963 544 l-947 544 57 33 c32 18 459 264 948 547 490 283 897 513 906 512 9 -2 410 -230 890 -507z m-5708 -4430 c-5 -4 -420 -245 -923 -534 -503 -290 -930 -536 -948 -547 l-32 -20 2 2407 3 2407 950 546 950 547 3 -2399 c1 -1320 -1 -2403 -5 -2407z m-3633 4474 c305 -176 729 -420 943 -542 l387 -223 0 -2587 c0 -1774 3 -2598 11 -2624 5 -21 23 -52 39 -70 19 -21 404 -244 1144 -662 l1115 -630 1 -1098 c0 -604 -4 -1097 -8 -1095 -5 2 -955 548 -2110 1213 l-2102 1210 0 3719 c0 2970 3 3717 13 3713 6 -2 262 -148 567 -324z m7290 -1518 c514 -296 941 -543 948 -549 9 -9 12 -236 10 -1094 l-3 -1082 -952 547 -953 548 0 1088 c0 599 3 1086 8 1084 4 -3 428 -247 942 -542z m3258 -1631 c-7 -6 -434 -253 -948 -549 -514 -296 -938 -539 -942 -542 -5 -2 -8 485 -8 1084 l0 1088 953 548 952 547 3 -1082 c2 -858 -1 -1085 -10 -1094z m-3441 -897 l941 -542 -26 -16 c-106 -66 -4187 -2389 -4192 -2387 -23 9 -1898 1074 -1895 1076 2 2 948 548 2102 1212 1199 692 2104 1207 2113 1204 8 -3 439 -249 957 -547z m1143 -1975 l0 -1087 -2101 -1210 c-1156 -666 -2105 -1211 -2110 -1213 -5 -2 -9 463 -9 1095 l1 1098 2107 1202 c1159 661 2108 1202 2110 1203 1 0 2 -489 2 -1088z"}})])],1):"vue"==t.name.toLowerCase()?s("svg",{attrs:{width:t.width,height:t.height,version:"1.1",viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg"}},[s("title",[t._v("Vue.js")]),t._v(" "),s("g",{attrs:{transform:"matrix(1.3333 0 0 -1.3333 -76.311 313.34)"}},[s("g",{attrs:{transform:"translate(178.06 235.01)"}},[s("path",{attrs:{d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z",fill:"#41b883"}})]),t._v(" "),s("g",{attrs:{transform:"translate(178.06 235.01)"}},[s("path",{attrs:{d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z",fill:"#34495e"}})])])]):"tailwind"==t.name.toLowerCase()?s("svg",{attrs:{width:t.width,height:t.height,viewBox:"0 0 256 154",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid"}},[s("title",[t._v("TailwindCSS")]),t._v(" "),s("defs",[s("linearGradient",{attrs:{x1:"-2.77777778%",y1:"32%",x2:"100%",y2:"67.5555556%",id:"linearGradient-1"}},[s("stop",{attrs:{"stop-color":"#2298BD",offset:"0%"}}),t._v(" "),s("stop",{attrs:{"stop-color":"#0ED7B5",offset:"100%"}})],1)],1),t._v(" "),s("g",[s("path",{attrs:{d:"M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z",fill:"url(#linearGradient-1)"}})])]):"html5"==t.name.toLowerCase()?s("svg",{attrs:{width:t.width,height:t.height,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[s("title",[t._v("HTML5")]),t._v(" "),s("path",{attrs:{d:"M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6"}}),t._v(" "),s("path",{attrs:{fill:"#e44d26",d:"M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"}}),t._v(" "),s("path",{attrs:{fill:"#f16529",d:"M256 480.5V131H404.3L376 447"}}),t._v(" "),s("path",{attrs:{fill:"#ebebeb",d:"M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"}}),t._v(" "),s("path",{attrs:{fill:"#fff",d:"M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"}})]):"css3"==t.name.toLowerCase()?s("svg",{attrs:{width:t.width,height:t.height,"xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape",viewBox:"0 0 362.73401 511.99998",id:"svg3476",version:"1.1","inkscape:version":"0.91 r13725","sodipodi:docname":"CSS3.svg"}},[s("title",[t._v("CSS3")]),t._v(" "),s("defs",{attrs:{id:"defs3478"}}),t._v(" "),s("sodipodi:namedview",{attrs:{id:"base",pagecolor:"#ffffff",bordercolor:"#666666",borderopacity:"1.0","inkscape:pageopacity":"0.0","inkscape:pageshadow":"2","inkscape:zoom":"0.35","inkscape:cx":"181.367","inkscape:cy":"256","inkscape:document-units":"px","inkscape:current-layer":"layer1",showgrid:"false","fit-margin-top":"0","fit-margin-left":"0","fit-margin-right":"0","fit-margin-bottom":"0","inkscape:window-width":"1366","inkscape:window-height":"704","inkscape:window-x":"0","inkscape:window-y":"27","inkscape:window-maximized":"1"}}),t._v(" "),s("metadata",{attrs:{id:"metadata3481"}},[s("rdf:RDF",[s("cc:Work",{attrs:{"rdf:about":""}},[s("dc:format",[t._v("image/svg+xml")]),t._v(" "),s("dc:type",{attrs:{"rdf:resource":"http://purl.org/dc/dcmitype/StillImage"}}),t._v(" "),s("dc:title")],1)],1)],1),t._v(" "),s("g",{attrs:{"inkscape:label":"Calque 1","inkscape:groupmode":"layer",id:"layer1",transform:"translate(-193.633,-276.3622)"}},[s("g",{attrs:{id:"g3013",transform:"translate(119,276.3622)"}},[s("polygon",{staticStyle:{fill:"#264de4"},attrs:{id:"polygon2989",points:"437.367,100.62 404.321,470.819 255.778,512 107.644,470.877 74.633,100.62 "}}),t._v(" "),s("polygon",{staticStyle:{fill:"#2965f1"},attrs:{id:"polygon2991",points:"376.03,447.246 404.27,130.894 256,130.894 256,480.523 "}}),t._v(" "),s("polygon",{staticStyle:{fill:"#ebebeb"},attrs:{id:"polygon2993",points:"150.31,268.217 154.38,313.627 256,313.627 256,268.217 "}}),t._v(" "),s("polygon",{staticStyle:{fill:"#ebebeb"},attrs:{id:"polygon2995",points:"256,176.305 255.843,176.305 142.132,176.305 146.26,221.716 256,221.716 "}}),t._v(" "),s("polygon",{staticStyle:{fill:"#ebebeb"},attrs:{id:"polygon2997",points:"256,433.399 256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457 "}}),t._v(" "),s("path",{attrs:{id:"path2999",d:"m 160,0 55,0 0,23 -32,0 0,23 32,0 0,23 -55,0 z","inkscape:connector-curvature":"0"}}),t._v(" "),s("path",{attrs:{id:"path3001",d:"m 226,0 55,0 0,20 -32,0 0,4 32,0 0,46 -55,0 0,-21 32,0 0,-4 -32,0 z","inkscape:connector-curvature":"0"}}),t._v(" "),s("path",{attrs:{id:"path3003",d:"m 292,0 55,0 0,20 -32,0 0,4 32,0 0,46 -55,0 0,-21 32,0 0,-4 -32,0 z","inkscape:connector-curvature":"0"}}),t._v(" "),s("polygon",{staticStyle:{fill:"#ffffff"},attrs:{id:"polygon3005",points:"311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 369.597,176.305 255.843,176.305 255.843,221.716 319.831,221.716 315.699,268.217 255.843,268.217 255.843,313.627 "}})])])],1):"mysql"==t.name.toLowerCase()?s("svg",{attrs:{width:t.width,height:t.height,xmlns:"http://www.w3.org/2000/svg",viewBox:"-18.458 6.58 191.151 132.49"}},[s("title",[t._v("MySQL")]),t._v(" "),s("path",{attrs:{d:"M-18.458 6.58h191.151v132.49H-18.458V6.58z",fill:"none"}}),t._v(" "),s("path",{attrs:{d:"M40.054 113.583h-5.175c-.183-8.735-.687-16.947-1.511-24.642h-.046l-7.879 24.642h-3.94l-7.832-24.642h-.045c-.581 7.388-.947 15.602-1.099 24.642H7.81c.304-10.993 1.068-21.299 2.289-30.919h6.414l7.465 22.719h.046l7.511-22.719h6.137c1.344 11.268 2.138 21.575 2.382 30.919M62.497 90.771c-2.107 11.434-4.887 19.742-8.337 24.928-2.688 3.992-5.633 5.99-8.84 5.99-.855 0-1.91-.258-3.16-.77v-2.757c.611.088 1.328.138 2.152.138 1.498 0 2.702-.412 3.62-1.238 1.098-1.006 1.647-2.137 1.647-3.388 0-.858-.428-2.612-1.282-5.268L42.618 90.77h5.084l4.076 13.19c.916 2.995 1.298 5.086 1.145 6.277 2.229-5.953 3.786-12.444 4.673-19.468h4.901v.002z",fill:"#5d87a1"}}),t._v(" "),s("path",{attrs:{d:"M131.382 113.583h-14.7V82.664h4.945v27.113h9.755v3.806zM112.834 114.33l-5.684-2.805c.504-.414.986-.862 1.42-1.381 2.416-2.838 3.621-7.035 3.621-12.594 0-10.229-4.014-15.346-12.045-15.346-3.938 0-7.01 1.298-9.207 3.895-2.414 2.84-3.619 7.022-3.619 12.551 0 5.435 1.068 9.422 3.205 11.951 1.955 2.291 4.902 3.438 8.843 3.438 1.47 0 2.819-.18 4.048-.543l7.4 4.308 2.018-3.474zm-18.413-6.934c-1.252-2.014-1.878-5.248-1.878-9.707 0-7.785 2.365-11.682 7.1-11.682 2.475 0 4.289.932 5.449 2.792 1.25 2.017 1.879 5.222 1.879 9.619 0 7.849-2.367 11.774-7.099 11.774-2.476.001-4.29-.928-5.451-2.796M85.165 105.013c0 2.622-.962 4.773-2.884 6.458-1.924 1.678-4.504 2.519-7.737 2.519-3.024 0-5.956-.966-8.794-2.888l1.329-2.655c2.442 1.223 4.653 1.831 6.638 1.831 1.863 0 3.319-.413 4.375-1.232 1.055-.822 1.684-1.975 1.684-3.433 0-1.837-1.281-3.407-3.631-4.722-2.167-1.19-6.501-3.678-6.501-3.678-2.349-1.712-3.525-3.55-3.525-6.578 0-2.506.877-4.529 2.632-6.068 1.757-1.545 4.024-2.315 6.803-2.315 2.87 0 5.479.769 7.829 2.291l-1.192 2.656c-2.01-.854-3.994-1.281-5.951-1.281-1.585 0-2.809.381-3.66 1.146-.858.762-1.387 1.737-1.387 2.933 0 1.828 1.308 3.418 3.722 4.759 2.196 1.192 6.638 3.723 6.638 3.723 2.409 1.709 3.612 3.53 3.612 6.534",fill:"#f8981d"}}),t._v(" "),s("path",{attrs:{d:"M137.59 72.308c-2.99-.076-5.305.225-7.248 1.047-.561.224-1.453.224-1.531.933.303.3.338.784.601 1.198.448.747 1.229 1.752 1.942 2.276.783.6 1.569 1.194 2.393 1.717 1.453.899 3.1 1.422 4.516 2.318.825.521 1.645 1.195 2.471 1.756.406.299.666.784 1.193.971v-.114c-.264-.336-.339-.822-.598-1.196l-1.122-1.082c-1.084-1.456-2.431-2.727-3.884-3.771-1.196-.824-3.812-1.944-4.297-3.322l-.076-.076c.822-.077 1.797-.375 2.578-.604 1.271-.335 2.43-.259 3.734-.594.6-.15 1.195-.338 1.797-.523v-.337c-.676-.673-1.158-1.567-1.869-2.203-1.902-1.643-3.998-3.25-6.164-4.595-1.16-.749-2.652-1.231-3.887-1.868-.445-.225-1.195-.336-1.457-.71-.67-.822-1.047-1.904-1.533-2.877-1.08-2.053-2.129-4.331-3.061-6.502-.674-1.456-1.084-2.91-1.906-4.257-3.85-6.35-8.031-10.196-14.457-13.971-1.381-.786-3.024-1.121-4.779-1.533l-2.803-.148c-.598-.262-1.197-.973-1.719-1.309-2.132-1.344-7.621-4.257-9.189-.411-1.01 2.431 1.494 4.821 2.354 6.054.635.856 1.458 1.83 1.902 2.802.263.635.337 1.309.6 1.98.598 1.644 1.157 3.473 1.943 5.007.41.782.857 1.604 1.381 2.312.3.414.822.597.936 1.272-.521.744-.562 1.867-.861 2.801-1.344 4.221-.819 9.45 1.086 12.552.596.934 2.018 2.99 3.92 2.202 1.684-.672 1.311-2.801 1.795-4.668.111-.451.038-.747.262-1.043v.073c.521 1.045 1.047 2.052 1.53 3.1 1.159 1.829 3.177 3.735 4.858 5.002.895.676 1.604 1.832 2.725 2.245V74.1h-.074c-.227-.335-.559-.485-.857-.745-.674-.673-1.42-1.495-1.943-2.241-1.566-2.093-2.952-4.41-4.182-6.801-.602-1.16-1.121-2.428-1.606-3.586-.226-.447-.226-1.121-.601-1.346-.562.821-1.381 1.532-1.791 2.538-.711 1.609-.785 3.588-1.049 5.646l-.147.072c-1.19-.299-1.604-1.53-2.056-2.575-1.119-2.654-1.307-6.914-.336-9.976.26-.783 1.385-3.249.936-3.995-.225-.715-.973-1.122-1.383-1.685-.482-.708-1.01-1.604-1.346-2.39-.896-2.091-1.347-4.408-2.312-6.498-.451-.974-1.234-1.982-1.868-2.879-.712-1.008-1.495-1.718-2.058-2.913-.186-.411-.447-1.083-.148-1.53.073-.3.225-.412.523-.487.484-.409 1.867.111 2.352.336 1.385.56 2.543 1.083 3.699 1.867.523.375 1.084 1.085 1.755 1.272h.786c1.193.26 2.538.072 3.661.41 1.979.636 3.772 1.569 5.38 2.576 4.893 3.103 8.928 7.512 11.652 12.778.447.858.637 1.644 1.045 2.539.787 1.832 1.76 3.7 2.541 5.493.785 1.755 1.533 3.547 2.654 5.005.559.784 2.805 1.195 3.812 1.606.745.335 1.905.633 2.577 1.044 1.271.783 2.537 1.682 3.732 2.543.595.448 2.465 1.382 2.576 2.13M99.484 39.844a5.82 5.82 0 0 0-1.529.188v.075h.072c.301.597.824 1.011 1.197 1.532.301.599.562 1.193.857 1.791l.072-.074c.527-.373.789-.971.789-1.868-.227-.264-.262-.522-.451-.784-.22-.374-.705-.56-1.007-.86",fill:"#5d87a1"}}),s("path",{attrs:{d:"M141.148 113.578h.774v-3.788h-1.161l-.947 2.585-1.029-2.585h-1.118v3.788h.731v-2.882h.041l1.078 2.882h.557l1.074-2.882v2.882zm-6.235 0h.819v-3.146h1.072v-.643h-3.008v.643h1.115l.002 3.146z",fill:"#f8981d"}})]):s("img",{staticClass:"inline -mt-1",attrs:{src:"/icons/"+t.name.toLowerCase()+".svg",width:t.width,height:t.height,alt:t.name}})}),[],!1,null,null,null).exports,g={props:{img:String,href:String,title:String,imgClass:String,bodyClass:String,footerClass:String}},v=Object(i.a)(g,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full rounded overflow-hidden shadow mb-2 bg-white"},[t.href?s("a",{attrs:{href:t.href,target:"_blank"}},[s("img",{staticClass:"w-full",class:t.imgClass,attrs:{src:t.img,alt:t.title}})]):s("img",{staticClass:"w-full",class:t.imgClass,attrs:{src:t.img,alt:t.title}}),t._v(" "),s("div",{staticClass:"px-6 py-4",class:t.bodyClass},[s("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(t.title))]),t._v(" "),t._t("body")],2),t._v(" "),s("div",{staticClass:"px-6 py-4",class:t.footerClass},[t._t("footer")],2)])}),[],!1,null,null,null).exports,f=s(7),w=s.n(f),x=s(3),b=s(9),_=s.n(b),y=s(10),C=(s(25),s(5));function k(t,e,s,a,i,l,n){try{var r=t[l](n),o=r.value}catch(t){return void s(t)}r.done?e(o):Promise.resolve(o).then(a,i)}x.a.use(y.a,{timer:2e3,toast:!0,type:"success",position:"top-end",showConfirmButton:!1});var S,M,z={components:{Block:m,MglMap:C.a,MglMarker:C.b,MglPopup:C.c},data:function(){return{form:{fullname:"",email:"",message:""},accessToken:"pk.eyJ1IjoiYmFnYXNrYXJhNyIsImEiOiJjazI4OXQ0YmoxdjQ4M25tcTloNGhoeGRiIn0.UrvYIG92SEBaHXyePB7cVg",mapStyle:"mapbox://styles/mapbox/light-v9",coordinates:[107.159623,-6.829165]}},methods:{onMapLoad:(S=w.a.mark((function t(e){var s;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.component.actions,t.next=3,s.flyTo({center:this.coordinates,zoom:11,speed:1});case 3:t.sent,this.$refs.marker.togglePopup();case 5:case"end":return t.stop()}}),t,this)})),M=function(){var t=this,e=arguments;return new Promise((function(s,a){var i=S.apply(t,e);function l(t){k(i,s,a,l,n,"next",t)}function n(t){k(i,s,a,l,n,"throw",t)}l(void 0)}))},function(t){return M.apply(this,arguments)}),submit:function(){var t=this;this.$inertia.post(this.route("contacts.store"),this.form).then((function(){x.a.swal("Your message has been received!"),t.form={fullname:"",email:"",message:""}}))}},created:function(){this.mapbox=_.a}},j={components:{Layout:d,Block:m,Icon:u,Card:v,Contact:Object(i.a)(z,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("block",{attrs:{title:"Contact"}},[s("div",{staticClass:"xs:flex"},[s("div",{staticClass:"w-full xs:w-1/2 pr-5"},[s("mgl-map",{attrs:{accessToken:t.accessToken,mapStyle:t.mapStyle},on:{load:t.onMapLoad}},[s("mgl-marker",{ref:"marker",attrs:{coordinates:t.coordinates,color:"blue"}},[s("mgl-popup",{attrs:{anchor:"top"}},[s("p",[t._v("Perumahan Muslim Tasnim Leles No. 39")]),t._v(" "),s("p",[t._v("Sukamanah, Karangtengah, Cianjur")]),t._v(" "),s("p",[t._v("Jawa Barat, Indonesia, 43281")])])],1)],1)],1),t._v(" "),s("form",{staticClass:"w-full xs:w-1/2",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[s("div",{staticClass:"w-full sm:w-1/2 px-3 mb-6 sm:mb-0"},[s("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-full-name"}},[t._v("\n            Full Name\n          ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.fullname,expression:"form.fullname"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{id:"grid-full-name",type:"text",placeholder:"Jane Doe"},domProps:{value:t.form.fullname},on:{input:function(e){e.target.composing||t.$set(t.form,"fullname",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"w-full sm:w-1/2 px-3"},[s("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-email"}},[t._v("\n            Email\n          ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-email",type:"email",placeholder:"jane.doe@bagaskarawg.id"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[s("div",{staticClass:"w-full px-3"},[s("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-message"}},[t._v("\n            Message\n          ")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{rows:"5",id:"grid-message",placeholder:"Your message here ..."},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})])]),t._v(" "),s("button",{staticClass:"shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",attrs:{type:"submit"}},[t._v("\n        Send\n      ")])])])])}),[],!1,null,null,null).exports,Footer:r},data:function(){return{jobs:[{id:4,img:"/img/yuca.jpg",website:"https://yuca.co",company:"Yuca Ltd.",date:"Oct 2018 - Present",position:"Full Stack Web Developer",imgClass:"px-16 py-5 xs:py-2 sm:p-8"},{id:3,img:"/img/turboly.png",website:"https://turboly.com",company:"PT Turboly Teknologi Indonesia",date:"Oct 2016 - Sep 2018",position:"Full Stack Web Developer",imgClass:"sm:py-8"},{id:2,img:"/img/link-integrasi.png",website:"https://linkintegrasi.com",company:"PT Lintas Karya Indonesia",date:"Jan 2016 - Sep 2016",position:"Full Stack Web Developer",imgClass:"px-16 py-5 xs:px-8 xs:py-2 sm:p-6 smd:py-3"},{id:1,img:"/img/jerbee.png",website:"https://jerbee.co.id",company:"PT Jerbee Indonesia",date:"May 2015 - Dec 2015",position:"Full Stack Web Developer",imgClass:"px-16 py-5 xs:px-8 xs:py-10 sm:px-2 py-10"}],showcases:[{id:5,img:"/img/portfolio/mtp.png",website:"https://mtp.bagaskarawg.id",title:"Point of Sale",client:"Mitra Tani Parahyangan",date:"January 2019",imgClass:"h-32"},{id:4,img:"/img/portfolio/idndentist.png",website:"https://idndentist.com",title:"Dentist Marketplace",client:"IDN Dentist",date:"August 2018",imgClass:"h-32"},{id:3,img:"/img/portfolio/bni-eswat.png",title:"BNI e-SWAT",client:"Bank Negara Indonesia",date:"August 2017",imgClass:"h-32"},{id:2,img:"/img/portfolio/lucky-property.png",website:"https://luckyproperty123.com",title:"Guest House Management",client:"Lucky Property",date:"August 2016",imgClass:"h-32"},{id:1,img:"/img/portfolio/alumni.png",website:"https://alumni.smkn1cianjur.sch.id",title:"Social Network",client:"Alumni SMKN 1 Cianjur",date:"May 2016",imgClass:"h-32"}]}}},L=Object(i.a)(j,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",[s("div",{staticClass:"w-full bg-white"},[s("block",{attrs:{title:"Skills"}},[s("div",{staticClass:"flex"},[s("icon",{attrs:{name:"laravel",size:"2xl"}}),t._v(" "),s("icon",{attrs:{name:"vue",size:"2xl"}}),t._v(" "),s("icon",{attrs:{name:"tailwind",size:"2xl"}}),t._v(" "),s("icon",{attrs:{name:"html5",size:"2xl"}}),t._v(" "),s("icon",{attrs:{name:"css3",size:"2xl"}}),t._v(" "),s("icon",{attrs:{name:"mysql",size:"2xl"}})],1)]),t._v(" "),s("block",{attrs:{title:"Work Experiences"}},[s("div",{staticClass:"xs:flex xs:flex-wrap"},t._l(t.jobs,(function(e){return s("card",{key:e.id,staticClass:"xs:w-1/2 xs:mr-2 sm:w-1/4",class:e.id%2==0?"xs:flex-none":"xs:flex-1",attrs:{img:e.img,href:e.website,title:e.company,"img-class":e.imgClass},scopedSlots:t._u([{key:"body",fn:function(){return[s("p",{staticClass:"text-gray-700 text-base"}),s("p",[s("icon",{attrs:{name:"calendar",size:"xs"}}),t._v(" "+t._s(e.date))],1),t._v(" "),s("p",[s("icon",{attrs:{name:"travel",size:"xs"}}),t._v(" "+t._s(e.position))],1),t._v(" "),s("p")]},proxy:!0}],null,!0)})})),1)]),t._v(" "),s("block",{attrs:{title:"Showcases",face:"secondary"}},[s("div",{staticClass:"xs:flex xs:flex-no-wrap text-gray-700"},t._l(t.showcases,(function(e){return s("card",{key:e.id,staticClass:"w-full xs:w-1/2 xs:mr-2 sm:w-1/4",attrs:{img:e.img,href:e.website,title:e.title,"img-class":e.imgClass},scopedSlots:t._u([{key:"body",fn:function(){return[s("p",{staticClass:"text-gray-700 text-base"}),s("p",[s("icon",{attrs:{name:"calendar",size:"xs"}}),t._v(" "+t._s(e.date))],1),t._v(" "),s("p",[s("icon",{attrs:{name:"bolt",size:"xs"}}),t._v(" "+t._s(e.client))],1),t._v(" "),s("p")]},proxy:!0}],null,!0)})})),1)]),t._v(" "),s("contact"),t._v(" "),s("footer")],1)])}),[],!1,null,null,null);e.default=L.exports}}]);