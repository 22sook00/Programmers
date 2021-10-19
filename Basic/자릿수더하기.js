/*
문제 설명
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
*/
function solution(n)
{
    // 자연수 n 을 스트링으로 변환한다음 배열로 쪼갠다  
    // 숫자형 변수를 하나 만든다.
    // 배열로 만든 숫자들을 for of 문을 돌려 각 el번째를 더해 숫자형 변수에 담아서 최종리턴한다.
    
    n = String(n).split('');
    let result = 0;
    for(let el of n){
        result += Number(el)
    }
    return result
}

//better || another code
function solution(n){
  return (n+'').split('').reduce((acc, cur) => acc + parseInt(cur), 0)
}