/*
함수 solution은 정수 x와 자연수 n을 입력 받아, 
x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
*/

function solution(x, n) {
  //for 문을 n번째까지 돌리고
  //x 만큼 증가하도록하면됨
  let result = [];
  for(let i = 1; i<=n; i++){
      result.push(i*x) 
  }
  return result;
  
}

//better code || another code

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}