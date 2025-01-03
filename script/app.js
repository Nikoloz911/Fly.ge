

/// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON 
/// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON 

document.addEventListener("DOMContentLoaded", () => {  
    let translations = {
        ge: {
            "aviabiltebi": "ავიაბილეთები",
            "blog": "ბლოგი",
            "aboutUs": "ჩვენს შესახებ",
            "login": "შესვლა",
            "language": "ქარ",
            "modalTitle": "ავტორიზაცია",
            "modalEmailPlaceholder": "ელ.ფოსტა*",
            "modalPasswordPlaceholder": "პაროლი*",
            "modalRememberMe": "დამიმახსოვრე",
            "modalPasswordReset": "პაროლის აღდგენა",
            "modalRegistrationQuestion": "არ გაქვს ანგარიში?",
            "modalRegistrationText": "რეგისტრაცია",
            "modalAuthButton": "ავტორიზაცია",
            "closeErrorButton": "დახურვა"
        },
        en: {
            "aviabiltebi": "Flights",
            "blog": "Blog",
            "aboutUs": "About Us",
            "login": "Login",
            "language": "Eng",
            "modalTitle": "Authorization",
            "modalEmailPlaceholder": "Email*",
            "modalPasswordPlaceholder": "Password*",
            "modalRememberMe": "Remember me",
            "modalPasswordReset": "Forgot Password",
            "modalRegistrationQuestion": "Don't have an account?",
            "modalRegistrationText": "Sign Up",
            "modalAuthButton": "Authorize",
            "closeErrorButton": "Close"
        },
        ru: {
            "aviabiltebi": "Авиабилеты",
            "blog": "Блог",
            "aboutUs": "О нас",
            "login": "Войти",
            "language": "Рус",
            "modalTitle": "Авторизация",
            "modalEmailPlaceholder": "Эл. почта*",
            "modalPasswordPlaceholder": "Пароль*",
            "modalRememberMe": "Запомнить меня",
            "modalPasswordReset": "Восстановить пароль",
            "modalRegistrationQuestion": "Нет аккаунта?",
            "modalRegistrationText": "Регистрация",
            "modalAuthButton": "Авторизоваться",
            "closeErrorButton": "Закрыть"
        }
    };
    let languageButton = document.querySelector(".nav-bar-language-button");
    let dropdownContainer = document.createElement("div");
    let modalTitle = document.querySelector(".modal-content h1");
    let modalEmailInput = document.querySelector(".modal-email-input");
    let modalPasswordInput = document.querySelector(".modal-password-input");
    let modalRememberMeText = document.querySelector(".modal-checkbox-text");
    let modalPasswordReset = document.querySelector(".modal-password-reset");
    let modalRegistrationQuestion = document.querySelector(".modal-registration-container-question");
    let modalRegistrationText = document.querySelector(".modal-registration-container-text");
    let modalAuthButton = document.querySelector(".modal-button");
    let dropdownItems = [
      { flag: "./images/Flags/Language-ge-logo.svg", text: "ქარ", lang: "ge" },
      { flag: "./images/Flags/us.svg", text: "eng", lang: "en" },
      { flag: "./images/Flags/ru.svg", text: "Pyc", lang: "ru" },
    ];
    dropdownContainer.classList.add("nav-bar-language-dropdown");
    document.body.appendChild(dropdownContainer);
    dropdownContainer.style.display = "none"; 
    dropdownItems.forEach((item) => {
      let dropdownItem = document.createElement("div");
      dropdownItem.classList.add("dropdown-item");
  
      let dropdownContent = document.createElement("div");
      dropdownContent.classList.add("dropdown-content");
      dropdownContent.style.display = "flex";
      dropdownContent.style.flexDirection = "row";
      dropdownContent.style.alignItems = "center";
      dropdownContent.style.justifyContent = "center";
      dropdownContent.style.gap = "10px";
      dropdownContent.style.padding = "7px";
  
      let flag = document.createElement("img");
      flag.classList.add("dropdown-flag");
      flag.src = item.flag;
      flag.alt = item.text;
      flag.style.width = "20px";
      flag.style.height = "20px";
      flag.style.borderRadius = "50%";
  
      let text = document.createElement("span");
      text.classList.add("dropdown-text");
      text.textContent = item.text;
      text.style.fontSize = "14px"; 
      dropdownContent.appendChild(flag);
      dropdownContent.appendChild(text); 
      dropdownItem.appendChild(dropdownContent);
      dropdownItem.style.cursor = "pointer";
      dropdownItem.style.transition = "background-color 300ms";
      
      dropdownItem.addEventListener("mouseover", () => {
        dropdownItem.style.backgroundColor = "#f0f0f0";
      });
      
      dropdownItem.addEventListener("mouseout", () => {
        dropdownItem.style.backgroundColor = "transparent";
      });
  
      dropdownItem.addEventListener("click", () => {
        languageButton.querySelector("img").src = flag.src;
        let pTag = languageButton.querySelector("p");
        pTag.textContent = text.textContent;
        pTag.style.fontWeight = "normal"; 
        dropdownContainer.style.display = "none";
        languageButton.classList.remove("dropdown-open");

        updateNavBarText(item.lang);
        updateModalText(item.lang);
      });
  
      dropdownContainer.appendChild(dropdownItem);
    });
  
    languageButton.addEventListener("click", (e) => {
      e.stopPropagation();
      let isOpen = languageButton.classList.toggle("dropdown-open");
      dropdownContainer.style.display = isOpen ? "flex" : "none";
      dropdownContainer.style.marginTop = "10px";
      dropdownContainer.style.flexDirection = "column";
      dropdownContainer.style.backgroundColor = "#fff";
      dropdownContainer.style.borderRadius = "5px";
      dropdownContainer.style.width = "110px";
      dropdownContainer.style.height = "110px";
      let rect = languageButton.getBoundingClientRect();
      dropdownContainer.style.position = "absolute";
      dropdownContainer.style.top = `${rect.bottom + window.scrollY}px`;
      dropdownContainer.style.left = `${rect.left + window.scrollX}px`;
    });
  
    document.addEventListener("click", () => {
      dropdownContainer.style.display = "none";
      languageButton.classList.remove("dropdown-open");
    });
    /// LANGUAGE UPDATE /// LANGUAGE UPDATE /// LANGUAGE UPDATE /// LANGUAGE UPDATE /// LANGUAGE UPDATE
    function updateNavBarText(lang) {
      document.querySelector(".nav-bar-link-main li").textContent = translations[lang].aviabiltebi;
      document.querySelector(".nav-bar-link:nth-child(2) li").textContent = translations[lang].blog;
      document.querySelector(".nav-bar-link:nth-child(3) li").textContent = translations[lang].aboutUs;
      document.querySelector(".nav-bar-log-in-button").textContent = translations[lang].login;
      languageButton.querySelector("p").textContent = translations[lang].language;
    }
    ///
    ///
    ///
    let errorText = document.querySelector(".error-text");
    let closeError = document.querySelector(".close-error");   
    function updateModalText(lang) {
        modalTitle.textContent = translations[lang].modalTitle;
        modalEmailInput.setAttribute("placeholder", translations[lang].modalEmailPlaceholder);
        modalPasswordInput.setAttribute("placeholder", translations[lang].modalPasswordPlaceholder);
        modalRememberMeText.textContent = translations[lang].modalRememberMe;
        modalPasswordReset.textContent = translations[lang].modalPasswordReset;
        modalRegistrationQuestion.textContent = translations[lang].modalRegistrationQuestion;
        modalRegistrationText.textContent = translations[lang].modalRegistrationText;
        modalAuthButton.textContent = translations[lang].modalAuthButton;  
        ///
        ///
        ///
        if (errorText && closeError) {
            closeError.textContent = translations[lang].closeErrorButton;
        }
    }
       /// LANGUAGE UPDATE /// LANGUAGE UPDATE /// LANGUAGE UPDATE /// LANGUAGE UPDATE /// LANGUAGE UPDATE
  });
  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON 
  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON  /// NAV BAR LANGUAGE BUTTON 
  
  /// NAV BAR LOG IN BUTTON  /// NAV BAR LOG IN BUTTON  /// NAV BAR LOG IN BUTTON  /// NAV BAR LOG IN BUTTON  /// NAV BAR LOG IN BUTTON
  document.addEventListener("DOMContentLoaded", () => {
    let loginButton = document.querySelector(".nav-bar-log-in-button");
    let modalContainer = document.querySelector(".modal-container");
    let closeModalIcon = document.querySelector(".modal-icon");
    loginButton.addEventListener("click", () => {
      modalContainer.style.display = "flex";
    });
    closeModalIcon.addEventListener("click", () => {
      modalContainer.style.display = "none";
      document.body.style.backgroundColor = "";
    });
    modalContainer.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        modalContainer.style.display = "none";
        document.body.style.backgroundColor = "";
      }
    });
  });
  /// NAV BAR LOG IN BUTTON  /// NAV BAR LOG IN BUTTON  /// NAV BAR LOG IN BUTTON  /// NAV BAR LOG IN BUTTON  /// NAV BAR LOG IN BUTTON
  /// MODAL CHECKBOX /// MODAL CHECKBOX  /// MODAL CHECKBOX  /// MODAL CHECKBOX  /// MODAL CHECKBOX  /// MODAL CHECKBOX 
  document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.querySelector('.modal-checkbox');
    let checkboxCube = document.querySelector('.modal-checkbox-cube');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            checkboxCube.classList.add('checked'); 
        } else {
            checkboxCube.classList.remove('checked');
        }
    });
});
  /// MODAL CHECKBOX /// MODAL CHECKBOX  /// MODAL CHECKBOX  /// MODAL CHECKBOX  /// MODAL CHECKBOX  /// MODAL CHECKBOX 
