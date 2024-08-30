"use client";

export default function GetUserData() {

    const getUserDataFromAPI = async()=> {
        const userData = await fetch('http://localhost:3001/login/get-user-info/')
         {
            "method": "GET" ,
            headers: {
                "content-type": "application/json
      
    }
};
};

  return <div>User Data</div>;
}
