import { Injectable } from '@angular/core';
import { CurrentUser, CurrentUserProfileModel } from './current-user';

@Injectable()
export class CurrentUserService {
    currentUserProfile: CurrentUserProfileModel;
    constructor() {
        this.currentUserProfile = new CurrentUserProfileModel();
    }

    create(currentUser: CurrentUser): void {
        this.currentUserProfile = new CurrentUserProfileModel();
        this.currentUserProfile.save(currentUser);
    }

    update(currentUser: CurrentUser): void {
        this.currentUserProfile.save(currentUser);

    }

    destroyAll(): void {
        this.currentUserProfile.destroy();
        sessionStorage.clear();
    }

    public getUsername(): string {
        return this.currentUserProfile.username;
    }

    public getRole(): number {
        return this.currentUserProfile.role;
    }
    isAuthorized(): boolean {
        const adminRole = 1;
        const currentRole = this.getRole();
        return (adminRole === currentRole);
    }

}
