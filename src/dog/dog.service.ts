import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'WOW WOW';
  }

  public introduce(): string {
    return 'My name is REX!';
  }

  public modifyDetails(): string {
    return 'Successfuly modified';
  }
}
