/*
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(participant, completion) {
  // 항상 참가자가 하나 더많고 비교대상이 완주한사람이 됨.
  // 알파벳 순으로 sorting 처리
  // 같은 인덱스끼리 비교가능하도록 만든다.
  // 참가자 for 문 돌린다음에 i번째 비교하기
  
  participant.sort();
  completion.sort();
  
  for(let i = 0; i<participant.length; i++){
      if(participant[i]!==completion[i]){
          return participant[i]
      }
  }
  
}

//better || another code
const solution = (participant, completion) => {
    participant.sort()
    completion.sort()
    while (participant.length) {
        //pop 을 해주므로서 participant.length 를 0 으로 만들어주고 무한루프를 방지할 수 있다.  
        let result = participant.pop()
        if (result !== completion.pop()) return result
    }
}