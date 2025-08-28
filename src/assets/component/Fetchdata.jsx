import React, {UserEffect} from 'react'

const Fetchdata = () => {

    UserEffect(() => {

        const FeatchDataFromApi = async () => {
            const api = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await api.json();
            console.log("my data = " , data)
        }
        FeatchDataFromApi();
    }, []);
  return <div>Fetch_data</div>
};

export default Fetchdata