import { human2zdjd, zdjd2human, isZdjd } from './trans'

export default {
  human2zdjd,
  zdjd2human,
  encode: human2zdjd,
  decode: zdjd2human,
  isZdjd,
}
