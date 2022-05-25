

export interface CurrentUser {
    username?: string;
    role?: number;
}
const STORAGE_KEY = 'CurrentUser';

export class CurrentUserProfileModel {
    username?: string;
    role?: number;
    constructor() {
        let stored = sessionStorage.getItem(STORAGE_KEY);
        console.log(stored);

        if (stored) {
            stored = atob(stored);
            const userProfile = JSON.parse(decodeURIComponent(unescape(stored)));
            Object.assign(this, userProfile);
        }
    }
    // tslint:disable-next-line:typedef
    toJSON() {
        return JSON.stringify({
            username: this.username,
            role: this.role,
        });
    }

    public save(currentUser: CurrentUser): void {
        Object.assign(this, currentUser);
        this.saveToSession();
    }

    private saveToSession(): void {
        sessionStorage.setItem(STORAGE_KEY, btoa(unescape(encodeURIComponent(this.toJSON()))));
    }

    destroy(): void {
        sessionStorage.removeItem(STORAGE_KEY);
        this.username = undefined;
        this.role = undefined;
    }

    isBase64(str): boolean {
        if (str === '' || str.trim() === '') { return false; }
        try {
            return btoa(atob(str)) === str;
        } catch (err) {
            return false;
        }
    }
}

