//用户实体类
var a='121';
var b='121';
function User(loginId, passwrod) {
	this.loginId = loginId;
	this.passwrod = passwrod;
};

User.prototype = {
	getLoginId: function() {
		return this.loginId;
	},
	getPassword: function() {
		return this.passwrod;
	},
	success: function() {
		console.log("登陆成功！");
	},
	errer: function() {
		console.log("登陆成功！");
	},
};

//代理用户类
function Land(user) {
	this.user = user;
};

Land.prototype = {
	getUser: function() {
		return this.user;
	},
	login: function() {
		if (this.user.getLoginId == a && this.user.getPassword == b) {
			return this.user.success();
		} else {
			return this.user.errer();
		}
	}
};

//实现方法
function test(){
	this.run=function(){
		new Land(new User("1213","123")).login() ;
	}
};

//调用方法
new test().run();
;
/******************************************************************/
{
	var person = {
	  loginId:'10086',
	  passwrod:'123'
	};
	
	var proxy = new Proxy(person, {
	  get: function(target, property) {
	    if (property in target) {
	      return target[property];
	    } else {
	      throw new ReferenceError("Property \"" + property + "\" does not exist.");
	    }
	  }
	});
	
	proxy.name // "张三"
}
