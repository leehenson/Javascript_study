/**
 * setTimeout() / setInterval()
 */

let num = 0;

// 사용자가 접속하면 접속한지 얼마나 지났는지 출력
function showTime() {
  console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
  // 접속한지 5초 이상이 되면 setInterval() 종료
  if (num > 5) {
    clearInterval(tId);
  }
}

const tId = setInterval(showTime, 1000);
