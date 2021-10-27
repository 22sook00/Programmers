/*
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
*/

function solution(arr) {
  //arr reduce 로 구한다음에 arr.length 만큼 나눠준다.
  let result = 0;
  result = arr.reduce((acc,cur)=>acc+cur)
  return result / arr.length;
}