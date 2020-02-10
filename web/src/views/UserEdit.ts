import { View } from "./View";
import { User, UserProps } from "../model/User";

export class UserEdit extends View<User, UserProps> {
    template() {
        return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `;
    }
}