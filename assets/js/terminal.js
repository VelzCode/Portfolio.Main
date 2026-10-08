const commands = document.querySelectorAll(".t-command");
const runButton = document.querySelector(".terminal-run");

let typingInterval;
let outputTimeout;

function typeCommand(command, finished) {
    const commandText = command.dataset.command;
    const entry = command.closest(".terminal-entry");
    const output = entry.querySelector(".terminal-output");
    command.classList.add("typing");

        let index = 0;

        typingInterval = setInterval(() => {
            command.textContent += commandText[index];
            index++;

            if (index === commandText.length) {
                clearInterval(typingInterval);
                command.classList.remove("typing");
                outputTimeout = setTimeout(() => {
                    output.classList.add("visible");
                    finished();
                }, 400);
            } 
        }, 200);
}

function resetTerminal() {
    clearInterval(typingInterval);
    clearTimeout(outputTimeout);

    commands.forEach((command) => {
        command.textContent = "";
        command.classList.remove("typing");
        const entry = command.closest(".terminal-entry");
        const output = entry.querySelector(".terminal-output");
        output.classList.remove("visible");
    })
}

function startTerminal() {
    typeCommand(commands[0], () => {
        typeCommand(commands[1], () => {
            typeCommand(commands[2], () => {
                typeCommand(commands[3], () => {
                    runButton.disabled = false;
                    runButton.textContent = "Replay";
                });
            });
        });
    });
}

runButton.addEventListener("click", () => {
    runButton.disabled = true;

    resetTerminal();
    startTerminal();
});