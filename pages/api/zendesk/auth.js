export default function handler(request, response) {
  response.redirect(
    `${process.env.NEXT_PUBLIC_ZENDESK_URL}/oauth/authorizations/new?response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_HOMEPAGE_URL}/api/zendex/callback&client_id=abc&scope=read%20write`
  );
}
