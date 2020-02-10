import {UserForm} from './views/UserForm';
import {User} from './model/User';

const user = User.buildUser({name: 'Bhoopendra', age: 20});

const userForm = new UserForm(document.getElementById('root'), user);

userForm.render();
