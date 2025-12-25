import { data } from "./data.js";

function audioManager() {
    const audio1 = data.components.audio1;
    // const audio2 = data.components.audio2;

    if (audio1) {
        audio1.volume = 0.3;
        audio1.play().catch(() => {});
    }
}

export { audioManager };
