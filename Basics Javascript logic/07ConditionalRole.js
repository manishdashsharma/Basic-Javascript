var user = "testprep"

switch (user) {
    case "admin":
        console.log("You get the full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete the course");
        break;
    case "testprep":
        console.log("gets access to create/delete the tests");
        break;
    case "user":
        console.log("gets access to comsume the content");
        break;
    default:
        console.log("Trail user");
        break;
}