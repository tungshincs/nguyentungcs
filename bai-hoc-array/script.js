// // // // const arr = [1, 2, 3, 4, 5];

// // // // console.log(arr);

// // // // const arr2 = [];

// // // // const arr = ["BA", "Tùng", "Hùng", "Linh", "NHi", "Đức"];

// // // // arr.reverse();

// // // // console.log(arr);

// // // // arr.includes("BA");
// // // // for (let i = 0; i < arr.length; i++) {
// // // //   console.log(arr[i]);
// // // // }

// // // // for (let value of arr) {
// // // //   console.log(value);
// // // // }

// // // // Khai báo một mảng arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"]
// // // let arr = ["Linh", "NHi", "Hùng", "Hà", "Mai Anh"];
// // // // In arr ra console

// // // console.log(arr);

// // // // Viết câu lệnh in ra độ dài (số lượng phần tử) của arr

// // // console.log(arr.length);

// // // // VIết câu lệnh in ra phần tử đầu tiên trong mảng (index = 0)

// // // console.log(arr[0]);

// // // // Viết câu lệnh in ra phần tử thứ 3 trong mảng (index = 2)

// // // console.log(arr[2]);

// // // // Viết câu lệnh in ra phần tử cuối cùng của mảng (index = arr.length - 1)

// // // console.log(arr[arr.length - 1]);

// // // // Viết câu lệnh in ra phần tử có index = -1, chú ý kết quả

// // // console.log(arr.indexOf("Tùng"));

// // // // Sử dụng vòng lặp in ra từng giá trị trong arr

// // // for (let value of arr) {
// // //   console.log(value);
// // // }

// // // // Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng trong arr

// // // for (i = 0; i < arr.length; i++) {
// // //   console.log(`${i} : ${arr[i]}`);
// // // }

// // // // Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng trong arr theo chiều từ cuối mảng về đầu
// // // // mảng
// // // arr.reverse();

// // // for (i = 0; i < arr.length; i++) {
// // //   console.log(`${i} : ${arr[i]}`);
// // // }

// // // arr.reverse();

// // // // Viết câu lệnh thêm "Ba" cuối mảng sử dụng phương thưc push()

// // // arr.push("Ba");

// // // // Viết câu lệnh thêm "Thảo" vào cuối mảng không sử dụng phương thức push()

// // // arr.splice(6, 0, "Thảo");
// // // console.log(arr);
// // // // Viết câu lệnh thêm "Béo Ú" vào vị trí đầu tiên trong mảng sử dụng phương thức unshift()

// // // console.log(arr.unshift("Béo Ú"));

// // // // Viết câu lệnh xóa phần tử ở vị trí cuối cùng của mảng sử dụng phương thức pop()

// // // console.log(arr.pop(arr.length - 1));

// // // // Viết câu lệnh xóa phần tử ở vị trí đầu tiên trong mảng sử dụng phương thức shift()

// // // console.log(arr.shift(0));
// // // // Viết câu lệnh sao chép 2 phần tử đầu tiên sử dụng phương thức slice()

// // // console.log(arr.slice(0, 2));
// // // // Viết câu lệnh sao chép toàn bộ phần tử của mảng sử dụng phương thức slice()

// // // console.log(arr.slice());
// // // // Viết câu lệnh sao chép 3 phần tử cuối cùng của mảng sử dụng phương thức slice()

// // // console.log(arr.slice(3));
// // // // Viết câu lệnh xóa 2 phần tử thứ 2 và 3 ("Nhi" và "Hùng") khỏi mảng

// // // console.log(arr.splice(1, 2));

// // // // Viết câu lệnh thêm lại "Nhi" và "Hùng" vào vị trí thứ 2 và 3

// // // console.log(arr.splice(1, 0, "Nhi", "Hùng"));

// // // console.log(arr);
// // // // Viết câu lệnh để nối mảng ["Hồng Anh", "Bách"] vào cuối mảng arr sử dụng phương thức

// // // // concat(), chú ý mảng arr phải thay đổi sau khi nối

// // // console.log((arr1 = arr.concat(["Hồng Anh", "Bách"])));

// // // console.log(arr1);

// // // // Viết câu lệnh để nối mảng ["Vinh", "Huy"] vào đầu mảng arr sử dụng phương thức
// // // // concat(), chú ý mảng arr phải thay đổi sau khi nối
// // // arr3 = ["Vinh", "Huy"];
// // // arr2 = arr3.concat(arr1);

// // // console.log(arr2);

// // // // Viết câu lệnh tìm và in ra chỉ mục của "Ba" ra console

// // // console.log(arr.indexOf("Ba"));

// // // // Viết câu lệnh tìm và in ra chỉ mục của "Thảo" ra console, chú ý kết quả

// // // console.log(arr.indexOf("Thảo"));
// // // // Viết câu lệnh kiểm tra "Mai Anh" có trong mảng arr hay không sử dụng phương thức
// // // // includes() và in ra kết quả

// // // console.log(arr.includes("Mai Anh"));
// // // // Viết câu lệnh in arr ra console dưới dạng chuỗi sử dụng phương thức toString()

// // // console.log(arr2.toString(" "));
// // // // Viết câu lệnh nối các tên trong mảng thành một chuỗi duy nhất dạng "Vinh-Huy-Linh-...-

// // // // Hồng Anh-Bách" sử dụng phương thức join() và in ra console

// // // console.log(arr2.join("-"));

// // // // Viết câu lệnh đảo ngược các giá trị trong mảng arr sử dụng phương thức reverse()

// // // arr2.reverse();

// // // console.log(arr2);
// // // // Viết câu lệnh đổi chỗ 2 phần tử đầu và cuối mảng

// // // let a = arr2.pop();
// // // let b = arr2.splice(0, 1);

