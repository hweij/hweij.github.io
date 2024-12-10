(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="164",Dn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yd=0,Qc=1,qd=2,Ru=1,jd=2,Ln=3,zn=0,Wt=1,Zt=2,oi=0,as=1,qa=2,el=3,tl=4,Kd=5,Si=100,Zd=101,$d=102,Jd=103,Qd=104,ef=200,tf=201,nf=202,sf=203,ja=204,Ka=205,rf=206,of=207,af=208,cf=209,lf=210,hf=211,uf=212,df=213,ff=214,pf=0,mf=1,gf=2,mo=3,_f=4,xf=5,vf=6,yf=7,bc=0,Mf=1,Sf=2,ai=0,Tf=1,Ef=2,bf=3,wf=4,Af=5,Rf=6,Cf=7,nl="attached",Pf="detached",Cu=300,us=301,ds=302,go=303,Za=304,Bo=306,li=1e3,ni=1001,_o=1002,Ot=1003,Pu=1004,Ys=1005,$t=1006,co=1007,Fn=1008,hi=1009,Lf=1010,If=1011,Lu=1012,Iu=1013,fs=1014,pn=1015,ko=1016,Nu=1017,Du=1018,dr=1020,Nf=35902,Df=1021,Uf=1022,un=1023,Of=1024,Ff=1025,cs=1026,sr=1027,Uu=1028,Ou=1029,Bf=1030,Fu=1031,Bu=1033,Zo=33776,$o=33777,Jo=33778,Qo=33779,il=35840,sl=35841,rl=35842,ol=35843,al=36196,cl=37492,ll=37496,hl=37808,ul=37809,dl=37810,fl=37811,pl=37812,ml=37813,gl=37814,_l=37815,xl=37816,vl=37817,yl=37818,Ml=37819,Sl=37820,Tl=37821,ea=36492,El=36494,bl=36495,kf=36283,wl=36284,Al=36285,Rl=36286,rr=2300,ps=2301,ta=2302,Cl=2400,Pl=2401,Ll=2402,zf=2500,Hf=0,ku=1,$a=2,Vf=3200,Gf=3201,wc=0,Wf=1,ti="",wt="srgb",Rt="srgb-linear",Ac="display-p3",zo="display-p3-linear",xo="linear",lt="srgb",vo="rec709",yo="p3",Ii=7680,Il=519,Xf=512,Yf=513,qf=514,zu=515,jf=516,Kf=517,Zf=518,$f=519,Ja=35044,Jf=35048,Nl="300 es",Bn=2e3,Mo=2001;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dl=1234567;const Zs=Math.PI/180,ms=180/Math.PI;function nn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[s&255]+It[s>>8&255]+It[s>>16&255]+It[s>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function Rc(s,e){return(s%e+e)%e}function Qf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ep(s,e,t){return s!==e?(t-s)/(e-s):0}function $s(s,e,t){return(1-t)*s+t*e}function tp(s,e,t,n){return $s(s,e,1-Math.exp(-t*n))}function np(s,e=1){return e-Math.abs(Rc(s,e*2)-e)}function ip(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function rp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function op(s,e){return s+Math.random()*(e-s)}function ap(s){return s*(.5-Math.random())}function cp(s){s!==void 0&&(Dl=s);let e=Dl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lp(s){return s*Zs}function hp(s){return s*ms}function up(s){return(s&s-1)===0&&s!==0}function dp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*m,a*l);break;case"YXY":s.set(c*m,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Hu={DEG2RAD:Zs,RAD2DEG:ms,generateUUID:nn,clamp:vt,euclideanModulo:Rc,mapLinear:Qf,inverseLerp:ep,lerp:$s,damp:tp,pingpong:np,smoothstep:ip,smootherstep:sp,randInt:rp,randFloat:op,randFloatSpread:ap,seededRandom:cp,degToRad:lp,radToDeg:hp,isPowerOfTwo:up,ceilPowerOfTwo:dp,floorPowerOfTwo:fp,setQuaternionFromProperEuler:pp,normalize:et,denormalize:ln};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,i,r,o,a,c,l){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],x=i[0],p=i[3],f=i[6],E=i[1],v=i[4],T=i[7],U=i[2],L=i[5],C=i[8];return r[0]=o*x+a*E+c*U,r[3]=o*p+a*v+c*L,r[6]=o*f+a*T+c*C,r[1]=l*x+h*E+u*U,r[4]=l*p+h*v+u*L,r[7]=l*f+h*T+u*C,r[2]=d*x+m*E+g*U,r[5]=d*p+m*v+g*L,r[8]=d*f+m*T+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,m=l*r-o*c,g=t*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Ue;function Vu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mp(){const s=or("canvas");return s.style.display="block",s}const Ul={};function Gu(s){s in Ul||(Ul[s]=!0,console.warn(s))}const Ol=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fl=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gr={[Rt]:{transfer:xo,primaries:vo,toReference:s=>s,fromReference:s=>s},[wt]:{transfer:lt,primaries:vo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[zo]:{transfer:xo,primaries:yo,toReference:s=>s.applyMatrix3(Fl),fromReference:s=>s.applyMatrix3(Ol)},[Ac]:{transfer:lt,primaries:yo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Fl),fromReference:s=>s.applyMatrix3(Ol).convertLinearToSRGB()}},gp=new Set([Rt,zo]),Qe={enabled:!0,_workingColorSpace:Rt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!gp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=gr[e].toReference,i=gr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return gr[s].primaries},getTransfer:function(s){return s===ti?xo:gr[s].transfer}};function ls(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ia(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ni;class _p{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ni===void 0&&(Ni=or("canvas")),Ni.width=e.width,Ni.height=e.height;const n=Ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ls(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xp=0;class Wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=nn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(sa(i[o].image)):r.push(sa(i[o]))}else r=sa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function sa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_p.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vp=0;class Mt extends Ci{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=ni,i=ni,r=$t,o=Fn,a=un,c=hi,l=Mt.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=nn(),this.name="",this.source=new Wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case li:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case li:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Cu;Mt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],x=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,T=(m+1)/2,U=(f+1)/2,L=(h+d)/4,C=(u+x)/4,B=(g+p)/4;return v>T&&v>U?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=L/n,r=C/n):T>U?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=L/i,r=B/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=C/r,i=B/r),this.set(n,i,r,t),this}let E=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-x)/E,this.z=(d-h)/E,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yp extends Ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends yp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xu extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mp extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==m||h!==g){let p=1-a;const f=c*d+l*m+h*g+u*x,E=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const U=Math.sqrt(v),L=Math.atan2(U,f*E);p=Math.sin(p*L)/U,a=Math.sin(a*L)/U}const T=a*E;if(c=c*p+d*T,l=l*p+m*T,h=h*p+g*T,u=u*p+x*T,p===1-a){const U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-a*m,e[t+2]=l*g+h*m+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new N,Bl=new Ct;class Hn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),xr.subVectors(this.max,Ls),Di.subVectors(e.a,Ls),Ui.subVectors(e.b,Ls),Oi.subVectors(e.c,Ls),Xn.subVectors(Ui,Di),Yn.subVectors(Oi,Ui),fi.subVectors(Di,Oi);let t=[0,-Xn.z,Xn.y,0,-Yn.z,Yn.y,0,-fi.z,fi.y,Xn.z,0,-Xn.x,Yn.z,0,-Yn.x,fi.z,0,-fi.x,-Xn.y,Xn.x,0,-Yn.y,Yn.x,0,-fi.y,fi.x,0];return!oa(t,Di,Ui,Oi,xr)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,Di,Ui,Oi,xr))?!1:(vr.crossVectors(Xn,Yn),t=[vr.x,vr.y,vr.z],oa(t,Di,Ui,Oi,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new N,new N,new N,new N,new N,new N,new N,new N],rn=new N,_r=new Hn,Di=new N,Ui=new N,Oi=new N,Xn=new N,Yn=new N,fi=new N,Ls=new N,xr=new N,vr=new N,pi=new N;function oa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){pi.fromArray(s,r);const a=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),c=e.dot(pi),l=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Sp=new Hn,Is=new N,aa=new N;class xn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(aa)),this.expandByPoint(Is.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new N,ca=new N,yr=new N,qn=new N,la=new N,Mr=new N,ha=new N;class Ts{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ca.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(ca);const r=e.distanceTo(t)*.5,o=-this.direction.dot(yr),a=qn.dot(this.direction),c=-qn.dot(yr),l=qn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ca).addScaledVector(yr,d),m}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,i,r){la.subVectors(t,e),Mr.subVectors(n,e),ha.crossVectors(la,Mr);let o=this.direction.dot(ha),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const c=a*this.direction.dot(Mr.crossVectors(qn,Mr));if(c<0)return null;const l=a*this.direction.dot(la.cross(qn));if(l<0||c+l>o)return null;const h=-a*qn.dot(ha);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,i,r,o,a,c,l,h,u,d,m,g,x,p){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,m,g,x,p)}set(e,t,n,i,r,o,a,c,l,h,u,d,m,g,x,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),o=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,m=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,m=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,m=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,m=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tp,e,Ep)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),jn.crossVectors(n,jt),jn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),jn.crossVectors(n,jt)),jn.normalize(),Sr.crossVectors(jt,jn),i[0]=jn.x,i[4]=Sr.x,i[8]=jt.x,i[1]=jn.y,i[5]=Sr.y,i[9]=jt.y,i[2]=jn.z,i[6]=Sr.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],x=n[6],p=n[10],f=n[14],E=n[3],v=n[7],T=n[11],U=n[15],L=i[0],C=i[4],B=i[8],w=i[12],S=i[1],H=i[5],G=i[9],F=i[13],j=i[2],te=i[6],oe=i[10],se=i[14],k=i[3],fe=i[7],he=i[11],ve=i[15];return r[0]=o*L+a*S+c*j+l*k,r[4]=o*C+a*H+c*te+l*fe,r[8]=o*B+a*G+c*oe+l*he,r[12]=o*w+a*F+c*se+l*ve,r[1]=h*L+u*S+d*j+m*k,r[5]=h*C+u*H+d*te+m*fe,r[9]=h*B+u*G+d*oe+m*he,r[13]=h*w+u*F+d*se+m*ve,r[2]=g*L+x*S+p*j+f*k,r[6]=g*C+x*H+p*te+f*fe,r[10]=g*B+x*G+p*oe+f*he,r[14]=g*w+x*F+p*se+f*ve,r[3]=E*L+v*S+T*j+U*k,r[7]=E*C+v*H+T*te+U*fe,r[11]=E*B+v*G+T*oe+U*he,r[15]=E*w+v*F+T*se+U*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],x=e[7],p=e[11],f=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*m-n*c*m)+x*(+t*c*m-t*l*d+r*o*d-i*o*m+i*l*h-r*c*h)+p*(+t*l*u-t*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+f*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],x=e[13],p=e[14],f=e[15],E=u*p*l-x*d*l+x*c*m-a*p*m-u*c*f+a*d*f,v=g*d*l-h*p*l-g*c*m+o*p*m+h*c*f-o*d*f,T=h*x*l-g*u*l+g*a*m-o*x*m-h*a*f+o*u*f,U=g*u*c-h*x*c-g*a*d+o*x*d+h*a*p-o*u*p,L=t*E+n*v+i*T+r*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=E*C,e[1]=(x*d*r-u*p*r-x*i*m+n*p*m+u*i*f-n*d*f)*C,e[2]=(a*p*r-x*c*r+x*i*l-n*p*l-a*i*f+n*c*f)*C,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*m-n*c*m)*C,e[4]=v*C,e[5]=(h*p*r-g*d*r+g*i*m-t*p*m-h*i*f+t*d*f)*C,e[6]=(g*c*r-o*p*r-g*i*l+t*p*l+o*i*f-t*c*f)*C,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*m+t*c*m)*C,e[8]=T*C,e[9]=(g*u*r-h*x*r-g*n*m+t*x*m+h*n*f-t*u*f)*C,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*f+t*a*f)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*m-t*a*m)*C,e[12]=U*C,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*p+t*u*p)*C,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*p-t*a*p)*C,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,m=r*h,g=r*u,x=o*h,p=o*u,f=a*u,E=c*l,v=c*h,T=c*u,U=n.x,L=n.y,C=n.z;return i[0]=(1-(x+f))*U,i[1]=(m+T)*U,i[2]=(g-v)*U,i[3]=0,i[4]=(m-T)*L,i[5]=(1-(d+f))*L,i[6]=(p+E)*L,i[7]=0,i[8]=(g+v)*C,i[9]=(p-E)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Fi.set(i[0],i[1],i[2]).length();const o=Fi.set(i[4],i[5],i[6]).length(),a=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const l=1/r,h=1/o,u=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,t.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Bn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let m,g;if(a===Bn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Mo)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Bn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,m=(n+i)*h;let g,x;if(a===Bn)g=(o+r)*u,x=-2*u;else if(a===Mo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fi=new N,on=new De,Tp=new N(0,0,0),Ep=new N(1,1,1),jn=new N,Sr=new N,jt=new N,kl=new De,zl=new Ct;class Xt{constructor(e=0,t=0,n=0,i=Xt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zl.setFromEuler(this),this.setFromQuaternion(zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xt.DEFAULT_ORDER="XYZ";class Cc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bp=0;const Hl=new N,Bi=new Ct,An=new De,Tr=new N,Ns=new N,wp=new N,Ap=new Ct,Vl=new N(1,0,0),Gl=new N(0,1,0),Wl=new N(0,0,1),Xl={type:"added"},Rp={type:"removed"},ki={type:"childadded",child:null},ua={type:"childremoved",child:null};class Ie extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const e=new N,t=new Xt,n=new Ct,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Ue}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Vl,e)}rotateY(e){return this.rotateOnAxis(Gl,e)}rotateZ(e){return this.rotateOnAxis(Wl,e)}translateOnAxis(e,t){return Hl.copy(e).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vl,e)}translateY(e){return this.translateOnAxis(Gl,e)}translateZ(e){return this.translateOnAxis(Wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tr.copy(e):Tr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Ns,Tr,this.up):An.lookAt(Tr,Ns,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(An),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xl),ki.child=e,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rp),ua.child=e,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xl),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ie.DEFAULT_UP=new N(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new N,Rn=new N,da=new N,Cn=new N,zi=new N,Hi=new N,Yl=new N,fa=new N,pa=new N,ma=new N;class hn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){an.subVectors(i,t),Rn.subVectors(n,t),da.subVectors(e,t);const o=an.dot(an),a=an.dot(Rn),c=an.dot(da),l=Rn.dot(Rn),h=Rn.dot(da),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Cn.x),c.addScaledVector(o,Cn.y),c.addScaledVector(a,Cn.z),c)}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),Rn.subVectors(e,t),an.cross(Rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),an.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;zi.subVectors(i,n),Hi.subVectors(r,n),fa.subVectors(e,n);const c=zi.dot(fa),l=Hi.dot(fa);if(c<=0&&l<=0)return t.copy(n);pa.subVectors(e,i);const h=zi.dot(pa),u=Hi.dot(pa);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(zi,o);ma.subVectors(e,r);const m=zi.dot(ma),g=Hi.dot(ma);if(g>=0&&m<=g)return t.copy(r);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Hi,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Yl.subVectors(r,i),a=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(Yl,a);const f=1/(p+x+d);return o=x*f,a=d*f,t.copy(n).addScaledVector(zi,o).addScaledVector(Hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function ga(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Rc(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ga(o,r,e+1/3),this.g=ga(o,r,e),this.b=ga(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=Yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Qe.fromWorkingColorSpace(Nt.copy(this),e),Math.round(vt(Nt.r*255,0,255))*65536+Math.round(vt(Nt.g*255,0,255))*256+Math.round(vt(Nt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,r=Nt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=wt){Qe.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(Er);const n=$s(Kn.h,Er.h,t),i=$s(Kn.s,Er.s,t),r=$s(Kn.l,Er.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Le;Le.NAMES=Yu;let Cp=0;class sn extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=nn(),this.name="",this.type="Material",this.blending=as,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ka,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yt extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new N,br=new ie;class pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),e}}class qu extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ju extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pp=0;const en=new De,_a=new Ie,Vi=new N,Kt=new Hn,Ds=new Hn,bt=new N;class at extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vu(e)?ju:qu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Kt.min,Ds.min),Kt.expandByPoint(bt),bt.addVectors(Kt.max,Ds.max),Kt.expandByPoint(bt)):(Kt.expandByPoint(Ds.min),Kt.expandByPoint(Ds.max))}Kt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)bt.fromBufferAttribute(a,l),c&&(Vi.fromBufferAttribute(e,l),bt.add(Vi)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<n.count;B++)a[B]=new N,c[B]=new N;const l=new N,h=new N,u=new N,d=new ie,m=new ie,g=new ie,x=new N,p=new N;function f(B,w,S){l.fromBufferAttribute(n,B),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,B),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),m.sub(d),g.sub(d);const H=1/(m.x*g.y-g.x*m.y);isFinite(H)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(H),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(H),a[B].add(x),a[w].add(x),a[S].add(x),c[B].add(p),c[w].add(p),c[S].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let B=0,w=E.length;B<w;++B){const S=E[B],H=S.start,G=S.count;for(let F=H,j=H+G;F<j;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new N,T=new N,U=new N,L=new N;function C(B){U.fromBufferAttribute(i,B),L.copy(U);const w=a[B];v.copy(w),v.sub(U.multiplyScalar(U.dot(w))).normalize(),T.crossVectors(L,w);const H=T.dot(c[B])<0?-1:1;o.setXYZW(B,v.x,v.y,v.z,H)}for(let B=0,w=E.length;B<w;++B){const S=E[B],H=S.start,G=S.count;for(let F=H,j=H+G;F<j;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new at,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new De,mi=new Ts,wr=new xn,jl=new N,Gi=new N,Wi=new N,Xi=new N,xa=new N,Ar=new N,Rr=new ie,Cr=new ie,Pr=new ie,Kl=new N,Zl=new N,$l=new N,Lr=new N,Ir=new N;class Re extends Ie{constructor(e=new at,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(xa.fromBufferAttribute(u,e),o?Ar.addScaledVector(xa,h):Ar.addScaledVector(xa.sub(t),h))}t.add(Ar)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(wr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(wr,jl)===null||mi.origin.distanceToSquared(jl)>(e.far-e.near)**2))&&(ql.copy(r).invert(),mi.copy(e.ray).applyMatrix4(ql),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,U=v;T<U;T+=3){const L=a.getX(T),C=a.getX(T+1),B=a.getX(T+2);i=Nr(this,f,e,n,l,h,u,L,C,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const E=a.getX(p),v=a.getX(p+1),T=a.getX(p+2);i=Nr(this,o,e,n,l,h,u,E,v,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,U=v;T<U;T+=3){const L=T,C=T+1,B=T+2;i=Nr(this,f,e,n,l,h,u,L,C,B),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const E=p,v=p+1,T=p+2;i=Nr(this,o,e,n,l,h,u,E,v,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Lp(s,e,t,n,i,r,o,a){let c;if(e.side===Wt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===zn,a),c===null)return null;Ir.copy(a),Ir.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ir);return l<t.near||l>t.far?null:{distance:l,point:Ir.clone(),object:s}}function Nr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Gi),s.getVertexPosition(c,Wi),s.getVertexPosition(l,Xi);const h=Lp(s,e,t,n,Gi,Wi,Xi,Lr);if(h){i&&(Rr.fromBufferAttribute(i,a),Cr.fromBufferAttribute(i,c),Pr.fromBufferAttribute(i,l),h.uv=hn.getInterpolation(Lr,Gi,Wi,Xi,Rr,Cr,Pr,new ie)),r&&(Rr.fromBufferAttribute(r,a),Cr.fromBufferAttribute(r,c),Pr.fromBufferAttribute(r,l),h.uv1=hn.getInterpolation(Lr,Gi,Wi,Xi,Rr,Cr,Pr,new ie)),o&&(Kl.fromBufferAttribute(o,a),Zl.fromBufferAttribute(o,c),$l.fromBufferAttribute(o,l),h.normal=hn.getInterpolation(Lr,Gi,Wi,Xi,Kl,Zl,$l,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new N,materialIndex:0};hn.getNormal(Gi,Wi,Xi,u.normal),h.face=u}return h}class Yt extends at{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function g(x,p,f,E,v,T,U,L,C,B,w){const S=T/C,H=U/B,G=T/2,F=U/2,j=L/2,te=C+1,oe=B+1;let se=0,k=0;const fe=new N;for(let he=0;he<oe;he++){const ve=he*H-F;for(let Ce=0;Ce<te;Ce++){const je=Ce*S-G;fe[x]=je*E,fe[p]=ve*v,fe[f]=j,l.push(fe.x,fe.y,fe.z),fe[x]=0,fe[p]=0,fe[f]=L>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(Ce/C),u.push(1-he/B),se+=1}}for(let he=0;he<B;he++)for(let ve=0;ve<C;ve++){const Ce=d+ve+te*he,je=d+ve+te*(he+1),D=d+(ve+1)+te*(he+1),I=d+(ve+1)+te*he;c.push(Ce,je,I),c.push(je,D,I),k+=6}a.addGroup(m,k,w),m+=k,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(s){const e={};for(let t=0;t<s.length;t++){const n=gs(s[t]);for(const i in n)e[i]=n[i]}return e}function Ip(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ku(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Np={clone:gs,merge:Bt};var Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=Up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=Ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zu extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new N,Jl=new ie,Ql=new ie;class Ut extends Zu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Jl,Ql),t.subVectors(Ql,Jl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,qi=1;class Op extends Ie{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ut(Yi,qi,e,t);i.layers=this.layers,this.add(i);const r=new Ut(Yi,qi,e,t);r.layers=this.layers,this.add(r);const o=new Ut(Yi,qi,e,t);o.layers=this.layers,this.add(o);const a=new Ut(Yi,qi,e,t);a.layers=this.layers,this.add(a);const c=new Ut(Yi,qi,e,t);c.layers=this.layers,this.add(c);const l=new Ut(Yi,qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $u extends Mt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fp extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $u(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Yt(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:oi});r.uniforms.tEquirect.value=t;const o=new Re(i,r),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=$t),new Op(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const va=new N,Bp=new N,kp=new Ue;class Qn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=va.subVectors(n,t).cross(Bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(va),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kp.getNormalMatrix(e),i=this.coplanarPoint(va).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new xn,Dr=new N;class Pc{constructor(e=new Qn,t=new Qn,n=new Qn,i=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],x=i[10],p=i[11],f=i[12],E=i[13],v=i[14],T=i[15];if(n[0].setComponents(c-r,d-l,p-m,T-f).normalize(),n[1].setComponents(c+r,d+l,p+m,T+f).normalize(),n[2].setComponents(c+o,d+h,p+g,T+E).normalize(),n[3].setComponents(c-o,d-h,p-g,T-E).normalize(),n[4].setComponents(c-a,d-u,p-x,T-v).normalize(),t===Bn)n[5].setComponents(c+a,d+u,p+x,T+v).normalize();else if(t===Mo)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Dr.x=i.normal.x>0?e.max.x:e.min.x,Dr.y=i.normal.y>0?e.max.y:e.min.y,Dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ju(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function zp(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=s.SHORT;else if(l instanceof Uint32Array)m=s.UNSIGNED_INT;else if(l instanceof Int32Array)m=s.INT;else if(l instanceof Int8Array)m=s.BYTE;else if(l instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(s.bindBuffer(l,a),u.count===-1&&d.length===0&&s.bufferSubData(l,0,h),d.length!==0){for(let m=0,g=d.length;m<g;m++){const x=d[m];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class fr extends at{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,m=[],g=[],x=[],p=[];for(let f=0;f<h;f++){const E=f*d-o;for(let v=0;v<l;v++){const T=v*u-r;g.push(T,-E,0),x.push(0,0,1),p.push(v/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const v=E+l*f,T=E+l*(f+1),U=E+1+l*(f+1),L=E+1+l*f;m.push(v,T,L),m.push(T,U,L)}this.setIndex(m),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,em=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,um=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,km=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ng=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ug=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Hp,alphahash_pars_fragment:Vp,alphamap_fragment:Gp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:Yp,aomap_fragment:qp,aomap_pars_fragment:jp,batching_pars_vertex:Kp,batching_vertex:Zp,begin_vertex:$p,beginnormal_vertex:Jp,bsdfs:Qp,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:sm,clipping_planes_vertex:rm,color_fragment:om,color_pars_fragment:am,color_pars_vertex:cm,color_vertex:lm,common:hm,cube_uv_reflection_fragment:um,defaultnormal_vertex:dm,displacementmap_pars_vertex:fm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:gm,colorspace_fragment:_m,colorspace_pars_fragment:xm,envmap_fragment:vm,envmap_common_pars_fragment:ym,envmap_pars_fragment:Mm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Nm,envmap_vertex:Tm,fog_vertex:Em,fog_pars_vertex:bm,fog_fragment:wm,fog_pars_fragment:Am,gradientmap_pars_fragment:Rm,lightmap_pars_fragment:Cm,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Lm,lights_pars_begin:Im,lights_toon_fragment:Dm,lights_toon_pars_fragment:Um,lights_phong_fragment:Om,lights_phong_pars_fragment:Fm,lights_physical_fragment:Bm,lights_physical_pars_fragment:km,lights_fragment_begin:zm,lights_fragment_maps:Hm,lights_fragment_end:Vm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:Ym,map_fragment:qm,map_pars_fragment:jm,map_particle_fragment:Km,map_particle_pars_fragment:Zm,metalnessmap_fragment:$m,metalnessmap_pars_fragment:Jm,morphinstance_vertex:Qm,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:sg,normal_fragment_maps:rg,normal_pars_fragment:og,normal_pars_vertex:ag,normal_vertex:cg,normalmap_pars_fragment:lg,clearcoat_normal_fragment_begin:hg,clearcoat_normal_fragment_maps:ug,clearcoat_pars_fragment:dg,iridescence_pars_fragment:fg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:_g,dithering_fragment:xg,dithering_pars_fragment:vg,roughnessmap_fragment:yg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:Sg,shadowmap_pars_vertex:Tg,shadowmap_vertex:Eg,shadowmask_pars_fragment:bg,skinbase_vertex:wg,skinning_pars_vertex:Ag,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Pg,specularmap_pars_fragment:Lg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Ng,transmission_fragment:Dg,transmission_pars_fragment:Ug,uv_pars_fragment:Og,uv_pars_vertex:Fg,uv_vertex:Bg,worldpos_vertex:kg,background_vert:zg,background_frag:Hg,backgroundCube_vert:Vg,backgroundCube_frag:Gg,cube_vert:Wg,cube_frag:Xg,depth_vert:Yg,depth_frag:qg,distanceRGBA_vert:jg,distanceRGBA_frag:Kg,equirect_vert:Zg,equirect_frag:$g,linedashed_vert:Jg,linedashed_frag:Qg,meshbasic_vert:e0,meshbasic_frag:t0,meshlambert_vert:n0,meshlambert_frag:i0,meshmatcap_vert:s0,meshmatcap_frag:r0,meshnormal_vert:o0,meshnormal_frag:a0,meshphong_vert:c0,meshphong_frag:l0,meshphysical_vert:h0,meshphysical_frag:u0,meshtoon_vert:d0,meshtoon_frag:f0,points_vert:p0,points_frag:m0,shadow_vert:g0,shadow_frag:_0,sprite_vert:x0,sprite_frag:v0},ye={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},fn={basic:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Bt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Bt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Bt([ye.points,ye.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Bt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Bt([ye.common,ye.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Bt([ye.sprite,ye.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Bt([ye.common,ye.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Bt([ye.lights,ye.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};fn.physical={uniforms:Bt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ur={r:0,b:0,g:0},_i=new Xt,y0=new De;function M0(s,e,t,n,i,r,o){const a=new Le(0);let c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function x(E){let v=!1;const T=g(E);T===null?f(a,c):T&&T.isColor&&(f(T,1),v=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function p(E,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===Bo)?(h===void 0&&(h=new Re(new Yt(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:gs(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),_i.copy(v.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(y0.makeRotationFromEuler(_i)),h.material.toneMapped=Qe.getTransfer(T.colorSpace)!==lt,(u!==T||d!==T.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,m=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Re(new fr(2,2),new ui({name:"BackgroundMaterial",uniforms:gs(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(T.colorSpace)!==lt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,m=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,v){E.getRGB(Ur,Ku(s)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:x,addToRenderList:p}}function S0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,H,G,F,j){let te=!1;const oe=u(F,G,H);r!==oe&&(r=oe,l(r.object)),te=m(S,F,G,j),te&&g(S,F,G,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,T(S,H,G,F),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,H,G){const F=G.wireframe===!0;let j=n[S.id];j===void 0&&(j={},n[S.id]=j);let te=j[H.id];te===void 0&&(te={},j[H.id]=te);let oe=te[F];return oe===void 0&&(oe=d(c()),te[F]=oe),oe}function d(S){const H=[],G=[],F=[];for(let j=0;j<t;j++)H[j]=0,G[j]=0,F[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:F,object:S,attributes:{},index:null}}function m(S,H,G,F){const j=r.attributes,te=H.attributes;let oe=0;const se=G.getAttributes();for(const k in se)if(se[k].location>=0){const he=j[k];let ve=te[k];if(ve===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;oe++}return r.attributesNum!==oe||r.index!==F}function g(S,H,G,F){const j={},te=H.attributes;let oe=0;const se=G.getAttributes();for(const k in se)if(se[k].location>=0){let he=te[k];he===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(he=S.instanceColor));const ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),j[k]=ve,oe++}r.attributes=j,r.attributesNum=oe,r.index=F}function x(){const S=r.newAttributes;for(let H=0,G=S.length;H<G;H++)S[H]=0}function p(S){f(S,0)}function f(S,H){const G=r.newAttributes,F=r.enabledAttributes,j=r.attributeDivisors;G[S]=1,F[S]===0&&(s.enableVertexAttribArray(S),F[S]=1),j[S]!==H&&(s.vertexAttribDivisor(S,H),j[S]=H)}function E(){const S=r.newAttributes,H=r.enabledAttributes;for(let G=0,F=H.length;G<F;G++)H[G]!==S[G]&&(s.disableVertexAttribArray(G),H[G]=0)}function v(S,H,G,F,j,te,oe){oe===!0?s.vertexAttribIPointer(S,H,G,j,te):s.vertexAttribPointer(S,H,G,F,j,te)}function T(S,H,G,F){x();const j=F.attributes,te=G.getAttributes(),oe=H.defaultAttributeValues;for(const se in te){const k=te[se];if(k.location>=0){let fe=j[se];if(fe===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),fe!==void 0){const he=fe.normalized,ve=fe.itemSize,Ce=e.get(fe);if(Ce===void 0)continue;const je=Ce.buffer,D=Ce.type,I=Ce.bytesPerElement,A=D===s.INT||D===s.UNSIGNED_INT||fe.gpuType===Iu;if(fe.isInterleavedBufferAttribute){const b=fe.data,ee=b.stride,le=fe.offset;if(b.isInstancedInterleavedBuffer){for(let P=0;P<k.locationSize;P++)f(k.location+P,b.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let P=0;P<k.locationSize;P++)p(k.location+P);s.bindBuffer(s.ARRAY_BUFFER,je);for(let P=0;P<k.locationSize;P++)v(k.location+P,ve/k.locationSize,D,he,ee*I,(le+ve/k.locationSize*P)*I,A)}else{if(fe.isInstancedBufferAttribute){for(let b=0;b<k.locationSize;b++)f(k.location+b,fe.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let b=0;b<k.locationSize;b++)p(k.location+b);s.bindBuffer(s.ARRAY_BUFFER,je);for(let b=0;b<k.locationSize;b++)v(k.location+b,ve/k.locationSize,D,he,ve*I,ve/k.locationSize*b*I,A)}}else if(oe!==void 0){const he=oe[se];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(k.location,he);break;case 3:s.vertexAttrib3fv(k.location,he);break;case 4:s.vertexAttrib4fv(k.location,he);break;default:s.vertexAttrib1fv(k.location,he)}}}}E()}function U(){B();for(const S in n){const H=n[S];for(const G in H){const F=H[G];for(const j in F)h(F[j].object),delete F[j];delete H[G]}delete n[S]}}function L(S){if(n[S.id]===void 0)return;const H=n[S.id];for(const G in H){const F=H[G];for(const j in F)h(F[j].object),delete F[j];delete H[G]}delete n[S.id]}function C(S){for(const H in n){const G=n[H];if(G[S.id]===void 0)continue;const F=G[S.id];for(const j in F)h(F[j].object),delete F[j];delete G[S.id]}}function B(){w(),o=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:B,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:E}}function T0(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u;m++)this.render(l[m],h[m]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}}function c(l,h,u,d){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function E0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==un&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const C=L===ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==hi&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==pn&&!C)}function c(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:T,maxSamples:U}}function b0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Qn,a=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const E=r?0:n,v=E*4;let T=f.clippingState||null;c.value=T,T=h(g,d,v,m);for(let U=0;U!==v;++U)T[U]=t[U];f.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const f=m+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,T=m;v!==x;++v,T+=4)o.copy(u[v]).applyMatrix4(E,a),o.normal.toArray(p,T),p[T+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function w0(s){let e=new WeakMap;function t(o,a){return a===go?o.mapping=us:a===Za&&(o.mapping=ds),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===go||a===Za)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Fp(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ho extends Zu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,eh=[.125,.215,.35,.446,.526,.582],Ti=20,ya=new Ho,th=new Le;let Ma=null,Sa=0,Ta=0,Ea=!1;const Mi=(1+Math.sqrt(5))/2,ji=1/Mi,nh=[new N(-Mi,ji,0),new N(Mi,ji,0),new N(-ji,0,Mi),new N(ji,0,Mi),new N(0,Mi,-ji),new N(0,Mi,ji),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class ih{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma,Sa,Ta),this._renderer.xr.enabled=Ea,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:ko,format:un,colorSpace:Rt,depthBuffer:!1},i=sh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A0(r)),this._blurMaterial=R0(r,e,t)}return i}_compileMaterial(e){const t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,n,i){const a=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(th),h.toneMapping=ai,h.autoClear=!1;const m=new yt({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new Re(new Yt,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(th),x=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const v=this._cubeSize;Or(i,E*v,f>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===us||e.mapping===ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Or(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nh[(i-r-1)%nh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Re(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ti-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Ti;p>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ti}`);const f=[];let E=0;for(let C=0;C<Ti;++C){const B=C/x,w=Math.exp(-B*B/2);f.push(w),C===0?E+=w:C<p&&(E+=2*w)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const T=this._sizeLods[i],U=3*T*(i>v-ts?i-v+ts:0),L=4*(this._cubeSize-T);Or(t,U,L,3*T,2*T),c.setRenderTarget(t),c.render(u,ya)}}function A0(s){const e=[],t=[],n=[];let i=s;const r=s-ts+1+eh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ts?c=eh[o-s+ts-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,p=2,f=1,E=new Float32Array(x*g*m),v=new Float32Array(p*g*m),T=new Float32Array(f*g*m);for(let L=0;L<m;L++){const C=L%3*2/3-1,B=L>2?0:-1,w=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];E.set(w,x*g*L),v.set(d,p*g*L);const S=[L,L,L,L,L,L];T.set(S,f*g*L)}const U=new at;U.setAttribute("position",new pt(E,x)),U.setAttribute("uv",new pt(v,p)),U.setAttribute("faceIndex",new pt(T,f)),e.push(U),i>ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sh(s,e,t){const n=new bi(s,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function R0(s,e,t){const n=new Float32Array(Ti),i=new N(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function rh(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function oh(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===go||c===Za,h=c===us||c===ds;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ih(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&i(m)?(t===null&&(t=new ih(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function P0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function L0(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const x=m[g];for(let p=0,f=x.length;p<f;p++)e.update(x[p],s.ARRAY_BUFFER)}}function l(u){const d=[],m=u.index,g=u.attributes.position;let x=0;if(m!==null){const E=m.array;x=m.version;for(let v=0,T=E.length;v<T;v+=3){const U=E[v+0],L=E[v+1],C=E[v+2];d.push(U,L,L,C,C,U)}}else if(g!==void 0){const E=g.array;x=g.version;for(let v=0,T=E.length/3-1;v<T;v+=3){const U=v+0,L=v+1,C=v+2;d.push(U,L,L,C,C,U)}}else return;const p=new(Vu(d)?ju:qu)(d,1);p.version=x;const f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function I0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,m){s.drawElements(n,m,r,d*o),t.update(m,n,1)}function l(d,m,g){g!==0&&(s.drawElementsInstanced(n,m,r,d*o,g),t.update(m,n,g))}function h(d,m,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<g;p++)this.render(d[p]/o,m[p]);else{x.multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}}function u(d,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/o,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,x,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E];for(let E=0;E<x.length;E++)t.update(f,n,x[E])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function N0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function D0(s,e,t){const n=new WeakMap,i=new rt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){B.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),x===!0&&(T=2),p===!0&&(T=3);let U=a.attributes.position.count*T,L=1;U>e.maxTextureSize&&(L=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const C=new Float32Array(U*L*4*u),B=new Xu(C,U,L,u);B.type=pn,B.needsUpdate=!0;const w=T*4;for(let H=0;H<u;H++){const G=f[H],F=E[H],j=v[H],te=U*L*4*H;for(let oe=0;oe<G.count;oe++){const se=oe*w;g===!0&&(i.fromBufferAttribute(G,oe),C[te+se+0]=i.x,C[te+se+1]=i.y,C[te+se+2]=i.z,C[te+se+3]=0),x===!0&&(i.fromBufferAttribute(F,oe),C[te+se+4]=i.x,C[te+se+5]=i.y,C[te+se+6]=i.z,C[te+se+7]=0),p===!0&&(i.fromBufferAttribute(j,oe),C[te+se+8]=i.x,C[te+se+9]=i.y,C[te+se+10]=i.z,C[te+se+11]=j.itemSize===4?i.w:1)}}d={count:u,texture:B,size:new ie(U,L)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function U0(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Qu extends Mt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:cs,h!==cs&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cs&&(n=fs),n===void 0&&h===sr&&(n=dr),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ot,this.minFilter=c!==void 0?c:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ed=new Mt,td=new Qu(1,1);td.compareFunction=zu;const nd=new Xu,id=new Mp,sd=new $u,ah=[],ch=[],lh=new Float32Array(16),hh=new Float32Array(9),uh=new Float32Array(4);function Es(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ah[i];if(r===void 0&&(r=new Float32Array(i),ah[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function St(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Vo(s,e){let t=ch[e];t===void 0&&(t=new Int32Array(e),ch[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function O0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function F0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function B0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function k0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function z0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(St(t,n))return;uh.set(n),s.uniformMatrix2fv(this.addr,!1,uh),Tt(t,n)}}function H0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(St(t,n))return;hh.set(n),s.uniformMatrix3fv(this.addr,!1,hh),Tt(t,n)}}function V0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(St(t,n))return;lh.set(n),s.uniformMatrix4fv(this.addr,!1,lh),Tt(t,n)}}function G0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function W0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function X0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function Y0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function q0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function j0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function K0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function Z0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function $0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?td:ed;t.setTexture2D(e||r,i)}function J0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||id,i)}function Q0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sd,i)}function e_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nd,i)}function t_(s){switch(s){case 5126:return O0;case 35664:return F0;case 35665:return B0;case 35666:return k0;case 35674:return z0;case 35675:return H0;case 35676:return V0;case 5124:case 35670:return G0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return Y0;case 5125:return q0;case 36294:return j0;case 36295:return K0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return e_}}function n_(s,e){s.uniform1fv(this.addr,e)}function i_(s,e){const t=Es(e,this.size,2);s.uniform2fv(this.addr,t)}function s_(s,e){const t=Es(e,this.size,3);s.uniform3fv(this.addr,t)}function r_(s,e){const t=Es(e,this.size,4);s.uniform4fv(this.addr,t)}function o_(s,e){const t=Es(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function a_(s,e){const t=Es(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function c_(s,e){const t=Es(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function l_(s,e){s.uniform1iv(this.addr,e)}function h_(s,e){s.uniform2iv(this.addr,e)}function u_(s,e){s.uniform3iv(this.addr,e)}function d_(s,e){s.uniform4iv(this.addr,e)}function f_(s,e){s.uniform1uiv(this.addr,e)}function p_(s,e){s.uniform2uiv(this.addr,e)}function m_(s,e){s.uniform3uiv(this.addr,e)}function g_(s,e){s.uniform4uiv(this.addr,e)}function __(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ed,r[o])}function x_(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||id,r[o])}function v_(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||sd,r[o])}function y_(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);St(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||nd,r[o])}function M_(s){switch(s){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return c_;case 5124:case 35670:return l_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return y_}}class S_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=t_(t.type)}}class T_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M_(t.type)}}class E_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function dh(s,e){s.seq.push(e),s.map[e.id]=e}function b_(s,e,t){const n=s.name,i=n.length;for(ba.lastIndex=0;;){const r=ba.exec(n),o=ba.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){dh(t,l===void 0?new S_(a,s,e):new T_(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new E_(a),dh(t,u)),t=u}}}class lo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);b_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function fh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const w_=37297;let A_=0;function R_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function C_(s){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(s);let n;switch(e===t?n="":e===yo&&t===vo?n="LinearDisplayP3ToLinearSRGB":e===vo&&t===yo&&(n="LinearSRGBToLinearDisplayP3"),s){case Rt:case zo:return[n,"LinearTransferOETF"];case wt:case Ac:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ph(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+R_(s.getShaderSource(e),o)}else return i}function P_(s,e){const t=C_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function L_(s,e){let t;switch(e){case Tf:t="Linear";break;case Ef:t="Reinhard";break;case bf:t="OptimizedCineon";break;case wf:t="ACESFilmic";break;case Rf:t="AgX";break;case Cf:t="Neutral";break;case Af:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function I_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function N_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function D_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function qs(s){return s!==""}function mh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(s){return s.replace(U_,F_)}const O_=new Map;function F_(s,e){let t=Ge[e];if(t===void 0){const n=O_.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qa(t)}const B_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(s){return s.replace(B_,k_)}function k_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ru?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===jd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function H_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function G_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case bc:e="ENVMAP_BLENDING_MULTIPLY";break;case Mf:e="ENVMAP_BLENDING_MIX";break;case Sf:e="ENVMAP_BLENDING_ADD";break}return e}function W_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function X_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=z_(t),l=H_(t),h=V_(t),u=G_(t),d=W_(t),m=I_(t),g=N_(r),x=i.createProgram();let p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),f.length>0&&(f+=`
`)):(p=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),f=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ai?L_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,P_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),o=Qa(o),o=mh(o,t),o=gh(o,t),a=Qa(a),a=mh(a,t),a=gh(a,t),o=_h(o),a=_h(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=E+p+o,T=E+f+a,U=fh(i,i.VERTEX_SHADER,v),L=fh(i,i.FRAGMENT_SHADER,T);i.attachShader(x,U),i.attachShader(x,L),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(H){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(U).trim(),j=i.getShaderInfoLog(L).trim();let te=!0,oe=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,U,L);else{const se=ph(i,U,"vertex"),k=ph(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+G+`
`+se+`
`+k)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(F===""||j==="")&&(oe=!1);oe&&(H.diagnostics={runnable:te,programLog:G,vertexShader:{log:F,prefix:p},fragmentShader:{log:j,prefix:f}})}i.deleteShader(U),i.deleteShader(L),B=new lo(i,x),w=D_(i,x)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,w_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=L,this}let Y_=0;class q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new j_(e),t.set(e,n)),n}}class j_{constructor(e){this.id=Y_++,this.code=e,this.usedTimes=0}}function K_(s,e,t,n,i,r,o){const a=new Cc,c=new q_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,S,H,G,F){const j=G.fog,te=F.geometry,oe=w.isMeshStandardMaterial?G.environment:null,se=(w.isMeshStandardMaterial?t:e).get(w.envMap||oe),k=se&&se.mapping===Bo?se.image.height:null,fe=g[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const he=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ve=he!==void 0?he.length:0;let Ce=0;te.morphAttributes.position!==void 0&&(Ce=1),te.morphAttributes.normal!==void 0&&(Ce=2),te.morphAttributes.color!==void 0&&(Ce=3);let je,D,I,A;if(fe){const Ze=fn[fe];je=Ze.vertexShader,D=Ze.fragmentShader}else je=w.vertexShader,D=w.fragmentShader,c.update(w),I=c.getVertexShaderID(w),A=c.getFragmentShaderID(w);const b=s.getRenderTarget(),ee=F.isInstancedMesh===!0,le=F.isBatchedMesh===!0,P=!!w.map,de=!!w.matcap,W=!!se,Z=!!w.aoMap,O=!!w.lightMap,q=!!w.bumpMap,K=!!w.normalMap,ae=!!w.displacementMap,z=!!w.emissiveMap,_=!!w.metalnessMap,y=!!w.roughnessMap,V=w.anisotropy>0,re=w.clearcoat>0,ue=w.dispersion>0,ce=w.iridescence>0,Te=w.sheen>0,_e=w.transmission>0,xe=V&&!!w.anisotropyMap,Pe=re&&!!w.clearcoatMap,me=re&&!!w.clearcoatNormalMap,Ee=re&&!!w.clearcoatRoughnessMap,Fe=ce&&!!w.iridescenceMap,Ae=ce&&!!w.iridescenceThicknessMap,Se=Te&&!!w.sheenColorMap,Oe=Te&&!!w.sheenRoughnessMap,We=!!w.specularMap,st=!!w.specularColorMap,He=!!w.specularIntensityMap,M=_e&&!!w.transmissionMap,X=_e&&!!w.thicknessMap,$=!!w.gradientMap,pe=!!w.alphaMap,ge=w.alphaTest>0,ze=!!w.alphaHash,Xe=!!w.extensions;let dt=ai;w.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(dt=s.toneMapping);const Et={shaderID:fe,shaderType:w.type,shaderName:w.name,vertexShader:je,fragmentShader:D,defines:w.defines,customVertexShaderID:I,customFragmentShaderID:A,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:le,instancing:ee,instancingColor:ee&&F.instanceColor!==null,instancingMorph:ee&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:b===null?s.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Rt,alphaToCoverage:!!w.alphaToCoverage,map:P,matcap:de,envMap:W,envMapMode:W&&se.mapping,envMapCubeUVHeight:k,aoMap:Z,lightMap:O,bumpMap:q,normalMap:K,displacementMap:d&&ae,emissiveMap:z,normalMapObjectSpace:K&&w.normalMapType===Wf,normalMapTangentSpace:K&&w.normalMapType===wc,metalnessMap:_,roughnessMap:y,anisotropy:V,anisotropyMap:xe,clearcoat:re,clearcoatMap:Pe,clearcoatNormalMap:me,clearcoatRoughnessMap:Ee,dispersion:ue,iridescence:ce,iridescenceMap:Fe,iridescenceThicknessMap:Ae,sheen:Te,sheenColorMap:Se,sheenRoughnessMap:Oe,specularMap:We,specularColorMap:st,specularIntensityMap:He,transmission:_e,transmissionMap:M,thicknessMap:X,gradientMap:$,opaque:w.transparent===!1&&w.blending===as&&w.alphaToCoverage===!1,alphaMap:pe,alphaTest:ge,alphaHash:ze,combine:w.combine,mapUv:P&&x(w.map.channel),aoMapUv:Z&&x(w.aoMap.channel),lightMapUv:O&&x(w.lightMap.channel),bumpMapUv:q&&x(w.bumpMap.channel),normalMapUv:K&&x(w.normalMap.channel),displacementMapUv:ae&&x(w.displacementMap.channel),emissiveMapUv:z&&x(w.emissiveMap.channel),metalnessMapUv:_&&x(w.metalnessMap.channel),roughnessMapUv:y&&x(w.roughnessMap.channel),anisotropyMapUv:xe&&x(w.anisotropyMap.channel),clearcoatMapUv:Pe&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(w.sheenRoughnessMap.channel),specularMapUv:We&&x(w.specularMap.channel),specularColorMapUv:st&&x(w.specularColorMap.channel),specularIntensityMapUv:He&&x(w.specularIntensityMap.channel),transmissionMapUv:M&&x(w.transmissionMap.channel),thicknessMapUv:X&&x(w.thicknessMap.channel),alphaMapUv:pe&&x(w.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(K||V),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!te.attributes.uv&&(P||pe),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:P&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Zt,flipSided:w.side===Wt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Xe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Xe&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function f(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)S.push(H),S.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(E(S,w),v(S,w),S.push(s.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function E(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),w.push(a.mask)}function T(w){const S=g[w.type];let H;if(S){const G=fn[S];H=Np.clone(G.uniforms)}else H=w.uniforms;return H}function U(w,S){let H;for(let G=0,F=h.length;G<F;G++){const j=h[G];if(j.cacheKey===S){H=j,++H.usedTimes;break}}return H===void 0&&(H=new X_(s,S,w,r),h.push(H)),H}function L(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function B(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:T,acquireProgram:U,releaseProgram:L,releaseShaderCache:C,programs:h,dispose:B}}function Z_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,m,g,x,p){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=p),e++,f}function a(u,d,m,g,x,p){const f=o(u,d,m,g,x,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):t.push(f)}function c(u,d,m,g,x,p){const f=o(u,d,m,g,x,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||$_),n.length>1&&n.sort(d||vh),i.length>1&&i.sort(d||vh)}function h(){for(let u=e,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function J_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new yh,s.set(n,[o])):i>=r.length?(o=new yh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Q_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Le};break;case"SpotLight":t={position:new N,direction:new N,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function ex(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let tx=0;function nx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ix(s){const e=new Q_,t=ex(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,r=new De,o=new De;function a(l,h){let u=0,d=0,m=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let g=0,x=0,p=0,f=0,E=0,v=0,T=0,U=0,L=0,C=0,B=0;l.sort(nx);const w=h===!0?Math.PI:1;for(let H=0,G=l.length;H<G;H++){const F=l[H],j=F.color,te=F.intensity,oe=F.distance,se=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=j.r*te*w,d+=j.g*te*w,m+=j.b*te*w;else if(F.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(F.sh.coefficients[k],te);B++}else if(F.isDirectionalLight){const k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity*w),F.castShadow){const fe=F.shadow,he=t.get(F);he.shadowBias=fe.bias,he.shadowNormalBias=fe.normalBias,he.shadowRadius=fe.radius,he.shadowMapSize=fe.mapSize,n.directionalShadow[g]=he,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=F.shadow.matrix,v++}n.directional[g]=k,g++}else if(F.isSpotLight){const k=e.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(j).multiplyScalar(te*w),k.distance=oe,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,n.spot[p]=k;const fe=F.shadow;if(F.map&&(n.spotLightMap[L]=F.map,L++,fe.updateMatrices(F),F.castShadow&&C++),n.spotLightMatrix[p]=fe.matrix,F.castShadow){const he=t.get(F);he.shadowBias=fe.bias,he.shadowNormalBias=fe.normalBias,he.shadowRadius=fe.radius,he.shadowMapSize=fe.mapSize,n.spotShadow[p]=he,n.spotShadowMap[p]=se,U++}p++}else if(F.isRectAreaLight){const k=e.get(F);k.color.copy(j).multiplyScalar(te),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),n.rectArea[f]=k,f++}else if(F.isPointLight){const k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity*w),k.distance=F.distance,k.decay=F.decay,F.castShadow){const fe=F.shadow,he=t.get(F);he.shadowBias=fe.bias,he.shadowNormalBias=fe.normalBias,he.shadowRadius=fe.radius,he.shadowMapSize=fe.mapSize,he.shadowCameraNear=fe.camera.near,he.shadowCameraFar=fe.camera.far,n.pointShadow[x]=he,n.pointShadowMap[x]=se,n.pointShadowMatrix[x]=F.shadow.matrix,T++}n.point[x]=k,x++}else if(F.isHemisphereLight){const k=e.get(F);k.skyColor.copy(F.color).multiplyScalar(te*w),k.groundColor.copy(F.groundColor).multiplyScalar(te*w),n.hemi[E]=k,E++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=m;const S=n.hash;(S.directionalLength!==g||S.pointLength!==x||S.spotLength!==p||S.rectAreaLength!==f||S.hemiLength!==E||S.numDirectionalShadows!==v||S.numPointShadows!==T||S.numSpotShadows!==U||S.numSpotMaps!==L||S.numLightProbes!==B)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=f,n.point.length=x,n.hemi.length=E,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=U,n.spotShadowMap.length=U,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=U+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=B,S.directionalLength=g,S.pointLength=x,S.spotLength=p,S.rectAreaLength=f,S.hemiLength=E,S.numDirectionalShadows=v,S.numPointShadows=T,S.numSpotShadows=U,S.numSpotMaps=L,S.numLightProbes=B,n.version=tx++)}function c(l,h){let u=0,d=0,m=0,g=0,x=0;const p=h.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const v=l[f];if(v.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),u++}else if(v.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const T=n.hemi[x];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function Mh(s){const e=new ix(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(h){e.setup(t,h)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function sx(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Mh(s),e.set(i,[a])):r>=o.length?(a=new Mh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class rx extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ox extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lx(s,e,t){let n=new Pc;const i=new ie,r=new ie,o=new rt,a=new rx({depthPacking:Gf}),c=new ox,l={},h=t.maxTextureSize,u={[zn]:Wt,[Wt]:zn,[Zt]:Zt},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:ax,fragmentShader:cx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new at;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Re(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let f=this.type;this.render=function(L,C,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;const w=s.getRenderTarget(),S=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),G=s.state;G.setBlending(oi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const F=f!==Ln&&this.type===Ln,j=f===Ln&&this.type!==Ln;for(let te=0,oe=L.length;te<oe;te++){const se=L[te],k=se.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const fe=k.getFrameExtents();if(i.multiply(fe),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/fe.x),i.x=r.x*fe.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/fe.y),i.y=r.y*fe.y,k.mapSize.y=r.y)),k.map===null||F===!0||j===!0){const ve=this.type!==Ln?{minFilter:Ot,magFilter:Ot}:{};k.map!==null&&k.map.dispose(),k.map=new bi(i.x,i.y,ve),k.map.texture.name=se.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const he=k.getViewportCount();for(let ve=0;ve<he;ve++){const Ce=k.getViewport(ve);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),G.viewport(o),k.updateMatrices(se,ve),n=k.getFrustum(),T(C,B,k.camera,se,this.type)}k.isPointLightShadow!==!0&&this.type===Ln&&E(k,B),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(w,S,H)};function E(L,C){const B=e.update(x);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new bi(i.x,i.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(C,null,B,d,x,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(C,null,B,m,x,null)}function v(L,C,B,w){let S=null;const H=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)S=H;else if(S=B.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=S.uuid,F=C.uuid;let j=l[G];j===void 0&&(j={},l[G]=j);let te=j[F];te===void 0&&(te=S.clone(),j[F]=te,C.addEventListener("dispose",U)),S=te}if(S.visible=C.visible,S.wireframe=C.wireframe,w===Ln?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=s.properties.get(S);G.light=B}return S}function T(L,C,B,w,S){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Ln)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);const F=e.update(L),j=L.material;if(Array.isArray(j)){const te=F.groups;for(let oe=0,se=te.length;oe<se;oe++){const k=te[oe],fe=j[k.materialIndex];if(fe&&fe.visible){const he=v(L,fe,w,S);L.onBeforeShadow(s,L,C,B,F,he,k),s.renderBufferDirect(B,null,F,he,L,k),L.onAfterShadow(s,L,C,B,F,he,k)}}}else if(j.visible){const te=v(L,j,w,S);L.onBeforeShadow(s,L,C,B,F,te,null),s.renderBufferDirect(B,null,F,te,L,null),L.onAfterShadow(s,L,C,B,F,te,null)}}const G=L.children;for(let F=0,j=G.length;F<j;F++)T(G[F],C,B,w,S)}function U(L){L.target.removeEventListener("dispose",U);for(const B in l){const w=l[B],S=L.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function hx(s){function e(){let M=!1;const X=new rt;let $=null;const pe=new rt(0,0,0,0);return{setMask:function(ge){$!==ge&&!M&&(s.colorMask(ge,ge,ge,ge),$=ge)},setLocked:function(ge){M=ge},setClear:function(ge,ze,Xe,dt,Et){Et===!0&&(ge*=dt,ze*=dt,Xe*=dt),X.set(ge,ze,Xe,dt),pe.equals(X)===!1&&(s.clearColor(ge,ze,Xe,dt),pe.copy(X))},reset:function(){M=!1,$=null,pe.set(-1,0,0,0)}}}function t(){let M=!1,X=null,$=null,pe=null;return{setTest:function(ge){ge?A(s.DEPTH_TEST):b(s.DEPTH_TEST)},setMask:function(ge){X!==ge&&!M&&(s.depthMask(ge),X=ge)},setFunc:function(ge){if($!==ge){switch(ge){case pf:s.depthFunc(s.NEVER);break;case mf:s.depthFunc(s.ALWAYS);break;case gf:s.depthFunc(s.LESS);break;case mo:s.depthFunc(s.LEQUAL);break;case _f:s.depthFunc(s.EQUAL);break;case xf:s.depthFunc(s.GEQUAL);break;case vf:s.depthFunc(s.GREATER);break;case yf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=ge}},setLocked:function(ge){M=ge},setClear:function(ge){pe!==ge&&(s.clearDepth(ge),pe=ge)},reset:function(){M=!1,X=null,$=null,pe=null}}}function n(){let M=!1,X=null,$=null,pe=null,ge=null,ze=null,Xe=null,dt=null,Et=null;return{setTest:function(Ze){M||(Ze?A(s.STENCIL_TEST):b(s.STENCIL_TEST))},setMask:function(Ze){X!==Ze&&!M&&(s.stencilMask(Ze),X=Ze)},setFunc:function(Ze,gt,ct){($!==Ze||pe!==gt||ge!==ct)&&(s.stencilFunc(Ze,gt,ct),$=Ze,pe=gt,ge=ct)},setOp:function(Ze,gt,ct){(ze!==Ze||Xe!==gt||dt!==ct)&&(s.stencilOp(Ze,gt,ct),ze=Ze,Xe=gt,dt=ct)},setLocked:function(Ze){M=Ze},setClear:function(Ze){Et!==Ze&&(s.clearStencil(Ze),Et=Ze)},reset:function(){M=!1,X=null,$=null,pe=null,ge=null,ze=null,Xe=null,dt=null,Et=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],m=null,g=!1,x=null,p=null,f=null,E=null,v=null,T=null,U=null,L=new Le(0,0,0),C=0,B=!1,w=null,S=null,H=null,G=null,F=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,oe=0;const se=s.getParameter(s.VERSION);se.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(se)[1]),te=oe>=1):se.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),te=oe>=2);let k=null,fe={};const he=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Ce=new rt().fromArray(he),je=new rt().fromArray(ve);function D(M,X,$,pe){const ge=new Uint8Array(4),ze=s.createTexture();s.bindTexture(M,ze),s.texParameteri(M,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(M,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<$;Xe++)M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY?s.texImage3D(X,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(X+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return ze}const I={};I[s.TEXTURE_2D]=D(s.TEXTURE_2D,s.TEXTURE_2D,1),I[s.TEXTURE_CUBE_MAP]=D(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[s.TEXTURE_2D_ARRAY]=D(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),I[s.TEXTURE_3D]=D(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),A(s.DEPTH_TEST),r.setFunc(mo),q(!1),K(Qc),A(s.CULL_FACE),Z(oi);function A(M){l[M]!==!0&&(s.enable(M),l[M]=!0)}function b(M){l[M]!==!1&&(s.disable(M),l[M]=!1)}function ee(M,X){return h[M]!==X?(s.bindFramebuffer(M,X),h[M]=X,M===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=X),M===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=X),!0):!1}function le(M,X){let $=d,pe=!1;if(M){$=u.get(X),$===void 0&&($=[],u.set(X,$));const ge=M.textures;if($.length!==ge.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ze=0,Xe=ge.length;ze<Xe;ze++)$[ze]=s.COLOR_ATTACHMENT0+ze;$.length=ge.length,pe=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,pe=!0);pe&&s.drawBuffers($)}function P(M){return m!==M?(s.useProgram(M),m=M,!0):!1}const de={[Si]:s.FUNC_ADD,[Zd]:s.FUNC_SUBTRACT,[$d]:s.FUNC_REVERSE_SUBTRACT};de[Jd]=s.MIN,de[Qd]=s.MAX;const W={[ef]:s.ZERO,[tf]:s.ONE,[nf]:s.SRC_COLOR,[ja]:s.SRC_ALPHA,[lf]:s.SRC_ALPHA_SATURATE,[af]:s.DST_COLOR,[rf]:s.DST_ALPHA,[sf]:s.ONE_MINUS_SRC_COLOR,[Ka]:s.ONE_MINUS_SRC_ALPHA,[cf]:s.ONE_MINUS_DST_COLOR,[of]:s.ONE_MINUS_DST_ALPHA,[hf]:s.CONSTANT_COLOR,[uf]:s.ONE_MINUS_CONSTANT_COLOR,[df]:s.CONSTANT_ALPHA,[ff]:s.ONE_MINUS_CONSTANT_ALPHA};function Z(M,X,$,pe,ge,ze,Xe,dt,Et,Ze){if(M===oi){g===!0&&(b(s.BLEND),g=!1);return}if(g===!1&&(A(s.BLEND),g=!0),M!==Kd){if(M!==x||Ze!==B){if((p!==Si||v!==Si)&&(s.blendEquation(s.FUNC_ADD),p=Si,v=Si),Ze)switch(M){case as:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qa:s.blendFunc(s.ONE,s.ONE);break;case el:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case as:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case el:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}f=null,E=null,T=null,U=null,L.set(0,0,0),C=0,x=M,B=Ze}return}ge=ge||X,ze=ze||$,Xe=Xe||pe,(X!==p||ge!==v)&&(s.blendEquationSeparate(de[X],de[ge]),p=X,v=ge),($!==f||pe!==E||ze!==T||Xe!==U)&&(s.blendFuncSeparate(W[$],W[pe],W[ze],W[Xe]),f=$,E=pe,T=ze,U=Xe),(dt.equals(L)===!1||Et!==C)&&(s.blendColor(dt.r,dt.g,dt.b,Et),L.copy(dt),C=Et),x=M,B=!1}function O(M,X){M.side===Zt?b(s.CULL_FACE):A(s.CULL_FACE);let $=M.side===Wt;X&&($=!$),q($),M.blending===as&&M.transparent===!1?Z(oi):Z(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),r.setFunc(M.depthFunc),r.setTest(M.depthTest),r.setMask(M.depthWrite),i.setMask(M.colorWrite);const pe=M.stencilWrite;o.setTest(pe),pe&&(o.setMask(M.stencilWriteMask),o.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),o.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),z(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?A(s.SAMPLE_ALPHA_TO_COVERAGE):b(s.SAMPLE_ALPHA_TO_COVERAGE)}function q(M){w!==M&&(M?s.frontFace(s.CW):s.frontFace(s.CCW),w=M)}function K(M){M!==Yd?(A(s.CULL_FACE),M!==S&&(M===Qc?s.cullFace(s.BACK):M===qd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):b(s.CULL_FACE),S=M}function ae(M){M!==H&&(te&&s.lineWidth(M),H=M)}function z(M,X,$){M?(A(s.POLYGON_OFFSET_FILL),(G!==X||F!==$)&&(s.polygonOffset(X,$),G=X,F=$)):b(s.POLYGON_OFFSET_FILL)}function _(M){M?A(s.SCISSOR_TEST):b(s.SCISSOR_TEST)}function y(M){M===void 0&&(M=s.TEXTURE0+j-1),k!==M&&(s.activeTexture(M),k=M)}function V(M,X,$){$===void 0&&(k===null?$=s.TEXTURE0+j-1:$=k);let pe=fe[$];pe===void 0&&(pe={type:void 0,texture:void 0},fe[$]=pe),(pe.type!==M||pe.texture!==X)&&(k!==$&&(s.activeTexture($),k=$),s.bindTexture(M,X||I[M]),pe.type=M,pe.texture=X)}function re(){const M=fe[k];M!==void 0&&M.type!==void 0&&(s.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function ue(){try{s.compressedTexImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ce(){try{s.compressedTexImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Te(){try{s.texSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function _e(){try{s.texSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function xe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function me(){try{s.texStorage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Se(M){Ce.equals(M)===!1&&(s.scissor(M.x,M.y,M.z,M.w),Ce.copy(M))}function Oe(M){je.equals(M)===!1&&(s.viewport(M.x,M.y,M.z,M.w),je.copy(M))}function We(M,X){let $=c.get(X);$===void 0&&($=new WeakMap,c.set(X,$));let pe=$.get(M);pe===void 0&&(pe=s.getUniformBlockIndex(X,M.name),$.set(M,pe))}function st(M,X){const pe=c.get(X).get(M);a.get(X)!==pe&&(s.uniformBlockBinding(X,pe,M.__bindingPointIndex),a.set(X,pe))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},k=null,fe={},h={},u=new WeakMap,d=[],m=null,g=!1,x=null,p=null,f=null,E=null,v=null,T=null,U=null,L=new Le(0,0,0),C=0,B=!1,w=null,S=null,H=null,G=null,F=null,Ce.set(0,0,s.canvas.width,s.canvas.height),je.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:A,disable:b,bindFramebuffer:ee,drawBuffers:le,useProgram:P,setBlending:Z,setMaterial:O,setFlipSided:q,setCullFace:K,setLineWidth:ae,setPolygonOffset:z,setScissorTest:_,activeTexture:y,bindTexture:V,unbindTexture:re,compressedTexImage2D:ue,compressedTexImage3D:ce,texImage2D:Fe,texImage3D:Ae,updateUBOMapping:We,uniformBlockBinding:st,texStorage2D:me,texStorage3D:Ee,texSubImage2D:Te,texSubImage3D:_e,compressedTexSubImage2D:xe,compressedTexSubImage3D:Pe,scissor:Se,viewport:Oe,reset:He}}function ux(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(_,y){return m?new OffscreenCanvas(_,y):or("canvas")}function x(_,y,V){let re=1;const ue=z(_);if((ue.width>V||ue.height>V)&&(re=V/Math.max(ue.width,ue.height)),re<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const ce=Math.floor(re*ue.width),Te=Math.floor(re*ue.height);u===void 0&&(u=g(ce,Te));const _e=y?g(ce,Te):u;return _e.width=ce,_e.height=Te,_e.getContext("2d").drawImage(_,0,0,ce,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ce+"x"+Te+")."),_e}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),_;return _}function p(_){return _.generateMipmaps&&_.minFilter!==Ot&&_.minFilter!==$t}function f(_){s.generateMipmap(_)}function E(_,y,V,re,ue=!1){if(_!==null){if(s[_]!==void 0)return s[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let ce=y;if(y===s.RED&&(V===s.FLOAT&&(ce=s.R32F),V===s.HALF_FLOAT&&(ce=s.R16F),V===s.UNSIGNED_BYTE&&(ce=s.R8)),y===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(ce=s.R8UI),V===s.UNSIGNED_SHORT&&(ce=s.R16UI),V===s.UNSIGNED_INT&&(ce=s.R32UI),V===s.BYTE&&(ce=s.R8I),V===s.SHORT&&(ce=s.R16I),V===s.INT&&(ce=s.R32I)),y===s.RG&&(V===s.FLOAT&&(ce=s.RG32F),V===s.HALF_FLOAT&&(ce=s.RG16F),V===s.UNSIGNED_BYTE&&(ce=s.RG8)),y===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(ce=s.RG8UI),V===s.UNSIGNED_SHORT&&(ce=s.RG16UI),V===s.UNSIGNED_INT&&(ce=s.RG32UI),V===s.BYTE&&(ce=s.RG8I),V===s.SHORT&&(ce=s.RG16I),V===s.INT&&(ce=s.RG32I)),y===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),y===s.RGBA){const Te=ue?xo:Qe.getTransfer(re);V===s.FLOAT&&(ce=s.RGBA32F),V===s.HALF_FLOAT&&(ce=s.RGBA16F),V===s.UNSIGNED_BYTE&&(ce=Te===lt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function v(_,y){return p(_)===!0||_.isFramebufferTexture&&_.minFilter!==Ot&&_.minFilter!==$t?Math.log2(Math.max(y.width,y.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?y.mipmaps.length:1}function T(_){const y=_.target;y.removeEventListener("dispose",T),L(y),y.isVideoTexture&&h.delete(y)}function U(_){const y=_.target;y.removeEventListener("dispose",U),B(y)}function L(_){const y=n.get(_);if(y.__webglInit===void 0)return;const V=_.source,re=d.get(V);if(re){const ue=re[y.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&C(_),Object.keys(re).length===0&&d.delete(V)}n.remove(_)}function C(_){const y=n.get(_);s.deleteTexture(y.__webglTexture);const V=_.source,re=d.get(V);delete re[y.__cacheKey],o.memory.textures--}function B(_){const y=n.get(_);if(_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(y.__webglFramebuffer[re]))for(let ue=0;ue<y.__webglFramebuffer[re].length;ue++)s.deleteFramebuffer(y.__webglFramebuffer[re][ue]);else s.deleteFramebuffer(y.__webglFramebuffer[re]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[re])}else{if(Array.isArray(y.__webglFramebuffer))for(let re=0;re<y.__webglFramebuffer.length;re++)s.deleteFramebuffer(y.__webglFramebuffer[re]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let re=0;re<y.__webglColorRenderbuffer.length;re++)y.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[re]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=_.textures;for(let re=0,ue=V.length;re<ue;re++){const ce=n.get(V[re]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(V[re])}n.remove(_)}let w=0;function S(){w=0}function H(){const _=w;return _>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+i.maxTextures),w+=1,_}function G(_){const y=[];return y.push(_.wrapS),y.push(_.wrapT),y.push(_.wrapR||0),y.push(_.magFilter),y.push(_.minFilter),y.push(_.anisotropy),y.push(_.internalFormat),y.push(_.format),y.push(_.type),y.push(_.generateMipmaps),y.push(_.premultiplyAlpha),y.push(_.flipY),y.push(_.unpackAlignment),y.push(_.colorSpace),y.join()}function F(_,y){const V=n.get(_);if(_.isVideoTexture&&K(_),_.isRenderTargetTexture===!1&&_.version>0&&V.__version!==_.version){const re=_.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(V,_,y);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+y)}function j(_,y){const V=n.get(_);if(_.version>0&&V.__version!==_.version){Ce(V,_,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+y)}function te(_,y){const V=n.get(_);if(_.version>0&&V.__version!==_.version){Ce(V,_,y);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+y)}function oe(_,y){const V=n.get(_);if(_.version>0&&V.__version!==_.version){je(V,_,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+y)}const se={[li]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[_o]:s.MIRRORED_REPEAT},k={[Ot]:s.NEAREST,[Pu]:s.NEAREST_MIPMAP_NEAREST,[Ys]:s.NEAREST_MIPMAP_LINEAR,[$t]:s.LINEAR,[co]:s.LINEAR_MIPMAP_NEAREST,[Fn]:s.LINEAR_MIPMAP_LINEAR},fe={[Xf]:s.NEVER,[$f]:s.ALWAYS,[Yf]:s.LESS,[zu]:s.LEQUAL,[qf]:s.EQUAL,[Zf]:s.GEQUAL,[jf]:s.GREATER,[Kf]:s.NOTEQUAL};function he(_,y){if(y.type===pn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===$t||y.magFilter===co||y.magFilter===Ys||y.magFilter===Fn||y.minFilter===$t||y.minFilter===co||y.minFilter===Ys||y.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(_,s.TEXTURE_WRAP_S,se[y.wrapS]),s.texParameteri(_,s.TEXTURE_WRAP_T,se[y.wrapT]),(_===s.TEXTURE_3D||_===s.TEXTURE_2D_ARRAY)&&s.texParameteri(_,s.TEXTURE_WRAP_R,se[y.wrapR]),s.texParameteri(_,s.TEXTURE_MAG_FILTER,k[y.magFilter]),s.texParameteri(_,s.TEXTURE_MIN_FILTER,k[y.minFilter]),y.compareFunction&&(s.texParameteri(_,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(_,s.TEXTURE_COMPARE_FUNC,fe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ot||y.minFilter!==Ys&&y.minFilter!==Fn||y.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(_,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ve(_,y){let V=!1;_.__webglInit===void 0&&(_.__webglInit=!0,y.addEventListener("dispose",T));const re=y.source;let ue=d.get(re);ue===void 0&&(ue={},d.set(re,ue));const ce=G(y);if(ce!==_.__cacheKey){ue[ce]===void 0&&(ue[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ue[ce].usedTimes++;const Te=ue[_.__cacheKey];Te!==void 0&&(ue[_.__cacheKey].usedTimes--,Te.usedTimes===0&&C(y)),_.__cacheKey=ce,_.__webglTexture=ue[ce].texture}return V}function Ce(_,y,V){let re=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(re=s.TEXTURE_3D);const ue=ve(_,y),ce=y.source;t.bindTexture(re,_.__webglTexture,s.TEXTURE0+V);const Te=n.get(ce);if(ce.version!==Te.__version||ue===!0){t.activeTexture(s.TEXTURE0+V);const _e=Qe.getPrimaries(Qe.workingColorSpace),xe=y.colorSpace===ti?null:Qe.getPrimaries(y.colorSpace),Pe=y.colorSpace===ti||_e===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let me=x(y.image,!1,i.maxTextureSize);me=ae(y,me);const Ee=r.convert(y.format,y.colorSpace),Fe=r.convert(y.type);let Ae=E(y.internalFormat,Ee,Fe,y.colorSpace,y.isVideoTexture);he(re,y);let Se;const Oe=y.mipmaps,We=y.isVideoTexture!==!0,st=Te.__version===void 0||ue===!0,He=ce.dataReady,M=v(y,me);if(y.isDepthTexture)Ae=s.DEPTH_COMPONENT16,y.type===pn?Ae=s.DEPTH_COMPONENT32F:y.type===fs?Ae=s.DEPTH_COMPONENT24:y.type===dr&&(Ae=s.DEPTH24_STENCIL8),st&&(We?t.texStorage2D(s.TEXTURE_2D,1,Ae,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,Ae,me.width,me.height,0,Ee,Fe,null));else if(y.isDataTexture)if(Oe.length>0){We&&st&&t.texStorage2D(s.TEXTURE_2D,M,Ae,Oe[0].width,Oe[0].height);for(let X=0,$=Oe.length;X<$;X++)Se=Oe[X],We?He&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,Se.width,Se.height,Ee,Fe,Se.data):t.texImage2D(s.TEXTURE_2D,X,Ae,Se.width,Se.height,0,Ee,Fe,Se.data);y.generateMipmaps=!1}else We?(st&&t.texStorage2D(s.TEXTURE_2D,M,Ae,me.width,me.height),He&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,Ee,Fe,me.data)):t.texImage2D(s.TEXTURE_2D,0,Ae,me.width,me.height,0,Ee,Fe,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,M,Ae,Oe[0].width,Oe[0].height,me.depth);for(let X=0,$=Oe.length;X<$;X++)Se=Oe[X],y.format!==un?Ee!==null?We?He&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,me.depth,Ee,Se.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Ae,Se.width,Se.height,me.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?He&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,me.depth,Ee,Fe,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,Ae,Se.width,Se.height,me.depth,0,Ee,Fe,Se.data)}else{We&&st&&t.texStorage2D(s.TEXTURE_2D,M,Ae,Oe[0].width,Oe[0].height);for(let X=0,$=Oe.length;X<$;X++)Se=Oe[X],y.format!==un?Ee!==null?We?He&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,X,Ae,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?He&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,Se.width,Se.height,Ee,Fe,Se.data):t.texImage2D(s.TEXTURE_2D,X,Ae,Se.width,Se.height,0,Ee,Fe,Se.data)}else if(y.isDataArrayTexture)We?(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,M,Ae,me.width,me.height,me.depth),He&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ee,Fe,me.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,me.width,me.height,me.depth,0,Ee,Fe,me.data);else if(y.isData3DTexture)We?(st&&t.texStorage3D(s.TEXTURE_3D,M,Ae,me.width,me.height,me.depth),He&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ee,Fe,me.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,me.width,me.height,me.depth,0,Ee,Fe,me.data);else if(y.isFramebufferTexture){if(st)if(We)t.texStorage2D(s.TEXTURE_2D,M,Ae,me.width,me.height);else{let X=me.width,$=me.height;for(let pe=0;pe<M;pe++)t.texImage2D(s.TEXTURE_2D,pe,Ae,X,$,0,Ee,Fe,null),X>>=1,$>>=1}}else if(Oe.length>0){if(We&&st){const X=z(Oe[0]);t.texStorage2D(s.TEXTURE_2D,M,Ae,X.width,X.height)}for(let X=0,$=Oe.length;X<$;X++)Se=Oe[X],We?He&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,Ee,Fe,Se):t.texImage2D(s.TEXTURE_2D,X,Ae,Ee,Fe,Se);y.generateMipmaps=!1}else if(We){if(st){const X=z(me);t.texStorage2D(s.TEXTURE_2D,M,Ae,X.width,X.height)}He&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Fe,me)}else t.texImage2D(s.TEXTURE_2D,0,Ae,Ee,Fe,me);p(y)&&f(re),Te.__version=ce.version,y.onUpdate&&y.onUpdate(y)}_.__version=y.version}function je(_,y,V){if(y.image.length!==6)return;const re=ve(_,y),ue=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,_.__webglTexture,s.TEXTURE0+V);const ce=n.get(ue);if(ue.version!==ce.__version||re===!0){t.activeTexture(s.TEXTURE0+V);const Te=Qe.getPrimaries(Qe.workingColorSpace),_e=y.colorSpace===ti?null:Qe.getPrimaries(y.colorSpace),xe=y.colorSpace===ti||Te===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Pe=y.isCompressedTexture||y.image[0].isCompressedTexture,me=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let $=0;$<6;$++)!Pe&&!me?Ee[$]=x(y.image[$],!0,i.maxCubemapSize):Ee[$]=me?y.image[$].image:y.image[$],Ee[$]=ae(y,Ee[$]);const Fe=Ee[0],Ae=r.convert(y.format,y.colorSpace),Se=r.convert(y.type),Oe=E(y.internalFormat,Ae,Se,y.colorSpace),We=y.isVideoTexture!==!0,st=ce.__version===void 0||re===!0,He=ue.dataReady;let M=v(y,Fe);he(s.TEXTURE_CUBE_MAP,y);let X;if(Pe){We&&st&&t.texStorage2D(s.TEXTURE_CUBE_MAP,M,Oe,Fe.width,Fe.height);for(let $=0;$<6;$++){X=Ee[$].mipmaps;for(let pe=0;pe<X.length;pe++){const ge=X[pe];y.format!==un?Ae!==null?We?He&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,ge.width,ge.height,Ae,ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,Oe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?He&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,ge.width,ge.height,Ae,Se,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,Oe,ge.width,ge.height,0,Ae,Se,ge.data)}}}else{if(X=y.mipmaps,We&&st){X.length>0&&M++;const $=z(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,M,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(me){We?He&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ee[$].width,Ee[$].height,Ae,Se,Ee[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,Ee[$].width,Ee[$].height,0,Ae,Se,Ee[$].data);for(let pe=0;pe<X.length;pe++){const ze=X[pe].image[$].image;We?He&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,ze.width,ze.height,Ae,Se,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,Oe,ze.width,ze.height,0,Ae,Se,ze.data)}}else{We?He&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,Se,Ee[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,Ae,Se,Ee[$]);for(let pe=0;pe<X.length;pe++){const ge=X[pe];We?He&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,Ae,Se,ge.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,Oe,Ae,Se,ge.image[$])}}}p(y)&&f(s.TEXTURE_CUBE_MAP),ce.__version=ue.version,y.onUpdate&&y.onUpdate(y)}_.__version=y.version}function D(_,y,V,re,ue,ce){const Te=r.convert(V.format,V.colorSpace),_e=r.convert(V.type),xe=E(V.internalFormat,Te,_e,V.colorSpace);if(!n.get(y).__hasExternalTextures){const me=Math.max(1,y.width>>ce),Ee=Math.max(1,y.height>>ce);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?t.texImage3D(ue,ce,xe,me,Ee,y.depth,0,Te,_e,null):t.texImage2D(ue,ce,xe,me,Ee,0,Te,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,_),q(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ue,n.get(V).__webglTexture,0,O(y)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,ue,n.get(V).__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function I(_,y,V){if(s.bindRenderbuffer(s.RENDERBUFFER,_),y.depthBuffer&&!y.stencilBuffer){let re=s.DEPTH_COMPONENT24;if(V||q(y)){const ue=y.depthTexture;ue&&ue.isDepthTexture&&(ue.type===pn?re=s.DEPTH_COMPONENT32F:ue.type===fs&&(re=s.DEPTH_COMPONENT24));const ce=O(y);q(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,re,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,re,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,re,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,_)}else if(y.depthBuffer&&y.stencilBuffer){const re=O(y);V&&q(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,y.width,y.height):q(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,_)}else{const re=y.textures;for(let ue=0;ue<re.length;ue++){const ce=re[ue],Te=r.convert(ce.format,ce.colorSpace),_e=r.convert(ce.type),xe=E(ce.internalFormat,Te,_e,ce.colorSpace),Pe=O(y);V&&q(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,xe,y.width,y.height):q(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,xe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,xe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function A(_,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,_),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),F(y.depthTexture,0);const re=n.get(y.depthTexture).__webglTexture,ue=O(y);if(y.depthTexture.format===cs)q(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(y.depthTexture.format===sr)q(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function b(_){const y=n.get(_),V=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");A(y.__webglFramebuffer,_)}else if(V){y.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[re]),y.__webglDepthbuffer[re]=s.createRenderbuffer(),I(y.__webglDepthbuffer[re],_,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),I(y.__webglDepthbuffer,_,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(_,y,V){const re=n.get(_);y!==void 0&&D(re.__webglFramebuffer,_,_.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&b(_)}function le(_){const y=_.texture,V=n.get(_),re=n.get(y);_.addEventListener("dispose",U);const ue=_.textures,ce=_.isWebGLCubeRenderTarget===!0,Te=ue.length>1;if(Te||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=y.version,o.memory.textures++),ce){V.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[_e]=[];for(let xe=0;xe<y.mipmaps.length;xe++)V.__webglFramebuffer[_e][xe]=s.createFramebuffer()}else V.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let _e=0;_e<y.mipmaps.length;_e++)V.__webglFramebuffer[_e]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Te)for(let _e=0,xe=ue.length;_e<xe;_e++){const Pe=n.get(ue[_e]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),o.memory.textures++)}if(_.samples>0&&q(_)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let _e=0;_e<ue.length;_e++){const xe=ue[_e];V.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[_e]);const Pe=r.convert(xe.format,xe.colorSpace),me=r.convert(xe.type),Ee=E(xe.internalFormat,Pe,me,xe.colorSpace,_.isXRRenderTarget===!0),Fe=O(_);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Ee,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,V.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),_.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),I(V.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),he(s.TEXTURE_CUBE_MAP,y);for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)D(V.__webglFramebuffer[_e][xe],_,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xe);else D(V.__webglFramebuffer[_e],_,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(y)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let _e=0,xe=ue.length;_e<xe;_e++){const Pe=ue[_e],me=n.get(Pe);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),he(s.TEXTURE_2D,Pe),D(V.__webglFramebuffer,_,Pe,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,0),p(Pe)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(_e=_.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,re.__webglTexture),he(_e,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)D(V.__webglFramebuffer[xe],_,y,s.COLOR_ATTACHMENT0,_e,xe);else D(V.__webglFramebuffer,_,y,s.COLOR_ATTACHMENT0,_e,0);p(y)&&f(_e),t.unbindTexture()}_.depthBuffer&&b(_)}function P(_){const y=_.textures;for(let V=0,re=y.length;V<re;V++){const ue=y[V];if(p(ue)){const ce=_.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Te=n.get(ue).__webglTexture;t.bindTexture(ce,Te),f(ce),t.unbindTexture()}}}const de=[],W=[];function Z(_){if(_.samples>0){if(q(_)===!1){const y=_.textures,V=_.width,re=_.height;let ue=s.COLOR_BUFFER_BIT;const ce=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(_),_e=y.length>1;if(_e)for(let xe=0;xe<y.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<y.length;xe++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),_e){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const Pe=n.get(y[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pe,0)}s.blitFramebuffer(0,0,V,re,0,0,V,re,ue,s.NEAREST),c===!0&&(de.length=0,W.length=0,de.push(s.COLOR_ATTACHMENT0+xe),_.depthBuffer&&_.resolveDepthBuffer===!1&&(de.push(ce),W.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,W)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let xe=0;xe<y.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const Pe=n.get(y[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,Pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&c){const y=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function O(_){return Math.min(i.maxSamples,_.samples)}function q(_){const y=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function K(_){const y=o.render.frame;h.get(_)!==y&&(h.set(_,y),_.update())}function ae(_,y){const V=_.colorSpace,re=_.format,ue=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||V!==Rt&&V!==ti&&(Qe.getTransfer(V)===lt?(re!==un||ue!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function z(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(l.width=_.naturalWidth||_.width,l.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(l.width=_.displayWidth,l.height=_.displayHeight):(l.width=_.width,l.height=_.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=S,this.setTexture2D=F,this.setTexture2DArray=j,this.setTexture3D=te,this.setTextureCube=oe,this.rebindTextures=ee,this.setupRenderTarget=le,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=b,this.setupFrameBufferTexture=D,this.useMultisampledRTT=q}function dx(s,e){function t(n,i=ti){let r;const o=Qe.getTransfer(i);if(n===hi)return s.UNSIGNED_BYTE;if(n===Nu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Du)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lf)return s.BYTE;if(n===If)return s.SHORT;if(n===Lu)return s.UNSIGNED_SHORT;if(n===Iu)return s.INT;if(n===fs)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===ko)return s.HALF_FLOAT;if(n===Df)return s.ALPHA;if(n===Uf)return s.RGB;if(n===un)return s.RGBA;if(n===Of)return s.LUMINANCE;if(n===Ff)return s.LUMINANCE_ALPHA;if(n===cs)return s.DEPTH_COMPONENT;if(n===sr)return s.DEPTH_STENCIL;if(n===Uu)return s.RED;if(n===Ou)return s.RED_INTEGER;if(n===Bf)return s.RG;if(n===Fu)return s.RG_INTEGER;if(n===Bu)return s.RGBA_INTEGER;if(n===Zo||n===$o||n===Jo||n===Qo)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===sl||n===rl||n===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===cl||n===ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===al||n===cl)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ll)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ul)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ea||n===El||n===bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ea)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kf||n===wl||n===Al||n===Rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class fx extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zt extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const px={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),f=this._getHandJoint(l,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(px)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _x{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Mt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new ui({vertexShader:mx,fragmentShader:gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Re(new fr(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class xx extends Ci{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null;const x=new _x,p=t.getContextAttributes();let f=null,E=null;const v=[],T=[],U=new ie;let L=null;const C=new Ut;C.layers.enable(1),C.viewport=new rt;const B=new Ut;B.layers.enable(2),B.viewport=new rt;const w=[C,B],S=new fx;S.layers.enable(1),S.layers.enable(2);let H=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let I=v[D];return I===void 0&&(I=new wa,v[D]=I),I.getTargetRaySpace()},this.getControllerGrip=function(D){let I=v[D];return I===void 0&&(I=new wa,v[D]=I),I.getGripSpace()},this.getHand=function(D){let I=v[D];return I===void 0&&(I=new wa,v[D]=I),I.getHandSpace()};function F(D){const I=T.indexOf(D.inputSource);if(I===-1)return;const A=v[I];A!==void 0&&(A.update(D.inputSource,D.frame,l||o),A.dispatchEvent({type:D.type,data:D.inputSource}))}function j(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",te);for(let D=0;D<v.length;D++){const I=T[D];I!==null&&(T[D]=null,v[D].disconnect(I))}H=null,G=null,x.reset(),e.setRenderTarget(f),m=null,d=null,u=null,i=null,E=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",j),i.addEventListener("inputsourceschange",te),p.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(U),i.renderState.layers===void 0){const I={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,I),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new bi(m.framebufferWidth,m.framebufferHeight,{format:un,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let I=null,A=null,b=null;p.depth&&(b=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,I=p.stencil?sr:cs,A=p.stencil?dr:fs);const ee={colorFormat:t.RGBA8,depthFormat:b,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new bi(d.textureWidth,d.textureHeight,{format:un,type:hi,depthTexture:new Qu(d.textureWidth,d.textureHeight,A,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function te(D){for(let I=0;I<D.removed.length;I++){const A=D.removed[I],b=T.indexOf(A);b>=0&&(T[b]=null,v[b].disconnect(A))}for(let I=0;I<D.added.length;I++){const A=D.added[I];let b=T.indexOf(A);if(b===-1){for(let le=0;le<v.length;le++)if(le>=T.length){T.push(A),b=le;break}else if(T[le]===null){T[le]=A,b=le;break}if(b===-1)break}const ee=v[b];ee&&ee.connect(A)}}const oe=new N,se=new N;function k(D,I,A){oe.setFromMatrixPosition(I.matrixWorld),se.setFromMatrixPosition(A.matrixWorld);const b=oe.distanceTo(se),ee=I.projectionMatrix.elements,le=A.projectionMatrix.elements,P=ee[14]/(ee[10]-1),de=ee[14]/(ee[10]+1),W=(ee[9]+1)/ee[5],Z=(ee[9]-1)/ee[5],O=(ee[8]-1)/ee[0],q=(le[8]+1)/le[0],K=P*O,ae=P*q,z=b/(-O+q),_=z*-O;I.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(_),D.translateZ(z),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const y=P+z,V=de+z,re=K-_,ue=ae+(b-_),ce=W*de/V*y,Te=Z*de/V*y;D.projectionMatrix.makePerspective(re,ue,ce,Te,y,V),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function fe(D,I){I===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(I.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;x.texture!==null&&(D.near=x.depthNear,D.far=x.depthFar),S.near=B.near=C.near=D.near,S.far=B.far=C.far=D.far,(H!==S.near||G!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),H=S.near,G=S.far,C.near=H,C.far=G,B.near=H,B.far=G,C.updateProjectionMatrix(),B.updateProjectionMatrix(),D.updateProjectionMatrix());const I=D.parent,A=S.cameras;fe(S,I);for(let b=0;b<A.length;b++)fe(A[b],I);A.length===2?k(S,C,B):S.projectionMatrix.copy(C.projectionMatrix),he(D,S,I)};function he(D,I,A){A===null?D.matrix.copy(I.matrixWorld):(D.matrix.copy(A.matrixWorld),D.matrix.invert(),D.matrix.multiply(I.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(I.projectionMatrix),D.projectionMatrixInverse.copy(I.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=ms*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(D){c=D,d!==null&&(d.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)},this.hasDepthSensing=function(){return x.texture!==null};let ve=null;function Ce(D,I){if(h=I.getViewerPose(l||o),g=I,h!==null){const A=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let b=!1;A.length!==S.cameras.length&&(S.cameras.length=0,b=!0);for(let le=0;le<A.length;le++){const P=A[le];let de=null;if(m!==null)de=m.getViewport(P);else{const Z=u.getViewSubImage(d,P);de=Z.viewport,le===0&&(e.setRenderTargetTextures(E,Z.colorTexture,d.ignoreDepthValues?void 0:Z.depthStencilTexture),e.setRenderTarget(E))}let W=w[le];W===void 0&&(W=new Ut,W.layers.enable(le),W.viewport=new rt,w[le]=W),W.matrix.fromArray(P.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(P.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(de.x,de.y,de.width,de.height),le===0&&(S.matrix.copy(W.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),b===!0&&S.cameras.push(W)}const ee=i.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const le=u.getDepthInformation(A[0]);le&&le.isValid&&le.texture&&x.init(e,le,i.renderState)}}for(let A=0;A<v.length;A++){const b=T[A],ee=v[A];b!==null&&ee!==void 0&&ee.update(b,I,l||o)}x.render(e,S),ve&&ve(D,I),I.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:I}),g=null}const je=new Ju;je.setAnimationLoop(Ce),this.setAnimationLoop=function(D){ve=D},this.dispose=function(){}}}const xi=new Xt,vx=new De;function yx(s,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ku(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,E,v,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,E,v):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Wt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Wt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),v=E.envMap,T=E.envMapRotation;if(v&&(p.envMap.value=v,xi.copy(T),xi.x*=-1,xi.y*=-1,xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),p.envMapRotation.value.setFromMatrix4(vx.makeRotationFromEuler(xi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const U=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*U,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mx(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,v){const T=v.program;n.uniformBlockBinding(E,T)}function l(E,v){let T=i[E.id];T===void 0&&(g(E),T=h(E),i[E.id]=T,E.addEventListener("dispose",p));const U=v.program;n.updateUBOMapping(E,U);const L=e.render.frame;r[E.id]!==L&&(d(E),r[E.id]=L)}function h(E){const v=u();E.__bindingPointIndex=v;const T=s.createBuffer(),U=E.__size,L=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,U,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,T),T}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const v=i[E.id],T=E.uniforms,U=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let L=0,C=T.length;L<C;L++){const B=Array.isArray(T[L])?T[L]:[T[L]];for(let w=0,S=B.length;w<S;w++){const H=B[w];if(m(H,L,w,U)===!0){const G=H.__offset,F=Array.isArray(H.value)?H.value:[H.value];let j=0;for(let te=0;te<F.length;te++){const oe=F[te],se=x(oe);typeof oe=="number"||typeof oe=="boolean"?(H.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,G+j,H.__data)):oe.isMatrix3?(H.__data[0]=oe.elements[0],H.__data[1]=oe.elements[1],H.__data[2]=oe.elements[2],H.__data[3]=0,H.__data[4]=oe.elements[3],H.__data[5]=oe.elements[4],H.__data[6]=oe.elements[5],H.__data[7]=0,H.__data[8]=oe.elements[6],H.__data[9]=oe.elements[7],H.__data[10]=oe.elements[8],H.__data[11]=0):(oe.toArray(H.__data,j),j+=se.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(E,v,T,U){const L=E.value,C=v+"_"+T;if(U[C]===void 0)return typeof L=="number"||typeof L=="boolean"?U[C]=L:U[C]=L.clone(),!0;{const B=U[C];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return U[C]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function g(E){const v=E.uniforms;let T=0;const U=16;for(let C=0,B=v.length;C<B;C++){const w=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,H=w.length;S<H;S++){const G=w[S],F=Array.isArray(G.value)?G.value:[G.value];for(let j=0,te=F.length;j<te;j++){const oe=F[j],se=x(oe),k=T%U;k!==0&&U-k<se.boundary&&(T+=U-k),G.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=se.storage}}}const L=T%U;return L>0&&(T+=U-L),E.__size=T,E.__cache={},this}function x(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function p(E){const v=E.target;v.removeEventListener("dispose",p);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class Sx{constructor(e={}){const{canvas:t=mp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this._useLegacyLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;const v=this;let T=!1,U=0,L=0,C=null,B=-1,w=null;const S=new rt,H=new rt;let G=null;const F=new Le(0);let j=0,te=t.width,oe=t.height,se=1,k=null,fe=null;const he=new rt(0,0,te,oe),ve=new rt(0,0,te,oe);let Ce=!1;const je=new Pc;let D=!1,I=!1;const A=new De,b=new N,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return C===null?se:1}let P=n;function de(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ec}`),t.addEventListener("webglcontextlost",M,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",$,!1),P===null){const Y="webgl2";if(P=de(Y,R),P===null)throw de(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let W,Z,O,q,K,ae,z,_,y,V,re,ue,ce,Te,_e,xe,Pe,me,Ee,Fe,Ae,Se,Oe,We;function st(){W=new P0(P),W.init(),Se=new dx(P,W),Z=new E0(P,W,e,Se),O=new hx(P),q=new N0(P),K=new Z_,ae=new ux(P,W,O,K,Z,Se,q),z=new w0(v),_=new C0(v),y=new zp(P),Oe=new S0(P,y),V=new L0(P,y,q,Oe),re=new U0(P,V,y,q),Ee=new D0(P,Z,ae),xe=new b0(K),ue=new K_(v,z,_,W,Z,Oe,xe),ce=new yx(v,K),Te=new J_,_e=new sx(W),me=new M0(v,z,_,O,re,d,c),Pe=new lx(v,re,Z),We=new Mx(P,q,Z,O),Fe=new T0(P,W,q),Ae=new I0(P,W,q),q.programs=ue.programs,v.capabilities=Z,v.extensions=W,v.properties=K,v.renderLists=Te,v.shadowMap=Pe,v.state=O,v.info=q}st();const He=new xx(v,P);this.xr=He,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=W.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=W.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(R){R!==void 0&&(se=R,this.setSize(te,oe,!1))},this.getSize=function(R){return R.set(te,oe)},this.setSize=function(R,Y,ne=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=R,oe=Y,t.width=Math.floor(R*se),t.height=Math.floor(Y*se),ne===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(te*se,oe*se).floor()},this.setDrawingBufferSize=function(R,Y,ne){te=R,oe=Y,se=ne,t.width=Math.floor(R*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,Y,ne,J){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,Y,ne,J),O.viewport(S.copy(he).multiplyScalar(se).round())},this.getScissor=function(R){return R.copy(ve)},this.setScissor=function(R,Y,ne,J){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,Y,ne,J),O.scissor(H.copy(ve).multiplyScalar(se).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(R){O.setScissorTest(Ce=R)},this.setOpaqueSort=function(R){k=R},this.setTransparentSort=function(R){fe=R},this.getClearColor=function(R){return R.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(R=!0,Y=!0,ne=!0){let J=0;if(R){let Q=!1;if(C!==null){const Me=C.texture.format;Q=Me===Bu||Me===Fu||Me===Ou}if(Q){const Me=C.texture.type,be=Me===hi||Me===fs||Me===Lu||Me===dr||Me===Nu||Me===Du,we=me.getClearColor(),Ne=me.getClearAlpha(),Be=we.r,Ve=we.g,Ye=we.b;be?(m[0]=Be,m[1]=Ve,m[2]=Ye,m[3]=Ne,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Be,g[1]=Ve,g[2]=Ye,g[3]=Ne,P.clearBufferiv(P.COLOR,0,g))}else J|=P.COLOR_BUFFER_BIT}Y&&(J|=P.DEPTH_BUFFER_BIT),ne&&(J|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",M,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",$,!1),Te.dispose(),_e.dispose(),K.dispose(),z.dispose(),_.dispose(),re.dispose(),Oe.dispose(),We.dispose(),ue.dispose(),He.dispose(),He.removeEventListener("sessionstart",Ze),He.removeEventListener("sessionend",gt),ct.stop()};function M(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=q.autoReset,Y=Pe.enabled,ne=Pe.autoUpdate,J=Pe.needsUpdate,Q=Pe.type;st(),q.autoReset=R,Pe.enabled=Y,Pe.autoUpdate=ne,Pe.needsUpdate=J,Pe.type=Q}function $(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const Y=R.target;Y.removeEventListener("dispose",pe),ge(Y)}function ge(R){ze(R),K.remove(R)}function ze(R){const Y=K.get(R).programs;Y!==void 0&&(Y.forEach(function(ne){ue.releaseProgram(ne)}),R.isShaderMaterial&&ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ne,J,Q,Me){Y===null&&(Y=ee);const be=Q.isMesh&&Q.matrixWorld.determinant()<0,we=Vd(R,Y,ne,J,Q);O.setMaterial(J,be);let Ne=ne.index,Be=1;if(J.wireframe===!0){if(Ne=V.getWireframeAttribute(ne),Ne===void 0)return;Be=2}const Ve=ne.drawRange,Ye=ne.attributes.position;let _t=Ve.start*Be,Pt=(Ve.start+Ve.count)*Be;Me!==null&&(_t=Math.max(_t,Me.start*Be),Pt=Math.min(Pt,(Me.start+Me.count)*Be)),Ne!==null?(_t=Math.max(_t,0),Pt=Math.min(Pt,Ne.count)):Ye!=null&&(_t=Math.max(_t,0),Pt=Math.min(Pt,Ye.count));const qt=Pt-_t;if(qt<0||qt===1/0)return;Oe.setup(Q,J,we,ne,Ne);let En,$e=Fe;if(Ne!==null&&(En=y.get(Ne),$e=Ae,$e.setIndex(En)),Q.isMesh)J.wireframe===!0?(O.setLineWidth(J.wireframeLinewidth*le()),$e.setMode(P.LINES)):$e.setMode(P.TRIANGLES);else if(Q.isLine){let ke=J.linewidth;ke===void 0&&(ke=1),O.setLineWidth(ke*le()),Q.isLineSegments?$e.setMode(P.LINES):Q.isLineLoop?$e.setMode(P.LINE_LOOP):$e.setMode(P.LINE_STRIP)}else Q.isPoints?$e.setMode(P.POINTS):Q.isSprite&&$e.setMode(P.TRIANGLES);if(Q.isBatchedMesh)Q._multiDrawInstances!==null?$e.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances):$e.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)$e.renderInstances(_t,qt,Q.count);else if(ne.isInstancedBufferGeometry){const ke=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Cs=Math.min(ne.instanceCount,ke);$e.renderInstances(_t,qt,Cs)}else $e.render(_t,qt)};function Xe(R,Y,ne){R.transparent===!0&&R.side===Zt&&R.forceSinglePass===!1?(R.side=Wt,R.needsUpdate=!0,mr(R,Y,ne),R.side=zn,R.needsUpdate=!0,mr(R,Y,ne),R.side=Zt):mr(R,Y,ne)}this.compile=function(R,Y,ne=null){ne===null&&(ne=R),p=_e.get(ne),p.init(Y),E.push(p),ne.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),R!==ne&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights(v._useLegacyLights);const J=new Set;return R.traverse(function(Q){const Me=Q.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const we=Me[be];Xe(we,ne,Q),J.add(we)}else Xe(Me,ne,Q),J.add(Me)}),E.pop(),p=null,J},this.compileAsync=function(R,Y,ne=null){const J=this.compile(R,Y,ne);return new Promise(Q=>{function Me(){if(J.forEach(function(be){K.get(be).currentProgram.isReady()&&J.delete(be)}),J.size===0){Q(R);return}setTimeout(Me,10)}W.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let dt=null;function Et(R){dt&&dt(R)}function Ze(){ct.stop()}function gt(){ct.start()}const ct=new Ju;ct.setAnimationLoop(Et),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(R){dt=R,He.setAnimationLoop(R),R===null?ct.stop():ct.start()},He.addEventListener("sessionstart",Ze),He.addEventListener("sessionend",gt),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(Y),Y=He.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,Y,C),p=_e.get(R,E.length),p.init(Y),E.push(p),A.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),je.setFromProjectionMatrix(A),I=this.localClippingEnabled,D=xe.init(this.clippingPlanes,I),x=Te.get(R,f.length),x.init(),f.push(x),Vn(R,Y,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(k,fe);const ne=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1;ne&&me.addToRenderList(x,R),this.info.render.frame++,D===!0&&xe.beginShadows();const J=p.state.shadowsArray;Pe.render(J,R,Y),D===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=x.opaque,Me=x.transmissive;if(p.setupLights(v._useLegacyLights),Y.isArrayCamera){const be=Y.cameras;if(Me.length>0)for(let we=0,Ne=be.length;we<Ne;we++){const Be=be[we];Gn(Q,Me,R,Be)}ne&&me.render(R);for(let we=0,Ne=be.length;we<Ne;we++){const Be=be[we];Jt(x,R,Be,Be.viewport)}}else Me.length>0&&Gn(Q,Me,R,Y),ne&&me.render(R),Jt(x,R,Y);C!==null&&(ae.updateMultisampleRenderTarget(C),ae.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,Y),Oe.resetDefaultState(),B=-1,w=null,E.pop(),E.length>0?(p=E[E.length-1],D===!0&&xe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Vn(R,Y,ne,J){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||je.intersectsSprite(R)){J&&b.setFromMatrixPosition(R.matrixWorld).applyMatrix4(A);const be=re.update(R),we=R.material;we.visible&&x.push(R,be,we,ne,b.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||je.intersectsObject(R))){const be=re.update(R),we=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),b.copy(R.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),b.copy(be.boundingSphere.center)),b.applyMatrix4(R.matrixWorld).applyMatrix4(A)),Array.isArray(we)){const Ne=be.groups;for(let Be=0,Ve=Ne.length;Be<Ve;Be++){const Ye=Ne[Be],_t=we[Ye.materialIndex];_t&&_t.visible&&x.push(R,be,_t,ne,b.z,Ye)}}else we.visible&&x.push(R,be,we,ne,b.z,null)}}const Me=R.children;for(let be=0,we=Me.length;be<we;be++)Vn(Me[be],Y,ne,J)}function Jt(R,Y,ne,J){const Q=R.opaque,Me=R.transmissive,be=R.transparent;p.setupLightsView(ne),D===!0&&xe.setGlobalState(v.clippingPlanes,ne),J&&O.viewport(S.copy(J)),Q.length>0&&Tn(Q,Y,ne),Me.length>0&&Tn(Me,Y,ne),be.length>0&&Tn(be,Y,ne),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Gn(R,Y,ne,J){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new bi(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?ko:hi,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Me=p.state.transmissionRenderTarget[J.id],be=J.viewport||S;Me.setSize(be.z,be.w);const we=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(F),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=ai;const Be=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),D===!0&&xe.setGlobalState(v.clippingPlanes,J),Tn(R,ne,J),ae.updateMultisampleRenderTarget(Me),ae.updateRenderTargetMipmap(Me),W.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ye=0,_t=Y.length;Ye<_t;Ye++){const Pt=Y[Ye],qt=Pt.object,En=Pt.geometry,$e=Pt.material,ke=Pt.group;if($e.side===Zt&&qt.layers.test(J.layers)){const Cs=$e.side;$e.side=Wt,$e.needsUpdate=!0,Rs(qt,ne,J,En,$e,ke),$e.side=Cs,$e.needsUpdate=!0,Ve=!0}}Ve===!0&&(ae.updateMultisampleRenderTarget(Me),ae.updateRenderTargetMipmap(Me))}v.setRenderTarget(we),v.setClearColor(F,j),Be!==void 0&&(J.viewport=Be),v.toneMapping=Ne}function Tn(R,Y,ne){const J=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Me=R.length;Q<Me;Q++){const be=R[Q],we=be.object,Ne=be.geometry,Be=J===null?be.material:J,Ve=be.group;we.layers.test(ne.layers)&&Rs(we,Y,ne,Ne,Be,Ve)}}function Rs(R,Y,ne,J,Q,Me){R.onBeforeRender(v,Y,ne,J,Q,Me),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(v,Y,ne,J,R,Me),Q.transparent===!0&&Q.side===Zt&&Q.forceSinglePass===!1?(Q.side=Wt,Q.needsUpdate=!0,v.renderBufferDirect(ne,Y,J,Q,R,Me),Q.side=zn,Q.needsUpdate=!0,v.renderBufferDirect(ne,Y,J,Q,R,Me),Q.side=Zt):v.renderBufferDirect(ne,Y,J,Q,R,Me),R.onAfterRender(v,Y,ne,J,Q,Me)}function mr(R,Y,ne){Y.isScene!==!0&&(Y=ee);const J=K.get(R),Q=p.state.lights,Me=p.state.shadowsArray,be=Q.state.version,we=ue.getParameters(R,Q.state,Me,Y,ne),Ne=ue.getProgramCacheKey(we);let Be=J.programs;J.environment=R.isMeshStandardMaterial?Y.environment:null,J.fog=Y.fog,J.envMap=(R.isMeshStandardMaterial?_:z).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Be===void 0&&(R.addEventListener("dispose",pe),Be=new Map,J.programs=Be);let Ve=Be.get(Ne);if(Ve!==void 0){if(J.currentProgram===Ve&&J.lightsStateVersion===be)return Zc(R,we),Ve}else we.uniforms=ue.getUniforms(R),R.onBuild(ne,we,v),R.onBeforeCompile(we,v),Ve=ue.acquireProgram(we,Ne),Be.set(Ne,Ve),J.uniforms=we.uniforms;const Ye=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=xe.uniform),Zc(R,we),J.needsLights=Wd(R),J.lightsStateVersion=be,J.needsLights&&(Ye.ambientLightColor.value=Q.state.ambient,Ye.lightProbe.value=Q.state.probe,Ye.directionalLights.value=Q.state.directional,Ye.directionalLightShadows.value=Q.state.directionalShadow,Ye.spotLights.value=Q.state.spot,Ye.spotLightShadows.value=Q.state.spotShadow,Ye.rectAreaLights.value=Q.state.rectArea,Ye.ltc_1.value=Q.state.rectAreaLTC1,Ye.ltc_2.value=Q.state.rectAreaLTC2,Ye.pointLights.value=Q.state.point,Ye.pointLightShadows.value=Q.state.pointShadow,Ye.hemisphereLights.value=Q.state.hemi,Ye.directionalShadowMap.value=Q.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ye.spotShadowMap.value=Q.state.spotShadowMap,Ye.spotLightMatrix.value=Q.state.spotLightMatrix,Ye.spotLightMap.value=Q.state.spotLightMap,Ye.pointShadowMap.value=Q.state.pointShadowMap,Ye.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.currentProgram=Ve,J.uniformsList=null,Ve}function Kc(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=lo.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Zc(R,Y){const ne=K.get(R);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.instancingMorph=Y.instancingMorph,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function Vd(R,Y,ne,J,Q){Y.isScene!==!0&&(Y=ee),ae.resetTextureUnits();const Me=Y.fog,be=J.isMeshStandardMaterial?Y.environment:null,we=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Rt,Ne=(J.isMeshStandardMaterial?_:z).get(J.envMap||be),Be=J.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ve=!!ne.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ye=!!ne.morphAttributes.position,_t=!!ne.morphAttributes.normal,Pt=!!ne.morphAttributes.color;let qt=ai;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(qt=v.toneMapping);const En=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,$e=En!==void 0?En.length:0,ke=K.get(J),Cs=p.state.lights;if(D===!0&&(I===!0||R!==w)){const Qt=R===w&&J.id===B;xe.setState(J,R,Qt)}let ut=!1;J.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Cs.state.version||ke.outputColorSpace!==we||Q.isBatchedMesh&&ke.batching===!1||!Q.isBatchedMesh&&ke.batching===!0||Q.isInstancedMesh&&ke.instancing===!1||!Q.isInstancedMesh&&ke.instancing===!0||Q.isSkinnedMesh&&ke.skinning===!1||!Q.isSkinnedMesh&&ke.skinning===!0||Q.isInstancedMesh&&ke.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ke.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ke.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ke.instancingMorph===!1&&Q.morphTexture!==null||ke.envMap!==Ne||J.fog===!0&&ke.fog!==Me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==xe.numPlanes||ke.numIntersection!==xe.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==Ve||ke.morphTargets!==Ye||ke.morphNormals!==_t||ke.morphColors!==Pt||ke.toneMapping!==qt||ke.morphTargetsCount!==$e)&&(ut=!0):(ut=!0,ke.__version=J.version);let di=ke.currentProgram;ut===!0&&(di=mr(J,Y,Q));let $c=!1,Ps=!1,qo=!1;const Lt=di.getUniforms(),Wn=ke.uniforms;if(O.useProgram(di.program)&&($c=!0,Ps=!0,qo=!0),J.id!==B&&(B=J.id,Ps=!0),$c||w!==R){Lt.setValue(P,"projectionMatrix",R.projectionMatrix),Lt.setValue(P,"viewMatrix",R.matrixWorldInverse);const Qt=Lt.map.cameraPosition;Qt!==void 0&&Qt.setValue(P,b.setFromMatrixPosition(R.matrixWorld)),Z.logarithmicDepthBuffer&&Lt.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Lt.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Ps=!0,qo=!0)}if(Q.isSkinnedMesh){Lt.setOptional(P,Q,"bindMatrix"),Lt.setOptional(P,Q,"bindMatrixInverse");const Qt=Q.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Lt.setValue(P,"boneTexture",Qt.boneTexture,ae))}Q.isBatchedMesh&&(Lt.setOptional(P,Q,"batchingTexture"),Lt.setValue(P,"batchingTexture",Q._matricesTexture,ae));const jo=ne.morphAttributes;if((jo.position!==void 0||jo.normal!==void 0||jo.color!==void 0)&&Ee.update(Q,ne,di),(Ps||ke.receiveShadow!==Q.receiveShadow)&&(ke.receiveShadow=Q.receiveShadow,Lt.setValue(P,"receiveShadow",Q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Wn.envMap.value=Ne,Wn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&Y.environment!==null&&(Wn.envMapIntensity.value=Y.environmentIntensity),Ps&&(Lt.setValue(P,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Gd(Wn,qo),Me&&J.fog===!0&&ce.refreshFogUniforms(Wn,Me),ce.refreshMaterialUniforms(Wn,J,se,oe,p.state.transmissionRenderTarget[R.id]),lo.upload(P,Kc(ke),Wn,ae)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(lo.upload(P,Kc(ke),Wn,ae),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Lt.setValue(P,"center",Q.center),Lt.setValue(P,"modelViewMatrix",Q.modelViewMatrix),Lt.setValue(P,"normalMatrix",Q.normalMatrix),Lt.setValue(P,"modelMatrix",Q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Qt=J.uniformsGroups;for(let Ko=0,Xd=Qt.length;Ko<Xd;Ko++){const Jc=Qt[Ko];We.update(Jc,di),We.bind(Jc,di)}}return di}function Gd(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Wd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,Y,ne){K.get(R.texture).__webglTexture=Y,K.get(R.depthTexture).__webglTexture=ne;const J=K.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=ne===void 0,J.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){const ne=K.get(R);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,ne=0){C=R,U=Y,L=ne;let J=!0,Q=null,Me=!1,be=!1;if(R){const Ne=K.get(R);Ne.__useDefaultFramebuffer!==void 0?(O.bindFramebuffer(P.FRAMEBUFFER,null),J=!1):Ne.__webglFramebuffer===void 0?ae.setupRenderTarget(R):Ne.__hasExternalTextures&&ae.rebindTextures(R,K.get(R.texture).__webglTexture,K.get(R.depthTexture).__webglTexture);const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(be=!0);const Ve=K.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[Y])?Q=Ve[Y][ne]:Q=Ve[Y],Me=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?Q=K.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?Q=Ve[ne]:Q=Ve,S.copy(R.viewport),H.copy(R.scissor),G=R.scissorTest}else S.copy(he).multiplyScalar(se).floor(),H.copy(ve).multiplyScalar(se).floor(),G=Ce;if(O.bindFramebuffer(P.FRAMEBUFFER,Q)&&J&&O.drawBuffers(R,Q),O.viewport(S),O.scissor(H),O.setScissorTest(G),Me){const Ne=K.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,ne)}else if(be){const Ne=K.get(R.texture),Be=Y||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ne.__webglTexture,ne||0,Be)}B=-1},this.readRenderTargetPixels=function(R,Y,ne,J,Q,Me,be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){O.bindFramebuffer(P.FRAMEBUFFER,we);try{const Ne=R.texture,Be=Ne.format,Ve=Ne.type;if(!Z.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-J&&ne>=0&&ne<=R.height-Q&&P.readPixels(Y,ne,J,Q,Se.convert(Be),Se.convert(Ve),Me)}finally{const Ne=C!==null?K.get(C).__webglFramebuffer:null;O.bindFramebuffer(P.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(R,Y,ne=0){const J=Math.pow(2,-ne),Q=Math.floor(Y.image.width*J),Me=Math.floor(Y.image.height*J);ae.setTexture2D(Y,0),P.copyTexSubImage2D(P.TEXTURE_2D,ne,0,0,R.x,R.y,Q,Me),O.unbindTexture()},this.copyTextureToTexture=function(R,Y,ne,J=0){const Q=Y.image.width,Me=Y.image.height,be=Se.convert(ne.format),we=Se.convert(ne.type);ae.setTexture2D(ne,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,ne.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,ne.unpackAlignment),Y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,J,R.x,R.y,Q,Me,be,we,Y.image.data):Y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,J,R.x,R.y,Y.mipmaps[0].width,Y.mipmaps[0].height,be,Y.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,J,R.x,R.y,be,we,Y.image),J===0&&ne.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,ne,J,Q=0){const Me=R.max.x-R.min.x,be=R.max.y-R.min.y,we=R.max.z-R.min.z,Ne=Se.convert(J.format),Be=Se.convert(J.type);let Ve;if(J.isData3DTexture)ae.setTexture3D(J,0),Ve=P.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)ae.setTexture2DArray(J,0),Ve=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,J.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,J.unpackAlignment);const Ye=P.getParameter(P.UNPACK_ROW_LENGTH),_t=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Pt=P.getParameter(P.UNPACK_SKIP_PIXELS),qt=P.getParameter(P.UNPACK_SKIP_ROWS),En=P.getParameter(P.UNPACK_SKIP_IMAGES),$e=ne.isCompressedTexture?ne.mipmaps[Q]:ne.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,$e.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,$e.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,R.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,R.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,R.min.z),ne.isDataTexture||ne.isData3DTexture?P.texSubImage3D(Ve,Q,Y.x,Y.y,Y.z,Me,be,we,Ne,Be,$e.data):J.isCompressedArrayTexture?P.compressedTexSubImage3D(Ve,Q,Y.x,Y.y,Y.z,Me,be,we,Ne,$e.data):P.texSubImage3D(Ve,Q,Y.x,Y.y,Y.z,Me,be,we,Ne,Be,$e),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ye),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pt),P.pixelStorei(P.UNPACK_SKIP_ROWS,qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,En),Q===0&&J.generateMipmaps&&P.generateMipmap(Ve),O.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),O.unbindTexture()},this.resetState=function(){U=0,L=0,C=null,O.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ac?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===zo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Tx extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xt,this.environmentIntensity=1,this.environmentRotation=new Xt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gu("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new N;class ar{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ar(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class od extends sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ki;const Us=new N,Zi=new N,$i=new N,Ji=new ie,Os=new ie,ad=new De,Fr=new N,Fs=new N,Br=new N,Sh=new ie,Aa=new ie,Th=new ie;class Ex extends Ie{constructor(e=new od){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new at;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rd(t,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new ar(n,3,0,!1)),Ki.setAttribute("uv",new ar(n,2,3,!1))}this.geometry=Ki,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),ad.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-$i.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;kr(Fr.set(-.5,-.5,0),$i,o,Zi,i,r),kr(Fs.set(.5,-.5,0),$i,o,Zi,i,r),kr(Br.set(.5,.5,0),$i,o,Zi,i,r),Sh.set(0,0),Aa.set(1,0),Th.set(1,1);let a=e.ray.intersectTriangle(Fr,Fs,Br,!1,Us);if(a===null&&(kr(Fs.set(-.5,.5,0),$i,o,Zi,i,r),Aa.set(0,1),a=e.ray.intersectTriangle(Fr,Br,Fs,!1,Us),a===null))return;const c=e.ray.origin.distanceTo(Us);c<e.near||c>e.far||t.push({distance:c,point:Us.clone(),uv:hn.getInterpolation(Us,Fr,Fs,Br,Sh,Aa,Th,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kr(s,e,t,n,i,r){Ji.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Os.x=r*Ji.x-i*Ji.y,Os.y=i*Ji.x+r*Ji.y):Os.copy(Ji),s.copy(e),s.x+=Os.x,s.y+=Os.y,s.applyMatrix4(ad)}const Eh=new N,bh=new rt,wh=new rt,bx=new N,Ah=new De,zr=new N,Ra=new xn,Rh=new De,Ca=new Ts;class wx extends Re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nl,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zr),this.boundingBox.expandByPoint(zr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zr),this.boundingSphere.expandByPoint(zr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(i),e.ray.intersectsSphere(Ra)!==!1&&(Rh.copy(i).invert(),Ca.copy(e.ray).applyMatrix4(Rh),!(this.boundingBox!==null&&Ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ca)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;bh.fromBufferAttribute(i.attributes.skinIndex,e),wh.fromBufferAttribute(i.attributes.skinWeight,e),Eh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=wh.getComponent(r);if(o!==0){const a=bh.getComponent(r);Ah.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(bx.copy(Eh).applyMatrix4(Ah),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class cd extends Ie{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ld extends Mt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Ot,h=Ot,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ch=new De,Ax=new De;class Ic{constructor(e=[],t=[]){this.uuid=nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ax;Ch.multiplyMatrices(a,t[r]),Ch.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ic(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ld(t,e,e,un,pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new cd),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ec extends pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qi=new De,Ph=new De,Hr=[],Lh=new Hn,Rx=new De,Bs=new Re,ks=new xn;class Go extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ec(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),Lh.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Lh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),ks.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),e.ray.intersectsSphere(ks)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Qi),Ph.multiplyMatrices(n,Qi),Bs.matrixWorld=Ph,Bs.raycast(e,Hr);for(let o=0,a=Hr.length;o<a;o++){const c=Hr[o];c.instanceId=r,c.object=this,t.push(c)}Hr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ec(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ld(new Float32Array(i*this.count),i,this.count,Uu,pn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _s extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const So=new N,To=new N,Ih=new De,zs=new Ts,Vr=new xn,Pa=new N,Nh=new N;class xs extends Ie{constructor(e=new at,t=new _s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)So.fromBufferAttribute(t,i-1),To.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=So.distanceTo(To);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(i),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;Ih.copy(i).invert(),zs.copy(e.ray).applyMatrix4(Ih);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=l){const f=h.getX(x),E=h.getX(x+1),v=Gr(this,e,zs,c,f,E);v&&t.push(v)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(m),f=Gr(this,e,zs,c,x,p);f&&t.push(f)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=l){const f=Gr(this,e,zs,c,x,x+1);f&&t.push(f)}if(this.isLineLoop){const x=Gr(this,e,zs,c,g-1,m);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(So.fromBufferAttribute(o,i),To.fromBufferAttribute(o,r),t.distanceSqToSegment(So,To,Pa,Nh)>n)return;Pa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Pa);if(!(c<e.near||c>e.far))return{distance:c,point:Nh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Dh=new N,Uh=new N;class hd extends xs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Dh.fromBufferAttribute(t,i),Uh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dh.distanceTo(Uh);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cx extends xs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ud extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Oh=new De,tc=new Ts,Wr=new xn,Xr=new N;class Px extends Ie{constructor(e=new at,t=new ud){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;Oh.copy(i).invert(),tc.copy(e.ray).applyMatrix4(Oh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,x=m;g<x;g++){const p=l.getX(g);Xr.fromBufferAttribute(u,p),Fh(Xr,p,c,i,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,x=m;g<x;g++)Xr.fromBufferAttribute(u,g),Fh(Xr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fh(s,e,t,n,i,r,o){const a=tc.distanceSqToPoint(s);if(a<t){const c=new N;tc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,m=(o-h)/d;return(i+m)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ie:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,i=[],r=[],o=[],a=new N,c=new De;for(let m=0;m<=e;m++){const g=m/e;i[m]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(vt(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(i[m],r[m])}if(t===!0){let m=Math.acos(vt(r[0].dot(r[e]),-1,1));m/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nc extends vn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ie){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Lx extends Nc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dc(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,i(o,a,d,m)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Yr=new N,La=new Dc,Ia=new Dc,Na=new Dc;class Ix extends vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Yr.subVectors(i[0],i[1]).add(i[0]),l=Yr);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Yr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Yr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),La.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,p),Ia.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,p),Na.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(La.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ia.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Na.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(La.calc(c),Ia.calc(c),Na.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Nx(s,e){const t=1-s;return t*t*e}function Dx(s,e){return 2*(1-s)*s*e}function Ux(s,e){return s*s*e}function Js(s,e,t,n){return Nx(s,e)+Dx(s,t)+Ux(s,n)}function Ox(s,e){const t=1-s;return t*t*t*e}function Fx(s,e){const t=1-s;return 3*t*t*s*e}function Bx(s,e){return 3*(1-s)*s*s*e}function kx(s,e){return s*s*s*e}function Qs(s,e,t,n,i){return Ox(s,e)+Fx(s,t)+Bx(s,n)+kx(s,i)}class dd extends vn{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,i.x,r.x,o.x,a.x),Qs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zx extends vn{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,i.x,r.x,o.x,a.x),Qs(e,i.y,r.y,o.y,a.y),Qs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fd extends vn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hx extends vn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pd extends vn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Js(e,i.x,r.x,o.x),Js(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vx extends vn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Js(e,i.x,r.x,o.x),Js(e,i.y,r.y,o.y),Js(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class md extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Bh(a,c.x,l.x,h.x,u.x),Bh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ie().fromArray(i))}return this}}var nc=Object.freeze({__proto__:null,ArcCurve:Lx,CatmullRomCurve3:Ix,CubicBezierCurve:dd,CubicBezierCurve3:zx,EllipseCurve:Nc,LineCurve:fd,LineCurve3:Hx,QuadraticBezierCurve:pd,QuadraticBezierCurve3:Vx,SplineCurve:md});class Gx extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new nc[i.type]().fromJSON(i))}return this}}class ci extends Gx{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new fd(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new pd(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new dd(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new md(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Nc(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Uc extends at{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new N,h=new ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const m=n+u/t*i;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yn extends at{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],m=[];let g=0;const x=[],p=n/2;let f=0;E(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(m,2));function E(){const T=new N,U=new N;let L=0;const C=(t-e)/n;for(let B=0;B<=r;B++){const w=[],S=B/r,H=S*(t-e)+e;for(let G=0;G<=i;G++){const F=G/i,j=F*c+a,te=Math.sin(j),oe=Math.cos(j);U.x=H*te,U.y=-S*n+p,U.z=H*oe,u.push(U.x,U.y,U.z),T.set(te,C,oe).normalize(),d.push(T.x,T.y,T.z),m.push(F,1-S),w.push(g++)}x.push(w)}for(let B=0;B<i;B++)for(let w=0;w<r;w++){const S=x[w][B],H=x[w+1][B],G=x[w+1][B+1],F=x[w][B+1];h.push(S,H,F),h.push(H,G,F),L+=6}l.addGroup(f,L,0),f+=L}function v(T){const U=g,L=new ie,C=new N;let B=0;const w=T===!0?e:t,S=T===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,p*S,0),d.push(0,S,0),m.push(.5,.5),g++;const H=g;for(let G=0;G<=i;G++){const j=G/i*c+a,te=Math.cos(j),oe=Math.sin(j);C.x=w*oe,C.y=p*S,C.z=w*te,u.push(C.x,C.y,C.z),d.push(0,S,0),L.x=te*.5+.5,L.y=oe*.5*S+.5,m.push(L.x,L.y),g++}for(let G=0;G<i;G++){const F=U+G,j=H+G;T===!0?h.push(j,j+1,F):h.push(j+1,j,F),B+=3}l.addGroup(f,B,T===!0?1:2),f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ht extends ci{constructor(e){super(e),this.uuid=nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ci().fromJSON(i))}return this}}const Wx={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=gd(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,m;if(n&&(r=Kx(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return cr(r,o,t,a,c,m,0),o}};function gd(s,e,t,n,i){let r,o;if(i===ov(s,e,t,n)>0)for(r=e;r<t;r+=n)o=kh(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=kh(r,s[r],s[r+1],o);return o&&Wo(o,o.next)&&(hr(o),o=o.next),o}function wi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Wo(t,t.next)||ft(t.prev,t,t.next)===0)){if(hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&ev(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Yx(s,n,i,r):Xx(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),hr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=qx(wi(s),e,t),cr(s,e,t,n,i,r,2)):o===2&&jx(s,e,t,n,i,r):cr(wi(s),e,t,n,i,r,1);break}}}function Xx(s){const e=s.prev,t=s,n=s.next;if(ft(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,m=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&ns(i,a,r,c,o,l,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yx(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ft(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,f=ic(m,g,e,t,n),E=ic(x,p,e,t,n);let v=s.prevZ,T=s.nextZ;for(;v&&v.z>=f&&T&&T.z<=E;){if(v.x>=m&&v.x<=x&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&ns(a,h,c,u,l,d,v.x,v.y)&&ft(v.prev,v,v.next)>=0||(v=v.prevZ,T.x>=m&&T.x<=x&&T.y>=g&&T.y<=p&&T!==i&&T!==o&&ns(a,h,c,u,l,d,T.x,T.y)&&ft(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;v&&v.z>=f;){if(v.x>=m&&v.x<=x&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&ns(a,h,c,u,l,d,v.x,v.y)&&ft(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;T&&T.z<=E;){if(T.x>=m&&T.x<=x&&T.y>=g&&T.y<=p&&T!==i&&T!==o&&ns(a,h,c,u,l,d,T.x,T.y)&&ft(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function qx(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Wo(i,r)&&_d(i,n,n.next,r)&&lr(i,r)&&lr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),hr(n),hr(n.next),n=s=r),n=n.next}while(n!==s);return wi(n)}function jx(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&iv(o,a)){let c=xd(o,a);o=wi(o,o.next),c=wi(c,c.next),cr(o,e,t,n,i,r,0),cr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Kx(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=gd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(nv(l));for(i.sort(Zx),r=0;r<i.length;r++)t=$x(i[r],t);return t}function Zx(s,e){return s.x-e.x}function $x(s,e){const t=Jx(s,e);if(!t)return e;const n=xd(t,s);return wi(n,n.next),wi(t,t.next)}function Jx(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&ns(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),lr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Qx(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Qx(s,e){return ft(s.prev,s,e.prev)<0&&ft(e.next,s,s.next)<0}function ev(s,e,t,n){let i=s;do i.z===0&&(i.z=ic(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,tv(i)}function tv(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function ic(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function nv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ns(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function iv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!sv(s,e)&&(lr(s,e)&&lr(e,s)&&rv(s,e)&&(ft(s.prev,s,e.prev)||ft(s,e.prev,e))||Wo(s,e)&&ft(s.prev,s,s.next)>0&&ft(e.prev,e,e.next)>0)}function ft(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Wo(s,e){return s.x===e.x&&s.y===e.y}function _d(s,e,t,n){const i=jr(ft(s,e,t)),r=jr(ft(s,e,n)),o=jr(ft(t,n,s)),a=jr(ft(t,n,e));return!!(i!==r&&o!==a||i===0&&qr(s,t,e)||r===0&&qr(s,n,e)||o===0&&qr(t,s,n)||a===0&&qr(t,e,n))}function qr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function jr(s){return s>0?1:s<0?-1:0}function sv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&_d(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function lr(s,e){return ft(s.prev,s,s.next)<0?ft(s,e,s.next)>=0&&ft(s,s.prev,e)>=0:ft(s,e,s.prev)<0||ft(s,s.next,e)<0}function rv(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function xd(s,e){const t=new sc(s.i,s.x,s.y),n=new sc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function kh(s,e,t,n){const i=new sc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function hr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ov(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class mn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return mn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];zh(e),Hh(n,e);let o=e.length;t.forEach(zh);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Hh(n,t[c]);const a=Wx.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function zh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Hh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Vt extends at{constructor(e=new ht([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ot(i,3)),this.setAttribute("uv",new ot(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:av;let v,T=!1,U,L,C,B;f&&(v=f.getSpacedPoints(h),T=!0,d=!1,U=f.computeFrenetFrames(h,!1),L=new N,C=new N,B=new N),d||(p=0,m=0,g=0,x=0);const w=a.extractPoints(l);let S=w.shape;const H=w.holes;if(!mn.isClockWise(S)){S=S.reverse();for(let W=0,Z=H.length;W<Z;W++){const O=H[W];mn.isClockWise(O)&&(H[W]=O.reverse())}}const F=mn.triangulateShape(S,H),j=S;for(let W=0,Z=H.length;W<Z;W++){const O=H[W];S=S.concat(O)}function te(W,Z,O){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(Z,O)}const oe=S.length,se=F.length;function k(W,Z,O){let q,K,ae;const z=W.x-Z.x,_=W.y-Z.y,y=O.x-W.x,V=O.y-W.y,re=z*z+_*_,ue=z*V-_*y;if(Math.abs(ue)>Number.EPSILON){const ce=Math.sqrt(re),Te=Math.sqrt(y*y+V*V),_e=Z.x-_/ce,xe=Z.y+z/ce,Pe=O.x-V/Te,me=O.y+y/Te,Ee=((Pe-_e)*V-(me-xe)*y)/(z*V-_*y);q=_e+z*Ee-W.x,K=xe+_*Ee-W.y;const Fe=q*q+K*K;if(Fe<=2)return new ie(q,K);ae=Math.sqrt(Fe/2)}else{let ce=!1;z>Number.EPSILON?y>Number.EPSILON&&(ce=!0):z<-Number.EPSILON?y<-Number.EPSILON&&(ce=!0):Math.sign(_)===Math.sign(V)&&(ce=!0),ce?(q=-_,K=z,ae=Math.sqrt(re)):(q=z,K=_,ae=Math.sqrt(re/2))}return new ie(q/ae,K/ae)}const fe=[];for(let W=0,Z=j.length,O=Z-1,q=W+1;W<Z;W++,O++,q++)O===Z&&(O=0),q===Z&&(q=0),fe[W]=k(j[W],j[O],j[q]);const he=[];let ve,Ce=fe.concat();for(let W=0,Z=H.length;W<Z;W++){const O=H[W];ve=[];for(let q=0,K=O.length,ae=K-1,z=q+1;q<K;q++,ae++,z++)ae===K&&(ae=0),z===K&&(z=0),ve[q]=k(O[q],O[ae],O[z]);he.push(ve),Ce=Ce.concat(ve)}for(let W=0;W<p;W++){const Z=W/p,O=m*Math.cos(Z*Math.PI/2),q=g*Math.sin(Z*Math.PI/2)+x;for(let K=0,ae=j.length;K<ae;K++){const z=te(j[K],fe[K],q);b(z.x,z.y,-O)}for(let K=0,ae=H.length;K<ae;K++){const z=H[K];ve=he[K];for(let _=0,y=z.length;_<y;_++){const V=te(z[_],ve[_],q);b(V.x,V.y,-O)}}}const je=g+x;for(let W=0;W<oe;W++){const Z=d?te(S[W],Ce[W],je):S[W];T?(C.copy(U.normals[0]).multiplyScalar(Z.x),L.copy(U.binormals[0]).multiplyScalar(Z.y),B.copy(v[0]).add(C).add(L),b(B.x,B.y,B.z)):b(Z.x,Z.y,0)}for(let W=1;W<=h;W++)for(let Z=0;Z<oe;Z++){const O=d?te(S[Z],Ce[Z],je):S[Z];T?(C.copy(U.normals[W]).multiplyScalar(O.x),L.copy(U.binormals[W]).multiplyScalar(O.y),B.copy(v[W]).add(C).add(L),b(B.x,B.y,B.z)):b(O.x,O.y,u/h*W)}for(let W=p-1;W>=0;W--){const Z=W/p,O=m*Math.cos(Z*Math.PI/2),q=g*Math.sin(Z*Math.PI/2)+x;for(let K=0,ae=j.length;K<ae;K++){const z=te(j[K],fe[K],q);b(z.x,z.y,u+O)}for(let K=0,ae=H.length;K<ae;K++){const z=H[K];ve=he[K];for(let _=0,y=z.length;_<y;_++){const V=te(z[_],ve[_],q);T?b(V.x,V.y+v[h-1].y,v[h-1].x+O):b(V.x,V.y,u+O)}}}D(),I();function D(){const W=i.length/3;if(d){let Z=0,O=oe*Z;for(let q=0;q<se;q++){const K=F[q];ee(K[2]+O,K[1]+O,K[0]+O)}Z=h+p*2,O=oe*Z;for(let q=0;q<se;q++){const K=F[q];ee(K[0]+O,K[1]+O,K[2]+O)}}else{for(let Z=0;Z<se;Z++){const O=F[Z];ee(O[2],O[1],O[0])}for(let Z=0;Z<se;Z++){const O=F[Z];ee(O[0]+oe*h,O[1]+oe*h,O[2]+oe*h)}}n.addGroup(W,i.length/3-W,0)}function I(){const W=i.length/3;let Z=0;A(j,Z),Z+=j.length;for(let O=0,q=H.length;O<q;O++){const K=H[O];A(K,Z),Z+=K.length}n.addGroup(W,i.length/3-W,1)}function A(W,Z){let O=W.length;for(;--O>=0;){const q=O;let K=O-1;K<0&&(K=W.length-1);for(let ae=0,z=h+p*2;ae<z;ae++){const _=oe*ae,y=oe*(ae+1),V=Z+q+_,re=Z+K+_,ue=Z+K+y,ce=Z+q+y;le(V,re,ue,ce)}}}function b(W,Z,O){c.push(W),c.push(Z),c.push(O)}function ee(W,Z,O){P(W),P(Z),P(O);const q=i.length/3,K=E.generateTopUV(n,i,q-3,q-2,q-1);de(K[0]),de(K[1]),de(K[2])}function le(W,Z,O,q){P(W),P(Z),P(q),P(Z),P(O),P(q);const K=i.length/3,ae=E.generateSideWallUV(n,i,K-6,K-3,K-2,K-1);de(ae[0]),de(ae[1]),de(ae[3]),de(ae[1]),de(ae[2]),de(ae[3])}function P(W){i.push(c[W*3+0]),i.push(c[W*3+1]),i.push(c[W*3+2])}function de(W){r.push(W.x),r.push(W.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return cv(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new nc[i.type]().fromJSON(i)),new Vt(n,e.options)}}const av={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ie(r,o),new ie(a,c),new ie(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],m=e[i*3+1],g=e[i*3+2],x=e[r*3],p=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ie(o,1-c),new ie(l,1-u),new ie(d,1-g),new ie(x,1-f)]:[new ie(a,1-c),new ie(h,1-u),new ie(m,1-g),new ie(p,1-f)]}};function cv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Oc extends at{constructor(e=new ht([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ot(i,3)),this.setAttribute("normal",new ot(r,3)),this.setAttribute("uv",new ot(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let m=d.shape;const g=d.holes;mn.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=g.length;p<f;p++){const E=g[p];mn.isClockWise(E)===!0&&(g[p]=E.reverse())}const x=mn.triangulateShape(m,g);for(let p=0,f=g.length;p<f;p++){const E=g[p];m=m.concat(E)}for(let p=0,f=m.length;p<f;p++){const E=m[p];i.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let p=0,f=x.length;p<f;p++){const E=x[p],v=E[0]+u,T=E[1]+u,U=E[2]+u;n.push(v,T,U),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return lv(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Oc(n,e.curveSegments)}}function lv(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class bs extends at{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new N,d=new N,m=[],g=[],x=[],p=[];for(let f=0;f<=n;f++){const E=[],v=f/n;let T=0;f===0&&o===0?T=.5/t:f===n&&c===Math.PI&&(T=-.5/t);for(let U=0;U<=t;U++){const L=U/t;u.x=-e*Math.cos(i+L*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+L*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(L+T,1-v),E.push(l++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const v=h[f][E+1],T=h[f][E],U=h[f+1][E],L=h[f+1][E+1];(f!==0||o>0)&&m.push(v,T,L),(f!==n-1||c<Math.PI)&&m.push(T,U,L)}this.setIndex(m),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class it extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mn extends it{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Da extends sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Kr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function hv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function uv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Vh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function vd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class pr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dv extends pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cl,endingEnd:Cl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pl:r=e,a=2*t-n;break;case Ll:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Pl:o=e,c=2*n-t;break;case Ll:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),x=g*g,p=x*g,f=-d*p+2*d*x-d*g,E=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-m)*p+(1.5+m)*x+.5*g,T=m*p-m*x;for(let U=0;U!==a;++U)r[U]=f*o[h+U]+E*o[l+U]+v*o[c+U]+T*o[u+U];return r}}class fv extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class pv extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case ps:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return ps;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&hv(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ta,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=ps;class ws extends Sn{}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=rr;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class yd extends Sn{}yd.prototype.ValueTypeName="color";class vs extends Sn{}vs.prototype.ValueTypeName="number";class mv extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Ct.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ai extends Sn{InterpolantFactoryMethodLinear(e){return new mv(this.times,this.values,this.getValueSize(),e)}}Ai.prototype.ValueTypeName="quaternion";Ai.prototype.DefaultInterpolation=ps;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends Sn{}As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=rr;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends Sn{}ys.prototype.ValueTypeName="vector";class gv{constructor(e="",t=-1,n=[],i=zf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=uv(c);c=Vh(c,1,h),l=Vh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new vs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,m,g,x){if(m.length!==0){const p=[],f=[];vd(m,p,f,g),p.length!==0&&x.push(new u(d,p,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)m[d[g].morphTargets[x]]=-1;for(const x in m){const p=[],f=[];for(let E=0;E!==d[g].morphTargets.length;++E){const v=d[g];p.push(v.time),f.push(v.morphTarget===x?1:0)}i.push(new vs(".morphTargetInfluence["+x+"]",p,f))}c=m.length*o}else{const m=".bones["+t[u].name+"]";n(ys,m+".position",d,"pos",i),n(Ai,m+".quaternion",d,"rot",i),n(ys,m+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _v(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return ys;case"color":return yd;case"quaternion":return Ai;case"bool":case"boolean":return ws;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function xv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_v(s.type);if(s.times===void 0){const t=[],n=[];vd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ii={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class vv{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const yv=new vv;class Pi{constructor(e){this.manager=e!==void 0?e:yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn={};class Mv extends Error{constructor(e,t){super(e),this.response=t}}class Fc extends Pi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ii.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:n,onError:i});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Pn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0;let x=0;const p=new ReadableStream({start(f){E();function E(){u.read().then(({done:v,value:T})=>{if(v)f.close();else{x+=T.byteLength;const U=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:m});for(let L=0,C=h.length;L<C;L++){const B=h[L];B.onProgress&&B.onProgress(U)}f.enqueue(T),E()}})}}});return new Response(p)}else throw new Mv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{ii.add(e,l);const h=Pn[e];delete Pn[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=Pn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Pn[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sv extends Pi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ii.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=or("img");function c(){h(),ii.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Bc extends Pi{constructor(e){super(e)}load(e,t,n,i){const r=new Mt,o=new Sv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Xo extends Ie{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Tv extends Xo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ua=new De,Gh=new N,Wh=new N;class kc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pc,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wh),t.updateMatrixWorld(),Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ev extends kc{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bv extends Xo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ev}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xh=new De,Hs=new N,Oa=new N;class wv extends kc{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hs),Oa.copy(n.position),Oa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oa),n.updateMatrixWorld(),i.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xh)}}class Av extends Xo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rv extends kc{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ho extends Xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Rv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class er{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Cv extends Pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ii.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ii.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ii.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ii.add(e,c),r.manager.itemStart(e)}}class Pv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yh(){return(typeof performance>"u"?Date:performance).now()}const zc="\\[\\]\\.:\\/",Lv=new RegExp("["+zc+"]","g"),Hc="[^"+zc+"]",Iv="[^"+zc.replace("\\.","")+"]",Nv=/((?:WC+[\/:])*)/.source.replace("WC",Hc),Dv=/(WCOD+)?/.source.replace("WCOD",Iv),Uv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),Ov=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),Fv=new RegExp("^"+Nv+Dv+Uv+Ov+"$"),Bv=["material","materials","bones","map"];class kv{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lv,"")}static parseTrackName(e){const t=Fv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Bv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=kv;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const qh=new De;class Vc{constructor(e,t,n=0,i=1/0){this.ray=new Ts(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Cc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qh),this}intersectObject(e,t=!0,n=[]){return rc(e,this,n,t),n.sort(jh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)rc(e[i],this,n,t);return n.sort(jh),n}}function jh(s,e){return s.distance-e.distance}function rc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)rc(i[r],e,t,!0)}}class Kh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Zh=new ie;class zv{constructor(e=new ie(1/0,1/0),t=new ie(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zh).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class vi{constructor(){this.type="ShapePath",this.color=new Le,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ci,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const E=[];for(let v=0,T=f.length;v<T;v++){const U=f[v],L=new ht;L.curves=U.curves,E.push(L)}return E}function n(f,E){const v=E.length;let T=!1;for(let U=v-1,L=0;L<v;U=L++){let C=E[U],B=E[L],w=B.x-C.x,S=B.y-C.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(C=E[L],w=-w,B=E[U],S=-S),f.y<C.y||f.y>B.y)continue;if(f.y===C.y){if(f.x===C.x)return!0}else{const H=S*(f.x-C.x)-w*(f.y-C.y);if(H===0)return!0;if(H<0)continue;T=!T}}else{if(f.y!==C.y)continue;if(B.x<=f.x&&f.x<=C.x||C.x<=f.x&&f.x<=B.x)return!0}}return T}const i=mn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new ht,c.curves=a.curves,l.push(c),l;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let m=[],g=0,x;d[g]=void 0,m[g]=[];for(let f=0,E=r.length;f<E;f++)a=r[f],x=a.getPoints(),o=i(x),o=e?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new ht,p:x},d[g].s.curves=a.curves,h&&g++,m[g]=[]):m[g].push({h:a,p:x[0]});if(!d[0])return t(r);if(d.length>1){let f=!1,E=0;for(let v=0,T=d.length;v<T;v++)u[v]=[];for(let v=0,T=d.length;v<T;v++){const U=m[v];for(let L=0;L<U.length;L++){const C=U[L];let B=!0;for(let w=0;w<d.length;w++)n(C.p,d[w].p)&&(v!==w&&E++,B?(B=!1,u[w].push(C)):f=!0);B&&u[v].push(C)}}E>0&&f===!1&&(m=u)}let p;for(let f=0,E=d.length;f<E;f++){c=d[f].s,l.push(c),p=m[f];for(let v=0,T=p.length;v<T;v++)c.holes.push(p[v].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);const $h={type:"change"},Fa={type:"start"},Jh={type:"end"},Zr=new Ts,Qh=new Qn,Hv=Math.cos(70*Hu.DEG2RAD);class Md extends Ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dn.ROTATE,MIDDLE:Dn.DOLLY,RIGHT:Dn.PAN},this.touches={ONE:Jn.ROTATE,TWO:Jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",Pe),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent($h),n.update(),r=i.NONE},this.update=function(){const M=new N,X=new Ct().setFromUnitVectors(e.up,new N(0,1,0)),$=X.clone().invert(),pe=new N,ge=new Ct,ze=new N,Xe=2*Math.PI;return function(Et=null){const Ze=n.object.position;M.copy(Ze).sub(n.target),M.applyQuaternion(X),a.setFromVector3(M),n.autoRotate&&r===i.NONE&&G(S(Et)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let gt=n.minAzimuthAngle,ct=n.maxAzimuthAngle;isFinite(gt)&&isFinite(ct)&&(gt<-Math.PI?gt+=Xe:gt>Math.PI&&(gt-=Xe),ct<-Math.PI?ct+=Xe:ct>Math.PI&&(ct-=Xe),gt<=ct?a.theta=Math.max(gt,Math.min(ct,a.theta)):a.theta=a.theta>(gt+ct)/2?Math.max(gt,a.theta):Math.min(ct,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Vn=!1;if(n.zoomToCursor&&L||n.object.isOrthographicCamera)a.radius=he(a.radius);else{const Jt=a.radius;a.radius=he(a.radius*l),Vn=Jt!=a.radius}if(M.setFromSpherical(a),M.applyQuaternion($),Ze.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&L){let Jt=null;if(n.object.isPerspectiveCamera){const Gn=M.length();Jt=he(Gn*l);const Tn=Gn-Jt;n.object.position.addScaledVector(T,Tn),n.object.updateMatrixWorld(),Vn=!!Tn}else if(n.object.isOrthographicCamera){const Gn=new N(U.x,U.y,0);Gn.unproject(n.object);const Tn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Vn=Tn!==n.object.zoom;const Rs=new N(U.x,U.y,0);Rs.unproject(n.object),n.object.position.sub(Rs).add(Gn),n.object.updateMatrixWorld(),Jt=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Jt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Jt).add(n.object.position):(Zr.origin.copy(n.object.position),Zr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Zr.direction))<Hv?e.lookAt(n.target):(Qh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Zr.intersectPlane(Qh,n.target))))}else if(n.object.isOrthographicCamera){const Jt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Jt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Vn=!0)}return l=1,L=!1,Vn||pe.distanceToSquared(n.object.position)>o||8*(1-ge.dot(n.object.quaternion))>o||ze.distanceToSquared(n.target)>o?(n.dispatchEvent($h),pe.copy(n.object.position),ge.copy(n.object.quaternion),ze.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Fe),n.domElement.removeEventListener("pointerdown",_),n.domElement.removeEventListener("pointercancel",V),n.domElement.removeEventListener("wheel",ce),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",V),n.domElement.getRootNode().removeEventListener("keydown",_e,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Pe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Kh,c=new Kh;let l=1;const h=new N,u=new ie,d=new ie,m=new ie,g=new ie,x=new ie,p=new ie,f=new ie,E=new ie,v=new ie,T=new N,U=new ie;let L=!1;const C=[],B={};let w=!1;function S(M){return M!==null?2*Math.PI/60*n.autoRotateSpeed*M:2*Math.PI/60/60*n.autoRotateSpeed}function H(M){const X=Math.abs(M*.01);return Math.pow(.95,n.zoomSpeed*X)}function G(M){c.theta-=M}function F(M){c.phi-=M}const j=function(){const M=new N;return function($,pe){M.setFromMatrixColumn(pe,0),M.multiplyScalar(-$),h.add(M)}}(),te=function(){const M=new N;return function($,pe){n.screenSpacePanning===!0?M.setFromMatrixColumn(pe,1):(M.setFromMatrixColumn(pe,0),M.crossVectors(n.object.up,M)),M.multiplyScalar($),h.add(M)}}(),oe=function(){const M=new N;return function($,pe){const ge=n.domElement;if(n.object.isPerspectiveCamera){const ze=n.object.position;M.copy(ze).sub(n.target);let Xe=M.length();Xe*=Math.tan(n.object.fov/2*Math.PI/180),j(2*$*Xe/ge.clientHeight,n.object.matrix),te(2*pe*Xe/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j($*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),te(pe*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function se(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function fe(M,X){if(!n.zoomToCursor)return;L=!0;const $=n.domElement.getBoundingClientRect(),pe=M-$.left,ge=X-$.top,ze=$.width,Xe=$.height;U.x=pe/ze*2-1,U.y=-(ge/Xe)*2+1,T.set(U.x,U.y,1).unproject(n.object).sub(n.object.position).normalize()}function he(M){return Math.max(n.minDistance,Math.min(n.maxDistance,M))}function ve(M){u.set(M.clientX,M.clientY)}function Ce(M){fe(M.clientX,M.clientX),f.set(M.clientX,M.clientY)}function je(M){g.set(M.clientX,M.clientY)}function D(M){d.set(M.clientX,M.clientY),m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const X=n.domElement;G(2*Math.PI*m.x/X.clientHeight),F(2*Math.PI*m.y/X.clientHeight),u.copy(d),n.update()}function I(M){E.set(M.clientX,M.clientY),v.subVectors(E,f),v.y>0?se(H(v.y)):v.y<0&&k(H(v.y)),f.copy(E),n.update()}function A(M){x.set(M.clientX,M.clientY),p.subVectors(x,g).multiplyScalar(n.panSpeed),oe(p.x,p.y),g.copy(x),n.update()}function b(M){fe(M.clientX,M.clientY),M.deltaY<0?k(H(M.deltaY)):M.deltaY>0&&se(H(M.deltaY)),n.update()}function ee(M){let X=!1;switch(M.code){case n.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):oe(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):oe(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):oe(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):oe(-n.keyPanSpeed,0),X=!0;break}X&&(M.preventDefault(),n.update())}function le(M){if(C.length===1)u.set(M.pageX,M.pageY);else{const X=st(M),$=.5*(M.pageX+X.x),pe=.5*(M.pageY+X.y);u.set($,pe)}}function P(M){if(C.length===1)g.set(M.pageX,M.pageY);else{const X=st(M),$=.5*(M.pageX+X.x),pe=.5*(M.pageY+X.y);g.set($,pe)}}function de(M){const X=st(M),$=M.pageX-X.x,pe=M.pageY-X.y,ge=Math.sqrt($*$+pe*pe);f.set(0,ge)}function W(M){n.enableZoom&&de(M),n.enablePan&&P(M)}function Z(M){n.enableZoom&&de(M),n.enableRotate&&le(M)}function O(M){if(C.length==1)d.set(M.pageX,M.pageY);else{const $=st(M),pe=.5*(M.pageX+$.x),ge=.5*(M.pageY+$.y);d.set(pe,ge)}m.subVectors(d,u).multiplyScalar(n.rotateSpeed);const X=n.domElement;G(2*Math.PI*m.x/X.clientHeight),F(2*Math.PI*m.y/X.clientHeight),u.copy(d)}function q(M){if(C.length===1)x.set(M.pageX,M.pageY);else{const X=st(M),$=.5*(M.pageX+X.x),pe=.5*(M.pageY+X.y);x.set($,pe)}p.subVectors(x,g).multiplyScalar(n.panSpeed),oe(p.x,p.y),g.copy(x)}function K(M){const X=st(M),$=M.pageX-X.x,pe=M.pageY-X.y,ge=Math.sqrt($*$+pe*pe);E.set(0,ge),v.set(0,Math.pow(E.y/f.y,n.zoomSpeed)),se(v.y),f.copy(E);const ze=(M.pageX+X.x)*.5,Xe=(M.pageY+X.y)*.5;fe(ze,Xe)}function ae(M){n.enableZoom&&K(M),n.enablePan&&q(M)}function z(M){n.enableZoom&&K(M),n.enableRotate&&O(M)}function _(M){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",y),n.domElement.addEventListener("pointerup",V)),!Oe(M)&&(Ae(M),M.pointerType==="touch"?me(M):re(M)))}function y(M){n.enabled!==!1&&(M.pointerType==="touch"?Ee(M):ue(M))}function V(M){switch(Se(M),C.length){case 0:n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",V),n.dispatchEvent(Jh),r=i.NONE;break;case 1:const X=C[0],$=B[X];me({pointerId:X,pageX:$.x,pageY:$.y});break}}function re(M){let X;switch(M.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Dn.DOLLY:if(n.enableZoom===!1)return;Ce(M),r=i.DOLLY;break;case Dn.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;je(M),r=i.PAN}else{if(n.enableRotate===!1)return;ve(M),r=i.ROTATE}break;case Dn.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;ve(M),r=i.ROTATE}else{if(n.enablePan===!1)return;je(M),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Fa)}function ue(M){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;D(M);break;case i.DOLLY:if(n.enableZoom===!1)return;I(M);break;case i.PAN:if(n.enablePan===!1)return;A(M);break}}function ce(M){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(M.preventDefault(),n.dispatchEvent(Fa),b(Te(M)),n.dispatchEvent(Jh))}function Te(M){const X=M.deltaMode,$={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(X){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return M.ctrlKey&&!w&&($.deltaY*=10),$}function _e(M){M.key==="Control"&&(w=!0,n.domElement.getRootNode().addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(M){M.key==="Control"&&(w=!1,n.domElement.getRootNode().removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function Pe(M){n.enabled===!1||n.enablePan===!1||ee(M)}function me(M){switch(We(M),C.length){case 1:switch(n.touches.ONE){case Jn.ROTATE:if(n.enableRotate===!1)return;le(M),r=i.TOUCH_ROTATE;break;case Jn.PAN:if(n.enablePan===!1)return;P(M),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Jn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(M),r=i.TOUCH_DOLLY_PAN;break;case Jn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Z(M),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Fa)}function Ee(M){switch(We(M),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;O(M),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;q(M),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ae(M),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;z(M),n.update();break;default:r=i.NONE}}function Fe(M){n.enabled!==!1&&M.preventDefault()}function Ae(M){C.push(M.pointerId)}function Se(M){delete B[M.pointerId];for(let X=0;X<C.length;X++)if(C[X]==M.pointerId){C.splice(X,1);return}}function Oe(M){for(let X=0;X<C.length;X++)if(C[X]==M.pointerId)return!0;return!1}function We(M){let X=B[M.pointerId];X===void 0&&(X=new ie,B[M.pointerId]=X),X.set(M.pageX,M.pageY)}function st(M){const X=M.pointerId===C[0]?C[1]:C[0];return B[X]}n.domElement.addEventListener("contextmenu",Fe),n.domElement.addEventListener("pointerdown",_),n.domElement.addEventListener("pointercancel",V),n.domElement.addEventListener("wheel",ce,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",_e,{passive:!0,capture:!0}),this.update()}}class Vv extends Md{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Dn.PAN,MIDDLE:Dn.DOLLY,RIGHT:Dn.ROTATE},this.touches={ONE:Jn.PAN,TWO:Jn.DOLLY_ROTATE}}}class Ms{static createButton(e,t={}){const n=document.createElement("button");function i(){let l=null;async function h(m){m.addEventListener("end",u),await e.xr.setSession(m),n.textContent="EXIT VR",l=m}function u(){l.removeEventListener("end",u),n.textContent="ENTER VR",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const d={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",d).then(h):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(h).catch(m=>{console.warn(m)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(h).catch(m=>{console.warn(m)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){r(),n.textContent="VR NOT SUPPORTED"}function a(l){r(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="VR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?i():o(),l&&Ms.xrSessionIsGranted&&n.click()}).catch(a),n;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Ms.xrSessionIsGranted=!0})}}}Ms.xrSessionIsGranted=!1;Ms.registerSessionGrantedListener();function eu(s,e){if(e===Hf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===$a||e===ku){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===$a)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Sd extends Pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new ay(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=er.extractUrlBase(e);o=er.resolveURL(l,this.path)}else o=er.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Fc(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Td){try{o[qe.KHR_BINARY_GLTF]=new cy(e)}catch(u){i&&i(u);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new My(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:o[u]=new Xv;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new ly(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[u]=new hy;break;case qe.KHR_MESH_QUANTIZATION:o[u]=new uy;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Gv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Wv{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Le(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Rt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ho(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Av(h),l.distance=u;break;case"spot":l=new bv(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ei(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Xv{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return yt}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Rt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(i)}}class Yv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class qv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,a)}return Promise.all(r)}}class jv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Kv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Zv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Rt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,wt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class $v{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Jv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],Rt),Promise.all(r)}}class Qv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ey{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],Rt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,wt)),Promise.all(r)}}class ty{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class ny{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class iy{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class sy{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ry{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class oy{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(m),h,u,d,i.mode,i.filter),m})})}else return null}}class ay{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==tn.TRIANGLES&&l.mode!==tn.TRIANGLE_STRIP&&l.mode!==tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,m=[];for(const g of u){const x=new De,p=new N,f=new Ct,E=new N(1,1,1),v=new Go(g.geometry,g.material,d);for(let T=0;T<d;T++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,T),c.SCALE&&E.fromBufferAttribute(c.SCALE,T),v.setMatrixAt(T,x.compose(p,f,E));for(const T in c)if(T==="_COLOR_0"){const U=c[T];v.instanceColor=new ec(U.array,U.itemSize,U.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,c[T]);Ie.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),m.push(v)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const Td="glTF",Vs=12,tu={JSON:1313821514,BIN:5130562};class cy{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Td)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Vs,r=new DataView(e,Vs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===tu.JSON){const l=new Uint8Array(e,Vs+o,a);this.content=n.decode(l)}else if(c===tu.BIN){const l=Vs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ly{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=oc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=oc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],m=hs[d.componentType];l[u]=m.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(m){for(const g in m.attributes){const x=m.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}u(m)},a,l,Rt,d)})})}}class hy{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class uy{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Ed extends pr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,m=d*u,g=e*l,x=g-l,p=-2*m+3*d,f=m-d,E=1-p,v=f-d+u;for(let T=0;T!==a;T++){const U=o[x+T+a],L=o[x+T+c]*h,C=o[g+T+a],B=o[g+T]*h;r[T]=E*U+v*L+p*C+f*B}return r}}const dy=new Ct;class fy extends Ed{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return dy.fromArray(r).normalize().toArray(r),r}}const tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nu={9728:Ot,9729:$t,9984:Pu,9985:co,9986:Ys,9987:Fn},iu={33071:ni,33648:_o,10497:li},Ba={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},py={CUBICSPLINE:void 0,LINEAR:ps,STEP:rr},ka={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function my(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new it({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),s.DefaultMaterial}function yi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ei(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gy(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function _y(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xy(s){let e;const t=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+za(t.attributes):e=s.indices+":"+za(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+za(s.targets[n]);return e}function za(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ac(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const yy=new De;class My{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Gv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Bc(this.options.manager):this.textureLoader=new Cv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return yi(r,a,i),ei(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(er.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ba[i.type],a=hs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new pt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ba[i.type],l=hs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,p;if(m&&m!==u){const f=Math.floor(d/m),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let v=t.cache.get(E);v||(x=new l(a,f*m,i.count*m/h),v=new rd(x,m/h),t.cache.add(E,v)),p=new ar(v,c,d%m/h,g)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),p=new pt(x,c,g);if(i.sparse!==void 0){const f=Ba.SCALAR,E=hs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,U=new E(o[1],v,i.sparse.count*f),L=new l(o[2],T,i.sparse.count*c);a!==null&&(p=new pt(p.array.slice(),p.itemSize,p.normalized));for(let C=0,B=U.length;C<B;C++){const w=U[C];if(p.setX(w,L[C*c]),c>=2&&p.setY(w,L[C*c+1]),c>=3&&p.setZ(w,L[C*c+2]),c>=4&&p.setW(w,L[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=nu[d.magFilter]||$t,h.minFilter=nu[d.minFilter]||Fn,h.wrapS=iu[d.wrapS]||li,h.wrapT=iu[d.wrapT]||li,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const p=new Mt(x);p.needsUpdate=!0,d(p)}),t.load(er.resolveURL(u,r.path),g,void 0,m)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||vy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ud,sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new _s,sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return it}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){const u=i[qe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Rt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Zt);const h=r.alphaMode||ka.OPAQUE;if(h===ka.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ka.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==yt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yt){const u=r.emissiveFactor;a.emissive=new Le().setRGB(u[0],u[1],u[2],Rt)}return r.emissiveTexture!==void 0&&o!==yt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,wt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ei(u,r),t.associations.set(u,{materials:e}),r.extensions&&yi(i,u,r),u})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return su(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=xy(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=su(new at,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?my(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,g=h.length;m<g;m++){const x=h[m],p=o[m];let f;const E=l[m];if(p.mode===tn.TRIANGLES||p.mode===tn.TRIANGLE_STRIP||p.mode===tn.TRIANGLE_FAN||p.mode===void 0)f=r.isSkinnedMesh===!0?new wx(x,E):new Re(x,E),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===tn.TRIANGLE_STRIP?f.geometry=eu(f.geometry,ku):p.mode===tn.TRIANGLE_FAN&&(f.geometry=eu(f.geometry,$a));else if(p.mode===tn.LINES)f=new hd(x,E);else if(p.mode===tn.LINE_STRIP)f=new xs(x,E);else if(p.mode===tn.LINE_LOOP)f=new Cx(x,E);else if(p.mode===tn.POINTS)f=new Px(x,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&_y(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),ei(f,r),p.extensions&&yi(i,f,p),t.assignFinalMaterial(f),u.push(f)}for(let m=0,g=u.length;m<g;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return r.extensions&&yi(i,u[0],r),u[0];const d=new zt;r.extensions&&yi(i,d,r),t.associations.set(d,{meshes:e});for(let m=0,g=u.length;m<g;m++)d.add(u[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(Hu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ho(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new De;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ic(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const m=i.channels[u],g=i.samplers[m.sampler],x=m.target,p=x.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,E=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",E)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],m=u[1],g=u[2],x=u[3],p=u[4],f=[];for(let E=0,v=d.length;E<v;E++){const T=d[E],U=m[E],L=g[E],C=x[E],B=p[E];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const w=n._createAnimationTracks(T,U,L,C,B);if(w)for(let S=0;S<w.length;S++)f.push(w[S])}return new gv(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,yy)});for(let m=0,g=u.length;m<g;m++)h.add(u[m]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new cd:l.length>1?h=new zt:l.length===1?h=l[0]:h=new Ie,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ei(h,r),r.extensions&&yi(n,h,r),r.matrix!==void 0){const u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new zt;n.name&&(r.name=i.createUniqueName(n.name)),ei(r,n),n.extensions&&yi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,m]of i.associations)(d instanceof sn||d instanceof Mt)&&u.set(d,m);return h.traverse(d=>{const m=i.associations.get(d);m!=null&&u.set(d,m)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];$n[r.path]===$n.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch($n[r.path]){case $n.weights:l=vs;break;case $n.rotation:l=Ai;break;case $n.position:case $n.scale:l=ys;break;default:switch(n.itemSize){case 1:l=vs;break;case 2:case 3:default:l=ys;break}break}const h=i.interpolation!==void 0?py[i.interpolation]:ps,u=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){const g=new l(c[d]+"."+$n[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ac(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ai?fy:Ed;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Sy(s,e,t){const n=e.attributes,i=new Hn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){const h=ac(hs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new N,c=new N;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const x=ac(hs[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new xn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function su(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=oc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==Rt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),ei(s,e),Sy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?gy(s,e.targets,t):s})}const mt={Handedness:Object.freeze({NONE:"none",LEFT:"left",RIGHT:"right"}),ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function bd(s){const e=await fetch(s);if(e.ok)return e.json();throw new Error(e.statusText)}async function Ty(s){if(!s)throw new Error("No basePath supplied");return await bd(`${s}/profilesList.json`)}async function Ey(s,e,t=null,n=!0){if(!s)throw new Error("No xrInputSource supplied");if(!e)throw new Error("No basePath supplied");const i=await Ty(e);let r;if(s.profiles.some(c=>{const l=i[c];return l&&(r={profileId:c,profilePath:`${e}/${l.path}`,deprecated:!!l.deprecated}),!!r}),!r){if(!t)throw new Error("No matching profile name found");const c=i[t];if(!c)throw new Error(`No matching profile name found and default profile "${t}" missing.`);r={profileId:t,profilePath:`${e}/${c.path}`,deprecated:!!c.deprecated}}const o=await bd(r.profilePath);let a;if(n){let c;if(s.handedness==="any"?c=o.layouts[Object.keys(o.layouts)[0]]:c=o.layouts[s.handedness],!c)throw new Error(`No matching handedness, ${s.handedness}, in profile ${r.profileId}`);c.assetPath&&(a=r.profilePath.replace("profile.json",c.assetPath))}return{profile:o,assetPath:a}}const by={xAxis:0,yAxis:0,button:0,state:mt.ComponentState.DEFAULT};function wy(s=0,e=0){let t=s,n=e;if(Math.sqrt(s*s+e*e)>1){const o=Math.atan2(e,s);t=Math.cos(o),n=Math.sin(o)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:n*.5+.5}}class Ay{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===mt.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(by)}updateFromComponent({xAxis:e,yAxis:t,button:n,state:i}){const{normalizedXAxis:r,normalizedYAxis:o}=wy(e,t);switch(this.componentProperty){case mt.ComponentProperty.X_AXIS:this.value=this.states.includes(i)?r:.5;break;case mt.ComponentProperty.Y_AXIS:this.value=this.states.includes(i)?o:.5;break;case mt.ComponentProperty.BUTTON:this.value=this.states.includes(i)?n:0;break;case mt.ComponentProperty.STATE:this.valueNodeProperty===mt.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(i):this.value=this.states.includes(i)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class Ry{constructor(e,t){if(!e||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(n=>{const i=new Ay(t.visualResponses[n]);this.visualResponses[n]=i}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:mt.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=mt.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=mt.ComponentState.PRESSED:(t.touched||this.values.button>mt.ButtonTouchThreshold)&&(this.values.state=mt.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===mt.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>mt.AxisTouchThreshold&&(this.values.state=mt.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===mt.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>mt.AxisTouchThreshold&&(this.values.state=mt.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class Cy{constructor(e,t,n){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=n,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(i=>{const r=this.layoutDescription.components[i];this.components[i]=new Ry(i,r)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}}const Py="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",Ly="generic-trigger";class Iy extends Ie{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e?this:(this.envMap=e,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(n=>{const{valueNode:i,minNode:r,maxNode:o,value:a,valueNodeProperty:c}=n;i&&(c===mt.VisualResponseProperty.VISIBILITY?i.visible=a:c===mt.VisualResponseProperty.TRANSFORM&&(i.quaternion.slerpQuaternions(r.quaternion,o.quaternion,a),i.position.lerpVectors(r.position,o.position,a)))})}))}}function Ny(s,e){Object.values(s.components).forEach(t=>{const{type:n,touchPointNodeName:i,visualResponses:r}=t;if(n===mt.ComponentType.TOUCHPAD)if(t.touchPointNode=e.getObjectByName(i),t.touchPointNode){const o=new bs(.001),a=new yt({color:255}),c=new Re(o,a);t.touchPointNode.add(c)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(r).forEach(o=>{const{valueNodeName:a,minNodeName:c,maxNodeName:l,valueNodeProperty:h}=o;if(h===mt.VisualResponseProperty.TRANSFORM){if(o.minNode=e.getObjectByName(c),o.maxNode=e.getObjectByName(l),!o.minNode){console.warn(`Could not find ${c} in the model`);return}if(!o.maxNode){console.warn(`Could not find ${l} in the model`);return}}o.valueNode=e.getObjectByName(a),o.valueNode||console.warn(`Could not find ${a} in the model`)})})}function ru(s,e){Ny(s.motionController,e),s.envMap&&e.traverse(t=>{t.isMesh&&(t.material.envMap=s.envMap,t.material.needsUpdate=!0)}),s.add(e)}class Dy{constructor(e=null,t=null){this.gltfLoader=e,this.path=Py,this._assetCache={},this.onLoad=t,this.gltfLoader||(this.gltfLoader=new Sd)}setPath(e){return this.path=e,this}createControllerModel(e){const t=new Iy;let n=null;return e.addEventListener("connected",i=>{const r=i.data;r.targetRayMode!=="tracked-pointer"||!r.gamepad||Ey(r,this.path,Ly).then(({profile:o,assetPath:a})=>{t.motionController=new Cy(r,o,a);const c=this._assetCache[t.motionController.assetUrl];if(c)n=c.scene.clone(),ru(t,n),this.onLoad&&this.onLoad(n);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,l=>{this._assetCache[t.motionController.assetUrl]=l,n=l.scene.clone(),ru(t,n),this.onLoad&&this.onLoad(n)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(o=>{console.warn(o)})}),e.addEventListener("disconnected",()=>{t.motionController=null,t.remove(n),n=null}),t}}const ou=new De,au=new N;class cu{constructor(e,t,n,i,r){this.controller=t,this.handModel=e,this.envMap=null;let o;!r||!r.primitive||r.primitive==="sphere"?o=new bs(1,10,10):r.primitive==="box"&&(o=new Yt(1,1,1));const a=new it;this.handMesh=new Go(o,a,30),this.handMesh.frustumCulled=!1,this.handMesh.instanceMatrix.setUsage(Jf),this.handMesh.castShadow=!0,this.handMesh.receiveShadow=!0,this.handModel.add(this.handMesh),this.joints=["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"]}updateMesh(){const t=this.controller.joints;let n=0;for(let i=0;i<this.joints.length;i++){const r=t[this.joints[i]];r.visible&&(au.setScalar(r.jointRadius||.008),ou.compose(r.position,r.quaternion,au),this.handMesh.setMatrixAt(i,ou),n++)}this.handMesh.count=n,this.handMesh.instanceMatrix.needsUpdate=!0}}const Uy="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/";class Oy{constructor(e,t,n,i,r=null,o=null){this.controller=t,this.handModel=e,this.bones=[],r===null&&(r=new Sd,r.setPath(n||Uy)),r.load(`${i}.glb`,a=>{const c=a.scene.children[0];this.handModel.add(c);const l=c.getObjectByProperty("type","SkinnedMesh");l.frustumCulled=!1,l.castShadow=!0,l.receiveShadow=!0,["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"].forEach(u=>{const d=c.getObjectByName(u);d!==void 0?d.jointName=u:console.warn(`Couldn't find ${u} in ${i} hand mesh`),this.bones.push(d)}),o&&o(c)})}updateMesh(){const e=this.controller.joints;for(let t=0;t<this.bones.length;t++){const n=this.bones[t];if(n){const i=e[n.jointName];if(i.visible){const r=i.position;n.position.copy(r),n.quaternion.copy(i.quaternion)}}}}}class Fy extends Ie{constructor(e){super(),this.controller=e,this.motionController=null,this.envMap=null,this.mesh=null}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&this.motionController.updateMesh()}}class By{constructor(e=null,t=null){this.gltfLoader=e,this.path=null,this.onLoad=t}setPath(e){return this.path=e,this}createHandModel(e,t){const n=new Fy(e);return e.addEventListener("connected",i=>{const r=i.data;r.hand&&!n.motionController&&(n.xrInputSource=r,t===void 0||t==="spheres"?n.motionController=new cu(n,e,this.path,r.handedness,{primitive:"sphere"}):t==="boxes"?n.motionController=new cu(n,e,this.path,r.handedness,{primitive:"box"}):t==="mesh"&&(n.motionController=new Oy(n,e,this.path,r.handedness,this.gltfLoader,this.onLoad))),e.visible=!0}),e.addEventListener("disconnected",()=>{e.visible=!1}),n}}class ky extends Ie{constructor(e,t,n,i){super();var r=new _s({color:i});const o=new at,a=(e+1+t+1)*6,c=new Float32Array(a);{let h=0;for(let u=0;u<=e;u++)c[h++]=u-e/2,c[h++]=0,c[h++]=t/2,c[h++]=u-e/2,c[h++]=0,c[h++]=-t/2;for(let u=0;u<=t;u++)c[h++]=-e/2,c[h++]=0,c[h++]=u-t/2,c[h++]=e/2,c[h++]=0,c[h++]=u-t/2;console.log(`bufSize: ${a} ${h}`)}o.setAttribute("position",new pt(c,3));var l=new hd(o,r);this.add(l)}}const cc={};window.addEventListener("beforeunload",Hy);function Ri(s,e){cc.hasOwnProperty(s)&&console.error(`Duplicate id used in save list (${s})`),cc[s]=e;const t=window.localStorage.getItem(s);return t?JSON.parse(t):null}var wd=!1;function zy(s){wd=s}function Hy(){if(!wd)for(let[s,e]of Object.entries(cc)){const t=JSON.stringify(e());window.localStorage.setItem(s,t)}}const dn=3,Gc=4,lu=13421772,Vy=7829367,nr=class nr extends Ie{constructor(e,t,n,i){super();const r=new Re(new Yt(e,t,n).translate(e/2,t/2,n/2),i||nr.material);r.layers.enable(dn),this.add(r)}static set view2D(e){this._view2D!==e&&(this._view2D=e,this.material.color.set(e?Vy:lu))}static get view2D(){return this._view2D}};nr._view2D=!1,nr.material=new it({color:lu});let Un=nr;class Wc extends Ie{constructor(e,t){super(),this._portalWidth=e,this._portalHeight=t}get width(){return this._portalWidth}get height(){return this._portalHeight}get shapePoints(){return[[0,0],[this.width,0],[this.width,this.height],[0,this.height]]}}const hu=13421772,Gy=.2,is=class is extends Ie{static set view2D(e){this._view2D!==e&&(this._view2D=e,this.material.color.set(e?0:hu))}static get view2D(){return this._view2D}constructor(e,t,n){super();const i=(n==null?void 0:n.thickness)||Gy,r=n==null?void 0:n.openings,o=n==null?void 0:n.material;if(r!=null&&r.length){const a=new ht().moveTo(0,0).lineTo(e,0).lineTo(e,t).lineTo(0,t).closePath();if(r!=null&&r.length){const h=r.map(u=>new ht(u.portal.shapePoints.map(d=>new ie(u.x+d[0],u.y+d[1]))));a.holes=h}const c=new Vt(a,{depth:i,bevelEnabled:!1}).translate(0,0,-i/2),l=new Re(c,o||is.material);if(l.layers.enable(dn),this.add(l),r!=null&&r.length)for(const h of r)h.portal instanceof Wc&&(h.portal.translateX(h.x).translateY(h.y),this.add(h.portal))}else{const a=new Re(new Yt(e,t,i).translate(e/2,t/2,0),o||is.material);a.layers.enable(dn),this.add(a)}}};is._view2D=!1,is.material=new it({color:hu});let Ht=is;const Li=Math.PI/2,_n=-Li,lc=1,Wy=13421772,Xy=1,Yy=new yn(.02,.02,lc).translate(0,lc/2,0),qy=new yn(.002,.002,1).translate(0,.5,0).rotateZ(_n),ss=class ss extends Ie{constructor(e,t=lc){super();for(let n=0;n<2;n++){const i=new Re(qy,ss.wireMaterial);i.scale.x=e,i.position.set(0,t*(n+1)*.49,0),this.add(i)}{const n=Math.round(e/Xy);for(let i=0;i<=n;i++){const r=new Re(Yy,ss.material);r.position.x=i*e/n,this.add(r)}}}};ss.material=new it({color:Wy}),ss.wireMaterial=new yt({color:8947848});let Eo=ss;const uu=13421772,jy=.2,ir=class ir extends Re{static set view2D(e){this._view2D!==e&&(this._view2D=e,this.material.color.set(e?0:uu))}static get view2D(){return this._view2D}constructor(e,t){const n=(t==null?void 0:t.thickness)||jy,i=(t==null?void 0:t.material)||ir.material;super(new Yt(n,e,n).translate(0,e/2,0),i)}};ir._view2D=!1,ir.material=new it({color:uu});let Gt=ir;const Ky=new yt({transparent:!0,color:16777215,opacity:.4,side:Zt}),Zy=3359795,Po=class Po extends Wc{constructor(e=.6,t=.6,n=.06){super(e,t);const i=new ht().moveTo(0,0).lineTo(e,0).lineTo(e,t).lineTo(0,t).closePath(),r=new ci().moveTo(n,n).lineTo(e-n,n).lineTo(e-n,t-n).lineTo(n,t-n).closePath();i.holes=[r];const o=new Vt(i,{depth:n,bevelEnabled:!1}).translate(0,0,-n/2);this._mesh=new Re(o,Po.material),this.add(this._mesh);const a=new fr(e-2*n,t-2*n).translate(e/2,t/2,0),c=new Re(a,Ky);this.add(c)}};Po.material=new it({color:Zy});let Ei=Po;class $y extends Ei{constructor(){super(.6,.6)}}class Ha extends Ei{constructor(){super(1.2,1.2)}}const qc=class qc{static tick(e){let t=0;const n=this.updateList.length;for(let i=0;i<n;i++){const r=this.updateList[i];r(e)&&(t<i&&(this.updateList[t]=this.updateList[i]),t++)}t<n&&(console.log(`Removed ${n-t} tickers, ${t} left in list`),this.updateList.length=t)}static add(e){this.remove(e),this.updateList.push(e)}static remove(e){const t=this.updateList.indexOf(e);t>=0&&this.updateList.splice(t,1)}};qc.updateList=[];let Ss=qc;const Jy=6178590,Qy=3355443,eM=new Ct().setFromEuler(new Xt(0,Math.PI/2,0)),tM=new Ct().setFromEuler(new Xt(0,-Math.PI/2,0)),nM=new Ct,du=new Ct().setFromEuler(new Xt(0,Math.PI,0)),rs=class rs extends Wc{constructor(e){const t=Object.assign({w:1,h:2.2,thickness:.1,frameThickness:.1},e);super(t.w,t.h),this._open=!1,this._openF=0,this._options=t;const{w:n,h:i,thickness:r,frameThickness:o}=t,a=n-o*2,c=i-o,l=new Yt(a,c,r).translate(n/2,c/2,0),h=new ht().moveTo(0,0).lineTo(o,0).lineTo(o,c).lineTo(n-o,c).lineTo(n-o,0).lineTo(n,0).lineTo(n,i).lineTo(0,i).closePath(),u=new Vt(h,{depth:r,bevelEnabled:!1}).translate(0,0,-r/2),d=new Re(u,rs.frameMaterial);this.add(d),this._mesh=new Re(l,rs.material),t.hinge==="right"&&(this._mesh.position.x+=n,this._mesh.quaternion.copy(du)),this._mesh.layers.enable(Gc),this.add(this._mesh)}onInteraction(){this.openDoor(!this._open,!0)}openDoor(e,t=!1){if(this._open!==e){this._open=e;const n=this._options.action==="pull"?tM:eM,i=this._options.hinge==="right"?du:nM,r=this._open?n:i;if(t){const o=this._open?i:n;let a=0;Ss.add(c=>(a=Math.min(1,a+c),this._mesh.quaternion.copy(o),this._mesh.quaternion.slerp(r,a),a<1))}else this._mesh.quaternion.copy(r)}}};rs.material=new it({color:Jy}),rs.frameMaterial=new it({color:Qy});let ur=rs;class Ad extends ur{constructor(e){super(Object.assign({w:1,h:2.2},e))}}class $r extends ur{constructor(e){super(Object.assign({w:.8,h:2.2},e))}}const fu=1,pu=.1;class iM extends ur{openDoor(e,t){if(this._open!==e){this._open=e;const n=this._open?fu:pu,i=this._open?this.height*.86:0,r=this._open?0:this.height*.86,o=this._open?pu:fu;let a=0;Ss.add(c=>(a=Math.min(1,a+c),this._mesh.scale.set(1,a*o+(1-a)*n,1),this._mesh.position.setY(a*i+(1-a)*r),a<1))}}}const sM=13421772,Lo=class Lo extends Re{constructor(e,t,n){super();const i=new Yt(e,n,t).translate(e/2,-n/2,t/2);this.geometry=i,this.material=Lo._material,this.layers.enable(dn)}};Lo._material=new it({color:sM});let gn=Lo;const rM=13421772,Io=class Io extends Re{constructor(e,t,n){super();const i=new ht;i.moveTo(e[0][0],e[0][1]);for(const o of e)i.lineTo(o[0],o[1]);const r=new Vt(i,{depth:t,bevelEnabled:!1}).rotateX(Math.PI/2);this.geometry=r,this.material=n||Io._material,this.layers.enable(dn)}};Io._material=new it({color:rM});let tr=Io;const oM=13421772,No=class No extends Re{constructor(e){super();const t=new at,n=new Float32Array(e.flat()),i=[1,0,3,2,1,3];t.setIndex(i),t.setAttribute("position",new pt(n,3)),this.geometry=t,this.material=No._material,this.layers.enable(dn)}};No._material=new yt({color:oM});let hc=No;const aM=13421772,Do=class Do extends Ie{constructor(e){super(),this.name=e.name||"";const t=e.length/(e.steps-1),n=e.height/e.steps;this._run=t,this._rise=n,this.printStats();const i=new ht().moveTo(0,0);for(let a=0;a<e.steps;a++)i.lineTo(a*t,(a+1)*n),a<e.steps-1&&i.lineTo((a+1)*t,(a+1)*n);i.lineTo(e.length,e.height-n*2).lineTo(t,0).closePath();const r=new Vt(i,{depth:e.width,bevelEnabled:!1}),o=new Re(r,Do.material);o.layers.enable(dn),this.add(o)}get run(){return this._run}get rise(){return this._rise}printStats(){const h=this.run*100,u=this.rise*100;console.log(`${this.name}:
      run = ${h.toFixed(1)} (min ${25.4.toFixed(1)})
      rise = ${u.toFixed(1)} (max ${19.685.toFixed(1)})
      rise + run = ${(u+h).toFixed(1)} (ideal = ${45.72.toFixed(1)})
      2*rise + run = ${(u*2+h).toFixed(1)} (ideal = ${63.5.toFixed(1)})`)}};Do.material=new it({color:aM});let uc=Do;const cM=new yt({color:16711935});var Jr=null,uo=null;function Rd(s){uo!==s&&(Jr&&(uo.material=Jr,Jr=null),uo=s,s instanceof Re&&(Jr=s.material,s.material=cM))}function Xc(){return uo}function Cd(s){if(s){let e=Xc();for(let t=0;t<10;t++){if(e.onInteraction){e.onInteraction();break}if(e=(e==null?void 0:e.parent)||null,!e)break}}}const lM=new at().setFromPoints([new N(0,0,0),new N(0,0,-1)]);var dc=(s=>(s[s.None=0]="None",s[s.Interact=1]="Interact",s[s.Teleport=2]="Teleport",s))(dc||{});const Va=20,mu=new _s({color:16711680,blending:qa}),Gs=new Ct,hM=new N,uM=new N,dM=new N,Qr=new N,Ga=new N,gu=new N,Pd=5,fo=new Vc;fo.layers.set(dn);const bo=new Vc;bo.layers.set(Gc);bo.far=Pd;const fM=new N(0,1,0);class pM extends Ie{constructor(){super(),this.lineGeometry=new at,this.lineGeometryVertices=new Float32Array((Va+1)*3),this._rayMode=1,this._interactionLine=new xs(lM),this._interactionLine.name="line",this._interactionLine.scale.z=Pd,this.add(this._interactionLine),this.lineGeometryVertices.fill(0),this.lineGeometryVertices[this.lineGeometryVertices.length-1]=-10,this.lineGeometry.setAttribute("position",new pt(this.lineGeometryVertices,3)),this.guideLine=new xs(this.lineGeometry,mu),this.guideLine.name="GUIDELINE",this.add(this.guideLine),this.teleportMarker=new Re(new bs(.2),new yt({color:255})),this.add(this.teleportMarker),this._updateMode()}setMode(e){e!==this._rayMode&&(this._rayMode=e,this._updateMode())}_updateMode(){this._interactionLine.visible=this._rayMode===1,this.guideLine.visible=this._rayMode===2,this._rayMode!==2&&(this.teleportMarker.visible=!1)}update(e,t){var r;const n=this.parent;if(!n||this._rayMode===0)return;const i=this.getWorldDirection(uM).multiplyScalar(-1);if(this._rayMode===1){Qr.copy(this._interactionLine.position),bo.set(this._interactionLine.localToWorld(Qr),i);const o=bo.intersectObjects(e.children),a=o.length?o[0].object:null;Rd(a)}else if(this._rayMode===2){n.getWorldQuaternion(Gs),Gs.invert(),this.guideLine.quaternion.copy(Gs);const o=hM.set(0,0,0),a=dM.set(0,0,0);let c=-1;for(let l=1;l<=Va;l++){fo.far=i.length(),Qr.copy(a),Ga.copy(i),this.guideLine.getWorldQuaternion(Gs),Ga.applyQuaternion(Gs),fo.set(this.guideLine.localToWorld(Qr),Ga);const h=fo.intersectObjects(e.children);for(let u of h){const d=(r=u.face)==null?void 0:r.normal;if(d&&d.dot(fM)>.5){gu.copy(u.point),this.teleportMarker.position.copy(this.worldToLocal(gu)),c=u.distance,t.copy(u.point);break}}if(c>0){for(i.multiplyScalar(c/i.length()),o.add(i);l<=Va;)o.toArray(this.lineGeometryVertices,l*3),l++;break}o.add(i),o.toArray(this.lineGeometryVertices,l*3),i.y-=.1,a.copy(o)}return mu.color.set(c>0?255:16711680),this.teleportMarker.visible=c>0,this.guideLine.geometry.attributes.position.needsUpdate=!0,c>0}return!1}}const _u=8.5,fc=new N(3.5,0,2.5),Je=[new N(fc.x,_u,fc.z),new N(13.3458,_u,.7416),new N(13.1243,-1,27.5207),new N(3.5107,0,41.4077)];Je.forEach(s=>{s.sub(fc)});const pc=1,mM=11184810,gM=2,_M=new yn(.02,.02,pc).translate(0,pc/2,0),xM=new yn(.02,.02,1).translate(0,.5,0).rotateZ(_n),Uo=class Uo extends Ie{constructor(e,t){super();const n=(t==null?void 0:t.height)||pc,i=(t==null?void 0:t.material)||Uo.material,r=new Re(xM,i);r.scale.x=e,r.position.set(0,n-.1,0),this.add(r);{const o=Math.round(e/gM);for(let a=0;a<=o;a++){const c=new Re(_M,i);c.position.x=a*e/o,this.add(c)}}}};Uo.material=new it({color:mM});let mc=Uo;class Yo extends Ie{constructor(e,t){super();const n=(t==null?void 0:t.material)||Ht.material;this._container=new Ie,this.add(this._container);let i=0;e.forEach(r=>{const o=new Ht(r.width,r.height,{thickness:.2,material:n});switch(this._container.add(o.translateX(i)),r.fence||(t==null?void 0:t.fence)){case"barb-wire":this._container.add(new Eo(r.width).translateY(r.height).translateX(i));break;case"fence":this._container.add(new mc(r.width,{material:t==null?void 0:t.fenceMaterial}).translateY(r.height).translateX(i));break}i+=r.width})}}const Ld=new it({color:"#aaaaaa"}),Id=new it({color:4482781});class vM extends zt{constructor(){super();const e=new yM().translateX(.1).translateZ(.2);this.add(e);const t=new MM().translateX(-1).translateZ(.2);this.add(t);const n=-.00827,i=new SM;i.translateX(Je[1].x-.1).translateZ(Je[1].z).translateY(-1).rotateY(n),this.add(i);const r=new TM;r.translateX(Je[1].x+.1).translateZ(Je[1].z).translateY(-1).rotateY(n),this.add(r)}}class yM extends Yo{constructor(){super([{width:2.96,height:Je[0].y+1.8,fence:"barb-wire"},{width:5,height:9.3},{width:4,height:6.8},{width:4,height:5.8},{width:4,height:4.8},{width:5.5,height:3.8},{width:3.5,height:2.8},{width:4,height:2.3},{width:4,height:1.8}],{fence:"fence"}),this.name="Left firewall",this._container.rotateY(_n)}}class MM extends Yo{constructor(){super([{width:3.96,height:9.3},{width:7,height:9.3},{width:6,height:8.4},{width:8.5,height:7.5}],{material:Ld,fence:"fence",fenceMaterial:new it({color:3372851})}),this.name="Left firewall NB",this._container.rotateY(_n)}}class SM extends Yo{constructor(){super([{width:3.07,height:9.4,fence:"barb-wire"},{width:2.9,height:8.7,fence:"barb-wire"},{width:2.65,height:7.8},{width:5.2,height:7.8,fence:"fence"},{width:3.35,height:6},{width:3,height:5.1},{width:3,height:4.2},{width:2,height:3.3}],{fenceMaterial:Id}),this.name="Right firewall",this._container.rotateY(_n)}}class TM extends Yo{constructor(){super([{width:3.07,height:9.4,fence:"barb-wire"},{width:2.9,height:8.7,fence:"barb-wire"},{width:2.65,height:7.8},{width:5.2,height:6.9},{width:3.35,height:6},{width:3,height:5.1},{width:3,height:4.2},{width:2,height:3.3}],{material:Ld,fence:"fence",fenceMaterial:Id}),this.name="Right firewall NB",this._container.rotateY(_n)}}const Nd=document.getElementById("divOverlay");function po(s,e,t){return Dd(e,()=>s.visible,n=>s.visible=n,t),s}function Dd(s,e,t,n){n&&t(Ri(`show_${n}`,()=>e()?"true":"false")!=="false");const i=document.createElement("div");i.className="ui-option";const r=document.createElement("input");r.type="checkbox",r.checked=e(),r.onchange=()=>{t(r.checked),r.blur()},i.appendChild(r);const o=document.createTextNode(s);i.appendChild(o),Nd.appendChild(i)}function Ud(s,e,t,n,i){i&&t(Ri(i,()=>e()));const r=document.createElement("div"),o=document.createTextNode(s);r.appendChild(o),r.className="ui-option";const a=document.createElement("select");for(const c of n){const l=document.createElement("option");l.value=c.id,l.appendChild(document.createTextNode(c.label)),a.appendChild(l)}a.value=e(),a.onchange=()=>{t(a.value),a.blur()},r.appendChild(a),Nd.appendChild(r)}const gc=1.2,EM=13421772,bM=15198183,wM=1,AM=new Yt(.1,gc,.1).translate(0,gc/2,0),RM=new Yt(1,.1,.1).translate(.5,0,0),os=class os extends Ie{constructor(e,t=gc){super();for(let n=1;n<=4;n++){const i=n===4,r=new Re(RM,os.hMaterial);r.scale.set(e,.8,i?4:.8),r.position.set(0,t*n/4,i?-.12:0),this.add(r)}{const n=Math.round(e/wM);for(let i=0;i<=n;i++){const r=new Re(AM,os.vMaterial);r.position.x=i*e/n,this.add(r)}}}};os.vMaterial=new it({color:EM}),os.hMaterial=new it({color:bM});let _c=os;class es extends Ie{constructor(e){super();const t=Object.assign({walls:[],height:2.6,thickness:.2,closed:!1,type:"wall"},e);let n=t.closed?t.walls[t.walls.length-1].to:[0,0];for(let i of t.walls){const r=i.from||n,o=i.to,a=o[0]-r[0],c=o[1]-r[1],l=Math.sqrt(a*a+c*c),h=Math.atan2(o[1]-r[1],o[0]-r[0]),u=t.type==="fence"?new _c(l):new Ht(l,t.height,{thickness:t.thickness,openings:i.openings});u.translateX(r[0]).translateZ(r[1]).rotateY(-h),this.add(u),n=o}}}const CM=13396033,Oo=class Oo extends Re{constructor(e,t){super(new yn(e*.5,e*.4,t).translate(0,t/2,0),Oo.material)}};Oo.material=new it({color:CM});let xc=Oo;const PM=5942113,Fo=class Fo extends Re{constructor(e,t){super(new yn(e*.5,e*.1,t).translate(0,t/2,0),Fo.material)}};Fo.material=new it({color:PM});let vc=Fo;const Od=new it({color:"#cccccc"}),xu=.3;class LM extends Ie{constructor(e,t,n,i=0){super(),this._blinds=[];const r=new Yt(e,.05,.24),o=(t-xu)/n,a=new zt().translateY(xu);for(let c=0;c<n-1;c++){const l=new Re(r,Od).translateY(o*(c+.5)).translateX(e/2);a.add(l),this._blinds.push(l)}this.add(a);for(let c=1;c<=3;c++)this.add(new Gt(t,{thickness:.1}).translateX(c*e/4));this.blindsAngle=i}set blindsAngle(e){for(const t of this._blinds)t.rotation.set(e,0,0)}}const jc=class jc{static getInstance(){return this._instance||(this._instance=this.createGeometry()),this._instance}static createGeometry(){const t=new ht;t.moveTo(-.15,-.15).lineTo(.15,-.15).lineTo(.15,.15).lineTo(-.15,.15).closePath();{const i=[];i.push(new ht().moveTo(-.047,-.047).lineTo(.047,-.047).lineTo(.047,.047).lineTo(-.047,.047).closePath(),new ht().moveTo(.014,.117).lineTo(.117,.117).lineTo(.117,.014).lineTo(.073,.014).lineTo(.073,.073).lineTo(.014,.073).closePath(),new ht().moveTo(-.014,.117).lineTo(-.117,.117).lineTo(-.117,.014).lineTo(-.073,.014).lineTo(-.073,.073).lineTo(-.014,.073).closePath(),new ht().moveTo(.014,-.117).lineTo(.117,-.117).lineTo(.117,-.014).lineTo(.073,-.014).lineTo(.073,-.073).lineTo(.014,-.073).closePath(),new ht().moveTo(-.014,-.117).lineTo(-.117,-.117).lineTo(-.117,-.014).lineTo(-.073,-.014).lineTo(-.073,-.073).lineTo(-.014,-.073).closePath()),t.holes=i}return new Vt(t,{depth:.09,bevelEnabled:!1})}};jc.size=.3;let wo=jc;class IM extends zt{constructor(e,t){super();const n=wo.size,i=n/2,r=Math.floor(e/n),o=Math.floor(t/n),a=r*o,c=new Go(wo.getInstance(),Od,a);for(let l=0;l<r;l++)for(let h=0;h<o;h++){const u=new De;u.makeTranslation(l*n+i,h*n+i,0),c.setMatrixAt(l*o+h,u)}this.add(c)}}const vu="24px sans-serif",Wa=1;class NM{constructor(e,t){this._labels=[],this._canvas=new OffscreenCanvas(e,t),this._tex=new Mt(this._canvas),console.log(this._tex);const n=this._canvas.getContext("2d");if(n){n.font=vu;const i=n.measureText("H");this._lineHeight=Math.round(i.fontBoundingBoxAscent+i.fontBoundingBoxDescent+.5)}else throw new Error("Cannot measure label line height");this._spriteMaterial=new od({map:this._tex,transparent:!0}),this._basicMaterial=new yt({map:this._tex,transparent:!0,side:Zt})}get canvas(){return this._canvas}set needsUpdate(e){this._tex.needsUpdate=e}get needsUpdate(){return this._tex.needsUpdate}get texture(){return this._tex}createLabel(e){const t=this._labels.length,n=t>0?this._labels[t-1].y+this._lineHeight+Wa:Wa,i=this._canvas.getContext("2d");if(i){i.font=vu,i.textBaseline="top";const o=i.measureText(e.text).width,a={x:0,y:n,width:o,text:e.text};this._labels.push(a),i.clearRect(a.x,a.y,a.width,this._lineHeight+Wa),i.fillStyle=(e==null?void 0:e.color)||"#FF00FF",i.fillText(a.text,a.x,a.y),this.needsUpdate=!0;const c=a.width*e.scale,l=this._lineHeight*e.scale,h=new Float32Array([-c,-l,0,c,-l,0,c,l,0,-c,l,0]),u=a.x/this._canvas.width,d=(a.x+a.width)/this._canvas.width,m=1-n/this._canvas.height,g=1-(n+this._lineHeight)/this._canvas.height,x=new Float32Array([u,g,d,g,d,m,u,m]),p=[0,1,2,2,3,0],f=new at;f.setIndex(p),f.setAttribute("position",new pt(h,3)),f.setAttribute("uv",new pt(x,2));let E;return e.faceUser?(E=new Ex(this._spriteMaterial),E.geometry=f):E=new Re(f,this._basicMaterial),E}else throw new Error("Cannot create a canvas context")}}const DM=256,UM=2048,Nn=class Nn extends Ie{constructor(e,t,n){super();const i=Nn.materials[(n==null?void 0:n.color)||"default"];Array.isArray(e)&&(e=new N().fromArray(e)),Array.isArray(t)&&(t=new N().fromArray(t));const r=new at().setFromPoints([e,t]),o=new xs(r,i.material);if(this.add(o),!(n!=null&&n.hideLabel)){const a=(n==null?void 0:n.label)||e.distanceTo(t).toFixed(2),c=i.color,l=Nn.labels.createLabel({width:128,text:a,scale:.002,faceUser:n==null?void 0:n.faceUser,color:c});if(n!=null&&n.face){const u=new N().fromArray(n.face).normalize(),d=new Ct().setFromUnitVectors(new N(0,0,1),u);l.applyQuaternion(d)}const h=e.clone().add(t).multiplyScalar(.5);l.position.set(h.x,h.y,h.z),this.add(l)}if(!(n!=null&&n.hideLabel)){const a=n==null?void 0:n.markers;if(!a||a==="all"||a==="start"){const c=new Re(Nn.sphereGeo,i.material);c.position.copy(e),this.add(c)}if(!a||a==="all"||a==="end"){const c=new Re(Nn.sphereGeo,i.material);c.position.copy(t),this.add(c)}}}};Nn.labels=new NM(DM,UM),Nn.materials={default:{color:"#ff00ff",material:new _s({color:16711935})},white:{color:"#ffffff",material:new _s({color:16777215})}},Nn.sphereGeo=new bs(.01);let Ke=Nn;Dd("Measurements",()=>Ke.labels._spriteMaterial.visible,s=>{Ke.labels._spriteMaterial.visible=s,Ke.labels._basicMaterial.visible=s,Ke.materials.default.material.visible=s,Ke.materials.white.material.visible=s},"measurements");class OM extends Ie{constructor(){super(),this._privacyWallType="concrete-blinds-rot",this.add(new gn(7.2,8.2,.4).translateZ(-.1).translateX(-.1),new Ke([7.3,.02,8],[7.3,.02,0],{faceUser:!0})),this.createBalcony(),this.createOuterWalls(),this.createInnerWalls(),this.createKitchen()}createBalcony(){this.add(new gn(7.2,4,.4).translateZ(8.1).translateX(-.1),new Ke([7.2,.02,12],[7.2,.02,8],{faceUser:!0}),new Gt(3.2,{thickness:.2}).translateZ(12),new Gt(3.2,{thickness:.2}).translateZ(12).translateX(7)),this.add(new xc(.6,.4).translateZ(9).translateX(5.5)),this.add(new vc(.5,.8).translateZ(9).translateX(5.5).translateY(.4)),this.add(new gn(7.2,.5,.2).translateX(-.1).translateZ(12.1),new es({type:"fence",walls:[{from:[0,4],to:[7,4]},{to:[7,1]}]}).translateZ(8)),this._breezeBlocks=new IM(4,3).translateZ(8).rotateY(_n),this._concreteBlinds=new LM(4,3.2,11).translateZ(8).rotateY(_n),this.add(this._breezeBlocks,this._concreteBlinds),Ud("Privacy wall",()=>this._privacyWallType,e=>{this._privacyWallType=e||this._privacyWallType,this._concreteBlinds.visible=this._privacyWallType==="concrete-blinds"||this._privacyWallType==="concrete-blinds-rot",this._concreteBlinds.blindsAngle=this._privacyWallType==="concrete-blinds-rot"?Li/2:0,this._breezeBlocks.visible=this._privacyWallType==="breeze-blocks"},[{label:"Breeze blocks",id:"breeze-blocks"},{label:"Concrete flat",id:"concrete-blinds"},{label:"Concrete 45deg",id:"concrete-blinds-rot"}],"privacywall")}createOuterWalls(){this.add(new Gt(2.8,{thickness:.2}),new Gt(2.8,{thickness:.2}).translateX(7),new Gt(2.8,{thickness:.2}).translateZ(8),new Gt(2.8,{thickness:.2}).translateZ(8).translateX(7),new es({height:2.8,thickness:.2,walls:[{from:[0,8],to:[7,8],openings:[{portal:new Ei(1.6,2.1),x:.9,y:0},{portal:new Ad,x:3.6,y:0},{portal:new Ha,x:5.3,y:.9}]},{to:[7,0],openings:[{portal:new Ha,x:1,y:.9},{portal:new Ei(1.6,.6),x:5.7,y:1.5}]},{to:[0,0],openings:[{portal:new $r({action:"push",hinge:"left"}),x:.2,y:0},{portal:new Ei(1,.4),x:2.1,y:1}]},{to:[0,8],openings:[{portal:new Ha,x:.8,y:.9},{portal:new $y,x:3.5,y:1.5}]}]}),new Ke([0,2.1,8.12],[7,2.1,8.12]),new Ke([3,0,8.12],[3,2.1,8.12],{markers:"start"}),new Ke([.9,2.2,8.12],[2.5,2.2,8.12]),new Ke([3.6,2.3,8.12],[4.6,2.3,8.12]),new Ke([5.3,2.2,8.12],[6.5,2.2,8.12]),new Ke([5.2,.9,8.12],[5.2,2.1,8.12],{markers:"start"}),new Ke([-.12,2.1,8],[-.12,2.1,0],{face:[-1,0,0]}),new Ke([-.12,0,7.8],[-.12,2.1,7.8],{face:[-1,0,0],markers:"start"}),new Ke([7.12,2.1,8],[7.12,2.1,0],{face:[1,0,0]}),new Ke([7.12,0,7.8],[7.12,2.1,7.8],{face:[1,0,0],markers:"start"}),new Ke([0,2.1,-.12],[7,2.1,-.12],{face:[0,0,-1]}),new Ke([3,0,-.12],[3,2.1,-.12],{face:[0,0,-1]}))}createInnerWalls(){this.add(new es({height:2.8,thickness:.1,walls:[{from:[0,4.5],to:[3.5,4.5],openings:[{portal:new $r({action:"pull",hinge:"right"}),x:2.6,y:0}]},{to:[3.5,8]}]}),new es({height:2.8,thickness:.1,walls:[{from:[0,2.6],to:[2.5,2.6]},{to:[2.5,4.5],openings:[{portal:new $r({action:"pull",hinge:"right"}),x:1,y:0}]}]}),new es({height:2.8,thickness:.1,walls:[{from:[3.5,0],to:[3.5,2.6]},{to:[2.5,2.6],openings:[{portal:new $r({action:"pull",hinge:"left"}),x:.1,y:0}]}]}))}createKitchen(){this.add(new Un(1.7,.85,.6).translateZ(.1).translateX(3.55),new Ke([3.55,.9,.2],[5.25,.9,.2],{faceUser:!0}),new Ke([4.15,.9,.6],[5.25,.9,.6],{faceUser:!0}),new Ke([5,.9,.7],[5,.9,.1],{faceUser:!0}),new Un(.6,.85,1.35).translateX(3.55).translateZ(.7),new Ke([4.2,.9,2.05],[4.2,.9,.7],{faceUser:!0}),new Un(2.2,.85,.5).translateZ(2.05).translateX(3.55),new Ke([4.15,.9,2.3],[5.75,.9,2.3],{faceUser:!0}),new Un(2.2,1.05,.1).translateZ(2.55).translateX(3.55),new Ke([3.55,1.1,2.7],[5.75,1.1,2.7],{faceUser:!0}),new Un(2.2,.05,.4).translateZ(2.4).translateX(3.55).translateY(1),new Un(.6,1.8,.6,new it({color:8947848})).translateZ(.15).translateX(5.3))}}class FM extends Ie{constructor(){super(),this.date=new Date;const e=this._createOuterRing(),t=new Uc(.13);t.translate(0,0,.03);const n=new Da({color:"#ffffff"}),i=new Re(t,n),r=this._createTimeMarkers();r.position.set(0,0,.035),this.dialSeconds=this._createDial(-.02,.12,.001,"#440000"),this.dialMinutes=this._createDial(-.02,.12,.004),this.dialHours=this._createDial(-.02,.08,.004),this.add(i,e,r,this.dialSeconds,this.dialMinutes,this.dialHours);let o=0;Ss.add(a=>(o+=a,o>=1&&(this._updateTime(),o-=Math.floor(o)),!0)),this._updateTime()}_updateTime(){const e=this.date;e.setTime(Date.now());const t=e.getSeconds(),n=e.getMinutes();this.dialSeconds.rotation.z=-t*Math.PI/30,this.dialMinutes.rotation.z=-(t/60+n)*Math.PI/30,this.dialHours.rotation.z=-(t/3600+n/60+e.getHours())*Math.PI/6}_createOuterRing(){var e=new ht;e.moveTo(0,0),e.absarc(0,0,.15,0,Math.PI*2,!1);var t=new ci;t.moveTo(0,0),t.absarc(0,0,.13,0,Math.PI*2,!0),e.holes.push(t);const n=new Vt(e,{bevelEnabled:!1,depth:.05,curveSegments:24}),i=new Da({color:"#555555"});return new Re(n,i)}_createDial(e,t,n,i="#000000"){const r=n/2,o=new ht;o.moveTo(-r,e),o.lineTo(r,e),o.lineTo(r,t),o.lineTo(-r,t);const a=new Oc(o);a.translate(0,0,.04);const c=new Da({color:i});return new Re(a,c)}_createTimeMarkers(){const n=[-.0025,-.005,.0025,-.005,.0025,.005,-.0025,-.005,.0025,.005,-.0025,.005],i=new Float32Array(12*6*3);for(let a=0;a<12;a++){const c=a*Math.PI/6,l=Math.cos(c),h=Math.sin(c);for(let u=0;u<6;u++){const d=(a*6+u)*3,m=n[u*2],g=(n[u*2+1]-.005)*(a%3?1:2)+.12,x=l*m-h*g,p=h*m+l*g;i[d]=x,i[d+1]=p,i[d+2]=0}}const r=new at,o=new yt({color:"#000000"});return r.setAttribute("position",new pt(i,3)),new Re(r,o)}}const BM=wt;class Ao extends Pi{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const r=this,o=new Fc(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(D,I){if(D.nodeType!==1)return;const A=T(D);let b=!1,ee=null;switch(D.nodeName){case"svg":I=g(D,I);break;case"style":r(D);break;case"g":I=g(D,I);break;case"path":I=g(D,I),D.hasAttribute("d")&&(ee=i(D));break;case"rect":I=g(D,I),ee=c(D);break;case"polygon":I=g(D,I),ee=l(D);break;case"polyline":I=g(D,I),ee=h(D);break;case"circle":I=g(D,I),ee=u(D);break;case"ellipse":I=g(D,I),ee=d(D);break;case"line":I=g(D,I),ee=m(D);break;case"defs":b=!0;break;case"use":I=g(D,I);const de=(D.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),W=D.viewportElement.getElementById(de);W?n(W,I):console.warn("SVGLoader: 'use node' references non-existent node id: "+de);break}ee&&(I.fill!==void 0&&I.fill!=="none"&&ee.color.setStyle(I.fill,BM),L(ee,ve),G.push(ee),ee.userData={node:D,style:I});const le=D.childNodes;for(let P=0;P<le.length;P++){const de=le[P];b&&de.nodeName!=="style"&&de.nodeName!=="defs"||n(de,I)}A&&(j.pop(),j.length>0?ve.copy(j[j.length-1]):ve.identity())}function i(D){const I=new vi,A=new ie,b=new ie,ee=new ie;let le=!0,P=!1;const de=D.getAttribute("d");if(de===""||de==="none")return null;const W=de.match(/[a-df-z][^a-df-z]*/ig);for(let Z=0,O=W.length;Z<O;Z++){const q=W[Z],K=q.charAt(0),ae=q.slice(1).trim();le===!0&&(P=!0,le=!1);let z;switch(K){case"M":z=p(ae);for(let _=0,y=z.length;_<y;_+=2)A.x=z[_+0],A.y=z[_+1],b.x=A.x,b.y=A.y,_===0?I.moveTo(A.x,A.y):I.lineTo(A.x,A.y),_===0&&ee.copy(A);break;case"H":z=p(ae);for(let _=0,y=z.length;_<y;_++)A.x=z[_],b.x=A.x,b.y=A.y,I.lineTo(A.x,A.y),_===0&&P===!0&&ee.copy(A);break;case"V":z=p(ae);for(let _=0,y=z.length;_<y;_++)A.y=z[_],b.x=A.x,b.y=A.y,I.lineTo(A.x,A.y),_===0&&P===!0&&ee.copy(A);break;case"L":z=p(ae);for(let _=0,y=z.length;_<y;_+=2)A.x=z[_+0],A.y=z[_+1],b.x=A.x,b.y=A.y,I.lineTo(A.x,A.y),_===0&&P===!0&&ee.copy(A);break;case"C":z=p(ae);for(let _=0,y=z.length;_<y;_+=6)I.bezierCurveTo(z[_+0],z[_+1],z[_+2],z[_+3],z[_+4],z[_+5]),b.x=z[_+2],b.y=z[_+3],A.x=z[_+4],A.y=z[_+5],_===0&&P===!0&&ee.copy(A);break;case"S":z=p(ae);for(let _=0,y=z.length;_<y;_+=4)I.bezierCurveTo(x(A.x,b.x),x(A.y,b.y),z[_+0],z[_+1],z[_+2],z[_+3]),b.x=z[_+0],b.y=z[_+1],A.x=z[_+2],A.y=z[_+3],_===0&&P===!0&&ee.copy(A);break;case"Q":z=p(ae);for(let _=0,y=z.length;_<y;_+=4)I.quadraticCurveTo(z[_+0],z[_+1],z[_+2],z[_+3]),b.x=z[_+0],b.y=z[_+1],A.x=z[_+2],A.y=z[_+3],_===0&&P===!0&&ee.copy(A);break;case"T":z=p(ae);for(let _=0,y=z.length;_<y;_+=2){const V=x(A.x,b.x),re=x(A.y,b.y);I.quadraticCurveTo(V,re,z[_+0],z[_+1]),b.x=V,b.y=re,A.x=z[_+0],A.y=z[_+1],_===0&&P===!0&&ee.copy(A)}break;case"A":z=p(ae,[3,4],7);for(let _=0,y=z.length;_<y;_+=7){if(z[_+5]==A.x&&z[_+6]==A.y)continue;const V=A.clone();A.x=z[_+5],A.y=z[_+6],b.x=A.x,b.y=A.y,o(I,z[_],z[_+1],z[_+2],z[_+3],z[_+4],V,A),_===0&&P===!0&&ee.copy(A)}break;case"m":z=p(ae);for(let _=0,y=z.length;_<y;_+=2)A.x+=z[_+0],A.y+=z[_+1],b.x=A.x,b.y=A.y,_===0?I.moveTo(A.x,A.y):I.lineTo(A.x,A.y),_===0&&ee.copy(A);break;case"h":z=p(ae);for(let _=0,y=z.length;_<y;_++)A.x+=z[_],b.x=A.x,b.y=A.y,I.lineTo(A.x,A.y),_===0&&P===!0&&ee.copy(A);break;case"v":z=p(ae);for(let _=0,y=z.length;_<y;_++)A.y+=z[_],b.x=A.x,b.y=A.y,I.lineTo(A.x,A.y),_===0&&P===!0&&ee.copy(A);break;case"l":z=p(ae);for(let _=0,y=z.length;_<y;_+=2)A.x+=z[_+0],A.y+=z[_+1],b.x=A.x,b.y=A.y,I.lineTo(A.x,A.y),_===0&&P===!0&&ee.copy(A);break;case"c":z=p(ae);for(let _=0,y=z.length;_<y;_+=6)I.bezierCurveTo(A.x+z[_+0],A.y+z[_+1],A.x+z[_+2],A.y+z[_+3],A.x+z[_+4],A.y+z[_+5]),b.x=A.x+z[_+2],b.y=A.y+z[_+3],A.x+=z[_+4],A.y+=z[_+5],_===0&&P===!0&&ee.copy(A);break;case"s":z=p(ae);for(let _=0,y=z.length;_<y;_+=4)I.bezierCurveTo(x(A.x,b.x),x(A.y,b.y),A.x+z[_+0],A.y+z[_+1],A.x+z[_+2],A.y+z[_+3]),b.x=A.x+z[_+0],b.y=A.y+z[_+1],A.x+=z[_+2],A.y+=z[_+3],_===0&&P===!0&&ee.copy(A);break;case"q":z=p(ae);for(let _=0,y=z.length;_<y;_+=4)I.quadraticCurveTo(A.x+z[_+0],A.y+z[_+1],A.x+z[_+2],A.y+z[_+3]),b.x=A.x+z[_+0],b.y=A.y+z[_+1],A.x+=z[_+2],A.y+=z[_+3],_===0&&P===!0&&ee.copy(A);break;case"t":z=p(ae);for(let _=0,y=z.length;_<y;_+=2){const V=x(A.x,b.x),re=x(A.y,b.y);I.quadraticCurveTo(V,re,A.x+z[_+0],A.y+z[_+1]),b.x=V,b.y=re,A.x=A.x+z[_+0],A.y=A.y+z[_+1],_===0&&P===!0&&ee.copy(A)}break;case"a":z=p(ae,[3,4],7);for(let _=0,y=z.length;_<y;_+=7){if(z[_+5]==0&&z[_+6]==0)continue;const V=A.clone();A.x+=z[_+5],A.y+=z[_+6],b.x=A.x,b.y=A.y,o(I,z[_],z[_+1],z[_+2],z[_+3],z[_+4],V,A),_===0&&P===!0&&ee.copy(A)}break;case"Z":case"z":I.currentPath.autoClose=!0,I.currentPath.curves.length>0&&(A.copy(ee),I.currentPath.currentPoint.copy(A),le=!0);break;default:console.warn(q)}P=!1}return I}function r(D){if(!(!D.sheet||!D.sheet.cssRules||!D.sheet.cssRules.length))for(let I=0;I<D.sheet.cssRules.length;I++){const A=D.sheet.cssRules[I];if(A.type!==1)continue;const b=A.selectorText.split(/,/gm).filter(Boolean).map(ee=>ee.trim());for(let ee=0;ee<b.length;ee++){const le=Object.fromEntries(Object.entries(A.style).filter(([,P])=>P!==""));F[b[ee]]=Object.assign(F[b[ee]]||{},le)}}}function o(D,I,A,b,ee,le,P,de){if(I==0||A==0){D.lineTo(de.x,de.y);return}b=b*Math.PI/180,I=Math.abs(I),A=Math.abs(A);const W=(P.x-de.x)/2,Z=(P.y-de.y)/2,O=Math.cos(b)*W+Math.sin(b)*Z,q=-Math.sin(b)*W+Math.cos(b)*Z;let K=I*I,ae=A*A;const z=O*O,_=q*q,y=z/K+_/ae;if(y>1){const Ee=Math.sqrt(y);I=Ee*I,A=Ee*A,K=I*I,ae=A*A}const V=K*_+ae*z,re=(K*ae-V)/V;let ue=Math.sqrt(Math.max(0,re));ee===le&&(ue=-ue);const ce=ue*I*q/A,Te=-ue*A*O/I,_e=Math.cos(b)*ce-Math.sin(b)*Te+(P.x+de.x)/2,xe=Math.sin(b)*ce+Math.cos(b)*Te+(P.y+de.y)/2,Pe=a(1,0,(O-ce)/I,(q-Te)/A),me=a((O-ce)/I,(q-Te)/A,(-O-ce)/I,(-q-Te)/A)%(Math.PI*2);D.currentPath.absellipse(_e,xe,I,A,Pe,Pe+me,le===0,b)}function a(D,I,A,b){const ee=D*A+I*b,le=Math.sqrt(D*D+I*I)*Math.sqrt(A*A+b*b);let P=Math.acos(Math.max(-1,Math.min(1,ee/le)));return D*b-I*A<0&&(P=-P),P}function c(D){const I=v(D.getAttribute("x")||0),A=v(D.getAttribute("y")||0),b=v(D.getAttribute("rx")||D.getAttribute("ry")||0),ee=v(D.getAttribute("ry")||D.getAttribute("rx")||0),le=v(D.getAttribute("width")),P=v(D.getAttribute("height")),de=1-.551915024494,W=new vi;return W.moveTo(I+b,A),W.lineTo(I+le-b,A),(b!==0||ee!==0)&&W.bezierCurveTo(I+le-b*de,A,I+le,A+ee*de,I+le,A+ee),W.lineTo(I+le,A+P-ee),(b!==0||ee!==0)&&W.bezierCurveTo(I+le,A+P-ee*de,I+le-b*de,A+P,I+le-b,A+P),W.lineTo(I+b,A+P),(b!==0||ee!==0)&&W.bezierCurveTo(I+b*de,A+P,I,A+P-ee*de,I,A+P-ee),W.lineTo(I,A+ee),(b!==0||ee!==0)&&W.bezierCurveTo(I,A+ee*de,I+b*de,A,I+b,A),W}function l(D){function I(le,P,de){const W=v(P),Z=v(de);ee===0?b.moveTo(W,Z):b.lineTo(W,Z),ee++}const A=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new vi;let ee=0;return D.getAttribute("points").replace(A,I),b.currentPath.autoClose=!0,b}function h(D){function I(le,P,de){const W=v(P),Z=v(de);ee===0?b.moveTo(W,Z):b.lineTo(W,Z),ee++}const A=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new vi;let ee=0;return D.getAttribute("points").replace(A,I),b.currentPath.autoClose=!1,b}function u(D){const I=v(D.getAttribute("cx")||0),A=v(D.getAttribute("cy")||0),b=v(D.getAttribute("r")||0),ee=new ci;ee.absarc(I,A,b,0,Math.PI*2);const le=new vi;return le.subPaths.push(ee),le}function d(D){const I=v(D.getAttribute("cx")||0),A=v(D.getAttribute("cy")||0),b=v(D.getAttribute("rx")||0),ee=v(D.getAttribute("ry")||0),le=new ci;le.absellipse(I,A,b,ee,0,Math.PI*2);const P=new vi;return P.subPaths.push(le),P}function m(D){const I=v(D.getAttribute("x1")||0),A=v(D.getAttribute("y1")||0),b=v(D.getAttribute("x2")||0),ee=v(D.getAttribute("y2")||0),le=new vi;return le.moveTo(I,A),le.lineTo(b,ee),le.currentPath.autoClose=!1,le}function g(D,I){I=Object.assign({},I);let A={};if(D.hasAttribute("class")){const P=D.getAttribute("class").split(/\s/).filter(Boolean).map(de=>de.trim());for(let de=0;de<P.length;de++)A=Object.assign(A,F["."+P[de]])}D.hasAttribute("id")&&(A=Object.assign(A,F["#"+D.getAttribute("id")]));function b(P,de,W){W===void 0&&(W=function(O){return O.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),O}),D.hasAttribute(P)&&(I[de]=W(D.getAttribute(P))),A[P]&&(I[de]=W(A[P])),D.style&&D.style[P]!==""&&(I[de]=W(D.style[P]))}function ee(P){return Math.max(0,Math.min(1,v(P)))}function le(P){return Math.max(0,v(P))}return b("fill","fill"),b("fill-opacity","fillOpacity",ee),b("fill-rule","fillRule"),b("opacity","opacity",ee),b("stroke","stroke"),b("stroke-opacity","strokeOpacity",ee),b("stroke-width","strokeWidth",le),b("stroke-linejoin","strokeLineJoin"),b("stroke-linecap","strokeLineCap"),b("stroke-miterlimit","strokeMiterLimit",le),b("visibility","visibility"),I}function x(D,I){return D-(I-D)}function p(D,I,A){if(typeof D!="string")throw new TypeError("Invalid input: "+typeof D);const b={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},ee=0,le=1,P=2,de=3;let W=ee,Z=!0,O="",q="";const K=[];function ae(V,re,ue){const ce=new SyntaxError('Unexpected character "'+V+'" at index '+re+".");throw ce.partial=ue,ce}function z(){O!==""&&(q===""?K.push(Number(O)):K.push(Number(O)*Math.pow(10,Number(q)))),O="",q=""}let _;const y=D.length;for(let V=0;V<y;V++){if(_=D[V],Array.isArray(I)&&I.includes(K.length%A)&&b.FLAGS.test(_)){W=le,O=_,z();continue}if(W===ee){if(b.WHITESPACE.test(_))continue;if(b.DIGIT.test(_)||b.SIGN.test(_)){W=le,O=_;continue}if(b.POINT.test(_)){W=P,O=_;continue}b.COMMA.test(_)&&(Z&&ae(_,V,K),Z=!0)}if(W===le){if(b.DIGIT.test(_)){O+=_;continue}if(b.POINT.test(_)){O+=_,W=P;continue}if(b.EXP.test(_)){W=de;continue}b.SIGN.test(_)&&O.length===1&&b.SIGN.test(O[0])&&ae(_,V,K)}if(W===P){if(b.DIGIT.test(_)){O+=_;continue}if(b.EXP.test(_)){W=de;continue}b.POINT.test(_)&&O[O.length-1]==="."&&ae(_,V,K)}if(W===de){if(b.DIGIT.test(_)){q+=_;continue}if(b.SIGN.test(_)){if(q===""){q+=_;continue}q.length===1&&b.SIGN.test(q)&&ae(_,V,K)}}b.WHITESPACE.test(_)?(z(),W=ee,Z=!1):b.COMMA.test(_)?(z(),W=ee,Z=!0):b.SIGN.test(_)?(z(),W=le,O=_):b.POINT.test(_)?(z(),W=P,O=_):ae(_,V,K)}return z(),K}const f=["mm","cm","in","pt","pc","px"],E={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(D){let I="px";if(typeof D=="string"||D instanceof String)for(let b=0,ee=f.length;b<ee;b++){const le=f[b];if(D.endsWith(le)){I=le,D=D.substring(0,D.length-le.length);break}}let A;return I==="px"&&t.defaultUnit!=="px"?A=E.in[t.defaultUnit]/t.defaultDPI:(A=E[I][t.defaultUnit],A<0&&(A=E[I].in*t.defaultDPI)),A*parseFloat(D)}function T(D){if(!(D.hasAttribute("transform")||D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))))return null;const I=U(D);return j.length>0&&I.premultiply(j[j.length-1]),ve.copy(I),j.push(I),I}function U(D){const I=new Ue,A=te;if(D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))){const b=v(D.getAttribute("x")),ee=v(D.getAttribute("y"));I.translate(b,ee)}if(D.hasAttribute("transform")){const b=D.getAttribute("transform").split(")");for(let ee=b.length-1;ee>=0;ee--){const le=b[ee].trim();if(le==="")continue;const P=le.indexOf("("),de=le.length;if(P>0&&P<de){const W=le.slice(0,P),Z=p(le.slice(P+1));switch(A.identity(),W){case"translate":if(Z.length>=1){const O=Z[0];let q=0;Z.length>=2&&(q=Z[1]),A.translate(O,q)}break;case"rotate":if(Z.length>=1){let O=0,q=0,K=0;O=Z[0]*Math.PI/180,Z.length>=3&&(q=Z[1],K=Z[2]),oe.makeTranslation(-q,-K),se.makeRotation(O),k.multiplyMatrices(se,oe),oe.makeTranslation(q,K),A.multiplyMatrices(oe,k)}break;case"scale":if(Z.length>=1){const O=Z[0];let q=O;Z.length>=2&&(q=Z[1]),A.scale(O,q)}break;case"skewX":Z.length===1&&A.set(1,Math.tan(Z[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Z.length===1&&A.set(1,0,0,Math.tan(Z[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Z.length===6&&A.set(Z[0],Z[2],Z[4],Z[1],Z[3],Z[5],0,0,1);break}}I.premultiply(A)}}return I}function L(D,I){function A(P){he.set(P.x,P.y,1).applyMatrix3(I),P.set(he.x,he.y)}function b(P){const de=P.xRadius,W=P.yRadius,Z=Math.cos(P.aRotation),O=Math.sin(P.aRotation),q=new N(de*Z,de*O,0),K=new N(-W*O,W*Z,0),ae=q.applyMatrix3(I),z=K.applyMatrix3(I),_=te.set(ae.x,z.x,0,ae.y,z.y,0,0,0,1),y=oe.copy(_).invert(),ue=se.copy(y).transpose().multiply(y).elements,ce=H(ue[0],ue[1],ue[4]),Te=Math.sqrt(ce.rt1),_e=Math.sqrt(ce.rt2);if(P.xRadius=1/Te,P.yRadius=1/_e,P.aRotation=Math.atan2(ce.sn,ce.cs),!((P.aEndAngle-P.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Pe=oe.set(Te,0,0,0,_e,0,0,0,1),me=se.set(ce.cs,ce.sn,0,-ce.sn,ce.cs,0,0,0,1),Ee=Pe.multiply(me).multiply(_),Fe=Ae=>{const{x:Se,y:Oe}=new N(Math.cos(Ae),Math.sin(Ae),0).applyMatrix3(Ee);return Math.atan2(Oe,Se)};P.aStartAngle=Fe(P.aStartAngle),P.aEndAngle=Fe(P.aEndAngle),C(I)&&(P.aClockwise=!P.aClockwise)}}function ee(P){const de=w(I),W=S(I);P.xRadius*=de,P.yRadius*=W;const Z=de>Number.EPSILON?Math.atan2(I.elements[1],I.elements[0]):Math.atan2(-I.elements[3],I.elements[4]);P.aRotation+=Z,C(I)&&(P.aStartAngle*=-1,P.aEndAngle*=-1,P.aClockwise=!P.aClockwise)}const le=D.subPaths;for(let P=0,de=le.length;P<de;P++){const Z=le[P].curves;for(let O=0;O<Z.length;O++){const q=Z[O];q.isLineCurve?(A(q.v1),A(q.v2)):q.isCubicBezierCurve?(A(q.v0),A(q.v1),A(q.v2),A(q.v3)):q.isQuadraticBezierCurve?(A(q.v0),A(q.v1),A(q.v2)):q.isEllipseCurve&&(fe.set(q.aX,q.aY),A(fe),q.aX=fe.x,q.aY=fe.y,B(I)?b(q):ee(q))}}}function C(D){const I=D.elements;return I[0]*I[4]-I[1]*I[3]<0}function B(D){const I=D.elements,A=I[0]*I[3]+I[1]*I[4];if(A===0)return!1;const b=w(D),ee=S(D);return Math.abs(A/(b*ee))>Number.EPSILON}function w(D){const I=D.elements;return Math.sqrt(I[0]*I[0]+I[1]*I[1])}function S(D){const I=D.elements;return Math.sqrt(I[3]*I[3]+I[4]*I[4])}function H(D,I,A){let b,ee,le,P,de;const W=D+A,Z=D-A,O=Math.sqrt(Z*Z+4*I*I);return W>0?(b=.5*(W+O),de=1/b,ee=D*de*A-I*de*I):W<0?ee=.5*(W-O):(b=.5*O,ee=-.5*O),Z>0?le=Z+O:le=Z-O,Math.abs(le)>2*Math.abs(I)?(de=-2*I/le,P=1/Math.sqrt(1+de*de),le=de*P):Math.abs(I)===0?(le=1,P=0):(de=-.5*le/I,le=1/Math.sqrt(1+de*de),P=de*le),Z>0&&(de=le,le=-P,P=de),{rt1:b,rt2:ee,cs:le,sn:P}}const G=[],F={},j=[],te=new Ue,oe=new Ue,se=new Ue,k=new Ue,fe=new ie,he=new N,ve=new Ue,Ce=new DOMParser().parseFromString(e,"image/svg+xml");return n(Ce.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:G,xml:Ce.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function r(x,p,f,E){const v=x.x,T=p.x,U=f.x,L=E.x,C=x.y,B=p.y,w=f.y,S=E.y,H=(L-U)*(C-w)-(S-w)*(v-U),G=(T-v)*(C-w)-(B-C)*(v-U),F=(S-w)*(T-v)-(L-U)*(B-C),j=H/F,te=G/F;if(F===0&&H!==0||j<=0||j>=1||te<0||te>1)return null;if(H===0&&F===0){for(let oe=0;oe<2;oe++)if(o(oe===0?f:E,x,p),i.loc==n.ORIGIN){const se=oe===0?f:E;return{x:se.x,y:se.y,t:i.t}}else if(i.loc==n.BETWEEN){const se=+(v+i.t*(T-v)).toPrecision(10),k=+(C+i.t*(B-C)).toPrecision(10);return{x:se,y:k,t:i.t}}return null}else{for(let k=0;k<2;k++)if(o(k===0?f:E,x,p),i.loc==n.ORIGIN){const fe=k===0?f:E;return{x:fe.x,y:fe.y,t:i.t}}const oe=+(v+j*(T-v)).toPrecision(10),se=+(C+j*(B-C)).toPrecision(10);return{x:oe,y:se,t:j}}}function o(x,p,f){const E=f.x-p.x,v=f.y-p.y,T=x.x-p.x,U=x.y-p.y,L=E*U-T*v;if(x.x===p.x&&x.y===p.y){i.loc=n.ORIGIN,i.t=0;return}if(x.x===f.x&&x.y===f.y){i.loc=n.DESTINATION,i.t=1;return}if(L<-Number.EPSILON){i.loc=n.LEFT;return}if(L>Number.EPSILON){i.loc=n.RIGHT;return}if(E*T<0||v*U<0){i.loc=n.BEHIND;return}if(Math.sqrt(E*E+v*v)<Math.sqrt(T*T+U*U)){i.loc=n.BEYOND;return}let C;E!==0?C=T/E:C=U/v,i.loc=n.BETWEEN,i.t=C}function a(x,p){const f=[],E=[];for(let v=1;v<x.length;v++){const T=x[v-1],U=x[v];for(let L=1;L<p.length;L++){const C=p[L-1],B=p[L],w=r(T,U,C,B);w!==null&&f.find(S=>S.t<=w.t+Number.EPSILON&&S.t>=w.t-Number.EPSILON)===void 0&&(f.push(w),E.push(new ie(w.x,w.y)))}}return E}function c(x,p,f){const E=new ie;p.getCenter(E);const v=[];return f.forEach(T=>{T.boundingBox.containsPoint(E)&&a(x,T.points).forEach(L=>{v.push({identifier:T.identifier,isCW:T.isCW,point:L})})}),v.sort((T,U)=>T.point.x-U.point.x),v}function l(x,p,f,E,v){(v==null||v==="")&&(v="nonzero");const T=new ie;x.boundingBox.getCenter(T);const U=[new ie(f,T.y),new ie(E,T.y)],L=c(U,x.boundingBox,p);L.sort((G,F)=>G.point.x-F.point.x);const C=[],B=[];L.forEach(G=>{G.identifier===x.identifier?C.push(G):B.push(G)});const w=C[0].point.x,S=[];let H=0;for(;H<B.length&&B[H].point.x<w;)S.length>0&&S[S.length-1]===B[H].identifier?S.pop():S.push(B[H].identifier),H++;if(S.push(x.identifier),v==="evenodd"){const G=S.length%2===0,F=S[S.length-2];return{identifier:x.identifier,isHole:G,for:F}}else if(v==="nonzero"){let G=!0,F=null,j=null;for(let te=0;te<S.length;te++){const oe=S[te];G?(j=p[oe].isCW,G=!1,F=oe):j!==p[oe].isCW&&(j=p[oe].isCW,G=!0)}return{identifier:x.identifier,isHole:G,for:F}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let h=999999999,u=-999999999,d=e.subPaths.map(x=>{const p=x.getPoints();let f=-999999999,E=999999999,v=-999999999,T=999999999;for(let U=0;U<p.length;U++){const L=p[U];L.y>f&&(f=L.y),L.y<E&&(E=L.y),L.x>v&&(v=L.x),L.x<T&&(T=L.x)}return u<=v&&(u=v+1),h>=T&&(h=T-1),{curves:x.curves,points:p,isCW:mn.isClockWise(p),identifier:-1,boundingBox:new zv(new ie(T,E),new ie(v,f))}});d=d.filter(x=>x.points.length>1);for(let x=0;x<d.length;x++)d[x].identifier=x;const m=d.map(x=>l(x,d,h,u,e.userData?e.userData.style.fillRule:void 0)),g=[];return d.forEach(x=>{if(!m[x.identifier].isHole){const f=new ht;f.curves=x.curves,m.filter(v=>v.isHole&&v.for===x.identifier).forEach(v=>{const T=d[v.identifier],U=new ci;U.curves=T.curves,f.holes.push(U)}),g.push(f)}}),g}static getStrokeStyle(e,t,n,i,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:r}}static pointsToStroke(e,t,n,i){const r=[],o=[],a=[];if(Ao.pointsToStrokeWithBuffers(e,t,n,i,r,o,a)===0)return null;const c=new at;return c.setAttribute("position",new ot(r,3)),c.setAttribute("normal",new ot(o,3)),c.setAttribute("uv",new ot(a,2)),c}static pointsToStrokeWithBuffers(e,t,n,i,r,o,a,c){const l=new ie,h=new ie,u=new ie,d=new ie,m=new ie,g=new ie,x=new ie,p=new ie,f=new ie,E=new ie,v=new ie,T=new ie,U=new ie,L=new ie,C=new ie,B=new ie,w=new ie;n=n!==void 0?n:12,i=i!==void 0?i:.001,c=c!==void 0?c:0,e=Z(e);const S=e.length;if(S<2)return 0;const H=e[0].equals(e[S-1]);let G,F=e[0],j;const te=t.strokeWidth/2,oe=1/(S-1);let se=0,k,fe,he,ve,Ce=!1,je=0,D=c*3,I=c*2;A(e[0],e[1],l).multiplyScalar(te),p.copy(e[0]).sub(l),f.copy(e[0]).add(l),E.copy(p),v.copy(f);for(let O=1;O<S;O++){G=e[O],O===S-1?H?j=e[1]:j=void 0:j=e[O+1];const q=l;if(A(F,G,q),u.copy(q).multiplyScalar(te),T.copy(G).sub(u),U.copy(G).add(u),k=se+oe,fe=!1,j!==void 0){A(G,j,h),u.copy(h).multiplyScalar(te),L.copy(G).sub(u),C.copy(G).add(u),he=!0,u.subVectors(j,F),q.dot(u)<0&&(he=!1),O===1&&(Ce=he),u.subVectors(j,G),u.normalize();const K=Math.abs(q.dot(u));if(K>Number.EPSILON){const ae=te/K;u.multiplyScalar(-ae),d.subVectors(G,F),m.copy(d).setLength(ae).add(u),B.copy(m).negate();const z=m.length(),_=d.length();d.divideScalar(_),g.subVectors(j,G);const y=g.length();switch(g.divideScalar(y),d.dot(B)<_&&g.dot(B)<y&&(fe=!0),w.copy(m).add(G),B.add(G),ve=!1,fe?he?(C.copy(B),U.copy(B)):(L.copy(B),T.copy(B)):le(),t.strokeLineJoin){case"bevel":P(he,fe,k);break;case"round":de(he,fe),he?ee(G,T,L,k,0):ee(G,C,U,k,1);break;case"miter":case"miter-clip":default:const V=te*t.strokeMiterLimit/z;if(V<1)if(t.strokeLineJoin!=="miter-clip"){P(he,fe,k);break}else de(he,fe),he?(g.subVectors(w,T).multiplyScalar(V).add(T),x.subVectors(w,L).multiplyScalar(V).add(L),b(T,k,0),b(g,k,0),b(G,k,.5),b(G,k,.5),b(g,k,0),b(x,k,0),b(G,k,.5),b(x,k,0),b(L,k,0)):(g.subVectors(w,U).multiplyScalar(V).add(U),x.subVectors(w,C).multiplyScalar(V).add(C),b(U,k,1),b(g,k,1),b(G,k,.5),b(G,k,.5),b(g,k,1),b(x,k,1),b(G,k,.5),b(x,k,1),b(C,k,1));else fe?(he?(b(f,se,1),b(p,se,0),b(w,k,0),b(f,se,1),b(w,k,0),b(B,k,1)):(b(f,se,1),b(p,se,0),b(w,k,1),b(p,se,0),b(B,k,0),b(w,k,1)),he?L.copy(w):C.copy(w)):he?(b(T,k,0),b(w,k,0),b(G,k,.5),b(G,k,.5),b(w,k,0),b(L,k,0)):(b(U,k,1),b(w,k,1),b(G,k,.5),b(G,k,.5),b(w,k,1),b(C,k,1)),ve=!0;break}}else le()}else le();!H&&O===S-1&&W(e[0],E,v,he,!0,se),se=k,F=G,p.copy(L),f.copy(C)}if(!H)W(G,T,U,he,!1,k);else if(fe&&r){let O=w,q=B;Ce!==he&&(O=B,q=w),he?(ve||Ce)&&(q.toArray(r,0*3),q.toArray(r,3*3),ve&&O.toArray(r,1*3)):(ve||!Ce)&&(q.toArray(r,1*3),q.toArray(r,3*3),ve&&O.toArray(r,0*3))}return je;function A(O,q,K){return K.subVectors(q,O),K.set(-K.y,K.x).normalize()}function b(O,q,K){r&&(r[D]=O.x,r[D+1]=O.y,r[D+2]=0,o&&(o[D]=0,o[D+1]=0,o[D+2]=1),D+=3,a&&(a[I]=q,a[I+1]=K,I+=2)),je+=3}function ee(O,q,K,ae,z){l.copy(q).sub(O).normalize(),h.copy(K).sub(O).normalize();let _=Math.PI;const y=l.dot(h);Math.abs(y)<1&&(_=Math.abs(Math.acos(y))),_/=n,u.copy(q);for(let V=0,re=n-1;V<re;V++)d.copy(u).rotateAround(O,_),b(u,ae,z),b(d,ae,z),b(O,ae,.5),u.copy(d);b(d,ae,z),b(K,ae,z),b(O,ae,.5)}function le(){b(f,se,1),b(p,se,0),b(T,k,0),b(f,se,1),b(T,k,0),b(U,k,1)}function P(O,q,K){q?O?(b(f,se,1),b(p,se,0),b(T,k,0),b(f,se,1),b(T,k,0),b(B,k,1),b(T,K,0),b(L,K,0),b(B,K,.5)):(b(f,se,1),b(p,se,0),b(U,k,1),b(p,se,0),b(B,k,0),b(U,k,1),b(U,K,1),b(B,K,0),b(C,K,1)):O?(b(T,K,0),b(L,K,0),b(G,K,.5)):(b(U,K,1),b(C,K,0),b(G,K,.5))}function de(O,q){q&&(O?(b(f,se,1),b(p,se,0),b(T,k,0),b(f,se,1),b(T,k,0),b(B,k,1),b(T,se,0),b(G,k,.5),b(B,k,1),b(G,k,.5),b(L,se,0),b(B,k,1)):(b(f,se,1),b(p,se,0),b(U,k,1),b(p,se,0),b(B,k,0),b(U,k,1),b(U,se,1),b(B,k,0),b(G,k,.5),b(G,k,.5),b(B,k,0),b(C,se,1)))}function W(O,q,K,ae,z,_){switch(t.strokeLineCap){case"round":z?ee(O,K,q,_,.5):ee(O,q,K,_,.5);break;case"square":if(z)l.subVectors(q,O),h.set(l.y,-l.x),u.addVectors(l,h).add(O),d.subVectors(h,l).add(O),ae?(u.toArray(r,1*3),d.toArray(r,0*3),d.toArray(r,3*3)):(u.toArray(r,1*3),a[3*2+1]===1?d.toArray(r,3*3):u.toArray(r,3*3),d.toArray(r,0*3));else{l.subVectors(K,O),h.set(l.y,-l.x),u.addVectors(l,h).add(O),d.subVectors(h,l).add(O);const y=r.length;ae?(u.toArray(r,y-1*3),d.toArray(r,y-2*3),d.toArray(r,y-4*3)):(d.toArray(r,y-2*3),u.toArray(r,y-1*3),d.toArray(r,y-4*3))}break}}function Z(O){let q=!1;for(let ae=1,z=O.length-1;ae<z;ae++)if(O[ae].distanceTo(O[ae+1])<i){q=!0;break}if(!q)return O;const K=[];K.push(O[0]);for(let ae=1,z=O.length-1;ae<z;ae++)O[ae].distanceTo(O[ae+1])>=i&&K.push(O[ae]);return K.push(O[O.length-1]),K}}}const kM=new it({color:13421823});class zM extends zt{constructor(){super(),new Ao().load("models/pajero5.svg",t=>{for(let n of t.paths){const i=Ao.createShapes(n),r=new Vt(i,{depth:187.5}).scale(.01,.01,.01),o=new Re(r,kM);this.add(o)}},function(t){console.log(t.loaded/t.total*100+"% loaded")},function(t){console.log("An error happened")})}}const eo=7,Ws=6;class HM extends Ie{constructor(){super(),this.add(new gn(eo,Ws,.4),new es({height:2.6,thickness:.2,closed:!0,walls:[{to:[eo,Ws],openings:[{portal:new iM({w:2.5,h:2.2}),x:.5,y:0},{portal:new Ad,x:3.6,y:0}]},{to:[eo,0]},{to:[0,0]},{to:[0,Ws]}]}),new Ke([.5,2.3,6.12],[3,2.3,6.12]),new Gt(2.6,{thickness:.2}).translateZ(Ws),new Gt(2.6,{thickness:.2}).translateZ(Ws).translateX(eo));const e=new FM;e.position.set(5,1.8,.1),this.add(e);const t=new zM().translateX(2.8).translateZ(.5).rotateY(-Math.PI/2);this.add(t),this.add(new Ke([.1,.02,.5],[6.9,.02,.5],{faceUser:!0})),this.add(new Ke([4,.02,.1],[4,.02,5.9],{faceUser:!0}))}}const VM=13421772,Yc=new it({color:VM});Yc.side=Zt;class GM extends Ie{constructor(e,t,n,i,r=.2){super();const o=new ht;o.moveTo(-t,0).lineTo(-t,r).lineTo(0,i+r).lineTo(n,r).lineTo(n,0).lineTo(0,i).closePath();const a=new Vt(o,{bevelEnabled:!1,depth:e}).translate(0,0,-e/2).rotateY(Li),c=new Re(a,Yc);c.layers.enable(dn),this.add(c)}}class WM extends Ie{constructor(e,t,n,i=.2){super();const r=new ht;r.moveTo(-t,0).lineTo(-t,i).lineTo(0,n+i).lineTo(0,n).closePath();const o=new Vt(r,{bevelEnabled:!1,depth:e}).translate(0,0,-e/2).rotateY(Li),a=new Re(o,Yc);a.layers.enable(dn),this.add(a)}}class XM extends Ie{constructor(){super(),this._roofType="concrete-flat",this.add(new gn(7.2,8.2,.4).translateX(-.1).translateZ(-.1)),this._roof2Sided=YM(),this._roofConcrete=qM(),this.add(this._roof2Sided,this._roofConcrete),Ud("Roof type",()=>this._roofType,e=>{this._roofType=e||this._roofType,this._updateRoofType()},[{label:"2-sided",id:"2sided"},{label:"Concrete flat",id:"concrete-flat"}],"rooftype")}_updateRoofType(){this._roofConcrete.visible=this._roofType==="concrete-flat",this._roof2Sided.visible=this._roofType==="2sided"}}function YM(){function s(t,n){const r=new ht;r.moveTo(-.2/2,0).lineTo(t+.2/2,0).lineTo(-.2/2,n).closePath();const o=new Vt(r,{depth:.2,bevelEnabled:!1});return o.translate(0,0,-.2/2).rotateY(Li),new Re(o,Ht.material)}const e=new zt;return e.add(new GM(8,4.5,8.5,.8).translateX(3.5).translateZ(8),new Ht(7,.8,{thickness:.2}).translateZ(8),new Ht(7.2,.2,{thickness:.2}).translateX(-.1).translateZ(12),s(8,.8).translateZ(8),s(8,.8).translateZ(8).translateX(7)),e}function qM(){function s(t,n){const r=new ht;r.moveTo(-.2/2,0).lineTo(t+.2/2,0).lineTo(t+.2/2,n).closePath();const o=new Vt(r,{depth:.2,bevelEnabled:!1});return o.translate(0,0,-.2/2).rotateY(Li),new Re(o,Ht.material)}const e=new zt;return e.add(new WM(8,13,.26).translateY(-.09).translateX(3.5).translateZ(-.5),new Ht(7,.17,{thickness:.2}).translateZ(0),s(8,.17).translateZ(8),s(8,.17).translateZ(8).translateX(7)),e}class jM extends Ie{constructor(){super(),this.levelGarage=new HM().translateY(-3).translateZ(6),this.levelHouse=new OM,this.levelRoof=new XM().translateY(3.2),this.add(po(this.levelRoof,"Roof level","roof_level")),this.add(po(this.levelHouse,"House level","house_level")),this.add(po(this.levelGarage,"Garage level","garage_level"))}}class KM extends Re{constructor(e,t){super();const n=new at,i=new Float32Array([Je[0].x,t?0:Je[0].y,Je[0].z,Je[1].x,t?0:Je[1].y,Je[1].z,Je[2].x,t?0:Je[2].y,Je[2].z,Je[3].x,t?0:Je[3].y,Je[3].z]),r=[1,0,3,2,1,3];n.setIndex(r),n.setAttribute("position",new pt(i,3));const o=new yt({color:e,transparent:!t,opacity:t?1:.3});o.depthWrite=!1,this.geometry=n,this.material=o}}class yu extends Re{constructor(e,t,n){super(),this.layers.enable(dn);const i=n.width,r=n.offset!=null?n.offset:i/2,o=e.toArray(),a=t.toArray();let c=a[0]-o[0],l=a[2]-o[2];const h=Math.sqrt(c*c+l*l);c/=h,l/=h;const u=-l,d=c,m=n.extendFrom||0;m&&(o[0]-=m*c,o[2]-=m*l);const g=n.extendTo||0;g&&(a[0]+=g*c,a[2]+=g*l),o[0]+=r*u,o[2]+=r*d,a[0]+=r*u,a[2]+=r*d;const x=[a[0]-i*u,a[1],a[2]-i*d],p=[o[0]-i*u,o[1],o[2]-i*d],f=new Float32Array([o,a,p,x,p,a].flat()),E=new at;E.setAttribute("position",new pt(f,3));const v=new yt({color:n.color||13421772});this.geometry=E,this.material=v}}const ZM=.915,$M=new yn(.025,.025,1),JM=new it({color:5592405});class QM extends zt{constructor(e,t){super();const n=(t==null?void 0:t.height)||ZM,i=3*e.length-2,r=new Go($M,JM,i);this.add(r);let o=0;for(let a=0;a<e.length;a++){const c=e[a],l=new De().makeTranslation(c[0],n/2+c[1],c[2]).scale(new N(1,n,1));if(r.setMatrixAt(o++,l),a>0){const h=new N().fromArray(e[a-1]),u=new N().fromArray(c).add(h).multiplyScalar(.5),d=new N().copy(h).distanceTo(new N().fromArray(c)),m=new N().fromArray(c).sub(h).normalize(),g=new Ct().setFromUnitVectors(new N(0,1,0),m),x=new De().makeRotationFromQuaternion(g);for(const p of[n/2,n]){const f=new De().makeTranslation(u.x,u.y+p,u.z).multiply(x).scale(new N(1,d,1));r.setMatrixAt(o++,f)}}}}}class eS extends zt{constructor(){super(),this.house=new jM,this.house.position.set(1.3,5,8),this.add(this.house),this.add(new KM(7829367,!0).translateY(-1)),this.add(new yu(Je[3],Je[2],{width:1,offset:0,extendTo:2,color:5618517}).translateY(.01)),this.add(new yu(Je[3],Je[2],{width:4,offset:4,extendTo:2,color:5592405})),this.createDriveway(),this.createRamp(),this.createStairs(),this.createLandMarkers(),this.createRetainingWallBack(),this.createLowerDeck(),this.createUpperDeck(),this.add(po(new vM,"Firewalls","firewalls")),this.add(new Ke([10.5,0,15],[10.5,6.4,15],{faceUser:!0,label:"Neighbor front",color:"white"}))}createDriveway(){const n=new hc([[0,2,0],[9.4,2,0],[3,0,10],[0,0,10]]).translateZ(23);this.add(n),this.add(new Gt(2.3).translateX(.25).translateZ(33.1),new Gt(2.3).translateX(2.9).translateZ(33.1)),this.add(new Ht(3.8,2).translateX(2.9).translateZ(33).rotateY(1)),this.add(new Ke([.2,2.02,23],[4.3,2.02,23],{faceUser:!0}));const i=10,r=2;console.log(`Driveway: run = ${i.toFixed(1)}, rise = ${r.toFixed(1)}, slope = ${(100*r/i).toFixed()}%`)}createRamp(){const e=new N(.2,2,20),t=new N(.2,5,8),n=1,i=new ht;i.moveTo(e.z,e.y).lineTo(t.z,e.y).lineTo(t.z,t.y).closePath();const r=new Vt(i,{depth:1,bevelEnabled:!1}).translate(0,0,-n);this.add(new Re(r,new it({map:Xa("images/gravel.webp")})).translateX(e.x).rotateY(_n)),this.add(new Ke([e.x,e.y+.02,e.z+.12],[e.x+n,e.y+.02,e.z+.12],{faceUser:!0}));const o=e.z-t.z,a=t.y-e.y;console.log(`Ramp: run = ${o.toFixed(1)}, rise = ${a.toFixed(1)}, slope = ${(100*a/o).toFixed()}`)}createStairs(){const e=new uc({width:1,height:3,length:4,steps:16,name:"Stairs to main floor"});this.add(e.translateY(2).translateX(8.4).translateZ(21).rotateY(Li)),this.add(new QM([[9.4,2,21+e.run/2],[9.4,5,17-e.run/2],[9.4,5,12]])),this.add(new Ke([8.4,2.02,21.12],[9.4,2.02,21.12],{faceUser:!0}))}createLandMarkers(){const e=new yn().scale(.05,.2,.025).translate(0,.1,0),t=new it({color:"#00cccc"});for(let n=0;n<4;n++){const i=new Re(e,t);i.position.set(Je[n].x,Je[n].y,Je[n].z),this.add(i)}}createRetainingWallBack(){this.add(new Ht(10,3.5,{thickness:1}).translateY(Je[0].y-3.5).translateZ(.5).rotateY(.18)),this.add(new Ht(2,3.5,{thickness:1}).translateY(Je[0].y-3.5).translateX(.5).translateZ(.83).rotateY(_n)),this.add(new Ht(10,1.8,{thickness:.2}).translateY(Je[0].y).translateZ(.1).rotateY(.18)),this.add(new Eo(10).translateY(Je[0].y+1.8).translateZ(.1).rotateY(.18))}createLowerDeck(){this.add(new gn(9.4,3,.4).translateZ(20).translateY(2)),this.add(new tr([[4.3,0],[9.64,0],[9.64,1],[5,7.93],[4.3,7.93]],3).translateZ(22).translateY(2)),this.add(new tr([[5.5,0],[8.7,0],[5.5,4.6]],.1,new yt({map:Xa("images/grass.jpg")})).translateZ(23).translateY(2.01))}createUpperDeck(){this.add(new gn(9.6,2,.4).translateZ(6).translateY(5)),this.add(new Ke([.5,.05,6],[.5,.05,8],{faceUser:!0}).translateY(5));{const e=new tr([[0,0],[9.6,-1.78],[9.6,5],[0,5]],.4),t=Xa("images/pebbles.webp");e.material=new yt({map:t}),this.add(e.translateZ(1).translateY(5))}this.add(new gn(1.1,9,.4).translateZ(8).translateX(8.3).translateY(5))}}function Xa(s){const t=new Bc().load(s);return t.colorSpace=wt,t.wrapS=li,t.wrapT=li,t}console.log(Je);const Fd=new eS;Fd.position.set(-5,0,-19);const Bd=50,tS=[0,20,50],nS=1.75,si=50;var nt=new Ie;const iS=[3.5,0,20];var kt="birdseye";let to,kn,ri,On,Dt,At,no,io,yc,Mu,so,ro,oo,ao,Ro,js,Ks;const kd=1,zd=-1,Su=[{name:"street",y:0},{name:"basement",y:2},{name:"main",y:5}];function Co(s){let e=1e4,t=-1;Su.forEach((n,i)=>{const r=s>0?n.y-nt.position.y:nt.position.y-n.y;r>0&&r<e&&(e=r,t=i)}),t>=0&&(nt.position.y=Su[t].y)}let Hd;const sS=new Le(4473924),cn=new N,Tu=new N,Mc=new Vc;Mc.layers.set(Gc);const Sc=new ie;function rS(){const s=kt==="birdseye"?ri:kt==="firstperson"?kn:null;if(s){Mc.setFromCamera(Sc,s);const e=Mc.intersectObjects(Dt.children),t=e.length?e[0].object:null;Rd(t)}}function oS(){to=document.getElementById("divThree"),Dt=new Tx,Hd=new Bc().load("./images/background.png",i=>{i.mapping=go,i.colorSpace=wt,i.magFilter=Ot,Dt.background=i}),ri=new Ut(Bd,window.innerWidth/window.innerHeight,1,200),ri.position.fromArray(Ri("birdseyecamera.position",()=>ri.position.toArray())||tS),js=new Md(ri,to),js.target.fromArray(Ri("birdseyecamera.target",()=>js.target.toArray())||[0,0,0]),js.update();const e=window.innerWidth/window.innerHeight;On=new Ho(si*e/-2,si*e/2,si/2,si/-2,.1,100),On.position.fromArray([0,50,0]),Ks=new Vv(On,to),Ks.enableRotate=!1,Ks.update(),Ks.enabled=!1,Dt.add(Fd);{const o=new ky(12,42,16711680,13421772);Dt.add(o)}Dt.add(new Tv(12369084,10855845,3));const t=new ho(16777215,3);t.position.set(0,6,4),Dt.add(t);{const i=new ho(16777215,.5);i.position.set(-10,0,0),Dt.add(i)}{const i=new ho(16777215,.5);i.position.set(10,0,0),Dt.add(i)}At=new Sx({antialias:!0}),At.setPixelRatio(window.devicePixelRatio),At.setSize(window.innerWidth,window.innerHeight),At.xr.enabled=!0,to.appendChild(At.domElement),hS(),uS();function n(i){Sc.x=i.clientX/window.innerWidth*2-1,Sc.y=-(i.clientY/window.innerHeight)*2+1}window.addEventListener("pointermove",n),window.addEventListener("pointerdown",()=>Cd(Xc())),dS(),window.addEventListener("resize",fS)}function aS(){zy(!0),localStorage.clear(),window.location.reload()}const Tc=document.getElementById("bMainMenu"),cS=document.getElementById("divOverlay");function lS(){const s=Tc.querySelector(".hamburger"),e=Tc.querySelector(".close"),t=cS.classList,n=t.contains("collapsed");n?t.remove("collapsed"):t.add("collapsed"),e.style.display=n?"":"none",s.style.display=n?"none":""}function hS(){const s=document.getElementById("selView");Tc.onclick=lS,document.getElementById("bClear").onclick=aS,s.onchange=n=>{t(s.value),s.blur()},kt=Ri("cameraview",()=>kt)||"birdseye",console.log(kt),s.value=kt;function e(){console.log("UPDATE MODE"),console.log(kt);const n=kt==="top";switch(Ht.view2D=n,Gt.view2D=n,Un.view2D=n,js.enabled=kt==="birdseye",Ks.enabled=kt==="top",kt){case"top":Dt.background=sS;break;default:Dt.background=Hd;break}}function t(n){kt!==n&&(kt=n,e())}e()}const In={};function uS(){function s(t){switch(In[t.key]=!0,t.key){case"PageUp":Co(kd);break;case"PageDown":Co(zd);break}}function e(t){In[t.key]=!1}window.addEventListener("keydown",s),window.addEventListener("keyup",e)}function dS(){document.body.appendChild(Ms.createButton(At)),Dt.add(nt),nt.position.fromArray(Ri("avatar.position",()=>nt.position.toArray())||iS),nt.rotation.y=Ri("avatar.rotation",()=>nt.rotation.y||0),console.log("Rot = "+nt.rotation.y),kn=new Ut(Bd,window.innerWidth/window.innerHeight,.1,50),kn.position.y=nS,nt.add(kn),so=At.xr.getController(0),nt.add(so),ro=At.xr.getController(1),nt.add(ro);const s=(n,i)=>{const r=i.data.handedness;r==="right"?(Mu=n,Mu.add(Ro)):r==="left"&&(yc=n)};so.addEventListener("connected",n=>s(so,n)),ro.addEventListener("connected",n=>s(ro,n));const e=new Dy,t=new By;oo=At.xr.getControllerGrip(0),oo.add(e.createControllerModel(oo)),nt.add(oo),no=At.xr.getHand(0),no.add(t.createHandModel(no)),nt.add(no),ao=At.xr.getControllerGrip(1),ao.add(e.createControllerModel(ao)),nt.add(ao),io=At.xr.getHand(1),io.add(t.createHandModel(io)),nt.add(io),Ro=new pM}function fS(){const s=window.innerWidth/window.innerHeight;ri.aspect=s,ri.updateProjectionMatrix(),kn.aspect=s,kn.updateProjectionMatrix(),On.left=si*s/-2,On.right=si*s/2,On.top=si/2,On.bottom=-si/2,On.updateProjectionMatrix(),At.setSize(window.innerWidth,window.innerHeight)}function pS(){At.setAnimationLoop(gS)}const mS=new Pv;let Xs=0,Eu=!1,bu=!1,wu=!1,Ya=!1;const Au=new N;function gS(){const s=mS.getDelta();switch(Ss.tick(s),kt){case"firstperson":At.render(Dt,kn);break;case"birdseye":At.render(Dt,ri);break;case"top":At.render(Dt,On);break}kt==="firstperson"&&_S(s);const e=At.xr.getSession();if(e){const t=Ro.update(Dt,Au);for(const n of e.inputSources)if(n&&n.gamepad){const i=n.gamepad.axes,r=n.gamepad.buttons,o=r[0].pressed,a=i[3],c=i[2],l=Ya&&a<=-.3||a<-.7;if(n.handedness==="right"){!wu&&o&&Cd(Xc()),wu=o,Ya&&!l&&t&&nt.position.copy(Au),Ya=l;const h=l?dc.Teleport:dc.Interact;Ro.setMode(h),xS(c);{const u=r[5].pressed;u&&!Eu&&Co(kd),Eu=u;const d=r[4].pressed;d&&!bu&&Co(zd),bu=d}}else yc&&(yc.getWorldDirection(cn),cn.y=0,Tu.set(cn.z,0,-cn.x),Math.abs(a)>.1&&nt.position.add(cn.multiplyScalar(a*s)),Math.abs(c)>.1&&nt.position.add(Tu.multiplyScalar(c*s)))}}else rS()}function _S(s){const e=In.Shift?5:1;if(In.ArrowUp?In.Control?kn.rotateX(s*.5):(nt.getWorldDirection(cn),cn.y=0,nt.position.add(cn.multiplyScalar(-s*e))):In.ArrowDown&&(In.Control?kn.rotateX(-s*.5):(nt.getWorldDirection(cn),cn.y=0,nt.position.add(cn.multiplyScalar(s*e)))),In.ArrowLeft){let t=nt.rotation.y+s;t>Math.PI&&(t-=2*Math.PI),nt.rotation.y=t}else if(In.ArrowRight){let t=nt.rotation.y-s;t<=-Math.PI&&(t+=2*Math.PI),nt.rotation.y=t}}function xS(s){s<-.7?Xs!==-1&&(Xs=-1,nt.rotateY(Math.PI/4)):s>.7?Xs!==1&&(Xs=1,nt.rotateY(-Math.PI/4)):Math.abs(s)<.3&&(Xs=0)}oS();pS();
