import React, { Component }from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
    playAudio() {
      const audioEl = document.getElementsByClassName("audio-element")[0]
      audioEl.play()
    }
    render() {
      return (
        <div>
          <button onClick={this.playAudio}>
            Ziggy Test
          </button>
          <audio className="audio-element">
            <source src="https://res.cloudinary.com/gregdusek/video/upload/v1617121088/Ziggy%20Clips/Ziggy_INeedARide_pj4oli.mp3"></source>
          </audio>
        </div>
      )
    }
  }