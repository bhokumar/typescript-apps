import { User, UserProps } from "../model/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps>{

    template(): string {
        return `
            <div>
                <input palceholder="${this.model.get('name')}"/>
                <button class="set-name">Click Me</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-model">Save User</button>
            </div>
        `;
    }

    eventsMap(): {[key: string]: () => void} {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        }
    }

    onSaveClick = (): void =>  {
        this.model.save();
    }

    onSetNameClick = () => {
        const input = this.parent.querySelector('input');

        if (input) {
            const name = input.value;
            this.model.set({name: name});
        }
    }

    onSetAgeClick = () => {
        this.model.setRandomAge();
    }

    onButtonClick(): void {
        console.log('Button Clicked!');
    }


}