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