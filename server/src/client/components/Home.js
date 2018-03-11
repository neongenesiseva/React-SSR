import React from 'react';

const Home = ()=>{
    return (
        <div>
            <button onClick={()=>{console.log("clicked")}}>click</button>
            <div>I'm the root Home Component</div>
        </div>
    )
}

export default Home;