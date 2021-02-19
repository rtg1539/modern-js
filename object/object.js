/*
let user = new Object(); // 객체 생성자
let user = {}; // 객체 리터럴 -> 추천
*/

/*
let user = {
  name: 'J',
  age: 30,
};

console.log(user.name)
console.log(user.age)

delete user.age;

console.log(user)
*/

/*
let user = {
  name: 'J',
  age: 30,
  'likes birds': true, // 복수의 단어를 키로 지정할 때 따옴표 사용
}
*/

/*
const user = {
  name: 'J',
}

user.name = 'P'; // 상수 객체의 프로퍼티는 수정이 가능하다

console.log(user.name)
*/

/*
let user = {};

// user.likes birds = true 문법오류

user['likes birds'] = true;

console.log(user['likes birds']);

delete user['likes birds'];

console.log(user['likes birds']);

let key = 'likes birds'

user[key] = true // === user['likes birds'] = true;
*/

/*
let user = {
  name: 'J',
  age: 30,
};

let key = 'name';
console.log(user.key) // undefined
*/

/*
// computed property (계산된 프로퍼티)
let fruit = 'apple';

let bag = {
  [fruit]: 5,
};

console.log(bag.apple);
*/

/*
let fruit = 'apple';
let bag = {};

bag[fruit + 'Computers'] = 5;
*/

/*
// 단축 프로퍼티
function makeUser(name, age) {
  return {
    name, // === name: name
    age, // === age: age
  }
}

let user = makeUser('J', 30);
console.log(user.name);
*/

/*
// 프로퍼티 키로 예약어 사용가능
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return); // 6

let obj2 = {
  0: 'test' // === '0': 'test
}

// 서로 같다
console.log(obj2[0]);
console.log(obj2['0']);

// __proto__ 사용안됨
let obj3 = {};
obj3.__proto__ = 5;
console.log(obj3.__proto__);
*/

/*
// in 연산자 => 'key' in object
let user = {};
console.log(user.noSuchProperty === undefined);

let user2 = { name: 'J', age: 30 };

console.log( 'age' in user2 );
console.log( 'blblblbl' in user2 );

let obj = {
  test: undefined,
};

console.log(obj.test);
console.log(obj.test === undefined); // 프로퍼티가 undefined로 할당되어 프로퍼티가 있지만 없다..?
console.log('test' in obj); // in 연산자를 통해 프로퍼티가 할당되었다는 것을 알 수 있음
*/

/*
// for...in 반복문 => 각 프로퍼티 키(key)를 이용하여 객체를 순회한다.
let user = {
  name: 'J',
  age: 30,
  isAdmin: true,
}

for (let key in user) {
  console.log(key, ':', user[key])
}
*/

/*// 객체 정렬
let codes = {
  '49': '독일',
  '41': '스위스',
  '44': '영국',
  '1': '미국',
}

for (let code in codes) {
  console.log(code) // 프로퍼티키가 정수로 변환되어 자동으로 정렬된다
}

let user = {
  name: 'J',
  surname: 'Smith',
  '1': 1,
};

user.age = 25;

for (let key in user) {
  console.log(key) // 프로퍼티키가 정수가 아니기 때문에 입력된 순서로 나열된다.
}

let codes2 = {
  '+49': '독일',
  '+41': '스위스',
  '+44': '영국',
  '+1': '미국',
}

for (let code in codes2) {
  console.log(+code) // +기호를 붙이면 정수로 취급되지 않는다.
}*/

// @Tasks
/* 1. 객체야 안녕?
 코드 한 줄로 아래 문제를 각각 풀어보세요.
 빈 객체 user를 만듭니다.
 user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
 user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
 name의 값을 Pete로 수정해보세요.
 user에서 프로퍼티 name을 삭제하세요.
*/
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

/* 2. 객체가 비어있는지 확인하기
객체에 프로퍼티가 하나도 없는 경우 true,
그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.

아래와 같이 동작해야 합니다.

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
*/

function isEmpty(obj) {
  for(let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

/* 3. 프로퍼티 합계 구하기
모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성해보세요.
sum엔 390이 저장되어야겠죠?
주의: salaries가 비어있다면 sum에 0이 저장되어야 합니다.
*/
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for(let key in salaries) {
  sum += salaries[key];
}

console.log(sum)

/*
4. 프로퍼티 값 두 배로 부풀리기
객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요.

// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// 함수 호출 후
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

multiplyNumeric은 아무것도 반환하지 않아도 괜찮습니다. 객체 자체를 수정해주기만 하면 됩니다.
*/

function multiplyNumeric(obj) {
  for(let key in obj) {
    if(typeof obj[key] === 'number') obj[key] *= 2;
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu)