/// VISIBLE PASSWORD /// VISIBLE PASSWORD /// VISIBLE PASSWORD /// VISIBLE PASSWORD /// VISIBLE PASSWORD
document.addEventListener("DOMContentLoaded", function() {
    var passwordButton = document.querySelector(".password-show-button");
    var passwordInput = document.getElementById("password-input");
    var passwordIcon = document.getElementById("password-icon");
    passwordButton.addEventListener("click", function() {
      if (passwordInput.type === "password") {
        passwordInput.type = "text"; 
        passwordIcon.classList.remove("bi-eye-fill");
        passwordIcon.classList.add("bi-eye-slash-fill"); 
      } else {
        passwordInput.type = "password"; 
        passwordIcon.classList.remove("bi-eye-slash-fill");
        passwordIcon.classList.add("bi-eye-fill");  
      }
    });
  });
/// VISIBLE PASSWORD /// VISIBLE PASSWORD /// VISIBLE PASSWORD /// VISIBLE PASSWORD /// VISIBLE PASSWORD
  
/// MODAL AUTHORIZATION BUTTON /// MODAL AUTHORIZATION BUTTON /// MODAL AUTHORIZATION BUTTON 
document.addEventListener("DOMContentLoaded", () => {
    let emailInput = document.querySelector(".modal-email-input");
    let passwordInput = document.querySelector(".modal-password-input");
    let emailIcon = document.querySelector(".modal-email-icon");
    let passwordIcon = document.querySelector(".modal-password-icon");
    let modalButton = document.querySelector(".modal-button");
    let errorContainer = document.getElementById("error-container");
    let errorText = document.getElementById("error-text");
    let closeErrorButton = document.getElementById("close-error");

    function validateForm() {
        let isValid = true;
        let errorMessage = "";

        emailInput.classList.remove("invalid");
        passwordInput.classList.remove("invalid");
        emailIcon.classList.remove("invalid");
        passwordIcon.classList.remove("invalid");

        if (emailInput.value.trim() === "") {
            emailInput.classList.add("invalid");
            emailIcon.classList.add("invalid");
            errorMessage += "Email-ის ველი აუცილებელია. ";
            isValid = false;
        }else if (!emailInput.value.includes("@") || !emailInput.value.endsWith("gmail.com")) {
            emailInput.classList.add("invalid");
            emailIcon.classList.add("invalid");
            emailInput.style.color = "red"; 
            errorMessage += "Email უნდა შეიცავდეს '@' და მთავრდებოდეს 'gmail.com'. ";
            isValid = false;
        }

        if (passwordInput.value.trim() === "") {
            passwordInput.classList.add("invalid");
            passwordIcon.classList.add("invalid");
            errorMessage += "Password-ის ველი აუცილებელია. ";
            isValid = false;
        }

        if (!isValid) {
            errorText.textContent = errorMessage;
            errorContainer.style.display = "flex";
            clearTimeout(window.errorTimeout);  
            window.errorTimeout = setTimeout(() => {
                errorContainer.style.display = "none"; 
            }, 7000);
        } else {
            errorContainer.style.display = "none";
        }

        return isValid;
    }

    modalButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (validateForm()) {
            emailInput.style.color = ""; 
        }
    });

    closeErrorButton.addEventListener("click", () => {
        errorContainer.style.display = "none";
    });
});

