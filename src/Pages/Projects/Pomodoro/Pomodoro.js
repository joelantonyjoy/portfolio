import './pomodoro.css';
import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

class Pomodoro extends React.Component {
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

    constructor(props) 
    { 
        super(props); 
        this.state = {time: '20:00' }; 
    } 

    startTimer = () => {
        var duration = 20*60;
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
}


const Container = styled.div`
    margin: 0px;
    background:teal;
    color:white
`;

const Content = styled.div`
  font-size: 16px;
  padding-top:100px;
  width:80%;
  margin:auto;
  text-align: center;
  font-size:48px;
`;

const Header = styled.h3`
    padding:16px;
    margin:0;
    color:white
`;

const Timer = styled.div`
    padding:16px;
    margin:auto;
    margin-top:40px;
    width:fit-content;
    font-family: none;
    font-size: 40px;
    border:1px black solid;
    color:white;
`;

const Button = styled.button`
    padding:8px 48px;
    color:black;
    font-size:24px;
    border:none;
    transition: background 0.4s;

    &:hover {
        color:white;
        background:black;
    }
    
    &:focus {
        color:black;
        background:white;
        border:none;
        outline:none;
    }
`;

export default Pomodoro;