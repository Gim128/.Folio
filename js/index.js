var typingEffect = new Typed(".multitext", {
    strings : ["UI/UX Designer", "Coder", "QA Engineer"],
    loop: true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
});

// let textIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
//
// const typewriterText = document.getElementById("multitext");
//
// function type() {
//     if (charIndex < strings[textIndex].length) {
//         if (!isDeleting) {
//             typewriterText.textContent += strings[textIndex].charAt(charIndex);
//             charIndex++;
//             setTimeout(type, typeSpeed);
//         }
//     } else {
//         if (!isDeleting) {
//             isDeleting = true;
//             setTimeout(type, backDelay);
//         } else {
//             if (charIndex > 0) {
//                 typewriterText.textContent = strings[textIndex].substring(0, charIndex - 1);
//                 charIndex--;
//                 setTimeout(type, backSpeed);
//             } else {
//                 isDeleting = false;
//                 textIndex = (textIndex + 1) % texts.length;
//                 setTimeout(type, typeSpeed);
//             }
//         }
//     }
// }
//
// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(type, backDelay);
// });


    function goToPage() {
        window.open("", "_blank");
    }

function goToPage2() {
    window.open("https://www.facebook.com/gimhan.pabasara.75/", "_blank");
}

function openInNewTab1(){
        window.open("https://www.behance.net/gimhanpabasara", "_blank");
}

function openInNewTab2(){
    window.open("https://github.com/Gim128", "_blank");
}
function openInNewTab3(){
    window.open("https://www.fiverr.com/s/e68vDvm", "_blank");
}
function openInNewTab4(){
    window.open("https://www.linkedin.com/in/gimhanpabasara/", "_blank");
}
function openInNewTab5(){
    window.open("https://www.instagram.com/leo_munasinghe/", "_blank");
}
function openInNewTab6(){
    window.open("https://x.com/GimhanPabasara", "_blank");
}

function toggleNavbar() {
    var navitems = document.getElementById("navbar");
    navitems.classList.toggle("active");
}




