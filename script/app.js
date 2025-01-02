

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
            /// aklia
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
            /// aklia
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
            /// aklia
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

