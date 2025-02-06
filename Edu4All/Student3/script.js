// Initialize currentStep to 1 and totalSteps to 4
let currentStep = 1;
const totalSteps = 4;
// Event listener for the 'Next' button
document.getElementById('nextButton').addEventListener('click', () => {
     // Validate current step before proceeding
    if (validateStep(currentStep)) {
        showStep(currentStep + 1);
    }
});
// Event listener for the 'Previous' button
document.getElementById('prevButton').addEventListener('click', () => {
    // Move to the previous step if not on the first step
    if (currentStep > 1) {
        showStep(currentStep - 1);// Show the previous step
    }
});
// Event listener for the form submission
document.getElementById('profile-form').addEventListener('submit', (event) => {
    event.preventDefault();// Prevent default form submission behavior
    // Validate the final step before submitting
    if (validateStep(totalSteps)) {
        saveProfileData();// Save profile data to localStorage
        alert('Profile submitted successfully!');// Display submission message
        window.location.href = 'profile-view.html'; // Redirect to the profile viewing page
    }
});
// Function to show a specific step and update display accordingly
function showStep(step) {
    // Hide all steps
    document.querySelectorAll('.step').forEach((element) => {
        element.style.display = 'none';
    });
    // Show the current step
    document.querySelector(`.step[data-step="${step}"]`).style.display = 'block';
    currentStep = step; // Update current step
// Adjust visibility of navigation buttons based on current step
    document.getElementById('nextButton').style.display = (currentStep === totalSteps) ? 'none' : 'inline-block';
    document.getElementById('submitButton').style.display = (currentStep === totalSteps) ? 'inline-block' : 'none';
    document.getElementById('prevButton').style.display = (currentStep === 1) ? 'none' : 'inline-block';

    updateProgressBar();// Update progress bar based on current step
}
// Function to update the progress bar
function updateProgressBar() {
    const progress = (currentStep / totalSteps) * 100;
    document.getElementById('progressBar').value = progress;
}

// Function to validate the fields in each step
function validateStep(step) {
    const inputs = document.querySelectorAll(`.step[data-step="${step}"] input[required]`);
    for (const input of inputs) {
        if (!input.value && input.type !== 'checkbox') {
            alert(`${input.previousElementSibling.innerText} is required.`);// Display required field message
            input.focus();// Focus on the first invalid input
            return false;
        }
    }

    // Validate privacy agreement only in the first step
    const privacyCheckbox = document.getElementById('privacy');
    if (privacyCheckbox && !privacyCheckbox.checked && step === 1) {
        alert('You must agree to the privacy terms.');// Display privacy agreement message
        privacyCheckbox.focus();// Focus on the privacy checkbox
        return false;
    }

    // Validate email and telephone only on the last step
    if (step === totalSteps) {
        const telInput = document.getElementById('tel');
        const emailInput = document.getElementById('email');
        


        if (!telInput.value) {
            alert('Telephone is required.');// Display telephone required message
            telInput.focus();// Focus on the telephone input
            return false;
        }

        if (!emailInput.value) {
            alert('Email is required.');// Display email required message
            emailInput.focus();// Focus on the email input
            return false;
        }

        const telPattern = /^\d{10}$/; // Assuming a 10-digit telephone number
        if (!telPattern.test(telInput.value)) {
            alert('Please enter a valid telephone number (10 digits).');// Display valid telephone number message
            telInput.focus();// Focus on the telephone input
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex pattern
        if (!emailPattern.test(emailInput.value)) {
            alert('Please enter a valid email address.');// Display valid email address message
            emailInput.focus();// Focus on the email input
            return false;
        }
    }

    return true;// Return true if all validations pass
}
// Function to save profile data to localStorage
function saveProfileData() {
    const profileData = {
        // Gather profile data from form inputs
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        privacy: document.getElementById('privacy').checked,
        rationale: document.getElementById('rationale').value,
        date_of_joining: document.getElementById('date_of_joining').value,
        task: document.getElementById('task').value,
        place: document.getElementById('place').value,
        assignment_type: document.getElementById('assignment_type').value,
        area_of_study: document.getElementById('area_of_study').value,
        highest_degree: document.getElementById('highest_degree').value,
        university: document.getElementById('university').value,
        completion_year: document.getElementById('completion_year').value,
        country: document.getElementById('country').value,
        min_hours: document.getElementById('min_hours').value,
        tel: document.getElementById('tel').value,
        email: document.getElementById('email').value
    };

    localStorage.setItem('profileData', JSON.stringify(profileData));// Store profile data in localStorage
}


// Initialize the form by showing the first step
showStep(1);
