# js-map-filter-reduce
Learning map and reduce in JavaScript

## Map
- สร้างชุดอาร์เรย์ใหม่ โดยแต่ละ Element array มาจากผลลัพธ์การเรียก call back ที่ส่งเข้า map()
- สร้างชุดอาร์เรย์ใหม่ โดยนำ Element array ปัจจุบัน ส่งเข้า call back ฟังก์ชันเพื่อสร้าง state ใหม่ โดย Element array ปัจจุบัน ไม่เกิด side effect

```
const myNumber = [1, 2, 3];

// create a new array from the result of calling
var resultMyNumber = myNumber.map(function (n) {
    return n * 2;
});

console.log(myNumber);  // [1, 2, 3]
console.log(resultMyNumber); // [2, 4, 6]

```

จะเห็นได้ว่า map() เป็น immutable function ที่ไม่รบกวน state ปัจจุบัน มันจะสร้าง state ใหม่ทุกครั้ง แบบนี้ เรียกว่า pure function

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## Filter
- คัดกรอง Element array ที่พิจารณาอยู่ ผ่าน call back function เมื่อเสร็จสิ้น ให้สร้าง new array ขึ้นมา
- การใช้งาน filter เป็น immutable เช่นกัน คือ ไม่ยุ่ง หรือ สร้าง side effect ให้ state ปัจจบุัน แจ่มจริงๆ

```
const number = [1, 2, 3];

var filtered = number.filter(function (i) {
    return i > 1;
});

console.log(number);    // [1, 2, 3]
console.log(filtered); // [2, 3]
```

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## Reduce

ยากจัง!!! ได้ยินจากชื่อ นึกถึง ลดละ อะไรบางอย่าง ยุบรวม ประมาณนี้

- เข้าถึง Element array แต่ละตัว แล้วกระทำตาม logic ที่กำหนด สะสมข้อมูลไปเรื่อยๆ โดยปกติจะวิ่งผ่าน Element array จาก ซ้าย-ขวา
- แล้วนำข้อมูลที่สะสม แสดงออกมาเป็น ค่าเดียว

```
// ตัวอย่างใช้ reducer เพื่อทำการ sum ข้อมูลใน array
const number = [0, 1, 2, 3];

// method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
var result = number.reduce(function (previousValue, currentValue, currentIndex, array) {
    console.log(previousValue);
    console.log(currentValue);
    console.log(currentIndex);

    return previousValue + currentValue;
});

console.log(result);    // 6
```

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## Reference
[https://medium.com/funk-tional/map-reduce-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99-7e5835f231c#.zhsa2d4xv](https://medium.com/funk-tional/map-reduce-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99-7e5835f231c#.zhsa2d4xv)
