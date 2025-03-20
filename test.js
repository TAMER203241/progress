const checkboxes = document.querySelectorAll('.lesson-checkbox');
const progressBar = document.querySelector('.progress-bar');
const progressPercentage = document.querySelector('.progress-percentage');
function updateProgress() {
    const total = checkboxes.length;
    const checked = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    const percentage = (checked / total) * 100;
    progressBar.style.width = `${percentage}%`;
    progressPercentage.textContent = `${Math.round(percentage)}%`;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
});