window.onload = function() {
  const versiculos = [
    "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito... (Juan 3:16)",
    "El Señor es mi pastor; nada me faltará. (Salmo 23:1)",
    "Todo lo puedo en Cristo que me fortalece. (Filipenses 4:13)",
    "Mas el fruto del Espíritu es amor, gozo, paz... (Gálatas 5:22-23)"
  ];

  const versiculoElemento = document.getElementById('versiculo');
  const versiculoAleatorio = versiculos[Math.floor(Math.random() * versiculos.length)];
  versiculoElemento.textContent = versiculoAleatorio;
};
