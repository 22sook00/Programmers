/*
새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 
이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 
즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.
*/

function solution(price, money, count) {
  // price 를 for 문을 count 만큼 돌리고 변수에 price를 i번만큼 곱한 결과를 담는다.
  // money에서 가격 빼는데.
  // 그 값이 0이거나 money 보다 크면 걍 0리턴하고
  // 아니면 양수로 리턴.
  
  let temp = 0;
  for(let i = 1; i<=count; i++){
      temp += price*i;
  }
  if(money - temp < 0){
      return Math.abs(money - temp)
  }else{
      return 0;
  }
}

// better code || another code
//삼항연산자를 더 잘 써보도록 하자.. ! 
//가우스 공식이라고 한다.
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}