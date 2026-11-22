# Escola de Dança - site em React

Site de uma escola de dança feito com React + Vite.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Personalizar

Todos os textos, modalidades, professores, horários e planos ficam em `src/data.js`.

## Gerar o site para hospedar

```bash
npm run build
```

Isso cria a pasta `dist/` com o site pronto.

## Hospedar (opções gratuitas)

**Netlify Drop (mais fácil, sem cadastro de código):**
1. Rode `npm run build`.
2. Acesse https://app.netlify.com/drop e arraste a pasta `dist/` para a página.
3. Você recebe um link público.

**GitHub Pages:**
1. Crie um repositório no GitHub e envie o projeto.
2. Rode `npm run build`, depois publique a pasta `dist/` (por exemplo, com a branch `gh-pages`).
3. Em Settings > Pages, selecione a branch `gh-pages`.

O `vite.config.js` já usa `base: './'`, então o site funciona em qualquer subpasta.
