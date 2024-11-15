// Map method
const numbers=[1,2,3,4,5];
const doubled=numbers.map(num=>num*2);
console.log(doubled);

// filter method
const filter_numb=[1,2,3,4,5];
const even_numbers=filter_numb.filter(num=>num%2===0);
console.log(even_numbers);

// reduce method
const sum_numb=[1,2,3,4,5];
const sum_numbers=sum_numb.reduce((acc,num)=>acc+num,0);
console.log(sum_numbers);

// find method
const find_numb=[1,2,3,4,5];
const first_even=find_numb.find(num=>num%2===0);
console.log(first_even);