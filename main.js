function sequence(startNumber = 0, step = 1) {
    let num = startNumber;
    return function generator() {
        let val = num; 
        num += step; 
        return val;
        
    }
    
}
let generator = sequence(10, 3);
console.log(generator()); // 10
console.log(generator()); // 13
let generatorTwo = sequence(7, 1);
console.log(generatorTwo()); // 7
console.log(generator()); // 16
console.log(generatorTwo()); //8
console.log(generatorTwo()); // 9
let generThree = sequence(5,5);
console.log(generThree());
console.log(generThree());
console.log(generThree());
console.log(generThree());
