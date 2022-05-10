const form = document.getElementById("loginform");
const full = document.getElementById("fullname");
const mail = document.getElementById("mail");
const call = document.getElementById("call");
const pwd = document.getElementById("pwd");
const texmess = document.getElementById("textmessage");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const button = document.getElementById("button");
const regname = /^[A-Za-zéèàê]+((\s)?((\'|\-|\.)?([A-Za-zéèàê])+))*$/;
const regna = /[0-9]/g;
const regnach = /[^0-9a-zA-Z\s\'|\-|\.]/g;
const regmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/g;
const regcall = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const regpass =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regtext =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let valname = false;
let valmail = false;
let valcall = false;
let valpass = false;
let valtext = false;

form.addEventListener("change", (e) => {
  e.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  let result = [];
  let rerrorna = [];

  let valname2 = fullname.value.match(regnach);
  console.log(valname2);
  valname2 = rerrorna.push(valname2[0]);
  
  let valname1 = fullname.value.match(regna);
  console.log(valname1);
  valname1 = rerrorna.push(valname1[0]);
  console.log(rerrorna);
 
  let valname = fullname.value.match(regname);
    valname = result.push(valname[0]);

  if(valname2 !== 0){
      one.innerHTML = "Les caractères spéciaux ne sont pas autorisés !";
      one.classList.remove("hidden");
      full.classList.add("invalid");
  } else if(valname1 !== 0){
      one.innerHTML = "Les chiffres ne sont pas autorisés !";
      one.classList.remove("hidden");
      full.classList.add("invalid");
  } else if (!valname) {
    one.classList.remove("hidden");
    full.classList.add("invalid");
  } else {
    one.classList.add("hidden");
    full.classList.remove("invalid");
    valname = true;
  }

  let valmail = mail.value.match(regmail);
  if (!valmail) {
    two.classList.remove("hidden");
    mail.classList.add("invalid");
  } else {
    two.classList.add("hidden");
    mail.classList.remove("invalid");
    valmail = result.push(valmail[0]);
    valmail = true;
  }

  let valcall = call.value.match(regcall);
  if (!valcall) {
    three.classList.remove("hidden");
    call.classList.add("invalid");
  } else {
    three.classList.add("hidden");
    call.classList.remove("invalid");
    valcall = result.push(valcall[0]);
    valcall = true;
  }

  let valpass = pwd.value.match(regpass);
  if (!valpass) {
    four.classList.remove("hidden");
    pwd.classList.add("invalid");
  } else {
    four.classList.add("hidden");
    pwd.classList.remove("invalid");
    valpass = result.push(valpass[0]);
    valpass = true;
  }

  let valtext = [texmess.value];
  if (!valtext) {
    five.classList.remove("hidden");
    texmess.classList.add("invalid");
  } else {
    five.classList.add("hidden");
    texmess.classList.remove("invalid");
    valtext = result.push(valtext[0]);
    valtext = true;
  }
  console.log(result);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      valname == true &&
      valmail == true &&
      valcall == true &&
      valpass == true &&
      valtext == true
    ) {
      document.getElementById("loginform").style.display = "none";
      document.getElementById("fall").innerHTML = "Formulaire envoyé au serveur";
    }
  });
};