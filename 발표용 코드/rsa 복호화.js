var s=prompt("복호화할 내용을 입력하세요") //암호화 입력값
var a = Number(s)
var p=3
var q=5 //p와 q는 소수
var e=7 //p-1(2), q-1(4)과 서로소인 정수
var d=7 //ed÷(p-1)(q-1)의 나머지가 1이 되는 d
var N=p*q
/*공개키 = N, e (15, 7)
  개인키 = d (7) */
document.write ("출력된 값은 "+(a ** d) % N+"입니다." )