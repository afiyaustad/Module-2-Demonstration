
// import { Component } from "react";
import React, {Component} from "react";
class CountdownTimer extends Component
{

    constructor(props) {
        super(props);
        this.state = { count: 10 }; // Initial countdown value
      }
    
      // Start timer when component mounts
      componentDidMount() {
        this.timer = setInterval(() => {
          this.setState((prevState) => ({ count: prevState.count - 1 }));
        }, 1000);
      }
    
      // Stop timer when count reaches 0
      componentDidUpdate() {
        if (this.state.count === 0) {
          clearInterval(this.timer);
        }
      }
    
      // Clear timer when component is removed
      componentWillUnmount() {
        clearInterval(this.timer);
      }
    
      render() {
        return (
          <div>
            <h1>Countdown Timer (Class Component)</h1>
            <h2>{this.state.count > 0 ? this.state.count : "Time's up!"}</h2>
          </div>
        );
      }
} 
export default CountdownTimer;