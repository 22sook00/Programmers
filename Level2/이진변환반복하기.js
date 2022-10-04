/*
🙋🏻‍♀️  0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.


*/

function solution(s) {
    /* s의 0을 제거한다.
    1만 남은 s의 길이는 c 이며, c를 이진법으로 바꾸는 함수작성
    -> 2로 나눴을때 나머지가 0이될때까지 반복해야하고, 나머지들은 배열에 담는다
    제거된 0은 따로 배열에 담는다.
    이걸 반복을 해야함. */

    // -------------------------------
    // let zerox = Array(...s).filter((num)=>num !=='0').join('').length;

    let answer = [0,0]

    while(s !== '1') {
        s = s.split('');
        let temp = s.filter(v => v === '1').length;
        answer[0] ++;
        answer[1] += s.length - temp;
        s = temp.toString(2);
    }

    return answer;

}
//🤔 better || another code

function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        //null 값 방지하는 정규표현식 추가했다.
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}

// 또는
function solution(s) {
var answer = [];
let deleted = 0
let count =0
while(s !== '1'){
    count++
    let zero  =0 
    for(let i = 0 ; i <s.length ; i++){
        if(s[i] === '0') zero++
    }
    deleted += zero
    s = (s.length-zero).toString(2)       
}
return [count,deleted];
}