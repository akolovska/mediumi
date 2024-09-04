document.addEventListener("DOMContentLoaded", function() {
    var collapsibleButtons = document.querySelectorAll(".collapsible");
    var listItems = document.querySelectorAll(".list-item");
    var displayArea = document.getElementById("display-area");

    collapsibleButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    listItems.forEach(function(item) {
        item.addEventListener("click", function() {
            var content = this.getAttribute("data-content");
            displayArea.innerHTML = content;
        });
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     var collapsibleButtons = document.querySelectorAll(".collapsible");
//     var listItems = document.querySelectorAll(".list-item");
//     var displayArea = document.getElementById("display-area");
//
//     collapsibleButtons.forEach(function(button) {
//         button.addEventListener("click", function() {
//             this.classList.toggle("active");
//             var content = this.nextElementSibling;
//
//             if (content.style.display === "block") {
//                 content.style.display = "none";
//             } else {
//                 content.style.display = "block";
//             }
//         });
//     });
//
//     listItems.forEach(function(item) {
//         item.addEventListener("click", function() {
//             var content = this.getAttribute("data-content");
//             displayArea.innerHTML = content;
//         });
//     });
// }); test3