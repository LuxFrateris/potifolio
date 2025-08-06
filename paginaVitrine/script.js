function adicionarAoCarrinho(btn) {
  const produto = btn.closest('.produto');
  const id = produto.dataset.id;
  const nome = produto.dataset.nome;
  const preco = produto.dataset.preco;

  let carrinho = JSON.parse(getCookie("carrinho") || "[]");

  let item = carrinho.find(p => p.id === id);
  if (item) {
    item.qtd += 1;
  } else {
    carrinho.push({ id, nome, preco, qtd: 1 });
  }

  setCookie("carrinho", JSON.stringify(carrinho), 7);
  alert("Produto adicionado!");
}
