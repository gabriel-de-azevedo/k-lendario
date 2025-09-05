# **K-Lendario**

---

### **Visão Geral**

Esse projeto foca em criar uma página pública onde os interessados podem ver minha disponibilidade em tempo real, escolher um horário e confirmar uma reunião.

### **Recursos Principais (MVP - Produto Mínimo Viável)**

-   **Página de Agendamento Pública:** Uma URL única que pode ser compartilhada, exibindo os tipos de reunião disponíveis (ex: "Entrevista Técnica de 30 minutos", "Revisão de Portfólio de 15 minutos").
-   **Seleção de Horário Dinâmica:** Um calendário interativo que mostra apenas os dias e horários em que estou disponível. Os horários já agendados não serão exibidos.
-   **Integração com o Google Calendar:** O projeto se comunicará com a API do Google Calendar para:
    -   Consultar minha disponibilidade (verificar horários livres para agendamento).
    -   Criar um novo evento no meu calendário e no calendário do convidado após a confirmação.
-   **Integração com o Google Meet:** Cada agendamento criará automaticamente um link de videoconferência do Google Meet, que será incluído na descrição do evento no calendário.
-   **Fluxo de Confirmação:** Após selecionar um horário, o usuário preencherá um formulário simples (nome, e-mail) para finalizar o agendamento.
-   **Notificação por E-mail:** Um e-mail de confirmação será enviado para o convidado com os detalhes da reunião e o link do Google Meet.

### **Tecnologias Utilizadas**

-   **Frontend:**
    -   Alpine.js
    -   Tailwind CSS
-   **Backend:**
    -   Express
-   **Autenticação e API:**
    -   Google APIs (Google Calendar API, Google People API para envio de convites).
    -   OAuth 2.0 para autenticação e permissões de acesso ao calendário.

### **Como Executar Localmente**

### **Demonstração do Projeto**

---

### **Sobre o Desenvolvedor**