/*
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 
3 + 4 + 5 = 12이므로 12를 리턴합니다.
 */

function solution(a, b) {
  //a부터 b 까지 for 문돌린다음에
  //i번째를 더한다
  //음수인 경우를 생각해서 if문으로 대소비교를 넣어준다.
  let sum = 0;
  if(a<b){
    for(let i=a;i<=b;i++){
        sum+=i;
    }
  }else{
      for(let i=b; i<=a; i++){
          sum+=i;
      }
  }
  return sum;
}

//better code || another code
function solution(a, b){
  return (a+b)*(Math.abs(b-a)+1)/2;
}
