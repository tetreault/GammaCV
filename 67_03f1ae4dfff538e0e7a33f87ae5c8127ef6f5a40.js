webpackJsonp([67],{527:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(81);t.default={init:function(){return{line:new a.d}},op:function(e){var t=e;return t=a.t(t),t=a.q(t,2),t=a.s(t,3,3),t=a.C(t),t=a.h(t,.25,.75),a.A(t)},tick:function(e,t){var s=t.canvas,n=t.input,r=t.session,o=t.operation,i=t.output,p=t.context;a.l(s,n),r.runOp(o,e,i);for(var u=0;u<10;u+=1){for(var c=-1/0,l=[],f=[],v=0;v<i.size/4;v+=1){var h=~~(v/i.shape[0]),d=v-h*i.shape[0],g=i.get(h,d,0);g>c&&(c=g,f[0]=i.get(h,d,1),f[1]=i.get(h,d,2),l[0]=h,l[1]=d)}var b=Math.max(n.shape[0],n.shape[1]);p.line.fromParallelCoords(2*f[0],2*f[1],n.shape[1],n.shape[0],b,b/2),a.i(s,p.line,"rgba(0, 255, 0, 1.0)"),i.set(l[0],l[1],0,0),i.set(l[0]-1,l[1]-1,0,0),i.set(l[0],l[1]-1,0,0),i.set(l[0]+1,l[1]-1,0,0),i.set(l[0]+1,l[1],0,0),i.set(l[0]+1,l[1]+1,0,0),i.set(l[0],l[1]+1,0,0),i.set(l[0]-1,l[1]+1,0,0),i.set(l[0]-1,l[1],0,0)}},params:{}}}});