# Next level — Landing page do evento

Landing page para o evento evangélico **Next level**: suba mais um nível na intimidade com Deus.

- **Data:** 21/03/2026  
- **Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion  
- **Deploy:** Vercel  

## Como rodar no navegador (desenvolvimento)

1. **Requisitos:** Node.js 18+ instalado.

2. **Instalar dependências:**
   ```bash
   npm install
   ```

3. **Rodar em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
   O Next.js sobe um servidor local (geralmente **http://localhost:3000**). Abra esse endereço no navegador.

4. **Build para produção:**
   ```bash
   npm run build
   ```

5. **Rodar em produção (após o build):**
   ```bash
   npm start
   ```

## Configuração

- **`lib/config.ts`** — Data do evento, link do WhatsApp e caminhos das imagens do QR code.
- **Variáveis de ambiente (obrigatório para o formulário):** copie `.env.example` para `.env.local` e preencha:
  - `NEXT_PUBLIC_LINK_WHATSAPP` — link do grupo no WhatsApp
  - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — pegue a chave em [web3forms.com](https://web3forms.com)
- **Na Vercel:** adicione as mesmas variáveis em Settings > Environment Variables.

## QR code e link do WhatsApp

- Coloque a imagem do QR code em **`public/qr-code.png`** (ou use dois arquivos, ex.: `qr-code-10.png` e `qr-code-oferta.png`, e atualize os caminhos em `lib/config.ts`).
- Atualize `LINK_WHATSAPP` em `lib/config.ts` (ou em `NEXT_PUBLIC_LINK_WHATSAPP` no `.env.local`).

Enquanto não houver imagem em `public/qr-code.png`, o popup exibirá o texto "QR Code em breve".

## Deploy na Vercel

1. Conecte o repositório Git do projeto à [Vercel](https://vercel.com).
2. O preset **Next.js** é detectado automaticamente.
3. **Obrigatório:** Configure as variáveis de ambiente no painel da Vercel:
   - Acesse seu projeto na Vercel → **Settings** → **Environment Variables**
   - Adicione cada variável (Production, Preview e Development):
     - `NEXT_PUBLIC_LINK_WHATSAPP` = link do grupo WhatsApp
     - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = sua chave do Web3Forms
   - Clique em **Save** e faça um novo deploy (Redeploy) para aplicar.
4. O arquivo `.env.local` **não** é enviado ao Git (por segurança). As variáveis precisam ser configuradas manualmente na Vercel.
