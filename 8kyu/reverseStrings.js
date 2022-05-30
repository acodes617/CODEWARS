function solution(str) {
  let splitGang = str.split("");
  let reverseArray = splitGang.reverse();
  let joinTogether = reverseArray.join("");
  return joinTogether;
}
