const express = require('express');
const mysql = require('mysql');
const router = express.Router();



let conn = mysql.createConnection({
    host: '175.24.44.128',
    user: 'estudys',
    password: '654321',
    database: 'estudy'
});
conn.connect();
//注册
router.get('/getimage', (req, res) => {
    let telphone = req.query.telphone;
    let password = req.query.password;
    let job = req.query.job;
    // console.log(telphone,password,job);
    conn.query(`select name from userimage where telphone="${telphone}" && job="${job}"`, function (err, file, files) {
        if (err) return err;
        if (file.length == 0) {
            // 创建用户将用户信息插入到数据库中
            conn.query('insert into userimage (name,idcard,wxtel,qqtel,youxiang,sex,telphone,password,job) values (?,?,?,?,?,?,?,?,?)', ['没有填写', '没有填写', '没有填写', '没有填写', '没有填写', '1', telphone, password, job], function (err, file, files) {
                if (err) return err;
                res.end('注册成功');
            });
        } else {
            res.end('您应该注册过账号了，请点击忘记密码');
        }
    });
});
//验证码传输
router.get('/getCode', (req, res) => {
    let cmpCode = Math.round(Math.random() * 1000000);
    let cmp1 = JSON.stringify(cmpCode);
    res.send(cmp1);
});
router.get('/username', (req, res) => {
    let uploadimage = req.query.thenum;
    let stiac = req.query.static;
    let job = req.query.job;
    conn.query(`select * from userimage where ${stiac}="${uploadimage}" && job="${job}"`, function (err, file, files) {
        if (err) return err;
        res.send(file);
    });
});

//用户登陆
router.get('/upload', (req, res) => {
    let uploadimage = req.query.uploadimage;
    let password = req.query.password;
    let stiac = req.query.stiac;
    let job = req.query.job;
    // console.log(uploadimage,password,stiac,job);
    conn.query(`select name from userimage where ${stiac}="${uploadimage}" && job="${job}" && password="${password}"`, function (err, file, files) {
        if (err) return err;
        if (file.length == 0) {
            res.end('密码错误或者账号错误，请注册或者切换登陆模块再次登陆');
        } else {
            res.cookie('images', `${uploadimage}&${job}&${stiac}`);
            res.end('登陆成功');
        }
    });
});
//用户忘记密码
router.get('/forget', (req, res) => {
    let telphone = req.query.telphone;
    let job = req.query.job;
    // console.log(uploadimage,password,stiac,job);
    conn.query(`select name from userimage where telphone="${telphone}" && job="${job}"`, function (err, file, files) {
        if (err) return err;
        if (file.length == 0) {
            res.end('请输入您注册时的手机号码');
        } else {
            let cmpCode = Math.round(Math.random() * 1000000);
            let cmp1 = JSON.stringify(cmpCode);
            res.send(cmp1);
        }
    });
});
//用户修改密码
router.get('/reset', (req, res) => {
    let uploadimage = req.query.uploadimage;
    let password = req.query.password;
    let stiac = req.query.stiac;
    let job = req.query.job;
    // console.log(uploadimage,password,stiac,job);
    conn.query(`update userimage set password="${password}" where ${stiac}="${uploadimage}" && job="${job}"`, function (err, file, files) {
        if (err) return err;
        res.send('修改成功');
    });
});

//用户修改信息

router.get('/updataimages', (req, res) => {
    // let uploadimage = req.query.uploadimage;
    // let password = req.query.password;
    // let stiac = req.query.stiac;
    let thearr = JSON.parse(req.query.thearr);
    console.log(thearr);
    
    console.log(`update userimage set sex="${thearr.sex}", name="${thearr.name}", telphone="${thearr.telphone}", idcard="${thearr.idcard}", wxtel="${thearr.wxtel}" ,qqtel="${thearr.qqtel}", youxiang="${thearr.youxiang}" where id=${thearr.id}`);
    conn.query(`update userimage set sex="${thearr.sex}", name="${thearr.name}", telphone="${thearr.telphone}", idcard="${thearr.idcard}", wxtel="${thearr.wxtel}" ,qqtel="${thearr.qqtel}", youxiang="${thearr.youxiang}" where id=${thearr.id}`, function (err, file, files) {
        if (err) return err;
        res.send('修改成功');
    });
});
// {"id":4,"name":"123","password":"wu980525","telphone":"13123733417","idcard":"111111111111111111","wxtel":"w123456543","qqtel":"2134432454","youxiang":"123425@qq.com","sex":"1","job":"老师"}

module.exports = router;