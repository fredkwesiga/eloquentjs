//object literals

let user ={
    name: "fred",
    age: 30,
    blog: ["why use vs code?"],
    login: function(){
        console.log("user has logged in")
    },
    logBlogs: function(){
        console.log('This user has done the following');
        this.blogs.forEach(blog => {
            console.log(blog)
        });
    }
};
console.log(user.name)
//changing age
user.age = 35;
console.log(user.age)

//adding methods to the object
user.login();
console.log(user.login())

const name = "mario"
name.toUpperCase()
console.log(name.toUpperCase());

user.logBlogs();
console.log(this)