/// MODAL AUTHORIZATION BUTTON /// MODAL AUTHORIZATION BUTTON /// MODAL AUTHORIZATION BUTTON 




/// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY
/// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY
document.addEventListener('click', function(event) {
  let dropdownBox1 = document.querySelector('.ticket-dropdowns-container-1-box');
  let dropdownContent1 = document.getElementById('dropdown1');
  let isDropdownClick1 = dropdownBox1.contains(event.target);
  let dropdownBox2 = document.querySelector('.ticket-dropdowns-container-2-box');
  let dropdownContent2 = document.getElementById('dropdown2');
  let isDropdownClick2 = dropdownBox2.contains(event.target);
  let dropdownBox3 = document.querySelector('.ticket-dropdowns-container-3-box');
  let dropdownContent3 = document.getElementById('dropdown3');
  let isDropdownClick3 = dropdownBox3.contains(event.target);
  if (!isDropdownClick1 && dropdownContent1.classList.contains('dropdown-visible')) {
    closeDropdown(dropdownContent1, dropdownBox1);
  }
  if (!isDropdownClick2 && dropdownContent2.classList.contains('dropdown-visible')) {
    closeDropdown(dropdownContent2, dropdownBox2);
  }
  if (!isDropdownClick3 && dropdownContent3.classList.contains('dropdown-visible')) {
    closeDropdown(dropdownContent3, dropdownBox3);
  }
  if ((event.target.id === 'delete-button-1' || event.target.id === 'confirm-button-1') && dropdownContent2.classList.contains('dropdown-visible')) {
    alert(`${event.target.id} button clicked!`);
    closeDropdown(dropdownContent2, dropdownBox2);
  }
});
function toggleDropdown(dropdownId, boxElement) {
  let dropdown = document.getElementById(dropdownId);
  let caretIcon = boxElement.querySelector('.ticket-dropdowns-container-1-box-caret-icon i');
  let isVisible = dropdown.classList.contains('dropdown-visible');
  closeAllDropdowns();
  if (!isVisible) {
    dropdown.classList.add('dropdown-visible');
    caretIcon.classList.replace('bi-caret-down-fill', 'bi-caret-up-fill');
    boxElement.classList.add('dropdown-open');
  } else {
    dropdown.classList.remove('dropdown-visible');
    caretIcon.classList.replace('bi-caret-up-fill', 'bi-caret-down-fill');
    boxElement.classList.remove('dropdown-open');
  }
}
function closeAllDropdowns() {
  let allDropdowns = document.querySelectorAll('.dropdown');
  let allCarets = document.querySelectorAll('.ticket-dropdowns-container-1-box-caret-icon i');
  let allBoxes = document.querySelectorAll('.ticket-dropdowns-container-1-box, .ticket-dropdowns-container-2-box, .ticket-dropdowns-container-3-box');
  allDropdowns.forEach(d => d.classList.remove('dropdown-visible'));
  allCarets.forEach(caret => caret.classList.replace('bi-caret-up-fill', 'bi-caret-down-fill'));
  allBoxes.forEach(box => box.classList.remove('dropdown-open'));
}
function closeDropdown(dropdown, dropdownBox) {
  dropdown.classList.remove('dropdown-visible');
  let caretIcon = dropdownBox.querySelector('.ticket-dropdowns-container-1-box-caret-icon i');
  caretIcon.classList.replace('bi-caret-up-fill', 'bi-caret-down-fill');
  dropdownBox.classList.remove('dropdown-open');
}
function selectOption(optionElement) {
  let box = optionElement.closest('.ticket-dropdowns-container-1-box');
  let boxText = box.querySelector('.ticket-dropdowns-container-1-box-text');
  let boxIcon = box.querySelector('.ticket-dropdowns-container-1-box-repeat-icon i');
  let selectedText = optionElement.querySelector('.dropdown-content-text').textContent;
  let selectedIconClass = optionElement.querySelector('.dropdown-content-icon-1 i').classList[1];
  boxText.textContent = selectedText;
  boxIcon.className = `bi ${selectedIconClass}`;
  closeAllDropdowns();
}
let dropdownContent2 = document.getElementById('dropdown2');
dropdownContent2.addEventListener('click', function(event) {
  if (event.target.id !== 'delete-button-1' && event.target.id !== 'confirm-button-1') {
    event.stopPropagation();
  }
});


/// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY
/// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY /// DROPDOWNS FUNCTIONALITY

/// FIRST SECTION OF NUMBERS CUBE /// FIRST SECTION OF NUMBERS CUBE /// FIRST SECTION OF NUMBERS CUBE /// FIRST SECTION OF NUMBERS CUBE
let counterElement = document.getElementById('counter');
let reduceCube = document.getElementById('reduce-cube');
let increaseCube = document.getElementById('increase-cube');
let counterValue = parseInt(counterElement.innerText);
reduceCube.addEventListener('click', function() {
    if (counterValue > 1) { 
        counterValue--;
        counterElement.innerText = counterValue;
        increaseCube.style.backgroundColor = '';  
    }
});
increaseCube.addEventListener('click', function() {
    if (counterValue < 8) {  // Limit the value to 8
        counterValue++;
        counterElement.innerText = counterValue;
    }
    if (counterValue === 8) {
        increaseCube.style.backgroundColor = '#a5a5a5'; 
    } else {
        increaseCube.style.backgroundColor = ''; 
    }
});
let numberOptionCube1 = document.getElementById('reduce-cube');
numberOptionCube1.addEventListener('click', function() {
    numberOptionCube1.classList.add('clicked'); 
    setTimeout(function() {
        numberOptionCube1.classList.remove('clicked');
    }, 200); 
});
let numberOptionCube2 = document.getElementById('increase-cube');
numberOptionCube2.addEventListener('click', function() {
    numberOptionCube2.classList.add('clicked'); 
    setTimeout(function() {
        numberOptionCube2.classList.remove('clicked');
    }, 200); 
});
/// FIRST SECTION OF NUMBERS CUBE /// FIRST SECTION OF NUMBERS CUBE /// FIRST SECTION OF NUMBERS CUBE /// FIRST SECTION OF NUMBERS CUBE
/// SECOND SECTION OF NUMBERS CUBE /// SECOND SECTION OF NUMBERS CUBE /// SECOND SECTION OF NUMBERS CUBE /// SECOND SECTION OF NUMBERS CUBE
let counterElement2 = document.getElementById('counter-2');
let reduceCube2 = document.getElementById('reduce-cube-2');
let increaseCube2 = document.getElementById('increase-cube-2');
let counterValue2 = parseInt(counterElement2.innerText);

