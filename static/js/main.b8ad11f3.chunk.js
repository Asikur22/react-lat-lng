(window["webpackJsonpreact-lat-lng"]=window["webpackJsonpreact-lat-lng"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),l=a.n(s),o=a(2),c=a(3),i=a(5),u=a(4),m=a(6),d=a(18),p=a.n(d),h=a(7),g=a.n(h),b=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"alert alert-info",role:"alert"},r.a.createElement("h2",null,"Get Latitude and Longitude from Address")))}}]),t}(n.Component),f=a(19),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChangeInput=function(e){var t=e.target.value;a.setState(Object(f.a)({},e.target.name,t)),0===t.length?a.setState({error:a.errormessage}):a.setState({error:""})},a.onSubmitForm=function(e){e.preventDefault();var t=a.state.address,n=a.state.api;if(t.length>0&&n.length>0){a.setState({error:""});var r=encodeURI(t);a.props.getAddress(r,n),a.setState({address:""})}else a.setState({error:a.errormessage})},a.state={address:"",apiStatus:a.props.apiStatus,api:g.a.get("api")?g.a.get("api"):"",error:"",results:""},a.errormessage=r.a.createElement("div",{className:"invalid-feedback",style:{display:"block"}},"Both Fields are required!"),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){e.apiStatus!==this.props.apiStatus&&!0!==this.props.apiStatus&&this.setState({api:"",apiStatus:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",null,"Plz type your Google Map API Key and Address then hit enter to get location details. Get a Google API Key"," ",r.a.createElement("a",{className:"text-info",target:"_blank",rel:"noopener noreferrer",href:"https://developers.google.com/maps/documentation/javascript/get-api-key"},"Here")),r.a.createElement("form",{className:"form-inline",onSubmit:this.onSubmitForm},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",name:"api",placeholder:"Google Map API...","aria-label":"Google Map API",onChange:this.onChangeInput,value:this.state.api,autoComplete:"on"}),r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",name:"address",placeholder:"Address...","aria-label":"Address",onChange:this.onChangeInput,value:this.state.address}),r.a.createElement("input",{className:"btn btn-info my-2 my-sm-0 px-5",value:"Find",type:"submit"}),this.state.error)))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.results;if("OK"===e.status){var t=e.results[0],a=t.formatted_address,n=t.geometry.location,s=n.lat,l=n.lng;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"alert alert-info",role:"alert"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-bordered mb-0"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Address:"),r.a.createElement("td",null,a)),r.a.createElement("tr",null,r.a.createElement("th",null,"Latitude:"),r.a.createElement("td",null,s)),r.a.createElement("tr",null,r.a.createElement("th",null,"Longitude:"),r.a.createElement("td",null,l)))))))}return e.error_message?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert"},e.error_message)):r.a.Fragment}}]),t}(n.Component),j=(a(42),a(43),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getLatLng=function(e,t){var n="https://maps.google.com/maps/api/geocode/json?address=".concat(e,"=&key=").concat(t);p.a.get(n).then((function(e){console.log(e.data),a.setState({results:e.data}),"undefined"!==typeof e.data.error_message?a.setState({apiStatus:!1}):g.a.set("api",t)})).catch((function(e){console.log(e)}))},a.state={results:"",apiStatus:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(v,{getAddress:this.getLatLng,apiStatus:this.state.apiStatus}),r.a.createElement(E,{results:this.state.results}))}}]),t}(n.Component));l.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b8ad11f3.chunk.js.map