import './pomodoro.css';
import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

class Pomodoro extends React.Component {
    render(){
        return(
        <Container>
        <Header><Link className="links" to="/projects"> Projects </Link><span style={{fontFamily:'fontLightRegular'}}>&#62;</span><span> Pomodoro</span></Header>
            <TimerContainer>
            <Content>
            <ActionButtons>
                <PomodoroButton>
                    Pomodoro
                </PomodoroButton>
                <BreakButton>
                    Break
                </BreakButton>
            </ActionButtons>
            <Timer>{this.state.time}</Timer>
            <StartButton onClick={this.startTimer}>Start</StartButton>
            </Content>
            </TimerContainer>
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
    color:white;
    min-height:88vh;
    font-family: 'fontMediumRegular';
`;

const TimerContainer = styled.div`
    margin: auto;
    background:teal;
    color:white;
    font-family: 'fontMediumRegular';
`;

const Content = styled.div`
  padding-top:40px;
  margin-top:50px;
  background-color: rgba(255, 255, 255, 0.1);
  width:50%;
  min-width:288px;
  margin: 48px auto;
  display:flex;
  flex-direction: column;
  justify_content: center;
  align-items: center;
  font-size:32px;
  border-radius: 8px;
  @media (max-width: 768px) {
      margin: 32px auto;
      }
`;

const ActionButtons = styled.div`
    display:flex;
    justify-content:space-evenly;
    @media (max-width: 768px) {
        flex-direction:column;
        }
`;

const PomodoroButton = styled.button`
    padding: 12px 40px;
    color: white;
    border-radius: 8px;
    background: #76bcbd;
    border:none;
    margin: 32px;
    font-size:24px;
    font-weight: bold;
    transition: background 0.4s;

    &:hover {
        
    }
    
    &:focus {
        outline:none;
    }

    @media (max-width: 768px) {
        font-size: 18px;
        margin:16px;
        }
`;

const BreakButton = styled.button`
    padding: 12px 40px;
    color: white;
    width:200px;
    border-radius: 8px;
    background: teal;
    border:none;
    margin: 32px;
    font-size:24px;
    font-weight: bold;
    transition: background 0.4s;

    &:hover {
    background: #76bcbd;
    }
    
    &:focus {
        outline:none;
    }
    @media (max-width: 768px) {
        font-size: 18px;
        margin:16px;
        }
`;

const Header = styled.h3`
    padding:16px;
    margin:0;
    color:white
`;

const Timer = styled.div`
    margin:32px auto;
    width:fit-content;
    font-size: 96px;
    font-weight: bold;
    color:white;
`;

const StartButton = styled.button`
    padding: 12px 40px;
    color: teal;
    width:200px;
    border-radius: 8px;
    background: white;
    border:none;
    margin: 32px;
    font-size:24px;
    font-weight: bold;
    transition: background 0.4s;

    &:hover{
        color: black;
    }
    
    &:focus {
        border:none;
        outline:none;
    }
`;

export default Pomodoro;