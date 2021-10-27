/*
네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 
다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 
지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
"지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
*/

function solution(n, arr1, arr2) {
  //!시간 내 풀지못함.
  //arr1,arr2 map 돌려서 각 el번째들을 2진수로 변경
  //el.toString 으로 10진수를 2진수로 변경->1001
  //padStart(n,0) 로 왼쪽에서부터 0으로 채워준다. -> 01001
  //n만큼 반복문을 돌려서 
  //arr1 || arr2 하나라도 el 의 i 번째가 1이라면 # 아니면 ""->replaceAll로 퉁.
  //빈 배열에 푸쉬해준다.
  arr1 = arr1.map(el=>el.toString(2).padStart(n,0))
  //['01001', '10100', '11100', '10010', '01011']
  arr2 = arr2.map(el=>el.toString(2).padStart(n,0))
  //['11110', '00001', '10101', '10001', '11100']
  
  for(let i = 0; i<n; i++){
      
      arr1[i] = arr1[i].replaceAll(1,"#")
      arr1[i] = arr1[i].replaceAll(0," ")
      arr2[i] = arr2[i].replaceAll(1,"#")
      arr2[i] = arr2[i].replaceAll(0," ")
  }
  let result = [];
  let temp = ''
  for(let j = 0; j<5; j++){
    if(arr1[j]==='#' || arr2[j]==='#'){
    temp += '#'
    }else {
    temp += ' ';
    }
    result.push(temp)
  }
  return result;
}

// better code || another code

function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    // 입력받은 두 array의 수를 하나씩 가져와서 이진법 변환
    // 0을 채워서 자릿수 맞추기
    const arr1Bin = arr1[i].toString(2).padStart(n, 0);
    const arr2Bin = arr2[i].toString(2).padStart(n, 0);
    // 만들어진 두 이진수(문자열)을 한글자씩 접근하여 비교하기
    // 둘 중 하나라도 1이면 #(벽), 둘다 0인경우 공백
    // 지도의 한 줄
    let map_row = '';
    for (let j = 0; j < n; j++) {
      if (arr1Bin[j] === '1' || arr2Bin[j] === '1') {
        map_row += '#';
      }
      else {
        map_row += ' ';
      }
    }
    answer.push(map_row);
  }
  return answer;
}

//비트 OR 연산자
function solution(n, arr1, arr2) {
  let answer = [];
  for(let i=0; i<n; i++){
      // toString(2)은 이진수로 반환하는 것.
      const bin = (arr1[i] | arr2[i]).toString(2);
      // console.log(bin);
      let line = [];
      for(let j = bin.length-n; j<bin.length; j++) { // j가(인덱스값)이 -1일 경우 undefined 반환.
          if(bin[j] === '1') { // 1이면 '#', 그 외 ' '
              line.push('#');
          } else {
              line.push(' ');
          }
      }
      answer.push(line.join(''));
  }
  return answer;
}