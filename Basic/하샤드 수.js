/*
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/

function solution(x) {
  //x를 스트링으로 만든다음 split 처리하여 배열로 만든다.
  //reduce 로 각 배열의 합을 구한 후 기존의 x로 나눴을때
  //나누어 떨어지면 true / 아니면 false 
  //나온값에서 나온값의 MathFloor 한값이 0이면 나누어떨어지는거고 아니면 false 이다.
  
  let tempArr = String(x).split('')
  let sum = tempArr.reduce((acc,cur)=>Number(acc)+Number(cur));
  if(x / sum - parseInt(x/sum) === 0){
      return true;
  }else{
      return false;
  }
}

// better code || another code
// js에서 0은 false 1은 true 로 출력. 
// 문제에서 나머지값이 딱떨어지는 0은 트루, 딱떨어지지 않는 1이 false 를 구하라고 했으니까 
// 그 반대가 될수 있도록 !를 붙여서 푼 케이스. 
function solution(x){
  return !(x%(x+'').split('').reduce(function (i, sum) {return +sum + +i;}));
}

