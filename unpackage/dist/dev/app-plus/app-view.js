var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181221_syb_scopedata*/window.__wcc_version__='v0.5vv_20181221_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6c14a000-default-6c14a000-0-+index'])
Z([3,'_view 6c14a000 all'])
Z([3,'handleProxy'])
Z([3,'_image 6c14a000 img'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'6c14a000-0-'],[[7],[3,'index']]])
Z([3,'../../static/img/body.png'])
Z(z[2])
Z([3,'_view 6c14a000'])
Z(z[4])
Z([[2,'+'],[1,'6c14a000-1-'],[[7],[3,'index']]])
Z([[2,'<'],[[6],[[7],[3,'test']],[3,'Integral']],[1,0]])
Z([3,'_view 6c14a000 jf1'])
Z([a,[[6],[[7],[3,'test']],[3,'Integral']]])
Z([3,'_view 6c14a000 jf2'])
Z([a,[3,'+'],z[13][1]])
Z([3,'_view 6c14a000 user'])
Z([a,[[6],[[7],[3,'test']],[3,'AccountName']]])
Z([3,'_view 6c14a000 roomid'])
Z([a,[3,'房号：'],[[6],[[7],[3,'test']],[3,'RoomID']]])
Z(z[2])
Z([3,'_view 6c14a000 good'])
Z(z[4])
Z([[2,'+'],[1,'6c14a000-2-'],[[7],[3,'index']]])
Z(z[8])
Z([a,[3,'开始：'],[[6],[[7],[3,'test']],[3,'CreateTime']]])
Z(z[8])
Z([a,[3,'结束：'],[[6],[[7],[3,'test']],[3,'EndTime']]])
Z(z[11])
Z(z[2])
Z([3,'_view 6c14a000 failure'])
Z(z[4])
Z([[2,'+'],[1,'6c14a000-4-'],[[7],[3,'index']]])
Z([3,'失败'])
Z(z[2])
Z([3,'_view 6c14a000 successful'])
Z(z[4])
Z([[2,'+'],[1,'6c14a000-3-'],[[7],[3,'index']]])
Z([3,'胜利'])
Z(z[2])
Z([3,'_view 6c14a000 fuhao'])
Z(z[4])
Z([[2,'+'],[1,'6c14a000-5-'],[[7],[3,'index']]])
Z([3,'\x3e'])
Z([3,'6c14a000-default-6c14a000-1'])
Z([3,'index'])
Z([3,'test'])
Z([[7],[3,'ArrayTest']])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'6c14a000-0-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'6c14a000-default-6c14a000-0-+index']]])
Z([3,'a795c5b0'])
Z([3,'_view 6c14a000 list'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'58d47a94'])
Z([3,'_view 58d47a94 cmd-result-page'])
Z([3,'_image 58d47a94 cmd-result-page-image'])
Z([3,'aspectFit'])
Z([[7],[3,'setSrc']])
Z([3,'_view 58d47a94 cmd-result-page-text'])
Z([a,[[7],[3,'setText']]])
Z([3,'_view 58d47a94 cmd-result-page-subtext'])
Z([a,[[7],[3,'setSubText']]])
Z([[6],[[7],[3,'buttons']],[3,'length']])
Z([3,'_view 58d47a94 cmd-result-page-buttons'])
Z([3,'index'])
Z([3,'button'])
Z([[7],[3,'buttons']])
Z(z[11])
Z([3,'handleProxy'])
Z([3,'_button 58d47a94'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'58d47a94-0-'],[[7],[3,'index']]])
Z([[7],[3,'index']])
Z([3,'true'])
Z([3,'mini'])
Z([[6],[[7],[3,'button']],[3,'type']])
Z([a,[[6],[[7],[3,'button']],[3,'text']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a795c5b0'])
Z([a,[3,'_view a795c5b0 '],[[7],[3,'setCollapseCellClass']]])
Z([[2,'?:'],[[2,'||'],[[2,'==='],[[7],[3,'disabled']],[1,true]],[[2,'==='],[[7],[3,'disabled']],[1,'true']]],[1,''],[1,'uni-collapse-cell--hover']])
Z([3,'default'])
Z([3,'handleProxy'])
Z([3,'_view a795c5b0 uni-collapse-cell__title'])
Z([[7],[3,'$k']])
Z([1,'a795c5b0-0'])
Z([3,'_view a795c5b0 iconfont uni-collapse-cell__title-inner'])
Z([3,'_view a795c5b0 uni-collapse-cell__title-text'])
Z([3,'_image a795c5b0 icon'])
Z([[7],[3,'icon']])
Z([a,[[7],[3,'title']]])
Z([a,[3,'_view a795c5b0 uni-collapse-cell__title-arrow '],[[7],[3,'setActive']]])
Z([3,'#666'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'a795c5b0-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'448d1f7a'])
Z([3,'20'])
Z([3,'arrowright'])
Z([a,[3,'_view a795c5b0 uni-collapse-cell__content '],[[2,'?:'],[[2,'==='],[[7],[3,'animation']],[1,'outer']],[1,'uni-collapse-cell--animation'],[1,'']]])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'?:'],[[2,'||'],[[2,'==='],[[7],[3,'isOpen']],[1,'true']],[[2,'==='],[[7],[3,'isOpen']],[1,true]]],[[2,'+'],[[7],[3,'height']],[1,'px']],[1,'0px']]],[1,';']]])
Z([a,z[1][1],[[7],[3,'setContClass']]])
Z([[7],[3,'elId']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'b5f3b70c'])
Z([3,'_view b5f3b70c uni-collapse'])
Z([3,'default'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'448d1f7a'])
Z([3,'handleProxy'])
Z([a,[3,'_view 448d1f7a uni-icon '],[[4],[[5],[[2,'+'],[1,'uni-icon-'],[[7],[3,'type']]]]]])
Z([[7],[3,'$k']])
Z([1,'448d1f7a-0'])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']],[1,'font-size:']],[[7],[3,'fontSize']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'e5d1b474'])
Z([3,'_view e5d1b474'])
Z([3,'_view e5d1b474 index_view'])
Z([3,'_view e5d1b474 index_view2'])
Z([3,'_view e5d1b474 index_view3'])
Z([3,'_view e5d1b474 view1'])
Z([3,'_image e5d1b474 index_view4'])
Z([3,'../../static/logo.png'])
Z([3,'_view e5d1b474 textName'])
Z([a,[3,'用户:'],[[6],[[7],[3,'user']],[3,'AccountName']]])
Z(z[8])
Z([a,[3,'积分:'],[[6],[[7],[3,'user']],[3,'Integral']]])
Z(z[1])
Z([3,'_ul e5d1b474'])
Z([3,'index0'])
Z([3,'url'])
Z([[7],[3,'Imag']])
Z([3,'_li e5d1b474 getWidth'])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'Height']],[1,'upx']]],[1,';']]])
Z([3,'handleProxy'])
Z([3,'_img e5d1b474 am-thumbnail'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'e5d1b474-0-'],[[7],[3,'index0']]])
Z([[6],[[7],[3,'url']],[3,'imgs']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'e5d1b474'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'d70365c0'])
Z([3,'_view d70365c0 Parentlevel'])
Z([3,'_view d70365c0 Headportrait'])
Z([3,'_image d70365c0 load_view'])
Z([3,'../../static/img/ut2.png'])
Z([3,'_view d70365c0 Waitfor'])
Z([3,'等待对手加入...'])
Z([3,'_view d70365c0 Option'])
Z([3,'_view d70365c0 P_hostile'])
Z([3,'_view d70365c0'])
Z([3,'_view d70365c0 P_GameplayerA'])
Z([3,'_view d70365c0 P_GameplayerVS'])
Z([3,'_span d70365c0 P_span'])
Z([3,'VS'])
Z([3,'_view d70365c0 P_GameplayerB'])
Z([3,'_span d70365c0 P_Gsapn'])
Z([3,'?'])
Z([3,'_view d70365c0 userInfo'])
Z([3,'_view d70365c0 user'])
Z([3,'_view d70365c0 userName'])
Z([3,'用户名:'])
Z([3,'_text d70365c0'])
Z([a,[[6],[[7],[3,'user']],[3,'AccountName']]])
Z([3,'_view d70365c0 userIntegral'])
Z([3,'积分:'])
Z(z[21])
Z([a,[[6],[[7],[3,'user']],[3,'Integral']]])
Z([3,'handleProxy'])
Z([3,'_button d70365c0 load_but'])
Z([[7],[3,'$k']])
Z([1,'d70365c0-0'])
Z([3,'准备游戏'])
Z(z[27])
Z(z[28])
Z(z[29])
Z([1,'d70365c0-1'])
Z([3,'取消游戏'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'d70365c0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'e8e5b498'])
Z([3,'_view e8e5b498 content'])
Z([3,'_view e8e5b498'])
Z(z[2])
Z([3,'_text e8e5b498'])
Z([3,'账号1:'])
Z(z[4])
Z([a,[[7],[3,'test_loginId1']]])
Z(z[4])
Z([3,'密码:'])
Z(z[4])
Z([a,[[7],[3,'test_pwd1']]])
Z([3,'handleProxy'])
Z(z[4])
Z([[7],[3,'$k']])
Z([1,'e8e5b498-0'])
Z([3,'《使用账号1》'])
Z(z[2])
Z(z[4])
Z([3,'账号2:'])
Z(z[4])
Z([a,[[7],[3,'test_loginId2']]])
Z(z[4])
Z(z[9])
Z(z[4])
Z([a,[[7],[3,'test_pwd2']]])
Z(z[12])
Z(z[4])
Z(z[14])
Z([1,'e8e5b498-1'])
Z([3,'《使用账号2》'])
Z([3,'_image e8e5b498 logo'])
Z([3,'/static/logo.png'])
Z(z[2])
Z([3,'_text e8e5b498 title'])
Z([3,'color: #ECECEC;'])
Z([a,[[7],[3,'title']]])
Z([3,'_view e8e5b498 content_view1'])
Z(z[12])
Z([3,'_input e8e5b498 content_view2'])
Z(z[14])
Z([1,'e8e5b498-2'])
Z([3,'9'])
Z([3,'  手机号  用户名  邮箱'])
Z([3,'text'])
Z([[6],[[7],[3,'user']],[3,'accountName']])
Z(z[12])
Z([3,'_input e8e5b498 content_view3'])
Z(z[14])
Z([1,'e8e5b498-3'])
Z([3,'userpwd'])
Z([3,'12'])
Z([3,'  密码/请输入登录密码'])
Z([3,'password'])
Z([[6],[[7],[3,'user']],[3,'password']])
Z([3,'_view e8e5b498 content_view4'])
Z(z[12])
Z([3,'_button e8e5b498 content_but'])
Z(z[14])
Z([1,'e8e5b498-4'])
Z([3,'登陆'])
Z([3,'_view e8e5b498 content_view5'])
Z(z[12])
Z([3,'_text e8e5b498 content_text1'])
Z(z[14])
Z([1,'e8e5b498-5'])
Z([3,'注册新用户'])
Z([3,'_text e8e5b498 content_text2'])
Z([3,'忘记密码'])
Z([3,'_view e8e5b498 content_view6'])
Z([3,'_view e8e5b498 content_view7'])
Z([3,'_text e8e5b498 content_text3'])
Z([3,'第三方登录'])
Z([3,'_view e8e5b498 content_text8'])
Z(z[2])
Z([3,'flex: 1;'])
Z([3,'_image e8e5b498 content_img'])
Z([3,'../../static/img/qq.png'])
Z(z[2])
Z(z[75])
Z(z[76])
Z([3,'../../static/img/weixin.png'])
Z(z[2])
Z(z[75])
Z(z[76])
Z([3,'../../static/img/xinlang.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'e8e5b498'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'13f211e0'])
Z([3,'_view 13f211e0'])
Z([3,'box'])
Z([3,'_view 13f211e0 square'])
Z([3,'_view 13f211e0 R_ftext'])
Z([[2,'>'],[[6],[[6],[[7],[3,'getRecordsList']],[1,0]],[3,'Integral']],[[6],[[6],[[7],[3,'getRecordsList']],[1,1]],[3,'Integral']]])
Z([3,'_text 13f211e0 R_text'])
Z([a,[[7],[3,'ResultA']]])
Z(z[6])
Z([a,[[7],[3,'ResultB']]])
Z(z[1])
Z([3,'_table 13f211e0'])
Z([3,'_tr 13f211e0'])
Z([3,'_th 13f211e0'])
Z([3,'_view 13f211e0 R_ptr'])
Z([3,'玩家'])
Z(z[13])
Z(z[14])
Z([3,'结果'])
Z(z[13])
Z(z[14])
Z([3,'积分'])
Z([3,'index0'])
Z([3,'item'])
Z([[7],[3,'getRecordsList']])
Z(z[12])
Z(z[13])
Z([a,[[6],[[7],[3,'item']],[3,'AccountName']]])
Z(z[13])
Z(z[14])
Z([3,'_text 13f211e0'])
Z([3,'对:'])
Z(z[30])
Z([a,[[7],[3,'bingo']]])
Z(z[30])
Z([3,'题'])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'Integral']],[1,0]])
Z(z[13])
Z(z[30])
Z([3,'+'])
Z(z[30])
Z([a,[[6],[[7],[3,'item']],[3,'Integral']]])
Z(z[13])
Z(z[30])
Z(z[30])
Z([a,z[41][1]])
Z([3,'_view 13f211e0 R_vi'])
Z([3,'handleProxy'])
Z([3,'_view 13f211e0 R_via'])
Z([[7],[3,'$k']])
Z([1,'13f211e0-0'])
Z(z[30])
Z([3,'再来一局'])
Z(z[47])
Z(z[48])
Z(z[49])
Z([1,'13f211e0-1'])
Z(z[30])
Z([3,'重新匹配'])
Z(z[1])
Z([3,'clear: both;'])
Z(z[47])
Z([3,'_view 13f211e0 Close'])
Z(z[49])
Z([1,'13f211e0-2'])
Z(z[30])
Z([3,'关闭'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'13f211e0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5c77e440'])
Z([3,'_view 5c77e440 play_view'])
Z([3,'_view 5c77e440 zhu'])
Z([3,'_view 5c77e440 play_view1'])
Z([a,[[2,'+'],[[7],[3,'TopIndex']],[1,1]],[3,' / '],[[6],[[7],[3,'getTopicList']],[3,'length']]])
Z([3,'_view 5c77e440 play_view2'])
Z([3,'_text 5c77e440 play_text'])
Z([3,'玩家'])
Z([3,'_view 5c77e440'])
Z([3,'_image 5c77e440 play_img'])
Z([3,'../../static/img/body.png'])
Z(z[8])
Z([3,'play_view3'])
Z([a,[3,'积分:'],[[6],[[7],[3,'userInfo']],[3,'Integral']]])
Z([3,'_view 5c77e440 play_view4'])
Z(z[8])
Z([3,'题目类型'])
Z(z[8])
Z([3,'_view 5c77e440 play_view5'])
Z([a,[[6],[[6],[[7],[3,'getTopicList']],[[7],[3,'TopIndex']]],[3,'GenreName']]])
Z([3,'_view 5c77e440 play_view6'])
Z([3,'_label 5c77e440 play_view7'])
Z([a,[[7],[3,'count']]])
Z([3,'_view 5c77e440 play_view8'])
Z(z[8])
Z([3,'问题：'])
Z([3,'_view 5c77e440 play_view9'])
Z([a,[[6],[[6],[[7],[3,'getTopicList']],[[7],[3,'TopIndex']]],[3,'Topic']],[3,'\x3d？']])
Z([3,'_view 5c77e440 play_view10'])
Z(z[8])
Z([3,'答案：'])
Z([3,'handleProxy'])
Z([3,'_input 5c77e440'])
Z([[7],[3,'$k']])
Z([1,'5c77e440-0'])
Z([3,'输入答案'])
Z([3,'border-bottom: 10rpx;'])
Z([3,'text'])
Z([[7],[3,'answer']])
Z(z[31])
Z([3,'_button 5c77e440 bb1'])
Z(z[33])
Z([1,'5c77e440-1'])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'display:'],[[7],[3,'forbid']]],[1,';']]])
Z([3,'下一题'])
Z(z[31])
Z([3,'_button 5c77e440'])
Z(z[33])
Z([1,'5c77e440-2'])
Z([3,'margin: 50rpx;'])
Z([3,'结束游戏'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5c77e440'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6c14a000'])
Z([3,'_view 6c14a000'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6c14a000-1']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'6c14a000-default-6c14a000-1']]])
Z([3,'b5f3b70c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6c14a000'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'122ec440'])
Z([3,'_view 122ec440 Register'])
Z([3,'_view 122ec440 R_from'])
Z([3,'_view 122ec440'])
Z([3,'_table 122ec440'])
Z([3,'_tr 122ec440'])
Z([3,'_th 122ec440'])
Z([3,'_text 122ec440'])
Z([3,'账号：'])
Z(z[6])
Z([3,'handleProxy'])
Z([3,'_input 122ec440 Register_input'])
Z([[7],[3,'$k']])
Z([1,'122ec440-0'])
Z([3,'9'])
Z([3,'账号'])
Z([3,'text'])
Z([[6],[[7],[3,'user']],[3,'AccountName']])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'密码：'])
Z(z[6])
Z(z[10])
Z(z[11])
Z(z[12])
Z([1,'122ec440-1'])
Z(z[14])
Z([3,'密码'])
Z([3,'password'])
Z([[6],[[7],[3,'user']],[3,'UserPassWord']])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'邮箱：'])
Z(z[6])
Z(z[10])
Z(z[11])
Z(z[12])
Z([1,'122ec440-2'])
Z(z[14])
Z([3,'邮箱'])
Z(z[16])
Z([[6],[[7],[3,'user']],[3,'mailbox']])
Z([3,'_view 122ec440 R_register'])
Z(z[10])
Z([3,'_button 122ec440'])
Z(z[12])
Z([1,'122ec440-3'])
Z([3,'btnadd'])
Z([3,'primary'])
Z([3,'注册'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'122ec440'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'dd80a250'])
Z([3,'_view dd80a250'])
Z([3,'_view dd80a250 topset'])
Z(z[1])
Z([3,'查询:'])
Z(z[1])
Z([3,'handleProxy'])
Z([3,'_input dd80a250'])
Z([[7],[3,'$k']])
Z([1,'dd80a250-0'])
Z([3,'请输入房号'])
Z([3,'text'])
Z([[7],[3,'roomid']])
Z(z[6])
Z([3,'_button dd80a250'])
Z(z[8])
Z([1,'dd80a250-1'])
Z([3,'primary'])
Z([3,'查询'])
Z([3,'_view dd80a250 list'])
Z(z[1])
Z([3,'房间纪录如下：'])
Z(z[1])
Z([3,'index0'])
Z([3,'test'])
Z([[7],[3,'ArrayTest']])
Z(z[1])
Z([3,'_view dd80a250 all'])
Z([3,'_image dd80a250 img'])
Z([3,'../../static/img/body.png'])
Z(z[1])
Z([[2,'<'],[[6],[[7],[3,'test']],[3,'Integral']],[1,0]])
Z([3,'_view dd80a250 jf1'])
Z([a,[[6],[[7],[3,'test']],[3,'Integral']]])
Z([3,'_view dd80a250 jf2'])
Z([a,[3,'+'],z[33][1]])
Z([3,'_view dd80a250 user'])
Z([a,[[6],[[7],[3,'test']],[3,'AccountName']]])
Z([3,'_view dd80a250 roomid'])
Z([a,[3,'房号：'],[[6],[[7],[3,'test']],[3,'RoomID']]])
Z([3,'_view dd80a250 good'])
Z(z[1])
Z([a,[3,'开始：'],[[6],[[7],[3,'test']],[3,'CreateTime']]])
Z(z[1])
Z([a,[3,'结束：'],[[6],[[7],[3,'test']],[3,'EndTime']]])
Z(z[31])
Z([3,'_view dd80a250 failure'])
Z([3,'失败'])
Z([3,'_view dd80a250 successful'])
Z([3,'胜利'])
Z([3,'_view dd80a250 fuhao'])
Z([3,'\x3e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'dd80a250'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'55ebd440'])
Z([3,'_view 55ebd440 text-font'])
Z([3,'_view 55ebd440 list-content'])
Z([3,'_view 55ebd440 list'])
Z([[7],[3,'user']])
Z([3,'_view 55ebd440 li noborder'])
Z([3,'_image 55ebd440 icon'])
Z([3,'../../static/logo.png'])
Z([3,'_view 55ebd440 textName'])
Z([3,'用户名：'])
Z([3,'_text 55ebd440'])
Z([a,[[6],[[7],[3,'user']],[3,'AccountName']]])
Z(z[8])
Z([3,'编号：'])
Z(z[10])
Z([a,[[6],[[7],[3,'user']],[3,'ID']]])
Z(z[5])
Z([3,'_navigator 55ebd440'])
Z([3,'../login/login'])
Z([3,'你还没登陆，请去登陆'])
Z([3,'_view 55ebd440 user-data-bar'])
Z([3,'_view 55ebd440 data-bar'])
Z([3,'积分:'])
Z([3,'_text 55ebd440 data-bar-num'])
Z([a,[[6],[[7],[3,'user']],[3,'Integral']]])
Z(z[21])
Z([3,'现金:'])
Z(z[23])
Z([a,[[7],[3,'money']]])
Z(z[21])
Z([3,'排名:'])
Z(z[23])
Z([a,[[7],[3,'Fabulous']]])
Z(z[2])
Z([3,'margin-top: 15rpx;'])
Z(z[3])
Z([3,'_view 55ebd440 li'])
Z(z[6])
Z(z[7])
Z([3,'_view 55ebd440 text'])
Z(z[17])
Z([3,'../record/record'])
Z([3,'游戏记录'])
Z(z[3])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[39])
Z([3,'进入游戏'])
Z(z[3])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'handleProxy'])
Z(z[39])
Z([[7],[3,'$k']])
Z([1,'55ebd440-0'])
Z([3,'根据ID'])
Z(z[3])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[53])
Z(z[39])
Z(z[55])
Z([1,'55ebd440-1'])
Z([3,'根据Token'])
Z(z[3])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[53])
Z(z[39])
Z(z[55])
Z([1,'55ebd440-2'])
Z([3,'模拟用户答题'])
Z(z[3])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[53])
Z(z[39])
Z(z[55])
Z([1,'55ebd440-3'])
Z([3,'修改积分'])
Z(z[3])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[53])
Z(z[39])
Z(z[55])
Z([1,'55ebd440-4'])
Z([3,'退出'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'55ebd440'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','/components/uni-collapse/uni-collapse.vue.wxml','/components/uni-collapse-item/uni-collapse-item.vue.wxml','./components/cmd-result-page/cmd-result-page.vue.wxml','./components/uni-collapse-item/uni-collapse-item.vue.wxml','/components/uni-icon/uni-icon.vue.wxml','/common/slots.wxml','./components/uni-collapse/uni-collapse.vue.wxml','./components/uni-icon/uni-icon.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml','./pages/load/load.vue.wxml','./pages/load/load.wxml','./load.vue.wxml','./pages/login/login.vue.wxml','./pages/login/login.wxml','./login.vue.wxml','./pages/over/over.vue.wxml','./pages/over/over.wxml','./over.vue.wxml','./pages/play/play.vue.wxml','./pages/play/play.wxml','./play.vue.wxml','./pages/record/record.vue.wxml','./pages/record/record.wxml','./record.vue.wxml','./pages/register/register.vue.wxml','./pages/register/register.wxml','./register.vue.wxml','./pages/roomGet/roomGet.vue.wxml','./pages/roomGet/roomGet.wxml','./roomGet.vue.wxml','./pages/user/user.vue.wxml','./pages/user/user.wxml','./user.vue.wxml'];d_[x[0]]={}
d_[x[0]]["6c14a000-default-6c14a000-0-+index"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':6c14a000-default-6c14a000-0-+index'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
cs.push("./common/slots.wxml:view:4:54")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./common/slots.wxml:image:4:87")
var oD=_mz(z,'image',['bindtap',2,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(oB,oD)
cs.push("./common/slots.wxml:view:4:244")
var fE=_mz(z,'view',['bindtap',7,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,11,e,s,gg)){cF.wxVkey=1
cs.push("./common/slots.wxml:view:4:355")
cs.push("./common/slots.wxml:view:4:355")
var hG=_n('view')
_rz(z,hG,'class',12,e,s,gg)
var oH=_oz(z,13,e,s,gg)
_(hG,oH)
cs.pop()
_(cF,hG)
cs.pop()
}
else{cF.wxVkey=2
cs.push("./common/slots.wxml:view:4:442")
cs.push("./common/slots.wxml:view:4:442")
var cI=_n('view')
_rz(z,cI,'class',14,e,s,gg)
var oJ=_oz(z,15,e,s,gg)
_(cI,oJ)
cs.pop()
_(cF,cI)
cs.pop()
}
cs.push("./common/slots.wxml:view:4:508")
var lK=_n('view')
_rz(z,lK,'class',16,e,s,gg)
var aL=_oz(z,17,e,s,gg)
_(lK,aL)
cs.pop()
_(fE,lK)
cF.wxXCkey=1
cs.pop()
_(oB,fE)
cs.push("./common/slots.wxml:view:4:576")
var tM=_n('view')
_rz(z,tM,'class',18,e,s,gg)
var eN=_oz(z,19,e,s,gg)
_(tM,eN)
cs.pop()
_(oB,tM)
cs.push("./common/slots.wxml:view:4:643")
var bO=_mz(z,'view',['bindtap',20,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./common/slots.wxml:view:4:759")
var oP=_n('view')
_rz(z,oP,'class',24,e,s,gg)
var xQ=_oz(z,25,e,s,gg)
_(oP,xQ)
cs.pop()
_(bO,oP)
cs.push("./common/slots.wxml:view:4:823")
var oR=_n('view')
_rz(z,oR,'class',26,e,s,gg)
var fS=_oz(z,27,e,s,gg)
_(oR,fS)
cs.pop()
_(bO,oR)
cs.pop()
_(oB,bO)
var xC=_v()
_(oB,xC)
if(_oz(z,28,e,s,gg)){xC.wxVkey=1
cs.push("./common/slots.wxml:view:4:891")
cs.push("./common/slots.wxml:view:4:891")
var cT=_mz(z,'view',['bindtap',29,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var hU=_oz(z,33,e,s,gg)
_(cT,hU)
cs.pop()
_(xC,cT)
cs.pop()
}
else{xC.wxVkey=2
cs.push("./common/slots.wxml:view:4:1053")
cs.push("./common/slots.wxml:view:4:1053")
var oV=_mz(z,'view',['bindtap',34,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var cW=_oz(z,38,e,s,gg)
_(oV,cW)
cs.pop()
_(xC,oV)
cs.pop()
}
cs.push("./common/slots.wxml:view:4:1196")
var oX=_mz(z,'view',['bindtap',39,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var lY=_oz(z,43,e,s,gg)
_(oX,lY)
cs.pop()
_(oB,oX)
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["6c14a000-default-6c14a000-1"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':6c14a000-default-6c14a000-1'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./common/slots.wxml:block:6:47")
var xC=function(fE,oD,cF,gg){
cs.push("./common/slots.wxml:block:6:47")
var oH=_v()
_(cF,oH)
cs.push("./common/slots.wxml:template:6:117")
var cI=_oz(z,49,fE,oD,gg)
var oJ=_gd(x[0],cI,e_,d_)
if(oJ){
var lK=_1z(z,48,fE,oD,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[0],6,246)
cs.pop()
cs.pop()
return cF
}
_wp('./common/slots.wxml:block:6:47: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
oB.wxXCkey=2
_2z(z,47,xC,e,s,gg,oB,'test','index','')
cs.pop()
cs.push("./common/slots.wxml:view:6:277")
var aL=_n('view')
_rz(z,aL,'class',50,e,s,gg)
cs.pop()
_(r,aL)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
_ai(oB,x[2],e_,x[0],2,2)
oB.pop()
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1],x[2]],ic:[]}
d_[x[3]]={}
d_[x[3]]["58d47a94"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[3]+':58d47a94'
r.wxVkey=b
gg.f=$gdc(f_["./components/cmd-result-page/cmd-result-page.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
cs.push("./components/cmd-result-page/cmd-result-page.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/cmd-result-page/cmd-result-page.vue.wxml:image:1:72")
var oD=_mz(z,'image',['class',2,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(oB,oD)
cs.push("./components/cmd-result-page/cmd-result-page.vue.wxml:view:1:167")
var fE=_n('view')
_rz(z,fE,'class',5,e,s,gg)
var cF=_oz(z,6,e,s,gg)
_(fE,cF)
cs.pop()
_(oB,fE)
cs.push("./components/cmd-result-page/cmd-result-page.vue.wxml:view:1:235")
var hG=_n('view')
_rz(z,hG,'class',7,e,s,gg)
var oH=_oz(z,8,e,s,gg)
_(hG,oH)
cs.pop()
_(oB,hG)
var xC=_v()
_(oB,xC)
if(_oz(z,9,e,s,gg)){xC.wxVkey=1
cs.push("./components/cmd-result-page/cmd-result-page.vue.wxml:view:1:309")
cs.push("./components/cmd-result-page/cmd-result-page.vue.wxml:view:1:309")
var cI=_n('view')
_rz(z,cI,'class',10,e,s,gg)
var oJ=_v()
_(cI,oJ)
cs.push("./components/cmd-result-page/cmd-result-page.vue.wxml:button:1:389")
var lK=function(tM,aL,eN,gg){
cs.push("./components/cmd-result-page/cmd-result-page.vue.wxml:button:1:389")
var oP=_mz(z,'button',['bindtap',15,'class',1,'data-comkey',2,'data-eventid',3,'key',4,'plain',5,'size',6,'type',7],[],tM,aL,gg)
var xQ=_oz(z,23,tM,aL,gg)
_(oP,xQ)
cs.pop()
_(eN,oP)
return eN
}
oJ.wxXCkey=2
_2z(z,13,lK,e,s,gg,oJ,'button','index','index')
cs.pop()
cs.pop()
_(xC,cI)
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[3]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
d_[x[4]]["a795c5b0"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[4]+':a795c5b0'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-collapse-item/uni-collapse-item.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
cs.push("./components/uni-collapse-item/uni-collapse-item.vue.wxml:view:1:117")
var oB=_mz(z,'view',['class',1,'hoverClass',1],[],e,s,gg)
cs.push("./components/uni-collapse-item/uni-collapse-item.vue.wxml:view:1:300")
var xC=_mz(z,'view',['bindtap',4,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/uni-collapse-item/uni-collapse-item.vue.wxml:view:1:429")
var oD=_n('view')
_rz(z,oD,'class',8,e,s,gg)
cs.push("./components/uni-collapse-item/uni-collapse-item.vue.wxml:view:1:498")
var fE=_n('view')
_rz(z,fE,'class',9,e,s,gg)
cs.push("./components/uni-collapse-item/uni-collapse-item.vue.wxml:image:1:557")
var cF=_mz(z,'image',['class',10,'src',1],[],e,s,gg)
cs.pop()
_(fE,cF)
var hG=_oz(z,12,e,s,gg)
_(fE,hG)
cs.pop()
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./components/uni-collapse-item/uni-collapse-item.vue.wxml:view:1:639")
var oH=_n('view')
_rz(z,oH,'class',13,e,s,gg)
var cI=_v()
_(oH,cI)
cs.push("./components/uni-collapse-item/uni-collapse-item.vue.wxml:template:1:713")
var oJ=_oz(z,16,e,s,gg)
var lK=_gd(x[4],oJ,e_,d_)
if(lK){
var aL=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[4],1,825)
cs.pop()
cs.pop()
_(xC,oH)
cs.pop()
_(oB,xC)
cs.push("./components/uni-collapse-item/uni-collapse-item.vue.wxml:view:1:862")
var tM=_mz(z,'view',['class',19,'style',1],[],e,s,gg)
cs.push("./components/uni-collapse-item/uni-collapse-item.vue.wxml:view:1:1082")
var eN=_mz(z,'view',['class',21,'id',1],[],e,s,gg)
var bO=_v()
_(eN,bO)
cs.push("./components/uni-collapse-item/uni-collapse-item.vue.wxml:template:1:1142")
var oP=_oz(z,24,e,s,gg)
var xQ=_gd(x[4],oP,e_,d_)
if(xQ){
var oR=_1z(z,23,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[4],1,1200)
cs.pop()
cs.pop()
_(tM,eN)
cs.pop()
_(oB,tM)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[4]]["default"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[4]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-collapse-item/uni-collapse-item.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=e_[x[4]].i
_ai(fE,x[5],e_,x[4],1,1)
_ai(fE,x[6],e_,x[4],1,56)
fE.pop()
fE.pop()
return r
}
e_[x[4]]={f:m2,j:[],i:[],ti:[x[5],x[6]],ic:[]}
d_[x[7]]={}
d_[x[7]]["b5f3b70c"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[7]+':b5f3b70c'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-collapse/uni-collapse.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
cs.push("./components/uni-collapse/uni-collapse.vue.wxml:view:1:62")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./components/uni-collapse/uni-collapse.vue.wxml:template:1:140")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[7],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[7],1,198)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[7]]["default"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[7]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-collapse/uni-collapse.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var hG=e_[x[7]].i
_ai(hG,x[6],e_,x[7],1,1)
hG.pop()
return r
}
e_[x[7]]={f:m3,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[8]]={}
d_[x[8]]["448d1f7a"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[8]+':448d1f7a'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-icon/uni-icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
cs.push("./components/uni-icon/uni-icon.vue.wxml:view:1:27")
var oB=_mz(z,'view',['bindtap',1,'class',1,'data-comkey',2,'data-eventid',3,'style',4],[],e,s,gg)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[8]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
d_[x[9]]["e5d1b474"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[9]+':e5d1b474'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:56")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:96")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:137")
var fE=_n('view')
_rz(z,fE,'class',4,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:178")
var cF=_n('view')
_rz(z,cF,'class',5,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:213")
var hG=_mz(z,'image',['class',6,'src',1],[],e,s,gg)
cs.pop()
_(cF,hG)
cs.push("./pages/index/index.vue.wxml:view:1:292")
var oH=_n('view')
_rz(z,oH,'class',8,e,s,gg)
var cI=_oz(z,9,e,s,gg)
_(oH,cI)
cs.pop()
_(cF,oH)
cs.push("./pages/index/index.vue.wxml:view:1:364")
var oJ=_n('view')
_rz(z,oJ,'class',10,e,s,gg)
var lK=_oz(z,11,e,s,gg)
_(oJ,lK)
cs.pop()
_(cF,oJ)
cs.pop()
_(fE,cF)
cs.pop()
_(oD,fE)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./pages/index/index.vue.wxml:view:1:461")
var aL=_n('view')
_rz(z,aL,'class',12,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:490")
var tM=_n('view')
_rz(z,tM,'class',13,e,s,gg)
var eN=_v()
_(tM,eN)
cs.push("./pages/index/index.vue.wxml:view:1:517")
var bO=function(xQ,oP,oR,gg){
cs.push("./pages/index/index.vue.wxml:view:1:517")
var cT=_mz(z,'view',['class',17,'style',1],[],xQ,oP,gg)
cs.push("./pages/index/index.vue.wxml:image:1:661")
var hU=_mz(z,'image',['bindtap',19,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],xQ,oP,gg)
cs.pop()
_(cT,hU)
cs.pop()
_(oR,cT)
return oR
}
_wp('./pages/index/index.vue.wxml:view:1:517: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
eN.wxXCkey=2
_2z(z,16,bO,e,s,gg,eN,'url','index0','')
cs.pop()
cs.pop()
_(aL,tM)
cs.pop()
_(oB,aL)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[9]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var lK=e_[x[10]].i
_ai(lK,x[11],e_,x[10],1,1)
var aL=_v()
_(r,aL)
cs.push("./pages/index/index.wxml:template:2:6")
var tM=_oz(z,1,e,s,gg)
var eN=_gd(x[10],tM,e_,d_)
if(eN){
var bO=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[10],2,18)
cs.pop()
lK.pop()
return r
}
e_[x[10]]={f:m6,j:[],i:[],ti:[x[11]],ic:[]}
d_[x[12]]={}
d_[x[12]]["d70365c0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[12]+':d70365c0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/load/load.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
cs.push("./pages/load/load.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/load/load.vue.wxml:view:1:68")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/load/load.vue.wxml:image:1:110")
var oD=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./pages/load/load.vue.wxml:view:1:197")
var fE=_n('view')
_rz(z,fE,'class',5,e,s,gg)
var cF=_oz(z,6,e,s,gg)
_(fE,cF)
cs.pop()
_(oB,fE)
cs.push("./pages/load/load.vue.wxml:view:1:262")
var hG=_n('view')
_rz(z,hG,'class',7,e,s,gg)
cs.push("./pages/load/load.vue.wxml:view:1:298")
var oH=_n('view')
_rz(z,oH,'class',8,e,s,gg)
cs.push("./pages/load/load.vue.wxml:view:1:337")
var cI=_n('view')
_rz(z,cI,'class',9,e,s,gg)
cs.push("./pages/load/load.vue.wxml:view:1:366")
var oJ=_n('view')
_rz(z,oJ,'class',10,e,s,gg)
cs.pop()
_(cI,oJ)
cs.pop()
_(oH,cI)
cs.push("./pages/load/load.vue.wxml:view:1:423")
var lK=_n('view')
_rz(z,lK,'class',11,e,s,gg)
cs.push("./pages/load/load.vue.wxml:label:1:467")
var aL=_n('label')
_rz(z,aL,'class',12,e,s,gg)
var tM=_oz(z,13,e,s,gg)
_(aL,tM)
cs.pop()
_(lK,aL)
cs.pop()
_(oH,lK)
cs.push("./pages/load/load.vue.wxml:view:1:521")
var eN=_n('view')
_rz(z,eN,'class',14,e,s,gg)
cs.push("./pages/load/load.vue.wxml:label:1:564")
var bO=_n('label')
_rz(z,bO,'class',15,e,s,gg)
var oP=_oz(z,16,e,s,gg)
_(bO,oP)
cs.pop()
_(eN,bO)
cs.pop()
_(oH,eN)
cs.pop()
_(hG,oH)
cs.push("./pages/load/load.vue.wxml:view:1:625")
var xQ=_n('view')
_rz(z,xQ,'class',17,e,s,gg)
cs.push("./pages/load/load.vue.wxml:view:1:663")
var oR=_n('view')
_rz(z,oR,'class',18,e,s,gg)
cs.push("./pages/load/load.vue.wxml:view:1:697")
var fS=_n('view')
_rz(z,fS,'class',19,e,s,gg)
var cT=_oz(z,20,e,s,gg)
_(fS,cT)
cs.push("./pages/load/load.vue.wxml:text:1:745")
var hU=_n('text')
_rz(z,hU,'class',21,e,s,gg)
var oV=_oz(z,22,e,s,gg)
_(hU,oV)
cs.pop()
_(fS,hU)
cs.pop()
_(oR,fS)
cs.push("./pages/load/load.vue.wxml:view:1:808")
var cW=_n('view')
_rz(z,cW,'class',23,e,s,gg)
var oX=_oz(z,24,e,s,gg)
_(cW,oX)
cs.push("./pages/load/load.vue.wxml:text:1:857")
var lY=_n('text')
_rz(z,lY,'class',25,e,s,gg)
var aZ=_oz(z,26,e,s,gg)
_(lY,aZ)
cs.pop()
_(cW,lY)
cs.pop()
_(oR,cW)
cs.pop()
_(xQ,oR)
cs.pop()
_(hG,xQ)
cs.pop()
_(oB,hG)
cs.push("./pages/load/load.vue.wxml:button:1:938")
var t1=_mz(z,'button',['bindtap',27,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var e2=_oz(z,31,e,s,gg)
_(t1,e2)
cs.pop()
_(oB,t1)
cs.push("./pages/load/load.vue.wxml:button:1:1076")
var b3=_mz(z,'button',['bindtap',32,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var o4=_oz(z,36,e,s,gg)
_(b3,o4)
cs.pop()
_(oB,b3)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[12]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oR=e_[x[13]].i
_ai(oR,x[14],e_,x[13],1,1)
var fS=_v()
_(r,fS)
cs.push("./pages/load/load.wxml:template:2:6")
var cT=_oz(z,1,e,s,gg)
var hU=_gd(x[13],cT,e_,d_)
if(hU){
var oV=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[13],2,18)
cs.pop()
oR.pop()
return r
}
e_[x[13]]={f:m8,j:[],i:[],ti:[x[14]],ic:[]}
d_[x[15]]={}
d_[x[15]]["e8e5b498"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[15]+':e8e5b498'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
cs.push("./pages/login/login.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/login/login.vue.wxml:view:1:64")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/login/login.vue.wxml:view:1:93")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
cs.push("./pages/login/login.vue.wxml:text:1:122")
var fE=_n('text')
_rz(z,fE,'class',4,e,s,gg)
var cF=_oz(z,5,e,s,gg)
_(fE,cF)
cs.pop()
_(oD,fE)
cs.push("./pages/login/login.vue.wxml:text:1:166")
var hG=_n('text')
_rz(z,hG,'class',6,e,s,gg)
var oH=_oz(z,7,e,s,gg)
_(hG,oH)
cs.pop()
_(oD,hG)
cs.push("./pages/login/login.vue.wxml:text:1:219")
var cI=_n('text')
_rz(z,cI,'class',8,e,s,gg)
var oJ=_oz(z,9,e,s,gg)
_(cI,oJ)
cs.pop()
_(oD,cI)
cs.push("./pages/login/login.vue.wxml:text:1:262")
var lK=_n('text')
_rz(z,lK,'class',10,e,s,gg)
var aL=_oz(z,11,e,s,gg)
_(lK,aL)
cs.pop()
_(oD,lK)
cs.push("./pages/login/login.vue.wxml:text:1:311")
var tM=_mz(z,'text',['bindtap',12,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var eN=_oz(z,16,e,s,gg)
_(tM,eN)
cs.pop()
_(oD,tM)
cs.pop()
_(xC,oD)
cs.push("./pages/login/login.vue.wxml:view:1:448")
var bO=_n('view')
_rz(z,bO,'class',17,e,s,gg)
cs.push("./pages/login/login.vue.wxml:text:1:477")
var oP=_n('text')
_rz(z,oP,'class',18,e,s,gg)
var xQ=_oz(z,19,e,s,gg)
_(oP,xQ)
cs.pop()
_(bO,oP)
cs.push("./pages/login/login.vue.wxml:text:1:521")
var oR=_n('text')
_rz(z,oR,'class',20,e,s,gg)
var fS=_oz(z,21,e,s,gg)
_(oR,fS)
cs.pop()
_(bO,oR)
cs.push("./pages/login/login.vue.wxml:text:1:574")
var cT=_n('text')
_rz(z,cT,'class',22,e,s,gg)
var hU=_oz(z,23,e,s,gg)
_(cT,hU)
cs.pop()
_(bO,cT)
cs.push("./pages/login/login.vue.wxml:text:1:617")
var oV=_n('text')
_rz(z,oV,'class',24,e,s,gg)
var cW=_oz(z,25,e,s,gg)
_(oV,cW)
cs.pop()
_(bO,oV)
cs.push("./pages/login/login.vue.wxml:text:1:666")
var oX=_mz(z,'text',['bindtap',26,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var lY=_oz(z,30,e,s,gg)
_(oX,lY)
cs.pop()
_(bO,oX)
cs.pop()
_(xC,bO)
cs.pop()
_(oB,xC)
cs.push("./pages/login/login.vue.wxml:image:1:810")
var aZ=_mz(z,'image',['class',31,'src',1],[],e,s,gg)
cs.pop()
_(oB,aZ)
cs.push("./pages/login/login.vue.wxml:view:1:877")
var t1=_n('view')
_rz(z,t1,'class',33,e,s,gg)
cs.push("./pages/login/login.vue.wxml:text:1:906")
var e2=_mz(z,'text',['class',34,'style',1],[],e,s,gg)
var b3=_oz(z,36,e,s,gg)
_(e2,b3)
cs.pop()
_(t1,e2)
cs.pop()
_(oB,t1)
cs.push("./pages/login/login.vue.wxml:view:1:988")
var o4=_n('view')
_rz(z,o4,'class',37,e,s,gg)
cs.push("./pages/login/login.vue.wxml:input:1:1031")
var x5=_mz(z,'input',['bindinput',38,'class',1,'data-comkey',2,'data-eventid',3,'maxlength',4,'placeholder',5,'type',6,'value',7],[],e,s,gg)
cs.pop()
_(o4,x5)
cs.push("./pages/login/login.vue.wxml:input:1:1255")
var o6=_mz(z,'input',['bindinput',46,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'maxlength',5,'placeholder',6,'type',7,'value',8],[],e,s,gg)
cs.pop()
_(o4,o6)
cs.push("./pages/login/login.vue.wxml:view:1:1494")
var f7=_n('view')
_rz(z,f7,'class',55,e,s,gg)
cs.push("./pages/login/login.vue.wxml:button:1:1537")
var c8=_mz(z,'button',['bindtap',56,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var h9=_oz(z,60,e,s,gg)
_(c8,h9)
cs.pop()
_(f7,c8)
cs.pop()
_(o4,f7)
cs.push("./pages/login/login.vue.wxml:view:1:1679")
var o0=_n('view')
_rz(z,o0,'class',61,e,s,gg)
cs.push("./pages/login/login.vue.wxml:text:1:1722")
var cAB=_mz(z,'text',['bindtap',62,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oBB=_oz(z,66,e,s,gg)
_(cAB,oBB)
cs.pop()
_(o0,cAB)
cs.push("./pages/login/login.vue.wxml:text:1:1862")
var lCB=_n('text')
_rz(z,lCB,'class',67,e,s,gg)
var aDB=_oz(z,68,e,s,gg)
_(lCB,aDB)
cs.pop()
_(o0,lCB)
cs.pop()
_(o4,o0)
cs.push("./pages/login/login.vue.wxml:view:1:1931")
var tEB=_n('view')
_rz(z,tEB,'class',69,e,s,gg)
cs.pop()
_(o4,tEB)
cs.push("./pages/login/login.vue.wxml:view:1:1981")
var eFB=_n('view')
_rz(z,eFB,'class',70,e,s,gg)
cs.push("./pages/login/login.vue.wxml:text:1:2024")
var bGB=_n('text')
_rz(z,bGB,'class',71,e,s,gg)
var oHB=_oz(z,72,e,s,gg)
_(bGB,oHB)
cs.pop()
_(eFB,bGB)
cs.pop()
_(o4,eFB)
cs.push("./pages/login/login.vue.wxml:view:1:2096")
var xIB=_n('view')
_rz(z,xIB,'class',73,e,s,gg)
cs.push("./pages/login/login.vue.wxml:view:1:2139")
var oJB=_mz(z,'view',['class',74,'style',1],[],e,s,gg)
cs.push("./pages/login/login.vue.wxml:image:1:2185")
var fKB=_mz(z,'image',['class',76,'src',1],[],e,s,gg)
cs.pop()
_(oJB,fKB)
cs.pop()
_(xIB,oJB)
cs.push("./pages/login/login.vue.wxml:view:1:2273")
var cLB=_mz(z,'view',['class',78,'style',1],[],e,s,gg)
cs.push("./pages/login/login.vue.wxml:image:1:2319")
var hMB=_mz(z,'image',['class',80,'src',1],[],e,s,gg)
cs.pop()
_(cLB,hMB)
cs.pop()
_(xIB,cLB)
cs.push("./pages/login/login.vue.wxml:view:1:2411")
var oNB=_mz(z,'view',['class',82,'style',1],[],e,s,gg)
cs.push("./pages/login/login.vue.wxml:image:1:2457")
var cOB=_mz(z,'image',['class',84,'src',1],[],e,s,gg)
cs.pop()
_(oNB,cOB)
cs.pop()
_(xIB,oNB)
cs.pop()
_(o4,xIB)
cs.pop()
_(oB,o4)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[15]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var lY=e_[x[16]].i
_ai(lY,x[17],e_,x[16],1,1)
var aZ=_v()
_(r,aZ)
cs.push("./pages/login/login.wxml:template:2:6")
var t1=_oz(z,1,e,s,gg)
var e2=_gd(x[16],t1,e_,d_)
if(e2){
var b3=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[16],2,18)
cs.pop()
lY.pop()
return r
}
e_[x[16]]={f:m10,j:[],i:[],ti:[x[17]],ic:[]}
d_[x[18]]={}
d_[x[18]]["13f211e0"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[18]+':13f211e0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/over/over.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[18]);return}
p_[b]=true
try{
cs.push("./pages/over/over.vue.wxml:view:1:27")
var oB=_mz(z,'view',['class',1,'id',1],[],e,s,gg)
cs.push("./pages/over/over.vue.wxml:view:1:65")
var xC=_n('view')
_rz(z,xC,'class',3,e,s,gg)
cs.push("./pages/over/over.vue.wxml:view:1:101")
var oD=_n('view')
_rz(z,oD,'class',4,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,5,e,s,gg)){fE.wxVkey=1
cs.push("./pages/over/over.vue.wxml:text:1:138")
cs.push("./pages/over/over.vue.wxml:text:1:138")
var cF=_n('text')
_rz(z,cF,'class',6,e,s,gg)
var hG=_oz(z,7,e,s,gg)
_(cF,hG)
cs.pop()
_(fE,cF)
cs.pop()
}
else{fE.wxVkey=2
cs.push("./pages/over/over.vue.wxml:text:1:258")
cs.push("./pages/over/over.vue.wxml:text:1:258")
var oH=_n('text')
_rz(z,oH,'class',8,e,s,gg)
var cI=_oz(z,9,e,s,gg)
_(oH,cI)
cs.pop()
_(fE,oH)
cs.pop()
}
fE.wxXCkey=1
cs.pop()
_(xC,oD)
cs.push("./pages/over/over.vue.wxml:view:1:327")
var oJ=_n('view')
_rz(z,oJ,'class',10,e,s,gg)
cs.push("./pages/over/over.vue.wxml:view:1:356")
var lK=_n('view')
_rz(z,lK,'class',11,e,s,gg)
cs.push("./pages/over/over.vue.wxml:view:1:386")
var aL=_n('view')
_rz(z,aL,'class',12,e,s,gg)
cs.push("./pages/over/over.vue.wxml:view:1:413")
var tM=_n('view')
_rz(z,tM,'class',13,e,s,gg)
cs.push("./pages/over/over.vue.wxml:view:1:440")
var eN=_n('view')
_rz(z,eN,'class',14,e,s,gg)
var bO=_oz(z,15,e,s,gg)
_(eN,bO)
cs.pop()
_(tM,eN)
cs.pop()
_(aL,tM)
cs.push("./pages/over/over.vue.wxml:view:1:495")
var oP=_n('view')
_rz(z,oP,'class',16,e,s,gg)
cs.push("./pages/over/over.vue.wxml:view:1:522")
var xQ=_n('view')
_rz(z,xQ,'class',17,e,s,gg)
var oR=_oz(z,18,e,s,gg)
_(xQ,oR)
cs.pop()
_(oP,xQ)
cs.pop()
_(aL,oP)
cs.push("./pages/over/over.vue.wxml:view:1:577")
var fS=_n('view')
_rz(z,fS,'class',19,e,s,gg)
cs.push("./pages/over/over.vue.wxml:view:1:604")
var cT=_n('view')
_rz(z,cT,'class',20,e,s,gg)
var hU=_oz(z,21,e,s,gg)
_(cT,hU)
cs.pop()
_(fS,cT)
cs.pop()
_(aL,fS)
cs.pop()
_(lK,aL)
var oV=_v()
_(lK,oV)
cs.push("./pages/over/over.vue.wxml:view:1:666")
var cW=function(lY,oX,aZ,gg){
cs.push("./pages/over/over.vue.wxml:view:1:666")
var e2=_n('view')
_rz(z,e2,'class',25,lY,oX,gg)
cs.push("./pages/over/over.vue.wxml:view:1:762")
var o4=_n('view')
_rz(z,o4,'class',26,lY,oX,gg)
var x5=_oz(z,27,lY,oX,gg)
_(o4,x5)
cs.pop()
_(e2,o4)
cs.push("./pages/over/over.vue.wxml:view:1:816")
var o6=_n('view')
_rz(z,o6,'class',28,lY,oX,gg)
cs.push("./pages/over/over.vue.wxml:view:1:843")
var f7=_n('view')
_rz(z,f7,'class',29,lY,oX,gg)
cs.push("./pages/over/over.vue.wxml:text:1:878")
var c8=_n('text')
_rz(z,c8,'class',30,lY,oX,gg)
var h9=_oz(z,31,lY,oX,gg)
_(c8,h9)
cs.pop()
_(f7,c8)
cs.push("./pages/over/over.vue.wxml:text:1:918")
var o0=_n('text')
_rz(z,o0,'class',32,lY,oX,gg)
var cAB=_oz(z,33,lY,oX,gg)
_(o0,cAB)
cs.pop()
_(f7,o0)
cs.push("./pages/over/over.vue.wxml:text:1:963")
var oBB=_n('text')
_rz(z,oBB,'class',34,lY,oX,gg)
var lCB=_oz(z,35,lY,oX,gg)
_(oBB,lCB)
cs.pop()
_(f7,oBB)
cs.pop()
_(o6,f7)
cs.pop()
_(e2,o6)
var b3=_v()
_(e2,b3)
if(_oz(z,36,lY,oX,gg)){b3.wxVkey=1
cs.push("./pages/over/over.vue.wxml:view:1:1016")
cs.push("./pages/over/over.vue.wxml:view:1:1016")
var aDB=_n('view')
_rz(z,aDB,'class',37,lY,oX,gg)
cs.push("./pages/over/over.vue.wxml:text:1:1071")
var tEB=_n('text')
_rz(z,tEB,'class',38,lY,oX,gg)
var eFB=_oz(z,39,lY,oX,gg)
_(tEB,eFB)
cs.pop()
_(aDB,tEB)
cs.push("./pages/over/over.vue.wxml:text:1:1108")
var bGB=_n('text')
_rz(z,bGB,'class',40,lY,oX,gg)
var oHB=_oz(z,41,lY,oX,gg)
_(bGB,oHB)
cs.pop()
_(aDB,bGB)
cs.pop()
_(b3,aDB)
cs.pop()
}
else{b3.wxVkey=2
cs.push("./pages/over/over.vue.wxml:view:1:1168")
cs.push("./pages/over/over.vue.wxml:view:1:1168")
var xIB=_n('view')
_rz(z,xIB,'class',42,lY,oX,gg)
cs.push("./pages/over/over.vue.wxml:text:1:1203")
var oJB=_n('text')
_rz(z,oJB,'class',43,lY,oX,gg)
cs.pop()
_(xIB,oJB)
cs.push("./pages/over/over.vue.wxml:text:1:1239")
var fKB=_n('text')
_rz(z,fKB,'class',44,lY,oX,gg)
var cLB=_oz(z,45,lY,oX,gg)
_(fKB,cLB)
cs.pop()
_(xIB,fKB)
cs.pop()
_(b3,xIB)
cs.pop()
}
b3.wxXCkey=1
cs.pop()
_(aZ,e2)
return aZ
}
_wp('./pages/over/over.vue.wxml:view:1:666: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
oV.wxXCkey=2
_2z(z,24,cW,e,s,gg,oV,'item','index0','')
cs.pop()
cs.pop()
_(oJ,lK)
cs.pop()
_(xC,oJ)
cs.push("./pages/over/over.vue.wxml:view:1:1320")
var hMB=_n('view')
_rz(z,hMB,'class',46,e,s,gg)
cs.push("./pages/over/over.vue.wxml:view:1:1354")
var oNB=_mz(z,'view',['bindtap',47,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/over/over.vue.wxml:text:1:1464")
var cOB=_n('text')
_rz(z,cOB,'class',51,e,s,gg)
var oPB=_oz(z,52,e,s,gg)
_(cOB,oPB)
cs.pop()
_(oNB,cOB)
cs.pop()
_(hMB,oNB)
cs.push("./pages/over/over.vue.wxml:view:1:1519")
var lQB=_mz(z,'view',['bindtap',53,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/over/over.vue.wxml:text:1:1629")
var aRB=_n('text')
_rz(z,aRB,'class',57,e,s,gg)
var tSB=_oz(z,58,e,s,gg)
_(aRB,tSB)
cs.pop()
_(lQB,aRB)
cs.pop()
_(hMB,lQB)
cs.push("./pages/over/over.vue.wxml:view:1:1684")
var eTB=_mz(z,'view',['class',59,'style',1],[],e,s,gg)
cs.pop()
_(hMB,eTB)
cs.pop()
_(xC,hMB)
cs.push("./pages/over/over.vue.wxml:view:1:1748")
var bUB=_mz(z,'view',['bindtap',61,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/over/over.vue.wxml:text:1:1858")
var oVB=_n('text')
_rz(z,oVB,'class',65,e,s,gg)
var xWB=_oz(z,66,e,s,gg)
_(oVB,xWB)
cs.pop()
_(bUB,oVB)
cs.pop()
_(xC,bUB)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[18]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var o6=e_[x[19]].i
_ai(o6,x[20],e_,x[19],1,1)
var f7=_v()
_(r,f7)
cs.push("./pages/over/over.wxml:template:2:6")
var c8=_oz(z,1,e,s,gg)
var h9=_gd(x[19],c8,e_,d_)
if(h9){
var o0=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[19],2,18)
cs.pop()
o6.pop()
return r
}
e_[x[19]]={f:m12,j:[],i:[],ti:[x[20]],ic:[]}
d_[x[21]]={}
d_[x[21]]["5c77e440"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[21]+':5c77e440'
r.wxVkey=b
gg.f=$gdc(f_["./pages/play/play.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[21]);return}
p_[b]=true
try{
cs.push("./pages/play/play.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/play/play.vue.wxml:view:1:66")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/play/play.vue.wxml:view:1:99")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_oz(z,4,e,s,gg)
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./pages/play/play.vue.wxml:view:1:192")
var cF=_n('view')
_rz(z,cF,'class',5,e,s,gg)
cs.push("./pages/play/play.vue.wxml:text:1:232")
var hG=_n('text')
_rz(z,hG,'class',6,e,s,gg)
var oH=_oz(z,7,e,s,gg)
_(hG,oH)
cs.pop()
_(cF,hG)
cs.pop()
_(xC,cF)
cs.push("./pages/play/play.vue.wxml:view:1:291")
var cI=_n('view')
_rz(z,cI,'class',8,e,s,gg)
cs.push("./pages/play/play.vue.wxml:image:1:320")
var oJ=_mz(z,'image',['class',9,'src',1],[],e,s,gg)
cs.pop()
_(cI,oJ)
cs.push("./pages/play/play.vue.wxml:view:1:400")
var lK=_mz(z,'view',['class',11,'style',1],[],e,s,gg)
var aL=_oz(z,13,e,s,gg)
_(lK,aL)
cs.pop()
_(cI,lK)
cs.pop()
_(xC,cI)
cs.pop()
_(oB,xC)
cs.push("./pages/play/play.vue.wxml:view:1:499")
var tM=_n('view')
_rz(z,tM,'class',14,e,s,gg)
cs.push("./pages/play/play.vue.wxml:view:1:539")
var eN=_n('view')
_rz(z,eN,'class',15,e,s,gg)
var bO=_oz(z,16,e,s,gg)
_(eN,bO)
cs.pop()
_(tM,eN)
cs.push("./pages/play/play.vue.wxml:view:1:587")
var oP=_n('view')
_rz(z,oP,'class',17,e,s,gg)
cs.push("./pages/play/play.vue.wxml:view:1:616")
var xQ=_n('view')
_rz(z,xQ,'class',18,e,s,gg)
var oR=_oz(z,19,e,s,gg)
_(xQ,oR)
cs.pop()
_(oP,xQ)
cs.pop()
_(tM,oP)
cs.push("./pages/play/play.vue.wxml:view:1:708")
var fS=_n('view')
_rz(z,fS,'class',20,e,s,gg)
cs.push("./pages/play/play.vue.wxml:label:1:748")
var cT=_n('label')
_rz(z,cT,'class',21,e,s,gg)
var hU=_oz(z,22,e,s,gg)
_(cT,hU)
cs.pop()
_(fS,cT)
cs.pop()
_(tM,fS)
cs.push("./pages/play/play.vue.wxml:view:1:816")
var oV=_n('view')
_rz(z,oV,'class',23,e,s,gg)
cs.push("./pages/play/play.vue.wxml:view:1:856")
var cW=_n('view')
_rz(z,cW,'class',24,e,s,gg)
var oX=_oz(z,25,e,s,gg)
_(cW,oX)
cs.pop()
_(oV,cW)
cs.push("./pages/play/play.vue.wxml:view:1:901")
var lY=_n('view')
_rz(z,lY,'class',26,e,s,gg)
var aZ=_oz(z,27,e,s,gg)
_(lY,aZ)
cs.pop()
_(oV,lY)
cs.pop()
_(tM,oV)
cs.push("./pages/play/play.vue.wxml:view:1:993")
var t1=_n('view')
_rz(z,t1,'class',28,e,s,gg)
cs.push("./pages/play/play.vue.wxml:view:1:1034")
var e2=_n('view')
_rz(z,e2,'class',29,e,s,gg)
var b3=_oz(z,30,e,s,gg)
_(e2,b3)
cs.pop()
_(t1,e2)
cs.push("./pages/play/play.vue.wxml:input:1:1079")
var o4=_mz(z,'input',['bindinput',31,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'style',5,'type',6,'value',7],[],e,s,gg)
cs.pop()
_(t1,o4)
cs.pop()
_(tM,t1)
cs.push("./pages/play/play.vue.wxml:button:1:1284")
var x5=_mz(z,'button',['bindtap',39,'class',1,'data-comkey',2,'data-eventid',3,'style',4],[],e,s,gg)
var o6=_oz(z,44,e,s,gg)
_(x5,o6)
cs.pop()
_(tM,x5)
cs.push("./pages/play/play.vue.wxml:button:1:1455")
var f7=_mz(z,'button',['bindtap',45,'class',1,'data-comkey',2,'data-eventid',3,'style',4],[],e,s,gg)
var c8=_oz(z,50,e,s,gg)
_(f7,c8)
cs.pop()
_(tM,f7)
cs.pop()
_(oB,tM)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[21]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var lCB=e_[x[22]].i
_ai(lCB,x[23],e_,x[22],1,1)
var aDB=_v()
_(r,aDB)
cs.push("./pages/play/play.wxml:template:2:6")
var tEB=_oz(z,1,e,s,gg)
var eFB=_gd(x[22],tEB,e_,d_)
if(eFB){
var bGB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aDB.wxXCkey=3
eFB(bGB,bGB,aDB,gg)
gg.f=cur_globalf
}
else _w(tEB,x[22],2,18)
cs.pop()
lCB.pop()
return r
}
e_[x[22]]={f:m14,j:[],i:[],ti:[x[23]],ic:[]}
d_[x[24]]={}
d_[x[24]]["6c14a000"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[24]+':6c14a000'
r.wxVkey=b
gg.f=$gdc(f_["./pages/record/record.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[24]);return}
p_[b]=true
try{
cs.push("./pages/record/record.vue.wxml:view:1:163")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/record/record.vue.wxml:template:1:192")
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[24],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[24],1,307)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var xIB=e_[x[24]].i
_ai(xIB,x[1],e_,x[24],1,1)
_ai(xIB,x[2],e_,x[24],1,64)
xIB.pop()
xIB.pop()
return r
}
e_[x[24]]={f:m15,j:[],i:[],ti:[x[1],x[2]],ic:[]}
d_[x[25]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var fKB=e_[x[25]].i
_ai(fKB,x[26],e_,x[25],1,1)
var cLB=_v()
_(r,cLB)
cs.push("./pages/record/record.wxml:template:2:6")
var hMB=_oz(z,1,e,s,gg)
var oNB=_gd(x[25],hMB,e_,d_)
if(oNB){
var cOB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cLB.wxXCkey=3
oNB(cOB,cOB,cLB,gg)
gg.f=cur_globalf
}
else _w(hMB,x[25],2,18)
cs.pop()
fKB.pop()
return r
}
e_[x[25]]={f:m16,j:[],i:[],ti:[x[26]],ic:[]}
d_[x[27]]={}
d_[x[27]]["122ec440"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[27]+':122ec440'
r.wxVkey=b
gg.f=$gdc(f_["./pages/register/register.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
cs.push("./pages/register/register.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/register/register.vue.wxml:view:1:65")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/register/register.vue.wxml:view:1:101")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
cs.push("./pages/register/register.vue.wxml:view:1:130")
var fE=_n('view')
_rz(z,fE,'class',4,e,s,gg)
cs.push("./pages/register/register.vue.wxml:view:1:160")
var cF=_n('view')
_rz(z,cF,'class',5,e,s,gg)
cs.push("./pages/register/register.vue.wxml:view:1:187")
var hG=_n('view')
_rz(z,hG,'class',6,e,s,gg)
cs.push("./pages/register/register.vue.wxml:text:1:214")
var oH=_n('text')
_rz(z,oH,'class',7,e,s,gg)
var cI=_oz(z,8,e,s,gg)
_(oH,cI)
cs.pop()
_(hG,oH)
cs.pop()
_(cF,hG)
cs.push("./pages/register/register.vue.wxml:view:1:266")
var oJ=_n('view')
_rz(z,oJ,'class',9,e,s,gg)
cs.push("./pages/register/register.vue.wxml:input:1:293")
var lK=_mz(z,'input',['bindinput',10,'class',1,'data-comkey',2,'data-eventid',3,'maxlength',4,'placeholder',5,'type',6,'value',7],[],e,s,gg)
cs.pop()
_(oJ,lK)
cs.pop()
_(cF,oJ)
cs.pop()
_(fE,cF)
cs.pop()
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./pages/register/register.vue.wxml:view:1:522")
var aL=_n('view')
_rz(z,aL,'class',18,e,s,gg)
cs.push("./pages/register/register.vue.wxml:view:1:551")
var tM=_n('view')
_rz(z,tM,'class',19,e,s,gg)
cs.push("./pages/register/register.vue.wxml:view:1:581")
var eN=_n('view')
_rz(z,eN,'class',20,e,s,gg)
cs.push("./pages/register/register.vue.wxml:view:1:608")
var bO=_n('view')
_rz(z,bO,'class',21,e,s,gg)
cs.push("./pages/register/register.vue.wxml:text:1:635")
var oP=_n('text')
_rz(z,oP,'class',22,e,s,gg)
var xQ=_oz(z,23,e,s,gg)
_(oP,xQ)
cs.pop()
_(bO,oP)
cs.pop()
_(eN,bO)
cs.push("./pages/register/register.vue.wxml:view:1:687")
var oR=_n('view')
_rz(z,oR,'class',24,e,s,gg)
cs.push("./pages/register/register.vue.wxml:input:1:714")
var fS=_mz(z,'input',['bindinput',25,'class',1,'data-comkey',2,'data-eventid',3,'maxlength',4,'placeholder',5,'type',6,'value',7],[],e,s,gg)
cs.pop()
_(oR,fS)
cs.pop()
_(eN,oR)
cs.pop()
_(tM,eN)
cs.pop()
_(aL,tM)
cs.pop()
_(xC,aL)
cs.push("./pages/register/register.vue.wxml:view:1:948")
var cT=_n('view')
_rz(z,cT,'class',33,e,s,gg)
cs.push("./pages/register/register.vue.wxml:view:1:977")
var hU=_n('view')
_rz(z,hU,'class',34,e,s,gg)
cs.push("./pages/register/register.vue.wxml:view:1:1007")
var oV=_n('view')
_rz(z,oV,'class',35,e,s,gg)
cs.push("./pages/register/register.vue.wxml:view:1:1034")
var cW=_n('view')
_rz(z,cW,'class',36,e,s,gg)
cs.push("./pages/register/register.vue.wxml:text:1:1061")
var oX=_n('text')
_rz(z,oX,'class',37,e,s,gg)
var lY=_oz(z,38,e,s,gg)
_(oX,lY)
cs.pop()
_(cW,oX)
cs.pop()
_(oV,cW)
cs.push("./pages/register/register.vue.wxml:view:1:1113")
var aZ=_n('view')
_rz(z,aZ,'class',39,e,s,gg)
cs.push("./pages/register/register.vue.wxml:input:1:1140")
var t1=_mz(z,'input',['bindinput',40,'class',1,'data-comkey',2,'data-eventid',3,'maxlength',4,'placeholder',5,'type',6,'value',7],[],e,s,gg)
cs.pop()
_(aZ,t1)
cs.pop()
_(oV,aZ)
cs.pop()
_(hU,oV)
cs.pop()
_(cT,hU)
cs.pop()
_(xC,cT)
cs.push("./pages/register/register.vue.wxml:view:1:1365")
var e2=_n('view')
_rz(z,e2,'class',48,e,s,gg)
cs.push("./pages/register/register.vue.wxml:button:1:1405")
var b3=_mz(z,'button',['bindtap',49,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'type',5],[],e,s,gg)
var o4=_oz(z,55,e,s,gg)
_(b3,o4)
cs.pop()
_(e2,b3)
cs.pop()
_(xC,e2)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[27]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var aRB=e_[x[28]].i
_ai(aRB,x[29],e_,x[28],1,1)
var tSB=_v()
_(r,tSB)
cs.push("./pages/register/register.wxml:template:2:6")
var eTB=_oz(z,1,e,s,gg)
var bUB=_gd(x[28],eTB,e_,d_)
if(bUB){
var oVB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tSB.wxXCkey=3
bUB(oVB,oVB,tSB,gg)
gg.f=cur_globalf
}
else _w(eTB,x[28],2,18)
cs.pop()
aRB.pop()
return r
}
e_[x[28]]={f:m18,j:[],i:[],ti:[x[29]],ic:[]}
d_[x[30]]={}
d_[x[30]]["dd80a250"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[30]+':dd80a250'
r.wxVkey=b
gg.f=$gdc(f_["./pages/roomGet/roomGet.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[30]);return}
p_[b]=true
try{
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:56")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:92")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_oz(z,4,e,s,gg)
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:135")
var cF=_n('view')
_rz(z,cF,'class',5,e,s,gg)
cs.push("./pages/roomGet/roomGet.vue.wxml:input:1:164")
var hG=_mz(z,'input',['bindinput',6,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(cF,hG)
cs.pop()
_(xC,cF)
cs.push("./pages/roomGet/roomGet.vue.wxml:button:1:342")
var oH=_mz(z,'button',['bindtap',13,'class',1,'data-comkey',2,'data-eventid',3,'type',4],[],e,s,gg)
var cI=_oz(z,18,e,s,gg)
_(oH,cI)
cs.pop()
_(xC,oH)
cs.pop()
_(oB,xC)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:487")
var oJ=_n('view')
_rz(z,oJ,'class',19,e,s,gg)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:521")
var lK=_n('view')
_rz(z,lK,'class',20,e,s,gg)
var aL=_oz(z,21,e,s,gg)
_(lK,aL)
cs.pop()
_(oJ,lK)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:578")
var tM=_n('view')
_rz(z,tM,'class',22,e,s,gg)
var eN=_v()
_(tM,eN)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:607")
var bO=function(xQ,oP,oR,gg){
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:607")
var cT=_n('view')
_rz(z,cT,'class',26,xQ,oP,gg)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:700")
var hU=_n('view')
_rz(z,hU,'class',27,xQ,oP,gg)
cs.push("./pages/roomGet/roomGet.vue.wxml:image:1:733")
var cW=_mz(z,'image',['class',28,'src',1],[],xQ,oP,gg)
cs.pop()
_(hU,cW)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:808")
var oX=_n('view')
_rz(z,oX,'class',30,xQ,oP,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,31,xQ,oP,gg)){lY.wxVkey=1
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:837")
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:837")
var aZ=_n('view')
_rz(z,aZ,'class',32,xQ,oP,gg)
var t1=_oz(z,33,xQ,oP,gg)
_(aZ,t1)
cs.pop()
_(lY,aZ)
cs.pop()
}
else{lY.wxVkey=2
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:924")
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:924")
var e2=_n('view')
_rz(z,e2,'class',34,xQ,oP,gg)
var b3=_oz(z,35,xQ,oP,gg)
_(e2,b3)
cs.pop()
_(lY,e2)
cs.pop()
}
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:990")
var o4=_n('view')
_rz(z,o4,'class',36,xQ,oP,gg)
var x5=_oz(z,37,xQ,oP,gg)
_(o4,x5)
cs.pop()
_(oX,o4)
lY.wxXCkey=1
cs.pop()
_(hU,oX)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:1058")
var o6=_n('view')
_rz(z,o6,'class',38,xQ,oP,gg)
var f7=_oz(z,39,xQ,oP,gg)
_(o6,f7)
cs.pop()
_(hU,o6)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:1125")
var c8=_n('view')
_rz(z,c8,'class',40,xQ,oP,gg)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:1159")
var h9=_n('view')
_rz(z,h9,'class',41,xQ,oP,gg)
var o0=_oz(z,42,xQ,oP,gg)
_(h9,o0)
cs.pop()
_(c8,h9)
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:1223")
var cAB=_n('view')
_rz(z,cAB,'class',43,xQ,oP,gg)
var oBB=_oz(z,44,xQ,oP,gg)
_(cAB,oBB)
cs.pop()
_(c8,cAB)
cs.pop()
_(hU,c8)
var oV=_v()
_(hU,oV)
if(_oz(z,45,xQ,oP,gg)){oV.wxVkey=1
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:1291")
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:1291")
var lCB=_n('view')
_rz(z,lCB,'class',46,xQ,oP,gg)
var aDB=_oz(z,47,xQ,oP,gg)
_(lCB,aDB)
cs.pop()
_(oV,lCB)
cs.pop()
}
else{oV.wxVkey=2
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:1371")
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:1371")
var tEB=_n('view')
_rz(z,tEB,'class',48,xQ,oP,gg)
var eFB=_oz(z,49,xQ,oP,gg)
_(tEB,eFB)
cs.pop()
_(oV,tEB)
cs.pop()
}
cs.push("./pages/roomGet/roomGet.vue.wxml:view:1:1432")
var bGB=_n('view')
_rz(z,bGB,'class',50,xQ,oP,gg)
var oHB=_oz(z,51,xQ,oP,gg)
_(bGB,oHB)
cs.pop()
_(hU,bGB)
oV.wxXCkey=1
cs.pop()
_(cT,hU)
cs.pop()
_(oR,cT)
return oR
}
_wp('./pages/roomGet/roomGet.vue.wxml:view:1:607: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
eN.wxXCkey=2
_2z(z,25,bO,e,s,gg,eN,'test','index0','')
cs.pop()
cs.pop()
_(oJ,tM)
cs.pop()
_(oB,oJ)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[30]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var fYB=e_[x[31]].i
_ai(fYB,x[32],e_,x[31],1,1)
var cZB=_v()
_(r,cZB)
cs.push("./pages/roomGet/roomGet.wxml:template:2:6")
var h1B=_oz(z,1,e,s,gg)
var o2B=_gd(x[31],h1B,e_,d_)
if(o2B){
var c3B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cZB.wxXCkey=3
o2B(c3B,c3B,cZB,gg)
gg.f=cur_globalf
}
else _w(h1B,x[31],2,18)
cs.pop()
fYB.pop()
return r
}
e_[x[31]]={f:m20,j:[],i:[],ti:[x[32]],ic:[]}
d_[x[33]]={}
d_[x[33]]["55ebd440"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[33]+':55ebd440'
r.wxVkey=b
gg.f=$gdc(f_["./pages/user/user.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[33]);return}
p_[b]=true
try{
cs.push("./pages/user/user.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/user/user.vue.wxml:view:1:66")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/user/user.vue.wxml:view:1:108")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
cs.push("./pages/user/user.vue.wxml:view:1:142")
cs.push("./pages/user/user.vue.wxml:view:1:142")
var cF=_n('view')
_rz(z,cF,'class',5,e,s,gg)
cs.push("./pages/user/user.vue.wxml:image:1:200")
var hG=_mz(z,'image',['class',6,'src',1],[],e,s,gg)
cs.pop()
_(cF,hG)
cs.push("./pages/user/user.vue.wxml:view:1:272")
var oH=_n('view')
_rz(z,oH,'class',8,e,s,gg)
var cI=_oz(z,9,e,s,gg)
_(oH,cI)
cs.push("./pages/user/user.vue.wxml:text:1:322")
var oJ=_n('text')
_rz(z,oJ,'class',10,e,s,gg)
var lK=_oz(z,11,e,s,gg)
_(oJ,lK)
cs.pop()
_(oH,oJ)
cs.pop()
_(cF,oH)
cs.push("./pages/user/user.vue.wxml:view:1:385")
var aL=_n('view')
_rz(z,aL,'class',12,e,s,gg)
var tM=_oz(z,13,e,s,gg)
_(aL,tM)
cs.push("./pages/user/user.vue.wxml:text:1:432")
var eN=_n('text')
_rz(z,eN,'class',14,e,s,gg)
var bO=_oz(z,15,e,s,gg)
_(eN,bO)
cs.pop()
_(aL,eN)
cs.pop()
_(cF,aL)
cs.pop()
_(fE,cF)
cs.pop()
}
else{fE.wxVkey=2
cs.push("./pages/user/user.vue.wxml:view:1:493")
cs.push("./pages/user/user.vue.wxml:view:1:493")
var oP=_n('view')
_rz(z,oP,'class',16,e,s,gg)
cs.push("./pages/user/user.vue.wxml:navigator:1:542")
var xQ=_mz(z,'navigator',['class',17,'url',1],[],e,s,gg)
var oR=_oz(z,19,e,s,gg)
_(xQ,oR)
cs.pop()
_(oP,xQ)
cs.pop()
_(fE,oP)
cs.pop()
}
cs.push("./pages/user/user.vue.wxml:view:1:651")
var fS=_n('view')
_rz(z,fS,'class',20,e,s,gg)
cs.push("./pages/user/user.vue.wxml:view:1:694")
var cT=_n('view')
_rz(z,cT,'class',21,e,s,gg)
var hU=_oz(z,22,e,s,gg)
_(cT,hU)
cs.push("./pages/user/user.vue.wxml:text:1:739")
var oV=_n('text')
_rz(z,oV,'class',23,e,s,gg)
var cW=_oz(z,24,e,s,gg)
_(oV,cW)
cs.pop()
_(cT,oV)
cs.pop()
_(fS,cT)
cs.push("./pages/user/user.vue.wxml:view:1:812")
var oX=_n('view')
_rz(z,oX,'class',25,e,s,gg)
var lY=_oz(z,26,e,s,gg)
_(oX,lY)
cs.push("./pages/user/user.vue.wxml:text:1:857")
var aZ=_n('text')
_rz(z,aZ,'class',27,e,s,gg)
var t1=_oz(z,28,e,s,gg)
_(aZ,t1)
cs.pop()
_(oX,aZ)
cs.pop()
_(fS,oX)
cs.push("./pages/user/user.vue.wxml:view:1:922")
var e2=_n('view')
_rz(z,e2,'class',29,e,s,gg)
var b3=_oz(z,30,e,s,gg)
_(e2,b3)
cs.push("./pages/user/user.vue.wxml:text:1:967")
var o4=_n('text')
_rz(z,o4,'class',31,e,s,gg)
var x5=_oz(z,32,e,s,gg)
_(o4,x5)
cs.pop()
_(e2,o4)
cs.pop()
_(fS,e2)
cs.pop()
_(oD,fS)
fE.wxXCkey=1
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./pages/user/user.vue.wxml:view:1:1056")
var o6=_mz(z,'view',['class',33,'style',1],[],e,s,gg)
cs.push("./pages/user/user.vue.wxml:view:1:1125")
var f7=_n('view')
_rz(z,f7,'class',35,e,s,gg)
cs.push("./pages/user/user.vue.wxml:view:1:1159")
var c8=_n('view')
_rz(z,c8,'class',36,e,s,gg)
cs.push("./pages/user/user.vue.wxml:image:1:1191")
var h9=_mz(z,'image',['class',37,'src',1],[],e,s,gg)
cs.pop()
_(c8,h9)
cs.push("./pages/user/user.vue.wxml:view:1:1263")
var o0=_n('view')
_rz(z,o0,'class',39,e,s,gg)
cs.push("./pages/user/user.vue.wxml:navigator:1:1297")
var cAB=_mz(z,'navigator',['class',40,'url',1],[],e,s,gg)
var oBB=_oz(z,42,e,s,gg)
_(cAB,oBB)
cs.pop()
_(o0,cAB)
cs.pop()
_(c8,o0)
cs.pop()
_(f7,c8)
cs.pop()
_(o6,f7)
cs.push("./pages/user/user.vue.wxml:view:1:1404")
var lCB=_n('view')
_rz(z,lCB,'class',43,e,s,gg)
cs.push("./pages/user/user.vue.wxml:view:1:1438")
var aDB=_n('view')
_rz(z,aDB,'class',44,e,s,gg)
cs.push("./pages/user/user.vue.wxml:image:1:1479")
var tEB=_mz(z,'image',['class',45,'src',1],[],e,s,gg)
cs.pop()
_(aDB,tEB)
cs.push("./pages/user/user.vue.wxml:view:1:1551")
var eFB=_n('view')
_rz(z,eFB,'class',47,e,s,gg)
var bGB=_oz(z,48,e,s,gg)
_(eFB,bGB)
cs.pop()
_(aDB,eFB)
cs.pop()
_(lCB,aDB)
cs.pop()
_(o6,lCB)
cs.push("./pages/user/user.vue.wxml:view:1:1618")
var oHB=_n('view')
_rz(z,oHB,'class',49,e,s,gg)
cs.push("./pages/user/user.vue.wxml:view:1:1652")
var xIB=_n('view')
_rz(z,xIB,'class',50,e,s,gg)
cs.push("./pages/user/user.vue.wxml:image:1:1693")
var oJB=_mz(z,'image',['class',51,'src',1],[],e,s,gg)
cs.pop()
_(xIB,oJB)
cs.push("./pages/user/user.vue.wxml:view:1:1765")
var fKB=_mz(z,'view',['bindtap',53,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var cLB=_oz(z,57,e,s,gg)
_(fKB,cLB)
cs.pop()
_(xIB,fKB)
cs.pop()
_(oHB,xIB)
cs.pop()
_(o6,oHB)
cs.push("./pages/user/user.vue.wxml:view:1:1903")
var hMB=_n('view')
_rz(z,hMB,'class',58,e,s,gg)
cs.push("./pages/user/user.vue.wxml:view:1:1937")
var oNB=_n('view')
_rz(z,oNB,'class',59,e,s,gg)
cs.push("./pages/user/user.vue.wxml:image:1:1978")
var cOB=_mz(z,'image',['class',60,'src',1],[],e,s,gg)
cs.pop()
_(oNB,cOB)
cs.push("./pages/user/user.vue.wxml:view:1:2050")
var oPB=_mz(z,'view',['bindtap',62,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var lQB=_oz(z,66,e,s,gg)
_(oPB,lQB)
cs.pop()
_(oNB,oPB)
cs.pop()
_(hMB,oNB)
cs.pop()
_(o6,hMB)
cs.push("./pages/user/user.vue.wxml:view:1:2191")
var aRB=_n('view')
_rz(z,aRB,'class',67,e,s,gg)
cs.push("./pages/user/user.vue.wxml:view:1:2225")
var tSB=_n('view')
_rz(z,tSB,'class',68,e,s,gg)
cs.push("./pages/user/user.vue.wxml:image:1:2266")
var eTB=_mz(z,'image',['class',69,'src',1],[],e,s,gg)
cs.pop()
_(tSB,eTB)
cs.push("./pages/user/user.vue.wxml:view:1:2338")
var bUB=_mz(z,'view',['bindtap',71,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oVB=_oz(z,75,e,s,gg)
_(bUB,oVB)
cs.pop()
_(tSB,bUB)
cs.pop()
_(aRB,tSB)
cs.pop()
_(o6,aRB)
cs.push("./pages/user/user.vue.wxml:view:1:2486")
var xWB=_n('view')
_rz(z,xWB,'class',76,e,s,gg)
cs.push("./pages/user/user.vue.wxml:view:1:2520")
var oXB=_n('view')
_rz(z,oXB,'class',77,e,s,gg)
cs.push("./pages/user/user.vue.wxml:image:1:2561")
var fYB=_mz(z,'image',['class',78,'src',1],[],e,s,gg)
cs.pop()
_(oXB,fYB)
cs.push("./pages/user/user.vue.wxml:view:1:2633")
var cZB=_mz(z,'view',['bindtap',80,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var h1B=_oz(z,84,e,s,gg)
_(cZB,h1B)
cs.pop()
_(oXB,cZB)
cs.pop()
_(xWB,oXB)
cs.pop()
_(o6,xWB)
cs.push("./pages/user/user.vue.wxml:view:1:2775")
var o2B=_n('view')
_rz(z,o2B,'class',85,e,s,gg)
cs.push("./pages/user/user.vue.wxml:view:1:2809")
var c3B=_n('view')
_rz(z,c3B,'class',86,e,s,gg)
cs.push("./pages/user/user.vue.wxml:image:1:2850")
var o4B=_mz(z,'image',['class',87,'src',1],[],e,s,gg)
cs.pop()
_(c3B,o4B)
cs.push("./pages/user/user.vue.wxml:view:1:2922")
var l5B=_mz(z,'view',['bindtap',89,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var a6B=_oz(z,93,e,s,gg)
_(l5B,a6B)
cs.pop()
_(c3B,l5B)
cs.pop()
_(o2B,c3B)
cs.pop()
_(o6,o2B)
cs.pop()
_(oB,o6)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[33]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var a6B=e_[x[34]].i
_ai(a6B,x[35],e_,x[34],1,1)
var t7B=_v()
_(r,t7B)
cs.push("./pages/user/user.wxml:template:2:6")
var e8B=_oz(z,1,e,s,gg)
var b9B=_gd(x[34],e8B,e_,d_)
if(b9B){
var o0B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
t7B.wxXCkey=3
b9B(o0B,o0B,t7B,gg)
gg.f=cur_globalf
}
else _w(e8B,x[34],2,18)
cs.pop()
a6B.pop()
return r
}
e_[x[34]]={f:m22,j:[],i:[],ti:[x[35]],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"view1 { height: ",[0,100],"; padding: 0 4%; border-bottom: ",[0,1]," solid rgb(243, 243, 243); display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; color: #707070; border-bottom: 0; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; }\n.",[1],"textName { padding-left: ",[0,20],"; width: 100%; color: #666; font-size: ",[0,30],"; }\n.",[1],"getWidth { border: 1px solid #367B36; float: left; border-radius: ",[0,20],"; width: ",[0,350],"; height: ",[0,450],"; list-style-type: none; margin: ",[0,10],"; }\n.",[1],"am-thumbnail { width: ",[0,350],"; height: ",[0,450],"; border-radius: ",[0,20],"; }\n.",[1],"index_view{ text-align: center;height: ",[0,120],"; }\n.",[1],"index_view2{ background: #fff; }\n.",[1],"index_view3{ border-bottom: ",[0,15]," solid #f1f1f1;background: #fff; }\n.",[1],"index_view4{ -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0;width: ",[0,50],";height: ",[0,50],"; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/load/load.wxss']=setCssToHead([".",[1],"Parentlevel { width: 100%; height: 100%; }\n.",[1],"Parentlevel .",[1],"Waitfor { text-align: center; font-size: 1rem; }\n.",[1],"Parentlevel .",[1],"Headportrait { width: ",[0,130],"; height: ",[0,130],"; border-radius: ",[0,65],"; margin: 15% auto; background-color: red; }\n.",[1],"Parentlevel .",[1],"Option { width: 100%; height: 50%; margin-top: 30%; }\n.",[1],"Parentlevel .",[1],"Option .",[1],"userInfo { width: 100%; height: ",[0,100],"; background-color: #5DBA9D; position: relative; }\n.",[1],"Parentlevel .",[1],"Option .",[1],"userInfo .",[1],"user { width: 50%; float: left; }\n.",[1],"Parentlevel .",[1],"Option .",[1],"userInfo .",[1],"user .",[1],"userName { margin-left: 33%; }\n.",[1],"Parentlevel .",[1],"Option .",[1],"userInfo .",[1],"user .",[1],"userIntegral { margin-left: 33%; }\n.",[1],"Parentlevel .",[1],"Option .",[1],"P_hostile { width: 100%; height: ",[0,200],"; margin-top: 30%; background-color: #5DBA9D; position: relative; }\n.",[1],"Parentlevel .",[1],"Option .",[1],"P_hostile .",[1],"P_GameplayerA { width: ",[0,130],"; height: ",[0,130],"; border-radius: ",[0,20],"; position: absolute; margin: 8% 0 0 20%; background-color: coral; }\n.",[1],"Parentlevel .",[1],"Option .",[1],"P_hostile .",[1],"P_GameplayerA .",[1],"username { margin-top: ",[0,80],"; margin-left: ",[0,40],"; color: #000; }\n.",[1],"Parentlevel .",[1],"Option .",[1],"P_hostile .",[1],"P_GameplayerVS { width: ",[0,130],"; height: ",[0,130],"; border-radius: ",[0,20],"; position: absolute; margin: 8% 0 0 43%; text-align: center; line-height: ",[0,130],"; font-size: 2rem; }\n.",[1],"Parentlevel .",[1],"Option .",[1],"P_hostile .",[1],"P_GameplayerB { width: ",[0,130],"; height: ",[0,130],"; border-radius: ",[0,20],"; position: absolute; margin: 8% 0 0 65%; text-align: center; line-height: ",[0,130],"; background-color: coral; }\n.",[1],"Parentlevel .",[1],"Option .",[1],"P_hostile .",[1],"P_Gsapn { font-size: 2rem; }\n.",[1],"load_view { width: ",[0,130],"; height: ",[0,130],"; }\n.",[1],"load_but { height: 34%; font-size: ",[0,35],"; background-color: #5DBA9D; border-radius: 50px; color: #ECECEC; margin-top: 5%; }\n",],undefined,{path:"./pages/load/load.wxss"});    
__wxAppCode__['pages/load/load.wxml']=$gwx('./pages/load/load.wxml');

__wxAppCode__['pages/login/login.wxss']=setCssToHead(["body { background-color: #8F8F94; }\n.",[1],"content_view1{ background: #8F8F94;padding: 54px;padding-left: 20%; }\n.",[1],"content_view2{ background:#ECECEC; width: 95%; text-align: center; height: 44%; border-radius: 50px; }\n.",[1],"content_view3{ background:#ECECEC; width: 95%; text-align: center; height: 44%; border-radius: 50px; margin-top: 20px; }\n.",[1],"content_view4{ width: 95%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: 30%; padding-top: 20px; }\n.",[1],"content_but{ height: 34%; font-size: ",[0,35],"; background-color: #5DBA9D; border-radius: 50px; color: #ECECEC; }\n.",[1],"content_view5{ -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row;color: #3B83C1;width: 90%;margin-top: ",[0,8],"; }\n.",[1],"content_text1{ text-align: right; font-size: 15px;width: 100%; }\n.",[1],"content_text2{ text-align: right; font-size: 15px;padding-left: ",[0,40],"; }\n.",[1],"content_view6{ width: 90%;height: ",[0,3],";background-color: #5DBA9D;margin-top: ",[0,10],";margin-top: 21%; }\n.",[1],"content_view7{ width: 90%; }\n.",[1],"content_text3{ text-align: center; font-size: 15px;width: 100%;color: #ECECEC; }\n.",[1],"content_text8{ background-color: #8F8F94;width: 90%;height: ",[0,124],";display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;margin-top: ",[0,9],"; }\n.",[1],"content_img{ width: ",[0,100],";height: ",[0,100],"; }\n.",[1],"content { background-color: #5DBA9D; text-align: center; height: 100%; }\n.",[1],"logo { height: ",[0,200],"; width: ",[0,200],"; margin-top: ",[0,200],"; }\n.",[1],"title { font-size: ",[0,36],"; color: #8f8f94; display: block; }\n",],undefined,{path:"./pages/login/login.wxss"});    
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/over/over.wxss']=setCssToHead(["#box .",[1],"square { position: absolute; background: lightcyan; position: absolute; left: 50%; top: 45%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); width: ",[0,600],"; height: ",[0,600],"; }\n.",[1],"R_ftext { width: 100%; height: ",[0,70],"; text-align: center; line-height: ",[0,70],"; background-color: orange; }\n.",[1],"R_text {}\n.",[1],"R_ptr { width: ",[0,200],"; height: ",[0,55],"; }\n.",[1],"R_vi { width: 100%; height: ",[0,120],"; margin-top: 10%; }\n.",[1],"R_via { width: 35%; height: ",[0,100],"; text-align: center; line-height: ",[0,100],"; border-radius: ",[0,60],"; float: left; margin-left: 10%; background-color: lightcoral; }\n.",[1],"Close { width: 90%; height: ",[0,100],"; text-align: center; line-height: ",[0,100],"; margin-left: 5%; background-color: lightcoral; border-radius: ",[0,50],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/over/over.wxss:1:1)",{path:"./pages/over/over.wxss"});    
__wxAppCode__['pages/over/over.wxml']=$gwx('./pages/over/over.wxml');

__wxAppCode__['pages/play/play.wxss']=setCssToHead(["body { background: url(../../static/img/001.af383702.jpg-do-not-use-local-path-./pages/play/play.wxss\x262\x2614); }\n.",[1],"zhu { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: ",[0,200],"; color: white; }\n.",[1],"bb1 { margin: ",[0,50],"; }\n.",[1],"play_view{ background: url(../../static/img/001.af383702.jpg-do-not-use-local-path-./pages/play/play.wxss\x2616\x2613); width: 100%;height: ",[0,1250],"; }\n.",[1],"play_view1{ font-size: ",[0,50],";padding-left: ",[0,15],"; }\n.",[1],"play_view2{ padding: ",[0,0]," ",[0,0]," ",[0,0]," ",[0,400],";margin-top: ",[0,35],"; }\n.",[1],"play_text{ font-size: ",[0,33],"; }\n.",[1],"play_img{ width:",[0,100],";height: ",[0,100],"; }\n.",[1],"play_view3{ font-size: ",[0,30],";margin-top: ",[0,10],"; }\n.",[1],"play_view4{ height: ",[0,350],";color: white; }\n.",[1],"play_view5{ padding-left: ",[0,350],";padding-top: ",[0,50],"; }\n.",[1],"play_view6{ padding: ",[0,30]," ",[0,280]," ",[0,30]," ",[0,350],"; }\n.",[1],"play_view7{ font-size: ",[0,60],";color: red; }\n.",[1],"play_view8{ height: ",[0,250],"; }\n.",[1],"play_view9{ margin-left: ",[0,70],";margin-top: ",[0,15],"; margin-left: 50%; }\n.",[1],"play_view10{ height: ",[0,200],";display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;background: #4b50a3; }\n",],undefined,{path:"./pages/play/play.wxss"});    
__wxAppCode__['pages/play/play.wxml']=$gwx('./pages/play/play.wxml');

__wxAppCode__['pages/record/record.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-collapse { background-color: #ffffff; position: relative; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-collapse:after { position: absolute; z-index: 10; right: 0; bottom: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(0.5); -ms-transform: scaleY(0.5); transform: scaleY(0.5); background-color: #c8c7cc; }\n.",[1],"uni-collapse:before { position: absolute; z-index: 10; right: 0; top: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(0.5); -ms-transform: scaleY(0.5); transform: scaleY(0.5); background-color: #c8c7cc; }\n@font-face { font-family: uniicons; font-weight: normal; font-style: normal; src: url(data:font/truetype;charset\x3dutf-8;base64,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PDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuw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AVkBWgFbAVwBXQd1bmlFMTAwB3VuaUUxMDEHdW5pRTEwMgd1bmlFMTMwB3VuaUUxMzEHdW5pRTEzMgd1bmlFMjAwB3VuaUUyMDEHdW5pRTIwMgd1bmlFMjAzB3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTI2MAd1bmlFMjYxB3VuaUUyNjIHdW5pRTI2Mwd1bmlFMjY0B3VuaUUzMDAHdW5pRTMwMQd1bmlFMzAyB3VuaUUzMDMHdW5pRTMzMgd1bmlFMzMzB3VuaUUzNjAHdW5pRTM2Mwd1bmlFMzY0B3VuaUU0MDAHdW5pRTQwMQd1bmlFNDAyB3VuaUU0MDMHdW5pRTQwNAd1bmlFNDA1B3VuaUU0MDYHdW5pRTQwNwd1bmlFNDA4B3VuaUU0MDkHdW5pRTQxMAd1bmlFNDExB3VuaUU0MTMHdW5pRTQzNAd1bmlFNDM3B3VuaUU0MzgHdW5pRTQzOQd1bmlFNDQwB3VuaUU0NDEHdW5pRTQ0Mgd1bmlFNDQzB3VuaUU0NjAHdW5pRTQ2MQd1bmlFNDYyB3VuaUU0NjMHdW5pRTQ2NAd1bmlFNDY1B3VuaUU0NjYHdW5pRTQ2OAd1bmlFNDcwB3VuaUU0NzEHdW5pRTQ3Mgd1bmlFNTAwB3VuaUU1MDEHdW5pRTUwMgd1bmlFNTAzB3VuaUU1MDQHdW5pRTUwNQd1bmlFNTA2B3VuaUU1MDcHdW5pRTUwOAd1bmlFNTMwB3VuaUU1MzIHdW5pRTUzNAd1bmlFNTM1B3VuaUU1MzcHdW5pRTU2MAd1bmlFNTYyB3VuaUU1NjMHdW5pRTU2NQd1bmlFNTY3B3VuaUU1NjgHdW5pRTU4MAd1bmlFNTgxB3VuaUU1ODIHdW5pRTU4Mwd1bmlFNTg0B3VuaUU1ODUHdW5pRTU4Ngd1bmlFNTg3B3VuaUU1ODgHdW5pRTU4OQRFdXJvBEV1cm8AAQAB//8ADwABAAAADAAAABYAAAACAAEAAQBfAAEABAAAAAIAAAAAAAAAAQAAAADVpCcIAAAAANJrTZkAAAAA2DhhuQ\x3d\x3d) format(\x27truetype\x27); }\n.",[1],"uni-icon { font-family: uniicons; font-size: 24px; font-weight: normal; font-style: normal; line-height: 1; display: inline-block; text-decoration: none; -webkit-font-smoothing: antialiased; }\n.",[1],"uni-icon.",[1],"uni-active { color: #007aff; }\n.",[1],"uni-icon-contact:before { content: \x27\\E100\x27; }\n.",[1],"uni-icon-person:before { content: \x27\\E101\x27; }\n.",[1],"uni-icon-personadd:before { content: \x27\\E102\x27; }\n.",[1],"uni-icon-contact-filled:before { content: \x27\\E130\x27; }\n.",[1],"uni-icon-person-filled:before { content: \x27\\E131\x27; }\n.",[1],"uni-icon-personadd-filled:before { content: \x27\\E132\x27; }\n.",[1],"uni-icon-phone:before { content: \x27\\E200\x27; }\n.",[1],"uni-icon-email:before { content: \x27\\E201\x27; }\n.",[1],"uni-icon-chatbubble:before { content: \x27\\E202\x27; }\n.",[1],"uni-icon-chatboxes:before { content: \x27\\E203\x27; }\n.",[1],"uni-icon-phone-filled:before { content: \x27\\E230\x27; }\n.",[1],"uni-icon-email-filled:before { content: \x27\\E231\x27; }\n.",[1],"uni-icon-chatbubble-filled:before { content: \x27\\E232\x27; }\n.",[1],"uni-icon-chatboxes-filled:before { content: \x27\\E233\x27; }\n.",[1],"uni-icon-weibo:before { content: \x27\\E260\x27; }\n.",[1],"uni-icon-weixin:before { content: \x27\\E261\x27; }\n.",[1],"uni-icon-pengyouquan:before { content: \x27\\E262\x27; }\n.",[1],"uni-icon-chat:before { content: \x27\\E263\x27; }\n.",[1],"uni-icon-qq:before { content: \x27\\E264\x27; }\n.",[1],"uni-icon-videocam:before { content: \x27\\E300\x27; }\n.",[1],"uni-icon-camera:before { content: \x27\\E301\x27; }\n.",[1],"uni-icon-mic:before { content: \x27\\E302\x27; }\n.",[1],"uni-icon-location:before { content: \x27\\E303\x27; }\n.",[1],"uni-icon-mic-filled:before, .",[1],"uni-icon-speech:before { content: \x27\\E332\x27; }\n.",[1],"uni-icon-location-filled:before { content: \x27\\E333\x27; }\n.",[1],"uni-icon-micoff:before { content: \x27\\E360\x27; }\n.",[1],"uni-icon-image:before { content: \x27\\E363\x27; }\n.",[1],"uni-icon-map:before { content: \x27\\E364\x27; }\n.",[1],"uni-icon-compose:before { content: \x27\\E400\x27; }\n.",[1],"uni-icon-trash:before { content: \x27\\E401\x27; }\n.",[1],"uni-icon-upload:before { content: \x27\\E402\x27; }\n.",[1],"uni-icon-download:before { content: \x27\\E403\x27; }\n.",[1],"uni-icon-close:before { content: \x27\\E404\x27; }\n.",[1],"uni-icon-redo:before { content: \x27\\E405\x27; }\n.",[1],"uni-icon-undo:before { content: \x27\\E406\x27; }\n.",[1],"uni-icon-refresh:before { content: \x27\\E407\x27; }\n.",[1],"uni-icon-star:before { content: \x27\\E408\x27; }\n.",[1],"uni-icon-plus:before { content: \x27\\E409\x27; }\n.",[1],"uni-icon-minus:before { content: \x27\\E410\x27; }\n.",[1],"uni-icon-circle:before, .",[1],"uni-icon-checkbox:before { content: \x27\\E411\x27; }\n.",[1],"uni-icon-close-filled:before, .",[1],"uni-icon-clear:before { content: \x27\\E434\x27; }\n.",[1],"uni-icon-refresh-filled:before { content: \x27\\E437\x27; }\n.",[1],"uni-icon-star-filled:before { content: \x27\\E438\x27; }\n.",[1],"uni-icon-plus-filled:before { content: \x27\\E439\x27; }\n.",[1],"uni-icon-minus-filled:before { content: \x27\\E440\x27; }\n.",[1],"uni-icon-circle-filled:before { content: \x27\\E441\x27; }\n.",[1],"uni-icon-checkbox-filled:before { content: \x27\\E442\x27; }\n.",[1],"uni-icon-closeempty:before { content: \x27\\E460\x27; }\n.",[1],"uni-icon-refreshempty:before { content: \x27\\E461\x27; }\n.",[1],"uni-icon-reload:before { content: \x27\\E462\x27; }\n.",[1],"uni-icon-starhalf:before { content: \x27\\E463\x27; }\n.",[1],"uni-icon-spinner:before { content: \x27\\E464\x27; }\n.",[1],"uni-icon-spinner-cycle:before { content: \x27\\E465\x27; }\n.",[1],"uni-icon-search:before { content: \x27\\E466\x27; }\n.",[1],"uni-icon-plusempty:before { content: \x27\\E468\x27; }\n.",[1],"uni-icon-forward:before { content: \x27\\E470\x27; }\n.",[1],"uni-icon-back:before, .",[1],"uni-icon-left-nav:before { content: \x27\\E471\x27; }\n.",[1],"uni-icon-checkmarkempty:before { content: \x27\\E472\x27; }\n.",[1],"uni-icon-home:before { content: \x27\\E500\x27; }\n.",[1],"uni-icon-navigate:before { content: \x27\\E501\x27; }\n.",[1],"uni-icon-gear:before { content: \x27\\E502\x27; }\n.",[1],"uni-icon-paperplane:before { content: \x27\\E503\x27; }\n.",[1],"uni-icon-info:before { content: \x27\\E504\x27; }\n.",[1],"uni-icon-help:before { content: \x27\\E505\x27; }\n.",[1],"uni-icon-locked:before { content: \x27\\E506\x27; }\n.",[1],"uni-icon-more:before { content: \x27\\E507\x27; }\n.",[1],"uni-icon-flag:before { content: \x27\\E508\x27; }\n.",[1],"uni-icon-home-filled:before { content: \x27\\E530\x27; }\n.",[1],"uni-icon-gear-filled:before { content: \x27\\E532\x27; }\n.",[1],"uni-icon-info-filled:before { content: \x27\\E534\x27; }\n.",[1],"uni-icon-help-filled:before { content: \x27\\E535\x27; }\n.",[1],"uni-icon-more-filled:before { content: \x27\\E537\x27; }\n.",[1],"uni-icon-settings:before { content: \x27\\E560\x27; }\n.",[1],"uni-icon-list:before { content: \x27\\E562\x27; }\n.",[1],"uni-icon-bars:before { content: \x27\\E563\x27; }\n.",[1],"uni-icon-loop:before { content: \x27\\E565\x27; }\n.",[1],"uni-icon-paperclip:before { content: \x27\\E567\x27; }\n.",[1],"uni-icon-eye:before { content: \x27\\E568\x27; }\n.",[1],"uni-icon-arrowup:before { content: \x27\\E580\x27; }\n.",[1],"uni-icon-arrowdown:before { content: \x27\\E581\x27; }\n.",[1],"uni-icon-arrowleft:before { content: \x27\\E582\x27; }\n.",[1],"uni-icon-arrowright:before { content: \x27\\E583\x27; }\n.",[1],"uni-icon-arrowthinup:before { content: \x27\\E584\x27; }\n.",[1],"uni-icon-arrowthindown:before { content: \x27\\E585\x27; }\n.",[1],"uni-icon-arrowthinleft:before { content: \x27\\E586\x27; }\n.",[1],"uni-icon-arrowthinright:before { content: \x27\\E587\x27; }\n.",[1],"uni-icon-pulldown:before { content: \x27\\E588\x27; }\n.",[1],"uni-icon-closefill:before { content: \x27\\E589\x27; }\n.",[1],"uni-icon-sound:before { content: \x22\\E590\x22; }\n.",[1],"uni-icon-scan:before { content: \x22\\E612\x22; }\n@charset \x22UTF-8\x22;\n.",[1],"icon { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; width: ",[0,50],"; height: ",[0,50],"; margin-right: ",[0,25],"; }\n.",[1],"icon wx-image { width: ",[0,50],"; height: ",[0,50],"; }\n.",[1],"uni-collapse-cell { position: relative; }\n.",[1],"uni-collapse-cell--hover { background-color: #f1f1f1; }\n.",[1],"uni-collapse-cell--open { background-color: #f1f1f1; }\n.",[1],"uni-collapse-cell--disabled { opacity: 0.3; }\n.",[1],"uni-collapse-cell--animation { -webkit-transition: all 0.3s; -o-transition: all 0.3s; transition: all 0.3s; }\n.",[1],"uni-collapse-cell:after { position: absolute; z-index: 3; right: 0; bottom: 0; left: 0px; height: 1px; content: \x27\x27; -webkit-transform: scaleY(0.5); -ms-transform: scaleY(0.5); transform: scaleY(0.5); background-color: #eeeeee; }\n.",[1],"uni-collapse-cell__title { padding: ",[0,10]," ",[0,35]," ",[0,10]," ",[0,30],"; height: ",[0,100],"; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-collapse-cell__title-extra { margin-right: ",[0,18],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"uni-collapse-cell__title-img { height: ",[0,52],"; width: ",[0,52],"; }\n.",[1],"uni-collapse-cell__title-arrow { width: ",[0,40],"; height: 30px; -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); transform: rotate(0deg); -webkit-transform-origin: center center; -ms-transform-origin: center center; transform-origin: center center; -webkit-transition: -webkit-transform 0.3s; transition: -webkit-transform 0.3s; -o-transition: transform 0.3s; transition: transform 0.3s; transition: transform 0.3s, -webkit-transform 0.3s; }\n.",[1],"uni-collapse-cell__title-arrow.",[1],"uni-active { -webkit-transform: rotate(90deg); -ms-transform: rotate(90deg); transform: rotate(90deg); }\n.",[1],"uni-collapse-cell__title-inner { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"uni-collapse-cell__title-text { font-size: ",[0,33],"; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; color: #707070; line-height: 1.5; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"uni-collapse-cell__content { position: relative; width: 100%; overflow: hidden; background: #ffffff; }\n.",[1],"uni-collapse-cell__content wx-view { font-size: ",[0,28],"; }\n.",[1],"uni-collapse-cell__inner { opacity: 0; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all 0.3s; -o-transition: all 0.3s; transition: all 0.3s; -webkit-transform-origin: center center; -ms-transform-origin: center center; transform-origin: center center; }\n.",[1],"uni-collapse-cell__inner.",[1],"uni-active { opacity: 1; -webkit-transform: translateY(0px); -ms-transform: translateY(0px); transform: translateY(0px); }\n@charset \x22UTF-8\x22;\n.",[1],"cmd-result-page { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; height: 100%; text-align: center; padding: ",[0,40]," 0; }\n.",[1],"cmd-result-page-image { width: ",[0,280],"; height: ",[0,280],"; margin-bottom: ",[0,80],"; }\n.",[1],"cmd-result-page-text { line-height: 1; color: #111a34; font-size: ",[0,36],"; }\n.",[1],"cmd-result-page-subtext { margin-top: ",[0,16],"; color: #858b9c; font-size: ",[0,32],"; }\n.",[1],"cmd-result-page-buttons { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"cmd-result-page-buttons wx-button { margin: ",[0,10],"; }\n.",[1],"all{ height: ",[0,100],"; background:cadetblue; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; font-size: ",[0,23],"; margin: ",[0,10],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"img{ width: ",[0,80],"; height: ",[0,80],"; padding:",[0,10],"; }\n.",[1],"jf1{ color: #E96D71; margin-top: ",[0,0],"; }\n.",[1],"jf2{ color: blue; margin-top: ",[0,0],"; }\n.",[1],"user{ color: #0000FF; padding-top: ",[0,20],"; }\n.",[1],"roomid{ font-size: ",[0,20],"; background: #E96D71; color:ghostwhite; width: ",[0,80],"; }\n.",[1],"good{ padding: ",[0,30]," ",[0,10],"; width:",[0,340]," }\n.",[1],"failure{ padding-left: 10px; font-size: ",[0,30],"; color:crimson; }\n.",[1],"successful{ padding-left: 10px; font-size: ",[0,30],"; color:skyblue; }\n.",[1],"fuhao{ font-size: ",[0,50],"; padding: ",[0,20],"; color: blue; }\n.",[1],"list:active { background-color: #eeeeee; }\n.",[1],"list { width: 100%; border-bottom: ",[0,4]," solid #f1f1f1; background: #fff; }\n",],undefined,{path:"./pages/record/record.wxss"});    
__wxAppCode__['pages/record/record.wxml']=$gwx('./pages/record/record.wxml');

__wxAppCode__['pages/register/register.wxss']=setCssToHead([".",[1],"Register { width: 100%; height: 100%; margin: 0; font-size: 1.2rem; }\n.",[1],"Register .",[1],"R_from { width: 100%; height: ",[0,500],"; font-size: 1rem; padding: 10%; margin: 0 auto; background-color: lightcoral; }\n.",[1],"Register .",[1],"R_register { width: 80%; height: ",[0,80],"; border-radius: ",[0,40],"; margin-top: 12%; text-align: center; line-height: ",[0,80],"; }\n.",[1],"Register_input { background: #ECECEC; border-radius: 50px; }\n",],undefined,{path:"./pages/register/register.wxss"});    
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/roomGet/roomGet.wxss']=setCssToHead([".",[1],"topset{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: ",[0,110],"; background: #5F9EA0; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"list{ font-size: ",[0,30],"; }\n.",[1],"all{ height: ",[0,100],"; background:cadetblue; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; font-size: ",[0,23],"; margin: ",[0,10],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"img{ width: ",[0,80],"; height: ",[0,80],"; padding:",[0,10],"; }\n.",[1],"jf1{ color: #E96D71; margin-top: ",[0,0],"; }\n.",[1],"jf2{ color: blue; margin-top: ",[0,0],"; }\n.",[1],"user{ color: #0000FF; padding-top: ",[0,20],"; }\n.",[1],"roomid{ font-size: ",[0,20],"; background: #E96D71; color:ghostwhite; width: ",[0,80],"; }\n.",[1],"good{ padding: ",[0,30]," ",[0,10],"; width:",[0,340]," }\n.",[1],"failure{ padding-left: 10px; font-size: ",[0,30],"; color:crimson; }\n.",[1],"successful{ padding-left: 10px; font-size: ",[0,30],"; color:skyblue; }\n.",[1],"fuhao{ font-size: ",[0,50],"; padding: ",[0,20],"; color: blue; }\n",],undefined,{path:"./pages/roomGet/roomGet.wxss"});    
__wxAppCode__['pages/roomGet/roomGet.wxml']=$gwx('./pages/roomGet/roomGet.wxml');

__wxAppCode__['pages/user/user.wxss']=setCssToHead(["body { background-color: #f1f1f1; font-size: ",[0,30],"; }\n.",[1],"li:active { background-color: #eeeeee; }\n.",[1],"user-data-bar { width: 100%; height: ",[0,70],"; background-color: #ffffff; border: ",[0,1]," solid #eeeeee; border-bottom: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: 0 ",[0,80]," ",[0,10]," ",[0,80],"; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"user-data-bar .",[1],"data-bar { line-height: ",[0,70],"; font-size: ",[0,28],"; color: #707070; }\n.",[1],"user-data-bar .",[1],"data-bar .",[1],"data-bar-num { color: #E96D71; font-size: ",[0,26],"; margin-left: ",[0,10],"; }\n.",[1],"list-content { background: #fff; }\n.",[1],"list { width: 100%; border-bottom: ",[0,15]," solid #f1f1f1; background: #fff; }\n.",[1],"list:last-child { border: none; }\n.",[1],"list .",[1],"li { width: 92%; height: ",[0,100],"; padding: 0 4%; border-bottom: 1px solid #f3f3f3; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; color: #707070; }\n.",[1],"list .",[1],"li.",[1],"noborder { border-bottom: 0; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; }\n.",[1],"list .",[1],"li .",[1],"icon { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; width: ",[0,50],"; height: ",[0,50],"; }\n.",[1],"list .",[1],"li .",[1],"icon wx-image { width: ",[0,50],"; height: ",[0,50],"; }\n.",[1],"list .",[1],"li .",[1],"text { padding-left: ",[0,20],"; width: 100%; color: #666; font-size: ",[0,30],"; }\n.",[1],"list .",[1],"li .",[1],"textName { padding-left: ",[0,20],"; width: 100%; color: #666; font-size: ",[0,30],"; }\n",],undefined,{path:"./pages/user/user.wxss"});    
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
       plus.webview.getLaunchWebview().evalJS('__uniAppViewReadyCallback__("' + plus.webview.currentWebview()
           .id + '")')
})();

