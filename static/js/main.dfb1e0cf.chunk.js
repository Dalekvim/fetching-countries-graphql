(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{88:function(e,n,t){"use strict";t.r(n);t(72);var c,r,i,j,a,s=t(2),o=t.n(s),d=t(67),l=t.n(d),b=t(12),u=t(90),O=t(21),h=t(10),x=t(25),g=t(23),p=t(3),f=function(e){var n=e.list;return Object(p.jsx)(p.Fragment,{children:n.map((function(e){var n=e.code,t=e.name;return Object(p.jsx)(O.b,{to:"/country/".concat(n),children:Object(p.jsx)(g.a.Item,{action:!0,children:t},n)})}))})},m=Object(b.gql)(c||(c=Object(x.a)(["\n  {\n    countries {\n      code\n      name\n    }\n  }\n"]))),v=function(){var e=Object(b.useQuery)(m),n=e.loading,t=e.error,c=e.data;if(n)return Object(p.jsx)("p",{children:"Loading..."});if(t)return Object(p.jsx)("p",{children:"Error :("});if(!c)return Object(p.jsx)("p",{children:"No data."});var r=c.countries;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"All Countries Page"}),Object(p.jsx)(f,{list:r})]})},C=Object(b.gql)(r||(r=Object(x.a)(["\n  {\n    continents {\n      code\n      name\n    }\n  }\n"]))),y=function(){var e=Object(b.useQuery)(C),n=e.loading,t=e.error,c=e.data;if(n)return Object(p.jsx)("p",{children:"Loading..."});if(t)return Object(p.jsx)("p",{children:"Error :("});if(!c)return Object(p.jsx)("p",{children:"No data."});var r=c.continents;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Continents Page"}),Object(p.jsx)(g.a,{children:r.map((function(e){var n=e.code,t=e.name;return Object(p.jsx)(O.b,{to:"/countries/".concat(n),children:Object(p.jsx)(g.a.Item,{action:!0,children:t},n)})}))})]})},F=Object(b.gql)(i||(i=Object(x.a)(["\n  query($continentCodes: [String!]!) {\n    countries(filter: { continent: { in: $continentCodes } }) {\n      code\n      name\n    }\n  }\n"]))),L=function(){var e=Object(h.f)().continentCode,n=Object(b.useQuery)(F,{variables:{continentCodes:[e]}}),t=n.loading,c=n.error,r=n.data;if(t)return Object(p.jsx)("p",{children:"Loading..."});if(c)return Object(p.jsx)("p",{children:"Error :("});if(!r)return Object(p.jsx)("p",{children:"No data."});var i=r.countries;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h1",{children:["Countries in ",e," Page"]}),Object(p.jsx)(f,{list:i})]})},I=function(e){var n=e.list;return Object(p.jsx)(p.Fragment,{children:n.map((function(e){var n=e.code,t=e.name;return Object(p.jsx)(g.a.Item,{children:t},n)}))})},P=Object(b.gql)(j||(j=Object(x.a)(["\n  query($countryCode: ID!) {\n    country(code: $countryCode) {\n      name\n      native\n      phone\n      continent {\n        name\n      }\n      capital\n      currency\n      languages {\n        code\n        name\n      }\n    }\n  }\n"]))),q=function(){var e=Object(h.f)().countryCode,n=Object(b.useQuery)(P,{variables:{countryCode:e}}),t=n.loading,c=n.error,r=n.data;if(t)return Object(p.jsx)("p",{children:"Loading..."});if(c)return Object(p.jsx)("p",{children:"Error :("});if(!r)return Object(p.jsx)("p",{children:"No data."});var i=r.country,j=i.name,a=i.native,s=i.phone,o=i.continent,d=i.capital,l=i.currency,u=i.languages;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h1",{children:[j," Page"]}),Object(p.jsxs)("h2",{children:["Native: ",a]}),Object(p.jsxs)("p",{children:["Phone: ",s]}),Object(p.jsxs)("p",{children:["Continent: ",o.name]}),Object(p.jsxs)("p",{children:["Capital: ",d]}),Object(p.jsxs)("p",{children:["Currency: ",l]}),Object(p.jsxs)("div",{className:"Languages",children:[Object(p.jsx)("h3",{children:"Languages:"}),Object(p.jsx)(I,{list:u})]})]})},N=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Home Page"}),Object(p.jsxs)(g.a,{children:[Object(p.jsx)(O.b,{to:"/continents",children:Object(p.jsx)(g.a.Item,{action:!0,children:"Continents"})}),Object(p.jsx)(O.b,{to:"/countries",children:Object(p.jsx)(g.a.Item,{action:!0,children:"Countries"})}),Object(p.jsx)(O.b,{to:"/languages",children:Object(p.jsx)(g.a.Item,{action:!0,children:"Languages"})})]})]})},E=Object(b.gql)(a||(a=Object(x.a)(["\n  {\n    languages {\n      code\n      name\n    }\n  }\n"]))),Q=function(){var e=Object(b.useQuery)(E),n=e.loading,t=e.error,c=e.data;if(n)return Object(p.jsx)("p",{children:"Loading..."});if(t)return Object(p.jsx)("p",{children:"Error :("});if(!c)return Object(p.jsx)("p",{children:"No data."});var r=c.languages;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Languages Page"}),Object(p.jsx)(I,{list:r})]})},w=function(){return Object(p.jsx)(O.a,{children:Object(p.jsxs)(h.c,{children:[Object(p.jsx)(h.a,{path:"/languages",children:Object(p.jsx)(Q,{})}),Object(p.jsx)(h.a,{path:"/country/:countryCode",children:Object(p.jsx)(q,{})}),Object(p.jsx)(h.a,{path:"/countries/:continentCode",children:Object(p.jsx)(L,{})}),Object(p.jsx)(h.a,{path:"/countries",children:Object(p.jsx)(v,{})}),Object(p.jsx)(h.a,{path:"/continents",children:Object(p.jsx)(y,{})}),Object(p.jsx)(h.a,{path:"/",children:Object(p.jsx)(N,{})})]})})},$=function(){return Object(p.jsx)(u.a,{children:Object(p.jsx)(w,{})})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,91)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,j=n.getTTFB;t(e),c(e),r(e),i(e),j(e)}))},S=new b.ApolloClient({uri:"https://countries.trevorblades.com",cache:new b.InMemoryCache});l.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(b.ApolloProvider,{client:S,children:Object(p.jsx)($,{})})}),document.getElementById("root")),A()}},[[88,1,2]]]);
//# sourceMappingURL=main.dfb1e0cf.chunk.js.map