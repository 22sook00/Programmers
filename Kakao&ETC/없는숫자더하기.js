/*
0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다. 
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 
return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  //[0~9]-> 다들어가있지 않고 일부만 들어가있음. 
  // 0부터 9까지 for 문 돌아서 i번째 숫자에 포함되지 않는것만 추출

  let numSum = 0;
  for(let i = 0; i <= 9; i++) {
    if(!numbers.includes(i)){
        numSum += i
    }
  }

  return numSum;
}

//better code || another code
//0부터 9까지 다 더한값인 45에서 number에 있는 모든값을 더한것을 뺐다. 
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}