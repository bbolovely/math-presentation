var inTxt = prompt("복호화 할 내용을 입력하세요.")
var y = Number(inTxt)
for (i=0; i<200; i++) {
    equ = i*i-5*i+6-y
    if (equ===0) {
        document.write("복호화 된 내용은 "+i+"입니다. ")
        }
}