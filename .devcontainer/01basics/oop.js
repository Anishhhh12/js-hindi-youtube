const user = {
    username : "hitesh",
    loginCount :8,
    signedIn : true,
    
    getUserDetails: function(){
        // console.log("got user details from userbase");
        // console.log(`Username: ${username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("anish",12,true);
const userTwo = new User("hitesh",11,true);
console.log(userOne);
console.log(userTwo);
// new gives a new object donot overWrite.
// data pass on
// constructor is refrence of ourself.
// instanceof read from mdn