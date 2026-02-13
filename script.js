const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const result = document.getElementById("result");
const music = document.getElementById("bgmusic");

// mobile pe autoplay block hota hai → first click pe play hoga
document.body.addEventListener("click", () => {
    music.play();
}, { once: true });

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
    result.innerHTML = "<h2>Hehe I knew it Malkin 😘❤️</h2>";
});