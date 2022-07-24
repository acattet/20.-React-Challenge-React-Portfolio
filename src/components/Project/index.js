import React, { useState } from "react";

function Project() {
    const [projects] = useState([
    
        {
            name: "Weather Dashboard",
            link: "https://github.com/acattet/6.-Server-Side-APIs-Challenge-Weather-Dashboard",
            imageType: "dark",
        },
        
        {
            name: "Password Generator",
            link: "https://github.com/acattet/3.-JavaScript-Challenge-Password-Generator",
            imageType: "dark",
           
        },
        {
            name: "Coding Quiz",
            link: "https://github.com/acattet/4.-Web-APIs-Challenge-Code-Quiz",
            imageType: "dark",
            
        },
        {
            name: "README Generator",
            link: "https://github.com/acattet/9.-Node.js-Challenge-Professional-README-Generator",
            imageType: "light",
           
        },
       
        {
            name: "TravelFog",
            link: "https://github.com/Auzzie1790/travelfog",
            imageType: "dark",
        },
      {
            name: "Original Portfolio",
            link: "https://github.com/acattet/-2.-Advanced-CSS-Professional-Portfolio",
            imageType: "light",
        },
        {
            name:"Chat Like It's 2010",
            link: "https://safe-badlands-41799.herokuapp.com",
            link: "https://github.com/Auzzie1790/chat_like_its_2010",
            imageType: "light",
        },
    ]);

    return (
        <>
            {projects.map((image, i) => (
                <article className={image.imageType} key={image.name}>
                    <a href={image.link}>
                        <img src={require(`../../assets/images/${i}.png`)} alt=""/>
                        <div className={!image.multiline ? ("") : ("multiline")}>{image.name}</div>
                    </a>
                </article>
            ))}
        </>
    );
}

export default Project;