*GetAllUser/ (GET)
> https://developerjwt.herokuapp.com/api/auth/users

/*Register/ (POST)
> https://developerjwt.herokuapp.com/api/auth/register (body) => {"name":"Aakash", "email":"aa@gmail.com","password":"12345678","phone":343432,role?":"user"}

*Login (POST) 
> https://developerjwt.herokuapp.com/api/auth/login (body) => {"email":"aa@gmail.com","password":"12345678"} (response)=> {auth:true,token:'dgsdg'}

/*UserInfo/ (GET) 
> https://developerjwt.herokuapp.com/api/auth/userinfo (Header) => {'x-access-token':'token value from login'}