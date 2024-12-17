// Get the form and inputs
const form = document.getElementById('resume-form') as HTMLFormElement;

// Input fields for form
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const schoolInput = document.getElementById('school') as HTMLInputElement;
const gradYearInput = document.getElementById('grade-year') as HTMLInputElement;
const workExperienceInput = document.getElementById('work-experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

// Resume display fields
const resumeName = document.getElementById('resume-name') as HTMLElement;
const resumeEmail = document.getElementById('resume-email') as HTMLElement;
const resumeDegree = document.getElementById('resume-degree') as HTMLElement;
const resumeSchool = document.getElementById('resume-school') as HTMLElement;
const resumeGradYear = document.getElementById('resume-grade-year') as HTMLElement;
const resumeWorkExperience = document.getElementById('resume-work-experience') as HTMLElement;
const resumeSkills = document.getElementById('resume-skills') as HTMLElement;

// Generate resume button
const generateResumeButton = document.getElementById('generate-resume') as HTMLButtonElement;

// Event listener for the "Generate Resume" button
generateResumeButton.addEventListener('click', () => {
    // Update resume fields with user input
    resumeName.textContent = nameInput.value || 'please provided your data  ';
    resumeEmail.textContent = emailInput.value || 'Please provided your data';
    resumeDegree.textContent = degreeInput.value || 'Please provided your data';
    resumeSchool.textContent = schoolInput.value || 'Please provided your data';
    resumeGradYear.textContent = gradYearInput.value || 'Please provided your data';
    resumeWorkExperience.textContent = workExperienceInput.value || 'Please provided your data';
    resumeSkills.textContent = skillsInput.value || 'Please provided your data';

    // Show the resume section after the button click
    document.getElementById('resume')!.style.display = 'block';
});

// Optional: Add input event listeners for real-time updating
form.querySelectorAll('input, textarea').forEach((input) => {
    input.addEventListener('input', () => {
        generateResumeButton.click();
    });
});