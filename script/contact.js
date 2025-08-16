document.addEventListener("DOMContentLoaded", function () {
  // Check cookie preferences first
  const cookiePreferences = getCookie("cookiePreferences");
  const necessaryCookiesAccepted = getCookie("necessaryCookies");

  // If no preferences are set, show the modal
  if (!cookiePreferences && !necessaryCookiesAccepted) {
    showCookieModal();
  } else {
    // If cookies are accepted, initialize the form saving functionality
    initializeFormSaving();
  }

  // Set up event listeners for cookie modal
  document
    .getElementById("accept-all-cookies")
    .addEventListener("click", function () {
      setCookiePreferences(true, true, true);
      hideCookieModal();
      initializeFormSaving(); // Enable form saving after acceptance
    });

  document
    .getElementById("save-preferences")
    .addEventListener("click", function () {
      const analytics = document.getElementById("analytics-cookies").checked;
      const marketing = document.getElementById("marketing-cookies").checked;
      setCookiePreferences(true, analytics, marketing);
      hideCookieModal();
      initializeFormSaving(); // Enable form saving based on preferences
    });

  document
    .getElementById("reject-all-cookies")
    .addEventListener("click", function () {
      setCookiePreferences(true, false, false);
      hideCookieModal();
      // Don't initialize form saving if rejected
    });

  // Necessary cookies are always enabled (disabled checkbox)
  document.getElementById("necessary-cookies").checked = true;
});

function initializeFormSaving() {
  setupCookieSaving();
  loadSavedData();
  setupFormSubmission();
}

function showCookieModal() {
  const modal = document.getElementById("cookie-modal");
  modal.classList.add("active");

  // Check if there are previously saved preferences (except necessary)
  const cookiePreferences = JSON.parse(getCookie("cookiePreferences") || "{}");
  if (cookiePreferences.analytics) {
    document.getElementById("analytics-cookies").checked = true;
  }
  if (cookiePreferences.marketing) {
    document.getElementById("marketing-cookies").checked = true;
  }
}

function hideCookieModal() {
  const modal = document.getElementById("cookie-modal");
  modal.classList.remove("active");
}

function setCookiePreferences(necessary, analytics, marketing) {
  // Necessary cookies are always set
  setCookie("necessaryCookies", "true", 365);

  // Set preferences cookie
  const preferences = {
    necessary: necessary,
    analytics: analytics,
    marketing: marketing,
    date: new Date().toISOString(),
  };
  setCookie("cookiePreferences", JSON.stringify(preferences), 365);

  // Implement your actual cookie setting/removal based on preferences
  if (analytics) {
    // Initialize analytics cookies
  } else {
    // Remove analytics cookies
  }

  if (marketing) {
    // Initialize marketing cookies
  } else {
    // Remove marketing cookies
  }
}

// Modified setupCookieSaving to check for cookie acceptance first
function setupCookieSaving() {
  const rememberMe = document.getElementById("rememberMe");
  const cookiePreferences = JSON.parse(getCookie("cookiePreferences") || "{}");

  // Only enable saving if cookies are accepted
  if (cookiePreferences.necessary) {
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
}

function loadSavedData() {
  const cookiePreferences = JSON.parse(getCookie("cookiePreferences") || "{}");

  // Only load data if cookies are accepted
  if (cookiePreferences.necessary) {
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
}

function setupFormSubmission() {
  const contactForm = document.getElementById("contactForm");
  const cookiePreferences = JSON.parse(getCookie("cookiePreferences") || "{}");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Here you would typically send the data to a server
    alert(
      `Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`
    );

    // Only manage cookies if they're accepted
    if (cookiePreferences.necessary) {
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
    } else {
      // If cookies aren't accepted, just reset the form
      contactForm.reset();
    }
  });
}

// Your existing cookie functions
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; ${expires}; path=/; SameSite=Lax`;
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
