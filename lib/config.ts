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
  /** Código Pix copia e cola - R$ 10,00 */
  PIX_COPY_R10: '00020101021126580014br.gov.bcb.pix01369c65dfd2-0886-4a94-a84b-1021a7506c58520400005303986540510.005802BR5917ANDRE L S MARIANI6009SAO PAULO62070503***6304578F',
  /** Código Pix copia e cola - oferta voluntária */
  PIX_COPY_OFERTA: '00020101021126580014br.gov.bcb.pix01369c65dfd2-0886-4a94-a84b-1021a7506c585204000053039865802BR5917ANDRE L S MARIANI6009SAO PAULO62070503***63041BAF',
  /** Web3Forms - 250 inscrições/mês grátis. Pegue a chave em web3forms.com */
  WEB3FORMS_ACCESS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
}
