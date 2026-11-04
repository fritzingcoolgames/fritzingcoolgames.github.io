import{Aa as U,Ba as I2,Ca as O2,Da as F2,Ea as x,Fa as S,Ga as _2,Ha as y1,Ia as E2,Ja as T2,K as W1,Ka as D2,L as S2,La as h,Ma as y,Na as q2,P as K,Ra as u1,Sa as j2,Ta as e1,U as N2,Ua as A,Xa as R2,Y as h1,a as L2,aa as w2,b as C2,ba as W,bb as $2,ca as p,eb as W2,gb as H,ha as Z,ia as k2,ja as P2,oa as m1,pa as Q,qa as a1,ra as B1,sa as B,ta as G,ua as q,va as v,wa as b,xa as t1,ya as A2,za as x1}from"./chunk-R3EC7UHP.js";function X1(a,c){(c==null||c>a.length)&&(c=a.length);for(var e=0,n=Array(c);e<c;e++)n[e]=a[e];return n}function X4(a){if(Array.isArray(a))return a}function J4(a){if(Array.isArray(a))return X1(a)}function K4(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function B2(a,c){for(var e=0;e<c.length;e++){var n=c[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,x3(n.key),n)}}function Z4(a,c,e){return c&&B2(a.prototype,c),e&&B2(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function w1(a,c){var e=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!e){if(Array.isArray(a)||(e=s2(a))||c&&a&&typeof a.length=="number"){e&&(a=e);var n=0,l=function(){};return{s:l,n:function(){return n>=a.length?{done:!0}:{done:!1,value:a[n++]}},e:function(o){throw o},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,t=!0,r=!1;return{s:function(){e=e.call(a)},n:function(){var o=e.next();return t=o.done,o},e:function(o){r=!0,i=o},f:function(){try{t||e.return==null||e.return()}finally{if(r)throw i}}}}function z(a,c,e){return(c=x3(c))in a?Object.defineProperty(a,c,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[c]=e,a}function Q4(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function a5(a,c){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var n,l,i,t,r=[],o=!0,s=!1;try{if(i=(e=e.call(a)).next,c===0){if(Object(e)!==e)return;o=!1}else for(;!(o=(n=i.call(e)).done)&&(r.push(n.value),r.length!==c);o=!0);}catch(u){s=!0,l=u}finally{try{if(!o&&e.return!=null&&(t=e.return(),Object(t)!==t))return}finally{if(s)throw l}}return r}}function e5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G2(a,c){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);c&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable})),e.push.apply(e,n)}return e}function f(a){for(var c=1;c<arguments.length;c++){var e=arguments[c]!=null?arguments[c]:{};c%2?G2(Object(e),!0).forEach(function(n){z(a,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):G2(Object(e)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))})}return a}function F1(a,c){return X4(a)||a5(a,c)||s2(a,c)||e5()}function E(a){return J4(a)||Q4(a)||s2(a)||c5()}function n5(a,c){if(typeof a!="object"||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var n=e.call(a,c||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}function x3(a){var c=n5(a,"string");return typeof c=="symbol"?c:c+""}function A1(a){"@babel/helpers - typeof";return A1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},A1(a)}function s2(a,c){if(a){if(typeof a=="string")return X1(a,c);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?X1(a,c):void 0}}var U2=function(){},m2={},y3={},L3=null,C3={mark:U2,measure:U2};try{typeof window<"u"&&(m2=window),typeof document<"u"&&(y3=document),typeof MutationObserver<"u"&&(L3=MutationObserver),typeof performance<"u"&&(C3=performance)}catch{}var l5=m2.navigator||{},H2=l5.userAgent,Y2=H2===void 0?"":H2,V=m2,L=y3,V2=L3,L1=C3,c7=!!V.document,$=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",S3=~Y2.indexOf("MSIE")||~Y2.indexOf("Trident/"),C1,i5=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,t5=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,N3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},r5={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},w3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],k="classic",v1="duotone",k3="sharp",P3="sharp-duotone",A3="chisel",I3="etch",O3="graphite",F3="jelly",_3="jelly-duo",E3="jelly-fill",T3="mosaic",D3="notdog",q3="notdog-duo",j3="pixel",R3="slab",$3="slab-duo",W3="slab-press",B3="slab-press-duo",G3="thumbprint",U3="utility",H3="utility-duo",Y3="utility-fill",V3="vellum",X3="whiteboard",o5="Classic",f5="Duotone",s5="Sharp",m5="Sharp Duotone",u5="Chisel",d5="Etch",z5="Graphite",p5="Jelly",b5="Jelly Duo",v5="Jelly Fill",M5="Mosaic",g5="Notdog",h5="Notdog Duo",x5="Pixel",y5="Slab",L5="Slab Duo",C5="Slab Press",S5="Slab Press Duo",N5="Thumbprint",w5="Utility",k5="Utility Duo",P5="Utility Fill",A5="Vellum",I5="Whiteboard",J3=[k,v1,k3,P3,A3,I3,O3,F3,_3,E3,T3,D3,q3,j3,R3,$3,W3,B3,G3,U3,H3,Y3,V3,X3],n7=(C1={},z(z(z(z(z(z(z(z(z(z(C1,k,o5),v1,f5),k3,s5),P3,m5),A3,u5),I3,d5),O3,z5),F3,p5),_3,b5),E3,v5),z(z(z(z(z(z(z(z(z(z(C1,T3,M5),D3,g5),q3,h5),j3,x5),R3,y5),$3,L5),W3,C5),B3,S5),G3,N5),U3,w5),z(z(z(z(C1,H3,k5),Y3,P5),V3,A5),X3,I5)),O5={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},F5={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},_5=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),E5={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},K3=["fak","fa-kit","fakd","fa-kit-duotone"],X2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},T5=["kit"],D5="kit",q5="kit-duotone",j5="Kit",R5="Kit Duotone",l7=z(z({},D5,j5),q5,R5),$5={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},W5={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},B5={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},J2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},S1,N1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},G5=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],U5="classic",H5="duotone",Y5="sharp",V5="sharp-duotone",X5="chisel",J5="etch",K5="graphite",Z5="jelly",Q5="jelly-duo",a6="jelly-fill",e6="mosaic",c6="notdog",n6="notdog-duo",l6="pixel",i6="slab",t6="slab-duo",r6="slab-press",o6="slab-press-duo",f6="thumbprint",s6="utility",m6="utility-duo",u6="utility-fill",d6="vellum",z6="whiteboard",p6="Classic",b6="Duotone",v6="Sharp",M6="Sharp Duotone",g6="Chisel",h6="Etch",x6="Graphite",y6="Jelly",L6="Jelly Duo",C6="Jelly Fill",S6="Mosaic",N6="Notdog",w6="Notdog Duo",k6="Pixel",P6="Slab",A6="Slab Duo",I6="Slab Press",O6="Slab Press Duo",F6="Thumbprint",_6="Utility",E6="Utility Duo",T6="Utility Fill",D6="Vellum",q6="Whiteboard",i7=(S1={},z(z(z(z(z(z(z(z(z(z(S1,U5,p6),H5,b6),Y5,v6),V5,M6),X5,g6),J5,h6),K5,x6),Z5,y6),Q5,L6),a6,C6),z(z(z(z(z(z(z(z(z(z(S1,e6,S6),c6,N6),n6,w6),l6,k6),i6,P6),t6,A6),r6,I6),o6,O6),f6,F6),s6,_6),z(z(z(z(S1,m6,E6),u6,T6),d6,D6),z6,q6)),j6="kit",R6="kit-duotone",$6="Kit",W6="Kit Duotone",t7=z(z({},j6,$6),R6,W6),B6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},G6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},J1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},U6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Z3=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(G5,U6),H6=["solid","regular","light","thin","duotone","brands","semibold"],Q3=[1,2,3,4,5,6,7,8,9,10],Y6=Q3.concat([11,12,13,14,15,16,17,18,19,20]),V6=["aw","fw","pull-left","pull-right"],X6=[].concat(E(Object.keys(G6)),H6,V6,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",N1.GROUP,N1.SWAP_OPACITY,N1.PRIMARY,N1.SECONDARY]).concat(Q3.map(function(a){return"".concat(a,"x")})).concat(Y6.map(function(a){return"w-".concat(a)})),J6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},j="___FONT_AWESOME___",K1=16,a4="fa",e4="svg-inline--fa",n1="data-fa-i2svg",Z1="data-fa-pseudo-element",K6="data-fa-pseudo-element-pending",u2="data-prefix",d2="data-icon",K2="fontawesome-i2svg",Z6="async",Q6=["HTML","HEAD","STYLE","SCRIPT"],c4=["::before","::after",":before",":after"],n4=(function(){try{return!0}catch{return!1}})();function M1(a){return new Proxy(a,{get:function(e,n){return n in e?e[n]:e[k]}})}var l4=f({},N3);l4[k]=f(f(f(f({},{"fa-duotone":"duotone"}),N3[k]),X2.kit),X2["kit-duotone"]);var a0=M1(l4),Q1=f({},E5);Q1[k]=f(f(f(f({},{duotone:"fad"}),Q1[k]),J2.kit),J2["kit-duotone"]);var Z2=M1(Q1),a2=f({},J1);a2[k]=f(f({},a2[k]),B5.kit);var z2=M1(a2),e2=f({},B6);e2[k]=f(f({},e2[k]),$5.kit);var r7=M1(e2),e0=i5,i4="fa-layers-text",c0=t5,n0=f({},O5),o7=M1(n0),l0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G1=r5,i0=[].concat(E(T5),E(X6)),z1=V.FontAwesomeConfig||{};function t0(a){var c=L.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function r0(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}L&&typeof L.querySelector=="function"&&(Q2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Q2.forEach(function(a){var c=F1(a,2),e=c[0],n=c[1],l=r0(t0(e));l!=null&&(z1[n]=l)}));var Q2,t4={styleDefault:"solid",familyDefault:k,cssPrefix:a4,replacementClass:e4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z1.familyPrefix&&(z1.cssPrefix=z1.familyPrefix);var f1=f(f({},t4),z1);f1.autoReplaceSvg||(f1.observeMutations=!1);var d={};Object.keys(t4).forEach(function(a){Object.defineProperty(d,a,{enumerable:!0,set:function(e){f1[a]=e,p1.forEach(function(n){return n(d)})},get:function(){return f1[a]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(c){f1.cssPrefix=c,p1.forEach(function(e){return e(d)})},get:function(){return f1.cssPrefix}});V.FontAwesomeConfig=d;var p1=[];function o0(a){return p1.push(a),function(){p1.splice(p1.indexOf(a),1)}}var Y=K1,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function f0(a){if(!(!a||!$)){var c=L.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var e=L.head.childNodes,n=null,l=e.length-1;l>-1;l--){var i=e[l],t=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(n=i)}return L.head.insertBefore(c,n),a}}var s0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function a3(){for(var a=12,c="";a-- >0;)c+=s0[Math.random()*62|0];return c}function s1(a){for(var c=[],e=(a||[]).length>>>0;e--;)c[e]=a[e];return c}function p2(a){return a.classList?s1(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function r4(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m0(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,'="').concat(r4(a[e]),'" ')},"").trim()}function _1(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,": ").concat(a[e].trim(),";")},"")}function b2(a){return a.size!==T.size||a.x!==T.x||a.y!==T.y||a.rotate!==T.rotate||a.flipX||a.flipY}function u0(a){var c=a.transform,e=a.containerWidth,n=a.iconWidth,l={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(c.x*32,", ").concat(c.y*32,") "),t="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),r="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(i," ").concat(t," ").concat(r)},s={transform:"translate(".concat(n/2*-1," -256)")};return{outer:l,inner:o,path:s}}function d0(a){var c=a.transform,e=a.width,n=e===void 0?K1:e,l=a.height,i=l===void 0?K1:l,t=a.startCentered,r=t===void 0?!1:t,o="";return r&&S3?o+="translate(".concat(c.x/Y-n/2,"em, ").concat(c.y/Y-i/2,"em) "):r?o+="translate(calc(-50% + ".concat(c.x/Y,"em), calc(-50% + ").concat(c.y/Y,"em)) "):o+="translate(".concat(c.x/Y,"em, ").concat(c.y/Y,"em) "),o+="scale(".concat(c.size/Y*(c.flipX?-1:1),", ").concat(c.size/Y*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var z0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function o4(){var a=a4,c=e4,e=d.cssPrefix,n=d.replacementClass,l=z0;if(e!==a||n!==c){var i=new RegExp("\\.".concat(a,"\\-"),"g"),t=new RegExp("\\--".concat(a,"\\-"),"g"),r=new RegExp("\\.".concat(c),"g");l=l.replace(i,".".concat(e,"-")).replace(t,"--".concat(e,"-")).replace(r,".".concat(n))}return l}var e3=!1;function U1(){d.autoAddCss&&!e3&&(f0(o4()),e3=!0)}var p0={mixout:function(){return{dom:{css:o4,insertCss:U1}}},hooks:function(){return{beforeDOMElementCreation:function(){U1()},beforeI2svg:function(){U1()}}}},R=V||{};R[j]||(R[j]={});R[j].styles||(R[j].styles={});R[j].hooks||(R[j].hooks={});R[j].shims||(R[j].shims=[]);var _=R[j],f4=[],s4=function(){L.removeEventListener("DOMContentLoaded",s4),I1=1,f4.map(function(c){return c()})},I1=!1;$&&(I1=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),I1||L.addEventListener("DOMContentLoaded",s4));function b0(a){$&&(I1?setTimeout(a,0):f4.push(a))}function g1(a){var c=a.tag,e=a.attributes,n=e===void 0?{}:e,l=a.children,i=l===void 0?[]:l;return typeof a=="string"?r4(a):"<".concat(c," ").concat(m0(n),">").concat(i.map(g1).join(""),"</").concat(c,">")}function c3(a,c,e){if(a&&a[c]&&a[c][e])return{prefix:c,iconName:e,icon:a[c][e]}}var v0=function(c,e){return function(n,l,i,t){return c.call(e,n,l,i,t)}},H1=function(c,e,n,l){var i=Object.keys(c),t=i.length,r=l!==void 0?v0(e,l):e,o,s,u;for(n===void 0?(o=1,u=c[i[0]]):(o=0,u=n);o<t;o++)s=i[o],u=r(u,c[s],s,c);return u};function m4(a){return E(a).length!==1?null:a.codePointAt(0).toString(16)}function n3(a){return Object.keys(a).reduce(function(c,e){var n=a[e],l=!!n.icon;return l?c[n.iconName]=n.icon:c[e]=n,c},{})}function c2(a,c){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.skipHooks,l=n===void 0?!1:n,i=n3(c);typeof _.hooks.addPack=="function"&&!l?_.hooks.addPack(a,n3(c)):_.styles[a]=f(f({},_.styles[a]||{}),i),a==="fas"&&c2("fa",c)}var b1=_.styles,M0=_.shims,u4=Object.keys(z2),g0=u4.reduce(function(a,c){return a[c]=Object.keys(z2[c]),a},{}),v2=null,d4={},z4={},p4={},b4={},v4={};function h0(a){return~i0.indexOf(a)}function x0(a,c){var e=c.split("-"),n=e[0],l=e.slice(1).join("-");return n===a&&l!==""&&!h0(l)?l:null}var M4=function(){var c=function(i){return H1(b1,function(t,r,o){return t[o]=H1(r,i,{}),t},{})};d4=c(function(l,i,t){if(i[3]&&(l[i[3]]=t),i[2]){var r=i[2].filter(function(o){return typeof o=="number"});r.forEach(function(o){l[o.toString(16)]=t})}return l}),z4=c(function(l,i,t){if(l[t]=t,i[2]){var r=i[2].filter(function(o){return typeof o=="string"});r.forEach(function(o){l[o]=t})}return l}),v4=c(function(l,i,t){var r=i[2];return l[t]=t,r.forEach(function(o){l[o]=t}),l});var e="far"in b1||d.autoFetchSvg,n=H1(M0,function(l,i){var t=i[0],r=i[1],o=i[2];return r==="far"&&!e&&(r="fas"),typeof t=="string"&&(l.names[t]={prefix:r,iconName:o}),typeof t=="number"&&(l.unicodes[t.toString(16)]={prefix:r,iconName:o}),l},{names:{},unicodes:{}});p4=n.names,b4=n.unicodes,v2=E1(d.styleDefault,{family:d.familyDefault})};o0(function(a){v2=E1(a.styleDefault,{family:d.familyDefault})});M4();function M2(a,c){return(d4[a]||{})[c]}function y0(a,c){return(z4[a]||{})[c]}function c1(a,c){return(v4[a]||{})[c]}function g4(a){return p4[a]||{prefix:null,iconName:null}}function L0(a){var c=b4[a],e=M2("fas",a);return c||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function X(){return v2}var h4=function(){return{prefix:null,iconName:null,rest:[]}};function C0(a){var c=k,e=u4.reduce(function(n,l){return n[l]="".concat(d.cssPrefix,"-").concat(l),n},{});return J3.forEach(function(n){(a.includes(e[n])||a.some(function(l){return g0[n].includes(l)}))&&(c=n)}),c}function E1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.family,n=e===void 0?k:e,l=a0[n][a];if(n===v1&&!a)return"fad";var i=Z2[n][a]||Z2[n][l],t=a in _.styles?a:null,r=i||t||null;return r}function S0(a){var c=[],e=null;return a.forEach(function(n){var l=x0(d.cssPrefix,n);l?e=l:n&&c.push(n)}),{iconName:e,rest:c}}function l3(a){return a.sort().filter(function(c,e,n){return n.indexOf(c)===e})}var i3=Z3.concat(K3);function T1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.skipLookups,n=e===void 0?!1:e,l=null,i=l3(a.filter(function(M){return i3.includes(M)})),t=l3(a.filter(function(M){return!i3.includes(M)})),r=i.filter(function(M){return l=M,!w3.includes(M)}),o=F1(r,1),s=o[0],u=s===void 0?null:s,m=C0(i),g=f(f({},S0(t)),{},{prefix:E1(u,{family:m})});return f(f(f({},g),P0({values:a,family:m,styles:b1,config:d,canonical:g,givenPrefix:l})),N0(n,l,g))}function N0(a,c,e){var n=e.prefix,l=e.iconName;if(a||!n||!l)return{prefix:n,iconName:l};var i=c==="fa"?g4(l):{},t=c1(n,l);return l=i.iconName||t||l,n=i.prefix||n,n==="far"&&!b1.far&&b1.fas&&!d.autoFetchSvg&&(n="fas"),{prefix:n,iconName:l}}var w0=J3.filter(function(a){return a!==k||a!==v1}),k0=Object.keys(J1).filter(function(a){return a!==k}).map(function(a){return Object.keys(J1[a])}).flat();function P0(a){var c=a.values,e=a.family,n=a.canonical,l=a.givenPrefix,i=l===void 0?"":l,t=a.styles,r=t===void 0?{}:t,o=a.config,s=o===void 0?{}:o,u=e===v1,m=c.includes("fa-duotone")||c.includes("fad"),g=s.familyDefault==="duotone",M=n.prefix==="fad"||n.prefix==="fa-duotone";if(!u&&(m||g||M)&&(n.prefix="fad"),(c.includes("fa-brands")||c.includes("fab"))&&(n.prefix="fab"),!n.prefix&&w0.includes(e)){var N=Object.keys(r).find(function(P){return k0.includes(P)});if(N||s.autoFetchSvg){var C=_5.get(e).defaultShortPrefixId;n.prefix=C,n.iconName=c1(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=X()||"fas"),n}var A0=(function(){function a(){K4(this,a),this.definitions={}}return Z4(a,[{key:"add",value:function(){for(var e=this,n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];var t=l.reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(r){e.definitions[r]=f(f({},e.definitions[r]||{}),t[r]),c2(r,t[r]);var o=z2[k][r];o&&c2(o,t[r]),M4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var l=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(l).map(function(i){var t=l[i],r=t.prefix,o=t.iconName,s=t.icon,u=s[2];e[r]||(e[r]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(e[r][m]=s)}),e[r][o]=s}),e}}])})(),t3=[],r1={},o1={},I0=Object.keys(o1);function O0(a,c){var e=c.mixoutsTo;return t3=a,r1={},Object.keys(o1).forEach(function(n){I0.indexOf(n)===-1&&delete o1[n]}),t3.forEach(function(n){var l=n.mixout?n.mixout():{};if(Object.keys(l).forEach(function(t){typeof l[t]=="function"&&(e[t]=l[t]),A1(l[t])==="object"&&Object.keys(l[t]).forEach(function(r){e[t]||(e[t]={}),e[t][r]=l[t][r]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(t){r1[t]||(r1[t]=[]),r1[t].push(i[t])})}n.provides&&n.provides(o1)}),e}function n2(a,c){for(var e=arguments.length,n=new Array(e>2?e-2:0),l=2;l<e;l++)n[l-2]=arguments[l];var i=r1[a]||[];return i.forEach(function(t){c=t.apply(null,[c].concat(n))}),c}function l1(a){for(var c=arguments.length,e=new Array(c>1?c-1:0),n=1;n<c;n++)e[n-1]=arguments[n];var l=r1[a]||[];l.forEach(function(i){i.apply(null,e)})}function J(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return o1[a]?o1[a].apply(null,c):void 0}function l2(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,e=a.prefix||X();if(c)return c=c1(e,c)||c,c3(x4.definitions,e,c)||c3(_.styles,e,c)}var x4=new A0,F0=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,l1("noAuto")},_0={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(l1("beforeI2svg",c),J("pseudoElements2svg",c),J("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,b0(function(){T0({autoReplaceSvgRoot:e}),l1("watch",c)})}},E0={icon:function(c){if(c===null)return null;if(A1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:c1(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],n=E1(c[0]);return{prefix:n,iconName:c1(n,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(d.cssPrefix,"-"))>-1||c.match(e0))){var l=T1(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||X(),iconName:c1(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){var i=X();return{prefix:i,iconName:c1(i,c)||c}}}},O={noAuto:F0,config:d,dom:_0,parse:E0,library:x4,findIconDefinition:l2,toHtml:g1},T0=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot,n=e===void 0?L:e;(Object.keys(_.styles).length>0||d.autoFetchSvg)&&$&&d.autoReplaceSvg&&O.dom.i2svg({node:n})};function D1(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(n){return g1(n)})}}),Object.defineProperty(a,"node",{get:function(){if($){var n=L.createElement("div");return n.innerHTML=a.html,n.children}}}),a}function D0(a){var c=a.children,e=a.main,n=a.mask,l=a.attributes,i=a.styles,t=a.transform;if(b2(t)&&e.found&&!n.found){var r=e.width,o=e.height,s={x:r/o/2,y:.5};l.style=_1(f(f({},i),{},{"transform-origin":"".concat(s.x+t.x/16,"em ").concat(s.y+t.y/16,"em")}))}return[{tag:"svg",attributes:l,children:c}]}function q0(a){var c=a.prefix,e=a.iconName,n=a.children,l=a.attributes,i=a.symbol,t=i===!0?"".concat(c,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},l),{},{id:t}),children:n}]}]}function j0(a){var c=["aria-label","aria-labelledby","title","role"];return c.some(function(e){return e in a})}function g2(a){var c=a.icons,e=c.main,n=c.mask,l=a.prefix,i=a.iconName,t=a.transform,r=a.symbol,o=a.maskId,s=a.extra,u=a.watchable,m=u===void 0?!1:u,g=n.found?n:e,M=g.width,N=g.height,C=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(D){return s.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(s.classes).join(" "),P={children:[],attributes:f(f({},s.attributes),{},{"data-prefix":l,"data-icon":i,class:C,role:s.attributes.role||"img",viewBox:"0 0 ".concat(M," ").concat(N)})};!j0(s.attributes)&&!s.attributes["aria-hidden"]&&(P.attributes["aria-hidden"]="true"),m&&(P.attributes[n1]="");var w=f(f({},P),{},{prefix:l,iconName:i,main:e,mask:n,maskId:o,transform:t,symbol:r,styles:f({},s.styles)}),I=n.found&&e.found?J("generateAbstractMask",w)||{children:[],attributes:{}}:J("generateAbstractIcon",w)||{children:[],attributes:{}},F=I.children,i1=I.attributes;return w.children=F,w.attributes=i1,r?q0(w):D0(w)}function r3(a){var c=a.content,e=a.width,n=a.height,l=a.transform,i=a.extra,t=a.watchable,r=t===void 0?!1:t,o=f(f({},i.attributes),{},{class:i.classes.join(" ")});r&&(o[n1]="");var s=f({},i.styles);b2(l)&&(s.transform=d0({transform:l,startCentered:!0,width:e,height:n}),s["-webkit-transform"]=s.transform);var u=_1(s);u.length>0&&(o.style=u);var m=[];return m.push({tag:"span",attributes:o,children:[c]}),m}function R0(a){var c=a.content,e=a.extra,n=f(f({},e.attributes),{},{class:e.classes.join(" ")}),l=_1(e.styles);l.length>0&&(n.style=l);var i=[];return i.push({tag:"span",attributes:n,children:[c]}),i}var Y1=_.styles;function i2(a){var c=a[0],e=a[1],n=a.slice(4),l=F1(n,1),i=l[0],t=null;return Array.isArray(i)?t={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(G1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G1.PRIMARY),fill:"currentColor",d:i[1]}}]}:t={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:c,height:e,icon:t}}var $0={found:!1,width:512,height:512};function W0(a,c){!n4&&!d.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function t2(a,c){var e=c;return c==="fa"&&d.styleDefault!==null&&(c=X()),new Promise(function(n,l){if(e==="fa"){var i=g4(a)||{};a=i.iconName||a,c=i.prefix||c}if(a&&c&&Y1[c]&&Y1[c][a]){var t=Y1[c][a];return n(i2(t))}W0(a,c),n(f(f({},$0),{},{icon:d.showMissingIcons&&a?J("missingIconAbstract")||{}:{}}))})}var o3=function(){},r2=d.measurePerformance&&L1&&L1.mark&&L1.measure?L1:{mark:o3,measure:o3},d1='FA "7.3.1"',B0=function(c){return r2.mark("".concat(d1," ").concat(c," begins")),function(){return y4(c)}},y4=function(c){r2.mark("".concat(d1," ").concat(c," ends")),r2.measure("".concat(d1," ").concat(c),"".concat(d1," ").concat(c," begins"),"".concat(d1," ").concat(c," ends"))},h2={begin:B0,end:y4},k1=function(){};function f3(a){var c=a.getAttribute?a.getAttribute(n1):null;return typeof c=="string"}function G0(a){var c=a.getAttribute?a.getAttribute(u2):null,e=a.getAttribute?a.getAttribute(d2):null;return c&&e}function U0(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(d.replacementClass)}function H0(){if(d.autoReplaceSvg===!0)return P1.replace;var a=P1[d.autoReplaceSvg];return a||P1.replace}function Y0(a){return L.createElementNS("http://www.w3.org/2000/svg",a)}function V0(a){return L.createElement(a)}function L4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.ceFn,n=e===void 0?a.tag==="svg"?Y0:V0:e;if(typeof a=="string")return L.createTextNode(a);var l=n(a.tag);Object.keys(a.attributes||[]).forEach(function(t){l.setAttribute(t,a.attributes[t])});var i=a.children||[];return i.forEach(function(t){l.appendChild(L4(t,{ceFn:n}))}),l}function X0(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var P1={replace:function(c){var e=c[0];if(e.parentNode)if(c[1].forEach(function(l){e.parentNode.insertBefore(L4(l),e)}),e.getAttribute(n1)===null&&d.keepOriginalSource){var n=L.createComment(X0(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(c){var e=c[0],n=c[1];if(~p2(e).indexOf(d.replacementClass))return P1.replace(c);var l=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(r,o){return o===d.replacementClass||o.match(l)?r.toSvg.push(o):r.toNode.push(o),r},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var t=n.map(function(r){return g1(r)}).join(`
`);e.setAttribute(n1,""),e.innerHTML=t}};function s3(a){a()}function C4(a,c){var e=typeof c=="function"?c:k1;if(a.length===0)e();else{var n=s3;d.mutateApproach===Z6&&(n=V.requestAnimationFrame||s3),n(function(){var l=H0(),i=h2.begin("mutate");a.map(l),i(),e()})}}var x2=!1;function S4(){x2=!0}function o2(){x2=!1}var O1=null;function m3(a){if(V2&&d.observeMutations){var c=a.treeCallback,e=c===void 0?k1:c,n=a.nodeCallback,l=n===void 0?k1:n,i=a.pseudoElementsCallback,t=i===void 0?k1:i,r=a.observeMutationsRoot,o=r===void 0?L:r;O1=new V2(function(s){if(!x2){var u=X();s1(s).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!f3(m.addedNodes[0])&&(d.searchPseudoElements&&t(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&t([m.target],!0),m.type==="attributes"&&f3(m.target)&&~l0.indexOf(m.attributeName))if(m.attributeName==="class"&&G0(m.target)){var g=T1(p2(m.target)),M=g.prefix,N=g.iconName;m.target.setAttribute(u2,M||u),N&&m.target.setAttribute(d2,N)}else U0(m.target)&&l(m.target)})}}),$&&O1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function J0(){O1&&O1.disconnect()}function K0(a){var c=a.getAttribute("style"),e=[];return c&&(e=c.split(";").reduce(function(n,l){var i=l.split(":"),t=i[0],r=i.slice(1);return t&&r.length>0&&(n[t]=r.join(":").trim()),n},{})),e}function Z0(a){var c=a.getAttribute("data-prefix"),e=a.getAttribute("data-icon"),n=a.innerText!==void 0?a.innerText.trim():"",l=T1(p2(a));return l.prefix||(l.prefix=X()),c&&e&&(l.prefix=c,l.iconName=e),l.iconName&&l.prefix||(l.prefix&&n.length>0&&(l.iconName=y0(l.prefix,a.innerText)||M2(l.prefix,m4(a.innerText))),!l.iconName&&d.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=a.firstChild.data)),l}function Q0(a){var c=s1(a.attributes).reduce(function(e,n){return e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e},{});return c}function a8(){return{iconName:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function u3(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Z0(a),n=e.iconName,l=e.prefix,i=e.rest,t=Q0(a),r=n2("parseNodeAttributes",{},a),o=c.styleParser?K0(a):[];return f({iconName:n,prefix:l,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:t}},r)}var e8=_.styles;function N4(a){var c=d.autoReplaceSvg==="nest"?u3(a,{styleParser:!1}):u3(a);return~c.extra.classes.indexOf(i4)?J("generateLayersText",a,c):J("generateSvgReplacementMutation",a,c)}function c8(){return[].concat(E(K3),E(Z3))}function d3(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var e=L.documentElement.classList,n=function(m){return e.add("".concat(K2,"-").concat(m))},l=function(m){return e.remove("".concat(K2,"-").concat(m))},i=d.autoFetchSvg?c8():w3.concat(Object.keys(e8));i.includes("fa")||i.push("fa");var t=[".".concat(i4,":not([").concat(n1,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(n1,"])")})).join(", ");if(t.length===0)return Promise.resolve();var r=[];try{r=s1(a.querySelectorAll(t))}catch{}if(r.length>0)n("pending"),l("complete");else return Promise.resolve();var o=h2.begin("onTree"),s=r.reduce(function(u,m){try{var g=N4(m);g&&u.push(g)}catch(M){n4||M.name==="MissingIcon"&&console.error(M)}return u},[]);return new Promise(function(u,m){Promise.all(s).then(function(g){C4(g,function(){n("active"),n("complete"),l("pending"),typeof c=="function"&&c(),o(),u()})}).catch(function(g){o(),m(g)})})}function n8(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;N4(a).then(function(e){e&&C4([e],c)})}function l8(a){return function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(c||{}).icon?c:l2(c||{}),l=e.mask;return l&&(l=(l||{}).icon?l:l2(l||{})),a(n,f(f({},e),{},{mask:l}))}}var i8=function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,l=n===void 0?T:n,i=e.symbol,t=i===void 0?!1:i,r=e.mask,o=r===void 0?null:r,s=e.maskId,u=s===void 0?null:s,m=e.classes,g=m===void 0?[]:m,M=e.attributes,N=M===void 0?{}:M,C=e.styles,P=C===void 0?{}:C;if(c){var w=c.prefix,I=c.iconName,F=c.icon;return D1(f({type:"icon"},c),function(){return l1("beforeDOMElementCreation",{iconDefinition:c,params:e}),g2({icons:{main:i2(F),mask:o?i2(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:I,transform:f(f({},T),l),symbol:t,maskId:u,extra:{attributes:N,styles:P,classes:g}})})}},t8={mixout:function(){return{icon:l8(i8)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=d3,e.nodeCallback=n8,e}}},provides:function(c){c.i2svg=function(e){var n=e.node,l=n===void 0?L:n,i=e.callback,t=i===void 0?function(){}:i;return d3(l,t)},c.generateSvgReplacementMutation=function(e,n){var l=n.iconName,i=n.prefix,t=n.transform,r=n.symbol,o=n.mask,s=n.maskId,u=n.extra;return new Promise(function(m,g){Promise.all([t2(l,i),o.iconName?t2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var N=F1(M,2),C=N[0],P=N[1];m([e,g2({icons:{main:C,mask:P},prefix:i,iconName:l,transform:t,symbol:r,maskId:s,extra:u,watchable:!0})])}).catch(g)})},c.generateAbstractIcon=function(e){var n=e.children,l=e.attributes,i=e.main,t=e.transform,r=e.styles,o=_1(r);o.length>0&&(l.style=o);var s;return b2(t)&&(s=J("generateAbstractTransformGrouping",{main:i,transform:t,containerWidth:i.width,iconWidth:i.width})),n.push(s||i.icon),{children:n,attributes:l}}}},r8={mixout:function(){return{layer:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=n.classes,i=l===void 0?[]:l;return D1({type:"layer"},function(){l1("beforeDOMElementCreation",{assembler:e,params:n});var t=[];return e(function(r){Array.isArray(r)?r.map(function(o){t=t.concat(o.abstract)}):t=t.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(E(i)).join(" ")},children:t}]})}}}},o8={mixout:function(){return{counter:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=n.title,i=l===void 0?null:l,t=n.classes,r=t===void 0?[]:t,o=n.attributes,s=o===void 0?{}:o,u=n.styles,m=u===void 0?{}:u;return D1({type:"counter",content:e},function(){return l1("beforeDOMElementCreation",{content:e,params:n}),R0({content:e.toString(),title:i,extra:{attributes:s,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(E(r))}})})}}}},f8={mixout:function(){return{text:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=n.transform,i=l===void 0?T:l,t=n.classes,r=t===void 0?[]:t,o=n.attributes,s=o===void 0?{}:o,u=n.styles,m=u===void 0?{}:u;return D1({type:"text",content:e},function(){return l1("beforeDOMElementCreation",{content:e,params:n}),r3({content:e,transform:f(f({},T),i),extra:{attributes:s,styles:m,classes:["".concat(d.cssPrefix,"-layers-text")].concat(E(r))}})})}}},provides:function(c){c.generateLayersText=function(e,n){var l=n.transform,i=n.extra,t=null,r=null;if(S3){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();t=s.width/o,r=s.height/o}return Promise.resolve([e,r3({content:e.innerHTML,width:t,height:r,transform:l,extra:i,watchable:!0})])}}},w4=new RegExp('"',"ug"),z3=[1105920,1112319],p3=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),F5),J6),W5),f2=Object.keys(p3).reduce(function(a,c){return a[c.toLowerCase()]=p3[c],a},{}),s8=Object.keys(f2).reduce(function(a,c){var e=f2[c];return a[c]=e[900]||E(Object.entries(e))[0][1],a},{});function m8(a){var c=a.replace(w4,"");return m4(E(c)[0]||"")}function u8(a){var c=a.getPropertyValue("font-feature-settings").includes("ss01"),e=a.getPropertyValue("content"),n=e.replace(w4,""),l=n.codePointAt(0),i=l>=z3[0]&&l<=z3[1],t=n.length===2?n[0]===n[1]:!1;return i||t||c}function d8(a,c){var e=a.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(c),l=isNaN(n)?"normal":n;return(f2[e]||{})[l]||s8[e]}function b3(a,c){var e="".concat(K6).concat(c.replace(":","-"));return new Promise(function(n,l){if(a.getAttribute(e)!==null)return n();var i=s1(a.children),t=i.filter(function(R1){return R1.getAttribute(Z1)===c})[0],r=V.getComputedStyle(a,c),o=r.getPropertyValue("font-family"),s=o.match(c0),u=r.getPropertyValue("font-weight"),m=r.getPropertyValue("content");if(t&&!s)return a.removeChild(t),n();if(s&&m!=="none"&&m!==""){var g=r.getPropertyValue("content"),M=d8(o,u),N=m8(g),C=s[0].startsWith("FontAwesome"),P=u8(r),w=M2(M,N),I=w;if(C){var F=L0(N);F.iconName&&F.prefix&&(w=F.iconName,M=F.prefix)}if(w&&!P&&(!t||t.getAttribute(u2)!==M||t.getAttribute(d2)!==I)){a.setAttribute(e,I),t&&a.removeChild(t);var i1=a8(),D=i1.extra;D.attributes[Z1]=c,t2(w,M).then(function(R1){var Y4=g2(f(f({},i1),{},{icons:{main:R1,mask:h4()},prefix:M,iconName:I,extra:D,watchable:!0})),$1=L.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore($1,a.firstChild):a.appendChild($1),$1.outerHTML=Y4.map(function(V4){return g1(V4)}).join(`
`),a.removeAttribute(e),n()}).catch(l)}else n()}else n()})}function z8(a){return Promise.all([b3(a,"::before"),b3(a,"::after")])}function p8(a){return a.parentNode!==document.head&&!~Q6.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Z1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var b8=function(c){return!!c&&c4.some(function(e){return c.includes(e)})},v8=function(c){if(!c)return[];var e=new Set,n=c.split(/,(?![^()]*\))/).map(function(o){return o.trim()});n=n.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(s){return s.trim()})});var l=w1(n),i;try{for(l.s();!(i=l.n()).done;){var t=i.value;if(b8(t)){var r=c4.reduce(function(o,s){return o.replace(s,"")},t);r!==""&&r!=="*"&&e.add(r)}}}catch(o){l.e(o)}finally{l.f()}return e};function v3(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if($){var e;if(c)e=a;else if(d.searchPseudoElementsFullScan)e=a.querySelectorAll("*");else{var n=new Set,l=w1(document.styleSheets),i;try{for(l.s();!(i=l.n()).done;){var t=i.value;try{var r=w1(t.cssRules),o;try{for(r.s();!(o=r.n()).done;){var s=o.value,u=v8(s.selectorText),m=w1(u),g;try{for(m.s();!(g=m.n()).done;){var M=g.value;n.add(M)}}catch(C){m.e(C)}finally{m.f()}}}catch(C){r.e(C)}finally{r.f()}}catch(C){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(t.href," (").concat(C.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(C){l.e(C)}finally{l.f()}if(!n.size)return;var N=Array.from(n).join(", ");try{e=a.querySelectorAll(N)}catch{}}return new Promise(function(C,P){var w=s1(e).filter(p8).map(z8),I=h2.begin("searchPseudoElements");S4(),Promise.all(w).then(function(){I(),o2(),C()}).catch(function(){I(),o2(),P()})})}}var M8={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=v3,e}}},provides:function(c){c.pseudoElements2svg=function(e){var n=e.node,l=n===void 0?L:n;d.searchPseudoElements&&v3(l)}}},M3=!1,g8={mixout:function(){return{dom:{unwatch:function(){S4(),M3=!0}}}},hooks:function(){return{bootstrap:function(){m3(n2("mutationObserverCallbacks",{}))},noAuto:function(){J0()},watch:function(e){var n=e.observeMutationsRoot;M3?o2():m3(n2("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},g3=function(c){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(n,l){var i=l.toLowerCase().split("-"),t=i[0],r=i.slice(1).join("-");if(t&&r==="h")return n.flipX=!0,n;if(t&&r==="v")return n.flipY=!0,n;if(r=parseFloat(r),isNaN(r))return n;switch(t){case"grow":n.size=n.size+r;break;case"shrink":n.size=n.size-r;break;case"left":n.x=n.x-r;break;case"right":n.x=n.x+r;break;case"up":n.y=n.y-r;break;case"down":n.y=n.y+r;break;case"rotate":n.rotate=n.rotate+r;break}return n},e)},h8={mixout:function(){return{parse:{transform:function(e){return g3(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,n){var l=n.getAttribute("data-fa-transform");return l&&(e.transform=g3(l)),e}}},provides:function(c){c.generateAbstractTransformGrouping=function(e){var n=e.main,l=e.transform,i=e.containerWidth,t=e.iconWidth,r={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(l.x*32,", ").concat(l.y*32,") "),s="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),u="rotate(".concat(l.rotate," 0 0)"),m={transform:"".concat(o," ").concat(s," ").concat(u)},g={transform:"translate(".concat(t/2*-1," -256)")},M={outer:r,inner:m,path:g};return{tag:"g",attributes:f({},M.outer),children:[{tag:"g",attributes:f({},M.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),M.path)}]}]}}}},V1={x:0,y:0,width:"100%",height:"100%"};function h3(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function x8(a){return a.tag==="g"?a.children:[a]}var y8={hooks:function(){return{parseNodeAttributes:function(e,n){var l=n.getAttribute("data-fa-mask"),i=l?T1(l.split(" ").map(function(t){return t.trim()})):h4();return i.prefix||(i.prefix=X()),e.mask=i,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides:function(c){c.generateAbstractMask=function(e){var n=e.children,l=e.attributes,i=e.main,t=e.mask,r=e.maskId,o=e.transform,s=i.width,u=i.icon,m=t.width,g=t.icon,M=u0({transform:o,containerWidth:m,iconWidth:s}),N={tag:"rect",attributes:f(f({},V1),{},{fill:"white"})},C=u.children?{children:u.children.map(h3)}:{},P={tag:"g",attributes:f({},M.inner),children:[h3(f({tag:u.tag,attributes:f(f({},u.attributes),M.path)},C))]},w={tag:"g",attributes:f({},M.outer),children:[P]},I="mask-".concat(r||a3()),F="clip-".concat(r||a3()),i1={tag:"mask",attributes:f(f({},V1),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,w]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:x8(g)},i1]};return n.push(D,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(I,")")},V1)}),{children:n,attributes:l}}}},L8={provides:function(c){var e=!1;V.matchMedia&&(e=V.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var n=[],l={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var t=f(f({},i),{},{attributeName:"opacity"}),r={tag:"circle",attributes:f(f({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||r.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},t),{},{values:"1;0;1;1;0;1;"})}),n.push(r),n.push({tag:"path",attributes:f(f({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:f(f({},t),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:f(f({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},t),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},C8={hooks:function(){return{parseNodeAttributes:function(e,n){var l=n.getAttribute("data-fa-symbol"),i=l===null?!1:l===""?!0:l;return e.symbol=i,e}}}},S8=[p0,t8,r8,o8,f8,M8,g8,h8,y8,L8,C8];O0(S8,{mixoutsTo:O});var f7=O.noAuto,k4=O.config,s7=O.library,P4=O.dom,A4=O.parse,m7=O.findIconDefinition,u7=O.toHtml,I4=O.icon,d7=O.layer,N8=O.text,w8=O.counter;var k8=["*"],P8=(()=>{class a{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(e){k4.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(n){return new(n||a)};static \u0275prov=W1({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),A8=(()=>{class a{definitions={};addIcons(...e){for(let n of e){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let l of n.icon[2])typeof l=="string"&&(this.definitions[n.prefix][l]=n)}}addIconPacks(...e){for(let n of e){let l=Object.keys(n).map(i=>n[i]);this.addIcons(...l)}}getIconDefinition(e,n){return e in this.definitions&&n in this.definitions[e]?this.definitions[e][n]:null}static \u0275fac=function(n){return new(n||a)};static \u0275prov=W1({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),I8=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},O8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},_4=a=>a!=null&&(a===90||a===180||a===270||a==="90"||a==="180"||a==="270"),F8=a=>{let c=_4(a.rotate),e={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:c,"fa-rotate-by":a.rotate!=null&&!c,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n!=null)},y2=new WeakSet,O4="fa-auto-css";function _8(a,c){if(!c.autoAddCss||y2.has(a))return;if(a.getElementById(O4)!=null){c.autoAddCss=!1,y2.add(a);return}let e=a.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",O4),e.innerHTML=P4.css();let n=a.head.childNodes,l=null;for(let i=n.length-1;i>-1;i--){let t=n[i],r=t.nodeName.toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(l=t)}a.head.insertBefore(e,l),c.autoAddCss=!1,y2.add(a)}var E8=a=>a.prefix!==void 0&&a.iconName!==void 0,T8=(a,c)=>E8(a)?a:Array.isArray(a)&&a.length===2?{prefix:a[0],iconName:a[1]}:{prefix:c,iconName:a},D8=(()=>{class a{stackItemSize=e1("1x");size=e1();_effect=j2(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(n){return new(n||a)};static \u0275dir=P2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return a})(),q8=(()=>{class a{size=e1();classes=u1(()=>{let e=this.size(),n=e?{[`fa-${e}`]:!0}:{};return C2(L2({},n),{"fa-stack":!0})});static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Z({type:a,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(n,l){n&2&&F2(l.classes())},inputs:{size:[1,"size"]},ngContentSelectors:k8,decls:1,vars:0,template:function(n,l){n&1&&(I2(),O2(0))},encapsulation:2,changeDetection:0})}return a})(),E4=(()=>{class a{icon=A();title=A();animation=A();mask=A();flip=A();size=A();pull=A();border=A();inverse=A();symbol=A();rotate=A();fixedWidth=A();transform=A();a11yRole=A();renderedIconHTML=u1(()=>{let e=this.icon()??this.config.fallbackIcon;if(!e)return O8(),"";let n=this.findIconDefinition(e);if(!n)return"";let l=this.buildParams();_8(this.document,this.config);let i=I4(n,l);return this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))});document=K(N2);sanitizer=K($2);config=K(P8);iconLibrary=K(A8);stackItem=K(D8,{optional:!0});stack=K(q8,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(e){let n=T8(e,this.config.defaultPrefix);if("icon"in n)return n;let l=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return l??(I8(n),null)}buildParams(){let e=this.fixedWidth(),n={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof e=="boolean"?e:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},l=this.transform(),i=typeof l=="string"?A4.transform(l):l,t=this.mask(),r=t!=null?this.findIconDefinition(t):null,o={},s=this.a11yRole();s!=null&&(o.role=s);let u={};return n.rotate!=null&&!_4(n.rotate)&&(u["--fa-rotate-angle"]=`${n.rotate}`),{title:this.title(),transform:i,classes:F8(n),mask:r??void 0,symbol:this.symbol(),attributes:o,styles:u}}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Z({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,l){n&2&&(x1("innerHTML",l.renderedIconHTML(),w2),m1("title",l.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(n,l){},encapsulation:2,changeDetection:0})}return a})();var T4=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=k2({type:a});static \u0275inj=S2({})}return a})();var D4={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256 397.4 512 256 512L37.1 512c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256zM349.6 153.6c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34-34.5 3.7-61.4 33-61.4 68.4l0 .2c-37.5 1.6-71.8 12.3-99 29.1-10.1-7.8-22.8-12.5-36.5-12.5-33 0-59.8 26.8-59.8 59.8 0 24 14.1 44.6 34.4 54.1 2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54 0-33-26.8-59.8-59.8-59.8-13.7 0-26.3 4.6-36.4 12.4-27.4-17-62.1-27.7-100-29.1l0-.2c0-25.4 18.9-46.5 43.4-49.9 4.4 18.8 21.3 32.8 41.5 32.8l.1 .2zM177.1 246.9c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6-31.4-8.8-30.4-30.5 15.4-38.3 32.1-38.3l.1-.1zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6 11.8-39.3 28.5-39.3 31.2 16.6 32.1 38.3l.1 .1zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9 .8-6.2 3.9-6.5 18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1 .3 5.1 3.6 3.9 6.5z"]};var q4={prefix:"fab",iconName:"discord",icon:[576,512,[],"f392","M492.5 69.8c-.2-.3-.4-.6-.8-.7-38.1-17.5-78.4-30-119.7-37.1-.4-.1-.8 0-1.1 .1s-.6 .4-.8 .8c-5.5 9.9-10.5 20.2-14.9 30.6-44.6-6.8-89.9-6.8-134.4 0-4.5-10.5-9.5-20.7-15.1-30.6-.2-.3-.5-.6-.8-.8s-.7-.2-1.1-.2c-41.3 7.1-81.6 19.6-119.7 37.1-.3 .1-.6 .4-.8 .7-76.2 113.8-97.1 224.9-86.9 334.5 0 .3 .1 .5 .2 .8s.3 .4 .5 .6c44.4 32.9 94 58 146.8 74.2 .4 .1 .8 .1 1.1 0s.7-.4 .9-.7c11.3-15.4 21.4-31.8 30-48.8 .1-.2 .2-.5 .2-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.7-.4c-15.8-6.1-31.2-13.4-45.9-21.9-.3-.2-.5-.4-.7-.6s-.3-.6-.3-.9 0-.6 .2-.9 .3-.5 .6-.7c3.1-2.3 6.2-4.7 9.1-7.1 .3-.2 .6-.4 .9-.4s.7 0 1 .1c96.2 43.9 200.4 43.9 295.5 0 .3-.1 .7-.2 1-.2s.7 .2 .9 .4c2.9 2.4 6 4.9 9.1 7.2 .2 .2 .4 .4 .6 .7s.2 .6 .2 .9-.1 .6-.3 .9-.4 .5-.6 .6c-14.7 8.6-30 15.9-45.9 21.8-.2 .1-.5 .2-.7 .4s-.3 .4-.4 .7-.1 .5-.1 .8 .1 .5 .2 .8c8.8 17 18.8 33.3 30 48.8 .2 .3 .6 .6 .9 .7s.8 .1 1.1 0c52.9-16.2 102.6-41.3 147.1-74.2 .2-.2 .4-.4 .5-.6s.2-.5 .2-.8c12.3-126.8-20.5-236.9-86.9-334.5zm-302 267.7c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.2-52.8 59.2zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.2-52.8 59.2z"]};var j4={prefix:"fab",iconName:"bluesky",icon:[576,512,[],"e671","M407.8 294.7c-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3 61.6-9.4 37.5-1.7 21.6 5.5 3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7 3.3-.5 6.6-.9 10-1.4-3.3 .5-6.6 1-10 1.4-93.9 14-177.3 48.2-67.9 169.9 120.3 124.6 164.8-26.7 187.7-103.4 22.9 76.7 49.2 222.5 185.6 103.4 102.4-103.4 28.1-156-65.8-169.9-3.3-.4-6.7-.8-10-1.3 3.4 .4 6.7 .9 10 1.3 64.1 7.1 133.6-15.1 153.2-80.7 5.9-19.9 15-138.9 15-155.5s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8-66.1 46.6-137.1 141.1-163.2 191.8z"]};var R4={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"]};var $4={prefix:"fab",iconName:"steam",icon:[512,512,[],"f1b6","M504 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5l0 1.2-59.2 85.7c-15.5-.9-30.7 3.4-43.5 12.1L8 236.1C18.2 108.4 125.1 8 255.6 8 392.8 8 504 119 504 256zM163.7 384.3l-30.5-12.6c5.6 11.6 15.3 20.8 27.2 25.8 26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3 .1-40.3S214 305.6 201 300.2c-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zM337.5 129.8a62.3 62.3 0 1 1 0 124.6 62.3 62.3 0 1 1 0-124.6zm.1 109a46.8 46.8 0 1 0 0-93.6 46.8 46.8 0 1 0 0 93.6z"]};var W4={prefix:"fab",iconName:"mastodon",icon:[448,512,[],"f4f6","M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54-.6-4.6-.9-9.3-.9-13.9 85.6 20.9 158.7 9.1 178.7 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zM357.9 304.3l-46.6 0 0-114.2c0-49.7-64-51.6-64 6.9l0 62.5-46.3 0 0-62.5c0-58.5-64-56.6-64-6.9l0 114.2-46.7 0c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175l0 0z"]};var B4={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"]};var G4={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var U4={prefix:"fab",iconName:"x-twitter",icon:[448,512,[],"e61b","M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"]};var q1=class a{logoImageSrc=e1(H.logo.imageSource);logoTitle=e1(H.logo.imageTitle);static \u0275fac=function(e){return new(e||a)};static \u0275cmp=Z({type:a,selectors:[["app-logo"]],inputs:{logoImageSrc:[1,"logoImageSrc"],logoTitle:[1,"logoTitle"]},decls:1,vars:2,consts:[["width","600","height","76",3,"src","alt"]],template:function(e,n){e&1&&A2(0,"img",0),e&2&&x1("src",n.logoImageSrc(),W)("alt",n.logoTitle())},styles:["[_nghost-%COMP%]{display:block}img[_ngcontent-%COMP%]{display:block;width:clamp(170px,26vw,300px);height:auto}"]})};var $8=(a,c)=>c.id,j1=(a,c)=>c.url;function W8(a,c){a&1&&(v(0,"a",4),x(1),h(2,"translate"),b()),a&2&&(p(),S(y(2,1,"app.pages.landing.nav.follow")))}function B8(a,c){if(a&1&&(v(0,"li"),x(1),h(2,"translate"),b()),a&2){let e=c.$implicit;U();let n=D2(0);p(),S(y(2,1,n+".facts."+e))}}function G8(a,c){if(a&1&&(v(0,"a",33),x(1),h(2,"translate"),b()),a&2){let e=c.$implicit;q("href",e.url,W),p(),y1(" ",y(2,3,"app.pages.landing.labels.wishlistOn")," ",e.label," ")}}function U8(a,c){if(a&1&&(v(0,"div",32),B(1,G8,3,5,"a",33,j1),b()),a&2){let e=U().$implicit;p(),G(e.links)}}function H8(a,c){if(a&1&&(E2(0),v(1,"article",15),t1(2,"img",27),h(3,"translate"),v(4,"div",28)(5,"p",17),x(6),h(7,"translate"),b(),v(8,"h2"),x(9),h(10,"translate"),b(),v(11,"p",29),x(12),h(13,"translate"),b(),v(14,"p",30),x(15),h(16,"translate"),b(),v(17,"p",23),x(18),h(19,"translate"),b(),v(20,"ul",31),B(21,B8,3,3,"li",null,B1),b(),Q(23,U8,3,0,"div",32),b()()),a&2){let e=c.$implicit,n=T2("app.pages.landing.games.items."+e.id);p(2),q("src",e.art.src,W)("width",e.art.width)("height",e.art.height)("alt",y(3,11,n+".artAlt")),p(4),S(y(7,13,n+".eyebrow")),p(3),S(y(10,15,n+".title")),p(3),S(y(13,17,n+".status")),p(3),S(y(16,19,n+".pitch")),p(3),S(y(19,21,n+".description")),p(3),G(e.factKeys),p(2),a1(e.links.length>0?23:-1)}}function Y8(a,c){if(a&1&&(v(0,"div",18)(1,"div",34),x(2),h(3,"number"),b(),v(4,"h3",35),x(5),h(6,"translate"),b(),v(7,"p",36),x(8),h(9,"translate"),b()()),a&2){let e=c.$implicit,n=c.$index;p(2),S(q2(3,3,n+1,"2.0-0")),p(3),S(y(6,6,"app.pages.landing.practices."+e+".title")),p(3),_2(" ",y(9,8,"app.pages.landing.practices."+e+".description")," ")}}function V8(a,c){if(a&1&&(v(0,"a",33),x(1),h(2,"translate"),b()),a&2){let e=c.$implicit;q("href",e.url,W),p(),y1(" ",y(2,3,"app.pages.landing.labels.wishlistOn")," ",e.label," ")}}function X8(a,c){if(a&1&&(v(0,"div",11),B(1,V8,3,5,"a",33,j1),b()),a&2){let e=U(2);p(),G(e.stores())}}function J8(a,c){if(a&1&&(v(0,"a",38),t1(1,"fa-icon",39),b()),a&2){let e=c.$implicit,n=U(3);q("href",e.url,W),m1("aria-label",e.label),p(),q("icon",n.icons[e.name])}}function K8(a,c){if(a&1&&(v(0,"div",37),B(1,J8,2,3,"a",38,j1),b()),a&2){let e=U(2);p(),G(e.socials())}}function Z8(a,c){if(a&1&&(v(0,"section",24)(1,"h2"),x(2),h(3,"translate"),b(),v(4,"p",23),x(5),h(6,"translate"),b(),Q(7,X8,3,0,"div",11),Q(8,K8,3,0,"div",37),b()),a&2){let e=U();p(2),S(y(3,4,"app.pages.landing.follow.title")),p(3),S(y(6,6,"app.pages.landing.follow.description")),p(2),a1(e.stores().length>0?7:-1),p(),a1(e.socials().length>0?8:-1)}}function Q8(a,c){if(a&1&&(v(0,"a",38),x(1),b()),a&2){let e=c.$implicit;q("href",e.url,W),p(),S(e.label)}}function a7(a,c){if(a&1&&(v(0,"nav"),B(1,Q8,2,2,"a",38,j1),b()),a&2){let e=U();p(),G(e.followLinks())}}var e7={steam:$4,discord:q4,x:U4,bluesky:j4,mastodon:W4,tiktok:B4,youtube:R4,reddit:D4,instagram:G4},H4=class a{icons=e7;year=new Date().getFullYear();practiceKeys=["forPlayers","smallOnPurpose","veteranKnowHow"];studioName=H.logo.imageTitle;games=h1(H.games);stores=h1(H.stores);socials=h1(H.socials);followLinks=u1(()=>[...this.stores(),...this.socials()]);static \u0275fac=function(e){return new(e||a)};static \u0275cmp=Z({type:a,selectors:[["app-landing"]],decls:57,vars:42,consts:[["id","top",1,"site-nav"],["href","#top"],["href","#games"],["href","#studio"],["href","#follow"],[1,"hero"],[1,"hero-inner"],[1,"hero-logo"],["src","images/logo-full.webp","width","1000","height","833",3,"alt"],[1,"hero-kicker"],[1,"hero-tagline"],[1,"cta-row"],["href","#games",1,"btn","btn-primary"],["href","#studio",1,"btn","btn-ghost"],["id","games",1,"games"],[1,"game"],[1,"practices"],[1,"eyebrow"],[1,"practice-row"],["id","studio",1,"studio"],[1,"studio-art"],["src","images/mascot.webp","width","900","height","697","loading","lazy",3,"alt"],[1,"studio-copy"],[1,"description"],["id","follow",1,"follow"],[1,"site-footer"],[1,"copyright"],["loading","lazy",1,"game-art",3,"src","width","height","alt"],[1,"game-copy"],[1,"game-status"],[1,"game-pitch"],[1,"game-facts"],[1,"cta-row","cta-row-start"],["target","_blank","rel","noopener",1,"btn","btn-primary",3,"href"],[1,"practice-num"],[1,"practice-title"],[1,"practice-description"],[1,"social-row"],["target","_blank","rel","noopener",3,"href"],[3,"icon"]],template:function(e,n){e&1&&(v(0,"header",0)(1,"a",1),h(2,"translate"),t1(3,"app-logo"),b(),v(4,"nav")(5,"a",2),x(6),h(7,"translate"),b(),v(8,"a",3),x(9),h(10,"translate"),b(),Q(11,W8,3,3,"a",4),b()(),v(12,"section",5)(13,"div",6)(14,"h1",7),t1(15,"img",8),b(),v(16,"p",9),x(17),h(18,"translate"),b(),v(19,"p",10),x(20),h(21,"translate"),b(),v(22,"div",11)(23,"a",12),x(24),h(25,"translate"),b(),v(26,"a",13),x(27),h(28,"translate"),b()()()(),v(29,"section",14),B(30,H8,24,23,"article",15,$8),b(),v(32,"section",16)(33,"h2",17),x(34),h(35,"translate"),b(),B(36,Y8,10,10,"div",18,B1),b(),v(38,"section",19)(39,"div",20),t1(40,"img",21),h(41,"translate"),b(),v(42,"div",22)(43,"p",17),x(44),h(45,"translate"),b(),v(46,"h2"),x(47),h(48,"translate"),b(),v(49,"p",23),x(50),h(51,"translate"),b()()(),Q(52,Z8,9,8,"section",24),v(53,"footer",25)(54,"span",26),x(55),b(),Q(56,a7,3,0,"nav"),b()),e&2&&(p(),m1("aria-label",y(2,18,"app.pages.landing.nav.home")),p(5),S(y(7,20,"app.pages.landing.nav.games")),p(3),S(y(10,22,"app.pages.landing.nav.studio")),p(2),a1(n.followLinks().length>0?11:-1),p(4),q("alt",n.studioName),p(2),S(y(18,24,"app.pages.landing.hero.kicker")),p(3),S(y(21,26,"app.pages.landing.hero.tagline")),p(4),S(y(25,28,"app.pages.landing.hero.gamesCta")),p(3),S(y(28,30,"app.pages.landing.hero.studioCta")),p(3),G(n.games()),p(4),S(y(35,32,"app.pages.landing.practices.title")),p(2),G(n.practiceKeys),p(4),q("alt",y(41,34,"app.pages.landing.studio.artAlt")),p(4),S(y(45,36,"app.pages.landing.studio.eyebrow")),p(3),S(y(48,38,"app.pages.landing.studio.title")),p(3),S(y(51,40,"app.pages.landing.studio.description")),p(2),a1(n.followLinks().length>0?52:-1),p(3),y1("\xA9 ",n.year," ",n.studioName),p(),a1(n.followLinks().length>0?56:-1))},dependencies:[T4,E4,q1,W2,R2],styles:['[_nghost-%COMP%]{display:block;overflow:hidden}.btn[_ngcontent-%COMP%]{display:inline-block;padding:15px 34px;font-family:var(--brand-label-font);font-weight:600;font-size:17px;letter-spacing:.08em;text-transform:uppercase;transform:skew(-8deg);transition:background-color .15s ease,border-color .15s ease,color .15s ease}.btn.btn-primary[_ngcontent-%COMP%]{background:var(--brand-orange);color:var(--brand-on-accent)}.btn.btn-primary[_ngcontent-%COMP%]:hover{background:var(--brand-orange-bright);color:var(--brand-on-accent)}.btn.btn-ghost[_ngcontent-%COMP%]{border:1px solid var(--brand-border-strong);padding:14px 32px;color:var(--brand-text)}.btn.btn-ghost[_ngcontent-%COMP%]:hover{border-color:var(--brand-cyan);color:var(--brand-cyan-bright)}.cta-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px;justify-content:center}.cta-row.cta-row-start[_ngcontent-%COMP%]{justify-content:flex-start;margin-top:28px}.eyebrow[_ngcontent-%COMP%]{margin:0 0 18px;font-family:var(--brand-label-font);font-size:15px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--brand-cyan)}.description[_ngcontent-%COMP%]{font-size:18px;line-height:1.65;color:var(--brand-ash-dim);margin:22px 0 0;max-width:560px;text-wrap:pretty}.site-nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 24px;padding:20px clamp(24px,5vw,64px);border-bottom:1px solid var(--brand-border)}.site-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;gap:clamp(20px,3vw,36px);font-family:var(--brand-label-font);font-size:15px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--brand-nav)}.hero[_ngcontent-%COMP%]{position:relative;min-height:clamp(560px,86vh,760px);display:flex;align-items:center;justify-content:center;text-align:center;background:radial-gradient(58% 72% at 20% 42%,rgba(25,211,255,.15),transparent 72%),radial-gradient(52% 66% at 82% 56%,rgba(255,138,31,.13),transparent 72%),var(--brand-bg-deep)}.hero[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;opacity:.55;background-repeat:no-repeat;background-size:5px 5px,7px 7px,4px 4px,6px 6px,5px 5px,4px 4px,7px 7px,5px 5px;background-position:8% 22%,15% 74%,26% 12%,37% 88%,68% 9%,77% 83%,88% 28%,94% 66%;background-image:linear-gradient(var(--brand-cyan),var(--brand-cyan)),linear-gradient(var(--brand-orange),var(--brand-orange)),linear-gradient(var(--brand-cyan),var(--brand-cyan)),linear-gradient(var(--brand-cyan),var(--brand-cyan)),linear-gradient(var(--brand-gold),var(--brand-gold)),linear-gradient(var(--brand-orange),var(--brand-orange)),linear-gradient(var(--brand-orange),var(--brand-orange)),linear-gradient(var(--brand-cyan),var(--brand-cyan))}.hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%]{position:relative;padding:40px 24px 56px}.hero[_ngcontent-%COMP%]   .hero-logo[_ngcontent-%COMP%]{margin:0 auto;width:min(540px,100%,58vh);filter:drop-shadow(0 0 40px rgba(25,211,255,.18))}@media(prefers-reduced-motion:no-preference){.hero[_ngcontent-%COMP%]   .hero-logo[_ngcontent-%COMP%]{animation:float 7s ease-in-out infinite}}.hero[_ngcontent-%COMP%]   .hero-kicker[_ngcontent-%COMP%]{margin:22px 0 0;font-family:var(--brand-label-font);font-size:clamp(13px,1.8vw,16px);font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:var(--brand-cyan)}@media(max-width:48rem){.hero[_ngcontent-%COMP%]   .hero-kicker[_ngcontent-%COMP%]{letter-spacing:.14em}}.hero[_ngcontent-%COMP%]   .hero-tagline[_ngcontent-%COMP%]{font-size:clamp(18px,2.4vw,22px);line-height:1.5;color:var(--brand-ash);max-width:620px;margin:14px auto 0;text-wrap:balance}.hero[_ngcontent-%COMP%]   .cta-row[_ngcontent-%COMP%]{margin-top:32px}@keyframes _ngcontent-%COMP%_float{0%,to{transform:translateY(0)}50%{transform:translateY(-8px)}}.games[_ngcontent-%COMP%]{border-top:1px solid var(--brand-border);padding:88px clamp(24px,5vw,64px);display:flex;flex-direction:column;gap:72px}.game[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.25fr 1fr;gap:clamp(32px,5vw,64px);align-items:center;max-width:1280px;width:100%;margin:0 auto}@media(max-width:62rem){.game[_ngcontent-%COMP%]{grid-template-columns:1fr}}.game[_ngcontent-%COMP%]   .game-art[_ngcontent-%COMP%]{width:100%;border:1px solid var(--brand-border-strong);box-shadow:0 24px 70px #0000008c}.game[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:var(--brand-heading-font);font-weight:700;font-size:clamp(40px,5vw,60px);line-height:1;text-transform:uppercase;letter-spacing:.01em}.game[_ngcontent-%COMP%]   .game-status[_ngcontent-%COMP%]{display:inline-block;margin:16px 0 0;padding:4px 12px;border:1px solid var(--brand-orange);font-family:var(--brand-label-font);font-size:13px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--brand-orange);transform:skew(-8deg)}.game[_ngcontent-%COMP%]   .game-pitch[_ngcontent-%COMP%]{margin:22px 0 0;font-size:clamp(20px,2.2vw,24px);font-weight:500;line-height:1.35;color:var(--brand-text);text-wrap:pretty}.game[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-top:14px;font-size:17px}.game[_ngcontent-%COMP%]   .game-facts[_ngcontent-%COMP%]{list-style:none;margin:22px 0 0;padding:0;display:flex;flex-direction:column;gap:8px;font-size:16px;color:var(--brand-ash)}.game[_ngcontent-%COMP%]   .game-facts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:12px}.game[_ngcontent-%COMP%]   .game-facts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"";flex:none;width:7px;height:7px;background:var(--brand-cyan);transform:translateY(-2px)}.practices[_ngcontent-%COMP%]{padding:88px clamp(24px,5vw,64px);border-top:1px solid var(--brand-border);box-sizing:border-box}.practices[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{max-width:1280px;margin-left:auto;margin-right:auto}.practices[_ngcontent-%COMP%]   .practice-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:80px 1fr 1.4fr;gap:36px;align-items:baseline;padding:30px 0;border-bottom:1px solid var(--brand-border)}.practices[_ngcontent-%COMP%]   .practice-row[_ngcontent-%COMP%]:last-child{border-bottom:none;padding-bottom:0}@media(max-width:48rem){.practices[_ngcontent-%COMP%]   .practice-row[_ngcontent-%COMP%]{grid-template-columns:48px 1fr;gap:12px 16px}.practices[_ngcontent-%COMP%]   .practice-row[_ngcontent-%COMP%]   .practice-description[_ngcontent-%COMP%]{grid-column:2}}.practices[_ngcontent-%COMP%]   .practice-num[_ngcontent-%COMP%]{font-family:var(--brand-heading-font);font-weight:600;font-size:26px;color:var(--brand-orange)}.practices[_ngcontent-%COMP%]   .practice-title[_ngcontent-%COMP%]{margin:0;font-family:var(--brand-heading-font);font-weight:600;font-size:clamp(26px,3vw,34px);line-height:1.1;text-transform:uppercase;letter-spacing:.02em}.practices[_ngcontent-%COMP%]   .practice-description[_ngcontent-%COMP%]{margin:0;font-size:17px;line-height:1.6;color:var(--brand-ash-dim);text-wrap:pretty}.studio[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1.2fr;border-top:1px solid var(--brand-border)}@media(max-width:48rem){.studio[_ngcontent-%COMP%]{grid-template-columns:1fr}}.studio[_ngcontent-%COMP%]   .studio-art[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:340px;padding:40px clamp(24px,5vw,64px);box-sizing:border-box;background:radial-gradient(60% 60% at 42% 48%,rgba(25,211,255,.14),transparent 75%),radial-gradient(50% 55% at 66% 58%,rgba(255,138,31,.12),transparent 75%),var(--brand-bg-elevated)}.studio[_ngcontent-%COMP%]   .studio-art[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:min(460px,100%)}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]{padding:72px clamp(24px,5vw,64px);display:flex;flex-direction:column;justify-content:center}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:var(--brand-heading-font);font-weight:700;font-size:clamp(38px,4.4vw,54px);line-height:1.05;text-transform:uppercase}.follow[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;padding:88px clamp(24px,5vw,64px);border-top:1px solid var(--brand-border);background:var(--brand-bg-deep)}.follow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:var(--brand-heading-font);font-weight:700;font-size:clamp(34px,4vw,46px);text-transform:uppercase;letter-spacing:.02em}.follow[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-top:16px}.follow[_ngcontent-%COMP%]   .cta-row[_ngcontent-%COMP%]{margin-top:36px}.follow[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:22px;margin-top:32px;font-size:26px;color:var(--brand-nav)}.site-footer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:30px clamp(24px,5vw,64px);border-top:1px solid var(--brand-border)}.site-footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{font-family:var(--brand-label-font);font-size:14px;letter-spacing:.08em;color:var(--brand-faint)}.site-footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:26px;font-family:var(--brand-label-font);font-size:15px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--brand-nav)}']})};export{H4 as Landing};
