function sendMail() {
  var params = {
    name: $("#name").val(),
    surname: $("#surname").val(),
    subject: $("#subject").val(),
    empresa: $("#empresa").val(),
    position: $("#position").val(),
    phone: $("#phone").val(),
    mail: $("#mail").val(),
    message: $("#message").val(),
  };

  const serviceId = "service_1t8qkns";
  const templateId = "template_vxolw5s";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      $("#name").val("");
      $("#surname").val("");
      $("#subject").val("");
      $("#empresa").val("");
      $("#position").val("");
      $("#phone").val("");
      $("#mail").val("");
      $("#message").val("");
      console.log(res);
      $("#submitBtn").prop("disabled", false);
      Swal.fire({
        title: "Éxito!",
        text: "El mensaje se ha enviado correctamente",
        icon: "success",
        confirmButtonText: "Cerrar",
      });
    })
    .catch((err) => console.log(err));
}