reduceCube2.addEventListener('click', function() {
    if (counterValue2 > 0) { 
        counterValue2--; 
        counterElement2.innerText = counterValue2;
        increaseCube2.style.backgroundColor = ''; 
    }
});
increaseCube2.addEventListener('click', function() {
    if (counterValue2 < 8) {  
        counterValue2++;  
        counterElement2.innerText = counterValue2;
    }
    if (counterValue2 === 8) {
        increaseCube2.style.backgroundColor = '#a5a5a5';  
    } else {
        increaseCube2.style.backgroundColor = ''; 
    }
});
let numberOptionCube = document.getElementById('reduce-cube-2');
numberOptionCube.addEventListener('click', function() {
    numberOptionCube.classList.add('clicked');
    setTimeout(function() {
        numberOptionCube.classList.remove('clicked');
    }, 200);  
});
let numberOptionCube3 = document.getElementById('increase-cube-2');
numberOptionCube3.addEventListener('click', function() {
    numberOptionCube3.classList.add('clicked'); 
    setTimeout(function() {
        numberOptionCube3.classList.remove('clicked');
    }, 200); 
});
/// SECOND SECTION OF NUMBERS CUBE /// SECOND SECTION OF NUMBERS CUBE /// SECOND SECTION OF NUMBERS CUBE /// SECOND SECTION OF NUMBERS CUBE
/// THIRD SECTION OF NUMBERS CUBE /// THIRD SECTION OF NUMBERS CUBE /// THIRD SECTION OF NUMBERS CUBE /// THIRD SECTION OF NUMBERS CUBE
let counterElement4 = document.getElementById('counter-4');
let reduceCube4 = document.getElementById('reduce-cube-4');
let increaseCube4 = document.getElementById('increase-cube-4');
let counterValue4 = parseInt(counterElement4.innerText);

