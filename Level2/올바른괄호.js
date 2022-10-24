/*

문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

입출력 예
s	answer
"()()"	true
"(())()"	true
")()("	false
"(()("	false

*/

function solution(s){
    
  //s를 배열로 변경한다.
  //옮겨담을 빈배열에 "("일 경우에 담는다.
  //만약 i번째가 )일 경우 스택배열에 담겨있던것을 지운다. 
  //반복하다가 마지막이 빈배열일경우 트루 아니면 false 처리.
  let arr = s.split('');
  let stack = [];
  for (let i = 0 ; i < arr.length ; i ++ ) {
      if(arr[0]===')') return false;
      if (arr[i] === '(') {
          stack.push(arr[i]);
      } 
      else if (arr[i] === ')') {
          //스택에 담겨있는 값을 없애준다.
          //shift 로 하면 효율성테스트에서 통과안됨..
          stack.pop();
      }    
  }

  // return stack;
  // if (stack.length > 0) {
  //   return false;
  // }
  //   return true;
  return stack.length === 0 ? true : false;
}


//🤔 better || another code

function solution(s){
    let cum = 0
    for (let paren of s) {
        cum += paren === '('? 1: -1
        if(cum < 0) {
            return false
        }
    }
    return cum === 0? true: false;
}

  