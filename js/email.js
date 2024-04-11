(function () {
    emailjs.init("dwNFo22EqLlRr__nI");
})();

const serviceID = "default_service";
const templateID = "template_ggc47gc";
const form = document.querySelector("#contact-form");
const submit = document.querySelector("#contact-form .submit");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    submit.innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse"></i>';

    emailjs.sendForm(serviceID, templateID, form).then(
        () => {
            submit.innerHTML = "Submit";
            form.classList.add('submitted');
        },
        (err) => {
            submit.value = "Submit";
            alert(JSON.stringify(err));
        }
    );
});