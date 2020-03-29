import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'Name', age: 20 });

const form = new UserForm(document.getElementById('root'), user);
form.render();
