(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var c=a(1),s=a.n(c),n=a(4),i=a.n(n),o=(a(13),a(2)),r=a(5),l=a(6),d=a(8),u=a(7),h=(a(14),a(0));function j(t){var e=t.score,a=t.resetGame,c=t.showInstructions;return Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsx)("span",{className:"nav__title",children:"Memory Game"}),Object(h.jsxs)("span",{className:"nav__score",children:["Score: ",e]}),Object(h.jsxs)("div",{className:"nav__btns",children:[Object(h.jsx)("button",{className:"button nav__new-game",onClick:a,children:"New Game"}),Object(h.jsx)("button",{className:"nav__question",onClick:c})]})]})}var b=function(t){var e=t.cards,a=t.display,c=t.matching,s=t.cardClick,n=t.animatingCards,i=e.map((function(t){var i="card card--".concat(e.length," ");return i+=a.includes(t.id)?"card--display ":"card--hide ",i+=c.includes(t.id)?"card--matching ":"",i+=n.includes(t.id)?"card--animation":"",Object(h.jsx)("div",{className:i,style:{backgroundColor:t.color},id:t.id,onClick:s},t.id)}));return Object(h.jsx)("div",{className:"deck deck--".concat(e.length),children:i})};var m=function(t){var e=t.chooseGame,a=t.show,c=t.closeDialogue,s={display:a?"flex":"none"};return Object(h.jsxs)("div",{className:"dialogue",style:s,children:[Object(h.jsx)("div",{className:"dialogue__outside",onClick:c}),Object(h.jsxs)("form",{className:"dialogue__form",onSubmit:e,children:[Object(h.jsx)("button",{className:"dialogue__closeBtn",type:"button",onClick:c}),Object(h.jsx)("label",{className:"dialogue__label dialogue__label--main",children:"Choose the difficulty level:"}),Object(h.jsxs)("div",{className:"dialogue__options",children:[Object(h.jsxs)("label",{className:"dialogue__label",children:[Object(h.jsx)("input",{type:"radio",value:"20",name:"difficulty",defaultChecked:!0}),"Easy (20 cards)"]}),Object(h.jsxs)("label",{className:"dialogue__label",children:[Object(h.jsx)("input",{type:"radio",value:"30",name:"difficulty"})," Medium (30 cards)"]}),Object(h.jsxs)("label",{className:"dialogue__label",children:[Object(h.jsx)("input",{type:"radio",value:"50",name:"difficulty"})," Hard (50 cards)"]}),Object(h.jsxs)("label",{className:"dialogue__label",children:[Object(h.jsx)("input",{type:"radio",value:"70",name:"difficulty"})," Very Hard (70 cards)"]}),Object(h.jsxs)("label",{className:"dialogue__label",children:[Object(h.jsx)("input",{type:"radio",value:"100",name:"difficulty"})," Evil (100 cards)"]})]}),Object(h.jsx)("button",{className:"dialogue__startBtn button",type:"submit",children:"Start Game"})]})]})};function f(t){var e=t.endCelebration,a=t.score;return Object(h.jsxs)("div",{className:"celebration",onClick:e,children:[Object(h.jsx)("h1",{className:"celebration__main",children:"You Won!"}),Object(h.jsxs)("p",{className:"celebration__score",children:["Score: ",a]}),Object(h.jsx)("p",{className:"celebration__click",children:"Click to start a new game"})]})}function g(t){var e=function(t){for(var e=[],a=[20,40,60,80,100],c=Math.floor(Math.random()*(360/t)),s=0;s<t;s++){c+=Math.floor(360/t);var n=a[s%4],i=20+Math.floor(60*Math.random());e.push("hsl(".concat(c,", ").concat(n,"%, ").concat(i,"%)"))}return e}(t/=2);return function(t){var e=Object(o.a)(Array(t.length).keys()),a=[];return t.forEach((function(t){var c=Math.floor(Math.random()*e.length);a[e[c]]=t,e.splice(c,1)})),a}((e=e.concat(e)).map((function(t,e){return{id:"_".concat(e),color:t}})))}function p(t,e,a,c){var s=Math.ceil(a/(2*c));return+(e+(t?100/c:-100/(2*c*s))).toFixed(1)}function v(t){var e=t.display,a=t.hide;return e?Object(h.jsxs)("div",{className:"instructions",children:[Object(h.jsx)("div",{className:"instructions__background",onClick:a}),Object(h.jsxs)("div",{className:"instructions__main",children:[Object(h.jsx)("p",{className:"instructions__text",children:"Click on a card to see its colour. There are two cards from each colour."}),Object(h.jsx)("p",{className:"instructions__text",children:"Match all cards with the same colour to win the game."})]})]}):Object(h.jsx)(h.Fragment,{})}var O=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var c;return Object(r.a)(this,a),(c=e.call(this,t)).cardClick=function(t){if(!t.target.classList.contains("card--display")){var e=c.state,a=e.cards,s=e.display,n=s.length,i=a.find((function(t){return t.id===s[n-1]})),r=a.find((function(t){return t.id===s[n-2]}));n%2===1||(i&&i.color)===(r&&r.color)?c.setState({display:[].concat(Object(o.a)(s),[t.target.id])}):c.setState({display:[].concat(Object(o.a)(s.slice(0,n-2)),[t.target.id])});var l=!1,d=a.find((function(e){return e.id===t.target.id})).color;n%2===1&&i.color===d&&(l=!0,c.setState({matching:[i.id,t.target.id]},(function(){if(c.state.display.length===a.length){c.setState({showCelebration:!0});var t=a.length;c.intervalId=setInterval((function(){0===--t&&clearInterval(c.intervalId),c.setState({animatingCards:[].concat(Object(o.a)(c.state.animatingCards),["_".concat(t)])})}),1e3)}}))),c.setState((function(t){return{clickCount:t.clickCount+1}}),(function(){c.setState((function(t){return{score:p(l,t.score,c.state.clickCount,c.state.cards.length)}}))}))}},c.openPopUp=function(){return c.setState({showDialogue:!0})},c.closePopUp=function(t){var e={};e["show".concat(t)]=!1,c.setState(e)},c.showInstructions=function(){return c.setState({showInstructions:!0})},c.hideInstructions=function(){return c.setState({showInstructions:!1})},c.chooseGame=function(t){t.preventDefault(),clearInterval(c.intervalId);var e=t.target.difficulty.value;c.setState({cards:g(e),display:[],matching:[],showDialogue:!1,showCelebration:!1,clickCount:0,score:100,animatingCards:[]})},c.intervalId=void 0,c.state={cards:g(20),display:[],matching:[],showDialogue:!1,showCelebration:!1,showInstructions:!1,clickCount:0,score:100,animatingCards:[]},c}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{score:this.state.score,resetGame:this.openPopUp,showInstructions:this.showInstructions}),Object(h.jsx)(v,{display:this.state.showInstructions,hide:this.hideInstructions}),Object(h.jsx)(b,{cards:this.state.cards,display:this.state.display,matching:this.state.matching,cardClick:this.cardClick,animatingCards:this.state.animatingCards}),Object(h.jsx)(m,{chooseGame:this.chooseGame,closeDialogue:function(){return t.closePopUp("Dialogue")},show:this.state.showDialogue}),this.state.showCelebration?Object(h.jsx)(f,{endCelebration:function(){t.closePopUp("Celebration"),t.openPopUp()},score:this.state.score}):null]})}}]),a}(c.Component),_=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(e){var a=e.getCLS,c=e.getFID,s=e.getFCP,n=e.getLCP,i=e.getTTFB;a(t),c(t),s(t),n(t),i(t)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),_()}},[[16,1,2]]]);
//# sourceMappingURL=main.d8188be9.chunk.js.map