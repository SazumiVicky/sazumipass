const PwEl = document.getElementById("sazumi");  
 const copyEl = document.getElementById("sazumi06");  
 const lenEl = document.getElementById("sazumi05");  
 const upperEl = document.getElementById("sazumi01");  
 const lowerEl = document.getElementById("sazumi02");  
 const symbolEl = document.getElementById("sazumi04");  
 const generateEl = document.getElementById("sazumigen");  
 const numberEl = document.getElementById("sazumi03");  
 const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";  
 const lowerLetters = "abcdefghijklmnopqrstuvwxyz";  
 const numbers = "0123456789";  
 const symbol = "~!@#$%^&*()_+=|";  
 function getLowercase() {  
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];  
 }  
 function getUppercase() {  
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];  
 }  
 function getNumber() {  
  return numbers[Math.floor(Math.random() * numbers.length)];  
 }  
 function getSymbol() {  
  return symbol[Math.floor(Math.random() * symbol.length)];  
 }  
 function generatePassword() {  
  const len = lenEl.value;  
  let password = "";  
  for (let i = 0; i < len; i++) {  
   const x = generateX();  
   password += x;  
  }  
  PwEl.innerText = password;  
 }  
 function generateX() {  
  const xs = [];  
  if (upperEl.checked) {  
   xs.push(getUppercase());  
  }  
  if (lowerEl.checked) {  
   xs.push(getLowercase());  
  }  
  if (numberEl.checked) {  
   xs.push(getNumber());  
  }  
  if (symbolEl.checked) {  
   xs.push(getSymbol());  
  }  
  if (xs.length === 0) return "";  
  return xs[Math.floor(Math.random() * xs.length)];  
 }  
 generateEl.addEventListener("click", generatePassword);  
 copyEl.addEventListener("click", () => {  
  const textarea = document.createElement("textarea");  
  const password = PwEl.innerText;  
  if (!password) {  
   return;  
  }  
  textarea.value = password;  
  document.body.appendChild(textarea);  
  textarea.select();  
  document.execCommand("copy");  
  textarea.remove();  
  alert("Password Telah Di Copy");  
 });  
