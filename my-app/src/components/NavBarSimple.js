import React from "react";
import css from "./css/NavBarSimple.module.css"

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
