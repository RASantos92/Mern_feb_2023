import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: this.props.start || 0,
            clickTimes : []
        }
    }



    render(){
        return <>
        <h1>{this.props.title}</h1>
        <button onClick={()=>{
            this.setState({
                ...this.state,
                count: this.props.step ? this.state.count + this.props.step : this.state.count + 1,
                clickTimes : [...this.state.clickTimes, new Date()]
            })
        }}>Count {this.state.count}</button>
            <h4>ClickTimes:</h4>
            {
                this.state.clickTimes.map((time, i) => {
                    return (
                        <p key={i}>{time.getDate()} {time.getFullYear()}</p>
                    )
                })
            }
        </>
    }
}

export default Counter;