function personalizeText(a, b) {
    const startTxt = a;
    let txtContent = b;

    // converte tags <br> (variações) em quebras de linha
    txtContent = txtContent.replace(/<br\s*\/?>|<br><\/br>/gi, "\n");

    // faz com que o elemento respeite quebras de linha
    if (startTxt && startTxt.style) startTxt.style.whiteSpace = "pre-line";

    let index = 0;
    startTxt.textContent = ""; // limpa antes de digitar

    function typeNextChar() {
        if (index < txtContent.length) {
            startTxt.textContent += txtContent.charAt(index);
            index++;
            setTimeout(typeNextChar, 40);
        }
    }
    typeNextChar();
}

export { personalizeText };
