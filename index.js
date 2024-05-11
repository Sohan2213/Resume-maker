// JavaScript (index.js)
function playSoundAndShowOptions() {
    playSound();
    document.querySelector('.home-container').classList.add('hidden');
    document.getElementById('resumeOptions').classList.remove('hidden');
}

function showForm(type) {
    document.getElementById('resumeOptions').classList.add('hidden');
    
    if (type === 'technical') {
        document.getElementById('technicalForm').classList.remove('hidden');
    } else if (type === 'nonTechnical') {
        document.getElementById('nonTechnicalForm').classList.remove('hidden');
    }
}

function generateResume(type) {
    const formData = storeFormValues(type);
    document.getElementById(type + 'Form').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');

    // Simulate a loading period (4-5 seconds)
    setTimeout(function () {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('output').classList.remove('hidden');
        // Include logic to generate and display the resume
        displayGeneratedResume(formData);
    }, 4000); // 4 seconds
}

function storeFormValues(type) {
    return {
        name: document.getElementById(`name${type}`).value,
        email: document.getElementById(`email${type}`).value,
        phone: document.getElementById(`phone${type}`).value,
        linkedin: document.getElementById(`linkedin${type}`).value,
        github: (type === 'technical') ? document.getElementById('githubTech').value : '',
        coCurricular: (type === 'nonTechnical') ? document.getElementById('coCurricular').value : '',
    };
}

function displayGeneratedResume(formData) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = formatResume(formData);
    console.log(outputDiv);
}

// Format the resume content based on the provided data
function formatResume(data) {
    return `
        <div class="resume">
            <div class="header">
                <h1>${data.name}</h1>
                <p>Email: ${data.email}</p>
                <p>Phone: ${data.phone}</p>
                <p>LinkedIn: ${data.linkedin}</p>
                ${data.github ? `<p>GitHub: ${data.github}</p>` : ''}
            </div>
            ${data.coCurricular ? `<div class="coCurricular"><h2>Co-Curricular Activities</h2><p>${data.coCurricular}</p></div>` : ''}
        </div>
    `;
}

function goBack(fromSection) {
    if (fromSection === 'resumeOptions' || fromSection === 'resumeForm') {
        // If coming from resumeOptions or resumeForm, go back to welcome page
        document.getElementById(fromSection).classList.add('hidden');
        document.body.classList.remove('hidden'); // Use the body as a reference
    } else {
        // Otherwise, go back to resumeOptions
        document.querySelector('home-container').classList.add('hidden');
        document.getElementById('resumeOptions').classList.remove('hidden');
    }
}

function playSound() {
    document.getElementById('clickSound').play();
}
