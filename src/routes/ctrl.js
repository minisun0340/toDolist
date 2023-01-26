'use strict';

const output = {
    home:(req, res)=>{
        console.log('GET 홈 화면으로 이동');
        res.render('home');
    }
}

const process = {
    login:(req, res)=>{
        console.log('POST 로그인');
    }
}

module.exports = {
    output,
    process,
}