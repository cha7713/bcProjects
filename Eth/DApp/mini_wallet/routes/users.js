var express = require('express');
var router = express.Router();
//사설 네트워크에 연동 해야 함
const Web3 = require('web3')
var rpc = new Web3(new Web3.providers.HttpProvider('http://localhost:8123'))
console.log(rpc)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('wallet')
});

//rest api로 이더리움 기반 네트워크에 연동하여 업무를 지원하는 api
//모든 통신의 결과는 json으로 응답하겠다

//계좌 리스트
// ~/rpc/acList : get
router.get('/acList', function(req, res, next) {
  console.log(rpc.eth.accounts)
  res.json(rpc.eth.accounts)
  
});
router.get('/acListEx', function(req, res, next) {

let results =[]
  //1. 계좌리스트를 받는다
  let accounts = rpc.eth.accounts
 //2. 계좌를 하나씩 꺼낸다
 for ( idx in accounts) {
   let name = 'Account-' + (idx+1)//계좌 별칭
   let id = accounts[idx] //계좌주소 해쉬값
   let coin = rpc.fromWei(rpc.eth.getBalance(id), 'ether')
   // 개별 데이터를 객체에 담아서 한묶음으로 구성
   let tmp = {
     name:name,
     id:id,
     coin:coin
   }
   results.push(tmp)

 } 
  res.json(results)
  
});
//계좌별 잔고 가져오기
// ~/rpc/amount : post, id=~~
router.get('/amount', function(req, res, next) {
  
});
//계좌언락
// ~/rpc/unlock : post, pw=1234
router.get('/unlock', function(req, res, next) {
  
});
//송금
// ~/rpc/pay :post, from, to, amt
router.get('/pay', function(req, res, next) {
  
});
module.exports = router;
