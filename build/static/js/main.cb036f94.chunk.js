(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/swdb.6407f08b.png"},24:function(e,t,n){e.exports=n.p+"static/media/volume_off.a3d484ff.svg"},25:function(e,t,n){e.exports=n.p+"static/media/volume_on.ef7f87ab.svg"},27:function(e,t,n){e.exports=n(39)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(6),s=n.n(i),l=n(11),o=n(3),c=(n(35),n(21)),u=n(22),p={searchField:""},d={peopleList:[],error:"",isPending:!0},m={planetsList:[],error:"",isPending:!0},h={starshipsList:[],error:"",isPending:!0},E={isHidden:!0},g=n(8),f=n(9),y=n(13),S=n(10),v=n(12),b=(n(36),function(e){var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.3.1/css/all.css",integrity:"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",crossOrigin:"anonymous"}),r.a.createElement("form",{action:""},r.a.createElement("input",{type:"text",placeholder:"Search",className:"tc bg-lightest-blue height-15px",onChange:t}),r.a.createElement("i",{className:"fa fa-search"})))}),P=function(e){var t=e.name,n=e.height,a=e.mass,i=e.eye_color,s=e.birth_year,l=e.gender;return r.a.createElement("div",{className:"dib bg-yellow ma3 pa3 shadow=5 br3 grow-4"},r.a.createElement("h2",null,"Character"),r.a.createElement("h1",null,t),r.a.createElement("br",null),r.a.createElement("p",null,"Height: ",n),r.a.createElement("p",null,"Mass: ",a),r.a.createElement("p",null,"Eye Color: ",i),r.a.createElement("p",null,"Birth Year: ",s),r.a.createElement("p",null,"Gender: ",l))},_=function(e){var t=e.peopleList;return t.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}),r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(P,{key:n,name:t[n].name,height:t[n].height,mass:t[n].mass,eye_color:t[n].eye_color,birth_year:t[n].birth_year,gender:t[n].gender})}))},w=function(e){return r.a.createElement("div",{className:"pa3",style:{overflowY:"scroll",border:"3px solid black",borderColor:"yellow",opacity:"0.8",height:"500px"}},e.children)},L=function(e){var t=e.name,n=e.rotation_period,a=e.orbital_period,i=e.diameter,s=e.climate,l=e.gravity;return r.a.createElement("div",{className:"dib bg-blue ma3 pa3 shadow=5 br3"},r.a.createElement("h2",null,"Planet"),r.a.createElement("h1",null,t),r.a.createElement("br",null),r.a.createElement("p",null,"Rotation Period: ",n),r.a.createElement("p",null,"Orbital Period: ",a),r.a.createElement("p",null,"Diamter: ",i),r.a.createElement("p",null,"Climate: ",s),r.a.createElement("p",null,"Gravity: ",l))},O=function(e){var t=e.planetsList;return t.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}),r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(L,{key:n,name:t[n].name,rotation_period:t[n].rotation_period,orbital_period:t[n].orbital_period,diameter:t[n].diameter,climate:t[n].climate,gravity:t[n].gravity})}))},C=function(e){var t=e.name,n=e.model,a=e.manufacturer,i=e.length,s=e.crew,l=e.hyperdrive_rating;return r.a.createElement("div",{className:"dib bg-red ma3 pa3 shadow=5 br3"},r.a.createElement("h2",null,"Starship"),r.a.createElement("h1",null,t),r.a.createElement("br",null),r.a.createElement("p",null,"Model: ",n),r.a.createElement("p",null,"Manufacturer: ",a),r.a.createElement("p",null,"Length: ",i),r.a.createElement("p",null,"Crew: ",s),r.a.createElement("p",null,"Hyperdrive Rating: ",l))},H=function(e){var t=e.starshipList;return t.sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}),r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(C,{key:n,name:t[n].name,model:t[n].model,manufacturer:t[n].manufacturer,length:t[n].length,crew:t[n].crew,hyperdrive_rating:t[n].hyperdrive_rating})}))},R=(n(37),n(23)),N=n.n(R),T=n(14),j=["https://swapi.co/api/people","https://swapi.co/api/people?page=2","https://swapi.co/api/people?page=3","https://swapi.co/api/people?page=4"],I=["https://swapi.co/api/planets","https://swapi.co/api/planets?page=2","https://swapi.co/api/planets?page=3","https://swapi.co/api/planets?page=4"],U=["https://swapi.co/api/starships","https://swapi.co/api/starships?page=2","https://swapi.co/api/starships?page=3","https://swapi.co/api/starships?page=4"],A=function(e){function t(){var e;return Object(g.a)(this,t),(e=Object(y.a)(this,Object(S.a)(t).call(this))).state={isHidden:!0,isHidden2:!0,isHidden3:!0},e}return Object(v.a)(t,e),Object(f.a)(t,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"toggleHidden2",value:function(){this.setState({isHidden2:!this.state.isHidden2})}},{key:"toggleHidden3",value:function(){this.setState({isHidden3:!this.state.isHidden3})}},{key:"componentDidMount",value:function(){this.props.onRequestPeople(),this.props.onRequestPlanets(),this.props.onRequestStarships(),this.props.onTogglePeople()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=(e.isHidden,e.onTogglePeople,e.onSearchChage),a=e.isPending,i=e.peopleList,s=e.planetsList,l=e.starshipsList,o=i.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}),c=s.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}),u=l.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a?r.a.createElement("h2",null,"LOADING"):r.a.createElement("div",{className:"stars"},r.a.createElement("div",{className:"twinkling"},r.a.createElement("div",{className:"clouds"},r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,r.a.createElement("img",{src:N.a,opacity:"0.3",height:"100px"})),r.a.createElement("br",null),r.a.createElement(b,{searchChange:n}),r.a.createElement("p",{id:"here"}," Please click buttons twice to reset due to novice react coding methods. "),r.a.createElement("br",null),r.a.createElement("button",{id:"peoplebtn",onClick:this.toggleHidden.bind(this)},"People"),r.a.createElement("button",{id:"planetbtn",onClick:this.toggleHidden2.bind(this)},"Planets"),r.a.createElement("button",{id:"starshipbtn",onClick:this.toggleHidden3.bind(this)},"Starships"),r.a.createElement(w,null,!this.state.isHidden3&&r.a.createElement(H,{starshipList:u}),!this.state.isHidden2&&r.a.createElement(O,{planetsList:c}),!this.state.isHidden&&r.a.createElement(_,{peopleList:o}))))))}}]),t}(a.Component),k=Object(l.b)(function(e){return{isHidden:e.togglePeople.isHidden,searchField:e.searchPeople.searchField,peopleList:e.requestPeople.peopleList,planetsList:e.requestPlanets.planetsList,starshipsList:e.requestStarships.starshipsList,error:e.requestPeople.error,isPending:e.requestPeople.isPending}},function(e){return{onSearchChage:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestPeople:function(){return e(function(e){e({type:"REQUEST_PEOPLE_PENDING"}),Promise.all(j.map(function(e){return fetch(e).then(function(e){return e.json()}).then(function(e){return e.results})})).then(function(t){var n;return e({type:"REQUEST_PEOPLE_SUCCESS",payload:(n=[]).concat.apply(n,Object(T.a)(t))})}).catch(function(t){return e({type:"REQUEST_PEOPLE_FAILED",payload:t})})})},onRequestPlanets:function(){return e(function(e){e({type:"REQUEST_PLANETS_PENDING"}),Promise.all(I.map(function(e){return fetch(e).then(function(e){return e.json()}).then(function(e){return e.results})})).then(function(t){var n;return e({type:"REQUEST_PLANETS_SUCCESS",payload:(n=[]).concat.apply(n,Object(T.a)(t))})}).catch(function(t){return e({type:"REQUEST_PLANETS_FAILED",payload:t})})})},onRequestStarships:function(){return e(function(e){e({type:"REQUEST_STARSHIPS_PENDING"}),Promise.all(U.map(function(e){return fetch(e).then(function(e){return e.json()}).then(function(e){return e.results})})).then(function(t){var n;return e({type:"REQUEST_STARSHIPS_SUCCESS",payload:(n=[]).concat.apply(n,Object(T.a)(t))})}).catch(function(t){return e({type:"REQUEST_STARSHIPS_FAILED",payload:t})})})},onTogglePeople:function(){return e({type:"TOGGLE_HIDDEN",payload:t});var t}}})(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(38);var D=n(26),Q=n(24),q=n.n(Q),F=n(25),G=n.n(F),x=function(e){function t(){var e;return Object(g.a)(this,t),(e=Object(y.a)(this,Object(S.a)(t).call(this))).onVolumeClick=function(){e.state.muted?e.audio.current.muted=!1:e.audio.current.muted=!0,e.setState({muted:!e.state.muted})},e.state={muted:!0},e.audio=r.a.createRef(),e.intro=r.a.createRef(),e}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;(new D.a).to(this.intro.current,4.5,{opacity:1,delay:1}).to(this.intro.current,1.5,{opacity:0,onComplete:function(){e.audio.current.play()}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"intro",ref:this.intro},r.a.createElement("p",{id:"here2"},"A long time ago, in a galaxy far,",r.a.createElement("br",null)," far away....")),r.a.createElement("audio",{loop:!0,ref:this.audio,muted:!0},r.a.createElement("source",{type:"audio/mpeg",src:"https://ia801501.us.archive.org/23/items/StarWars_20180709/Star%20Wars.mp3"})),r.a.createElement("button",{className:"volume",type:"button",onClick:this.onVolumeClick},this.state.muted?r.a.createElement("img",{src:q.a,alt:"Volume is off"}):r.a.createElement("img",{src:G.a,alt:"Volume is on"})))}}]),t}(a.Component),M=Object(c.createLogger)(),W=Object(o.c)({searchPeople:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestPeople:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_PEOPLE_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_PEOPLE_SUCCESS":return Object.assign({},e,{peopleList:t.payload,isPending:!1});case"REQUEST_PEOPLE_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},requestPlanets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_PLANETS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_PLANETS_SUCCESS":return Object.assign({},e,{planetsList:t.payload,isPending:!1});case"REQUEST_PLANETS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},requestStarships:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_STARSHIPS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_STARSHIPS_SUCCESS":return Object.assign({},e,{starshipsList:t.payload,isPending:!1});case"REQUEST_STARSHIPS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},togglePeople:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"TOGGLE_HIDDEN":return Object.assign({},e,{isHidden:!t.payload});default:return e}}}),B=Object(o.d)(W,Object(o.a)(u.a,M));s.a.render(r.a.createElement(l.a,{store:B},r.a.createElement(k,null),", ",r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.cb036f94.chunk.js.map