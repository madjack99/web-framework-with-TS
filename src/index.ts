import { User } from './models/User';

const user = new User({ name: 'Jack', age: 55 });

console.log(user.get('name'));
user.on('change', () => console.log('user was change'));
user.trigger('change');
