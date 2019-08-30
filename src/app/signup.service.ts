import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';

export class SignUpService {
    constructor(private http: Http) { }

    checkEmail(email: string) {
        return this.http
            .get("assets/users.json")
            .delay(1000)
            .map(res => res.json())
            .map(users => users.filter(user => user.email === email))
            .map(users => !users.length);
    }

    checkUserName(userName: string) {
        return this.http
            .get("assets/users.json")
            .delay(1000)
            .map(res => res.json())
            .map(users => users.filter(user => user.userName === userName))
            .map(user => !user.length)
    }

}