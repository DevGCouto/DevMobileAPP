# App Institucional - Navegação e Toolbar

Aplicação mobile desenvolvida em React Native (Expo) como projeto prático para demonstrar a criação de telas, validação de login simulado, navegação entre páginas e manipulação da Toolbar.

---

## 👤 Dados do Aluno
- **Nome:** Gabriel  França Couto

---

## 📱 Descrição Resumida
A aplicação simula o ecossistema de uma empresa institucional (TechCorp). O usuário realiza o acesso por meio de uma tela de login validada localmente e, em seguida, navega por uma interface com Toolbar personalizada entre as telas **Home**, **Sobre** e **Contato**.

---

## 🛠️ Tecnologia / Framework Utilizado
- **Framework:** React Native (Expo / Expo Snack)
- **Navegação:** React Navigation (`@react-navigation/native-stack`)
- **Estilização:** StyleSheet nativo com variáveis centralizadas de tema

---

## 🔑 Credenciais para Teste
- **Usuário:** `aluno`
- **Senha:** `123456`

*(Conforme as regras do enunciado, não é utilizado banco de dados, API, Firebase ou localStorage para a persistência de credenciais)*[cite: 3, 4, 5].

---

## 📁 Estrutura de Diretórios
```text
meu-app/
├── src/
│   ├── components/
│   │   ├── custombutton.js
│   │   └── custominput.js
│   ├── pages/
│   │   ├── login/
│   │   │   ├── login.js
│   │   │   └── login.styles.js
│   │   ├── home/
│   │   │   ├── home.js
│   │   │   └── home.styles.js
│   │   ├── sobre/
│   │   │   ├── sobre.js
│   │   │   └── sobre.styles.js
│   │   └── contato/
│   │       ├── contato.js
│   │       └── contato.styles.js
│   └── styles/
│       └── theme.js
├── App.js
├── package.json
└── README.md