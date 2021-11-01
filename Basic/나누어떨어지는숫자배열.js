/*
array의 각 element 중 divisor로 나누어 떨어지는 
값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
 */

function solution(arr, divisor) {
  // arr의 각 요소를 한번씩 돌고 (for문 || filter)
  // 각 요소 % divisor 가 0 이면 새 배열에 push 하여 담는다.
  // 만약 각요소 % divisor 했을때 새배열의 길이가 0이면 -1을 push 한다.
  let result = [];
  arr.filter(el=>el%divisor === 0 ? result.push(el) : el);
  result.length === 0 ? result.push(-1) : result.sort((a,b)=>a-b);
  return result;
              
}

//better code || another code

function solution(arr, divisor) {
    let answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}