/*
문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, 
solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 
3이라면 "수박수"를 리턴하면 됩니다.
*/

function solution(n) {
  // 수박을 일단 지정한다.
  // 빈배열에 n만큼 반복하여 수박을 추가한다.
  // 배열을 조인으로 풀고 한글자씩 다시 배열로만든다.
  // 두글자니까 그걸 절반으로 자른값을 리턴한다
  let subak = '수박'
  let arr = []
  for(let i = 0; i<n; i++){
      arr.push(subak)
  }
  arr = arr.join('');//'수박수박..n번만큼'
  arr = arr.split('') //['수', '박', '수', '박', '수', '박']
  arr = arr.splice(0,arr.length/2) //['수', '박', '수']
  return arr.join('')
  
}

//better code!
const waterMelon = n => {
  return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}