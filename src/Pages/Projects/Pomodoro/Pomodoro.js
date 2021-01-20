import './pomodoro.css';
import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0px;
  width:100%;
  background:teal;
`;

const Content = styled.div`
  font-size: 16px;
  padding-top:100px;
  width:80%;
  margin:auto;
  height:100vh;
  text-align: center;
`;

const Header = styled.h3`
padding:16px;
margin:0;
`;

const Timer = styled.div`
padding:16px;
margin:0;
`;

const Button = styled.button`
width:100px;
height: fit-content;
padding:8px;
`;

class Pomodoro extends React.Component {
    constructor(props) 
    { 
        super(props); 
        this.state = {time: '06:00' }; 
    } 
    // startTimer(){
    //     setInterval(() => {
    //         this.setState({time: this.state.time - 1 }); 
    //     }, 1000);
        
    // }

    startTimer = () => {
        var duration = 6*60;
        var timer = duration, minutes, seconds,currentTime;
        setInterval(()=>{
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            currentTime = minutes + ":" + seconds;
            this.setState({time: currentTime }); 
            if (--timer < 0) {
                timer = duration;
            }    
        }, 1000);
    }

    render(){

        return(
        <Container>
        <Header><Link className="links" to="/projects"> Projects </Link><span style={{fontFamily:'fontLightRegular'}}>&#62;</span><span> Pomodoro</span></Header>
        <hr style={{height: '1px',color: 'black',
            backgroundColor: 'black',border: 'none'}}></hr>
            <Content> Pomodoro Timer 
            <Timer>{this.state.time}</Timer>
            <Button onClick={this.startTimer}>Start</Button>
            </Content>
        </Container>
        )
    }
}

export default Pomodoro;