// Sample course data
//Courses data in an array
const courses = [
  {
    id: 1,
    title: "Business Administration (BBA)",
    department: "Business",
    level: "Undergraduate",
    duration: "3 years",
    description:
      "Our Bachelor of Business Administration program provides a comprehensive foundation in business principles, preparing students for leadership roles in various industries. The curriculum covers management, marketing, finance, and entrepreneurship.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    mode: "Full-time",
    location: "Belfast Campus",
    fees: "£9,250 per year",
    startDate: "September 2023",
    additionalInfo:
      "This program includes an optional placement year and opportunities for international exchange programs with our partner universities.",
  },
  {
    id: 2,
    title: "Computer Science (MSc)",
    department: "Computing",
    level: "Postgraduate",
    duration: "1 year",
    description:
      "Our Master's in Computer Science is designed for graduates who want to deepen their technical expertise. The program covers advanced topics in algorithms, machine learning, cybersecurity, and software engineering.",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    mode: "Full-time/Part-time",
    location: "Jordanstown Campus",
    fees: "£15,000 (full-time)",
    startDate: "September 2023, January 2024",
    additionalInfo:
      "Students have access to our state-of-the-art computing labs and can participate in industry-sponsored projects.",
  },
  {
    id: 3,
    title: "Mechanical Engineering (BEng)",
    department: "Engineering",
    level: "Undergraduate",
    duration: "4 years",
    description:
      "This accredited engineering program combines theoretical knowledge with practical skills. Students learn about mechanical systems, materials science, thermodynamics, and product design.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    mode: "Full-time",
    location: "Belfast Campus",
    fees: "£9,250 per year",
    startDate: "September 2023",
    additionalInfo:
      "The program includes a mandatory industrial placement in year 3 and leads to Chartered Engineer status.",
  },
  {
    id: 4,
    title: "Nursing (BN)",
    department: "Health Sciences",
    level: "Undergraduate",
    duration: "3 years",
    description:
      "Our Bachelor of Nursing program prepares students for professional registration as nurses. The curriculum combines classroom learning with clinical placements in various healthcare settings.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    mode: "Full-time",
    location: "Coleraine Campus",
    fees: "£9,250 per year",
    startDate: "September 2023",
    additionalInfo:
      "Graduates are eligible to register with the Nursing and Midwifery Council (NMC) and practice as registered nurses.",
  },
  {
    id: 5,
    title: "International Business (MBA)",
    department: "Business",
    level: "Postgraduate",
    duration: "2 years",
    description:
      "Our MBA in International Business is designed for professionals seeking global business leadership roles. The program focuses on cross-cultural management, global strategy, and international marketing.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    mode: "Part-time",
    location: "Online/Belfast Campus",
    fees: "£18,000 (total)",
    startDate: "September 2023, March 2024",
    additionalInfo:
      "Flexible study options available with online modules and weekend intensive sessions. Includes an international business project.",
  },
  {
    id: 6,
    title: "Psychology (BSc)",
    department: "Arts & Humanities",
    level: "Undergraduate",
    duration: "3 years",
    description:
      "This psychology program provides a scientific understanding of human behavior and mental processes. Students study cognitive, developmental, social, and clinical psychology.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    mode: "Full-time",
    location: "Magee Campus",
    fees: "£9,250 per year",
    startDate: "September 2023",
    additionalInfo:
      "The program is accredited by the British Psychological Society (BPS) and provides the Graduate Basis for Chartered Membership.",
  },
  {
    id: 7,
    title: "Data Science (MSc)",
    department: "Computing",
    level: "Postgraduate",
    duration: "1 year",
    description:
      "This program equips students with advanced skills in data analysis, machine learning, and big data technologies. Graduates are prepared for roles in data analytics and AI development.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    mode: "Full-time/Part-time",
    location: "Jordanstown Campus",
    fees: "£16,000 (full-time)",
    startDate: "September 2023",
    additionalInfo:
      "Includes hands-on projects with industry datasets and access to our high-performance computing cluster.",
  },
  {
    id: 8,
    title: "Graphic Design (BA Hons)",
    department: "Arts & Humanities",
    level: "Undergraduate",
    duration: "3 years",
    description:
      "Our graphic design program fosters creativity and technical skills in visual communication. Students work on real-world design projects and develop professional portfolios.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    mode: "Full-time",
    location: "Belfast Campus",
    fees: "£9,250 per year",
    startDate: "September 2023",
    additionalInfo:
      "Students have opportunities to participate in international design competitions and showcase their work at our annual degree show.",
  },
  {
    id: 8,
    title: "Graphic Design (BA Hons)",
    department: "Arts & Humanities",
    level: "Undergraduate",
    duration: "3 years",
    description:
      "Our graphic design program fosters creativity and technical skills in visual communication. Students work on real-world design projects and develop professional portfolios.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    mode: "Full-time",
    location: "Belfast Campus",
    fees: "£9,250 per year",
    startDate: "September 2023",
    additionalInfo:
      "Students have opportunities to participate in international design competitions and showcase their work at our annual degree show.",
  },
];

