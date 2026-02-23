/**
 * Configuração centralizada do evento.
 * Atualize aqui: data, link do WhatsApp e caminhos das imagens de QR code.
 */

export const CONFIG = {
  DATA_EVENTO: '21/03/2026',
  /** Link do grupo Recados DF Sul */
  LINK_WHATSAPP: 'https://chat.whatsapp.com/IyxUDcKPMA16e1E3shML95',
  QR_CODE_R10: '/qr-code-10.png',
  QR_CODE_OFERTA: '/qr-code-oferta.png',
  /** Web3Forms - 250 inscrições/mês grátis. Pegue a chave em web3forms.com */
  WEB3FORMS_ACCESS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
}
