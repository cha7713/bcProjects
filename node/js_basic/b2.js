// 조건문, 반복문, 제어문, 연산자
// --------------------------------------------
// 조건문 : 만약에 이러면 저렇게 하고, 그러면 그렇게 해라
// 만약에 아이스아메리카노가 1500원이면 싸다, 1500원보다높으면 비싸다, 1500원보다낮으면 굿 이라고 출력하시오
// 만약에 아이스아메리카노가 1500원이면 
let ice_coffee = 1400
if( ice_coffee == 1500 )
  // 싸다, 
  console.log('싸다')
  // 수행문이 한줄이면 {} 생략 가능
// 1500원보다높으면
else if( ice_coffee > 1500 ){
  // 비싸다,   
  console.log('비싸다')
}
// 1500원보다낮으면 : ice_coffee < 1500
else{
  // 굿 이라고 출력하시오
  console.log('굿')
} 


ice_coffee = 1400
if( ice_coffee == 1500 )
  console.log('싸다')  
else if( ice_coffee > 1500 ){  
  console.log('비싸다')
}else{
  console.log('굿')
} 
// =============================================
// 1500원 이하(포함) 면 무조건 싸고, 나머지는 다 비싸다 : 상황이 2개
if (ice_coffee <= 1500) {
  console.log( '싸다' )
} else {
  console.log( '비싸다' )
}
// 상황이 2개이고, 해야할 일이 값을 세팅하는 것이라면 -> 삼항연산자 사용
let result
if (ice_coffee <= 1500) {
  result= '싸다' 
} else {
  result= '비싸다'
}
console.log( result )
// 삼항연산자 => 조건 ? 참일때값 : 거짓일때값
result = ice_coffee <= 1500 ? '싸다' : '비싸다'
console.log( result )