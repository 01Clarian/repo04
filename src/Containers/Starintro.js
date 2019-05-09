import React, {Component} from 'react'
import './Starintro.css'
import { Power2, TimelineLite } from "gsap"
import volumeOff from "../Media/volume_off.svg";
import volumeOn from "../Media/volume_on.svg";


class Starintro extends Component {
    constructor() {
        super()
        this.state = {
            muted: true
        }
        this.audio = React.createRef();
        this.intro = React.createRef();
    }

onVolumeClick = () => {
    if (this.state.muted) {
      this.audio.current.muted = false;
    } else {
      this.audio.current.muted = true;
    }

    this.setState({ muted: !this.state.muted });
  };

  componentDidMount() {

    const tl = new TimelineLite();
  tl
  .to(this.intro.current, 4.5, { opacity: 1, delay: 1 })
  .to(this.intro.current, 1.5, {
    opacity: 0,
    onComplete: () => {
      this.audio.current.play();
    }
  })

}
render() {
    return (
    <div>
        
    <section className="intro" ref={this.intro}>
    <p id="here2">
      A long time ago, in a galaxy far,<br /> far away....
    </p>
    </section>
    <audio loop ref={this.audio} muted>
          <source
            type="audio/mpeg"
            src="https://ia801501.us.archive.org/23/items/StarWars_20180709/Star%20Wars.mp3"
          />
        </audio>
        <button className="volume" type="button" onClick={this.onVolumeClick}>
          {/* Icons created by Agarunov Oktay-Abraham from the Noun Project */}
          {/* https://thenounproject.com/agarunov/ */}
          {this.state.muted ? (
            <img src={volumeOff} alt="Volume is off" />
          ) : (
            <img src={volumeOn} alt="Volume is on" />
          )}
        </button>
    </div>
    )
}
}

export default Starintro 