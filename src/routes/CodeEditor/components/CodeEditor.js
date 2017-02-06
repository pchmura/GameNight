import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import axios from 'axios';
require('codemirror/mode/javascript/javascript');

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    console.log("codeEditor props", this.props)
    this.state = {
      code: '',
      results: '',
      // timeRemaining: 60,
      // prevTime: null,
      timeElapsed: 0,
      startingTime: null,
      playerProgress: [0, 0],
      playerNumber: 0,
      numberOfQuestions: 2, 
      currentQuestionID: 0
    }
    this.updateCode = this.updateCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    // this.tick();

    // update playerNumber here using sockets
    // this is dummy code for now
    const startingTime = Date.now();
    this.setState({
      playerNumber: 1,
      startingTime: startingTime,
      
    })
  }
  // when component mounts can you save the start time
  // then when you submit, send the difference?

  // put socket.on in handleSubmit? will this work?

  // componentDidUpdate(){
    // this.tick();
  // }

  // tick(){
  //   setTimeout(() => {
  //     var currentTime = Date.now();
  //     var dt = this.state.prevTime ? (currentTime - this.state.prevTime) : 0;
  //     var timeRemaining = Math.max(this.state.timeRemaining - dt/1000, 0);
  //     this.setState({
  //       timeRemaining: timeRemaining,
  //       prevTime: currentTime
  //     });
  //   }, 1000);
  // }


  updateCode(newCode) {
    this.setState ({
      code: newCode
    });
  }

  handleSubmit() {
    // console.log('handleSubmit works if this shows your code', this.state.code);
    const startingTime = this.state.startingTime;
    const playerNumber = this.state.playerNumber;
    const playerProgress = this.state.playerProgress;
    console.log("inside handleSubmit");
    console.log(socket);
    axios.post('/api/code', {
      code: this.state.code,
      timeElapsed: (Date.now() - startingTime)/1000,
      // use playerNumber in playerProgress array
      // to figure out where you are in tests
      playerNumber: this.state.playerNumber,
      playerProgress: this.state.playerProgress,
      currentQuestionID: this.props.currentQuestionID.questionID,
      room: this.props.roomID,
      socketID: socket.id
    })
    .then(response => {





       this.setState({results: response.data});
      // //console.log("response from running code: ", response.data );
      // // console.log('saved successfully');
      // console.log(this.state.results);
      // console.log(this.state.results[this.state.results.length-1] === "1");

      // if(this.state.results[this.state.results.length-1] === "1"){
      //   console.log('emitting correct response from front-end')
      //   socket.emit('correct response', {
      //     playerNumber: this.state.playerNumber,
      //     playerProgress: this.state.playerProgress
      //   });
      //   socket.on('update progress', (playerProgress) => {
      //     this.setState({
      //       playerProgress: playerProgress
      //     })
      //   })

      //   // check if game is won

      //   // console.log(playerProgress[playerNumber -1],this.state.numberOfQuestions - 1);
      //   if (playerProgress[playerNumber - 1] === this.state.numberOfQuestions - 1){
      //     console.log(playerNumber + " won!");
      //   }

        // want to leave game if you solved final question correctly
        // socket.on('disconnect', function(){
        //   console.log('socket id ' + socket.id + ' has disconnected. : (');
        // })
      //}

    })

  }
  render() {
    var options = {
      mode: "javascript",
      lineNumbers: true
    };

    return (
      <div>
        <h1>Enter Code</h1>
        <div>
          <CodeMirror
            value={this.state.code}
            onChange={this.updateCode}
            options={options}
          />
        </div>
        <button onClick={this.handleSubmit}>SUBMIT</button>
        <h2>Your answer</h2>
        <form>
          <textarea rows="10" cols="100" value={this.state.results}></textarea>
        </form>
      </div>
    );
  }
}




export default CodeEditor
