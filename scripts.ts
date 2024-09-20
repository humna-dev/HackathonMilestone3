document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Capture user input
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    // Debugging: Check user input
    console.log({ name, email, education, experience, skills });

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
        document.getElementById("resumeOutput")!.style.display = "block"; // Show resume section
    }
});
