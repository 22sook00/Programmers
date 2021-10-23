/*
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
*/

function solution(arr) {
  //sort 로 오름차순해서 가장 작은수를 솔팅한다.
  //sort 는 직접적으로 영향주니까 slice 처리해서 새로운변수에 담아 저장
  //sort 한 배열에서 맨앞자리 shift 새 변수에저장
  //기존의 arr 에서 indexOf 1이 있는것을 하나 빼는 splice 메소드 사용
  let newArr = arr.slice().sort((a,b)=>a-b);
  let min = newArr.shift();
  arr.splice(arr.indexOf(min),1);
  if(arr.length === 0){
      return [-1];
  }else{
      return arr;
  }
}
//better code || another code
function solution(arr) {
  //Math.min()메소드를 이용해 더 간단하게 풀 수 있다.
  arr.splice(arr.indexOf(Math.min(...arr)),1);
  if(arr.length<1) return[-1];
  return arr;
}