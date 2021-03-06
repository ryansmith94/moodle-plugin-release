import { readFile } from 'fs';

export default (filePath: string) => {
  return new Promise<Buffer>((resolve, reject) => {
    readFile(filePath, (err: any, data) => {
      if (err !== undefined && err !== null) {
        reject(err);
        return;
      }
      resolve(data);
      return;
    });
  });
};
