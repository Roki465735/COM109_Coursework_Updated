// Cookie functions
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
}

function getCookie(name) {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

function deleteCookie(name) {
  setCookie(name, "", -1);
}

// function for saving data as cookies
function setupCookieSaving() {
  const rememberMe = document.getElementById("rememberMe");

  function saveField(fieldId, cookieName) {
    const field = document.getElementById(fieldId);
    field.addEventListener("input", function () {
      if (rememberMe.checked) {
        setCookie(cookieName, this.value, 30); // storing data for 30 days
      }
    });
  }

  saveField("name", "contactName");
  saveField("email", "contactEmail");
  saveField("phone", "contactPhone");
  saveField("subject", "contactSubject");
  saveField("message", "contactMessage");

  // Remember the checkbox state
  rememberMe.addEventListener("change", function () {
    setCookie("rememberContactInfo", this.checked, 30);
    if (!this.checked) {
      // If user unchecks, clear all saved data
      deleteCookie("contactName");
      deleteCookie("contactEmail");
      deleteCookie("contactPhone");
      deleteCookie("contactSubject");
      deleteCookie("contactMessage");
    }
  });
}

function showCookieBanner() {
  const acceptedCookies = getCookie("acceptedCookies");
  const rejectedCookies = getCookie("rejectedCookies");

  if (!acceptedCookies && !rejectedCookies) {
    document.getElementById("cookie-banner").classList.remove("hidden");
  }

  document
    .getElementById("accept-cookie")
    .addEventListener("click", function () {
      setCookie("acceptedCookies", "true", 365);
      deleteCookie("rejectedCookies"); // if they change their mind they would have rejection
      document.getElementById("cookie-banner").classList.add("hidden");
    });

  // Add event listener for reject button
  document
    .getElementById("reject-cookie")
    .addEventListener("click", function () {
      setCookie("rejectedCookies", "true", 365);
      deleteCookie("acceptedCookies"); // Remove acceptance if they change their mind
      document.getElementById("cookie-banner").classList.add("hidden");
    });
}

// Call inside DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  setupCookieSaving();
  loadSavedData();
  setupFormSubmission();
  showCookieBanner(); 
});

// when page loads,data saved as form
function loadSavedData() {
  const remember = getCookie("rememberContactInfo") === "true";
  document.getElementById("rememberMe").checked = remember;

  if (remember) {
    document.getElementById("name").value = getCookie("contactName") || "";
    document.getElementById("email").value = getCookie("contactEmail") || "";
    document.getElementById("phone").value = getCookie("contactPhone") || "";
    document.getElementById("subject").value =
      getCookie("contactSubject") || "";
    document.getElementById("message").value =
      getCookie("contactMessage") || "";
  }
}

// Form submission
function setupFormSubmission() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Here you would typically send the data to a server
    // For this example, we'll just show an alert
    alert(
      `Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.joy bangla`
    );

    // Clear cookies if "Remember Me" is not checked
    if (!document.getElementById("rememberMe").checked) {
      deleteCookie("contactName");
      deleteCookie("contactEmail");
      deleteCookie("contactPhone");
      deleteCookie("contactSubject");
      deleteCookie("contactMessage");
    }

    // Reset the form but keep values if "Remember Me" is checked
    if (!document.getElementById("rememberMe").checked) {
      contactForm.reset();
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  setupCookieSaving();
  loadSavedData();
  setupFormSubmission();
});
