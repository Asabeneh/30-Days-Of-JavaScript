
<div align="center">
  <h1> Học JavaScript trong 30 ngày: Câu lệnh điều kiện</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

  <sub>Author:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
  <small> January, 2020</small>
  </sub>
</div>

[<< Ngày 3](../03_Day_Booleans_operators_date/03_booleans_operators_date.md) | [Ngày 5 >>](../05_Day_Arrays/05_day_arrays.md)

![Thirty Days Of JavaScript](../images/banners/day_1_4.png)

- [📔 Day 4](#-day-4)
  - [Câu lệnh điều kiện](#câu-lệnh-điều-kiện)
    - [If](#if)
    - [If Else](#if-else)
    - [If  Else if Else](#if--else-if-else)
    - [Switch](#switch)
    - [Ternary Operators (Toán tử ba ngôi)](#ternary-operators-toán-tử-ba-ngôi)
  - [💻 Bài tập](#-bài-tập)
    - [Bài tập: Cấp 1](#bài-tập-cấp-1)
    - [Bài tập: Cấp 2](#bài-tập-cấp-2)
    - [Bài tập: Cấp 3](#bài-tập-cấp-3)

# 📔 Day 4

## Câu lệnh điều kiện

Câu lệnh điều kiện được dùng kể đưa ra quyết định dựa trên những điều kiện khác nhau. Bởi mặc định, những câu lệnh trong một tập lệnh JavaScript được thực hiện theo thứ tự từ trên xuống dưới. Nếu tiến trình yêu cầu logic, ta có thể thay đổi thứ tự thực hiện lệnh bằng 2 cách sau:

- Thực hiện có điều kiện: một khối với một hoặc nhiều lệnh sẽ được thực hiện nếu một biểu thức là đúng (true).
- Thực hiện lặp lại: một khối với một hoặc nhiều lệnh sẽ được thực hiện lặp lại liên tục trong khi một biểu thức đúng (true). Trong phần này, chúng ta sẽ tìm hiểu những câu lệnh _if_, _else_ , _else if_. Những toán tử so sánh và logic mà chúng ta đã học trong những phần trước sẽ hữu dụng ở đây.

Câu lệnh điều kiện có thể được áp dụng bằng những cách:

- if
- if else
- if else if else
- Cấu trúc rẽ nhánh switch
- Toán tử 3 ngôi (ternary operator)

### If

Trong JavaScript và những ngôn ngữ lập trình khác, từ khóa _if_ được dùng để kiểm tra nếu một điều kiện là đúng hay sai và để thực hiện khối lệnh hay không. Để tạo một điều kiện if, chúng ta cần từ khóa _if_, theo sau là điều kiện được viết trong ngoặc đơn, và một khối lệnh được viết trong ngoặc nhọn ({}). 

```js
// cú pháp
if (condition) {
  // phần lệnh sẽ chạy với một điều kiện đúng
}
```

**Ví dụ:**

```js
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 là một số dương
```
Như bạn có thể thấy, 3 lớn hơn 0, nên 3 là số dương. Điều kiện là đúng và khối lệnh đã được thực hiện. Tuy nhiên, nêu điều kiện là sai, ta sẽ không thấy được kết quả.

```js
let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}
```
 Tương tự với điều kiện thứ hai, nếu isRaining là sai (false) thì khối lệnh sẽ không được thực hiện và ta sẽ không thấy kết quả. Để có thể thấy kết quả của một điều kiện sai, ta nên có một khối nữa bắt đầu bằng từ khóa _else_.

### If Else

Nếu điều kiện là đúng thì khối đầu tiên sẽ được thực hiện, nếu không thì khối điều kiện else sẽ được thực hiện.

```js
// cú pháp
if (condition) {
  // phần lệnh sẽ chạy nếu điều kiện là đúng
} else {
  // phần lệnh sẽ chạy nếu điều kiện là sai
}
```

```js
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number (3 là số dương)

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number (-3 là số âm)
```

```js
let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat. (Bạn cần áo mưa)

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat. (Bạn không cần áo mưa)
```

Điều kiện cuối cùng là sai, nên khối else đã được thực hiện. Nhưng nếu ta cần nhiều hơn 2 điều kiện thì sao? Trong trường hợp đó, ta sẽ dùng câu điều kiện *else if*. 

### If  Else if Else

Trong cuộc sống hằng ngày, chúng ta đưa ra quyết định một cách thường nhật. Chúng ta đưa ra quyết định không bằng kiểm tra một hay hai điều kiện, mà dựa trên một loạt những yếu tố điều điện khác nhau. Cũng giống như vậy, lập trình cũng có rất nhiều điều kiện. Ta dùng *else if* khi có nhiều điều kiện.

```js
// cú pháp
if (condition) {
     // lệnh
} else if (condition) {
   // lệnh
} else {
    //  lệnh

}
```

**Ví dụ:**

```js
let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
```

```js
// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}
```

### Switch

Switch là một lệnh thay thế cho **if else if else else**. Câu lệnh switch bắt đầu bằng từ khóa *switch* theo sau là ngoặc đơn và một khối lệnh. Bên trong khối lệnh đó ta sẽ có những trường hợp (cases) khác nhau. Khối case sẽ chạy nếu giá trị ở trong ngoặc đơn của câu lệnh switch trùng với giá trị của case. Lệnh break để dừng việc thực hiện lệnh, dừng kiểm tra những case tiếp theo khi điều kiện đã được thỏa mãn. Khối mặc định (default) sẽ chạy khi không có case nào thỏa mãn điều kiện.

```js
switch(caseValue){
  case 1:
    // lệnh
    break
  case 2:
   // lệnh
   break
  case 3:
   // lệnh
   break
  default:
   // lệnh
}
```

```js
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

// Những ví dụ switch khác
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

```

// Ví dụ sử dụng điều kiện trong case

```js
let num = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}
```

### Ternary Operators (Toán tử ba ngôi)

Một cách khác để viết lệnh điều kiện là sử dụng toán tử ba ngôi. Chúng ta đã nhắc đến ở một phần khác, nhưng ta nên nhắc lại ở đây

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

🌕   Bạn thật tuyệt vời và có một tiềm năng lớn. Bạn vừa hoàn thành những thử thách của ngày 4 và đã tiến bốn bước gần hơn đến sự ưu tú. Bây giờ hay làm một số bài tập để luyện tập trí óc và cơ bắp của bạn đi.

## 💻 Bài tập

### Bài tập: Cấp 1

1. Hãy lấy input của người dùng bằng cách sử dụng prompt(“Enter your age:”). Nếu người dùng lớn hơn hay bằng 18 tuổi, hãy trả lời: 'You are old enough to drive' nhưng nếu chưa đủ 18 hãy trả lời bằng cách nói người dùng đợi số năm để họ đủ 18 tuổi.

   ```sh
   Enter your age: 30
   You are old enough to drive.

   Enter your age:15
   You are left with 3 years to drive.
   ```

1. So sánh giá trị của myAge và yourAge bằng if … else. Dựa trên sự so sánh đó hãy xuất (log) kết quả ra console và cho biết ai lớn tuổi hơn (me or you). Sử dụng lệnh prompt(“Enter your age:”) để lấy tuổi bằng input của người dùng

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```

1. Nếu a lớn hơn b hãy trả về 'a is greater than b' nếu không thì 'a is less than b'. Hãy thử ứng dụng nó bằng hai cách:

    - Sử dụng if else
    - Sử dụng toán tử ba ngôi (ternary)

    ```js
      let a = 4
      let b = 3
    ```

    ```sh
      4 is greater than 3
    ```

1. Những số chẵn chia hết cho hai và phần dư là 0. Làm thể nào để kiểm tra một số có phải là số chẵn hay không trong JavaScript?

    ```sh
    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is is an odd number.
    ```

### Bài tập: Cấp 2

1. Viết một chương trình để chấm điểm chữ cho học sinh dựa trên điểm số:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
1. Kiểm tra xem mùa là Autumn (Thu), Winter (Đông), Spring (Xuân) hay Summer (Hạ).
   Nếu input của người dùng là :
   - September (Tháng 9), October (Tháng 10) hay November (Tháng 11), thì mùa là Autumn (Thu).
   - December (Tháng 12), January (Tháng 1) hay February (Tháng 2), thi mùa là Winter (Đông).
   - March (Tháng 3), April (Tháng 4) hay May (Tháng 5), thì mùa là Spring (Xuân).
   - June (Tháng 6), July (Tháng 7) hay August (Tháng 8), thì mùa là Summer(Hạ).
1. Kiểm tra xem một ngày là ngày thường hay là ngày cuối tuần. Chương trình của bạn sẽ lấy input là tên ngày.
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

### Bài tập: Cấp 3

1. Viết một chương trình để nói số ngày trong một tháng đó.
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

1. Viết một chương trình để nói số ngày trong một tháng đó, bây giờ hãy suy nghĩ về năm nhuận.


🎉 CHÚC MỪNG ! 🎉

[<< Ngày 3](../03_Day_Booleans_operators_date/03_booleans_operators_date.md) | [Ngày 5 >>](../05_Day_Arrays/05_day_arrays.md)git