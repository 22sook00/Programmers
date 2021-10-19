/*
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
*/

function solution(s) {
  //홀수인 경우 : s 를 배열로 만든다음에 렝스를 /2 를 한 값에 내림 처리를 한 인덱스의 값을 구하면 된다.
  //짝수인 경우 : s를 배열로 만든 다음 렝스를 /2 한 값과 앞의 인덱스를 리턴하면 된다.
  s = s.split('');
  if(s.length%2 === 1){
      return s[Math.floor(s.length/2)];
  }else{
      return s[(s.length/2)-1]+s[s.length/2]
  }
}

//better code || another code
function solution(s) {
  //다르ㅏ사람은 Math.ceil 을 통해 올림처리를 하여 해당 값까지 substr 으로 인덱스를 잘랐다.
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

//! substr() vs substring() vs slice()
// 세가지 전부 어떠한 값을 자른다는 의미에서 동일하지만 받는 매개변수에 따라 다르게 적용된다.
// substr(start,length) : 첫번째 매개변수로 들어오는 시작idx부터 두번째 매개변수로 들어오는 length까지 스트링을 잘라서 반환.
// substring(start,end) : 시작 idx 부터 end idx 까지 스트링을 잘라서 반환
// slice(start,end) : 시작 idx 부터 end idx 까지 스트링을 잘라서 반환, substring과 같은 기능
// ? substring 과 slice 차이점 : 매개변수 start 가 end 보다 클 경우, substring 은 end와 start 를 바꿔 인식한다. 
// ? ex)substring(1,0) -> substring(0,1) 로 파악하여 인식. 