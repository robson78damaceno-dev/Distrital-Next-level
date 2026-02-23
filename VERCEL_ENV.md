# Variáveis de ambiente para Vercel

O `.env.local` não é commitado no Git (por segurança). Para o formulário funcionar em produção, adicione as variáveis na Vercel:

1. Acesse [vercel.com](https://vercel.com) → seu projeto
2. **Settings** → **Environment Variables**
3. Adicione:

| Nome | Valor | Ambiente |
|------|-------|----------|
| `NEXT_PUBLIC_LINK_WHATSAPP` | https://chat.whatsapp.com/xxxxx | Production, Preview, Development |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | sua_chave_web3forms | Production, Preview, Development |

4. **Save** → faça um novo **Deploy** (Redeploy) para aplicar.
