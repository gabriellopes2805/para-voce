const button = document.getElementById("startBtn");
const startTxt = document.getElementById("startTxt");
const startDiv = document.getElementById("startDiv");
const bg = document.getElementById("bg");
const rain = document.getElementsByClassName("rain");
const middlecontainer = document.getElementById("middlecontainer");
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const nextBtn = document.getElementById("nextBtn");

const data = {
    pageNumber: 0,
    // textOne: "bleh",
    textOne: `
    Oiiii, meu amor! 💕
Como você está? Tudo bem?<br>
Provavelmente você vai receber esse “presente” no Natal, então… FELIZ NATAL!!! 🎄✨
<br>
Eu sei que já costumo demonstrar bastante o quanto te amo, mas hoje resolvi fazer algo um pouquinho diferente e especial pra você. Preparei um site todo temático, feito com muito carinho, para você entrar sempre que quiser 😁💖
<br>
Eu sei que não é um presente caro, mas pode ter certeza absoluta de que cada detalhe foi feito pensando em você. Mesmo não tendo tanta coisa aqui, eu pesquisei, planejei, trabalhei bastante, perdi várias noites de sono e dei o meu melhor para que você tivesse uma experiência bonita, leve e cheia de amor 🫠💗 (assim eu espero, pelo menos kkkkk).
<br>
Enfim, vamos continuar, meu amor!
Pode avançar para a próxima página 🫶✨
    `,
    textTwo: `Amor, antes de qualquer coisa, eu queria te agradecer… de um jeito sincero, puro e do fundo do meu coração ☺️💗<br>

Já faz um tempo que eu tento ser o melhor namorado possível pra você, né? Mas tem uma coisinha que talvez você não saiba (kkkk): desde o dia em que você se abriu comigo e me contou mais sobre você, eu comecei a pesquisar, a aprender e a tentar entender cada detalhe com ainda mais carinho. Quis compreender melhor a sua forma de pensar, de sentir, de amar, de cuidar e também de querer ser amada. Não porque você precise mudar, mas porque eu quero te amar do jeito certo — do jeito que você merece.<br>

E foi nesse processo que eu finalmente percebi… percebi cada esforço seu, cada conquista silenciosa, cada dificuldade que você enfrentou e ainda enfrenta. Passei a enxergar coisas que antes talvez eu não soubesse valorizar como deveria. E, amor, isso só fez meu respeito e minha admiração por você crescerem ainda mais.<br>

Eu me orgulho demais de você, meu bem. Me orgulho por você ter escolhido cuidar de mim quando nem eu mesmo conseguia acreditar em mim. Mesmo sem entender completamente o que eu sentia ou por que eu estava daquela forma, você ficou. Você tentou. Você se importou.<br>

Me orgulho também por você ter me incluído cada vez mais no seu dia, mesmo que aos pouquinhos. Coisas simples, como me mandar uma foto sua às 17h só porque sabe que eu gosto (kkkk). Eu sei que você não ama tirar fotos, nem conversar o tempo todo, e justamente por isso isso significa tanto pra mim. Porque eu sei o quanto você se esforça. Você me escutou de verdade. Você lembrou do que eu disse que me fazia bem. E você mudou — por mim.<br>

E não, amor… isso nunca foi simples. De simples não teve nada. Cada detalhe foi um gesto enorme de amor.
<br>

Eu te admiro imensamente. Eu reconheço suas mudanças, seu crescimento e a sua coragem — e eu amo tudo isso em você ❤️
Todos os dias você se torna uma mulher ainda mais extraordinária, e eu sou grato demais por poder caminhar ao seu lado, te amar, te apoiar e te escolher. Sempre.`,
    textThree: `Você se tornou tudo para mim, meu amor. Desde o momento em que te conheci, meu coração encontrou o seu lugar, e hoje tenho a mais absoluta certeza de que sou o homem mais feliz deste mundo por ter você na minha vida.

Assim como é dito na nossa música, eu te falo com todo o meu coração: você é o meu último, o meu maior e o mais lindo amor que eu poderia viver ❤️✨

Eu te amo mais do que qualquer coisa neste mundo, de um jeito profundo, sincero e eterno. Nunca, jamais se esqueça disso, meu amor 💞🥰`,
    components: {
        button,
        startTxt,
        startDiv,
        bg,
        rain,
        middlecontainer,
        audio1,
        audio2,
        nextBtn,
    },
};

export { data };
