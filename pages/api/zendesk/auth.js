export default function handler(request, response) {
  response.redirect(
    `${process.env.NEXT_PUBLIC_ZENDESK_URL}/oauth/authorizations/new?response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_HOMEPAGE_URL}/api/zendesk/callback&client_id=${NEXT_PUBLIC_ZENDESK_CLIENT_ID}&scope=read%20write`
  );
}
