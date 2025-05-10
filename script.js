const questions = [
  'Do customer demographics affect prices?',
  "Does product rating influence customers?",
  "How do purchases change during festivals?",
  "How many employees work in marketing?",
  "How much do we spend on stationery?",
  "What are customers' payment methods?",
  "What are profit margins for our product?",
  "What is the company's orgn. structure?",
  "How is traffic to our e-commerce site?",
  "Which products have high sales volumes?"
];

const correctAnswers = {
  "0": "relevant",
  "1": "relevant",
  "2": "relevant",
  "3": "not-relevant",
  "4": "not-relevant",
  "5": "not-relevant",
  "6": "relevant",
  "7": "not-relevant",
  "8": "not-relevant",
  "9": "relevant"
};

window.onload = () => {
  const questionDiv = document.getElementById("questions");
  questions.forEach((text, index) => {
    const label = document.createElement("div");
    label.className = "label";
    label.draggable = true;
    label.ondragstart = (e) => drag(e);
    label.id = "q" + index;
    label.textContent = text;
    questionDiv.appendChild(label);
  });
};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const dragged = document.getElementById(data);
  ev.target.closest(".frame").appendChild(dragged);
  checkSubmitEnable();
}

function checkSubmitEnable() {
  const remaining = document.getElementById("questions").querySelectorAll(".label").length;
  document.getElementById("submitBtn").disabled = remaining !== 0;
}

function Evaluate() {
  let score = 0;
  for (let i = 0; i < 10; i++) {
    const label = document.getElementById("q" + i);
    const parentId = label.parentElement.id;
    if (parentId === correctAnswers[i.toString()]) {
      score++;
    }
  }
  document.getElementById("score").textContent = "Score: " + score + "/10";
}
