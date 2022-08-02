import React from "react";
import { pixels } from "./pixels";

function App() {
    return (
        <div className="w-screen h-screen grid grid-cols-4 grid-rows-4">
            {pixels.map((pixel, index) => {
                return <div className="h-full w-full border-2 border-black" key={index} style={{ backgroundColor: pixel.color }}></div>;
            })}
        </div>
    );
}

export default App;