// DOM Elements
const coursesGrid = document.getElementById("courses-grid");
const searchInput = document.getElementById("search-input");
const levelFilter = document.getElementById("level-filter");
const departmentFilter = document.getElementById("department-filter");
const searchBtn = document.getElementById("search-btn");
const resetBtn = document.getElementById("reset-btn");
const modal = document.getElementById("course-modal");
const closeModal = document.getElementById("close-modal");
const closeModalBtn = document.getElementById("close-modal-btn");

// Initialize the page with all courses
document.addEventListener("DOMContentLoaded", () => {
  displayCourses(courses);
  setupEventListeners();
});

// Display courses in the grid
function displayCourses(coursesToDisplay) {
  coursesGrid.innerHTML = "";

  if (coursesToDisplay.length === 0) {
    coursesGrid.innerHTML = `
            <div class="no-results">
              <i class="fas fa-search"></i>
              <h3>No courses found</h3>
              <p>Try adjusting your search filters</p>
            </div>
          `;
    return;
  }

  coursesToDisplay.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.className = "course-card";
    courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}" class="course-img">
            <div class="course-content">
              <span class="course-level">${course.level}</span>
              <h3 class="course-title">${course.title}</h3>
              <div class="course-duration">
                <i class="far fa-clock"></i>
                <span>${course.duration}</span>
              </div>
              <p class="course-description">${course.description}</p>
              <div class="course-actions">
                <button class="detail-btn" data-id="${course.id}">Details</button>
                <button class="apply-btn">Apply</button>
              </div>
            </div>
          `;
    coursesGrid.appendChild(courseCard);
  });
}

// Filter courses based on search criteria
function filterCourses() {
  const searchTerm = searchInput.value.toLowerCase();
  const level = levelFilter.value;
  const department = departmentFilter.value;

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      course.department.toLowerCase().includes(searchTerm);
    const matchesLevel = level ? course.level === level : true;
    const matchesDepartment = department
      ? course.department === department
      : true;

    return matchesSearch && matchesLevel && matchesDepartment;
  });

  displayCourses(filteredCourses);
}

// Show course details in modal
function showCourseDetails(courseId) {
  const course = courses.find((c) => c.id === courseId);
  if (!course) return;

  document.getElementById("modal-title").textContent = course.title;
  document.getElementById("modal-img").src = course.image;
  document.getElementById("modal-description").textContent = course.description;
  document.getElementById("modal-level").textContent = course.level;
  document.getElementById("modal-department").textContent = course.department;
  document.getElementById("modal-duration").textContent = course.duration;
  document.getElementById("modal-mode").textContent = course.mode;
  document.getElementById("modal-location").textContent = course.location;
  document.getElementById("modal-fees").textContent = course.fees;
  document.getElementById("modal-start-date").textContent = course.startDate;

  const additionalInfo = document.getElementById("modal-additional-info");
  additionalInfo.innerHTML = `
          <h4>Additional Information</h4>
          <p>${course.additionalInfo}</p>
        `;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Close modal
function closeModalFn() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Setup event listeners
function setupEventListeners() {
  // Search and filter
  searchBtn.addEventListener("click", filterCourses);
  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    levelFilter.value = "";
    departmentFilter.value = "";
    displayCourses(courses);
  });

  // Allow search on Enter key
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      filterCourses();
    }
  });

  // Modal events
  closeModal.addEventListener("click", closeModalFn);
  closeModalBtn.addEventListener("click", closeModalFn);
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModalFn();
    }
  });

  // Event delegation for detail buttons
  coursesGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("detail-btn")) {
      const courseId = parseInt(e.target.getAttribute("data-id"));
      showCourseDetails(courseId);
    }
  });

  // Mobile menu toggle
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