// // // let arr5 = a.concat(arr2, b);

// // // console.log(arr5);

// // // // Viết câu lệnh xóa toàn phần tử trong mảng

// // // arr.length = 0;

// // // console.log(arr);

// // // // Viết câu lệnh điền 10 phần tử có giá trị ngẫu nhiên vào mảng (sử dụng phương thức fill(),
// // // // Math.random())

// // // let arr = [1, 5, 3, 4, 2];

// // // function max(arr) {
// // //   let max = arr[0];

// // //   for (i = 1; i < arr.length - 1; i++) {
// // //     if (max < arr[i]) max = arr[i];
// // //   }

// // //   return max;
// // // }

// // // console.log(max(arr));

// // // let arr = [1, 5, 3, 4, 2];

// // // function minMax(arr) {
// // //   let max = arr[0];

// // //   let min = arr[0];

// // //   for (i = 1; i < arr.length - 1; i++) {
// // //     if (min > arr[i]) min = arr[i];

// // //     if (max < arr[i]) max = arr[i];
// // //   }

// // //   return [min, max];
// // // }

// // // console.log(minMax(arr));

// // // let arr = [1, 5, 3, 4, 2];

// // // function avg(arr) {
// // //   let total = 0;

// // //   for (i = 0; i < arr.length; i++) {
// // //     total = total + arr[i];
// // //   }

// // //   return total / arr.length;
// // // }

// // // console.log(avg(arr));

// // // let arr = [1, 5, 5, 6, 3, 4, 2];

// // // function secondLargest(arr) {
// // //   let first = arr[0];
// // //   let second = -Infinity;

// // //   for (let value of arr) {
// // //     if (value > first) {
// // //       second = first;
// // //       first = value;
// // //     } else if (value > second && value < first) second = value;
// // //   }

// // //   return second;
// // // }

// // // console.log(secondLargest(arr));

// // // 6. Viết hàm mix(arr1, arr2) nhận vào 2 mảng bất kỳ, thực hiện trộn (kết hợp) 2 mảng vào nhau
// // // và trả về kết quả là một mảng mới chứa các phần tử đã trộn

// // const arr1 = [1, 2, 3];

// // const arr2 = [4, 5, 6];

// // function mix(arr1, arr2) {
// //   let arr3 = arr1.concat(arr2);

// //   return arr3;
// // }

// // console.log(mix(arr1, arr2));

// // // 7. Viết hàm shuffle(arr) nhận vào một mảng chứa các giá trị bất kỳ, thực hiện xáo trộn ngẫu
// // // nhiên vị trí các phần tử trong mảng và trả về kết quả là mảng đã xáo trộn, lưu ý mảng arr phải
// // // thay đổi sau khi gọi hàm

// // // const arr = [10, 12, 15];
// // // shuffle(arr); // [12, 15, 10] => kết quả có thể khác nhau
// // // console.log(arr); // [12, 15, 10]

// // const array = [1, 2, 3, 4, 5, 6];

// // array.sort(() => Math.random() - 0.5);

// // console.log(array);

// // // 8. Viết hàm intersection(arr1, arr2) nhận vào 2 mảng bất kỳ, trả về kết quả là một mảng
// // // mới chứa toàn bộ phần tử xuất hiện trong cả 2 mảng đó

// // // intersection([1, 2, 3], [3, 4, 5]); // [3]

// // const arr5 = [1, 2, 7, 3, 4, 5, 6, 12];

// // const arr6 = [3, 7, 4, 5, 6, 10, 12];

// // function intersection(arr5, arr6) {
// //   for (i = 0; i < arr5.length; i++) {
// //     for (j = 0; j < arr6.length; j++) {
// //       if (arr5[i] == arr6[j]) {
// //         console.log(arr5[i]);
// //       }
// //     }
// //   }
// // }

// // console.log(intersection(arr5, arr6));

// // // 9. Viết hàm difference(arr1, arr2) nhận vào 2 mảng bất kỳ, trả về kết quả là một mảng mới
// // // chứa toàn bộ phần tử chỉ xuất hiện ở 1 trong 2 mảng

// // const arr7 = [6, 8, 10, 11, 15, 19];

// // const arr8 = [7, 8, 9, 12, 15, 19];

// // function difference(arr7, arr8) {
// //   difference = arr7.filter((x) => arr8.indexOf(x) === -1);

// //   difference2 = arr8.filter((x) => arr7.indexOf(x) === -1);
// //   console.log(difference2.concat(difference));
// // }

// // console.log(difference(arr7, arr8));

// // // 10. Viết hàm removeDuplicate(arr) nhận vào 1 mảng bất kỳ, trả về kết quả là một mảng mới
// // // chứa các giá trị duy nhất (unique - không chứa các giá trị trung lặp) của mảng

// // //  removeDuplicate([1, 2, 5, 2, 3, 1, 3]); // [1, 2, 5, 3]

// // const arr10 = [1, 2, 5, 2, 3, 1, 3, 9, 9, 10, 10, 10];

// // function removeDuplicate(arr10) {
// //   let unique = [...new Set(arr10)];

// //   console.log(unique);
// // }

// // console.log(removeDuplicate(arr10));


// // CALL BACK

// // FIRST CLASS FUNCTION

// const arr = [1, 2, 3, 4];

// // VỚi mỗi phần tử trong mảng
// // Tính luỹ thừa và in kq ra console

// function factorial(n) {
//   for (let i = 1; i <= n; i++) {
//     result *= i;
  
//   }

//   return result;
// }

// for (let value of arr) {
//   factorial(value);
// }

function capitalize(str) {
  return str.charAt(0).toUpperCase;
}

console.log(capitalize(["hello world"]));

console.log(capitalize(["javascript is fun"]));