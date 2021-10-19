/*
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
*/

function solution(a, b) {
  //2016년1(a)1(b)일 금요일부터 시작하여 날짜구하기
  //1,3,5,7,8,10,12 -> 31일까지
  //4,6,9,11 -> 30일까지 
  
  // 금요일부터 시작이니까 금토일월~~순으로 배열을 작성한다. -> 정확도에서 떨어진다.
  // 각 달의 마지막일을 배열로 작성한다.
  // 1/1=>calcDate = 1 /  1/31=>calcDate=31 2/5=> calcDate=36 
  // 일월화~ 순차적으로 계산하는 대신 금요일이 1/1일이므로 +4를 더해준다.
  // 시작점 설정 : 최종적으로 calcDate 는 요일 7만큼 나눈 나머지값의 인덱스를 구할것이기 때문에 
  // 일요일은 0,월욜 1, .. 이렇게 가야한다. 그렇기때문에 금요일은 5번째 인덱스이므로 1일+4를 더해주어야 한다. 
  // temp에 month의 i 번째만큼 돈 일수를 더해서 재할당 해준다. 
  // 여기서 for 문 작성시, 인덱스 0부터 시작한다면 매개변수 a-1를 해줘야한다. 
  
  const day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const month = [31,29,31,30,31,30,31,31,30,31,30,31];
  let calcDate = b+4;
  for (let i=0; i<a-1; i++){
      calcDate += month[i];
  }
  let result = day[calcDate%7];
  return result;

}

//better code || another code
//new Date 객체 활용한 간단 solution1)
function getDayName(a,b){
  var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}
//new Date 객체 활용한 간단 solution2)
function getDayName(a,b){
  var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  var date = new Date(`2016-${a}-${b}`);
var day = date.getDay()
  return arr[day];
}