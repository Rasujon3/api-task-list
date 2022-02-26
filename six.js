/* 
৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
*/
const company = {
  name: "GP",
  ceo: { id: 1, name: "ajmol", food: "fuchka" },
  web: {
    work: "website development",
    employee: 22,
    framework: "react",
    tech: {
      first: "html",
      second: "css",
      third: "js",
    },
  },
};
const array = [7, 14, 21, 28, 35];
[one, balance, ...rest] = array;
console.log(balance);
// const name = company.name;
// console.log(name);
const { food, name } = company.ceo;
// console.log(name, food);
