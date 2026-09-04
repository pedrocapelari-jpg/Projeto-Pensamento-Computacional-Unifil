/* =========================================================
   PROJECT PENSAMENTO COMPUTACIONAL
   RETRO TERMINAL SCRIPT
   ========================================================= */


/* =========================================================
   ANO AUTOMÁTICO
   ========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================================
   CONFIGURAÇÃO DO GOOGLE FORMS
   =========================================================

   Basta substituir o endereço abaixo pelo seu formulário.

   Exemplo:

   const FORMS_URL =
       "https://docs.google.com/forms/d/e/SEU_ID/viewform";

*/

const FORMS_URL = "";


/* =========================================================
   CONFIGURA O BOTÃO DO FORMS
   ========================================================= */

const formsButton =
    document.getElementById("formsButton");


const formsNote =
    document.querySelector(".forms-note");


if (FORMS_URL.trim() !== "") {

    formsButton.href = FORMS_URL;

    formsNote.textContent =
        "[ FORMULÁRIO ONLINE DISPONÍVEL ]";

} else {

    formsButton.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "O formulário de avaliação ainda não foi configurado.\n\n" +
            "Edite a variável FORMS_URL no arquivo script.js."
        );

    });

}


/* =========================================================
   EFEITO DE TERMINAL
   ========================================================= */

const terminalMessages = [
    "> CARREGANDO MÓDULO POO...",
    "> CARREGANDO MÓDULO C#...",
    "> CARREGANDO MÓDULO GAME DEVELOPMENT...",
    "> SISTEMA PRONTO."
];


let messageIndex = 0;


function updateTerminalMessage() {

    const element =
        document.querySelector(".terminal-command");

    if (!element) return;

    element.textContent =
        terminalMessages[messageIndex];

    messageIndex++;

    if (messageIndex >= terminalMessages.length) {
        messageIndex = 0;
    }

}


setInterval(updateTerminalMessage, 4000);


/* =========================================================
   ANIMAÇÃO DE ENTRADA DOS NÍVEIS
   ========================================================= */

const lessons =
    document.querySelectorAll(".lesson-card");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


lessons.forEach((lesson) => {

    lesson.style.opacity = "0";

    lesson.style.transform =
        "translateY(30px)";

    lesson.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(lesson);

});


/* =========================================================
   EFEITO DE TERMINAL AO PASSAR O MOUSE
   ========================================================= */

const buttons =
    document.querySelectorAll(".play-button");


buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.dataset.originalText =
            button.textContent;

    });

});