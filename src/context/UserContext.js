import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const UserContext = createContext();

export const Axios = axios.create({
    baseURL: 'https://punditsoftech.com/php-auth-api/',
    // baseURL: 'http://localhost/php-auth-api/',

});

export const UserContextProvider = ({children}) => {

    const [theUser, setUser] = useState(null);
    const [wait, setWait] = useState(false);

        //const registerUser = async ({name,email,password,sex,address}) => {
        const registerUser = async ({formGridName,formLastName,formGridPhone,formGridEmail,formGridPassword,formPasswordRetyped,formGridAddress1,formGridCountry,formGridState,formGridZip}) => { 
        var name = formGridName;
        var lastname = formLastName;
        var phone = formGridPhone;
        var email = formGridEmail;
        var password = formGridPassword;
        var passwordretyped = formPasswordRetyped;
        var address = formGridAddress1;
        var country = formGridCountry;  
        //var currentcountry = formCurrentCountry;    
        var state = formGridState; 
        var postalzip = formGridZip; 
        var matchedpassword = 0; 

        //alert("User Contect Country " + country);

        //alert("changeHandler country Label " + formCurrentCountry.label);
        //alert("changeHandler country ID " + formCurrentCountry.value);

        const current = new Date();
        //const registerdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        const registerdate = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
        //alert ("registration date " + registerdate);

        //alert("Password - " + password);
        //alert("Retyped Password - " + passwordretyped);

        if (formGridPassword === formPasswordRetyped) {
            matchedpassword = 1;
            //alert("matchedpassword - " + matchedpassword);
        }
        else {
            matchedpassword = 0;
            //alert("matchedpassword - " + matchedpassword);
        }

        setWait(true);
        try{
            const {data} = await Axios.post('register.php',{
                name,
                lastname,
                phone,
                email,
                password,
                passwordretyped,
                matchedpassword,
                country,
                address,
                state,
                postalzip,
                registerdate
            });
            setWait(false);
            //alert("Success" +  formGridLastName); 
            //alert("Success" +  lastname);
            return data;
        }
        catch(err){
            setWait(false);
            //alert("fail" +  formGridLastName); 
            //alert("fail" + lastname);
            return {success:0, message:'Server Error!'};
        }
    }
    
    //const registerUser = async ({name,email,password,sex,address}) => {
    {/* const registerUser = async ({name,email,password,country,address}) => {  
        setWait(true);
        try{
            const {data} = await Axios.post('register.php',{
                name,
                email,
                password,
                country,
                address
            });
            setWait(false);
            return data;
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
    } */}

    const loginUser = async ({email,password}) => {
        setWait(true);
        try{
            const {data} = await Axios.post('login.php',{
                email,
                password 
            });
            if(data.success && data.token){
                localStorage.setItem('loginToken', data.token);
                setWait(false);
                return {success:1};
            }
            setWait(false);
            return {success:0, message:data.message};
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }

    }

    const getIntend = async () =>{
        setWait(true);
        try{
            const {data} = await Axios.post('createPaymentIntend.php',{});
            setWait(false);
            return data["intend"];
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
    }

    const getAllUsers = async () =>{
        setWait(true);
        try{
            const {data} = await Axios.post('getAllusers.php',{});
            setWait(false);
            return data;
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
    }
    const getHashKeys = async (email) =>{
        setWait(true);
        try{
            const {data} = await Axios.post('getAllHashkey.php',{email:email});
            setWait(false);
            return data;
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
    }
    const getPayment = async (email) =>{
        setWait(true);
        try{
            const {data} = await Axios.post('getPayment.php',{email});
            setWait(false);
            return data;
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
    }

    const addHashkey = async (email,keeptagname,hashkey) => {
        setWait(true);
        try{
            const {data} = await Axios.post('addHashkey.php',{email:email,name:keeptagname,hashkey:hashkey});
            setWait(false);
            console.log("pp",data);
            return data;
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
    }
    const addPayment = async (hashkey) => {
        setWait(true);
        try{
            const {data} = await Axios.post('addPayment.php',{hashkey:String(hashkey)});
            setWait(false);
            console.log("pp",data);
            return data;
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
    }
    const loggedInCheck = async () => {
        const loginToken = localStorage.getItem('loginToken');
        Axios.defaults.headers.common['Authorization'] = 'Bearer '+loginToken;
        if(loginToken){
            const {data} = await Axios.get('getUser.php');
            if(data.success && data.user){
                setUser(data.user);
                return;
            }
            setUser(null);
        }
    }

    useEffect(() => {
        async function asyncCall(){
            await loggedInCheck();
        }
        asyncCall();
    },[]);

    const logout = () => {
        localStorage.removeItem('loginToken');
        setUser(null);
    }

    return (
        <UserContext.Provider value={{registerUser,loginUser,getPayment,addHashkey,getIntend,getHashKeys,addPayment,wait, user:theUser,loggedInCheck,logout,getAllUsers}}>
            {children}
        </UserContext.Provider>
    );

}

export default UserContextProvider;