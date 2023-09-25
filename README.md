<!-- ===== HEADER ===== -->
<p align="right">
  <img
    src="https://img.shields.io/badge/lang-en-gray?style=flat-square&labelColor=202024"
    alt="lang-en"
  />
  <a href="./README.pt-br.md" title="Ler o README em português brasileiro">
    <img
      src="https://img.shields.io/badge/lang-pt--br-green?style=flat-square&labelColor=202024"
      alt="lang-pt-br"
    />
  </a>
</p>

<h1 align="center">
  <a
    href="https://guipmdev.github.io/ignite-design-system/"
    title="Go to the documentation"
  >
    Ignite Design System
  </a>
</h1>

<p align="center">
  <img
    src="https://img.shields.io/github/languages/count/guipmdev/ignite-design-system?color=%2304D361&labelColor=202024"
    alt="Repository language count"
  />
  <img
    src="https://img.shields.io/github/repo-size/guipmdev/ignite-design-system?labelColor=202024"
    alt="Repository size"
  />
  <img
    src="https://img.shields.io/github/commit-activity/m/guipmdev/ignite-design-system?color=black&labelColor=202024"
    alt="Commit activity"
  />
  <a
    href="https://github.com/guipmdev/ignite-design-system/commits/main"
    title="View repository commits"
  >
    <img
      src="https://img.shields.io/github/last-commit/guipmdev/ignite-design-system?labelColor=202024"
      alt="Last commit"
    />
  </a>
  <a href="./LICENSE" title="View project license">
    <img
      src="https://img.shields.io/badge/license-MIT-brightgreen?labelColor=202024"
      alt="Project license"
    />
  </a>
  <a href="https://www.rocketseat.com.br/" title="Go to the Rocketseat website">
    <img
      src="https://img.shields.io/badge/Layout_by-Rocketseat-8257e5?labelColor=202024"
      alt="Layout designer"
    />
  </a>
</p>

<p align="center">
  <a href="https://guipmdev.github.io/ignite-design-system/"
    >Go to the documentation ↗</a
  >
</p>

<details>
  <summary>
    <h2>📒 Table of Contents</h2>
  </summary>

