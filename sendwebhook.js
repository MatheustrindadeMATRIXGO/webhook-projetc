const axios = require('axios');

// URL de endereçamento que eu vou enviar json
const webhookURL = 'https://webhook.site/8d23a4e6-76ca-4e4d-9d69-0cf592d539ce';

// Dados que podem ser consumidos a depender da imformaçao que quer enviar
const payload = {
  message: 'Olá, webhook enviado com sucesso, para o destino',
  timestamp: new Date().toISOString(),
};

// Função base do webhook a ser enviado 
const sendWebhook = async () => {
  try {
    const response = await axios.post(webhookURL, payload, {
      headers: {
        'Content-Type': 'application/json', // Tipo de conteúdo da requisição
      },
    });
    console.log('Webhook enviado com sucesso ao destino ','novo teste ', response.data);
  } catch (error) {
    console.error('Erro ,', error.message);
  }
};

// envio ao endereço
sendWebhook();
