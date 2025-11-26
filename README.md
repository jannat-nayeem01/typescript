# typescript
১ । 
Interface, Object type ডাটা টাইপ এর সাথে কাজ করে । Interface এর Code Structure বেশি পরিচ্ছন্ন। Assigned Data/Object এর পরিমাণ যদি বেশি হয়, Interface ব্যবহার করা উত্তম। Interface এর Extensibility সুবিধা রয়েছে যার মাধ্যমে Property Inherit করা যায় Extends Keyword ব্যাবহার করে। Interface এ একি নাম দিয়ে একের অধিক Interface তৈরি সম্ভব যা Interface Auto Merge করে নেয় যা Existing Type Augmentation এ কাজে লাগে। Type Alias এই Declaration Merging সাপোর্ট করে না। 

২। 
Keyof keyword দিয়ে Type Consistency Maintain করা হয়। keyof নিশ্চিত করে, যে Object Property Type ব্যবহার করা হচ্ছে তা Object এর key এর সাথে মিল আছে । 
মিল না থাকলে এরর দেখাবে। 
type Student = {
    name: string;
    age: number;
};

function showInfo(student: Student, key: keyof Student) {
    console.log(student[key]);
    }


const s = { name: "Rafi", age: 20 };

showInfo(s, "name");
showInfo(s, "age");
showInfo(s, "class"); -> এখানে এরর দেখাবে কারণ class key নেই Student Object এ 

