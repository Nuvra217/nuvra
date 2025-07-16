// Configuração do EmailJS para envio de e-mails
export const emailjsConfig = {
  serviceId: 'service_9o0uazn',
  templateId: 'template_w0siv17', 
  publicKey: 'ta4QYm3LhKtsqjXLb' // Substitua pela sua chave pública
};

// Template de e-mail que será usado
export const emailTemplate = {
  subject: 'Nova mensagem do site Nuvra',
  body: `
    Nova mensagem recebida através do formulário de contato:
    
    Nome: {{from_name}}
    E-mail: {{from_email}}
    
    Mensagem:
    {{message}}
    
    ---
    Enviado automaticamente pelo site da Nuvra
  `
};