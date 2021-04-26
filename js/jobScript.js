// This is the function to toggle the "Click to expand" portion of the job ads

const jobButtons = document.querySelectorAll(".expanded");

for (let i = 0; i < jobButtons.length; i++) {
    jobButtons[i].addEventListener("click", () => {
        if (jobButtons[i].className.includes("collapsed")) {
            jobButtons[i].lastElementChild.style.display = "none";
        } else {
            jobButtons[i].lastElementChild.style.display = "block";
        }
    })
}