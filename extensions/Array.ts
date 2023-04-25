import { count } from "console";

export module Array {

}

declare global {
    interface Array<T> {
      /** 배열 요소를 무작위로 섞기 */
      shuffle(): T[];

      /** 중복요소의 갯수 찾기 
       * arr = ['가','가','가','나','나','나','다','다'];
       * arr.findDuplicateNumbers(3);  = 2 
       * arr.findDuplicateNumbers(2);  = 1 
       * */
      findDuplicateNumbers(length:number) : number;
    }
}
  
Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

Array.prototype.findDuplicateNumbers = function(length:number) {
  const counts = {};
  let duplicates = 0;
  
  for(let i=0; i < this.length; i++) {
    if (counts[this[i]]) {
      counts[this[i]]++;
    } else {
      counts[this[i]] = 1;
    }    
  }
  console.log(counts);
  for (const num in counts) {
    if (counts[num] === length) {
      duplicates++;
    }
  }
  console.log("++ findDuplicateNumbers : " + this.length + " " + this + " : " + duplicates);
  return duplicates;
}




