import { data } from "./data.js";
import { rain } from "./rain.js";
import { changePage } from "./pages.js";
import { personalizeText } from "./personalizedtxt.js";
import { audioManager } from "./audio.js";
import "./canva.js";

const canva = document.getElementById("nebulaCanvas");

audioManager();

rain();
personalizeText(data.components.startTxt, "Clica aqui para começar, meu amor!");

data.components.button?.addEventListener("click", () => {
    const rainElements = data.components.rain;
    const middleC = data.components.middlecontainer;
    middleC.style.transition = "all 2s ease-in";
    middleC.style.opacity = "0";
    changePage();
    Array.from(rainElements).forEach((e) => (e.style.opacity = "1"));
    setTimeout(() => {
        Array.from(rainElements).forEach((e) => (e.style.opacity = "0"));
    }, 4000);
});

(() => {
    let _value = data.pageNumber;
    const _listeners = new Set();

    Object.defineProperty(data, "pageNumber", {
        configurable: true,
        enumerable: true,
        get() {
            return _value;
        },
        set(v) {
            if (_value === v) return;
            _value = v;
            _listeners.forEach((fn) => {
                try {
                    fn(v);
                } catch (e) {
                    // ignore listener errors
                }
            });
        },
    });

    data.subscribePageNumber = function (fn) {
        if (typeof fn !== "function") return () => {};
        _listeners.add(fn);
        return () => _listeners.delete(fn);
    };
})();

function handlePageNumberChange(newPage) {
    const middleC = data.components.middlecontainer;

    console.log("Página mudou para:", newPage);

    if (newPage === 1) {
        middleC.innerHTML = `<h1 id="textOne" style="margin: 30px 20%; text-align: center;"></h1>`;
        personalizeText(
            document.getElementById("textOne"),
            data.textOne.trim()
        );
        data.components.nextBtn.style.opacity = "1";
    }
    if (newPage === 2) {
        canva.style.opacity = "1";
        middleC.innerHTML = `<h1 id="textTwo" style="margin: 30px 20%; text-align: center;"></h1>`;
        setTimeout(() => {
            personalizeText(
                document.getElementById("textTwo"),
                data.textTwo.trim()
            );
        }, 1000);
    }
    if (newPage === 3) {
        const rainElements = data.components.rain;
        canva.style.opacity = "0";
        Array.from(rainElements).forEach((e) => (e.style.opacity = "0.5"));
        middleC.innerHTML = `
            <h1 id="textThree" style="margin: 30px 20%; text-align: center"></h1>
                <div id="loveDiv">
                    <video
                        autoplay
                        loop
                        src="she/beautyVid.mp4"
                        id="leftVid"
                    ></video>
                    <img src="she/she.png" alt="minha amada" id="sheImg" />
                    <video
                        autoplay
                        loop
                        src="she/inCarVid.mp4"
                        id="rightVid"
                    ></video>`;
        setTimeout(() => {
            personalizeText(
                document.getElementById("textThree"),
                data.textThree.trim()
            );
        }, 1000);
        data.components.nextBtn.style.opacity = "0";
    }
}

data.components.nextBtn?.addEventListener("click", () => {
    const middleC = data.components.middlecontainer;
    middleC.style.opacity = "0";
    changePage();
});

// inscreve o handler
const unsubscribe = data.subscribePageNumber(handlePageNumberChange);
