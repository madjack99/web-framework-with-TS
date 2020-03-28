import { User } from './models/User';

const user = new User({ name: 'Jack', age: 55 });

user.on('change', () => console.log('user was change'));
user.set({ name: 'Bill' });
