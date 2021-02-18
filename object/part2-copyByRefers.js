/*
// 객체는 참조에 의해 복사된다.
let user = { name: 'John' };
let admin = user; // 객체가 저장된 주소를 복사한다.

user.name = 'Pete';
console.log(admin.name); // 객체가 저장된 주소는 user와 동일하기 때문에 user의 값을 변경하면 admin도 같이 변경된다.

// 참조에 의한 비교
let a = {};
let b = a;

console.log( a == b ); // true
console.log( a === b ); // true

let a2 = {};
let b2 = {};

console.log( a2 == b2 ); // false
*/

/*
// 객체 복사
let user = {
  name: 'Johe',
  age: 30,
  arr: [1, 2],
};

let clone = {};

for(let key in user) {
  clone[key] = user[key];
}

clone.name = 'Pete';
clone.arr.push(3)
console.log(user.name);
console.log(clone.name);
console.log(user.arr);
console.log(clone.arr);
*/

/*
// Object.assign

let user = { name: 'John' };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);

// console.log(user)

let user2 = { name: 'John' };

Object.assign(user2, { name: 'Pete' }); // 동일한 프로퍼티가 있는 경우 덮어씀

// console.log(user2.name)

let user3 = {
  name: 'Johe',
  age: 30,
  arr: [1, 2],
};

let clone = Object.assign({}, user3);

clone.name = 'Pete';
clone.arr.push(3)
console.log(user3.name);
console.log(clone.name);
console.log(user3.arr);
console.log(clone.arr);
*/

// 중첩 객체 복사
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

console.log( user.sizes === clone.sizes );

user.sizes.width++;
console.log(clone.sizes.width); // 중첩 객체의 경우 Object.assign으로 복사가 되지 않음 lodash 라이브러리를 사용하거나 JSON을 이용하여 복사해야 함




