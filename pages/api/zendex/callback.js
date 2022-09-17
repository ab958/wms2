import axios from 'axios';

export default function handler({ query: { code } }, res) {
    const body = {
        grant_type: 'authorization_code',
        code,
        client_id: `${process.env.CLIENT_ID}`,
        client_secret: `${process.env.CLIENT_SECERT}`,
        redirect_uri: `${process.env.RE_URI}`,
        scope: 'tickets:read tickets:write',
      };
      const opts = { headers: { accept: 'application/json' } };
      axios
        .post(`${process.env.NEXT_PUBLIC_ZENDESK_URL}/oauth/tokens`, body, opts)
        .then((_res) => {
        console.log(_res.data)
        return _res.data.access_token})
        .then((token) => {
          // eslint-disable-next-line no-console
          console.log('My token:', token);
          // res.send({ token })
          res.redirect(`/?${token}`);
        })
        .catch((err) => res.status(500).json({ err: err.message }));
  }