const seconds = document.querySelector(".seconds .number");
minutes = document.querySelector(".minutes .number");
hours = document.querySelector(".hours .number");
days = document.querySelector(".days .number");

let secValue = 60;
minValue = 60;
hourValue = 12;
dayValue = 48;

const timeFunction = setInterval(()=>{
	secValue--;

	if (secValue==0) {
		minValue--;
		secValue = 60;
	}
	if (minValue==0) {
		hourValue--;
		minValue = 60;
	}
	if (hourValue==0) {
		dayValue--;
		hourValue = 60;
	}
	if (dayValue==0) {
		clearInterval(timeFunction);
	}
	seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
	minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
	hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
	days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
	 
}, 1000)


function validation() {
	let form = document.getElementById('form')
	let email = document.getElementById('email').value
	let text = document.getElementById('text')
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  
	if (email.match(pattern)) {
	  form.classList.add('valid')
	  form.classList.remove('invalid')
	  text.innerHTML = "Your Email Address in valid"
	  text.style.color = '#00ff00'
	} else {
	  form.classList.remove('valid')
	  form.classList.add('invalid')
	  text.innerHTML = "Please Enter Valid Email Address"
	  text.style.color = '#ff0000'
	}
  
	if (email == '') {
	  form.classList.remove('valid')
	  form.classList.remove('invalid')
	  text.innerHTML = ""
	  text.style.color = '#00ff00'
	}
  }