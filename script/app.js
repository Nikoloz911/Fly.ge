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
            "closeErrorButton": "დახურვა",
            "homePageTitle": "წინ კიდევ ბევრი აღმოჩენაა",
            "ticketSearcherTitle": "ავიაბილეთები",
            "roundTrip": "ორივე გზა",
            "oneWay": "ცალმხრივი",
            "multiCity": "რამდენიმე მარშუტი",
            "passenger": "მგზავრი",
            "adult": "ზრდასრული",
            "adultAge": "11 წლიდან",
            "child": "ბავშვები",
            "childAge": "2-11 წლის",
            "infant": "ჩვილი",
            "infantAge": "2 წლამდე",
            "delete": "წაშლა",
            "confirm": "დასტური",
            "economyClass": "ეკონომ კლასი",
            "premiumEconomyClass": "პერმიუმ ეკონომი",
            "businessClass": "ბიზნეს კლასი",
            "firstClass": "პირველი კლასი",
            "dropdownTitle": "დაზოგე ფული, შეინარჩუნე კომფორტი",
            "mixedClassSearch": "შერეული კლასით ძებნა",
            "mixedClassSearch": "თუ შერეულ კლასებს აირჩევთ, ჩვენ გაჩვენებთ საუკეთესო კომბინაციებს კომფორტული, მაგრამ ხელმისაწვდომი მოგზაურობისთვის.",
            "cityOrAirportFrom": "ქალაქი, აეროპორტი",
            "cityOrAirportTo": "ქალაქი, აეროპორტი",
            "whereTo": "სად",
            "departureDate": "გამგზავრება",
            "returnDate": "დაბრუნება",
            "searchTicket": "ბილეთის ძებნა",
            // "adventureTitle": "აღმოაჩინე თავგადასავლები",
            // "missionDescription": "შენს ცხოვრებაში მრავალფეროვანი თავგადასავლების შექმნაში დახმარება ჩვენი მისიაა.",
            // "travelBlogDescription": "გაეცანი ჩვენს ბლოგს და აღმოაჩინე ახალი ლოკაციები მოგზაურობისთვის.",
            // "budgetOptimization": "ბიუჯეტის ოპტიმიზაცია მნიშვნელოვანია? დაათვალიერე მორგებული შეთავაზებები.",
            // "scheduleAndBook": "გაეცანი განრიგს და დაჯავშნე მარტივად ავიაბილეთები და სასტუმროები.",
            // "shareExperience": "გააზიარეთ მოგზაურობის ბედნიერება სოციალურ ქსელებში.",
            // "flyGeDiscovery": "წინ კიდევ ბევრი აღმოჩენაა Fly.ge",
            "aviabiltebi": "ავიაბილეთები",
    "company": "კომპანია",
    "blog": "ბლოგი",
    "aboutUs": "ჩვენს შესახებ",
    "information": "ინფორმაცია",
    "privacyPolicy": "კონფიდენციალურობის პოლიტიკა",
    "termsAndConditions": "წესები და პირობები",
    "contact": "კონტაქტი",
    "writeUs": "მოგვწერეთ",
    "emailSubscription": "შეიყვანეთ თქვენი ელ.ფოსტა და მიიღეთ ექსკლუზიური შეთავაზებები",
    "subscribe": "გამოწერა",
    "successMessage": "თქვენ წარმატებით გამოიწერეთ ✔",
    "footerRights": "ყველა უფლება დაცულია fly.ge",
    "showCoolImage": "გაჩვენე მაგარი სურათი",
    "discoverAdventures": "აღმოაჩინე თავგადასავლები",
    "helpCreateAdventures": "შენს ცხოვრებაში, მრავალფეროვანი თავგადასავლების შექმნაში დახმარება და ძიების და გადაწყვეტილების პროცესის გამარტივება ჩვენი სუპერმისიაა.",
    "travelBlogDescription": "თუ მოგზაურობა შენი სტიქიაა, ხშირად გიწევს სხვადასხვა ქვეყანაში ვიზიტი ან თუ ეძებ, განსაკუთრებულ მომენტებს, ადგილებს, რომელთა აღმოჩენა და პერსონალურ რუკაზე მონიშვნა, შენს ცხოვრებაში დაუვიწყარ კადრებად და მოგონებებად ჩაიბეჭდება, გაეცანი ჩვენს ბლოგს – აღმოაჩინე და მოინიშნე ახალი ლოკაცია სამოგზაურო რუკაზე, გაეცანი მსოფლიო ხალხთა კულტურას და შეარჩიე შენთვის ყველაზე საინტერესო.",
    "budgetOptimization": "ბიუჯეტის ოპტიმიზაცია მნიშვნელოვანია? დაათვალიერე შენზე მორგებული შეთავაზებები – იქნებ, სასურველ ლოკაციაზე, განსაკუთრებული ფასები გვაქვს?",
    "scheduleAndBook": "გაეცანი განრიგს, შეარჩიე და დაჯავშნე მარტივად ავიაბილეთი, სასტუმრო, ონლაინ, ერთ სივრცესა და უმოკლეს ვადაში.",
    "shareExperience": "გაგვიზიარე შენი მოგზაურობით მიღებული ბედნიერება და შთაბეჭდილებები სოციალურ არხებში Facebook, Instagram, Linkedin.",
    "flyGeDiscovery": "წინ კიდევ ბევრი აღმოჩენაა Fly.ge"
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
            "closeErrorButton": "Close",
            "homePageTitle": "There are many more discoveries ahead",
            "ticketSearcherTitle": "Flights",
            "roundTrip": "Round Trip",
            "oneWay": "One Way",
            "multiCity": "Multi-City",
            "passenger": "Passenger",
            "adult": "Adult",
            "adultAge": "From 11 years old",
            "child": "Children",
            "childAge": "2-11 years old",
            "infant": "Infant",
            "infantAge": "Under 2 years old",
            "delete": "Delete",
            "confirm": "Confirm",
            "economyClass": "Economy Class",
            "premiumEconomyClass": "Premium Economy",
            "businessClass": "Business Class",
            "firstClass": "First Class",
            "dropdownTitle": "Save money, keep comfort",
            "mixedClassSearch": "Search with mixed classes",
            "mixedClassSearch": "Search with mixed classes",
            "cityOrAirportFrom": "City, Airport",
            "cityOrAirportTo": "City, Airport",
            "whereTo": "Where to?",
            "departureDate": "Departure",
            "returnDate": "Return",
            "searchTicket": "Search Tickets",
          "discoverAdventures": "Discover Adventures",
    "helpCreateAdventures": "Helping you create diverse adventures in your life and simplifying the process of search and decision-making is our super mission.",
    "travelBlogDescription": "If traveling is your passion, often visiting different countries or looking for special moments and places that you want to mark on your personal map, this will be captured as unforgettable scenes and memories in your life. Explore our blog – discover and mark new locations on your travel map, explore the culture of the world's people, and choose the most interesting ones for you.",
    "budgetOptimization": "Is budget optimization important? Check out offers tailored to you – maybe we have special prices for your desired location?",
    "scheduleAndBook": "Explore the schedule, select, and easily book your flight, hotel, or online in one place in the shortest time possible.",
    "shareExperience": "Share your travel happiness and impressions on social channels Facebook, Instagram, Linkedin.",
    "flyGeDiscovery": "Many more discoveries ahead Fly.ge",
            "aviabiltebi2": "Air Tickets",
            "company": "Company",
            "blog": "Blog",
            "aboutUs": "About Us",
            "information": "Information",
            "privacyPolicy": "Privacy Policy",
            "termsAndConditions": "Terms and Conditions",
            "contact": "Contact",
            "writeUs": "Write to us",
            "emailSubscription": "Enter your email and get exclusive offers",
            "subscribe": "Subscribe",
            "successMessage": "You have successfully subscribed ✔",
            "footerRights": "All rights reserved fly.ge",
            "showCoolImage": "Show Cool Image"
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
            "closeErrorButton": "Закрыть",
            "homePageTitle": "Впереди еще много открытий",
            "ticketSearcherTitle": "Авиабилеты",
            "roundTrip": "Туда и обратно",
            "oneWay": "В одну сторону",
            "multiCity": "Несколько маршрутов",
            "passenger": "Пассажир",
            "adult": "Взрослый",
            "adultAge": "От 11 лет",
            "child": "Дети",
            "childAge": "2-11 лет",
            "infant": "Младенец",
            "infantAge": "До 2 лет",
            "delete": "Удалить",
            "confirm": "Подтвердить",
            "economyClass": "Эконом класс",
            "premiumEconomyClass": "Премиум эконом",
            "businessClass": "Бизнес класс",
            "firstClass": "Первый класс",
            "dropdownTitle": "Экономь деньги, сохраняй комфорт",
            "mixedClassSearch": "Поиск с разными классами",
            "mixedClassSearch": "Поиск с комбинированными классами",
    "cityOrAirportFrom": "Город, аэропорт",
    "cityOrAirportTo": "Город, аэропорт",
    "whereTo": "Куда?",
    "departureDate": "Отправление",
    "returnDate": "Возвращение",
    "searchTicket": "Искать билеты",
    "discoverAdventures": "Откройте приключения",
    "helpCreateAdventures": "Помощь в создании разнообразных приключений в вашей жизни и упрощение процесса поиска и принятия решений – наша супер миссия.",
    "travelBlogDescription": "Если путешествия — ваша стихия, вам часто приходится посещать разные страны или искать особенные моменты и места, которые вы хотите отметить на своей персональной карте, это останется незабываемыми кадрами и воспоминаниями в вашей жизни. Ознакомьтесь с нашим блогом – откройте и отметьте новые локации на вашей туристической карте, познакомьтесь с культурой народов мира и выберите самые интересные для вас.",
    "budgetOptimization": "Важна оптимизация бюджета? Ознакомьтесь с предложениями, подобранными специально для вас – возможно, у нас есть специальные цены для вашего желаемого местоположения?",
    "scheduleAndBook": "Ознакомьтесь с расписанием, выберите и легко забронируйте авиабилет, отель, онлайн в одном месте за кратчайшее время.",
    "shareExperience": "Поделитесь счастьем и впечатлениями от путешествий в социальных сетях Facebook, Instagram, Linkedin.",
    "flyGeDiscovery": "Впереди много открытий Fly.ge",
    "aviabiltebi2": "Авиабилеты",
    "company": "Компания",
    "blog": "Блог",
    "aboutUs": "О нас",
    "information": "Информация",
    "privacyPolicy": "Политика конфиденциальности",
    "termsAndConditions": "Условия и положения",
    "contact": "Контакты",
    "writeUs": "Напишите нам",
    "emailSubscription": "Введите ваш email и получите эксклюзивные предложения",
    "subscribe": "Подписаться",
    "successMessage": "Вы успешно подписались ✔",
    "footerRights": "Все права защищены fly.ge",
    "showCoolImage": "Показать крутое изображение"
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
      { flag: "../images/Flags/Language-ge-logo.svg", text: "ქარ", lang: "ge" },
      { flag: "../images/Flags/us.svg", text: "eng", lang: "en" },
      { flag: "../images/Flags/ru.svg", text: "Pyc", lang: "ru" },
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
      document.querySelector(".nav-bar-link li").textContent = translations[lang].aviabiltebi;
      document.querySelector(".nav-bar-link-main li").textContent = translations[lang].aviabiltebi;
      document.querySelector(".nav-bar-link:nth-child(2) li").textContent = translations[lang].blog;
      document.querySelector(".nav-bar-link:nth-child(3) li").textContent = translations[lang].aboutUs;
      document.querySelector(".nav-bar-log-in-button").textContent = translations[lang].login;
      languageButton.querySelector("p").textContent = translations[lang].language;
      document.querySelector(".home-page-ticket-section-title").textContent = translations[lang].homePageTitle;
