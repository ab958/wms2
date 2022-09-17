export default function handler(request, response) {
    response.redirect(
        `${process.env.AUTH_URL}`
      );
  }