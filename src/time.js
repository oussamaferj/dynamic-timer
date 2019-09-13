import React from 'react';
import ReactDOM from 'react-dom';



class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.time = null;
        this.state = {
            name: true,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };


    }
    handleClick = () => {
        if (!this.state.name) {
            clearInterval(this.time);
            this.setState({
                name: true,
            })
        }
        else {
            this.time = setInterval(
                () => {
                    // this.state.timer ++
                    this.setState({
                        name: false
                    })
                    this.setState({
                        seconds: this.state.seconds + 1

                    })
                    if (this.state.seconds == 60) {
                        this.setState({
                            seconds: 0,
                            minutes: this.state.minutes + 1

                        })
                    }
                    else if (this.state.minutes == 60) {
                        this.setState({
                            minutes: 0,
                            hours: this.state.hours + 1
                        })
                    }
                },
                1000
            )
        }

    }
    resetClick = () => {
        this.setState({
            seconds: 0,
            minutes: 0,
            hours: 0
        }


        )



    }
    // handleClick2 = () => {
    //     clearInterval(this.time);
    //     this.setState({
    //         name: true,
    //     })

    // }
    render() {
        return (

            <div >

                <p className="timer">{ String(this.state.hours).padStart(2, '0')}:{String(this.state.minutes).padStart(2, '0')}:{ String(this.state.seconds).padStart(2, '0')}</p>
               
                <div className="hms">
                    <p>Hour</p>
                    <p>Minutes</p>
                    <p>Second</p>

                </div>
                <div className="Buttons">
                    <button className="b1 button" onClick={this.handleClick}>{this.state.name ? 'Start' : 'Pause'}</button>
                    <button className="b2 button" onClick={this.resetClick}>Reset</button>
                </div>
            </div>

        );
    }
}
export default Timer;
