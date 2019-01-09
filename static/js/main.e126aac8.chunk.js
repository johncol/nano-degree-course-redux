(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(16),u=n.n(a),c=n(1),l=n(2),i=n(10),d=function(){return alert("Something went wrong, please try again!")},m="ADD_TODO",f="REMOVE_TODO",s="TOGGLE_TODO",v=function(e){return{type:m,todo:e}},g=function(e){return{type:f,todoId:e}},p=function(e){return{type:s,todoId:e}},E=function(e){return function(t){return window.API.saveTodo(e).then(function(e){t(v(e))}).catch(d)}},h=function(e){return function(t){return t(g(e.id)),window.API.deleteTodo(e.id).catch(function(){d(),t(v(e))})}},b=function(e){return function(t){return t(p(e)),window.API.saveTodoToggle(e).catch(function(){d(),t(p(e))})}},O=n(19),I="RECEIVE_INITIAL_DATA",w=function(e,t){return{type:I,todos:e,goals:t}},T=function(){return function(e){return Promise.all([window.API.fetchTodos(),window.API.fetchGoals()]).then(function(t){var n=Object(O.a)(t,2),o=n[0],r=n[1];e(w(o,r))})}},y="ADD_GOAL",A="REMOVE_GOAL",D="TOGGLE_GOAL",j=function(e){return{type:y,goal:e}},G=function(e){return{type:A,goalId:e}},N=function(e){return{type:D,goalId:e}},P=function(e){return function(t){return window.API.saveGoal(e).then(function(e){t(j(e))}).catch(d)}},L=function(e){return function(t){return t(G(e.id)),window.API.deleteGoal(e.id).catch(function(){d(),t(j(e))})}},k=function(e){return function(t){return t(N(e)),window.API.saveGoalToggle(e).catch(function(){d(),t(N(e))})}},R=Object(c.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return e.concat(t.todo);case f:return e.filter(function(e){return e.id!==t.todoId});case s:return e.map(function(e){return e.id!==t.todoId?e:Object(i.a)({},e,{done:!e.done})});case I:return t.todos;default:return e}},goals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return e.concat(t.goal);case A:return e.filter(function(e){return e.id!==t.goalId});case D:return e.map(function(e){return e.id!==t.goalId?e:Object(i.a)({},e,{achieved:!e.achieved})});case I:return t.goals;default:return e}},loading:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case I:return!1;default:return e}}}),_=n(18),C=Object(c.a)(_.a,function(e){return function(e){return function(t){return t.type===m&&-1!==t.todo.name.indexOf("bitcoin")?alert("Can't add bitcoin related TODOs"):e(t)}}},function(e){return function(t){return function(n){console.group(n.type),console.log("Action: ",n);var o=t(n);return console.log("New state: ",e.getState()),console.groupEnd(),o}}}),S=n(5),x=n(6),M=n(8),V=n(7),J=n(9),W=function(e){function t(){var e,n;Object(S.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(M.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(r)))).addTodo=function(e){e.preventDefault();var t=n.todoNameInput.value.trim();""!==t&&(n.props.onSubmit(t),n.todoNameInput.value="")},n}return Object(J.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.placeholder,o=t.buttonLabel;return r.a.createElement("form",{onSubmit:this.addTodo},r.a.createElement("input",{type:"text",placeholder:n,ref:function(t){return e.todoNameInput=t}}),r.a.createElement("button",{type:"submit"},o))}}]),t}(r.a.Component),B=function(e){var t=e.onRemoveItem;return r.a.createElement("button",{type:"button",className:"button-remove",onClick:t},"X")},F=function(e){var t=e.itemDone,n=e.itemName,o=e.onToggleItem;return r.a.createElement("span",{className:"item-name"+(t?" item-done":""),onClick:o},n)},U=function(e){var t=e.item,n=e.itemDoneProp,o=e.itemNameProp,a=e.onRemoveItem,u=e.onToggleItem;return r.a.createElement("li",null,r.a.createElement(B,{onRemoveItem:function(){return a(t)}}),r.a.createElement(F,{itemDone:t[n||"done"],itemName:t[o||"name"],onToggleItem:function(){return u(t)}}))},X=function(e){var t=e.children;return r.a.createElement("ul",{className:"list-items"},t)},q=Object(l.b)(function(e){return{todos:e.todos}},function(e){return{addTodo:function(t){return e(E(t))},removeTodo:function(t){return e(h(t))},toggleTodo:function(t){return e(b(t.id))}}})(function(e){var t=e.todos,n=e.addTodo,o=e.removeTodo,a=e.toggleTodo;return r.a.createElement("section",null,r.a.createElement("h2",null,"TODO List"),r.a.createElement(W,{onSubmit:n,placeholder:"Write your new TODO",buttonLabel:"Add TODO"}),r.a.createElement(X,null,t.map(function(e){return r.a.createElement(U,{key:e.id,item:e,onRemoveItem:o,onToggleItem:a})})))}),z=Object(l.b)(function(e){return{goals:e.goals}},function(e){return{addGoal:function(t){return e(P(t))},removeGoal:function(t){return e(L(t))},toggleGoal:function(t){return e(k(t.id))}}})(function(e){var t=e.goals,n=e.addGoal,o=e.removeGoal,a=e.toggleGoal;return r.a.createElement("section",null,r.a.createElement("h2",null,"Goal List"),r.a.createElement(W,{onSubmit:n,placeholder:"Write a new goal",buttonLabel:"Add goal"}),r.a.createElement(X,null,t.map(function(e){return r.a.createElement(U,{key:e.id,item:e,itemDoneProp:"achieved",onRemoveItem:o,onToggleItem:a})})))}),H=function(){return r.a.createElement("div",{className:"lds-default"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},K=function(e){function t(){return Object(S.a)(this,t),Object(M.a)(this,Object(V.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.props.receiveInitialData()}},{key:"render",value:function(){var e=this.props.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"UI + Redux"),e&&r.a.createElement(H,null),!e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(z,null)))}}]),t}(r.a.Component),Q=Object(l.b)(function(e){return{loading:e.loading}},function(e){return{receiveInitialData:function(){e(T())}}})(K),Y=Object(c.d)(R,C);u.a.render(r.a.createElement(l.a,{store:Y},r.a.createElement(Q,null)),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.e126aac8.chunk.js.map