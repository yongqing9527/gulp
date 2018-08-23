

// 从网络中筛选localhost
const os = require('os');
let openUrl = (url) => {
    const child_process = require('child_process');//const 一个子进程
    var cmd = os.platform() === 'dirwen'?'open':'explorer';//返回操作系统名  苹果系统？打开:资源管理器
    child_process.spawnSync(cmd,['http://'+url]);
};
// openUrl('www.baidu.com');
let getLocalAdders =()=>{
    var netInfo = os.networkInterfaces();//返回一个对象,包含只有被赋予网络地址的网络接口.
    let getLocalAddress;//
    // console.log(netInfo);
    for (var i in netInfo){
        getLocalAddress = netInfo[i].filter(val=>{//筛选出符合条件的ip地址
           return val.family === 'IPv4';
        }).filter(val=>{
            return val.internal === false;
        });
        console.log(getLocalAddress[0]);
        if (getLocalAddress[0]){
            return getLocalAddress[0].address;
        }
    }
};
// openUrl(getLocalAdders()+':3000');
module.exports={
    openUrl,getLocalAdders
};

// 引用
// let port = 3000;
// server.listen(port,()=>{
//     openUrl.openUrl(openUrl.getLocalAdders()+':'+port);
// });