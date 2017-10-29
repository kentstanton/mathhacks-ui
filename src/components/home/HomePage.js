import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div>
            <div className="jumbotron">
                <h1>MathHacks</h1>
            </div>
            <p>The idea is simple. Mathematics is a gateway to success in our modern world. Sure, lots of people who struggled with math 
                in school are successful (whatever that means). They find ways to work around being "bad at math". 
                But why make it hard on yourself. Treating math as a valuable skill opens doors. It opens doors academically and it's a 
                powertool for living.
                </p>
                <p>
                But there is this one thing we need to get out of the way right up front. Learning math takes effort. The problem we are 
                trying to solve is that lots of students struggle with math because they missed things. Important, foundational, things that
                you need to know to be successful with math in school and to use math to do stuff. That's what this website is all about. 
                Figuring out where your gaps are. And then helping your fill them in. You have to practice. That's the bottome line. 
                You want to play the guitar? You have
                to practice. Baseball? You have to practice. Drawing or playing Call of Duty, or killing flies by shooting rubber bands at them?
                Practice.  
                </p>
                <p>
                So what about the "hacks"? Why is this site and our approach named "MathHacks". The answer is that there is one more thing. 
                You need to find and fill your personal math gaps, but as you do you'll start to see how a few rules, recipies and formulas 
                can take you a long way when solving math problems. Especially problems on tests. We want to help you see math as an essential tool
                for living. But part of that is larning how to succeed in your math courses so that those doorways we talked about earlier stay open.  
                </p>
                <p>
                That's the whole pitch. We are trying really hard to keep this site focused and simple. You have to be willing to give it a try, there's no
                way around that.
                </p>
                <p>
                If this is your first visit take a look at the Getting Started page or just poke around to see what's here. 
                If you are returning, sign in to pick-up where you left off.  
                </p>
                <p>
                And right up front. If you go ahead and create an account use a user name and password that protects your identidy. 
                We won't do anything that might violate your trust but the Internet is full of people who will. So protect your privacy 
                everywhere you can. We don't need to know who you are so don't tell us.
                </p>
            </div>                
        );
    }
}

export default HomePage;