/*
🙋🏻‍♀️ JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
*/

//try 1 : 런타임에러 => 코드실행 시 문제는 맞췄지만 테스트는 런타임에러로 통과하지 못한 경우.
//이유는 빈문자열일 경우 undefined 처리되기 때문이다.
function solution(s) {
  //s 를 띄어쓰기 기준으로 배열로 만든다
  //각 배열의 첫번째를 toUpperCase 해준다음에 첫번째가 아닌값을 붙여준다.
  //조인처리한다.
  const strArr = s.split(' ');
  const result = strArr.map((str)=>{
      const ttl = str[0].toUpperCase()+str.slice(1).toLowerCase();
      return ttl;
  })
  return result.join(' ');
}

//try2 통과 => 매핑 돌릴때 str[0]번째가 아닌, str.charAt(0) 으로 사용하니 런타임에러가 해결되었다.
function solution(s) {
  //s 를 띄어쓰기 기준으로 배열로 만든다
  //각 배열의 첫번째를 toUpperCase 해준다음에 첫번째가 아닌값을 붙여준다.
  //조인처리한다.
  const strArr = s.split(' ');
  const result = strArr.map((str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
  })
  return result.join(' ');
}

//🤔 better || another code

function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
//charAt(0) 대신 [0]번째를 사용할 경우, 빈문자열에 대한 처리를 해주도록 한다.
function solution(s) { return s.split(" ").map(word => { if (word === "") return; return word[0].toUpperCase() + word.substring(1).toLowerCase(); }).join(" "); } 