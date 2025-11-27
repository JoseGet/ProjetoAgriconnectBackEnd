import { MercadoPagoConfig } from 'mercadopago';

const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_TOKEN!,
});

export default mercadopago;