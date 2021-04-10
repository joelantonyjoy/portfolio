import './pomodoro.css';
import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

class Pomodoro extends React.Component {
    render(){
        return(
        <Container id='project-container'>
        <Header>
            <Link className="links" to="/projects"> Projects </Link>
            <span style={{fontFamily:'fontLightRegular'}}>&#62;</span>
            <span> Pomodoro</span>
        </Header>
            <TimerContainer>
            <Content>
            <ActionButtons>
                <PomodoroButton onChange={this.updateTimerMode}>
                <input style={{display:'none'}} type='radio' id='Pomodoro' value='Pomodoro' name='timerMode' defaultChecked={true} />
                <InputLabel htmlFor='Pomodoro'>Pomodoro</InputLabel> 
                </PomodoroButton>
                <BreakButton onChange={this.updateTimerMode}>
                <input style={{display:'none'}} type='radio' value='Break' name='timerMode' id='Break' />
                <InputLabel htmlFor='Break'>Break</InputLabel> 
                </BreakButton>
            </ActionButtons>
            <Timer>{this.state.time}</Timer>
            <StartButton onClick={this.startTimer}>{this.state.isStarted?'PAUSE':'START'}</StartButton>
            </Content>
            <TimerQuote>{this.state.selectedMode === 'Pomodoro'?`Let's work smart !!`: `Let's take a break :)`}</TimerQuote>
            </TimerContainer>
        </Container>
        )
    }

    constructor(props) 
    { 
        super(props); 
        this.state = {time: '10:00', isStarted: false ,duration: 600, isInitialised: false,selectedMode : 'Pomodoro'}; 
    }
    updateTimerMode = () => {
        let timerModes = document.getElementsByName('timerMode');
        timerModes.forEach( timerMode => {
            if(timerMode.checked){
                this.setState({selectedMode:timerMode.value}); 
                timerMode.parentNode.style.background = 'rgba(255,255,255,0.2)';
            } else {
                timerMode.parentNode.style.background = 'none';
            }
        });
        if(this.state.selectedMode !== 'Pomodoro'){
            this.setState({time: '10:00',duration: 600, isStarted: false});
            document.getElementById('project-container').style.background = 'rgb(210 56 51)';
        } else {
            this.setState({time: '05:00',duration: 300, isStarted: false});
            document.getElementById('project-container').style.background = 'teal';
        }
    }
    
    startTimer = (e) => {
        var minutes,seconds,currentTime,timer;
        this.setState({isStarted: !this.state.isStarted});
        if(!this.state.isStarted){
            console.log("inside : " + this.state.duration );
            if(!this.state.isInitialised){
                this.setState({isInitialised: true});
                timer = this.state.duration
                var timeInterval = setInterval(() => {
                    if(this.state.isStarted){
                        if (timer-- <= 0) {
                            if(this.state.selectedMode === 'Pomodoro'){
                                alert("Take a break");
                            } else {
                                alert("Get back to work");
                            }
                            clearInterval(timeInterval);
                        } else {
                            minutes = parseInt(timer / 60, 10);
                            seconds = parseInt(timer % 60, 10);
                            minutes = minutes < 10 ? "0" + minutes : minutes;
                            seconds = seconds < 10 ? "0" + seconds : seconds;
                            currentTime = minutes + ":" + seconds;
                            this.setState({time: currentTime }); 
                        }
                    }
                }, 1000);
            }
        }
    }
}


const Container = styled.div`
    margin: 0px;
    background:rgb(210 56 51);
    color:white;
    min-height:88vh;
    font-family: 'fontMediumRegular';
    transition: all 1s;
`;

const TimerContainer = styled.div`
    margin: auto;
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

const InputLabel = styled.label`
    position:relative;
    height:100%;
    width:100%;
    cursor:pointer;
    top: 0;
    left: 0;
    `;

const PomodoroButton = styled.button`
    position:relative;
    padding: 12px 32px;
    color: white;
    border-radius: 8px;
    background:rgba(255,255,255,0.2);
    border:none;
    width:200px;
    margin: 32px;
    font-size:24px;
    font-weight: bold;
    transition: background 0.4s;
    
    &:focus {
        outline:none;
    }

    @media (max-width: 768px) {
        font-size: 18px;
        margin:16px 16px 0;
        }
`;

const BreakButton = styled.button`
    position:relative;
    padding: 12px 32px;
    color: white;
    width:200px;
    border-radius: 8px;
    background: none;
    border:none;
    margin: 32px;
    font-size:24px;
    font-weight: bold;
    transition: background 0.4s;
    
    &:focus {
        outline:none;
    }
    @media (max-width: 768px) {
        font-size: 18px;
        margin:16px 16px 0;
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
    width:200px;
    border-radius: 8px;
    background: white;
    border:none;
    margin: 32px;
    font-size:24px;
    font-weight: bold;
    transition: background 0.4s;
    box-shadow: rgb(235 235 235) 0px 6px 0px;

    &:focus {
        border:none;
        outline:none;
    }
`;

const TimerQuote = styled.p`
    text-align: center;
    padding-bottom: 32px;
    margin: 0;
    font-weight: 600;
    `;

export default Pomodoro;