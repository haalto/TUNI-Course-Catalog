(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(13),o=a.n(i),c=a(3),l=a(2),d=a(14),s=a.n(d),u=function(e){return s.a.get("".concat("http://localhost:3001/api/faculty/").concat(e)).then(function(e){return e.data})},h=function(e){var t=e.facultyName,a=e.facultyId,r=e.handleFacultyClick;return n.a.createElement("button",{className:"btn btn-primary m-4",onClick:function(){return r(a)}},t)},m=function(){return n.a.createElement("div",{className:"alert alert-danger"},n.a.createElement("p",null,"This is the first version of the TUNI Unofficial Course Catalog. The data used by this application is (atleast to my knowledge) only available for four faculties and Tampere University Language Centre. The data is very limited in details and it might contain incorrect information regarding course details, so please be aware of that and double check the course infromation from the official site."),n.a.createElement("p",null,"The courses are sorted by their course code which represents the degree they are related. Site is still under construction. I will check for more filtering options and add a link to the source code later."))},f=function(e){var t=e.filter,a=e.handleFilterChange;return n.a.createElement("div",{className:"mt-5"},n.a.createElement("div",null,"Filter by course name ",n.a.createElement("input",{value:t,onChange:a})))},p=function(e){var t=e.course,a=e.handleShowDetails,r=e.period,i=t.id,o=t.name,c=t.code,l=t.credits,d=t.showDetails,s=t.activityPeriods;return n.a.createElement("div",null,n.a.createElement("button",{className:"btn btn-outline-primary m-1",onClick:function(){return a(i,r)}},c," ",o," ",l.max," op"),n.a.createElement("div",null,d?n.a.createElement("div",null,n.a.createElement("div",{className:"alert alert-info"},n.a.createElement("p",null,"Starting date: ",s[0].startDate),n.a.createElement("p",null,"End date: ",s[0].endDate))):""))},P=function(e){var t=e.filter,a=e.courses,r=e.handleShowDetails;return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h3",null,"First period"),a.firstPeriod.sort(function(e,t){return e.code<t.code?-1:e.code>t.code?1:0}).map(function(e){return""===t?n.a.createElement("div",{key:"".concat(e.id,"-firstPeriod")},n.a.createElement(p,{period:1,course:e,handleShowDetails:r})):e.name.toUpperCase().indexOf(t.toUpperCase())>-1?n.a.createElement("div",{key:"".concat(e.id,"-firstPeriod")},n.a.createElement(p,{period:1,course:e,handleShowDetails:r})):null}),n.a.createElement("h3",null,"Second period"),a.secondPeriod.sort(function(e,t){return e.code<t.code?-1:e.code>t.code?1:0}).map(function(e){return""===t?n.a.createElement("div",{key:"".concat(e.id,"-secondPeriod")},n.a.createElement(p,{period:2,course:e,handleShowDetails:r})):e.name.toUpperCase().indexOf(t.toUpperCase())>-1?n.a.createElement("div",{key:"".concat(e.id,"-secondPeriod")},n.a.createElement(p,{period:2,course:e,handleShowDetails:r})):null}),n.a.createElement("h3",null,"Third period"),a.thirdPeriod.sort(function(e,t){return e.code<t.code?-1:e.code>t.code?1:0}).map(function(e){return""===t?n.a.createElement("div",{key:"".concat(e.id,"-thirdPeriod")},n.a.createElement(p,{period:3,course:e,handleShowDetails:r})):e.name.toUpperCase().indexOf(t.toUpperCase())>-1?n.a.createElement("div",{key:"".concat(e.id,"-thirdPeriod")},n.a.createElement(p,{period:3,course:e,handleShowDetails:r})):null}),n.a.createElement("h3",null,"Fourth period"),a.fourthPeriod.sort(function(e,t){return e.code<t.code?-1:e.code>t.code?1:0}).map(function(e){return""===t?n.a.createElement("div",{key:"".concat(e.id,"-fourthPeriod")},n.a.createElement(p,{period:4,course:e,handleShowDetails:r})):e.name.toUpperCase().indexOf(t.toUpperCase())>-1?n.a.createElement("div",{key:"".concat(e.id,"-fourthPeriod")},n.a.createElement(p,{period:4,course:e,handleShowDetails:r})):null}))},E=function(e){var t=e.isLoading,a=e.activeFaculty,r=e.facultyIds,i=e.handleFacultyClick,o=e.handleShowDetails,c=e.handleFilterChange,l=e.courses,d=e.filter,s=e.showCatalog;return n.a.createElement("div",{className:"container"},n.a.createElement("div",null,n.a.createElement(m,null),n.a.createElement(h,{facultyName:"ITC",facultyId:r[0],handleFacultyClick:i}),n.a.createElement(h,{facultyName:"MAB",facultyId:r[1],handleFacultyClick:i}),n.a.createElement(h,{facultyName:"EDU",facultyId:r[2],handleFacultyClick:i}),n.a.createElement(h,{facultyName:"LC",facultyId:r[3],handleFacultyClick:i}),n.a.createElement(h,{facultyName:"SOC",facultyId:r[4],handleFacultyClick:i})),t?n.a.createElement("div",{className:"alert alert-warning"},"Loading..."):"",s?n.a.createElement("div",null,n.a.createElement("h2",null,a),n.a.createElement(f,{filter:d,handleFilterChange:c}),n.a.createElement(P,{courses:l,handleShowDetails:o,filter:d})):"Please pick a faculty above")},y=function(){var e=Object(r.useState)({firstPeriod:[],secondPeriod:[],thirdPeriod:[],fourthPeriod:[]}),t=Object(l.a)(e,2),a=t[0],i=t[1],o=Object(r.useState)(""),d=Object(l.a)(o,2),s=d[0],h=d[1],m=Object(r.useState)(!1),f=Object(l.a)(m,2),p=f[0],P=f[1],y=Object(r.useState)(""),w=Object(l.a)(y,2),v=w[0],g=w[1],D=Object(r.useState)(!1),C=Object(l.a)(D,2),b=C[0],S=C[1];return n.a.createElement("div",{className:"container"},n.a.createElement(E,{facultyIds:["ITC","MAB","EDU","LC","SOC"],handleFacultyClick:function(e){S(!0),u(e).then(function(t){var a={firstPeriod:[],secondPeriod:[],thirdPeriod:[],fourthPeriod:[]};t.forEach(function(e){var t=new Date(e.activityPeriods[0].startDate).getTime(),r=new Date(e.activityPeriods[0].endDate).getTime(),n=Object(c.a)({},e,{showDetails:!1});t<new Date("2019-10-20").getTime()&&a.firstPeriod.push(n),(t>=new Date("2019-10-21").getTime()&&t<=new Date("2019-12-30").getTime()||r>=new Date("2020-10-21").getTime()&&t<=new Date("2019-10-20").getTime())&&a.secondPeriod.push(n),(t>=new Date("2020-01-01").getTime()&&t<=new Date("2020-03-01").getTime()||r>=new Date("2020-03-01").getTime()&&t<=new Date("2020-01-01").getTime())&&a.thirdPeriod.push(n),t>=new Date("2020-03-02").getTime()&&a.fourthPeriod.push(n)}),"ITC"===e?g("Faculty of Information and Technology and Communication Sciences"):"MAB"===e?g("Faculty of Management and Business"):"EDU"===e?g("Faculty of Education and Culture"):"LC"===e?g("Language Centre"):"SOC"===e&&g("Faculty of Social Sciences"),S(!1),i(a),P(!0)}).catch(function(e){console.log(e)})},handleShowDetails:function(e,t){if(1===t){var r={secondPeriod:a.secondPeriod,thirdPeriod:a.thirdPeriod,fourthPeriod:a.fourthPeriod,firstPeriod:a.firstPeriod.map(function(t){return t.id===e?Object(c.a)({},t,{showDetails:!t.showDetails}):t})};i(r)}else if(2===t){var n={firstPeriod:a.firstPeriod,thirdPeriod:a.thirdPeriod,fourthPeriod:a.fourthPeriod,secondPeriod:a.secondPeriod.map(function(t){return t.id===e?Object(c.a)({},t,{showDetails:!t.showDetails}):t})};i(n)}else if(3===t){var o={secondPeriod:a.secondPeriod,firstPeriod:a.firstPeriod,fourthPeriod:a.fourthPeriod,thirdPeriod:a.thirdPeriod.map(function(t){return t.id===e?Object(c.a)({},t,{showDetails:!t.showDetails}):t})};i(o)}else{var l={secondPeriod:a.secondPeriod,thirdPeriod:a.thirdPeriod,firstPeriod:a.firstPeriod,fourthPeriod:a.fourthtPeriod.map(function(t){return t.id===e?Object(c.a)({},t,{showDetails:!t.showDetails}):t})};i(l)}},handleFilterChange:function(e){h(e.target.value)},courses:a,filter:s,showCatalog:p,activeFaculty:v,isLoading:b}))};o.a.render(n.a.createElement(y,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.703fe5e6.chunk.js.map