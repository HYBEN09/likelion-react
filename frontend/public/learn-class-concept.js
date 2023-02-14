// 유틸리티 함수
function getRandomNumber(n) {
  return Math.round(Math.random() * n);
}

function generateUniqueId() {
  const characters = "abcdefghijklmn".split("");
  let key = "";
  characters.forEach((c) => {
    key += characters[getRandomNumber(characters.length - 1)];
  });
  return `euid-${key}`;
}

// 클래스 컴포넌트
class Event {
  // 비공개 (private) 필드
  // 접근 제어자
  // # = class 내부에서만 접근 가능
  // 사용자가 내부에서 임의로 바꾸는것을 막기 위해서 사용
  #uid = "";

  // constructor(생성자)
  constructor(type, date) {
    // this는 생성된 클래스의 instance(객체)를 말함.
    this.type = type;
    this.date = date;
    this.#uid = generateUniqueId();
  }

  // instance : 생성된 객체
  // 생성된 객체만 사용 가능한 메서드
  getType() {
    return this.type;
  }

  getUid() {
    return this.#uid;
  }
}
