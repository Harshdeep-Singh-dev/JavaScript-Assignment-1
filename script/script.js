//SENTENCE-PARTS STORES THE SENTENCE
const sentenceParts = ["", "", "", "", ""];
const sentenceBox = document.getElementById("sentence-box");

// FETCHING ALL LISTS
const purpleList = document.querySelectorAll(".purple-list li");
const blueList = document.querySelectorAll(".blue-list li");
const greenList = document.querySelectorAll(".green-list li");
const orangeList = document.querySelectorAll(".orange-list li");
const pinkList = document.querySelectorAll(".pink-list li");

// ALL INDEXES FOR TRACKING VALUE
let purpleIndex = 0;
let blueIndex = 0;
let greenIndex = 0;
let orangeIndex = 0;
let pinkIndex = 0;

//UPDATES SENTENCE EVERYTIME A BUTTON IS CLICKED
function updateSentenceBox() {
    let sentence = "";
    for (let i = 0; i < sentenceParts.length; i++) {
        if (sentenceParts[i] !== "") {
            sentence += sentenceParts[i] + " ";
        }
    }

    if (sentence === "") {
        sentenceBox.textContent = "Click the buttons to build your sentence!";
    } else {
        sentenceBox.textContent = sentence.trim();
    }
}


//FUNCTION TO FETCH VALUE FROM THE LIST
function getTextFromList(list, index) {
    const validIndex = index % list.length;
    return list[validIndex].querySelector("span").innerText;
}

// PURPLE
document.getElementById("btn-purple").addEventListener("click", function () {
    sentenceParts[0] = getTextFromList(purpleList, purpleIndex);
    purpleIndex++;
    updateSentenceBox();
});

// BLUE
document.getElementById("btn-blue").addEventListener("click", function () {
    sentenceParts[1] = getTextFromList(blueList, blueIndex);
    blueIndex++;
    updateSentenceBox();
});

// GREEN
document.getElementById("btn-green").addEventListener("click", function () {
    sentenceParts[2] = getTextFromList(greenList, greenIndex);
    greenIndex++;
    updateSentenceBox();
});

// ORANGE
document.getElementById("btn-orange").addEventListener("click", function () {
    sentenceParts[3] = getTextFromList(orangeList, orangeIndex);
    orangeIndex++;
    updateSentenceBox();
});

// PINK
document.getElementById("btn-pink").addEventListener("click", function () {
    sentenceParts[4] = getTextFromList(pinkList, pinkIndex);
    pinkIndex++;
    updateSentenceBox();
});

document.getElementById("btn-random").addEventListener("click", function () {
    // ASSIGNING RANDOM VALUES
    purpleIndex = Math.floor(Math.random() * purpleList.length);
    blueIndex = Math.floor(Math.random() * blueList.length);
    greenIndex = Math.floor(Math.random() * greenList.length);
    orangeIndex = Math.floor(Math.random() * orangeList.length);
    pinkIndex = Math.floor(Math.random() * pinkList.length);

    // UPDATING SENTENCE PARTS ARRAY
    sentenceParts[0] = getTextFromList(purpleList, purpleIndex);
    sentenceParts[1] = getTextFromList(blueList, blueIndex);
    sentenceParts[2] = getTextFromList(greenList, greenIndex);
    sentenceParts[3] = getTextFromList(orangeList, orangeIndex);
    sentenceParts[4] = getTextFromList(pinkList, pinkIndex);

    updateSentenceBox();
});
