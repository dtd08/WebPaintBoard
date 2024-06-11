// context 가져오기
const canvas = document.getElementById("draw_board")
const ctxt = canvas.getContext("2D");

// path(선) 그리기


// 마우스를 따라 움직이게 하기
const cursor_follower = document.getElementById("cursor_follower");

document.onmousemove = (e) => {
    cursor_follower.style.left = e.pageX + "px";
    cursor_follower.style.top = e.pageY + "px";
}


// 코드 참고 : https://m.blog.naver.com/3pmarketer/223103378261
//          : https://velog.io/@commi1106/%EB%A7%88%EC%9A%B0%EC%8A%A4%EB%A5%BC-%EB%94%B0%EB%9D%BC-%EB%8B%A4%EB%8B%88%EB%8A%94-%EC%9A%94%EC%86%8C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
//          : https://velog.io/@commi1106/canvas-%ED%83%9C%EA%B7%B8-%EB%A7%88%EC%9A%B0%EC%8A%A4%EB%A1%9C-%EA%B7%B8%EB%A6%BC-%EA%B7%B8%EB%A6%AC%EA%B8%B0
