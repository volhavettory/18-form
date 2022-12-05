// let form1 = document.forms.loginForm;
// // <!-- получение формы с name loginForm -->

// let form2 = document.forms[0];
// // < !--получение первой формы а 1, 2, 3 последующие-- >
// let form3 = document.querySelector("[name=loginForm]");

// // потом нам надо получить доступ к елементам формы которые были введены в форму, это будет при нажатии кнопки Проверить форму
// // checkFormButton
// document
//   .querySelector("#checkFormButton")
//   .addEventListener("click", function () {
//     // все елементы содержащииеся в форме,доступны через коллекцию elements на обьектe формы
//     for (let i = 0; i < form1.elements.length; i++) {
//       const element = form1.elements[i];
//       // ?????? что бы не навредить самому массиву
//       console.log(element.name + "=" + element.value);
//     }
//   });
// // если нужно конкретно обратиться к елементу то не надо перебирать а на прямую
// document
//   .querySelector("#checkValueButton")
//   .addEventListener("click", function () {
//     console.log(form1.elements.loginInput.value);
//     console.log(form1.elements.passwordInput.value);
//   });
// ВТОРА ФОРМА С ТАБЛИЦЕЙ
// let productForm = document.forms.productForm;
// let productsTable = document.querySelector("#productsTable");
// let prodButton = document.querySelector("#button");

// prodButton.addEventListener("click", function () {
//   addRow(
//     productForm.prod.value,
//     productForm.price.value,
//     productForm.currency.value
//   );
//   for (let i = 0; i < productForm.elements.length; i++) {
//     const element = productForm.elements[i];
//     if (element.type == "text") element.value = "";
//   }
// });
// function addRow(prod, price, currency) {
//   let tr = document.createElement("tr");
//   tr.insertAdjacentHTML("beforeend", `<td>${prod}<td />`);
//   tr.insertAdjacentHTML("beforeend", `<td>${price}<td />`);
//   tr.insertAdjacentHTML("beforeend", `<td>${currency}<td />`);
//   productsTable.append(tr);
// }

//   ВАЛИДАЦИЯ

const form = document.forms[0];
form.addEventListener("submit", function () {
  alert("отправлено");
});

// form.addEventListener("change", eventHandler);
// form.addEventListener("invalid", eventHandler, true);
// // invalid событие происходиткогда элемент был проверен но его содержимое не удовлетворет ограничением
// // проверка выполняется при отправки формы или при checkValidity
// function eventHandler(e) {
//   if (e.target.tagName != "INPUT") {
//     retern;
//     checkErrorAndSetMessage(e.target);
//   }
// }
// function checkErrorAndSetMessage(input) {
//   // inpputValiditi-описывает сщстоние проверки валидности элемента
//   if (input.validity.valueMissing) {
//     input.setCustomValidity("заполнить vvvvv это поле");
//   } else if (input.validity.tooShort) {
//     input.setCustomValidity("менее vvvvv6 символов");
//   } else if (input.validity.tooLong) {
//     input.setCustomValidity("более vvvvv12 символов");
//   } else if (input.validity.typeMismatch) {
//     input.setCustomValidity("маил vvvvvневерный");
//   } else {
//     input.setCustomValidity("");
//   }
// }

// ПОДТВЕРЖДЕНИЕ ПАРОЛЯ
form.passwordInputconfirm.addEventListener("input", function () {
  // setCustomValiditi-добавляет настраиваемое сообщение об ошибке в элемент
  // если сообщение установлено - элемент считаетс не валидным
  // если сообщение пустая строка -валидный
  if (form.passwordInputconfirm.value != form.passwordInput.value) {
    form.passwordInputconfirm.setCustomValidity("Не совпадают");
    form.passwordInput.setCustomValidity("Не совпадают");
  } else {
    form.passwordInputconfirm.setCustomValidity("");
    form.passwordInput.setCustomValidity("");
  }
});

// валидация имайла
// валидация имайла

const mail = document.querySelector(".emailInput");
mail.addEventListener(".emailInput", onInput);
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInput() {
  if (isEmailValid(input.value)) {
    mail.style.borderColor = "green";
  } else {
    mail.style.borderColor = "red";
  }
}

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
