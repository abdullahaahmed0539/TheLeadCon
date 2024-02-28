$("#contactForm").on("submit", async function () {
  const name = $("#contact-name").val();
  const email = $("#contact-email").val();
  const phone = $("#contact-phone").val();
  const message = $("#contact-message").val();

  data = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };
  await fetch("http://localhost:8080/email/sendEmail", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  alert("Your message has been sent successfully.");
  $("#contactForm").trigger("reset");
});
