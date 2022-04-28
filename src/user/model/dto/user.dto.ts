import { User } from '../user.interface';

export class UserDto implements User {
  _id: number;
  _email: string;
  _username: string;
  _password: string;
  _createdDate: Date;
  _lastDateUpdated: Date;
  _birthdate: Date;
  _firstname: string;
  _lastname: string;
}