reduceCube4.addEventListener('click', function() {
    if (counterValue4 > 0) { 
        counterValue4--;
        counterElement4.innerText = counterValue4;
        increaseCube4.style.backgroundColor = '';  
    }
    reduceCube4.classList.add('clicked');
    setTimeout(function() {
        reduceCube4.classList.remove('clicked');
    }, 200); 
});
increaseCube4.addEventListener('click', function() {
    if (counterValue4 < 2) { 
        counterValue4++;
        counterElement4.innerText = counterValue4;
    }
    if (counterValue4 === 2) {
        increaseCube4.style.backgroundColor = '#a5a5a5';
    } else {
        increaseCube4.style.backgroundColor = '';  
    }
    increaseCube4.classList.add('clicked');
    setTimeout(function() {
        increaseCube4.classList.remove('clicked');
    }, 200); 
});
/// THIRD SECTION OF NUMBERS CUBE /// THIRD SECTION OF NUMBERS CUBE /// THIRD SECTION OF NUMBERS CUBE /// THIRD SECTION OF NUMBERS CUBE


document.querySelectorAll('.checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
      if (this.checked) {
          // Uncheck other checkboxes
          document.querySelectorAll('.checkbox').forEach(otherCheckbox => {
              if (otherCheckbox !== this) {
                  otherCheckbox.checked = false;
              }
          });
      }
  });
});










// fetch('TicketsResults.json') 
// .then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// })
// .then(data => {
//     let ticketList = document.getElementById('ticket-list');
//     data.forEach(ticket => {
//         console.log('Ticket:', ticket);
//         let ticketDiv = document.createElement('div');
//         ticketDiv.classList.add('ticket');
//         ticketDiv.innerHTML = `
//             <h3>Route No: ${ticket.RouteNo}</h3>
//             <p><strong>Airline:</strong> ${ticket.Airline}</p>
//             <p><strong>From:</strong> ${ticket.From}</p>
//             <p><strong>To:</strong> ${ticket.To}</p>
//             <p><strong>Transfer City:</strong> ${ticket['Transfer City']}</p>
//             <p><strong>Departure:</strong> ${ticket.Departure}</p>
//             <p><strong>Arrival:</strong> ${ticket.Arrival}</p>
//             <p><strong>Transfer Route No:</strong> ${ticket.TransferRouteNo}</p>
//             <p><strong>Transfer Departure:</strong> ${ticket['Transfer Departure']}</p>
//             <p><strong>Transfer Arrival:</strong> ${ticket['Transfer Arrival']}</p>
//             <p><strong>Transfer Duration:</strong> ${ticket['Transfer Duration']}</p>
//             <p><strong>Total Duration:</strong> ${ticket['Total Duration']}</p>
//             <p><strong>Economy Price:</strong> $${ticket['Economy Price']}</p>
//             <p><strong>Business Price:</strong> $${ticket['Business Price']}</p>
//         `;
//         ticketList.appendChild(ticketDiv);
//     });
// });