- [📍 Overview](#-overview)
- [✨ Features](#-features)
- [🤖 Demo](#-demo)
- [🎨 Layout](#-layout)
- [🛠 Technologies](#-technologies)
  - [Workspace](#workspace)
  - [Documentation](#documentation)
  - [ESLint Config](#eslint-config)
  - [Components](#components)
  - [Tokens](#tokens)
  - [Utils](#utils)
- [🚀 Getting Started](#-getting-started)
  - [✔️ Prerequisites](#️-prerequisites)
  - [📦 Installation](#-installation)
  - [⚙️ Usage](#️-usage)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)
</details>

<!-- ===== PROJECT INFOS ===== -->

## 📍 Overview

The Ignite Design System project is a library of reusable UI components and style libraries for creating applications that use _React_. It provides elements such as boxes, headers, buttons, input fields, checkboxes and multi-step forms, among others.

The project is designed to simplify the implementation of common user interface elements while maintaining customizable styling options. By providing a comprehensive set of pre-built elements and design tokens, it allows developers to create consistent and visually appealing user interfaces more efficiently.

## ✨ Features

🧩 **Components ready to use** and also customizable

🖌 **Color tokens** available for import

📄 **Documentation** to guide use

⚙ Built on **TypeScript**

## 🤖 Demo

## 🎨 Layout

The layout of the application/components was designed by **Rocketseat** and is available on [Figma](<https://www.figma.com/file/5NSfvvfsVxKatf19vsoshN/Ignite-Call-(Community)>).

<p align="center">
  <img
    src="./assets/images/layout-cover.webp"
    alt="Web application layout image cover"
    width="50%"
  />
</p>

## 🛠 Technologies

The following tools were used to build the project:

### Workspace

<p>
  <a href="https://turbo.build/repo">
    <img
      src="https://img.shields.io/badge/Turborepo-000001?style=for-the-badge&logo=turborepo"
      alt="Turborepo"
    />
  </a>
  <a href="https://github.com/changesets/changesets">
    <img
      src="https://img.shields.io/badge/changesets-white?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMxIiBoZWlnaHQ9IjkyIiB2aWV3Qm94PSIwIDAgMTMxIDkyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNjguOTk3IDQ1Ljk5OEM2OC45OTcgMjAuNTk0IDQ4LjQwMyAwIDIyLjk5OSAwSDBDMCAyNS40MDQgMjAuNTk0IDQ1Ljk5OCA0NS45OTggNDUuOTk4SDY4Ljk5N1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTY4Ljk5NyA0NS45OThDNjguOTk3IDcxLjQwMiA0OC40MDMgOTEuOTk1OCAyMi45OTkgOTEuOTk1OEgxMy43OTk0QzEzLjc5OTQgNjYuNTkxOSAzNC4zOTM0IDQ1Ljk5NzkgNTkuNzk3NCA0NS45OTc5TDY4Ljk5NyA0NS45OThaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik02MS42MzczIDQ1Ljk5OEM2MS42MzczIDIwLjU5NCA4Mi4yMzEzIDAgMTA3LjYzNSAwSDEzMC42MzRDMTMwLjYzNCAyNS40MDQgMTEwLjA0IDQ1Ljk5OCA4NC42MzYzIDQ1Ljk5OEg2MS42MzczWiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyKSIvPgo8cGF0aCBkPSJNNjEuNjM3MyA0NS45OThDNjEuNjM3MyA3MS40MDIgODIuMjMxMiA5MS45OTU5IDEwNy42MzUgOTEuOTk1OUgxMTYuODM1QzExNi44MzUgNjYuNTkyIDk2LjI0MDggNDUuOTk4IDcwLjgzNjkgNDUuOTk4TDYxLjYzNzMgNDUuOTk4WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyKSIvPgo8cGF0aCBkPSJNNjUuMzE3MSAyNy45NDAyQzY3LjY4NTggMzMuNDg0MiA2OC45OTY5IDM5LjU4NzkgNjguOTk2OSA0NS45OTc4QzY4Ljk5NjkgNTIuNDA3OCA2Ny42ODU4IDU4LjUxMTUgNjUuMzE3MSA2NC4wNTU0QzYyLjk0ODQgNTguNTExNSA2MS42MzczIDUyLjQwNzggNjEuNjM3MyA0NS45OTc4QzYxLjYzNzMgMzkuNTg3OSA2Mi45NDg0IDMzLjQ4NDIgNjUuMzE3MSAyNy45NDAyWiIgZmlsbD0iIzAwODhDQyIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNjkiIHkxPSI5MiIgeDI9IjkuNjA3OTRlLTA3IiB5Mj0iLTcuMjA1OTZlLTA3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMDFCMzMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA2RENDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjY5IiB5MT0iOTIiIHgyPSI5LjYwNzk0ZS0wNyIgeTI9Ii03LjIwNTk2ZS0wNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDAxQjMzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwNkRDQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXIiIHgxPSI2Mi4wMDAxIiB5MT0iOTIiIHgyPSIxMzEiIHkyPSI2LjkzODA0ZS0wNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDA4OUQ2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzY2Q0NGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXIiIHgxPSI2Mi4wMDAxIiB5MT0iOTIiIHgyPSIxMzEiIHkyPSI2LjkzODA0ZS0wNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDA4OUQ2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzY2Q0NGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg=="
      alt="changesets"
    />
  </a>
</p>

### Documentation

<p>
  <a href="https://vitejs.dev/">
    <img
      src="https://img.shields.io/badge/Vite-1e1e20?style=for-the-badge&logo=Vite"
      alt="Vite"
    />
  </a>
  <a href="https://react.dev/">
    <img
      src="https://img.shields.io/badge/React-23272f?style=for-the-badge&logo=React"
      alt="React"
    />
  </a>
  <a href="https://storybook.js.org/">
    <img
      src="https://img.shields.io/badge/Storybook-171c23?style=for-the-badge&logo=storybook"
      alt="Storybook"
    />
  </a>
</p>

<p>
  <a href="https://phosphoricons.com/">
    <img
      src="https://img.shields.io/badge/Phosphor_Icons-eeeae3?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCAzMyA0NCIgZmlsbD0ibm9uZSIKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xNy4xMDI2IDAuMDUwMjU3NUgxLjQ5NDM0QzEuMTk0NDYgMC4wNTAyNTc1IDAuOTA2ODU5IDAuMTY5MzggMC42OTQ4MTUgMC4zODE0MjVDMC40ODI3NyAwLjU5MzQ3IDAuMzYzNjQ3IDAuODgxMDU2IDAuMzYzNjQ3IDEuMTgwOTNWMjguOTE4OUMwLjM2NzQ2NCAzMi44OTQ4IDEuOTQ3OTMgMzYuNzA3IDQuNzU4NDUgMzkuNTE5M0M3LjU2ODk3IDQyLjMzMTYgMTEuMzgwMSA0My45MTQ1IDE1LjM1NjEgNDMuOTIwOUMxNS41MDQ1IDQzLjkyMDkgMTUuNjUxNiA0My44OTE3IDE1Ljc4ODcgNDMuODM0OEMxNS45MjU5IDQzLjc3OCAxNi4wNTA2IDQzLjY5NDcgMTYuMTU1NiA0My41ODk3QzE2LjI2MDYgNDMuNDg0NyAxNi4zNDM4IDQzLjM2MDEgMTYuNDAwNyA0My4yMjI5QzE2LjQ1NzUgNDMuMDg1NyAxNi40ODY3IDQyLjkzODcgMTYuNDg2NyA0Mi43OTAyVjMwLjA0OTVIMTcuMDkzQzE5LjA4NTQgMzAuMDg1MiAyMS4wNjQ5IDI5LjcyMzYgMjIuOTE2IDI4Ljk4NThDMjQuNzY3MSAyOC4yNDgxIDI2LjQ1MjYgMjcuMTQ4OSAyNy44NzQyIDI1Ljc1MjVDMjkuMjk1OSAyNC4zNTYxIDMwLjQyNSAyMi42OTA1IDMxLjE5NTkgMjAuODUyOUMzMS45NjY3IDE5LjAxNTMgMzIuMzYzNyAxNy4wNDI2IDMyLjM2MzcgMTUuMDQ5OUMzMi4zNjM3IDEzLjA1NzIgMzEuOTY2NyAxMS4wODQ1IDMxLjE5NTkgOS4yNDY4N0MzMC40MjUgNy40MDkyOCAyOS4yOTU5IDUuNzQzNjYgMjcuODc0MiA0LjM0NzI4QzI2LjQ1MjYgMi45NTA4OSAyNC43NjcxIDEuODUxNzMgMjIuOTE2IDEuMTEzOTVDMjEuMDY0OSAwLjM3NjE2OCAxOS4wODU0IDAuMDE0NTcyMyAxNy4wOTMgMC4wNTAyNTc1SDE3LjEwMjZaTTE0LjIxNTcgNDEuNjExNEMxMS4yNDQzIDQxLjM0MTIgOC40NjE1OSA0MC4wMzc4IDYuMzUxNzggMzcuOTI4QzQuMjQxOTcgMzUuODE4MSAyLjkzODU2IDMzLjAzNTQgMi42NjgzMiAzMC4wNjRIMTQuMjE1N1Y0MS42MTE0Wk0xNC4yMTU3IDI0LjEzMTVMMy4zMjc0OSAyLjMxMTYxSDE0LjIzNUwxNC4yMTU3IDI0LjEzMTVaTTE3LjEwMjYgMjcuNzg4MkgxNi40OTY0VjIuMzExNjFIMTcuMTAyNkMxOC43OTYyIDIuMjc4NjkgMjAuNDc5NCAyLjU4Mzg2IDIyLjA1MzcgMy4yMDkyM0MyMy42MjggMy44MzQ2IDI1LjA2MTggNC43Njc2MyAyNi4yNzEyIDUuOTUzNzVDMjcuNDgwNiA3LjEzOTg3IDI4LjQ0MTMgOC41NTUyNyAyOS4wOTcyIDEwLjExNzFDMjkuNzUzIDExLjY3OSAzMC4wOTA4IDEzLjM1NTkgMzAuMDkwOCAxNS4wNDk5QzMwLjA5MDggMTYuNzQzOSAyOS43NTMgMTguNDIwOCAyOS4wOTcyIDE5Ljk4MjdDMjguNDQxMyAyMS41NDQ1IDI3LjQ4MDYgMjIuOTU5OSAyNi4yNzEyIDI0LjE0NkMyNS4wNjE4IDI1LjMzMjEgMjMuNjI4IDI2LjI2NTIgMjIuMDUzNyAyNi44OTA2QzIwLjQ3OTQgMjcuNTE1OSAxOC43OTYyIDI3LjgyMTEgMTcuMTAyNiAyNy43ODgyWiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo="
      alt="Phosphor Icons"
    />
  </a>
  <a href="https://polished.js.org/">
    <img
      src="https://img.shields.io/badge/polished-gray?style=for-the-badge"
      alt="polished"
    />
  </a>
</p>

### ESLint Config

<p>
  <a href="https://eslint.org/">
    <img
      src="https://img.shields.io/badge/ESLint-101828?style=for-the-badge&logo=ESLint"
      alt="ESLint"
    />
  </a>
  <a href="https://github.com/rocketseat/eslint-config-rocketseat">
    <img
      src="https://img.shields.io/badge/Rocketseat_ESLint_config-gray?style=for-the-badge"
      alt="Rocketseat ESLint config"
    />
  </a>
</p>

### Components

<p>
  <a href="https://react.dev/">
    <img
      src="https://img.shields.io/badge/React-23272f?style=for-the-badge&logo=React"
      alt="React"
    />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img
      src="https://img.shields.io/badge/TypeScript-white?style=for-the-badge&logo=TypeScript"
      alt="TypeScript"
    />
  </a>
  <a href="https://tsup.egoist.dev/">
    <img
      src="https://img.shields.io/badge/tsup-gray?style=for-the-badge"
      alt="tsup"
    />
  </a>
</p>

<p>
  <a href="https://stitches.dev/">
    <img
      src="https://img.shields.io/badge/Stitches-151719?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlldy1ib3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSI+CjxzdHlsZT4KICBwYXRoLCBjaXJjbGUgewogICAgc3Ryb2tlOiBoc2woMjAwIDclIDguNCUpOwogIH0KCiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykgewogICAgcGF0aCwgY2lyY2xlIHsKICAJICBzdHJva2U6IGhzbCgyNDAgMyUgOTMlKTsKICAgIH0KICB9Cjwvc3R5bGU+CjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNC41IiBzdHJva2Utd2lkdGg9IjIiIC8+CjxwYXRoIGQ9Ik0xMi44MTg0IDMxLjMyMThMMzEuODcwOSAyMC4zMjE4IiAvPgo8cGF0aCBkPSJNMy4zMTgzNiAxNC44Njc0TDIyLjM3MDkgMy44Njc0MyIgLz4KPHBhdGggZD0iTTguNjUzMzIgMjkuMTA3N0wyNS45NzM4IDE5LjEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KPHBhdGggZD0iTTkuMjE1ODIgMTYuMDgxNUwyNi41MzYzIDYuMDgxNTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KPHBhdGggZD0iTTEzLjIzMzQgMTQuMjI5N0wyMi41MDk5IDIxLjEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KPHBhdGggZD0iTTE2LjY5NzMgMTIuMjMwMkwyNS45NzM2IDE5LjEwNzgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KPHBhdGggZD0iTTkuMjE1ODIgMTYuMDgxNUwxOS4wNDU5IDIzLjEwNzgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KPC9zdmc+"
      alt="Stitches"
    />
  </a>
  <a href="https://www.radix-ui.com/">
    <img
      src="https://img.shields.io/badge/Radix_UI-1a181c?style=for-the-badge&logo=radixui"
      alt="Radix UI"
    />
  </a>
  <a href="https://phosphoricons.com/">
    <img
      src="https://img.shields.io/badge/Phosphor_Icons-eeeae3?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCAzMyA0NCIgZmlsbD0ibm9uZSIKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xNy4xMDI2IDAuMDUwMjU3NUgxLjQ5NDM0QzEuMTk0NDYgMC4wNTAyNTc1IDAuOTA2ODU5IDAuMTY5MzggMC42OTQ4MTUgMC4zODE0MjVDMC40ODI3NyAwLjU5MzQ3IDAuMzYzNjQ3IDAuODgxMDU2IDAuMzYzNjQ3IDEuMTgwOTNWMjguOTE4OUMwLjM2NzQ2NCAzMi44OTQ4IDEuOTQ3OTMgMzYuNzA3IDQuNzU4NDUgMzkuNTE5M0M3LjU2ODk3IDQyLjMzMTYgMTEuMzgwMSA0My45MTQ1IDE1LjM1NjEgNDMuOTIwOUMxNS41MDQ1IDQzLjkyMDkgMTUuNjUxNiA0My44OTE3IDE1Ljc4ODcgNDMuODM0OEMxNS45MjU5IDQzLjc3OCAxNi4wNTA2IDQzLjY5NDcgMTYuMTU1NiA0My41ODk3QzE2LjI2MDYgNDMuNDg0NyAxNi4zNDM4IDQzLjM2MDEgMTYuNDAwNyA0My4yMjI5QzE2LjQ1NzUgNDMuMDg1NyAxNi40ODY3IDQyLjkzODcgMTYuNDg2NyA0Mi43OTAyVjMwLjA0OTVIMTcuMDkzQzE5LjA4NTQgMzAuMDg1MiAyMS4wNjQ5IDI5LjcyMzYgMjIuOTE2IDI4Ljk4NThDMjQuNzY3MSAyOC4yNDgxIDI2LjQ1MjYgMjcuMTQ4OSAyNy44NzQyIDI1Ljc1MjVDMjkuMjk1OSAyNC4zNTYxIDMwLjQyNSAyMi42OTA1IDMxLjE5NTkgMjAuODUyOUMzMS45NjY3IDE5LjAxNTMgMzIuMzYzNyAxNy4wNDI2IDMyLjM2MzcgMTUuMDQ5OUMzMi4zNjM3IDEzLjA1NzIgMzEuOTY2NyAxMS4wODQ1IDMxLjE5NTkgOS4yNDY4N0MzMC40MjUgNy40MDkyOCAyOS4yOTU5IDUuNzQzNjYgMjcuODc0MiA0LjM0NzI4QzI2LjQ1MjYgMi45NTA4OSAyNC43NjcxIDEuODUxNzMgMjIuOTE2IDEuMTEzOTVDMjEuMDY0OSAwLjM3NjE2OCAxOS4wODU0IDAuMDE0NTcyMyAxNy4wOTMgMC4wNTAyNTc1SDE3LjEwMjZaTTE0LjIxNTcgNDEuNjExNEMxMS4yNDQzIDQxLjM0MTIgOC40NjE1OSA0MC4wMzc4IDYuMzUxNzggMzcuOTI4QzQuMjQxOTcgMzUuODE4MSAyLjkzODU2IDMzLjAzNTQgMi42NjgzMiAzMC4wNjRIMTQuMjE1N1Y0MS42MTE0Wk0xNC4yMTU3IDI0LjEzMTVMMy4zMjc0OSAyLjMxMTYxSDE0LjIzNUwxNC4yMTU3IDI0LjEzMTVaTTE3LjEwMjYgMjcuNzg4MkgxNi40OTY0VjIuMzExNjFIMTcuMTAyNkMxOC43OTYyIDIuMjc4NjkgMjAuNDc5NCAyLjU4Mzg2IDIyLjA1MzcgMy4yMDkyM0MyMy42MjggMy44MzQ2IDI1LjA2MTggNC43Njc2MyAyNi4yNzEyIDUuOTUzNzVDMjcuNDgwNiA3LjEzOTg3IDI4LjQ0MTMgOC41NTUyNyAyOS4wOTcyIDEwLjExNzFDMjkuNzUzIDExLjY3OSAzMC4wOTA4IDEzLjM1NTkgMzAuMDkwOCAxNS4wNDk5QzMwLjA5MDggMTYuNzQzOSAyOS43NTMgMTguNDIwOCAyOS4wOTcyIDE5Ljk4MjdDMjguNDQxMyAyMS41NDQ1IDI3LjQ4MDYgMjIuOTU5OSAyNi4yNzEyIDI0LjE0NkMyNS4wNjE4IDI1LjMzMjEgMjMuNjI4IDI2LjI2NTIgMjIuMDUzNyAyNi44OTA2QzIwLjQ3OTQgMjcuNTE1OSAxOC43OTYyIDI3LjgyMTEgMTcuMTAyNiAyNy43ODgyWiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo="
      alt="Phosphor Icons"
    />
  </a>
</p>

### Tokens

<p>
  <a href="https://www.typescriptlang.org/">
    <img
      src="https://img.shields.io/badge/TypeScript-white?style=for-the-badge&logo=TypeScript"
      alt="TypeScript"
    />
  </a>
  <a href="https://tsup.egoist.dev/">
    <img
      src="https://img.shields.io/badge/tsup-gray?style=for-the-badge"
      alt="tsup"
    />
  </a>
</p>

_\* See the [<kbd>package.json</kbd>](./package.json) file_

### Utils

<p>
  <a href="https://git-scm.com/">
    <img
      src="https://img.shields.io/badge/Git-f1f1e9?style=for-the-badge&logo=git"
      alt="Git"
    />
  </a>
  <a href="https://nodejs.org/">
    <img
      src="https://img.shields.io/badge/Node.js-233056?style=for-the-badge&logo=node.js"
      alt="Node.js"
    />
  </a>
  <a href="https://figma.com/">
    <img
      src="https://img.shields.io/badge/Figma-white?style=for-the-badge&logo=figma"
      alt="Figma"
    />
  </a>
  <a href="https://fonts.google.com/">
    <img
      src="https://img.shields.io/badge/Google_Fonts-white?style=for-the-badge&logo=google-fonts"
      alt="Google Fonts"
    />
  </a>
  <a href="https://code.visualstudio.com/">
    <img
      src="https://img.shields.io/badge/VSCode-005293?style=for-the-badge&logo=visual-studio-code"
      alt="VSCode"
    />
  </a>
</p>

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following tools installed on your machine: [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/download). It's also good to have an editor to work with the code, such as [VSCode](https://code.visualstudio.com/Download).

### 📦 Installation

1. Clone the repository:

```sh
git clone https://github.com/guipmdev/ignite-design-system/
```

2. Change to the project directory:

```sh
cd ignite-design-system
```

3. Install the dependencies:

```sh
npm install
```

### ⚙️ Usage

1. Run all the dev scripts with Turborepo:

```sh
npm run dev
```

2. Wait to start and then access http://localhost:6006/ to view the documentation

## 📄 License

This project is licensed under the terms of the `MIT` license. See the
[LICENSE](./LICENSE) file for additional info.

## 👏 Acknowledgments

> - Many thanks to [Rocketseat](https://www.rocketseat.com.br/) for the layout and tips when putting this project together

<!-- ===== FOOTER ===== -->

---

<p align="center">
  Made with 💙 by
  <a href="https://www.guipm.dev/"> @guipm.dev </a>
  - Feel free to
  <a href="mailto:guipm.dev@gmail.com">contact me</a>!
</p>

<br />

<p align="center">
  <a href="#top">
    <b>↑&nbsp;&nbsp; Return to the top &nbsp;&nbsp;↑</b>
  </a>
</p>
