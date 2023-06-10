"use script";

let num = 12345;

console.log(typeof Number(num.toString().split('').reverse().join('')));

// ----------------------------------------------------

// Qoshish + operatori chap tarfdagi a qiymat o'ng tarafdagi b ga qo'shiladi
console.log(a+b);

// Ayirish + operatori o'ng tarfdagi a qiymatdan chap tarafdagi b qiymat ayriladi
console.log(a-b);

// Ikki operandni ko'paytirsh a qiymat b qiymatga ko'payib natija 50 ga teng bo'ladi
console.log(a*b);

// Chap operandni o'ng operanga bo'lish
console.log(a/b);

// Moduls operatori ikki operaddan qoldiq qaytarish 
console.log(a%b);

// Kattalashtirsh operatori operand qiymatini bittaga oshirish
console.log(a++);
console.log(a);

// Kichiklashtrish operatori operand qiymatini bittaga kamaytrish
console.log(++a);

if (a > b){
    console.log("true");
}else{
    console.log("false");
};