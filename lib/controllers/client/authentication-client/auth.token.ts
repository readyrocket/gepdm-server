import JWT from 'jsonwebtoken';

type Payload = {
  iss: string;
  sub: number | string;
	exp: number;
	data: {
		userId: number | string;
	}
};
const generate = (payload: Payload) => new Promise((resolve) => {
  JWT.sign(
    payload,
    String(process.env.SECRET_JWT_KEY),
    (err, token) => {
      if (err) {
        throw new Error(`ERR_INVALID_TOKEN`);
      }
      resolve(token);
    },
  );
});

export { generate };
