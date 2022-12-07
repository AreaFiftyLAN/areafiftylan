import { user } from "../logic";

user.create({
    email: "user@areafiftylan.nl",
    username: "user",
    firstName: "Basic",
    lastName: "User",
});

user.create({
    email: "admin@areafiftylan.nl",
    username: "admin",
    firstName: "Admin",
    lastName: "User",
});
