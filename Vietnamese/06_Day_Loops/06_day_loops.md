<div align="center">
  <h1> 30 Days Of JavaScript: Loops</h1>
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

[<< Ngày 5](../05_Day_Arrays/05_day_arrays.md) | [Ngày 7 >>](../07_Day_Functions/07_day_functions.md)

![Ngày 5](../../images/banners/day_1_5.png)

- [📔 Ngày 6](#-ngay-6)
	- [Loops (vòng lặp)](#loops)
		- [Vòng lặp for](#vòng-lặp-for)
		- [Vòng lặp while](#vòng-lặp-while)
		- [Vòng lặp do while](#vòng-lặp-do-while)
		- [Vòng lặp for of](#vòng-lặp-for-of)
		- [break](#break)
		- [continue](#continue)
	- [💻 Bài tập: ngày 6](#-bài-tập-ngày-6)
		- [Bài tập: cấp độ 1](#bài-tập-cấp-độ-1)
		- [Bài tập: cấp độ 2](#bài-tập-cấp-độ-2)
		- [Bài tập: cấp độ 3](#bài-tập-cấp-độ-3)

# 📔 Ngày 6

## Loops

Hầu hết các hoạt động trong cuộc sống của chúng ta đều đầy sự lặp lại. Hãy tưởng tượng nếu tôi yêu cầu bạn in ra từ 0 đến 100 bằng cách sử dụng console.log(). Để thực hiện công việc đơn giản này, có thể mất từ 2 đến 5 phút của bạn, những công việc đơn điệu và lặp đi lặp lại như vậy có thể được thực hiện bằng cách sử dụng vòng lặp. Nếu bạn thích xem ví dụ qua video hơn, thì có thể nhấp vào link sau [video hướng dẫn](https://www.youtube.com/channel/UCM4xOopkYiPwJqyKsSqL9mw)


Trong các ngôn ngữ lập trình, chúng ta sử dụng các loại vòng lặp khác nhau để thực hiện các công việc lặp đi lặp lại. Những ví dụ sau đây là các vòng lặp phổ biến được sử dụng trong JavaScript và các ngôn ngữ lập trình khác.

### Vòng lặp for

```js
// cấu trúc vòng lặp for
for(initialization, condition, increment/decrement){
  // code ở đây
}
```

```js
for(let i = 0; i <= 5; i++){
  console.log(i)
}

// 0 1 2 3 4 5
```

```js
for(let i = 5; i >= 0; i--){
  console.log(i)
}

// 5 4 3 2 1 0
```

```js
for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}
```

```sh
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
```

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
```

Thêm tất cả phần tử vào mảng

```js
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // có thể viết ngắn là sum += numbers[i]

}

console.log(sum)  // 15
```

Tạo một mảng mới dựa trên mảng có sẵn

```js
const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)

}

console.log(newArr)  // [1, 4, 9, 16, 25]
```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### Vòng lặp while

```js
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5
```

### Vòng lặp do while

```js
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// 0 1 2 3 4 5
```

### Vòng lặp for of

Chúng ta sử dụng vòng lặp for of cho các mảng. Đây là một cách rất thuận tiện để lặp lại một mảng nếu chúng ta không quan tâm đến vị trí (index) của mỗi phần tử trong mảng.

```js
for (const element of arr) {
  // code ở đây
}
```

```js

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

// thêm tất cả số vào mảng
let sum = 0
for (const num of numbers) {
  sum = sum + num  
	// viết tắt là sum += num
  // từ đây chúng ta sẽ viết gọn code bằng +=, -=, *=, /= etc
}
console.log(sum) // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // lấy chữ cái đầu tiên của mỗi từ,  H C J R N M
}

```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### break

Break được dùng để dừng vòng lặp.

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2
```

Đoạn code trên dừng lại nếu tìm thấy số 3 trong quá trình lặp lại.

### continue

Chúng ta sử dụng từ khóa continue để bỏ qua một số lần lặp cụ thể.

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5
```

🌕 Bạn đẽ rất dụng cảm, bạn đã đi xa được tới đây.Bây giờ, bạn đã có sức mạnh để tự động hóa các tác vụ lặp đi lặp lại và nhàm chán. You Bạn vừa hoàn thành các thử thách ngày 6 và bạn đã đi 6 bước tiến vào hành trình trở thành một người vĩ đại. Bây giờ hãy làm một số bài tập cho não bộ và cơ thể của bạn.

## 💻 Bài tập: ngày 6

### Bài tập: cấp độ 1

  ```js
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  ```

1. Lặp từ 0 đến 10 bằng vòng lặp for, và làm tương tự bằng vòng lặp while và do while.
2. Lặp từ 10 đến 0 bằng vòng lặp for, và làm tương tự bằng vòng lặp while và do while.
3. Lặp từ 0 tới n bằng vòng lặp for.
4. Viết một vòng lặp để in ra một mẫu như sau bằng cách sử dụng console.log():

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```

5. Sử dụng vòng lặp để in ra mẫu như sau:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```

6. Sử dụng vòng lặp để in ra mẫu như sau:

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```

7. Sử dụng vòng lặp để in ra các số chẵn trong dãy số từ 0 tới 100.
8. Sử dụng vòng lặp để in ra các số lẻ trong dãy số từ 0 tới 100.
9. Sử dụng vòng lặp để in ra các số nguyên tố trong dãy số từ 0 tới 100.
10. Sử dụng vòng lặp để in ra tổng giá trị dãy số từ 0 tới 100.

    ```sh
    Giá trị tổng từ 0 tới 100 là is 5050.
    ```

11. Sử dụng vòng lặp để in ra tổng các sổ chẵn và tổng các số lẻ trong dãy số từ 0 tới 100.

    ```sh
    Từ 0 tới 100 có tổng số chẵn là 2550, và tổng số lẻ là 2500.
    ```

12. Sử dụng vòng lặp để tính tổng các sổ chẵn và tổng các số lẻ trong dãy số từ 0 tới 100. In hai giá trị này dưới dạng mảng.

    ```sh
      [2550, 2500]
    ```

13. Lập trình một script nhỏ tạo một mảng với 5 số ngẫu nhiên.
14. Lập trình một script nhỏ tạo một mảng với 5 số ngẫu nhiên, các số không được lặp lại
15. Lập trình một script nhỏ tạo 6 kí tự ngẫu nhiên.

    ```sh
    5j2khz
    ```

### Bài tập: cấp độ 2

1. Lập trình một script nhỏ tạo n kí tự ngẫu nhiên.

    ```sh
      fe3jo1gl124g
    ```

    ```sh
      xkqci4utda1lmbelpkm03rba
    ```

1. Lập trình một script nhỏ tạo 1 số hexadecimal(hệ lục phân) ngẫu nhiên.

    ```sh
    '#ee33df'
    ```

1. Lập trình một script nhỏ tạo 1 rgb(mã màu) ngẫu nhiên.

    ```sh
    rgb(240,180,80)
    ```

1. Sử dụng tên các quốc gia ở trên và tạo một mảng mới.

    ```sh
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    ```

1. Sử dụng mảng ở trên tạo một mảng độ dài tên các quốc gia.

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```

1. Sử dụng mảng các quốc gia ở trên tạo một mảng chứa các mảng như sau.

    ```sh
      [
      ['Albania', 'ALB', 7],
      ['Bolivia', 'BOL', 7],
      ['Canada', 'CAN', 6],
      ['Denmark', 'DEN', 7],
      ['Ethiopia', 'ETH', 8],
      ['Finland', 'FIN', 7],
      ['Germany', 'GER', 7],
      ['Hungary', 'HUN', 7],
      ['Ireland', 'IRE', 7],
      ['Iceland', 'ICE', 7],
      ['Japan', 'JAP', 5],
      ['Kenya', 'KEN', 5]
    ]
    ```

2. Dựa vào mảng các quốc gia trên, kiểm tra xem có quốc gia nào chứa từ 'land'. Nếu có thì in ra dưới dạng mảng. Nếu cả mảng không có thì in 'All these countries are without land'.

    ```sh
    ['Finland','Ireland', 'Iceland']
    ```

3. Dựa vào mảng các quốc gia trên, kiểm tra xem có quốc gia nào kết thúc với 'ia'. Nếu có thì in ra dưới dạng mảng. Nếu cả mảng không có thì in 'These are countries ends without ia'.

    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```

4. Dựa vào mảng các quốc gia trên, tìm quốc gia có nhiều ký tự trong tên nhất.

      ```sh
      Ethiopia
      ```

5. Dựa vào mảng các quốc gia trên, tìm quốc gia có 5 ký tự trong tên.

    ```sh
    ['Japan', 'Kenya']
    ```

6. Tìm chữ dài nhất trong mảng webTechs.
7. Sài mảng webTechs tạo một mảng chứa các mảng như sau:

    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```

8. Một ứng dụng được tạo bằng MongoDB, Express, React và Node được gọi là một ứng dụng MERN stack. Tạo chữ viết tắt MERN bằng cách sử dụng mảng mernStack:
9. Sử dụng vòng lặp for hay for of để in ra các phần tử trong mảng ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"].
10. Đây là mảng fruit , ['banana', 'orange', 'mango', 'lemon'] đảo ngược thứ tự trong mảng bàng vòng lặp không sử dụng reverse.
11. In ra tất cả các phần tử của mảng như được hiển thị bên dưới.

    ```js
      const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
    ````

    ```sh
      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB
    ```

### Bài tập: cấp độ 3

1. Sao chép mảng quốc gia (Tránh sự biến đổi)
1. Mảng là có thể bị biến đổi. Tạo một bản sao của mảng mà không sửa đổi bản gốc. Sắp xếp mảng sao chép và lưu trữ vào biến sortedCountries.
1. Sắp xếp mảng webTechs và mernStack.
1. Trích xuất tất cả các quốc gia chứa từ 'land' từ [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) và in ra dưới dạng mảng.
1. Tìm quốc gia có số ký tự lớn nhất trong [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
1. Trích xuất tất cả các quốc gia chứa từ 'land' từ [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) và in ra dưới dạng mảng.
1. Trích xuất tất cả các quốc gia chỉ chứa bốn ký tự từ[countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) và in ra dưới dạng mảng.
1. Trích xuất tất cả các quốc gia chứa hai hoặc nhiều từ [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) và in ra dưới dạng mảng.
1. Đảo ngược [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) và viết hoa tất cả các quốc gia và lưu trữ chúng vào một 

🎉 CHÚC MỪNG BẠN! 🎉

[<< Day 5](../05_Day_Arrays/05_day_arrays.md) | [Ngày 7 >>](../07_Day_Functions/07_day_functions.md)
