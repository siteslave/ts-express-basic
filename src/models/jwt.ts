import * as jwt from 'jsonwebtoken';

export class JwtModel {

  private secretKey = process.env.SECRET_KEY;

  sign(payload: any) {
    let token = jwt.sign(payload, this.secretKey, {
      expiresIn: '2h'
    });
    return token;
  }

  signApiKey(payload: any) {
    let token = jwt.sign(payload, this.secretKey, {
      expiresIn: '1y'
    });
    return token;
  }

  verify(token: string) {
    return jwt.verify(token, this.secretKey);
  }

}
