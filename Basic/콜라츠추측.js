/*
1937년 Collatz란 사람에 의해 제기된 이 추측은, 
주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 
작업은 다음과 같습니다.

1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 
위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 
단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.
*/

function solution(num) {
  // for 문으로 500번 될때까지 반복한다.
  // 조건 : num%2===0짝 ; (num*3)+1홀
  // 1이 될때까지 위조건을 반복하고 500에 도달할때까지 1이 나오면 진행한 횟수를 리턴.
  // 그래도 안나오면 1이 안나오는거니까 -1 리턴.
  for(let i= 0; i<500; i++){
      if(num !== 1){
        num = num%2===0 ? num/2 : num*3+1;
      }else{
        return i;
      }
  }
  return -1;
}

// better code || another code
//while 문 & 재귀함수

function solution(num) {
var answer = 0;
while(num !=1 && answer !=500){
    num%2==0 ? num = num/2 : num = num*3 +1;
answer++;
}
return num == 1 ? answer : -1;
}

const solution = (num) => collatzGuessCount(num, 0);
const collatzGuessCount = (num, acc) => 
  (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);
const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);