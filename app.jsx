import './App.css'
import { useState, useEffect } from 'react'  

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  const [string, setstring] = useState(null);
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",

    })
      .then((response) => response.json())
      .then((data) => {
        setstring(data[0]);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  
  
  return (
    <>
      <h1>{user.name}</h1>
       {string && <p>
         {string.name}
       </p>}
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
