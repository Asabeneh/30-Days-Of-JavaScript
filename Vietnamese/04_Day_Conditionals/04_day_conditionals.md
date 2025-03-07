<div align="center">
  <h1> 30 Days Of JavaScript: Booleans, Operators, Date</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Tác giả:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Tháng 1, 2020</small>
</sub>

</div>

[<< Ngày 3](../03_Day_Booleans_operators_date/03_booleans_operators_date.md) | [Ngày 5 >>](../05_Day_Arrays/05_day_arrays.md)

![Thirty Days Of JavaScript](../../images/banners/day_1_4.png)

- [📔 Ngày 4](#-ngày-4)

    - [Câu lệnh điều kiện](#câu-lệnh-điều-kiện)

        - [If](#if)
        - [If Else](#if-else)
        - [If Else if Else](#if-else-if-else)
        - [Switch](#switch)
        - [Ternary Operators](#ternary-operators)

    - [💻 Ngày 4: Bài tập](#-bài-tập)
        - [Bài tập: Cấp độ 1](#bài-tập-cấp-độ-1)
        - [Bài tập: Cấp độ 2](#bài-tập-cấp-độ-2)
        - [Bài tập: Cấp độ 3](#bài-tập-cấp-độ-3)

# 📔 Ngày 4

## Câu lệnh điều kiện

Các câu lệnh điều kiện được sử dụng để đưa ra quyết định dựa trên các điều kiện khác nhau. Mặc định, các câu lệnh trong
tập lệnh JavaScript được thực thi tuần tự từ trên xuống dưới. Tuy nhiên, nếu logic xử lý yêu cầu, luồng thực thi tuần tự
có thể được thay đổi theo hai cách:

- Thực thi có điều kiện: một khối gồm một hoặc nhiều câu lệnh sẽ được thực thi nếu một biểu thức nhất định là đúng
- Thực thi lặp đi lặp lại: một khối gồm một hoặc nhiều câu lệnh sẽ được thực thi lặp đi lặp lại miễn là một biểu
  thức nhất định là đúng. Trong phần này, chúng ta sẽ tìm hiểu về các câu lệnh if, else, else if. Các toán tử so sánh và
  logic mà chúng ta đã học trong các phần trước sẽ hữu ích ở đây.

Các câu lệnh điều kiện có thể được triển khai bằng các cách sau:

- if
- if else
- if else if else
- switch
- ternary operator (Toán tử ba ngôi)

### If

Trong JavaScript và các ngôn ngữ lập trình khác, từ khóa if được sử dụng để kiểm tra xem một điều kiện có đúng hay không
và thực thi khối mã tương ứng. Để tạo một điều kiện if, chúng ta cần sử dụng từ khóa if, điều kiện nằm trong dấu ngoặc
đơn và khối mã nằm trong dấu ngoặc nhọn ({})

```js// syntax
if (condition) {
//đây là phần mã chạy cho điều kiện đúng
}
```

**Ví dụ:**

```js
let num = 3;
if (num > 0) {
  console.log(`${num} là một số dương`);
}
//  3 là một số dương
```

Có thể thấy trong ví dụ trên, số 3 lớn hơn số 0, do đó nó là một số dương. Điều kiện là đúng và khối mã được
thực thi. Tuy nhiên, nếu điều kiện sai, chúng ta sẽ không thấy bất kỳ kết quả nào.

```js
let isRaining = true;
if (isRaining) {
  console.log("Nhớ mang theo áo mưa của bạn.");
}
```

Điều tương tự cũng xảy ra với điều kiện thứ hai, nếu isRaining là sai thì khối if sẽ không được thực thi và chúng ta
không thấy bất kỳ kết quả nào. Để xem kết quả của một điều kiện sai, chúng ta nên có một khối lệnh khác, nó sẽ là else.

### If Else

Nếu điều kiện là đúng, khối mã đầu tiên sẽ được thực thi, nếu không, điều kiện else sẽ được thực thi.

```js
// syntax
if (điều kiện) {
  //Đây là phần mã chạy cho điều kiện đúng
} else {
  //Đây là phần mã chạy cho điều kiện sai
}
```

```js
let num = 3;
if (num > 0) {
  console.log(`${num} là một số dương`);
} else {
  console.log(`${num} là một số âm`);
}
//  3 là một số dương
```

```js
num = -3;
if (num > 0) {
  console.log(`${num} là một số dương`);
} else {
  console.log(`${num} là một số âm`);
}
//  -3 là một số âm
```

```js
let isRaining = true;
if (isRaining) {
  console.log("Bạn cần một chiếc áo mưa.");
} else {
  console.log("Không cần một chiếc áo mưa.");
}
//Bạn cần một chiếc áo mưa.
```

```js
isRaining = false;
if (isRaining) {
  console.log("Bạn cần một chiếc áo mưa.");
} else {
  console.log("Không cần một chiếc áo mưa.");
}
// Không cần một chiếc áo mưa.
```

Điều kiện cuối cùng là sai, do đó khối else được thực thi. Nếu chúng ta có nhiều hơn hai điều kiện thì sao? Trong
trường hợp đó, chúng ta sẽ sử dụng các điều kiện _else if_.

### If Else if Else

Trong cuộc sống hàng ngày của chúng ta, chúng ta đưa ra quyết định hàng ngày. Chúng ta đưa ra quyết định không phải
bằng cách kiểm tra một hoặc hai điều kiện mà thay vào đó chúng ta đưa ra quyết định dựa trên nhiều điều kiện. Tương
tự như cuộc sống hàng ngày của chúng ta, lập trình cũng đầy đủ các điều kiện. Chúng ta sử dụng _else if_ khi chúng ta
có nhiều điều kiện.

```js
// cú pháp
if (điều kiện) {
     // code
} else if (điều kiện) {
   // code
} else {
    //  code

}
```

**Ví dụ:**

```js
let a = 0;
if (a > 0) {
  console.log(`${a} là một số dương`);
} else if (a < 0) {
  console.log(`${a} là một số âm`);
} else if (a == 0) {
  console.log(`${a} là số không`);
} else {
  console.log(`${a} không phải là số`);
}
```

```js
// if else if else
let weather = "trời nắng";
if (weather === "trời mưa") {
  console.log("Bạn cần một chiếc áo mưa.");
} else if (weather === "trời âm u") {
  console.log("Có thể trời lạnh, bạn cần một chiếc áo khoác.");
} else if (weather === "trời nắng") {
  console.log("Bạn có thể đi ra ngoài thoải mái.");
} else {
  console.log("Không cần một chiếc áo mưa.");
}
```

### Switch

Switch là một lựa chọn thay thế cho **if else if else else**.
Câu lệnh switch bắt đầu bằng từ khóa *switch* theo sau là dấu ngoặc đơn và khối mã. Bên trong khối mã chúng ta sẽ có
các trường hợp khác nhau. Khối trường hợp chạy nếu giá trị trong dấu ngoặc đơn của câu lệnh switch khớp với giá trị
trường hợp. Câu lệnh break là để chấm dứt việc thực thi để việc thực thi mã không đi xuống sau khi điều kiện được
thỏa mãn. Khối mặc định chạy nếu tất cả các trường hợp không thỏa mãn điều kiện.

```js
switch (caseValue) {
  case 1:
    // code
    break;
  case 2:
    // code
    break;
  case 3:
    // code
    break;
  default:
  // code
}
```

```js
let weather = "trời âm u";
switch (weather) {
  case "rainy":
    console.log("Bạn cần một chiếc áo mưa.");
    break;
  case "cloudy":
    console.log("Có thể trời lạnh, bạn cần một chiếc áo khoác.");
    break;
  case "sunny":
    console.log("Bạn có thể đi ra ngoài thoải mái.");
    break;
  default:
    console.log("Không cần một chiếc áo mưa.");
}

// Một ví dụ khác
let dayUserInput = prompt("What day is today ? Hôm nay là thứ mấy ?");
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Hôm nay là thứ 2");
    break;
  case "tuesday":
    console.log("Hôm nay là thứ 3");
    break;
  case "wednesday":
    console.log("Hôm nay là thứ 4");
    break;
  case "thursday":
    console.log("Hôm nay là thứ 5");
    break;
  case "friday":
    console.log("Hôm nay là thứ 6");
    break;
  case "saturday":
    console.log("Hôm nay là thứ 7");
    break;
  case "sunday":
    console.log("Hôm nay là chủ nhật");
    break;
  default:
    console.log("Đây không phải là một ngày trong tuần.");
}
```

// Ví dụ sử dụng điều kiện trong các trường hợp

```js
let num = prompt("Nhập vào một số:");
switch (true) {
  case num > 0:
    console.log("Số dương");
    break;
  case num == 0:
    console.log("Số không");
    break;
  case num < 0:
    console.log("Số âm");
    break;
  default:
    console.log("Không phải là số");
}
```

### Ternary Operators

Cách viết khác của điều kiện là sử dụng toán tử ba ngôi. Chúng ta đã đề cập đến điều này trong các phần khác, nhưng
chúng ta cũng
nên đề cập đến nó ở đây.

```js
let isRaining = true;
isRaining
  ? console.log("Bạn cần một chiếc áo mưa.")
  : console.log("Không cần một chiếc áo mưa.");
```

🌕 Bạn rất đặc biệt và có tiềm năng đáng kinh ngạc. Bạn vừa hoàn thành những thử thách của ngày thứ 4 và đã đi được 4
bước trên con đường đến thành công. Bây giờ hãy tập thể dục cho não và cơ thể của bạn.

## 💻 Bài tập

### Bài tập: Cấp độ 1

1. Nhập vào tuổi của bạn. Nếu bạn 18 tuổi hoặc hơn, hãy cho phản hồi: 'Bạn đủ tuổi để lái xe' nhưng nếu không phải 18
   hãy cho phản hồi khác nói rằng hãy đợi số năm mà anh ấy cần để đến 18 tuổi.

   ```sh
   Nhập vào tuổi của bạn: 30
   Bạn đủ tuổi để lái xe.
   

   Nhập vào tuổi của bạn: 15
   Bạn cần phải đợi 3 năm nữa để đủ tuổi để lái xe.

    ```


2. So sánh giá trị của tuổi của mình và tuổi của bạn bằng cách sử dụng if ... else. Dựa trên so sánh và ghi kết quả ra
   console để xác định ai lớn tuổi hơn (mình hay bạn). Sử dụng prompt ("Nhập tuổi của bạn:") để lấy tuổi làm đầu vào.

```sh
    Nhập tuổi của bạn: 30
    Bạn lớn hơn tôi 5 tuổi.
```

3. Nếu a lớn hơn b trả về 'a lớn hơn b' nếu không trả về 'a nhỏ hơn b'. Hãy thử thực hiện nó theo hai cách:

    - If else
    - Ternary operator.

   ```js
   let a = 4;
   let b = 3;
   ```

   ```sh
    4 lớn hơn 3

   ```

4. Các số chẵn chia hết cho 2 và số dư là 0. Làm thế nào để kiểm tra xem một số có phải là số chẵn hay không bằng cách
   sử dụng JavaScript?

   ```sh
   Nhập vào 1 số: 2
   2 là số chẵn

   Nhập vào 1 số: 9
   9 là số lẻ
   ```

### Bài tập: Cấp độ 2

5. Viết một đoạn code có thể đưa ra điểm cho sinh viên dựa trên điểm của họ:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
6. Kiểm tra xem mùa thu, mùa đông, mùa xuân hay mùa hè.
   Nếu người dùng nhập vào là:
    - Tháng 9, 10 hoặc 11, mùa thu.
    - Tháng 12, 1 hoặc 2, mùa đông.
    - Tháng 3, 4 hoặc 5, mùa xuân.
    - Tháng 6, 7 hoặc 8, mùa hè.
7. kiểm tra xem một ngày là ngày cuối tuần hay ngày làm việc. Kịch bản của bạn sẽ lấy ngày nhập làm input.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
```

### Bài tập: Cấp độ 3

8. Viết một chương trình cho biết số ngày trong một tháng.

```sh
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
```

9. Viết một chương trình cho biết số ngày trong một tháng, bây giờ hãy xem xét năm nhuận.

🎉 CONGRATULATIONS ! 🎉

[<< Day 3](../03_Day_Booleans_operators_date/03_booleans_operators_date.md) | [Day 5 >>](../05_Day_Arrays/05_day_arrays.md)
