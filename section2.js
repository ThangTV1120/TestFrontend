
var arrow = document.querySelectorAll(".arrow")
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", function () {
        // var node = this.parentElement.parentElement;
        // node.children[2].style.display = node.children[2].style.display === 'flex' ? 'none' : 'flex';
        var node=this.closest('.content_left-main')
        var content=node.querySelector(".content_main");
        content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
    })
}


