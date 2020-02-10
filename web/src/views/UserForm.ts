import { User } from "../model/User";

export class UserForm {
    constructor(public parent: Element, public model: User){
        this.bindModel();
    }

    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        });
    }

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div> User Name ${this.model.get('name')}</div>
                <div> User age ${this.model.get('age')}</div>
                <input />
                <button class="set-name">Click Me</button>
                <button class="set-age">Set Random Age</button>
            </div>
        `;
    }

    eventsMap(): {[key: string]: () => void} {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick
        }
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

    bindEvents(fragment: DocumentFragment): void{
        const eventMap = this.eventsMap();

        for (let eventKey in eventMap) {
            const [eventName, selector] = eventKey.split(':');
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventMap[eventKey])
            })
        }
    }

    render(): void{
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }

}