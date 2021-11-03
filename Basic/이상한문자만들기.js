/*
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
*/

function solution(s) {
  //s문자열을 먼저 띄어쓰기에 따라 split 으로 변경한다.
  //각 배열을 mapping 한 후 각 요소의 i번째 판단.
  //빈문자열에 담아서 치환한다.
  //idx%2===0 ? toUpperCase() : toLowerCase() 처리한다.
  
  s = s.split(' ');
  s = s.map((el)=>{
      let temp = '';
      for(let i=0; i<el.length; i++){
          if(i%2===0){
              temp += el[i].toUpperCase();
          }else{
              temp += el[i].toLowerCase();
          }
      }
      return temp; //['TrY', 'HeLlO', 'WoRlD']
  })
  return s.join(' ');
}

//better code || another code
// mapping 한 배열들을 한번 더 스플릿하여 이중배열로 만든다음 각 key idx 에서 계산하는 방식.
function solution(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 
  ? j.toUpperCase() 
  : j).join('')).join(' ')
}

function solution(s) {
  return s.split(' ').map((a) => {
    return a.split('').map((b, i) => {
      return (i % 2 === 0) ? b.toUpperCase() : b.toLowerCase();
    }).join('');
  }).join(' ');
}