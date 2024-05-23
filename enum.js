"use strict";
var role;
(function (role) {
    role[role["manager"] = 0] = "manager";
    role[role["admin"] = 1] = "admin";
    role[role["read_only_user"] = 2] = "read_only_user";
})(role || (role = {}));
console.log(role.admin);
