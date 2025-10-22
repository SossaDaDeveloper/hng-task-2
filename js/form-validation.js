document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('[data-testid="test-contact-form"]');

  if (!form) {
    console.error("Form not found! Check your data-testid name.");
    return;
  }

  const nameInput = document.querySelector('[data-testid="test-contact-name"]');
  const emailInput = document.querySelector('[data-testid="test-contact-email"]');
  const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
  const messageInput = document.querySelector('[data-testid="test-contact-message"]');
  const successMessage = document.querySelector('[data-testid="test-contact-success"]');

  const errorName = document.querySelector('[data-testid="test-contact-error-name"]');
  const errorEmail = document.querySelector('[data-testid="test-contact-error-email"]');
  const errorSubject = document.querySelector('[data-testid="test-contact-error-subject"]');
  const errorMessage = document.querySelector('[data-testid="test-contact-error-message"]');

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted — validation running...");

    let isValid = true;

    // Reset error messages
    [errorName, errorEmail, errorSubject, errorMessage].forEach(el => el.textContent = "");
    successMessage.textContent = "";

    // Name validation
    if (nameInput.value.trim() === "") {
      errorName.textContent = "Full name is required.";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (emailInput.value.trim() === "") {
      errorEmail.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      errorEmail.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Subject validation
    if (subjectInput.value.trim() === "") {
      errorSubject.textContent = "Subject is required.";
      isValid = false;
    }

    // Message validation
    if (messageInput.value.trim().length < 10) {
      errorMessage.textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    // Success message
    if (isValid) {
      console.log("All validations passed!");
      successMessage.textContent = "Thanks for reaching out! We'll get back to you soon.";
      form.reset();
    }
  });
});
