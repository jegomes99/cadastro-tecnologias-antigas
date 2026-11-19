# 📼 Cadastro de Tecnologias Antigas

Página web para cadastrar e listar **tecnologias antigas** (como disquete, fita K7 e máquina de escrever). O visual imita um **monitor de computador dos anos 80**, com texto verde brilhando.

Atividade da disciplina de **Desenvolvimento Web**.

---

## 🖥️ Como funciona

1. Digite o **nome** da tecnologia (ex: `Disquete`).
2. Digite o **ano** em que ela surgiu (ex: `1971`).
3. Clique em **CADASTRAR**.
4. A tecnologia aparece na **tabela** com a sua posição na lista.

A página já começa com 3 tecnologias cadastradas como exemplo.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Para que foi usada |
|---|---|
| **HTML5** | Estrutura da página: título, formulário e tabela |
| **CSS3** | Visual retrô: cores, fonte pixelada, brilho e efeitos |
| **JavaScript** | Guardar os dados numa lista e mostrar na tabela |

---

## 📁 Estrutura dos arquivos

```
cadastro-tecnologias-antigas/
├── index.html   → estrutura da página
├── styles.css   → estilo e tema visual
├── main.js      → lógica do cadastro
└── README.md    → este arquivo
```

---

## ⚙️ O que o JavaScript faz

- **`tecnologias`**: array (lista) de objetos com `nome` e `ano`.
- **`exibir()`**: limpa a tabela e percorre a lista com um `for`, criando uma linha (`<tr>`) para cada tecnologia.
- **`addEventListener("submit")`**: quando o formulário é enviado:
  - `preventDefault()` impede a página de recarregar;
  - cria um objeto com o que foi digitado;
  - `push()` adiciona esse objeto no final da lista;
  - chama `exibir()` de novo para atualizar a tabela.

---

## 🎨 Detalhes do tema visual

- Fonte pixelada **VT323** (Google Fonts).
- Texto verde com brilho (`text-shadow`), como nos monitores de fósforo verde.
- Linhas horizontais por cima da tela, imitando um monitor de tubo (CRT).
- Cursor `_` piscando depois do título (`@keyframes`).
- Botão com sombra "quadrada" que parece afundar ao ser clicado.
- Cor âmbar ao passar o mouse no botão e nas linhas da tabela.
- Variáveis CSS (`:root`) para trocar as cores num lugar só.

---

## ▶️ Como executar

1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/cadastro-tecnologias-antigas.git
   ```
2. Abra o arquivo `index.html` no navegador.

Ou use a extensão **Live Server** do VS Code: clique com o botão direito no `index.html` e escolha **"Open with Live Server"**.

---

## ⚠️ Observação

Os dados ficam só na memória do navegador. Quando a página é recarregada, a lista volta para os 3 exemplos iniciais.