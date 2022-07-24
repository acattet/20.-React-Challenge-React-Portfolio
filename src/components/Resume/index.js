import React from "react";


//I cant figure out how to turn a pdf into a link without having to pay for it, the link should bring it to a google docs to download the resume
function Resume() {
    return (
        <section>
            <h2>Resume</h2>
            <div className="content">
                
                <a href="https://drive.google.com/file/d/1OvnE0ReaPxBK_suXkdrdJJTPkBcktwTA/view?usp=sharing" download>
                    Click to download
                    </a>
            </div>

            <div className="proficiencies">
                <br></br>
                <h3>Front End</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <br></br>
                <h3>Back End</h3>
                <ul>
                    <li>API's</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>Mongo</li>
                    <li>Rest</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;