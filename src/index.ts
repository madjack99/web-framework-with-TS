import { User } from './models/User';

const user = new User({ id: 3 });
user.set({ name: 'Bob', age: 22 });
user.save();
console.log(user.get('id'));
