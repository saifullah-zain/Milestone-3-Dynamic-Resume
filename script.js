// get refrences to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate resume dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Persoonal Information</h3>\n    <P><b>Name:</b>".concat(name, "</p>\n    <P><b>email:</b>").concat(email, "</p>\n    <P><b>phone:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    //display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Ther resume display element is missing. ');
    }
});
