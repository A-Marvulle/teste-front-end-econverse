# Teste Alfredo

## Stack

- React
- TypeScript
- Splide.js
- Scss

## Pré Requisitos

- Git
- Node
- pnpm

## Sobre o Projeto

```bash
.
├── index.html <- página inicial
├── public
│   ├── favicon.png
│   ├── hero.png <- imagem para open graph
│   └── icons.svg
├── src
│   ├── assets <- imagens do projeto
│   │   ├── icons
│   │   │   ├── box.svg
│   │   │   ├── cart.svg
│   │   │   ├── category
│   │   │   │   ├── bebidas.svg
│   │   │   │   ├── esportes.svg
│   │   │   │   ├── ferramentas.svg
│   │   │   │   ├── moda.svg
│   │   │   │   ├── saude.svg
│   │   │   │   ├── supermercado.svg
│   │   │   │   └── tecnologia.svg
│   │   │   ├── credit-card.svg
│   │   │   ├── crown.svg
│   │   │   ├── facebook.svg
│   │   │   ├── heart.svg
│   │   │   ├── instagram.svg
│   │   │   ├── linkedin.svg
│   │   │   ├── magnifying-glass.svg
│   │   │   ├── shield.svg
│   │   │   ├── truck.svg
│   │   │   └── user.svg
│   │   └── images
│   │       ├── bg-partner.png
│   │       ├── fallback-cover.png
│   │       ├── hero.png
│   │       └── logo.svg
│   ├── components <- componentes do projeto
│   │   ├── Brands
│   │   │   ├── BrandsCard.tsx
│   │   │   ├── BrandsList.tsx
│   │   │   ├── Brands.scss
│   │   │   └── Brands.tsx
│   │   ├── Category
│   │   │   ├── CategoryCard.tsx
│   │   │   ├── CategoryList.tsx
│   │   │   ├── Category.scss
│   │   │   └── Category.tsx
│   │   ├── Footer
│   │   │   ├── Footer.scss
│   │   │   └── Footer.tsx
│   │   ├── Header
│   │   │   ├── HeaderMiddle.tsx
│   │   │   ├── Header.scss
│   │   │   └── Header.tsx
│   │   ├── Hero
│   │   │   ├── Hero.scss
│   │   │   └── Hero.tsx
│   │   ├── Menu <- apenas renderiza a lista com o nav
│   │   │   ├── Menu.scss
│   │   │   └── Menu.tsx
│   │   ├── News
│   │   │   ├── NewsForm.tsx
│   │   │   ├── News.scss
│   │   │   └── News.tsx
│   │   ├── Partners
│   │   │   ├── PartnersCard.tsx
│   │   │   ├── PartnersList.tsx
│   │   │   ├── Partners.scss
│   │   │   └── Partners.tsx
│   │   └── Products
│   │       ├── ProdCard.tsx
│   │       ├── ProdList.tsx
│   │       ├── ProdModal.scss
│   │       ├── ProdModal.tsx
│   │       ├── ProdRelated.tsx
│   │       └── Product.scss
│   ├── main.tsx <- junção dos componentes
│   ├── services <- chamada para a API
│   │   └── products.ts
│   ├── styles <- estilizações gerais
│   │   ├── index.scss
│   │   ├── _mixins.scss
│   │   └── _var.scss
│   └── types <- tipagem de dados
│       ├── category.ts
│       ├── products.ts
│       └── react-splide.d.ts
```

## Objetivos Esperados

- Desenvolver a pagina em React e TypeScript conforme o layout. Para conseguir pegar os elementos do Figma, basta copiar o layout para sua conta que terá acesso de edição.
- Montar a vitrine de produtos consumindo as informações dos produtos em json atraves desse Link.
- Desenvolver a interação ao clicar em um produto conforme layout. A interação consiste em abrir um modal com as principais informações do produto presente no arquivo JSON conforme o produto que clicar.
- Utilizar Pré-processador Sass, Less ou Stylus.
- Respeitar o Layout pixel a pixel, tamanho das fontes, cores e botões.
- Não Utilizar bibliotecas UI como Bootstrap, Foundation, ou afins.

## Rodar Localmente

### clone o projeto

```bash
    git clone https://github.com/A-Marvulle/teste-front-end-econverse.git
```

### abra o projeto

```bash
    cd teste-front-end-econverse
    git checkout release
```

### instale dependencias

```bash
    pnpm i
```

### rode o projeto

```bash
    pnpm run dev
```

O projeto por padrão abre na porta `:5173`.

## Deploy Vercel

link -- por vir
