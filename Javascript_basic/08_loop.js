/**
 * 반복문
 */

/**
 * for
 */

// 1부터 10까지 로그
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

/**
 * while
 */

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

/**
 * break
 */

while (true) {
  let answer = confirm('계속 할까요?'); // confirm()을 통해 반복 여부를 평가
  if (!answer) {
    break;
  }
}

/**
 * continue
 */

// 짝수만 출력

for (let i = 0; i < 10; i++) {
  // i를 2로 나눴을 때 나머지가 1이면, continue
  if (i % 2) {
    continue;
  }
  console.log(i);
}
