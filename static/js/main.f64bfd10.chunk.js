(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/connect4.f05dc651.png"},,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/JB_card.c053a4ba.jpg"},function(e,t,a){e.exports=a.p+"static/media/polaroid2.798fa0ac.png"},function(e,t,a){e.exports=a.p+"static/media/JonathanRubin.c5606e98.jpg"},,,function(e,t,a){e.exports=a(62)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),c=(a(30),a(6)),i=a(7),s=a(9),m=a(8),u=a(10),d=(a(32),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isPagesDropdownOpen,a=e.toggleDropdown,n=e.setRef,o=e.className;return r.a.createElement("div",{className:"".concat(o),ref:n,onMouseDown:a},r.a.createElement("div",{className:"hamburger"},r.a.createElement("div",{className:"hamburgerDot"}),r.a.createElement("div",{className:"hamburgerDot"}),r.a.createElement("div",{className:"hamburgerDot"}),r.a.createElement("div",{className:"hamburgerDot"}),r.a.createElement("div",{className:"hamburgerDot"}),r.a.createElement("div",{className:"hamburgerDot"}),r.a.createElement("div",{className:"hamburgerDot"}),r.a.createElement("div",{className:"hamburgerDot"}),r.a.createElement("div",{className:"hamburgerDot"})),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"arrowTop"}),r.a.createElement("div",{className:"arrowBottom"})))}}]),t}(n.Component)),h=a(63),p=(a(34),function(e){var t,a=e.link,n=e.text,o=e.hoverUnderline,l=e.color,c=e.children,i=e.handleClick,s=(e.history,e.className);return t=+o?"underline-hover":"",a&&a.startsWith("/")?r.a.createElement(h.a,{to:a,className:"no-underline ".concat(s," ").concat(t," ").concat(l," f6"),onClick:i},n,r.a.createElement("div",{className:"flex flex-row justify-between"},c)):r.a.createElement("a",{href:a,className:"no-underline ".concat(s," ").concat(l," f6"),onClick:i},n,r.a.createElement("div",null,c))}),f=(a(38),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.props.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.props.handleClickOutside)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.setRef;return r.a.createElement("div",{className:"dropdownContainer"},r.a.createElement("div",{className:"dropdown",ref:a},t))}}]),t}(n.Component)),g=(a(40),function(e){var t=e.letter,a=e.size;return r.a.createElement("div",{className:"initial f3 flex justify-center items-center white br-100 ".concat(a)},t)}),E=a(5),w=(a(42),function(e){var t=e.className,a=e.title,n=e.icon,o=e.link,l=e.toggleDropdown,c=o||a.toLowerCase();return r.a.createElement(p,{link:c,hoverUnderline:!1,color:"black",handleClick:l},r.a.createElement("div",{className:"square ".concat(t)},r.a.createElement("div",{className:"pv2"},a),r.a.createElement("div",{className:"iconStyle"},n)))}),b=function(e){var t=e.setRef,a=e.handleClickOutside,n=e.toggleDropdown;return r.a.createElement(f,{setRef:t,handleClickOutside:a},r.a.createElement(w,{title:"Projects",icon:r.a.createElement(E.c,{color:"red"})}),r.a.createElement(w,{title:"About",icon:r.a.createElement(E.e,{color:"#FBD043"})}),r.a.createElement(w,{title:"Contact",icon:r.a.createElement(E.a,{color:"green"})}),r.a.createElement(w,{link:"https://github.com/rubinj30",title:"GitHub",icon:r.a.createElement(E.b,null)}),r.a.createElement(w,{link:"https://www.linkedin.com/in/jonathan-rubin/",title:"LinkedIn",icon:r.a.createElement(E.d,{color:"0077B5"})}),r.a.createElement(w,{link:"/",title:"Search",className:"initialContainer",icon:r.a.createElement(g,{letter:"J",size:"large"}),toggleDropdown:n}))},v=(a(44),a(16),function(e){var t=e.toggleDropdown,a=e.isPagesDropdownOpen,n=e.setRef,o=e.handleClickOutside;return r.a.createElement("div",{className:"w-100 h3 flex justify-center items-center"},r.a.createElement("div",{className:"w-90 flex justify-between items-center"},r.a.createElement("div",{className:"h3 ph3 flex items-center"},r.a.createElement(p,{color:"black",hoverUnderline:!0,link:"/about",text:"About"})),r.a.createElement("div",{className:"flex items-center pl4 w5 justify-between f6"},r.a.createElement(p,{color:"black",hoverUnderline:!0,link:"/projects",text:"Projects"}),r.a.createElement(d,{className:"arrowContainer",toggleDropdown:t,setRef:n,isPagesDropdownOpen:a}),a&&r.a.createElement(b,{setRef:n,handleClickOutside:o,toggleDropdown:t}),r.a.createElement(g,{letter:"J",size:"small"}))))}),k=a(64),y=a(65),x=a(66),N=function(e){var t=e.color,a=e.text;return r.a.createElement("span",{className:t},a)},j=function(e){var t=e.className;return r.a.createElement("div",{className:"f1 pa2 pt ".concat(t)},r.a.createElement(N,{text:"J",color:"blue"}),r.a.createElement(N,{text:"o",color:"red"}),r.a.createElement(N,{text:"n",color:"green"}),r.a.createElement(N,{text:"a",color:"blue"}),r.a.createElement(N,{text:"t",color:"yellow"}),r.a.createElement(N,{text:"h",color:"red"}),r.a.createElement(N,{text:"a",color:"blue"}),r.a.createElement(N,{text:"n",color:"green"}))},R=function(e){var t=e.className;return r.a.createElement("div",{className:"f1 pa2 pt ".concat(t)},r.a.createElement(N,{text:"R",color:"blue"}),r.a.createElement(N,{text:"u",color:"red"}),r.a.createElement(N,{text:"b",color:"green"}),r.a.createElement(N,{text:"i",color:"blue"}),r.a.createElement(N,{text:"n",color:"yellow"}))},I=function(){return r.a.createElement("div",{className:"flex"},r.a.createElement(j,{className:"pv4"}),r.a.createElement(R,{className:"pv4"}))},C=a(13),O=a.n(C),D=a(18),S=(a(49),function(e){var t=e.label,a=e.className,n=e.type,o=void 0===n?"button":n,l=e.onClick;return r.a.createElement("button",{type:o,className:"pointer tc ".concat(a),onClick:l},t)}),T=[{text:"projects",link:"/projects",keywords:["projects","work","repos","github","jonathan"]},{text:"about",link:"/about",keywords:["about","jonathan",""]},{text:"github",link:"https://github.com/rubinj30",keywords:["about","jonathan",""]},{text:"contact",link:"/contact",keywords:["phone","email","contact","e-mail","address","mail","number","#","tele","telephone","jonathan","rubin"]},{text:"jonathan",link:"/projects",keywords:[]},{text:"work",link:"/projects",keywords:[]}],P=(a(51),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:"",areResultsShowing:!1,hoveredIndex:-1,results:T,notFound:{text:"",showing:!1}},a.handleChange=function(e){var t=e.currentTarget.value,n=!!(t&&t.length>1);a.setState({searchText:t,areResultsShowing:n,notFound:{showing:!1,text:""}})},a.handleKeyUp=function(e){a.state.searchText;console.log(e.key),"Escape"===e.key&&a.closeResults(),"ArrowDown"===e.key&&a.arrowDown(),"ArrowUp"===e.key&&a.arrowUp(),"Enter"===e.key&&a.takeToResult()},a.takeToResult=function(){var e=a.state,t=e.searchText,n=e.hoveredIndex,r=e.results;n>=0?window.location.assign(r[n].link):(a.closeResults(),a.setState({notFound:{text:t,showing:!0},searchText:""}))},a.closeResults=function(){a.setState({areResultsShowing:!1,hoveredIndex:-1})},a.arrowDown=function(){a.setState(function(e){var t=e.hoveredIndex,n=t<a.state.results.length-1?t+1:0;return console.log(n),{hoveredIndex:n}})},a.arrowUp=function(){a.setState(function(e){var t=e.hoveredIndex,n=t>0?t-1:a.state.results.length-1;return console.log(n),{hoveredIndex:n}})},a.handleResultMouseEnter=function(e){return function(){a.setState({hoveredIndex:e})}},a.handleResultClick=function(){var e=Object(D.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("woo"),e.next=3,a.setState({hoveredIndex:t});case 3:a.takeToResult();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.areResultsShowing,a=e.hoveredIndex,n=e.notFound,o=t||n.showing;return r.a.createElement("div",{className:"containerWrapper relative ".concat(o&&"flatBottomBr")},r.a.createElement("div",{className:"searchContainer"},r.a.createElement("input",{placeholder:"Search here",onChange:this.handleChange,onKeyUp:this.handleKeyUp})),t&&r.a.createElement(B,{handleResultClick:this.handleResultClick,areResultsShowing:t,hoveredIndex:a,handleResultMouseEnter:this.handleResultMouseEnter,takeToResult:this.takeToResult}),n.showing&&r.a.createElement(U,{text:n.text}))}}]),t}(n.Component)),U=function(e){var t=e.text;return r.a.createElement("div",{className:"br1 pa3 absolute resultsContainer"},'There are no results matching "',t,'"')},B=function(e){var t=e.areResultsShowing,a=e.handleResultMouseEnter,n=e.hoveredIndex,o=e.handleResultClick,l=e.takeToResult;return r.a.createElement("div",{className:"w-97 resultsContainer absolute  ".concat(t&&"flatTopBr")},T.map(function(e,t){return r.a.createElement("div",{key:t,onMouseEnter:a(t),onClick:function(){return o(t)},className:"result ".concat(n===t?"grayBg":"","\n                    ")},e.text)}),r.a.createElement("div",{className:"flex justify-center",onClick:l},r.a.createElement(S,{label:"Jonathan Search"})))},A=function(){return r.a.createElement("div",{className:"flex flex-column items-center"},r.a.createElement(j,{className:"pt6"}),r.a.createElement(P,null),r.a.createElement("div",{className:"pt5 w-90 w-70-l f7"},'*My portfolio is still "under construction", but the basics are here! Click on the small gray boxes in the header to find your way around or even key through the currently seeded search results.'))},J=(a(53),function(e){var t=e.title,a=e.className,n=e.children;return r.a.createElement("div",{className:"ma3 pa3 card ".concat(a)},t&&r.a.createElement("div",{className:"b f4 pv3 tc"},t),n)}),M=a(19),W=a.n(M),F=a(20),L=a.n(F),z=a(14),G=a.n(z),K=(a(55),function(e){var t=e.title,a=e.link,n=e.github,o=e.image,l=e.description;return r.a.createElement(J,{title:t},r.a.createElement("div",{className:"flex flex-column items-center"},r.a.createElement("img",{alt:"example photo of project",className:"w-90 h-100 mb2 cardImg ".concat(o.style),src:o.name}),r.a.createElement("p",{className:"pl3 f7 f6-ns"},l)),r.a.createElement("div",{className:"mv2 flex justify-around"},r.a.createElement(p,{hoverUnderline:!0,link:a,className:"w-40"},r.a.createElement(S,{className:"w-100 f7 f6-ns",label:"Visit Website"})),r.a.createElement(p,{link:n,hoverUnderline:!0,className:"w-40"},r.a.createElement(S,{className:"w-100 f7 f6-ns",label:"See GitHub"}))))}),_=function(){return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"flex flex-wrap justify-center"},H.map(function(e,t){return r.a.createElement(K,{key:t,title:e.title,link:e.link,github:e.github,image:e.image,description:e.description})})))},H=[{title:"StockUp Investment Tracker",link:"https://stock-up-app.herokuapp.com/",github:"https://github.com/rubinj30/investment_app_mern",image:{name:G.a,style:"br1"},description:"This was my attempt to make an app on which I could easily track the performance of my investments.            Most investment applications provide a lot of information and you can trade securities from it.             But the user-interfaces are usually horrible and typically people are just checking the performance of their stocks, or for any news related to them.            "},{title:"Connect 4",link:"https://connect-4-ts.herokuapp.com/",github:"https://github.com/rubinj30/connect4",image:{name:G.a,style:"br1"},description:""},{title:"Partner-in-climb",link:"http://partner-in-climb.herokuapp.com/",github:"https://github.com/rubinj30/partner-in-climb",image:{name:L.a,style:"br1"},description:"This was designed to help rock climbers find climbing partners. It was my first time using Express.js and having full CRUD for on 3 nested data models. I also learned the basics of how website routing works."},{title:"Jack Black BlackJack",link:"https://jackblackblackjack.netlify.com/",github:"https://github.com/rubinj30/Blackjack",image:{name:W.a,style:"br1"},description:"This was the first web app I ever built. It is a fully-functioning version of Blackjack, complete with betting."}],q=function(){return r.a.createElement("div",null,r.a.createElement(_,null))},Q=a(21),V=a.n(Q),$=(a(57),function(){return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"flex flex-column justify-center items-center w-90 w-70-l"},r.a.createElement(I,null),r.a.createElement("div",{className:"pb4"},r.a.createElement(J,{className:"profilePic"},r.a.createElement("img",{src:V.a,alt:"Photo of Jonathan Rubin"})),r.a.createElement("h3",{className:"mv0"},"About Me"),r.a.createElement("p",null,"I am a full-stack developer based in Atlanta, GA. I work at Supply.com rebuilding the front-end of the e-commerce website with React, Typescript, GraphQL/Apollo, and Jest/Enzyme."),r.a.createElement("p",null,"In my free time, I like to rock climb around the Southeast, eat chicken wings around Atlanta, and of course write code."),r.a.createElement("h4",null,"My story"),r.a.createElement("p",null,"I have a background in data analytics and after dealing with Excel constantly getting slowed down by the larger datasets I was working with, I discovered Python. The more I worked in Python, the more I found myself using it for automating processes. I started spending my weekends coding and working on self-directed side projects for work. At first it was things I was previously doing with macros, formulas or manually, but soon I was looping through API calls to fetch additional information about prospective customers for our sales team and setting up our daily reports to be pulled and sent out automatically."),r.a.createElement("p",null,"Eventually, I decided I had to pursue this new-found passion and change careers. After much consideration, I decided to attend a 3-month web development bootcamp to accelerate my learning and broaden my scope of knowledge. On top of learning to build full-stack applications, I had the opportunity to collaborate with like-minded individuals and build a network of other developers."),r.a.createElement("p",null,"Shortly after the course ended, I took a position at an e-commerce company that was completely rebuilding their platform and front-end using cutting-edge technologies. It has been amazing to work with and learn from other programmers and build something together."))))}),X=(a(59),function(){return r.a.createElement("div",{className:"flex flex-column items-center justify-center"},r.a.createElement(I,null),r.a.createElement("div",{className:"flex flex-column justify-center"},r.a.createElement(Y,{text:"jonathan.a.rubin@gmail.com",link:"mailto:jonathan.a.rubin@gmail.com",icon:r.a.createElement(E.a,null)}),r.a.createElement(Y,{link:"https://github.com/rubinj30",icon:r.a.createElement(E.b,null)}),r.a.createElement(Y,{link:"https://www.linkedin.com/in/jonathan-rubin/",icon:r.a.createElement(E.d,null),text:"LinkedIn Profile"})))}),Y=function(e){var t=e.link,a=e.icon,n=e.text;return r.a.createElement(p,{link:t,hoverUnderline:!0,className:"linkWrapper flex justify-center items-center"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,a),r.a.createElement("div",{className:"contactItem"},n||t)))},Z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={isPagesDropdownOpen:!1},a.wrapRef=void 0,a.toggleDropdown=function(){a.setState(function(e){return{isPagesDropdownOpen:!e.isPagesDropdownOpen}})},a.handleClickOutside=function(e){a.wrapRef&&!a.wrapRef.contains(e.target)&&a.toggleDropdown()},a.setRef=function(e){a.wrapRef=e},a.wrapRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement("div",null,r.a.createElement(v,{setRef:this.setRef,toggleDropdown:this.toggleDropdown,isPagesDropdownOpen:this.state.isPagesDropdownOpen,handleClickOutside:this.handleClickOutside}),r.a.createElement(y.a,null),r.a.createElement(x.a,null,r.a.createElement(y.a,{exact:!0,path:"/",component:A}),r.a.createElement(y.a,{exact:!0,path:"/projects",component:q}),r.a.createElement(y.a,{exact:!0,path:"/about",component:$}),r.a.createElement(y.a,{exact:!0,path:"/contact",component:X}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[24,2,1]]]);
//# sourceMappingURL=main.f64bfd10.chunk.js.map