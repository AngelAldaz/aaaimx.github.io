webpackJsonp([1],{"8kJG":function(t,a){},J6S4:function(t,a){},KE0h:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={props:{classes:String}},o={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{class:t.classes},[s("li",[s("router-link",{attrs:{to:"/",tag:"a"}},[t._v("Home")])],1),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:"Home"==t.$route.name,expression:"$route.name == 'Home'"}]},[s("a",{attrs:{href:"#about-us"}},[t._v("About")])]),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:"Home"==t.$route.name,expression:"$route.name == 'Home'"}]},[s("a",{attrs:{href:"#sponsors"}},[t._v("Sponsors")])]),t._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:"Home"==t.$route.name,expression:"$route.name == 'Home'"}]},[s("a",{attrs:{href:"#team"}},[t._v("Team")])]),t._v(" "),s("li",[s("router-link",{attrs:{to:"/contact",tag:"a"}},[t._v("Contact")])],1)])},staticRenderFns:[]},r=s("VU/8")(i,o,!1,null,null,null).exports,c={data:function(){return{isActive:!1}},components:{NavApp:r},methods:{myFilter:function(){var t=document.getElementById("header");this.isActive?t.classList.remove("nav-collapse"):t.classList.add("nav-collapse"),this.isActive=!this.isActive}}},n={render:function(){var t=this.$createElement,a=this._self._c||t;return a("header",{class:{"transparent-nav":"Home"==this.$route.name},attrs:{id:"header"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"logo",attrs:{to:"/",tag:"a"}},["Home"!=this.$route.name?a("img",{attrs:{src:"static/img/logos/logo01.jpg",alt:"logo"}}):a("img",{attrs:{src:"static/img/logos/logo-blanco.jpeg",alt:"logo"}})])],1),this._v(" "),a("button",{staticClass:"navbar-toggle",on:{click:this.myFilter}},[a("span")])]),this._v(" "),a("nav",{attrs:{id:"nav"}},[a("nav-app",{attrs:{classes:"main-menu nav navbar-nav navbar-right"}})],1)])])},staticRenderFns:[]},l=s("VU/8")(c,n,!1,null,null,null).exports,d={components:{NavApp:r}},u={render:function(){var t=this.$createElement,a=this._self._c||t;return a("footer",{staticClass:"section",attrs:{id:"footer"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[this._m(0),this._v(" "),a("div",{staticClass:"col-md-6"},[a("nav-app",{attrs:{classes:"footer-nav"}})],1)]),this._v(" "),this._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"footer-logo"},[a("a",{staticClass:"logo"},[a("img",{attrs:{src:"static/img/logos/aaai-logo-transpeps.png",alt:"logo"}}),this._v(" "),a("img",{attrs:{src:"static/img/logos/logo01.jpg",alt:"logo"}}),this._v(" "),a("img",{attrs:{src:"static/img/logos/tec.png",alt:"logo"}}),this._v(" "),a("img",{attrs:{src:"static/img/logos/tecnm.png",alt:"logo"}}),this._v(" "),a("img",{attrs:{src:"static/img/logos/cimat.png",alt:"logo"}}),this._v(" "),a("img",{attrs:{src:"static/img/logos/centrogeo.png",alt:"logo"}})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row",attrs:{id:"bottom-footer"}},[a("div",{staticClass:"col-md-4 col-md-push-8"},[a("ul",{staticClass:"footer-social"},[a("li",[a("a",{staticClass:"facebook",attrs:{target:"_blank",href:"https://www.facebook.com/AAAI-student-Chapter-Yucat%C3%A1n-M%C3%A9xico-408189306626213/"}},[a("i",{staticClass:"fa fa-facebook-f"})])]),this._v(" "),a("li",[a("a",{staticClass:"github",attrs:{target:"_blank",href:"https://github.com/aaaimx"}},[a("i",{staticClass:"fab fa-github"})])])])]),this._v(" "),a("div",{staticClass:"col-md-8 col-md-pull-4"},[a("div",{staticClass:"footer-copyright"},[a("span",[this._v("\n           AAAI México © Copyright 2019. All Rights Reserved. | Powered by "),a("strong",[a("a",{attrs:{href:"https://github.com/aaaimx"}},[this._v("@aaaimx")])])])])])])}]};var h={name:"App",components:{FooterApp:s("VU/8")(d,u,!1,function(t){s("8kJG")},"data-v-1c7b04df",null).exports,HeaderApp:l}},v={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("header-app"),this._v(" "),a("router-view"),this._v(" "),a("footer-app")],1)},staticRenderFns:[]},m=s("VU/8")(h,v,!1,null,null,null).exports,p=s("/ocq"),g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"hero-area",attrs:{id:"home"}},[s("div",{staticClass:"bg-image bg-parallax overlay",staticStyle:{"background-image":"url(https://drive.google.com/uc?export&id=15O07PwhRIs5gKwmmhpOuNkMgxk2Ps9Q7)"}}),t._v(" "),s("div",{staticClass:"home-wrapper"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},[s("h1",{staticClass:"white-text"},[s("br"),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"static/img/logos/aaai-logo-transpeps.png"}}),t._v(" "),s("br"),t._v("AAAI Student Chapter\n            "),s("br"),t._v("at Yucatán, México\n          ")]),t._v(" "),s("p",{staticStyle:{color:"white"}},[t._v("Instituto Tecnológico de Mérida (Mérida Institute of Technology)")])])])])])])}]},f=s("VU/8")(null,g,!1,null,null,null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{attrs:{id:"sponsors"}},[s("div",{staticClass:"container section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 text-center"},[s("h1",{staticClass:"section-heading text-uppercase"},[s("strong",[t._v("Partners & Sponsors")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{staticClass:"section-subheading text-muted"})])]),t._v(" "),s("div",{staticClass:"sblogos",attrs:{"data-random":"false","data-interval":"1500","data-keep-alive":"4000"}},[s("div",{staticClass:"sblogos__row"},[s("div",{staticClass:"sblogos__col"},[s("a",{staticClass:"sblogos__link",attrs:{href:"http://www.itmerida.mx/",target:"_blank"}},[s("img",{staticClass:"sblogos__img",attrs:{src:"static/img/logos/tec.png",title:"Mérida Institute of Technology"}})])]),t._v(" "),s("div",{staticClass:"sblogos__col"},[s("a",{staticClass:"sblogos__link",attrs:{href:"https://www.jarkol.com/",target:"_blank"}},[s("img",{staticClass:"sblogos__img",attrs:{src:"static/img/logos/jarkol-logo.png",title:"Jarkol Technologies"}})])]),t._v(" "),s("div",{staticClass:"sblogos__col"},[s("a",{staticClass:"sblogos__link",attrs:{href:"#",target:"_blank"}},[s("img",{staticClass:"sblogos__img",attrs:{src:"static/img/logos/indaico.png",title:"Indaico"}})])]),t._v(" "),s("div",{staticClass:"sblogos__col"},[s("a",{staticClass:"sblogos__link",attrs:{href:"https://www.centrogeo.org.mx/",target:"_blank"}},[s("img",{staticClass:"sblogos__img",attrs:{src:"static/img/logos/centrogeo.png",title:"CentroGEO",alt:"CentroGEO"}})])]),t._v(" "),s("div",{staticClass:"sblogos__col"},[s("a",{staticClass:"sblogos__link",attrs:{href:"https://www.cimat.mx/",target:"_blank"}},[s("img",{staticClass:"sblogos__img",attrs:{src:"static/img/logos/cimat.png",title:"CIMAT"}})])]),t._v(" "),s("div",{staticClass:"sblogos__col"},[s("a",{staticClass:"sblogos__link",attrs:{href:"https://www.aaai.org/",target:"_blank"}},[s("img",{staticClass:"sblogos__img",attrs:{src:"static/img/logos/aaai-logo-transpeps.png",title:"AAAI"}})])])])])])])}]};var b=s("VU/8")(null,_,!1,function(t){s("J6S4")},"data-v-3626610a",null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{attrs:{id:"about-us"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 text-center"},[s("h2",{staticClass:"section-heading text-uppercase"},[s("strong",[t._v("About us")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{staticClass:"section-subheading text-muted"})])]),t._v(" "),s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col-md-4"},[s("span",{staticClass:"fa-stack fa-4x"},[s("i",{staticClass:"fas fa-flask fa-stack-1x"})]),t._v(" "),s("h4",{staticClass:"service-heading"},[t._v("Mission")]),t._v(" "),s("p",{staticClass:"text-muted"},[t._v("\n          Our goal is to promote the knowledge and practice of AI in\n          both the ITM and the local\n          community, encouraging more students to join and promote research and technological\n          developments.\n        ")])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("span",{staticClass:"fa-stack fa-4x"},[s("i",{staticClass:"fas fa-eye fa-stack-1x fa-inverse"})]),t._v(" "),s("h4",{staticClass:"service-heading"},[t._v("Vision")]),t._v(" "),s("p",{staticClass:"text-muted"},[t._v("\n          We propose to achieve this through a solid core of\n          researchers from both ITM\n          and leading research centers such as CIMAT and CentroGeo, who will bring IA knowledge\n          to students, in the form of conferences, symposiums, meetings, etc., but mainly, through\n          workshops and courses, whose contents will be replicated to future generations of\n          students.\n        ")])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("span",{staticClass:"fa-stack fa-4x"},[s("i",{staticClass:"fas fa-users fa-stack-1x fa-inverse"})]),t._v(" "),s("h4",{staticClass:"service-heading"},[t._v("Community")]),t._v(" "),s("p",{staticClass:"text-muted"},[t._v("\n          We are a community dedicated to increase knowledge and promote greater awareness of\n          Artificial Intelligence, located (mainly) in Mérida, Yucatán, México. The headquarters\n          of the chapter are located at the Mérida Institute of Technology (Instituto Tecnológico\n          de Mérida).\n        ")])])])])])}]};var w=s("VU/8")(null,C,!1,function(t){s("ahdd")},"data-v-786ec79b",null).exports,k=s("BO1k"),x=s.n(k),y=[{name:"David Mendoza",description:"Student Founder",avatar:null,social:{fb:"https://www.facebook.com/",github:"https://github.com/"}},{name:"Vicente Yah",description:"Student Founder",avatar:null,social:{fb:"https://www.facebook.com/",github:"https://github.com/"}},{name:"Saul Ochoa",description:"Student Founder",avatar:null,social:{fb:"https://www.facebook.com/",github:"https://github.com/"}},{name:"Alex Lopéz",description:"Student Founder",avatar:null,social:{fb:"https://www.facebook.com/",github:null}},{name:"Victor Chan",description:"Student Founder",avatar:null,social:{fb:"https://www.facebook.com/",github:"https://github.com/"}},{name:"Paola García",description:"Student Founder",avatar:null,social:{fb:"https://www.facebook.com/",github:"https://github.com/"}},{name:"Luis Ojeda",description:"Student Founder",avatar:null,social:{fb:"https://www.facebook.com/",github:"https://github.com/"}},{name:"Angel Can",description:"Student Founder",avatar:null,social:{fb:"https://www.facebook.com/",github:"https://github.com/"}},{name:"Sergio Soberanis",description:"Student Founder",avatar:null,social:{fb:"https://www.facebook.com/",github:"https://github.com/"}},{name:"Felipe Medina",description:"Student Founder",avatar:null,social:{fb:"https://www.facebook.com/",github:"https://github.com/"}},{name:"Luis Padron",description:"Student Founder",avatar:null,social:{fb:"https://www.facebook.com/",github:"https://github.com/"}},{name:"Aurora Solís",description:"Student Founder",avatar:null,social:{fb:"https://www.facebook.com/",github:"https://github.com/"}}],A=[{name:"Dr. Mauricio G. Orozco del Castillo",description:"Chair / ITM Researcher",avatar:"https://drive.google.com/uc?export&id=1-p-3xZJOi6bzmQRGKrAacZBy2_d94Inh",social:{researchGate:"https://www.researchgate.net/profile/Mauricio_Orozco-del-Castillo2"}},{name:"Dr. Juan Carlos Valdiviezo Navarro",description:"Co-Chair / CentroGeo Researcher",avatar:"https://drive.google.com/uc?export&id=103nQgLa06eXaDJGUAfzfgrZuor1uOaVx",social:{researchGate:"https://www.researchgate.net/profile/Juan_Valdiviezo-N"}},{name:"Dr. Joel A. Trejo Sánchez",description:"Secretary / CIMAT Researcher",avatar:"https://drive.google.com/uc?export&id=1-eFUdsxtQJ5AbbaTOP_r5xyFl-xsWhtL",social:{researchGate:"https://www.researchgate.net/profile/Joel_Trejo-Sanchez"}}],M=[{name:"Esteban Brito",description:"EC Member / Machine Learning Division Leader",avatar:"https://drive.google.com/uc?export&id=105nFsqfFFVXHf-QCehKNFfVePjHiUGMo",social:{fb:"https://www.facebook.com/estebanemmanuel.britoborges",in:"https://www.linkedin.com/in/esteban-brito-4034b7177",github:"https://github.com/EstebanBrito"}},{name:"Raul Novelo",description:"EC Member / Software Division Leader",avatar:"https://avatars2.githubusercontent.com/u/36168284?s=400&u=dd850c4cf79d1fb9a152d8acf1426b1db4af6a1a&v=4",social:{fb:"https://www.facebook.com/raul.novelocruz",github:"https://github.com/RaulNovelo",in:"https://www.linkedin.com/in/raul-novelo-664224169/"}},{name:"Humberto Sarabia",description:"EC Member / Electronics Division Leader",avatar:"https://drive.google.com/uc?export&id=10FYCMiyUHIvJC4cQcKXD2IAQ9DGK7Oi5",social:{fb:"https://www.facebook.com/jesus.sarabiaosorio",github:"https://github.com/ImHumbert"}},{name:"Fernando Herrera",description:"EC Member / Applied Mathematics Division Leader",avatar:"https://drive.google.com/uc?export&id=1-mhiRWtGh5gn7MeBZaVXjSSiGdlbTKkW",social:{fb:"https://www.facebook.com/profile.php?id=100009268537015"}},{name:"Adolfo Álvarez",description:"EC Member",avatar:"https://drive.google.com/uc?export&id=107ia-_62Q5Mx6ojlHZIa34BvFS9gAbIt",social:{fb:"https://www.facebook.com/profile.php?id=100015311889575",github:"https://github.com/alvarez98"}},{name:"Juan López",description:"EC Member",avatar:"https://drive.google.com/uc?export&id=1-bg4NDfupc7nsz6OVOKF58czmpEDYtic",social:{fb:"https://www.facebook.com/juanli07",github:"https://github.com/Juanli07"}},{name:"Paul Mena",description:"EC Member",avatar:"https://drive.google.com/uc?export&id=1-eMg-nog5Rv_kJB-FnjJB0B2bngs7v62",social:{fb:"https://www.facebook.com/paul.mena.180",in:"https://www.linkedin.com/in/paul-mena-428360185",github:"https://github.com/paulspartan14"}}],E={data:function(){return{team:M,panel:A,founders:y}},methods:{toggleFounders:function(){var t=document.getElementsByClassName("content"),a=!0,s=!1,e=void 0;try{for(var i,o=x()(t);!(a=(i=o.next()).done);a=!0){var r=i.value;"block"===r.style.display?r.style.display="none":r.style.display="block"}}catch(t){s=!0,e=t}finally{try{!a&&o.return&&o.return()}finally{if(s)throw e}}}}},I={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"bg-light",attrs:{id:"team"}},[s("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"row justify-content-center"},[t._l(t.team,function(a){return s("div",{key:a.name,staticClass:"col-sm-4"},[s("div",{staticClass:"team-member"},[a.avatar?s("img",{staticClass:"mx-auto rounded-circle",attrs:{src:a.avatar,alt:""}}):s("img",{staticClass:"mx-auto rounded-circle",attrs:{src:"static/img/avatar.png",alt:""}}),t._v(" "),s("h4",[t._v(t._s(a.name))]),t._v(" "),s("p",{staticClass:"text-muted"},[t._v(t._s(a.description))]),t._v(" "),s("ul",{staticClass:"list-inline social-buttons"},[a.social.twitter?s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{target:"_blank",href:a.social.twitter}},[s("i",{staticClass:"fab fa-twitter"})])]):t._e(),t._v(" "),a.social.fb?s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{target:"_blank",title:"Facebook",href:a.social.fb}},[s("i",{staticClass:"fa fa-facebook-f"})])]):t._e(),t._v(" "),a.social.in?s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{target:"_blank",title:"LinkedIn",href:a.social.in}},[s("i",{staticClass:"fab fa-linkedin-in"})])]):t._e(),t._v(" "),a.social.github?s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{target:"_blank",title:"Github",href:a.social.github}},[s("i",{staticClass:"fab fa-github"})])]):t._e()])])])}),t._v(" "),t._l(t.founders,function(a){return s("div",{key:a.name,staticClass:"col-sm-4 content"},[s("div",{staticClass:"team-member"},[a.avatar?s("img",{staticClass:"mx-auto rounded-circle",attrs:{src:a.avatar,alt:""}}):s("img",{staticClass:"mx-auto rounded-circle",attrs:{src:"static/img/avatar.png",alt:""}}),t._v(" "),s("h4",[t._v(t._s(a.name))]),t._v(" "),s("p",{staticClass:"text-muted"},[t._v(t._s(a.description))]),t._v(" "),s("ul",{staticClass:"list-inline social-buttons"},[a.social.twitter?s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{target:"_blank",href:a.social.twitter}},[s("i",{staticClass:"fab fa-twitter"})])]):t._e(),t._v(" "),a.social.fb?s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{target:"_blank",href:a.social.fb}},[s("i",{staticClass:"fa fa-facebook-f"})])]):t._e(),t._v(" "),a.social.in?s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{target:"_blank",href:a.social.in}},[s("i",{staticClass:"fab fa-linkedin-in"})])]):t._e(),t._v(" "),a.social.github?s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{target:"_blank",href:a.social.github}},[s("i",{staticClass:"fab fa-github"})])]):t._e()])])])})],2),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"row"},t._l(t.panel,function(a){return s("div",{key:a.name,staticClass:"col-sm-4"},[s("div",{staticClass:"team-member"},[a.avatar?s("img",{staticClass:"mx-auto rounded-circle",attrs:{src:a.avatar,alt:""}}):s("img",{staticClass:"mx-auto rounded-circle",attrs:{src:"static/img/avatar.png",alt:""}}),t._v(" "),s("h4",[t._v(t._s(a.name))]),t._v(" "),s("p",{staticClass:"text-muted"},[t._v(t._s(a.description))]),t._v(" "),s("a",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{target:"_blank",title:"ResearchGate",href:a.social.researchGate}},[s("img",{staticStyle:{border:"0px solid #fff !important",width:"50px !important",height:"50px !important"},attrs:{src:"static/img/logos/rg-logo.png"}})])])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 text-center"},[a("h2",{staticClass:"section-heading text-uppercase"},[a("strong",[this._v("Our Team")])]),this._v(" "),a("hr"),this._v(" "),a("h3",{staticClass:"section-subheading text-muted"},[this._v("\n         We are a group of students and researchers from the ITM along with researchers from the Center for Mathematical Research (CIMAT) and CentroGeo,\n          some of the leading educational and research centers in Yucatán, México.\n        ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 text-center"},[a("h2",{staticClass:"section-heading text-uppercase"},[a("strong",[this._v("Executive Committee")])]),this._v(" "),a("hr")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 text-center"},[a("h2",{staticClass:"section-heading text-uppercase"},[a("strong",[this._v("Board")])]),this._v(" "),a("hr")])])}]};var S=s("VU/8")(E,I,!1,function(t){s("VVMt")},"data-v-62d17538",null).exports,F=[{photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAwvrv6u1dVtDUQE0b7RsCVh9YXViFmmm7glkwQIayMiZnMPeLBA",description:"Introduction to Machine Learning with Keras, ScikitLearn & Tensorflow",location:"H11",type:"Course"},{photo:"https://cdn-images-1.medium.com/max/1600/1*4yMLrBPGadgWEoBu1i2jkQ.png",description:"Become a Computer Vision Ninja with OpenCV",location:"G6",type:"Workshop"},{photo:"/static/img/course04.e2625bb.jpg",description:"REST API with Node.js, Vue.js & MongoDB",location:"G1",type:"Course"},{photo:"https://www.edx.org/sites/default/files/data-science-with-python_378x225_1.png",description:"Python to Data Science (Introduction)",location:"G1",type:"Workshop"}],$=[{photo:"/static/img/aaai-logo-transpeps.143a64e.png",description:"Inauguration of the AAAI México Student Chapter",location:"Auditorium",type:"Ceremony"},{photo:"/static/img/course06.8d5a033.jpg",description:"Sentiment Analisys with Python, ElasticSearch and Kibana Dashboard",location:"Auditorium",type:"Conference"},{photo:"https://www.infochannel.info/sites/default/files/errores_reconcimiento_voz_soldai_app.jpg",description:"Natural Lenguaje Processing by SoldAI",location:"Auditorium",type:"Conference"},{photo:"https://farm2.staticflickr.com/1821/41083526190_38cd157a0c_b.jpg",description:"Algorithm 2019",location:"LCOM1",type:"Competition"}],T=[{photo:"https://static1.squarespace.com/static/507b2f30e4b066e116488db6/t/52c23d04e4b061101a782fa6/1388461317992/her-movie-poster.jpg?format=1000w",description:"Her (2013)",location:"G1",type:"Movie"}],V={name:"events",data:function(){return{events:$,breaks:T,courses:F}},created:function(){},computed:{sliceArray:function(){return this.events.slice(0,4)}}},R={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section",attrs:{id:"courses"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"container"},[s("div",{attrs:{id:"courses-wrapper"}},[s("div",{staticClass:"row"},t._l(t.events,function(a){return s("div",{key:a.description,staticClass:"col-md-3 col-sm-6 col-xs-6"},[s("div",{staticClass:"course"},[s("a",{staticClass:"course-img",attrs:{href:"#"}},[s("img",{attrs:{src:a.photo,alt:""}}),t._v(" "),s("i",{staticClass:"course-link-icon fa fa-link"})]),t._v(" "),s("a",{staticClass:"course-title",attrs:{href:"#"}},[t._v("\n              "+t._s(a.description)+"\n            ")]),t._v(" "),s("div",{staticClass:"course-details"},[s("span",{staticClass:"course-category"},[t._v(t._s(a.type))]),t._v(" "),s("span",{staticClass:"course-price course-free"},[t._v(t._s(a.location))])])])])}),0),t._v(" "),s("div",{staticClass:"row"},t._l(t.courses,function(a){return s("div",{key:a.description,staticClass:"col-md-3 col-sm-6 col-xs-6"},[s("div",{staticClass:"course"},[s("a",{staticClass:"course-img",attrs:{href:"#"}},[s("img",{attrs:{src:a.photo,alt:""}}),t._v(" "),s("i",{staticClass:"course-link-icon fa fa-link"})]),t._v(" "),s("a",{staticClass:"course-title",attrs:{href:"#"}},[t._v("\n              "+t._s(a.description)+"\n            ")]),t._v(" "),s("div",{staticClass:"course-details"},[s("span",{staticClass:"course-category"},[t._v(t._s(a.type))]),t._v(" "),s("span",{staticClass:"course-price course-free"},[t._v(t._s(a.location))])])])])}),0),t._v(" "),s("div",{staticClass:"row"},t._l(t.breaks,function(a){return s("div",{key:a.description,staticClass:"col-md-3 col-sm-6 col-xs-6"},[s("div",{staticClass:"course"},[s("a",{staticClass:"course-img",attrs:{href:"#"}},[s("img",{attrs:{src:a.photo,alt:""}}),t._v(" "),s("i",{staticClass:"course-link-icon fa fa-link"})]),t._v(" "),s("a",{staticClass:"course-title",attrs:{href:"#"}},[t._v("\n              "+t._s(a.description)+"\n            ")]),t._v(" "),s("div",{staticClass:"course-details"},[s("span",{staticClass:"course-category"},[t._v(t._s(a.type))]),t._v(" "),s("span",{staticClass:"course-price course-free"},[t._v(t._s(a.location))])])])])}),0)]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"center-btn"},[a("a",{staticClass:"main-button icon-button",attrs:{href:"#"}},[this._v("More Events")])])])}]},j={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"section",attrs:{id:"contact-cta"}},[a("div",{staticClass:"bg-image bg-parallax overlay",staticStyle:{"background-image":"url(https://drive.google.com/uc?export&id=1qRR6NIvaU6jhCeaFI7lRuS83cfKTB4r_)"}}),this._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 col-md-offset-2 text-center"},[a("h2",{staticClass:"white-text"},[this._v("Contact Us")]),this._v(" "),a("p",{staticClass:"lead white-text"},[this._v("Mérida Institute of Technology, Yucatán, MX")]),this._v(" "),a("router-link",{staticClass:"main-button icon-button",attrs:{to:"/contact",tag:"a"}},[this._v("Contact Us Now")])],1)])])])},staticRenderFns:[]},G={name:"App",components:{Events:s("VU/8")(V,R,!1,null,null,null).exports,AboutUs:w,Sponsors:b,OurTeam:S,Contact:s("VU/8")(null,j,!1,null,null,null).exports,HeroApp:f}},H={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("hero-app"),this._v(" "),a("about-us"),this._v(" "),a("sponsors"),this._v(" "),this._m(0),this._v(" "),a("our-team"),this._v(" "),a("contact")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"section",attrs:{id:"cta"}},[a("div",{staticClass:"bg-image bg-parallax overlay",staticStyle:{"background-image":"url(https://drive.google.com/uc?export&id=1ZKQIr_hAFs7_itZiGBd1DwnVRdEz23_p)"}}),this._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("h2",{staticClass:"white-text",staticStyle:{"font-style":"italic"}},[this._v("“If a machine is expected to be infallible, it cannot also be intelligent.”")]),this._v(" "),a("p",{staticClass:"lead white-text"},[this._v("\n           —Alan Turing\n        ")])])])])])}]};var O=s("VU/8")(G,H,!1,function(t){s("KE0h")},null,null).exports,z={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"hero-area section"},[s("div",{staticClass:"bg-image bg-parallax overlay",staticStyle:{"background-image":"url(https://drive.google.com/uc?export&id=1XrGdTrdrf8Djwy5FiTze8uXq93IXfVrl)"}}),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-10 col-md-offset-1 text-center"},[s("ul",{staticClass:"hero-area-tree"},[s("li",[s("a",{attrs:{href:""}},[t._v("Home")])]),t._v(" "),s("li",[t._v("Contact")])]),t._v(" "),s("h1",{staticClass:"white-text"},[t._v("Get In Touch")])])])])]),t._v(" "),s("div",{staticClass:"section",attrs:{id:"contact"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-md-offset-1"},[s("h3",[t._v("Contact Information")]),t._v(" "),s("ul",{staticClass:"contact-details"},[s("li",[s("i",{staticClass:"fas fa-graduation-cap"}),s("a",[t._v("Mérida Institute of Technology, Yucatán, México")])]),t._v(" "),s("li",[s("i",{staticClass:"fa fa-envelope"}),s("a",{attrs:{href:"mailto:contact@aaaimx.org"}},[t._v("contact@aaaimx.org")])]),t._v(" "),s("li",[s("i",{staticClass:"fa fa-facebook-f"}),s("a",[t._v("AAAI ITM México")])]),t._v(" "),s("li",[s("i",{staticClass:"fas fa-map-marker-alt"}),t._v("Perif. de Mérida Lic. Manuel Berzunza, Zona Dorada, Mérida, Yuc.\n            ")])])])])])])])}]},N=s("VU/8")(null,z,!1,null,null,null).exports;e.a.use(p.a);var B=new p.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",name:"Home",component:O},{path:"/contact",name:"Contact",component:N},{path:"*",redirect:"/"}]});s("uYw/"),s("XMat"),s("z8Ob"),s("cKq9");e.a.config.productionTip=!1,new e.a({el:"#app",router:B,components:{App:m},template:"<App/>"})},VVMt:function(t,a){},XMat:function(t,a){},ahdd:function(t,a){},cKq9:function(t,a){$(document).ready(function(){$("a[href*=\\#]").on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$(this.hash).offset().top},500)})})},"uYw/":function(t,a){},z8Ob:function(t,a){!function(t){"use strict";t(window).on("load",function(){t("#preloader").delay(600).fadeOut()}),t(".navbar-toggle").on("click",function(){t("#header").toggleClass("nav-collapse")})}(jQuery)}},["NHnr"]);
//# sourceMappingURL=app.551b9fcf55f4e536b5e5.js.map