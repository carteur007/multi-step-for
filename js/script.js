const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next"); 
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsCount = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsCount++;
        updateFormSteps();
        updateProgressbar();
    });
});
prevBtns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        formStepsCount--;
        updateFormSteps();
        updateProgressbar();
    });
})
function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
            formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsCount].classList.add("form-step-active");
}
function updateProgressbar(){
    progressSteps.forEach((progressStep, index) =>{
        (index < formStepsCount + 1)?
            progressStep.classList.add("progress-step-active")
        :
            progressStep.classList.remove("progress-step-active");

        ;
    });
    let progressActive = document.querySelectorAll(".progress-step-active");
    let dim = ((progressActive.length -1 ) / (progressSteps.length - 1)) * 100  + '%';
    console.log(progressActive.length);
console.log(progressSteps.length);
console.log(dim);
progress.style.width = dim;
}
//let dim = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + 6 + '%';
