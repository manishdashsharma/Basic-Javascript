var authenticated = true;

if (authenticated) {
    console.log("SignOut Button");
} else {
    console.log("login Button");
}

authenticated ? console.log("SignOut Button") : console.log("login Button");