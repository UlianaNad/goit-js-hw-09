const t={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),body:document.querySelector("body")};let a=null;t.startButton.addEventListener("click",(o=>{console.log(o.target),a=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.startButton.classList.contains("activated")||(t.stopButton.classList.remove("activated"),t.startButton.classList.add("activated"))})),t.stopButton.addEventListener("click",(o=>{clearInterval(a),console.log(`Interval with id ${a} has stopped!`),t.stopButton.classList.contains("activated")||(t.startButton.classList.remove("activated"),t.stopButton.classList.add("activated"))}));
//# sourceMappingURL=01-color-switcher.bfaab74f.js.map
