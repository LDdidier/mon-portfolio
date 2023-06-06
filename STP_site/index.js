document.getElementById("btn-send").addEventListener("click", (e) => {
  e.preventDefault();
  var templateParams = {
    from_name: document.getElementById("name_id").value,
    to_number: document.getElementById("number_id").value,
    to_date: document.getElementById("date_id").value,
    to_time3: document.getElementById("heurs_id").value,
    to_email: document.getElementById("email_id").value,
    message: document.getElementById("message_id").value,
  };
  emailjs
    .send("service_davv1d7", "template_yiyxs91", templateParams)
    .then((Response) => console.log(Response.statut))
    .catch((error) => console.log(error.message));
  alert("votre email a été envoyée");
  document.getElementById("from-send").reset();
});
