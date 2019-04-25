let user = {
	name: '张三',
	password: '123'
};
let handler = {
	has(target, prop) {
		if (prop === 'login' && user.name != '张三' && user.password != '123') {
			console.log(`${target.name} 登陆失败`);
			return false;
		} else {
			console.log(`${target.name} 登陆成功`);
			return true;
		}
	}
}

let por = new Proxy(user, handler);


'login' in por