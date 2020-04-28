// FOR EMAIL AND MOBILE INPUT FIELD
function setUpInputField() {
	document.querySelectorAll('.wrap__button').forEach(button => {
		button.addEventListener("click", () => {
			const wrapHeader = button.parentElement;
			const wrapContainer = wrapHeader.parentElement;
			const inputNumber = button.dataset.forInput;
			const inputToActive = wrapContainer.querySelector(`.wrap__input[data-input = "${inputNumber}"]`)

			wrapHeader.querySelectorAll('.wrap__button').forEach(button => {
        button.classList.remove('wrap__button--active');
       
			});
			wrapContainer.querySelectorAll('.wrap__input').forEach(input => {
				input.classList.remove('wrap__input--active')
			})
			button.classList.add('wrap__button--active');
			inputToActive.classList.add('wrap__input--active');
		})
	})
}

document.addEventListener("DOMContentLoaded", () => {
	setUpInputField();
})

// CLICK ON SUBMIT FORM
document.querySelector('.btn__submit').addEventListener('click', function (e) {

});

(function () {
	var textMsgMobile = document.querySelector('.wrap__content');
	var request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			document.querySelector("#loading__spinner").style.display = "none";
			if (request.status === 200) {
				textMsgMobile.innerHTML = 'Successful! You are created account.';

			} else {
        // display an error message
				textMsgMobile.innerHTML = 'An error occurred during your request. '
			}
		}
	}
	request.open('Get', '');
	document.querySelector('.btn__submit').addEventListener('click', function (e) {
		e.preventDefault();
		let numberVal = document.querySelector("#mobile__input").value;
		let emailVal = document.querySelector("#email__input").value;
	  const onlyTelephone = /^(\+\d{1,3}[- ]?)?\d{1,10}$/;
		const onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errorMsgMobile = document.querySelector(".wrap__input--mobile");
    let errorMsgEmail = document.querySelector(".wrap__input--email");
    let mobileInput = document.querySelector('#mobile__input');
    let emailInput = document.querySelector('#email__input')
    let contentForm = document.querySelector("#content__form");
    let loadingSpinner = document.querySelector("#loading__spinner")
		if (numberVal === "" || !numberVal.match(onlyTelephone)) {
			mobileInput.style.border = "1px solid red";
      let div = document.createElement("div");
      div.classList.add("error__msg");
			div.innerHTML = "Please enter a valid phone number";
			errorMsgMobile.appendChild(div);
		} else {
			mobileInput.style.border = "1px solid #CCC";
			contentForm.style.display = 'none';
      loadingSpinner.style.display = "block";
      if (document.querySelector(".error__msg")) {
       this.style.display = 'none';
        }
			// send the request
			request.send();
		}
		if (emailVal === "" || !emailVal.match(onlyEmail)) {
      emailInput.style.border = "1px solid red";
      let div = document.createElement("div");
      div.classList.add("error__msg");
			div.innerHTML = "Please enter a valid email address";
			errorMsgEmail.appendChild(div);

		} else {
			emailInput.style.border = "1px solid #CCC";
			contentForm.style.display = 'none';
      if (document.querySelector(".error__msg")) {
        this.style.display = 'none';
         }
			loadingSpinner.style.display = "block"
			// send the request
			request.send();
		}
	});

})();