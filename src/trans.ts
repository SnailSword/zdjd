import { Base64 } from 'js-base64'

const b64 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/='

const leftEye = ['o', '0', 'O', 'Ö'];
const mouse = ['w', 'v', '\.', '_'];
const rightEye = ['o', '0', 'O', 'Ö'];
const table: string[] = []

const separator = ' ';

const makeTable = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        table.push(`${leftEye[i]}${mouse[j]}${rightEye[k]}`);
      }
    }
  }
}

makeTable()

const addCalls = (t: string): string => {
  return t;
}

export const human2zdjd = (t: string): string => {
  t = Base64.encode(t)
  let len = t.length
  let arr = []

  for (let i = 0; i < len; i++) {
    let c = t.charAt(i)
    let n = b64.indexOf(c)
    arr.push(table[n])
  }

  let data = arr.join(separator)
  return addCalls(data)
}

export const zdjd2human = (t: string): string => {
  const arr = t.split(separator);
  let len = arr.length;
  const resultArr = [];
  for (let i = 0; i < len; i++) {
    let c = arr[i];
    if (!c) {
      continue;
    }
    let n = table.indexOf(c);
    if (n < 0) {
      throw new Error('Invalid zdjd code');
    }
    resultArr.push(b64.charAt(n));
  }
  t = resultArr.join('');
  t = Base64.decode(t);
  return t
}

export const isZdjd = (t: string): boolean => {
  try {
    zdjd2human(t);
    return true;
  }
  catch (e) {
    return false;
  }
}
