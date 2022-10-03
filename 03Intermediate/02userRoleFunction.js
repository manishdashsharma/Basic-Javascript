function getUserRole(name,role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access.`;
        case "subadmin":
            return `${name} is sub-admin with create and delete courses.`;
        case "testprep":
            return `${name} is testprep with all create and delete test.`;
        case "user":
            return `${name} is user to comsume the course.`;
        default:
            return `${name} is a trail user`;
    }
}

console.log(getUserRole("manish", "user"));