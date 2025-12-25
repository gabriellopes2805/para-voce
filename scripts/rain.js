import { data } from "./data.js";

function rain() {
    const things = [
        "💘",
        "💕",
        "💖",
        "💗",
        "💝",
        "❤️",
        "🩷",
        "❣️",
        "💞",
        "💓",
        "🫶",
    ];
    setTimeout(() => {
        Array.from(
            {
                length: Math.min(100, Math.round(window.innerWidth / 10)),
            },
            () => {
                const $e = document.createElement("b");
                $e.classList.add("rain");
                $e.style.setProperty("--rnd1", Math.random());
                $e.style.setProperty("--rnd2", Math.random());
                $e.style.setProperty("--rnd3", Math.random());
                $e.innerHTML =
                    things[Math.floor(Math.random() * things.length)];
                data.components.bg.appendChild($e);
                return $e;
            }
        );
    }, 200);
}

export { rain };
