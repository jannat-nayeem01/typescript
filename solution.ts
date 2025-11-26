
//TODO: Problem 1

console.log("\nProblem 1 RESULT: \n");
const formatValue= (value: string | number | boolean)=>{
 if(typeof(value)==="number"){
     value = value*10;
 }else if(typeof(value)==="string"){
     value = value.toUpperCase();
 }else if(typeof(value)=== "boolean"){
     if(value === true){
         value = false;
     }else{
         value = true;
     }
 }
 return value;
}

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));


//TODO: Problem 2
console.log("\nProblem 2 RESULT: \n");
const getLength = (value: string | number[])=>{
    if(typeof value === "string"){return value.length;}
    if(Array.isArray(value))
    {
        return value.length;
    }
}

console.log(getLength('typescript'));
console.log(getLength([10,20,30,40]));

//TODO : Problem 3
console.log("\nProblem 3 RESULT: \n");
class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getDetails():string{
        return 'Name:'+this.name+',Age:'+this.age;
    }
}

const person1 = new Person('John Doe',30);
console.log(person1.getDetails());
const person2 = new Person('Alice',25);
console.log(person2.getDetails());

// TODO: Problem 4
console.log("\nProblem 4 RESULT: \n");

type Rating = 0| 1 | 2 | 3 |4 |5;
interface items {
    title:string,
    rating:Rating,
}
const filterByRating = (books:items[]) => {
 const newArray = books.map(book =>{
     if(book.rating>=4){
         return '{title:'+book.title+', rating:'+book.rating+'},';
     }



});
return newArray;
};


const books = [{
    title:'Book A',rating:4.5
},
    {title:'Book B',rating:3.2},
    {title:'Book C',rating:5.0}];

console.log(filterByRating(books));

// TODO: Problem 5
console.log("\nProblem 5 RESULT: \n");

type User= {
    id: number;
    name:string;
    email: string;
    isActive:boolean;
};
const filterActiveUsers = (users:User[])=>{
    const activeUsers = users.map(user=> {
        if(user.isActive){
            return  '{id:' +user.id+ ', name:'+ user.name+',email: '+user.email+', isActive:'+ user.isActive+'}';

        }

    })
     return activeUsers;
}
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

// TODO: Problem 6
console.log("\nProblem 6 RESULT: \n");

interface Book{
    title :string;
    author :string;
    publishedYear :number;
    isAvailable :boolean
}
 const printBookDetails = (book:Book)=>{
     console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`);
 }
const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

printBookDetails(myBook);

// TODO: Problem 7
console.log("\nProblem 7 RESULT: \n");

const getUniqueValues  = <T> (array1:T[],array2: T[]):T[] =>{
    const uniqueArray:T[] = [];

    const valueExists = (currentValue:T):boolean=>{
        for(let i=0;i<uniqueArray.length;i++){
            // console.log("\nCurrent: "+ currentValue+",arrayValue:"+uniqueArray[i]);
            if(uniqueArray[i] === currentValue){
                return true;
            }
        }
        return false;
    }
array1.forEach(item=>{
    if(!valueExists(item)){
        uniqueArray.push(item);
    }
})
    array2.forEach(item=>{

        if(!valueExists(item)){
            uniqueArray.push(item);
        }
    })
    return uniqueArray;
};


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

// TODO: Problem 8
console.log("\nProblem 8 RESULT: \n");

const calculateTotalPrice = (product:{
    name:string,
    quantity:number,
    price:number,
    discount?: number
}[]):number=>{
const finalPrice = product.reduce((sum,currentItem)=>{
    let totalPrice = currentItem.price*currentItem.quantity;
    if(currentItem.discount){
        totalPrice -= (totalPrice * currentItem.discount)/100;
    }

    return sum+totalPrice;

},0)
 return finalPrice;
}
const products = [
        { name: 'Pen', price: 10, quantity: 2 },
        { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
        { name: 'Bag', price: 50, quantity: 1, discount: 20 },
    ];

console.log(calculateTotalPrice(products));

// TODO: Problem 9
console.log("\nProblem 9 RESULT: \n");




