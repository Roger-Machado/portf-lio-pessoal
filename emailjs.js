emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

const form = document.getElementById("form-orcamento");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs
    .sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, this)
    .then(function () {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    })
    .catch(function (error) {
      alert("Erro ao enviar mensagem");
      console.error(error);
    });
});
