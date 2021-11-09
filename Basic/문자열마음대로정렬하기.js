/*
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 
각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 ["sun", "bed", "car"]이고 
n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
*/

function solution(strings, n) {
  //strings 를 먼저 솔팅하여 첫번째 문자열부터 오름차순만들어줌
  //-> 추후 n번째가 같을경우를 위해서
  // 그다음에 다시한번 솔팅해주는데 n번째 같을때는 오름차순으로,
  // 1 오름차순, -1 역오름차순. 
  
  strings.sort();
  return strings.sort((a,b)=>{
      if(a[n]===b[n]){
          return a-b;
      }else if(a[n]>b[n]){
          return 1;
      }else return -1;
  })
}

//better code || another code
//localeCompare 라는 메소드 처음알음.. 
//문자열을 사전적 순서로 정렬하는 메소드!
return strings.sort((string1, string2) => string1[n] === string2[n] 
? string1.localeCompare(string2) 
: string1[n].localeCompare(string2[n]));