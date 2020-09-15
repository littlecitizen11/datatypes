class User{
    username;
    #password;
    constructor(username,password) {
        this.username=username;
        this.#password=password;
    }
};

class Users{
    users;
    onlineusres;

    constructor() {
        this.users=[];
        this.onlineuser=new Set();
    };

    getuserwithpass(username, password)
    {
        let returneduser = this.users.filter(x=>(x.username==username)&&(x.password=password))[0];
        if(returneduser=='undfined')
            console.log("user or pass wrong");
        return returneduser;

    };

    getuserbyusername(username)
    {
        let returneduser = this.users.filter(x=>(x.username==username))[0];
        if(returneduser=='undfined')
            console.log("user wrong");
        return returneduser;
    };

    newuser(username, password){
        if(this.getuserbyusername(username)!='undefined')
            this.users.push(new User(username,password));
        else
            console.log("username exist");
    };

    setonlineuser(username,password)
    {
        let disuser=this.getuserwithpass(username,password);
        if(disuser!='undefined')
        {
            this.onlineuser.add(disuser);
        }
    };

    isuseronline(username)
    {
        return this.onlineuser.has(this.getuserbyusername(username));
    };

    setofflineuser(username,password)
    {
        let disuser=this.getuserwithpass(username,password);
        if(this.isuseronline(username))
        {
            return this.onlineuser.delete(disuser);
        }
    }

}

let usersintance = new Users();debugger;
usersintance.newuser("omer","blabla");
usersintance.setonlineuser("omer","blabla");
console.log(usersintance.onlineuser.size);
console.log(usersintance.isuseronline("omer"));
console.log(usersintance.setofflineuser("omer","blabla"));