var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var draft = {
    id: "dg23f23d",
    title: "New Mexico's Blue Meth",
};
var blog_01 = {
    id: "er32raf3",
    title: "Breaking Bad: Best TV Series Ever",
    uploadDate: new Date(),
    desc: "",
    status: "Finished",
};
console.log(draft);
console.log(blog_01);
function updateBlog(blog) {
    return __assign({}, blog);
}
draft = updateBlog(__assign(__assign({}, draft), { uploadDate: new Date(), desc: "Good article" }));
console.log(draft);
var user_01 = {
    id: "fadd2343f",
    username: "skinny_pete",
    firstname: "",
    lastname: "",
    email: "skinnypete@gmail.com",
    birthdate: new Date(),
    phone: "",
    joinDate: new Date(),
    avatarUrl: "/user/info/avt/avt_01.png",
};
var user_01_avt = {
    username: user_01.username,
    email: user_01.email,
    avatarUrl: user_01.avatarUrl,
};
console.log(user_01);
console.log(user_01_avt);
