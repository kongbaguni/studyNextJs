import { Profile } from "../models/ProfileModel"

export class ProfileManager {
    private static instance : ProfileManager
    public static getInstance() : ProfileManager {
        if(!ProfileManager.instance) {
            ProfileManager.instance = new ProfileManager()
        }
        return ProfileManager.instance
    }

    public profile:Profile = null;

}