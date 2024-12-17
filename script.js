// Get the form and inputs
var form = document.getElementById('resume-form');
// Input fields for form
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var degreeInput = document.getElementById('degree');
var schoolInput = document.getElementById('school');
var gradYearInput = document.getElementById('grade-year');
var workExperienceInput = document.getElementById('work-experience');
var skillsInput = document.getElementById('skills');
// Resume display fields
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumeDegree = document.getElementById('resume-degree');
var resumeSchool = document.getElementById('resume-school');
var resumeGradYear = document.getElementById('resume-grade-year');
var resumeWorkExperience = document.getElementById('resume-work-experience');
var resumeSkills = document.getElementById('resume-skills');
// Generate resume button
var generateResumeButton = document.getElementById('generate-resume');
// Event listener for the "Generate Resume" button
generateResumeButton.addEventListener('click', function () {
    // Update resume fields with user input
    resumeName.textContent = nameInput.value || 'please provided your data  ';
    resumeEmail.textContent = emailInput.value || 'Please provided your data';
    resumeDegree.textContent = degreeInput.value || 'Please provided your data';
    resumeSchool.textContent = schoolInput.value || 'Please provided your data';
    resumeGradYear.textContent = gradYearInput.value || 'Please provided your data';
    resumeWorkExperience.textContent = workExperienceInput.value || 'Please provided your data';
    resumeSkills.textContent = skillsInput.value || 'Please provided your data';
    // Show the resume section after the button click
    document.getElementById('resume').style.display = 'block';
});
// Optional: Add input event listeners for real-time updating
form.querySelectorAll('input, textarea').forEach(function (input) {
    input.addEventListener('input', function () {
        generateResumeButton.click();
    });
});