document.querySelector(".ticket-searcher-title-container-title").textContent = translations[lang].ticketSearcherTitle;
document.querySelector(".ticket-dropdowns-container-1-box-text").textContent = translations[lang].roundTrip;
document.querySelectorAll(".dropdown-content-text")[0].textContent = translations[lang].roundTrip;
document.querySelectorAll(".dropdown-content-text")[1].textContent = translations[lang].oneWay;
document.querySelectorAll(".dropdown-content-text")[2].textContent = translations[lang].multiCity;
document.querySelectorAll(".ticket-dropdowns-container-1-box-text")[1].textContent = translations[lang].passenger;
document.querySelectorAll(".dropdown-people-section-1-container-title-side-description-container-text-1")[0].textContent = translations[lang].adult;
document.querySelectorAll(".dropdown-people-section-1-container-title-side-description-container-text-2")[0].textContent = translations[lang].adultAge;
document.querySelectorAll(".dropdown-people-section-1-container-title-side-description-container-text-1")[1].textContent = translations[lang].child;
document.querySelectorAll(".dropdown-people-section-1-container-title-side-description-container-text-2")[1].textContent = translations[lang].childAge;
document.querySelectorAll(".dropdown-people-section-1-container-title-side-description-container-text-1")[2].textContent = translations[lang].infant;
document.querySelectorAll(".dropdown-people-section-1-container-title-side-description-container-text-2")[2].textContent = translations[lang].infantAge;
document.getElementById("delete-button-1").textContent = translations[lang].delete;
document.getElementById("confirm-button-1").textContent = translations[lang].confirm;
document.querySelectorAll(".ticket-dropdowns-container-1-box-text")[2].textContent = translations[lang].economyClass;
document.getElementById("label-checkbox-1").textContent = translations[lang].economyClass;
document.getElementById("label-checkbox-2").textContent = translations[lang].premiumEconomyClass;
document.getElementById("label-checkbox-3").textContent = translations[lang].businessClass;
document.getElementById("label-checkbox-4").textContent = translations[lang].firstClass;
document.querySelector(".dropdown3-content-title").textContent = translations[lang].dropdownTitle;
document.querySelector(".some").textContent = translations[lang].mixedClassSearch;
document.querySelector(".some1").textContent = translations[lang].mixedClassSearch;
document.querySelector(".ticket-city-and-date-first-input-title").textContent = translations[lang].cityOrAirportFrom;
document.querySelector(".ticket-city-and-date-second-input-title").textContent = translations[lang].cityOrAirportTo;
document.querySelector("#ticket-city-to-input").setAttribute("placeholder", translations[lang].whereTo);
document.querySelector(".datetime-first-title").textContent = translations[lang].departureDate;
document.querySelector(".datetime-second-title").textContent = translations[lang].returnDate;
document.querySelector(".search-button-text").textContent = translations[lang].searchTicket;
// document.querySelector(".home-page-description-section-right-side-title").textContent = translations[lang].adventureTitle;
// document.querySelector(".description-first").textContent = translations[lang].missionDescription;
// document.querySelector(".description-second").textContent = translations[lang].travelBlogDescription;
// document.querySelector(".description-third").textContent = translations[lang].budgetOptimization;
// document.querySelector(".description-fourth").textContent = translations[lang].scheduleAndBook;
// document.querySelector(".description-fifth").textContent = translations[lang].shareExperience;
// document.querySelector(".description-sixth").textContent = translations[lang].flyGeDiscovery;
document.querySelector(".home-page-description-section-right-side-title").textContent = translations[lang].discoverAdventures;
document.querySelector(".description-first").textContent = translations[lang].helpCreateAdventures;
document.querySelector(".description-second").textContent = translations[lang].travelBlogDescription;
document.querySelector(".description-third").textContent = translations[lang].budgetOptimization;
document.querySelector(".description-fourth").textContent = translations[lang].scheduleAndBook;
document.querySelector(".description-fifth").textContent = translations[lang].shareExperience;
document.querySelector(".description-sixth").textContent = translations[lang].flyGeDiscovery;
document.querySelector(".footer-tickets-section-title").textContent = translations[lang].aviabiltebi;
document.querySelector(".footer-company-section-title").textContent = translations[lang].company;
document.querySelector(".footer-company-section-first-link").textContent = translations[lang].blog;
document.querySelector(".footer-company-section-second-link").textContent = translations[lang].aboutUs;
document.querySelector(".footer-information-section-title").textContent = translations[lang].information;
document.querySelector(".footer-information-section-first-link").textContent = translations[lang].privacyPolicy;
document.querySelector(".footer-information-section-second-link").textContent = translations[lang].termsAndConditions;
document.querySelector(".footer-contacts-section-title").textContent = translations[lang].contact;
document.querySelector(".footer-message-box-title").textContent = translations[lang].writeUs;
document.querySelector(".footer-email-section-title").textContent = translations[lang].emailSubscription;
document.querySelector(".footer-email-button").textContent = translations[lang].subscribe;
document.getElementById("success-cube").textContent = translations[lang].successMessage;
document.querySelector(".footer-bottom-section-title").textContent = translations[lang].footerRights;
document.querySelector("#showImageButton").textContent = translations[lang].showCoolImage;
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
  let checkboxCube = document.getElementById('dropdown3-content-checkbox-cube');
  let checkboxCubeChange = document.getElementById('dropdown3-content-checkbox-cube-change');
  let isCheckboxClick =
    (checkboxCube && checkboxCube.contains(event.target)) ||
    (checkboxCubeChange && checkboxCubeChange.contains(event.target));

  if (!isDropdownClick1 && dropdownContent1.classList.contains('dropdown-visible')) {
    closeDropdown(dropdownContent1, dropdownBox1);
  }
  if (!isDropdownClick2 && dropdownContent2.classList.contains('dropdown-visible')) {
    closeDropdown(dropdownContent2, dropdownBox2);
  }
  if (!isDropdownClick3 && !isCheckboxClick && dropdownContent3.classList.contains('dropdown-visible')) {
    closeDropdown(dropdownContent3, dropdownBox3);
  }
  if ((event.target.id === 'delete-button-1' || event.target.id === 'confirm-button-1') && dropdownContent2.classList.contains('dropdown-visible')) {
    alert(`${event.target.id} button clicked!`);
    closeDropdown(dropdownContent2, dropdownBox2);
  }
});

