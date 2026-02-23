/**
 * Configuração centralizada do evento.
 * Atualize aqui: data, link do WhatsApp e caminhos das imagens de QR code.
 */

export const CONFIG = {
  DATA_EVENTO: '21/03/2026',
  LINK_WHATSAPP: process.env.NEXT_PUBLIC_LINK_WHATSAPP || 'https://wa.me/group/COLE_O_LINK_AQUI',
  QR_CODE_R10: '/qr-code-10.png',
  QR_CODE_OFERTA: '/qr-code-oferta.png',
  /** Web3Forms - 250 inscrições/mês grátis. Pegue a chave em web3forms.com */
  WEB3FORMS_ACCESS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
}
