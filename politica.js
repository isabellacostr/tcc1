//Botão modo claro e modo escuro
document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');

  // Check if the user has previously selected a theme
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
      themeSwitch.checked = true;
    }
  }

  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
    }
  });
});

// Função para verificar se o usuário já fez uma escolha sobre os cookies
function checkCookieConsent() {
  const consent = localStorage.getItem('cookieConsent');
  if (consent === 'accepted') {
    document.getElementById('cookieBanner').style.display = 'none';
  } else if (consent === 'rejected') {
    document.getElementById('cookieBanner').style.display = 'none';
  } else {
    document.getElementById('cookieBanner').style.display = 'block';
  }
}

// Função para aceitar cookies
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  document.getElementById('cookieBanner').style.display = 'none';
  showPopup('Você aceitou o uso de cookies. Obrigado!');
}

// Função para rejeitar cookies
function rejectCookies() {
  localStorage.setItem('cookieConsent', 'rejected');
  document.getElementById('cookieBanner').style.display = 'none';
  showPopup('Você rejeitou o uso de cookies. Algumas funcionalidades podem não funcionar corretamente.');
}

// Função para exibir a pop-up de confirmação
function showPopup(message) {
  document.getElementById('popupMessage').textContent = message;
  document.getElementById('responsePopup').style.display = 'block';
}

// Fechar a pop-up de confirmação
document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('responsePopup').style.display = 'none';
});

// Atribuindo os eventos de clique aos botões de aceitar e rejeitar cookies
document.getElementById('acceptBtn').addEventListener('click', acceptCookies);
document.getElementById('rejectBtn').addEventListener('click', rejectCookies);

// Executa a verificação de consentimento assim que a página é carregada
window.onload = function() {
  checkCookieConsent();
};
