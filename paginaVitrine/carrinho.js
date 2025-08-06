let carrinho = JSON.parse(getCookie("carrinho") || "[]");
let lista = document.getElementById("lista-carrinho");

if (carrinho.length === 0) {
  lista.innerHTML = "<li>Carrinho vazio</li>";
} else {
  carrinho.forEach(p => {
    let li = document.createElement("li");
    li.textContent = `${p.nome} - R$${p.preco} x ${p.qtd}`;
    lista.appendChild(li);
  });
}
