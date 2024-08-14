import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return {
      code: 200,
      data: [],
      message: '用户列表请求成功',
    };
  }
  addUser(): any {
    return {
      code: 200,
      data: [],
      message: `用户创建成功`,
    };
  }
}
