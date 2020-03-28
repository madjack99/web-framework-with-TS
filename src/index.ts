import { User } from './models/User';

const user = new User({ id: 1, name: 'Mike', age: 44 });
user.on('save', () => console.log(user));
user.save();
