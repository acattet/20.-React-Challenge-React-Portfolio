import React from 'react';
//pretty much copied my BIO from the first portfolio. nothing has changed since lol
function About() {
  return (
    <>
            <section className="infobox">
              
            </section>
            <section id="about-me">
                <h2>About Me</h2>
                <div className="content">
                <img src={require(`../../assets/images/me.jpg`)} width="300" alt="my profile" />
                    <p> 
            My name is Anthony Cattet and I grew up in Ferney Voltaire, France. I have been in the states for about 10 years and have spent my time learning as much as I could. I've spent six years in college, changing my major each semester so that I could have access to the most interesting classes. </p>
            <p>I eventually dropped out with a General Education degree since I never fully completed a major. I went into the workforce and got a wide range of jobs. All from Customer Service representative, to Bell Boy at the JW Marriott. A Dialysis technician for a bit, and currently a Multimedia Manager for a Non-Profit. I have been cruising in life for a long time and it wasnt until recently that I found out how easy it was to get into tech. Tech is such a scary subject as an outsider. It's working with a completely different language and problem solving and long nights in front of the computer. However, it seemed entirely possible! I already know 3 languages, so whats one more? For my birthday I ask for puzzles, so how about another one? I already stay up too late, so why not stay up for a purpose.</p>
              <p> After being exposed to the coding world, the possibilities seem endless. I spend my freetime watching tips and tricks for coding. I watch youtube videos on the "Top 10 Best Website Layouts!" I have never been more sure about a career than I do now. It is still early on in my training, but I can tell my life is headed into the right direction.
         </p>
                   
                </div>
            </section>
        </>
    );
}
export default About;