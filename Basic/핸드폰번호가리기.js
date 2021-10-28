/*
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 
전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
*/

function solution(phone_number) {
    //substr 으로 넘버의 렝스에서 4만큼 뺀것부터, 4만큼 선택하고
    //변수에 담아준다.
    //반대로 그 앞에꺼는 *로 바꿔주고 변수에 담아준다.
    //두개합친다.
    let num = phone_number.substr(phone_number.length-4,4);
    let star = phone_number.substr(0,phone_number.length-4);
    star = star.split('').map(el=>el='*').join('');

    return star+num;
}


//better code || another code

//정규표현식
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

//code 는 짧으나 실행시간이 오래걸림.
const len = num.length - 4
return "*".repeat(len) + num.substring(len)