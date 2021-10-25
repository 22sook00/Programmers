/*
명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 
다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 
이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.
아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.
명함 번호	가로 길이	세로 길이
1	60	50
2	30	70
3	60	30
4	80	40
가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 
하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 
이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(sizes) {
  //sizes = [[60, 50], [30, 70], [60, 30], [80, 40]] 
  // -> 모든 지갑크기 만족하기 위해서 일단 각 최대값 먼저 구하기
  // 가로세로 중 더 큰값은 longer 비교해서 longer보다 크면 longer에 재할당 
  // 작은 값은 shorter 비교해서 shorter에 재할당
  // 최종적으로 각 최대값끼리 곱해주면 모든명함 수납가능.
let longer = 0;
let shorter = 0;

for(let el of sizes) {
//len[0]이 가로길이, len[1]이 세로길이 이다.
  if(el[0] > el[1]){ // 가로가 더 긴 경우
    if(longer < el[0]) longer = el[0];
    if(shorter < el[1]) shorter = el[1];
  }
  else { // 세로가 더 긴 경우
    if(longer < el[1]) longer = el[1];
    if(shorter < el[0]) shorter = el[0];
  }
};
return longer * shorter;
}

//better code || another code

function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}