$(document).ready(function () {
  // Combine smooth scrolling for both anchor and form actions
  $('a[href*="#"], form[action*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href") || $(this).attr("action")).offset()
          .top,
      },
      450,
      "linear"
    );
  });
});

const popup = document.querySelector(".popup"),
  submitInput = popup.querySelector('input[type="submit"]');

function getDataForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target.closest("form"));
  confirm(
    "Continue To Submit This Request To 210161971@aston.ac.uk?" +
      "\n\nName: " +
      formData.get("nameField") +
      " \n\nEmail: " +
      formData.get("emailField") +
      " \n\nAppointment Schedule: " +
      formData.get("dateField") +
      " \n\nMessage: " +
      formData.get("messageField")
  );
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    submitInput.addEventListener("click", getDataForm, false);
  },
  false
);
