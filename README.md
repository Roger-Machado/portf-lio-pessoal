# Portfólio Pessoal - Roger Machado

Este é um site de portfólio pessoal desenvolvido para apresentar projetos, habilidades e contatos.

## Funcionalidades principais

- Layout responsivo para dispositivos móveis e desktops.
- Navbar que esconde/mostra ao rolar (apenas no mobile).
- Seção de orçamento com formulário de contato.
- Integração com EmailJS para envio de emails diretamente do formulário.

---

## Configuração do EmailJS

Para que o envio de emails funcione corretamente, você precisa criar uma conta e obter suas chaves do EmailJS.

### Passos para obter suas chaves

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/) e crie uma conta gratuita.

2. Faça login e siga estes passos:

- **Public Key (Chave Pública):**  
  No painel, clique em **"Integrations"** (ou "Integrações").  
  Lá você verá a **Public Key** (também chamada de User ID em alguns casos). Copie essa chave.

- **Service ID (ID do Serviço):**  
  Vá para **"Email Services"** ou **"Serviços de Email"** e conecte o serviço de email que quer usar (exemplo: Gmail, Outlook, etc).  
  Depois de conectado, copie o **Service ID** gerado para esse serviço.

- **Template ID (ID do Template):**  
  Vá para **"Email Templates"** ou **"Modelos de Email"** e crie ou edite um template de email (com os campos que quer enviar no formulário).  
  Após salvar, copie o **Template ID** correspondente.

### Como usar as chaves no projeto

No seu código, localize o arquivo `config.js` e substitua as chaves no objeto:

```js
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "sua_public_key_aqui",
  SERVICE_ID: "seu_service_id_aqui",
  TEMPLATE_ID: "seu_template_id_aqui",
};
```