['dropdown3-content-checkbox-cube', 'dropdown3-content-checkbox-cube-change'].forEach(id => {
  document.getElementById(id)?.addEventListener('click', event => event.stopPropagation());
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


/// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2
/// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2
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
    if (counterValue < 8) {  
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
/// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2
/// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2 /// DROPDOWN 2
/// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3
/// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3
/// DROPDOWN 3 CHECKBOXES /// DROPDOWN 3 CHECKBOXES /// DROPDOWN 3 CHECKBOXES /// DROPDOWN 3 CHECKBOXES /// DROPDOWN 3 CHECKBOXES
document.querySelectorAll('.checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    updateDropdownText(this);
    if (this.checked) {
      document.querySelectorAll('.checkbox').forEach(otherCheckbox => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});
function updateDropdownText(checkbox) {
  let checkboxId = checkbox.id;
  let labelId = 'label-' + checkboxId;
  let selectedLabel = document.getElementById(labelId); 
  let mainDropdownText = document.getElementById('ticket-dropdowns-container-1-box-text');
  if (selectedLabel && mainDropdownText) {
    mainDropdownText.textContent = selectedLabel.textContent; 
  }
}
/// DROPDOWN 3 CHECKBOXES /// DROPDOWN 3 CHECKBOXES /// DROPDOWN 3 CHECKBOXES /// DROPDOWN 3 CHECKBOXES /// DROPDOWN 3 CHECKBOXES


/// DROPDOWN 3 BOTTOM CHECKBOX /// DROPDOWN 3 BOTTOM CHECKBOX /// DROPDOWN 3 BOTTOM CHECKBOX /// DROPDOWN 3 BOTTOM CHECKBOX
document.addEventListener('DOMContentLoaded', function () {
  let checkbox = document.querySelector('.dropdown3-content-checkbox');
  let checkboxCube = document.querySelector('.dropdown3-content-checkbox-cube');
  let checkboxChange = document.querySelector('#dropdown3-content-checkbox-cube-change');
  function updateCheckboxState(checkboxElement, cubeElement) {
    if (checkboxElement.checked) {
      cubeElement.classList.add('checked');
    } else {
      cubeElement.classList.remove('checked');
    }
  }
  checkbox.addEventListener('change', function () {
    updateCheckboxState(checkbox, checkboxCube);
  });
  if (checkboxChange) {
    checkboxChange.addEventListener('click', function () {
      checkbox.checked = !checkbox.checked; 
      updateCheckboxState(checkbox, checkboxCube);
    });
  }
});

/// DROPDOWN 3 BOTTOM CHECKBOX /// DROPDOWN 3 BOTTOM CHECKBOX /// DROPDOWN 3 BOTTOM CHECKBOX /// DROPDOWN 3 BOTTOM CHECKBOX
/// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3
/// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3 /// DROPDOWN 3

/// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS
/// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS
let firstInput = document.querySelector('.ticket-city-from-input');
let secondInput = document.querySelector('.ticket-city-to-input');
let thirdInput = document.querySelector('.datetime-first-input');
let fourthInput = document.querySelector('.datetime-second-input');
let firstInputField = document.querySelector('.ticket-city-from-input');
let secondInputField = document.querySelector('.ticket-city-to-input');
let firstDropdown = document.querySelector('.ticket-city-from-dropdown');
let secondDropdown = document.querySelector('.ticket-city-to-dropdown');
let firstInputTitle = document.querySelector('.ticket-city-and-date-first-input-title');
let secondInputTitle = document.querySelector('.ticket-city-and-date-second-input-title');
let firstOptions = document.querySelectorAll('.ticket-city-from-dropdown h4');
let secondOptions = document.querySelectorAll('.ticket-city-to-dropdown h4');
let now = new Date();
let currentDate = now.toISOString().slice(0, 10);
thirdInput.value = currentDate;

let later = new Date(now);
later.setDate(now.getDate() + 7);
let futureDate = later.toISOString().slice(0, 10);
fourthInput.value = futureDate;
[firstInput, secondInput, thirdInput, fourthInput].forEach(input => {
  input.addEventListener('click', function() {
    resetBorders(); 
    setBlueBorder(input); 
    if (input.type === 'date') {
      if (input.showPicker) {
        input.showPicker();
      } else {
        input.focus();
      }
    }
  });
});
function resetBorders() {
  firstInput.style.borderBottom = '';
  secondInput.style.borderBottom = '';
  thirdInput.style.borderBottom = '';
  fourthInput.style.borderBottom = '';
}
function setBlueBorder(input) {
  input.style.borderBottom = '2px solid blue';
}
firstInputField.addEventListener('click', function() {
    toggleDropdown(firstDropdown, secondDropdown);
    firstInputTitle.style.color = ' rgb(0, 98, 255)';
    secondInputTitle.style.color = '';
});
secondInputField.addEventListener('click', function() {
    toggleDropdown(secondDropdown, firstDropdown);
    secondInputTitle.style.color = ' rgb(0, 98, 255)';
    firstInputTitle.style.color = '';
});
document.addEventListener('click', function(event) {
    if (!firstInputField.contains(event.target) && !firstDropdown.contains(event.target)) {
        firstDropdown.style.display = 'none';
        firstInputTitle.style.color = ''; 
        firstInputField.style.borderBottom = "";
    }
    if (!secondInputField.contains(event.target) && !secondDropdown.contains(event.target)) {
        secondDropdown.style.display = 'none';
        secondInputTitle.style.color = '';
        secondInputField.style.borderBottom = '';  
    }
});
firstOptions.forEach(option => {
    option.addEventListener('click', function() {
        firstInputField.value = this.innerText;
        firstDropdown.style.display = 'none';
    });
});
secondOptions.forEach(option => {
    option.addEventListener('click', function() {
        secondInputField.value = this.innerText;
        secondDropdown.style.display = 'none';
    });
});
function toggleCityDropdown(targetDropdown, otherDropdown) {
  if (targetDropdown.style.display === 'none' || targetDropdown.style.display === '') {
      targetDropdown.style.display = 'block';
      otherDropdown.style.display = 'none';
  } else {
      targetDropdown.style.display = 'none';
  }
}
function closeAllCityDropdowns(fromDropdown, toDropdown) {
  fromDropdown.style.display = 'none';
  toDropdown.style.display = 'none';
}
let fromInput = document.getElementById("ticket-city-from-input");
let toInput = document.getElementById("ticket-city-to-input");
let fromDropdown = document.querySelector(".ticket-city-from-dropdown");
let toDropdown = document.querySelector(".ticket-city-to-dropdown");
fromInput.addEventListener("click", function () {
  toggleCityDropdown(fromDropdown, toDropdown);
  firstInputTitle.style.color = ' rgb(0, 98, 255)';
});

toInput.addEventListener("click", function () {
  toggleCityDropdown(toDropdown, fromDropdown);
  secondInputTitle.style.color = ' rgb(0, 98, 255)';
});
/// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS
/// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS /// TICKET SEARCH INPUTS

/// FETCH DATA /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA 
/// FETCH DATA /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA 
/// FETCH DATA /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA 
/// FETCH DATA /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA 
fetch('AirpotsList.json')
  .then(response => response.json())
  .then(data => {
    populateDropdowns(data);
  })
  .catch(error => console.error('Error fetching airports data:', error));

function populateDropdowns(data) {
  let fromDropdown = document.querySelector('.ticket-city-from-dropdown');
  let toDropdown = document.querySelector('.ticket-city-to-dropdown');
  let fromInputField = document.querySelector('#ticket-city-from-input');
  let toInputField = document.querySelector('#ticket-city-to-input');
  fromDropdown.innerHTML = '';
  toDropdown.innerHTML = '';
  data.forEach(airport => {
    let fromDropdownOption = createDropdownOption(airport, 'from');
    let toDropdownOption = createDropdownOption(airport, 'to');
    fromDropdown.appendChild(fromDropdownOption);
    toDropdown.appendChild(toDropdownOption);
    fromDropdownOption.addEventListener('click', () => {
      fromInputField.value = `${airport.ICAO_Code} - ${airport.Airport_Name} (${airport.City})`;
      fromDropdown.style.display = 'none';
    });
    toDropdownOption.addEventListener('click', () => {
      toInputField.value = `${airport.ICAO_Code} - ${airport.Airport_Name} (${airport.City})`;
      toDropdown.style.display = 'none';
    });
  });
  fromInputField.addEventListener('input', () => {
    filterDropdownOptions(fromInputField, fromDropdown, data, 'from');
  });
  toInputField.addEventListener('input', () => {
    filterDropdownOptions(toInputField, toDropdown, data, 'to');
  });
}
function filterDropdownOptions(inputField, dropdown, data, type) {
  let searchTerm = inputField.value.toLowerCase();
  let filteredData = data.filter(airport => {
    let airportName = `${airport.City} (${airport.ICAO_Code}), ${airport.Airport_Name}`;
    return airportName.toLowerCase().includes(searchTerm);
  });
  dropdown.innerHTML = '';
  filteredData.forEach(airport => {
    let dropdownOption = createDropdownOption(airport, type);
    dropdown.appendChild(dropdownOption);
    dropdownOption.addEventListener('click', () => {
      if (type === 'from') {
        inputField.value = `${airport.ICAO_Code} - ${airport.Airport_Name} (${airport.City})`;
      } else {
        inputField.value = `${airport.ICAO_Code} - ${airport.Airport_Name} (${airport.City})`;
      }
      dropdown.style.display = 'none'; 
    });
  });
  dropdown.style.display = filteredData.length > 0 ? 'block' : 'none';
}
function createDropdownOption(airport, type) {
  let dropdownOption = document.createElement('div');
  dropdownOption.classList.add('ticket-city-from-dropdown-option-cube', 'ticket-city-to-dropdown-option-cube');
  let icon = document.createElement('div');
  icon.classList.add('city-icon');
  let iconHtml;
  if (type === 'from') {
    iconHtml = Math.random() < 0.5 ? '<i class="bi bi-airplane"></i>' : '<i class="bi bi-buildings"></i>';
  } else {
    iconHtml = Math.random() < 0.5 ? '<i class="bi bi-airplane-fill"></i>' : '<i class="bi bi-buildings-fill"></i>';
  }
  icon.innerHTML = iconHtml;
  let name = document.createElement('h4');
  name.textContent = `${airport.City} (${airport.ICAO_Code}), ${airport.Airport_Name}`;
  dropdownOption.appendChild(icon);
  dropdownOption.appendChild(name);
  return dropdownOption;
}
document.getElementById('searchButton').addEventListener('click', function() {
  let fromCityInput = document.getElementById('ticket-city-from-input').value.trim();
  let toCityInput = document.getElementById('ticket-city-to-input').value.trim();
  let fromCityCode = fromCityInput.split(' - ')[0].trim();
  let toCityCode = toCityInput.split(' - ')[0].trim();

  fetch('TicketResult.json')
      .then(response => response.json())
      .then(data => {
          let filteredResults = data.filter(ticket => ticket.From === fromCityCode && ticket.To === toCityCode);
          let resultContainer = document.querySelector('.result-container');
          resultContainer.style.display = 'block';
          resultContainer.innerHTML = '';
          if (filteredResults.length > 0) {
              let lowestPriceTicket = filteredResults.reduce((minTicket, currentTicket) => {
                  return parseFloat(currentTicket.EconomyPrice) < parseFloat(minTicket.EconomyPrice) ? currentTicket : minTicket;
              });
              fromCityInput.value = '';
              toCityInput.value = '';
              filteredResults.forEach(ticket => {
                  let resultHTML = `
                      <div class="ticket-result ${ticket === lowestPriceTicket ? 'lowest-price' : ''}">
                          <h3 class="ticket-result-title">${ticket.Airline} (${ticket.RouteNo})</h3>
                          <p class="ticket-from">From: ${ticket.fromAirportName} (${ticket.From})</p>
                          <p class="ticket-to">To: ${ticket.toAirportName} (${ticket.To})</p>
                          <p class="ticket-price">$${ticket.EconomyPrice}</p>
                          <p>Transfer: ${ticket.TransferCity || 'No transfer'}</p>
                          <p>Departure: ${ticket.Departure}</p>
                          <p>Arrival: ${ticket.Arrival}</p>
                      </div>
                  `;
                  resultContainer.innerHTML += resultHTML;
              });
              let lowestPriceElements = document.querySelectorAll('.ticket-result.lowest-price');
              lowestPriceElements.forEach(ticket => {
                  ticket.style.borderColor = ' rgb(3, 161, 3)';
                  ticket.querySelector('.ticket-price').style.color = ' rgb(0, 203, 0)';
              });
          } else {
              resultContainer.innerHTML = '<p  class="No-tickets">No tickets found for your search.</p>';
          }
      })
});
/// FETCH DATA /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA 
/// FETCH DATA /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA 
/// FETCH DATA /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA 
/// FETCH DATA /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA  /// FETCH DATA 


/// FOOTER INPUT AND BUTTON  /// FOOTER INPUT AND BUTTON  /// FOOTER INPUT AND BUTTON  /// FOOTER INPUT AND BUTTON
document.addEventListener("DOMContentLoaded", function () {
  let emailInput = document.querySelector(".footer-email-input");
  let subscribeButton = document.querySelector(".footer-email-button");
  let successCube = document.getElementById("success-cube");
  if (emailInput && subscribeButton && successCube) {
    function isValidGmail(email) {
      let trimmedEmail = email.trim();
      return (
        trimmedEmail.includes("@") &&
        trimmedEmail.endsWith("@gmail.com")
      );
    }
    subscribeButton.addEventListener("click", function (event) {
      event.preventDefault();
      let emailValue = emailInput.value;
      if (isValidGmail(emailValue)) {
        emailInput.classList.remove("invalid");
        successCube.classList.add("show");
        successCube.classList.remove("hide");
        setTimeout(() => {
          successCube.classList.add("hide");
          successCube.classList.remove("show");
        }, 3000);
      } else {
        emailInput.classList.add("invalid");
        emailInput.style.borderBottomColor = "red";
        successCube.classList.add("hide");
        successCube.classList.remove("show");
      }
      emailInput.value = "";
    });
   emailInput.addEventListener("focus", () => {
      emailInput.style.borderBottomColor = "blue";
    });
    emailInput.addEventListener("blur", () => {
      emailInput.style.borderBottomColor = "";
    });
  } 
});
/// FOOTER INPUT AND BUTTON  /// FOOTER INPUT AND BUTTON  /// FOOTER INPUT AND BUTTON  /// FOOTER INPUT AND BUTTON
/// HIDDEN IMAGE /// HIDDEN IMAGE /// HIDDEN IMAGE /// HIDDEN IMAGE /// HIDDEN IMAGE /// HIDDEN IMAGE
let githubImage = document.querySelector('.github-image');
let showImageButton = document.querySelector('#showImageButton');
let flyLogo = document.querySelector('.fly-logo');
flyLogo.addEventListener('click', () => {
  showImageButton.style.display = 'block'; 
});

showImageButton.addEventListener('click', () => {
  githubImage.style.display = 'block';
  showImageButton.style.display = 'none';
});
/// HIDDEN IMAGE /// HIDDEN IMAGE /// HIDDEN IMAGE /// HIDDEN IMAGE /// HIDDEN IMAGE /// HIDDEN IMAGE