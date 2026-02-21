/**
 * Configuração centralizada do evento.
 * Atualize aqui: data, link do WhatsApp e caminhos das imagens de QR code.
 */

export const CONFIG = {
  DATA_EVENTO: '21/03/2026',
  LINK_WHATSAPP: process.env.NEXT_PUBLIC_LINK_WHATSAPP || 'https://wa.me/group/COLE_O_LINK_AQUI',
  QR_CODE_R10: '/qr-code.svg',
  QR_CODE_OFERTA: '/qr-code.svg',
  FORMSPREE_ID: process.env.NEXT_PUBLIC_FORMSPREE_ID || 'COLE_SEU_FORMSPREE_ID',
  /** FormSubmit.co - gratuito, sem limite (pode falhar em alguns casos) */
  FORMSUBMIT_EMAIL: process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || '',
  /** Web3Forms - 250 inscrições/mês grátis, mais confiável. Pegue a chave em web3forms.com */
  WEB3FORMS_ACCESS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
}
