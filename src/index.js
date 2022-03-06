import "./index.css";
import noteLogo from "./note.png";

const logo = document.getElementById("logo");
logo.src = noteLogo;
const inputText = document.getElementById("note");
const noteButton = document.getElementById("note-button");
let notes = [];

noteButton.addEventListener("click", function() {
    const note = inputText.value;
    notes.push(note);
    showNotes();
    inputText.value = "";
});

function showNotes() {
    const container = document.getElementById("notes-list");
    container.innerHTML = "";
    notes.map((n) => {
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = n;
        div.append(p);
        container.append(div);
    });
}
