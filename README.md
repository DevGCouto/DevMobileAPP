<img width="380" height="835" alt="Captura de tela 2026-10-21 111541" src="https://github.com/user-attachments/assets/cdb341ff-e323-4281-86f1-8a1c553bc6dd" />
<img width="381" height="842" alt="Captura de tela 2026-10-21 111548" src="https://github.com/user-attachments/assets/81f1a6dd-c7da-4e5b-8320-423e3e80d865" />
<img width="381" height="828" alt="Captura de tela 2026-10-21 111559" src="https://github.com/user-attachments/assets/a0aec7eb-3c55-4295-b7f3-4d7471d3f924" />
<img width="379" height="832" alt="Captura de tela 2026-10-21 111523" src="https://github.com/user-attachments/assets/c2a0dad6-30d5-4e26-adda-95f16e817b31" />
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
