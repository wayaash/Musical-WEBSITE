/* FAQ accordion */
document.querySelectorAll(".faq-q").forEach(q => {
    q.addEventListener("click", () => {
        const a = q.nextElementSibling;
        const isOpen = q.classList.contains("open");
        
        // Close all other FAQs
        document.querySelectorAll(".faq-q").forEach(item => {
            item.classList.remove("open");
        });
        document.querySelectorAll(".faq-a").forEach(answer => {
            answer.style.maxHeight = null;
            answer.style.padding = "0 24px";
        });
        
        // Open clicked if it wasn't open
        if (!isOpen) {
            q.classList.add("open");
            a.style.maxHeight = a.scrollHeight + "px";
            a.style.padding = "20px 24px";
        }
    });
});
/* floating musical notes */
const notes = ["♪", "♫", "♩", "♬", "♭", "♯"];
const colors = ["#ffb703", "#ff4d8d", "#4cc9f0", "#80ffdb", "#ffd166"];
const layer = document.querySelector(".music-notes");
for (let i = 0; i < 20; i++) {
    const n = document.createElement("div");
    n.className = "note";
    n.textContent = notes[Math.floor(Math.random() * notes.length)];
    const size = 18 + Math.random() * 34;
    const duration = 25 + Math.random() * 35;
    const left = Math.random() * 100;
    const drift = (Math.random() * 200 - 100) + "px";
    n.style.left = left + "vw";
    n.style.bottom = "-10vh";
    n.style.fontSize = size + "px";
    n.style.color = colors[Math.floor(Math.random() * colors.length)];
    n.style.animationDuration = duration + "s";
    n.style.setProperty("--drift", drift);
    layer.appendChild(n);
}