class auth{
    constructor(){
        this.LoggedIn = false;
    }
    login(){
        this.LoggedIn = true;
    }
    logout(){
        this.LoggedIn = false;
    }
    isLoggedIn(){
        return this.LoggedIn;
    }
}
export default new auth();