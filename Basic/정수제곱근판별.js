/*
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
*/

function solution(n) {
  //n이 x의 제곱이라면 -> if(n===(x*x)) return x+1의 제곱
  //x의 제곱근메소드로 구해서 -> Math.sqrt
  //그 값을 parseInt(Math.sqrt) 한 값으로 뺐을때 0이 나오면 x+1 
  //n!== (x*x) return -1

  let x = Math.sqrt(n);
  if(x - parseInt(x) === 0){
      return (x+1)*(x+1)
  }else{
      return -1
  }
}

// better code || another code
// 거듭제곱 메소드 Math.pow(거듭제곱할 값,거듭제곱 횟수)
// (x+1)*(x+1) 대신 Math.pow((x+1),2) 로 대체 가능! 