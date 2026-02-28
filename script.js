const valores = {
  a: 1, b: 2, c: 3, d: 4, e: 5,
  f: 6, g: 7, h: 8, i: 9,
  j: 10, k: 20, l: 30, m: 40,
  n: 50, o: 60, p: 70, q: 80,
  r: 90, s: 100, t: 200,
  u: 300, v: 400, w: 500,
  x: 600, y: 700, z: 800
};

function calcularGuematria() {
  const nome = document.getElementById("nomeInput").value.toLowerCase();
  let soma = 0;

  for (let letra of nome) {
    if (valores[letra]) {
      soma += valores[letra];
    }
  }

  document.getElementById("resultado").innerText =
    "Valor da Guematria: " + soma;
}
