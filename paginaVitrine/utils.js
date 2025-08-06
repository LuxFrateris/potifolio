function setCookie(nome, valor, dias) {
  let data = new Date();
  data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
  let expira = "expires=" + data.toUTCString();
  document.cookie = nome + "=" + valor + ";" + expira + ";path=/";
}

function getCookie(nome) {
  let nomeEq = nome + "=";
  let ca = document.cookie.split(';');
  for (let c of ca) {
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(nomeEq) == 0) return c.substring(nomeEq.length, c.length);
  }
  return "";
}
