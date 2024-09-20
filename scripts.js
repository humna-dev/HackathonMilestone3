"use strict";
var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Capture user input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    // Generate resume output
    const resume = `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Education:</strong> ${education}<br>
        <strong>Work Experience:</strong> ${experience}<br>
        <strong>Skills:</strong> ${skills}
    `;
    // Display the resume
    const resumeOutput = document.getElementById("resume");
    if (resumeOutput) {
        resumeOutput.innerHTML = resume;
        document.getElementById("resumeOutput").style.display = "block"; // Show resume section
    }
});
