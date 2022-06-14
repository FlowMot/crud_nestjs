import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getModafoca(): any[] {
    return [
      {
        nome: 'juao',
        idade: 25,
      },
      {
        nome: 'Augusto',
        idade: 24,
      },
    ];
  }
}
