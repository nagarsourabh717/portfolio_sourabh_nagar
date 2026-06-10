var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){

    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// EmailJS

emailjs.init("4wOUbnxxmqKYiiObr");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_4i6uqgg",
        "template_phtl9zo",
        this
      )
      .then(() => {

        alert("✅ Message Sent Successfully!");
        this.reset();

      })
      .catch((error) => {

        console.log(error);
        alert("❌ Failed to Send Message");

      });

  });
