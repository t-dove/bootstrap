var fname = document.getElementById("validationTextarea");
var lname = document.getElementById("validationTextarea2");
var sex_ch = false
var country_ch = false;

document.getElementById("validationFormCheck2").onchange = (e) => {
    sex_ch = true;
    console.log("eee");
};
document.getElementById("validationFormCheck3").onchange = (e) => {
    sex_ch = true;
    console.log("eee");
};
document.getElementById("selectForm1").onchange = (e) => {
    country_ch = true;
    console.log("eee");
};

function checkFormActive() {
    if (fname.value.trim() != "" && lname.value.trim() != "" && sex_ch && country_ch) {
        document.getElementById("form_submit").disabled = false;
    } else {
        document.getElementById("form_submit").disabled = true;
    }
} setInterval(checkFormActive, 100);

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))