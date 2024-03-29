/*길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. 이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. (단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)

예를 들어 A = [1, 4, 2] , B = [5, 4, 4] 라면

A에서 첫번째 숫자인 1, B에서 첫번째 숫자인 5를 뽑아 곱하여 더합니다. (누적된 값 : 0 + 5(1x5) = 5)
A에서 두번째 숫자인 4, B에서 세번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 5 + 16(4x4) = 21)
A에서 세번째 숫자인 2, B에서 두번째 숫자인 4를 뽑아 곱하여 더합니다. (누적된 값 : 21 + 8(2x4) = 29)
즉, 이 경우가 최소가 되므로 29를 return 합니다.

배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.

입출력 예
A	B	answer
[1, 4, 2]	[5, 4, 4]	29
[1,2]	[3,4]	10

*/

    //이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다
    //->뽑는 숫자의 각 합이 모든 수를 더한것보다 제일 최소가 되어야 함.
    //-> sort처리 하여 각각 낮은순차적으로 배열정리
    function solution(A,B){
      let result = 0;
      const sortA = A.sort((a,b)=>a-b);
      const sortB = B.sort((a,b)=>b-a); //역순
      
      for(let i = 0; i<sortA.length; i++){
          result += sortA[i]*sortB[i]
      }
      return result;
    }

    //🤔 better || another code

    function solution(A,B){
        A.sort((a, b) => a - b)
        B.sort((a, b) => b - a)
        return A.reduce((total, val, idx) => total + val * B[idx], 0)
    }