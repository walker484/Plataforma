// =========================================
// PORTIMÃO SERVICES
// app.js
// =========================================


// =========================================
// CONFIGURAÇÕES
// =========================================

let selectedService = null;
let userLocation = null;


// =========================================
// ESCOLHER SERVIÇO
// =========================================

function selectService(serviceName) {

  selectedService = serviceName;

  // Salva temporariamente o serviço escolhido
  localStorage.setItem("selectedService", serviceName);

  alert(
    "Service selected: " + serviceName
  );

  // ===== RESERVA SERÁ CONECTADA AQUI =====
  // window.location.href = "booking.html";
}


// =========================================
// COMEÇAR RESERVA
// =========================================

function startBooking() {

  const service = localStorage.getItem("selectedService");

  if (!service) {

    alert("Please choose a service first.");

    return;
  }

  // ===== BOOKING SERÁ CONECTADO AQUI =====
  // window.location.href = "booking.html";

  alert(
    "Booking for " + service
  );
}


// =========================================
// GPS / LOCALIZAÇÃO
// =========================================

function getLocation() {

  const result = document.getElementById(
    "location-result"
  );

  if (!navigator.geolocation) {

    result.textContent =
      "Location is not supported by this browser.";

    return;
  }

  result.textContent =
    "Getting your location...";


  navigator.geolocation.getCurrentPosition(

    function(position) {

      const latitude =
        position.coords.latitude;

      const longitude =
        position.coords.longitude;


      userLocation = {
        latitude: latitude,
        longitude: longitude
      };


      // Salva temporariamente
      localStorage.setItem(
        "userLocation",
        JSON.stringify(userLocation)
      );


      result.innerHTML =
        "📍 Location selected<br>" +
        "Latitude: " + latitude.toFixed(6) +
        "<br>" +
        "Longitude: " + longitude.toFixed(6);


      console.log(
        "Tourist location:",
        userLocation
      );

      // =====
      // GPS / MAPA / FIREBASE
      // SERÁ CONECTADO AQUI
      // =====

    },

    function(error) {

      result.textContent =
        "Unable to get your location. " +
        "Please enter your address manually.";

      console.log(
        "Location error:",
        error.message
      );
    }

  );
}


// =========================================
// PRESTADOR
// =========================================

function providerRegister() {

  // ===== CADASTRO DO PRESTADOR AQUI =====

  window.location.href =
    "provider.html";
}


// =========================================
// IDIOMA
// =========================================

const languageSelect =
  document.getElementById("language");


if (languageSelect) {

  languageSelect.addEventListener(
    "change",
    function() {

      const language =
        this.value;

      localStorage.setItem(
        "language",
        language
      );

      // =====
      // SISTEMA DE TRADUÇÃO
      // EN / DE / NL
      // SERÁ CONECTADO AQUI
      // =====

      console.log(
        "Selected language:",
        language
      );

    }
  );

}


// =========================================
// CARREGAR DADOS SALVOS
// =========================================

document.addEventListener(
  "DOMContentLoaded",
  function() {

    const savedLanguage =
      localStorage.getItem("language");

    if (
      savedLanguage &&
      languageSelect
    ) {

      languageSelect.value =
        savedLanguage;
    }


    const savedService =
      localStorage.getItem(
        "selectedService"
      );

    if (savedService) {

      selectedService =
        savedService;

      console.log(
        "Selected service:",
        savedService
      );
    }

  }
);


// =========================================
// FUTUROS MÓDULOS
// =========================================
//
// [1] Firebase
// [2] Cadastro de turistas
// [3] Cadastro de prestadores
// [4] Serviços
// [5] Agenda
// [6] GPS / mapa
// [7] Pagamento
// [8] Comissão
// [9] Controle de pagamentos
// [10] Notificações
// [11] Painel administrativo
//
// =========================================
