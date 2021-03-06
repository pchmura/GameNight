import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ReactHowler from 'react-howler';

const customStyles = {
  overlay: {
    zIndex: '6'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class ExampleModal extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      modalIsOpen: this.props.modalIsOpen
    };
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
          contentLabel="No Overlay Click Modal"
        >
          <img
            alt='Ah Ah Ah! You didnt say the magic word'
            className='magicWord'
            src='https://media.giphy.com/media/uOAXDA7ZeJJzW/giphy.gif' />
        </Modal>
        <ReactHowler
          src='http://wavcentral.com/sounds/movies/jurassic/jurass01.mp3'
          playing={this.props.modalIsOpen}
          loop={true}
        />

      </div>
    );
  }
}

export default ExampleModal;