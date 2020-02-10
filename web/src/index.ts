import {UserForm} from './views/UserForm';
import {User} from './model/User';

const user = User.buildUser({name: 'Bhoopendra', age: 20});

const rootElement = document.getElementById('root');

if (rootElement) {
    const userForm = new UserForm(rootElement, user);
    userForm.render();
} else {
    throw new Error('Root Element not found!');
}

