// 파일 이름이 'book.epub'인지 확인하세요.
var book = ePub("book.epub"); 

var rendition = book.renderTo("viewer", {
    width: "100%", 
    height: "100%", 
});

rendition.display();

// 페이지 넘기기 기능 추가 (키보드 화살표 이용)
document.addEventListener("keyup", function(event){
    if (event.key === "ArrowRight") { 
        rendition.next();
    }
    if (event.key === "ArrowLeft") { 
        rendition.prev();
    }
});