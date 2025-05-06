//
type clonePartial<T> = {
  [P in keyof T]?: T[P];
};

type clonePick<T, K extends keyof T> = {
  [P in K]: T[P];
};

//Example 1: Partial
type Blog = {
  id: string;
  title: string;
  uploadDate: Date;
  desc: string;
  status: string;
};

let draft: clonePartial<Blog> = {
  id: "dg23f23d",
  title: "New Mexico's Blue Meth",
};
const blog_01: Blog = {
  id: "er32raf3",
  title: "Breaking Bad: Best TV Series Ever",
  uploadDate: new Date(),
  desc: "",
  status: "Finished",
};
console.log(draft);
console.log(blog_01);

function updateBlog(blog: clonePartial<Blog>) {
  return {
    ...blog,
  };
}

draft = updateBlog({ ...draft, uploadDate: new Date(), desc: "Good article" });
console.log(draft);

// Example 2: Pick
interface User {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: Date;
  phone: string;
  joinDate: Date;
  avatarUrl: string;
}

type UserAvatar = Pick<User, "username" | "email" | "avatarUrl">;

let user_01: User = {
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

const user_01_avt: UserAvatar = {
  username: user_01.username,
  email: user_01.email,
  avatarUrl: user_01.avatarUrl,
};

console.log(user_01);
console.log(user_01_avt);
