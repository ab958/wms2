export default function handler(request, response) {
  response.redirect(`${process.env.NEXT_PUBLIC_ZENDESK_AUTH_URL}`);
}
