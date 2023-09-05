// const select = ["sang", "kaghaz", "gheichi"];
// let user1 = 0;
// let user2 = 0;
// let results = [];
// const user1select = document.getElementById("user1");
// const user2select = document.getElementById("user2");

// const btnUser1 = document.querySelector.n-1");
// const btnUser2 = document.querySelector(".btn-2");

// let resUser1, resUser2;

// btnUser1.addEventListener("click", () => {
//   if (!select.includes(user1select.value)) {
//     alert("please select valid item");
//     return;
//   }
//   resUser1 = user1select.value;
//   //game();
// });

// btnUser2.addEventListener("click", () => {
//   if (!select.includes(user2select.value)) {
//     alert("please select valid item");
//     return;
//   }
//   resUser2 = user2select.value;
//   game();
// });

// let a = 0, counter = 0;
// const game = () => {
//   console.log("user 1", resUser1);
//   console.log("user 2", resUser2);
//   if (
//     (resUser1 === "sang" && resUser2 === "gheichi")
//     (resUser1 === "kaghaz" && resUser2 === "sang")
//     (resUser1 === "gheichi" && resUser2 === "kaghaz")
//      ) 
//   {
//     console.log("user 1 wineer");
//     a = 1;
//   }
//   if (
//     (resUser2 === "sang" && resUser1 === "gheichi")
//     (resUser2 === "kaghaz" && resUser1 === "sang")
//     (resUser2 === "gheichi" && resUser1 === "kaghaz")
//   ) 
//   {
//     console.log("user 2 wineer");
//     a = 2;
//   }
//   const result = document.querySelector(results);

//   results[counter] = a;
//   counter++;
//   if (counter === 10) { resultFun(); }
//   console.log(results);
// };
// const resultFun = () => {
//   console.log("sss")
// }
//-----------------------------------------------------------
// let user = [1,2,-4,7,8,65,3,7,18,0];
// function justsort(users){
//   let temp = users.sort((a , b) => a-b)
//   console.log(temp);
// }
// justsort(user)
//----------------------------
let numbers = [];

let max = 0;
let min = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("لطفا یک عدد وارد کنید:"));
    numbers.push(num);
    console.log(num)
    if (num > max) {
      max = num;
      console.log(max)
  }
  else if (num < min) {
      min = num;
      console.log(min)
  }
}
alert("Your array: " + numbers);
alert("Maximum number: " + max);
alert("Minimum number: " + min);


//-----------------------------------------------------------------------
//تمرین سوم روزهای هفته

// let input = 6;
// switch (input) {
//     case 1:
//         alert('شنبه ')
//         break;
//     case 2:
//         alert('یکشنبه')
//         break;
//     case 3:
//         alert('دوشنبه')
//         break;
//     case 4:
//         alert('سه شنبه')
//         break;
//     case 5:
//         alert('چهارشنبه')
//         break;
//     case 6:
//         alert('پنجشنبه')
//         break;
//     case 7:
//         alert('جمعه')
//         break;
//     default:
//         alert('روزهای وارده صحیح نمیباشد')
//         break;
// }
//---------------------------------------------------------------
//تمرین نشان دادن سن و جنسیت با if

// let age = 50;
// let sex = 'مرد';
// if (age <= 20 && sex == 'زن'){console.log('شما یک زن نوجوان هستید')}
// else if (age <= 20 && sex =='مرد' ) {console.log('شما یک مرد نوجوان هستید')}
// else if (age > 20 && sex == "زن") {console.log('شما یک زن هستید ')}
// else {console.log('شما یک مرد هستید ')}

