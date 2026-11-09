const crypto = require('crypto');

export default async function handler(req, res) {
  // Permitir solo peticiones POST desde su frontend
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { amount, commerceOrder, email, urlConfirmation, urlReturn } = req.body;

    // Credenciales oficiales de Flow Sandbox (seguras en el servidor)
    const apiKey = '359FDDFB-986D-4813-B1DA-21L879B274A9';
    const secretKey = '25693da24b99461c9c71ae945371889033f02861';
    const sandboxUrl = 'https://sandbox.flow.cl/api/payment/create';

    // Armar el payload que pide Flow
    const params = {
      apiKey,
      commerceOrder,
      subject: 'Compra Todohogar Chillán',
      currency: 'CLP',
      amount,
      email,
      urlConfirmation,
      urlReturn
    };

    // 1. Firmar los parámetros con HMAC-SHA256 (del lado del servidor)
    const keys = Object.keys(params).sort();
    const toSign = keys.map(k => `${k}${params[k]}`).join('');
    const signature = crypto
      .createHmac('sha256', secretKey)
      .update(toSign)
      .digest('hex');

    params.s = signature;

    // 2. Comunicarnos con Flow (Los servidores no sufren de CORS)
    const response = await fetch(sandboxUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(params)
    });

    const result = await response.json();

    // 3. Devolver la respuesta (token y url) a su tienda frontend
    return res.status(200).json(result);

  } catch (error) {
    return res.status(500).json({ message: 'Error interno en el servidor', error: error.message });
  }
}
