
/*
 用户对象
 public class User 
    {
        public int ID { get; set; }
		//登录名
        public string AccountName { get; set; }
		//密码
        public string UserPassWord { get; set; }
		//积分
        public int Integral { get; set; } = 0;

    }
	
	游戏记录
	 public class Record
    {
        public int ID { get; set; }
		//登录名
        public string AccountName { get; set; }
		//积分
        public int Integral { get; set; }
		//创建时间
        public DateTime  CreateTime{ get; set; }
		//结束时间
        public DateTime EndTime { get; set; }


    }
	
	游戏表
	   public class Game
    {
		
        public int ID { get; set; }
		//名
        public string Name { get; set; }
        //描述
        public string Describe { get; set; }
		
        public string Url { get; set; }
    }
	
	视图对象
	  public class ResponseVo
    {
        /// <summary>
        /// 状态码：200 成功 500 失败
        /// </summary>
        public int Code { get; set; }

        /// <summary>
        /// 返回数据
        /// </summary>
        public object Data { get; set; }

        /// <summary>
        /// 响应消息
        /// </summary>
        public string Message { get; set; }

    }
	
		webSocket 消息对象
	
	 public class SocketEntity
    {
		//来自谁
        public string FromUser { get; set; } = "";
		//接受者
        public List<string> ToUser { get; set; } = new List<string>();
		//消息
        public string Message { get; set; } = "";
		//标记
        public string Tag { get; set; } = "";
		//房间ID
        public string RoomID { get; set; } = "";

    }	
	
*/

//后台连接地址 例如 export const baseUrl='http://127.0.0.7:8080'

export const baseUrl = 'http://localhost:60996';
//例:如下

//用户登陆
export const loginUser=baseUrl+'/Login/login' 
//返回ResponseVo ->User对象

//用户注册
export const registerUser=baseUrl+'/Login/Register' 


//根据ID 查询用户信息
export const userInfo=baseUrl+'/User/GetUserInfo' 
//需要参数名id


//获取用户游戏记录
export const GetRecordInfo=baseUrl+'/Record/GetRecordInfo' 
//需要参数 用户登录名accountName
 
 //得到题目
 export const GetTopic=baseUrl+'/Game/GetTopic' 


//获得用户对战的排行榜
 export const GetRecords=baseUrl+'/Record/GetRecords' 


//修改一条记录（游戏完成后修改结束时间 和所得积分）
export const UpdateRecord=baseUrl+'/Record/UpdateRecord' 

//增加一条记录
export const AddRecord=baseUrl+'/Record/AddRecord' 

//修改积分
export const updateIntegral=baseUrl+'/User/UpdateIntegral'
//需要参数 用户ID 修改后的积分

//获取到游戏列表
export const getGames=baseUrl+'/Game/GetGames'

//WebSocket 通信

/*
	标识码： m , s ,i , r , q , b
	1.m :代表发送的是普通信息（用户间交流）（后端判断）
	2.s:代表是系统信息（比如：xxx进入游戏之类的信息）（前台判断）
	3.i:代表用户进入房间（后台判断）
	4.r:用户房间准备（前台判断）
	5.q:退出房间(后台判断)
	6.b:游戏开始（前台判断）
	
*/


//export const wsuri = 'ws://172.16.31.232:4000';
//export const wsuri = 'ws://127.0.0.1:4000';

export const wsuri = 'ws://172.16.31.236:5009';

//获取添加记录
export const RecordList="";