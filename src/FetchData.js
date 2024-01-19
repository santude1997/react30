import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((resData) => setData(resData))

  }, []);
  return (
    <>
      <h2>Example of FetchData through API</h2>
    
      <div>
        {data ? (
          <ul>
            {data.map((post) => (
              <li key={post.id}>
                ID:{post.id} ||Title: {post.title} || Body:{post.body}<hr/>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <h2>Loading...</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default FetchData;
