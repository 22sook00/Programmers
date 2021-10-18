let strArr = nums.map((el)=>{
  return String(el);
}) 

let dupe = strArr.reduce((a,c)=>{
  if(a[a.length-1] === c){
  return a;
  }else{
  return a+c;
  }
})

let noDupeArr = dupe.split('') 
let divide = nums.length /2 ;
return noDupeArr.length > divide ? divide : noDupeArr.length;


//better code!!
function solution(nums) {
  //nums = [1,2,3,3] 
  //let a = nums.length / 2
  //중복되는 수를 먼저 뺀 수에서 경우의수를 고른다.
  //-> 중복된 수를 뺀 nums의 length가 nums.length/2
  let dupe = [...new Set(nums)] // dupe.length -> 3
  let divide = nums.length /2 ;
  
  return dupe.length > divide ? divide : dupe.length; 
}