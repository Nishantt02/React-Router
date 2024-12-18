import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() { 
    const data = useLoaderData()  // it is the hook for the loader to fetching the data it store in data
    // const [data, setData] = useState([]);
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Nishantt02/followers')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data); // The fetched followers data (which is an array)
    //     });
    // }, []);

    return (
        <div className='text-center m-5 bg-gray-600 text-white text-3xl p-4'>
            Github Followers:{data.length}
        </div>
    );
}

export default Github;

// The async keyword makes this function asynchronous. This means that the function will perform tasks that take time
  // await: The await keyword is used to wait for the result of the fetch() request

export const githubInfoLoader = async() => {
    const response=await fetch('https://api.github.com/users/Nishantt02/followers')
    return response.json()
}