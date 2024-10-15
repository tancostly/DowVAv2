function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // miesiące są liczone od 0
  const year = now.getFullYear();

  const formattedTime = `Czas: ${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;
  document.getElementById("clock").textContent = formattedTime;

  // Update last-update-time with the current date
  const formattedDate = `${day}.${month}.${year}`;
  document.getElementById("last-update").textContent = formattedDate;
}

// Aktualizuj zegar co sekundę
setInterval(updateClock, 1000);

// Inicjalizuj zegar po załadowaniu strony
updateClock();

const data = {
  name: "Antoni",
  surname: "Smaga",
  nationality: "Polskie",
  birth: "14.01.2006",
  pesel: "06211406832",
  family_name: "Smaga",
  gender: "Mężczyzna",
  family_name_father: "Smaga",
  family_name_mother: "Skórska",
  birth_place: "Lublin",
  address: "Łopiennik 92 <br>24-224, Łopiennik",
  date_of_registration: "02.07.2013",
};

function setData(data) {
  for (const key in data) {
    data[key] = data[key].toUpperCase();
  }

  const elements = {
    name: document.getElementById("name"),
    surname: document.getElementById("surname"),
    nationality: document.getElementById("nationality"),
    birth: document.getElementById("birth"),
    pesel: document.getElementById("pesel"),
    family_name: document.getElementById("family-name-text"),
    gender: document.getElementById("gender-text"),
    family_name_father: document.getElementById("family-name-father-text"),
    family_name_mother: document.getElementById("family-name-mother-text"),
    birth_place: document.getElementById("birth-place-text"),
    address: document.getElementById("address-text"),
    date_of_registration: document.getElementById("date-of-registration-text"),
  };

  for (const key in elements) {
    if (elements[key]) {
      if (key === "address") {
        elements[key].innerHTML = data[key];
      } else {
        elements[key].textContent = data[key];
      }
    } else {
      console.warn(`Element with ID ${key}-text not found`);
    }
  }
}

setData(data);

document
  .querySelector(".extra-personal-data")
  .addEventListener("click", function () {
    this.classList.toggle("expanded");
    const content = document.getElementById("extra-personal-content");
    const header = document.getElementById("extra-personal-data");

    if (content.style.display === "flex") {
      content.style.display = "none";
      header.style.borderRadius = "10px";
      header.style.height = "9vh";
      header.style.marginBottom = "0";
      console.log("Content hidden, border radius set to 10px");
    } else {
      content.style.display = "flex";
      header.style.borderRadius = "10px 10px 0 0";
      header.style.height = "8vh";
      header.style.marginBottom = "0";
      console.log("Content shown, border bottom radius set to none");
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  function requestFullScreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      // IE/Edge
      element.msRequestFullscreen();
    }
  }

  // Sprawdź, czy urządzenie jest mobilne
  requestFullScreen(document.documentElement);
});
