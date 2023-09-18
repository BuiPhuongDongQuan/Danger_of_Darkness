const jobs = [
    {
      title: "Game Artist",
      image: "../image/icon3.png",
      details:
        "Responsible for the visual of the product ",
      descriptions: 
      "Key responsibilities:\n\
      - Generate and develop artistic ideas from briefs or commissions.\n\
      - Sketch out ideas and/or build 3D models.\n\
      - Design characters, images in game, posters, webpage.\n\
      - Collaborate with order artists or members from other positions such as game designer, game animator.\n\
      - Comply with production plans and submit on time.\n\
      \n\
      \n\
      Requirements:\n\
      - Good teamwork skills.\n\
      - Always learn and improve artistic skills.\n\
      - Be creative.\n\
      - Proficient in 3D design software such as 3ds Max, Zbrush, Maya.\n\
      - Deep understanding of art and painting ability.\n\
      .",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Game Tester",
      image: "../image/icon2.png",
      details:
        "Responsible for product quality.",
      descriptions: 
      `Key responsibilities:
      -Testing the game for bugs and other problems.
      - Creating and executing cases.
      - Reporting bugs and other problems to the development team.
      -Providing feedback on the game.

      Requirements:
      - Possess knowledge of various project management techniques, such as Waterfall, Agile, DevOps, and Continuous Delivery. 
      - Solid knowledge of issue tracking and project management. 
      - Excellent at monitoring and evaluating data and findings. .
      - Able to multitask, set priorities, and govern oneself. 
      - Knowledge of game engines.`,
      openPositions: "1",
      link: "#",
    },
    {
        title: "Game Developer",
        image: "../image/icon4.png",
        details:
          "Responsible for designing, developing and maintaining software systems and applications.",
        descriptions:
        "Key responsibilities:\n\
        - Can work individual and teamwork effectively. \n\
        - Enhance and improve the game base on the customers’ feedback. \n\
        - The graphics of the game should be at the high quality. \n\
        - Create a various feeling through many different topics or contents frequenlty for the customers.  .\n\
        \n\
        \n\
        Requirements:\n\
        - In-depth knowledge of programming 3D game.\n\
        - Have a large number of experiencing the 3D game to know it works.\n\
        - Have an ability to fix bugs and simplify the game performance suitably.\n\
        ",
    openPositions: "1",
    link: "#",
  },

  {
    title: " Marketing Specialist",
    image: "../image/icon.png",
    details:
      "Responsible for creating and executing marketing strategies to promote the project .",
    descriptions:
      "Key responsibilities:\n\
      - Responsible for managing project communications, creating content and continuously updating trends. Analyze the game market and draft a communication plan. Manage the game's website and media accounts.\n\
      - Responsible for representing the product. \n\
      \n\
      Requirements:\n\
      - Have experience in the communications industry and master basic skills related to office information technology such as excel, word, etc.\n\
      - Good communicated ability.\n\
      - Understanding of IT aspects, especially games.\n\
      - Soft skills such as problem solving, analysis and flexibility in handling emergency situations.\n\
     ",
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