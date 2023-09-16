const jobs = [
    {
      title: "Industrial Designer/ UI,UX Designer",
      image: "../images/sales-representative.svg",
      details:
        "Responsible for the visual of the product, taking into account materials, processes, and costs. ",
      descriptions: 
      "Key responsibilities:\n\
      - Creating sketches and renderings of the smartbin\n\
      - Selecting materials and manufacturing processes that meet cost and quality requirements\n\
      - Design the physical appearance of the smart bin, as well as ensuring that it meets ergonomic and safety requirements.\n\
      - Design the overall user experience and interface of the smartbin.\n\
      - Make sure the UX is intuitive, handy and aesthetically pleasing to the eye.\n\
      - Create wireframes, mockups, and prototypes to illustrate the design ideas.\n\
      - Conduct user research and usability testing to validate design decisions and create user persona.\n\
      - Keeping on top of design trends and best practices.\n\
      \n\
      Qualifications:\n\
      - Undergraduate degree in Design Studies, Human-computer Interface (HCI), or relevant.\n\
      - A strong portfolio of previous design work, high creativity is a bonus.\n\
      - Experience in product design, modelling, and prototyping. Strong understanding of user-centred design principles and a passion for creating innovative and functional products.\n\
      - One should also have knowledge of materials and manufacturing processes.\n\
      - Strong design skills and proficiency in design tools such as Sketch, Figma, CAD or Adobe Creative Suite.\n\
      - Experience with user research and usability testing.\n\
      - Excellent communication skills and the ability to present design concepts effectively.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Hardware Engineer (Mechatronics)",
      image: "../images/marketing-manager.svg",
      details:
        "Responsible for designing, developing and maintaining hardware components.",
      descriptions: 
      `Key responsibilities:
      - Designing, developing, prototyping and testing the smartbin's hardware components.
      - Conduct feasibility studies, risk assessments, and cost-benefit analysis to support hardware design decisions.
      - Create and maintain the hardware design documents, specifications, and testing procedures.
      - Troubleshoot and debug hardware issues during development and production phases.
      - Follow current knowledge of the newest hardware technology and trends to maintain the project's market competitiveness.

      Qualifications:
      - Bachelor's degree in Electrical Engineering/ Mechatronics.
      - Competence in microcontroller programming and embedded systems (particularly sensors and actuators).
      - Proficient in schematic capture and simulation tools, circuit design, and analysis.
      - Proficient in industry-standard software, such as Altium Designer and SPICE.
      - Expertise in programming languages such as C or Assembly. Should be able to perform testing and debugging of hardware systems and have knowledge of regulatory requirements for electronics.`,
      openPositions: "1",
      link: "#",
    },
    {
        title: "Sr. Software Engineer (Data Analyst)",
        image: "../images/software-engineer.svg",
        details:
          "Responsible for designing, developing and maintaining software systems and applications.",
        descriptions:
        "Key responsibilities:\n\
        Develop and maintain software that powers the smartbin:\n\
        >  Designing and implementing the data analytics component of the smart bin.\n\
        > Analyse data collected from the smartbin to provide insights into usage patterns and identify areas for improvement.\n\
        Work closely with the technical leader to design and implement new features and functionality.\n\
        Write clean, efficient, and maintainable code.\n\
        Identify and troubleshoot errors.\n\
        Make sure the software integrates with other systems without a hitch by working together with other team members.\n\
        \n\
        Qualifications:\n\
        CS or SE bachelor's or master's degree or equivalent in a relevant subject.\n\
        Extensive programming skills in Python, Java, and R.\n\
        Knowledge of source control, software testing frameworks like Git, JIRA, and Jenkins, and software development tools and environments.\n\
        Solid experience with data analysis, computer vision and relevant technologies.",
    openPositions: "1",
    link: "#",
  },

  {
    title: "Product Manager/ Marketing Specialist",
    image: "../images/product-manager.svg",
    details:
      "Responsible for creating and executing marketing strategies to promote the project.",
    descriptions:
      "Key responsibilities:\n\
      The Product Manager will be responsible for driving the product roadmap and ensuring that the smartbin meets the needs of the target market.\n\
      The Marketing Specialist will be responsible for creating and implementing a marketing strategy for the smart bin system. Identify target markets, develop messaging and branding, and execute marketing campaigns across various channels. Market research, rivalry strategy analysis, marketing collateral development, social media account management, and performance measurement are among the primary duties.\n\
      \n\
      Qualifications:\n\
      Bachelor's degree in BA, Marketing, or similar subject.\n\
      Proven product management, market research, and user experience design background, ideally in a tech startup or other busy setting.\n\
      Familiarity with product lifecycle management and agile development approaches.\n\
      Ability to manage multiple stakeholders, prioritise tasks, and meet tight deadlines.\n\
      Strong analytical skills and capable of data-driven decision making.\n\
      Detail-oriented and organised.",
    openPositions: "1",
    link: "#",
  }
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Job`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild(openPositions);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  createJobListingCards();
});


// Select all the "More Details" buttons and add an event listener to each one
const detailsBtns = document.querySelectorAll(".details-btn");

detailsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Get the job card container
    const jobCard = btn.closest(".job");

    // Get the job object corresponding to this job card
    const job = jobs.find((j) => j.title === jobCard.querySelector(".job-title").textContent);

    // Get the modal elements
    const modal = document.getElementById("modal");
    const modalTitle = modal.querySelector(".job-title");
    const modalDetails = modal.querySelector(".job-details");
    const closeBtn = modal.querySelector(".close");

    // Set the modal content
    modalTitle.textContent = job.title;
    modalDetails.innerHTML = job.descriptions;

    // Show the modal
    modal.style.display = "block";

    // Close the modal when the user clicks the close button or outside the modal
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
});


"Create an alert pop up"


// Select all the "More Details" buttons and add an event listener to each one
// const detailsBtns = document.querySelectorAll(".details-btn");
detailsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Get the job card container
    const jobCard = btn.closest(".job");

    // Get the job object corresponding to this job card
    const job = jobs.find((j) => j.title === jobCard.querySelector(".job-title").textContent);

    // Store the current scroll position
    const previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    // Display the additional job details in a modal or popup

    // alert(job.descriptions);

    // Scroll back to the previous position after closing the alert
    setTimeout(() => {
      window.scrollTo(0, previousScrollPosition);
    }, 0);

  });
});



const submitBtn = document.getElementById("subbtn");
const emailInput = document.getElementById("email");
const registrationForm = document.querySelector(".registration-form");

submitBtn.addEventListener("mouseenter", () => {
  if (!emailInput.value) {
    submitBtn.style.position = "absolute";
    let x = Math.floor(Math.random() * (registrationForm.clientWidth - submitBtn.clientWidth));
    let y = Math.floor(Math.random() * (registrationForm.clientHeight - submitBtn.clientHeight));
    submitBtn.style.left = `${x}px`;
    submitBtn.style.top = `${y}px`;
  }
});

submitBtn.addEventListener("mouseleave", () => {
  if (!emailInput.value) {
    submitBtn.style.position = "static";
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});