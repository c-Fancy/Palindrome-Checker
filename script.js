const txtInput = document.querySelector(".inputs input"),
    chkBtn = document.querySelector(".inputs button"),
    infoTxt = document.querySelector(".info-txt");
let filterInput;

chkBtn.addEventListener("click", () => {
    // splitting user input character, reversing them,
    // and joining them in a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if (filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome`;
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
})

txtInput.addEventListener("keyup", () => {
    // removing spaces & all special characters from entered value
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "")
    if (filterInput) {
        return chkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    chkBtn.classList.remove("active");
});