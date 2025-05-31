import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      name: 'phetcharagon chimkaew',
      id : 66108390 
    };
  }
}
