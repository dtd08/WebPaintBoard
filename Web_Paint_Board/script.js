// html에서 canvas 불러오기
const canvas = document.getElementById("canvas");  // canvas 저장


// canvas event 감지
let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX; // 마우스가 캔버스 안에서 움직일 때의 x값
    const y = event.offsetY; //         ''       y값

    if (!painting) { // 마우스를 클릭하지 않은 채로 이동할 때
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else { // 마우스를 클릭한 채로 이동할 때
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}


// 선 그리기 기능
/*
    캔버스 요소에서 픽셀에 접근할 수 있는 방법 context를 이용하는 것이다. (context = 캔버스 안의 픽셀들)
    context는 context variable을 선언하여 생성한다.
*/

// context를 선언 및 canvas 기본 셋팅
const ctx = canvas.getContext("2d"); // 캔버스 안에서 픽셀 컨트롤 설정
const INITIAL_COLOR = "#2c2c2c";

canvas.width = 700;
canvas.height = 700;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.storekeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
