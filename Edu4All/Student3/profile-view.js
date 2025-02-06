// Wait for the DOM content to be fully loaded before executing
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve profile data from localStorage
    const profileData = JSON.parse(localStorage.getItem('profileData'));
  
    // Check if profileData exists
    if (profileData) {
        // Display profile data on the profile overview section
        document.getElementById('profile-name').innerText = `Name: ${profileData.name}`;
        document.getElementById('profile-surname').innerText = `Surname: ${profileData.surname}`;
        document.getElementById('profile-age').innerText = `Age: ${profileData.age}`;
        document.getElementById('profile-gender').innerText = `Gender: ${profileData.gender}`;
        document.getElementById('profile-privacy').innerText = `Agree with privacy terms: ${profileData.privacy ? 'Yes' : 'No'}`;

        document.getElementById('profile-rationale').innerText = `Rationale: ${profileData.rationale}`;
        document.getElementById('profile-date_of_joining').innerText = `Date of Joining: ${profileData.date_of_joining}`;
        document.getElementById('profile-task').innerText = `Task: ${profileData.task}`;
        document.getElementById('profile-place').innerText = `Place: ${profileData.place}`;
        document.getElementById('profile-assignment_type').innerText = `Assignment Type: ${profileData.assignment_type}`;

        document.getElementById('profile-area_of_study').innerText = `Area of Study: ${profileData.area_of_study}`;
        document.getElementById('profile-highest_degree').innerText = `Highest Degree: ${profileData.highest_degree}`;
        document.getElementById('profile-university').innerText = `University/Institution: ${profileData.university}`;
        document.getElementById('profile-completion_year').innerText = `Completion Year: ${profileData.completion_year}`;
        document.getElementById('profile-country').innerText = `Country: ${profileData.country}`;

        document.getElementById('profile-min_hours').innerText = `Min Hours per Week: ${profileData.min_hours}`;
        document.getElementById('profile-tel').innerText = `Telephone: ${profileData.tel}`;
        document.getElementById('profile-email').innerText = `Email: ${profileData.email}`;
    } else {
        alert('No profile data found.');// Display an alert if no profile data is found in localStorage
    }
});

