/* زر لسه زعلانة */

const noBtn = document.getElementById("noBtn");

const area = document.getElementById("buttons");


function escapeButton() {

    const areaRect = area.getBoundingClientRect();

    const btnRect = noBtn.getBoundingClientRect();


    const maxX =
        Math.max(
            0,
            areaRect.width - btnRect.width
        );


    const maxY =
        Math.max(
            0,
            areaRect.height - btnRect.height
        );


    const x =
        Math.random() * maxX - maxX / 2;


    const y =
        Math.random() * maxY - maxY / 2;


    noBtn.style.position = "absolute";


    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;
}


/* الماوس يقرب → الزر يهرب */

noBtn.addEventListener(
    "mouseenter",
    escapeButton
);


/* للموبايل */

noBtn.addEventListener(
    "touchstart",
    function (e) {

        e.preventDefault();

        escapeButton();

    }
);


/* زر آه */

function forgive() {

    document.getElementById("main").style.display = "none";

    document
        .getElementById("final")
        .classList.add("show");

    window.scrollTo(0, 0);
}
