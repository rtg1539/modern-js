'use strict'
/*
let user = {
  name: 'John',
  age: 30,
}

user.sayHi = function() {
  console.log('Hi');
}

user.sayHi();

user = {
  sayHi() { // === sayHi: function() {
    console.log('Hi')
  }
}

// this
user = {
  name: 'John',
  age: 30,
  sayHi() {
    console.log(this.name);
  }
}

user.sayHi()


let user2 = {
  name: "John",
  age: 30,

  sayHi() {
    console.log( user2.name ); // Error
  }
};

let admin = user2;
user2 = null;

// admin.sayHi();

function sayHi() {
  console.log( this.name );
}

sayHi()
*/


/*
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

user.f = sayHi;
admin.f = sayHi;

user.f(); // John  (this === user)
admin.f(); // Admin  (this === admin)

function sayHi2() {
  console.log(this)
}

sayHi2()
*/

/*
// this in arrow function
let user = {
  firstName: "보라",
  sayHi() {
    // 화살표 함수는 this를 가지지 않고 외부 환경의 this를 참조한다.
    let arrow = () => console.log(this);
    arrow();
  }
};

user.sayHi();

let user2 = {
  firstName: "보라",
  sayHi() {
    // 일반 함수는 this의 값이 undefined로 할당된다. 엄격모드가 아닌경우 전역 환경의 this를 참조한다
    let arrow = function () { console.log(this) };
    arrow();
  }
};

user2.sayHi();
*/

// @Tasks
/* 1. 객체 리터럴에서 this 사용하기
함수 makeUser는 객체를 반환합니다.
이 객체의 ref에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까요?
*/

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

// console.log( user.ref.name ); //Error 발생

function makeUser2() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user2 = makeUser2();
console.log(user2.ref().name)

/* 2. 계산기 만들기
 calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.
 - read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 입력받은 값은 객체의 프로퍼티에 저장합니다.
 - sum()은 저장된 두 값의 합을 반환합니다.
 - mul()은 저장된 두 값의 곱을 반환합니다.
*/

let calculator = {
  sum: () => {
    return this.a + this.b;
  },
  mul: () => {
    return this.a * this.b;
  },
  read: (a, b) => {
    this.a = a
    this.b = b
  }
};

calculator.read(5, 6);
console.log( calculator.sum() );
console.log( calculator.mul() );

/*3. 체이닝
올라가기(up)와 내려가기(down) 메서드를 제공하는 객체 ladder가 있습니다.
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    alert( this.step );
  }
};

메서드를 연이어 호출하고자 한다면 아래와 같이 코드를 작성할 수 있습니다.
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

up, down, showStep을 수정해 아래처럼 메서드 호출 체이닝이 가능하도록 해봅시다.
ladder.up().up().down().showStep(); // 1
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    console.log( this.step );
    return this;
  }
};

ladder.up().up().down().showStep(); // 1
