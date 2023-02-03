import React from "react";
import css from "./css/NavBarSimple.module.css"

// 1.0 Create class component (as a regular class) DONE
// 1.1 Extend class component through React ("extends React.Component") DONE
// 1.2 Define a render method and return DONE
// 1.2 Pass in greeting prop in class (don't forget "this"!)
//
// 1.3 Add state to a class component: First define the constructor,  
//     call super, then add the initial state object inside the constructor.
//     Add constructor, a special method that is always called when the class is first instantiated.
//     
// 1.4.0 Add event handler to class component, example: Add onClick attribute, define handleClick method in
//       class component, call setState method containing objects in handleClick method, 
//       add callback function "() => {" after setState method to render properly in console. 
//
// 1.4.1 Add ternary condition to event handler, to change from "Hello! / Exit" to "Goodbye! / Enter"
//       with === and ? :

// 1.4.2 Continue to add third rule of updating the state, follow supplied the "Updating the State - Cheat Sheet"
//
class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            buttonText: "log in",
        };
    }

    handleClick() {
        this.setState((prevState) => {
            console.log("Previous State:", prevState);
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
            };
        });
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>
                    <button onClick={() => this.handleClick()}>{this.state.message}</button>
                    <button>{this.state.buttonText}</button>
                </span>
            </div>
        );
    }
}

export default NavBarSimple;
