import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

// Loading Images
import cliff from './images/cheerHome/BigBuild.svg';
import boat from './images/cheerHome/Boat1.svg';
import plane from './images/cheerHome/Boat2.svg';
import water from './images/cheerHome/Water.svg';
import Wall from './images/cheerHome/Wall.svg';
import layer2 from './images/cheerHome/Secondary.svg';
import Back1 from './images/cheerHome/Back1.svg';
import Back2 from './images/cheerHome/Back2.svg';

import './cheerHome.css'

// Penguins
import cheerpenguin from './cheerpenguin.svg';

class CheerHome extends Component {
  render() {
    return (
      <div className ="noOverflow cheerHome">
      <Motion style={{x: spring((this.props.open) ? 0 : 500, {stiffness: 30, damping: 40})}}>
        {({x}) =>
          <div className="demo0">
          <img src={Back2} className="back2" alt="Sup" style={{
            WebkitTransform: `translate3d(0, ${x}px, 0)`,
            transform: `translate3d(0, ${x}px, 0)`,
          }}/>
          </div>
         }
      </Motion>        <Motion style={{x: spring((this.props.open) ? 0 : 200, {stiffness: 60, damping: 40})}}>
                {({x}) =>
                  <div className="demo0">
                  <img src={Back1} className="back1" alt="Sup" style={{
                    WebkitTransform: `translate3d(0, ${x}px, 0)`,
                    transform: `translate3d(0, ${x}px, 0)`,
                  }}/>
                  </div>
                 }
              </Motion>
      <Motion style={{y: spring((this.props.open) ? 0 : 700)}}>
          {({y}) =>
            <div className="demo0">
            <img src={water} className="water1" alt="Sup" style={{
              WebkitTransform: `translate3d(0, ${y}px, 0)`,
              transform: `translate3d(0, ${y}px, 0)`,
            }}/>
            </div>
          }
       </Motion>

      <Motion style={{x: spring((this.props.open) ? 0 : 200)}}>
          {({x}) =>
            <div className="demo0">
            <img src={cheerpenguin} className="App-logo" alt="Sup" style={{
              WebkitTransform: `translate3d(${x}px, 0, 0)`,
              transform: `translate3d(${x}px, 0, 0)`,
            }}/>
            </div>
          }
       </Motion>
       <Motion style={{x2: spring((this.props.open) ? 1500 : 450, {stiffness: .2, damping: 26})}}>
         {({x2}) =>
           <Motion style={{x: spring((this.props.open) ? 0 : 200, {stiffness: 60, damping: 26})}}>
             {({x}) =>
               <div className="demo0">
               <img src={boat} className="boat" alt="Sup" style={{
                 WebkitTransform: `translate3d(${x2}px, ${x}px, 0)`,
                 transform: `translate3d(${x2}px, ${x}px, 0)`,
               }}/>
               </div>
              }
           </Motion>
         }
      </Motion>
        <Motion style={{x: spring((this.props.open) ? 0 : -200, {stiffness: 60, damping: 40})}}>
          {({x}) =>
            <div className="demo0">
            <img src={cliff} className="cliff" alt="Sup" style={{
              WebkitTransform: `translate3d(${x}px, 0, 0)`,
              transform: `translate3d(${x}px, 0, 0)`,
            }}/>
            </div>
           }
        </Motion>
        <Motion style={{x: spring((this.props.open) ? 0 : -500, {stiffness: 60, damping: 40})}}>
          {({x}) =>
            <div className="demo0">
            <img src={layer2} className="layer2" alt="Sup" style={{
              WebkitTransform: `translate3d(${x}px, 0, 0)`,
              transform: `translate3d(${x}px, 0, 0)`,
            }}/>
            </div>
           }
        </Motion>
        <Motion style={{x: spring((this.props.open) ? 0 : -500, {stiffness: 60, damping: 40})}}>
          {({x}) =>
            <div className="demo0">
            <img src={Wall} className="wall" alt="Sup" style={{
              WebkitTransform: `translate3d(${x}px, 0, 0)`,
              transform: `translate3d(${x}px, 0, 0)`,
            }}/>
            </div>
           }
        </Motion>
        <Motion style={{x2: spring((this.props.open) ? 0 : 1000, {stiffness: .15, damping: 26})}}>
          {({x2}) =>
                <Motion style={{x: spring((this.props.open) ? 300 : 500)}}>
                  {({x}) =>
                    <div className="demo0">
                    <img src={plane} className="plane" alt="Sup" style={{
                      WebkitTransform: `translate3d(${x + x2}px, 0, 0)`,
                      transform: `translate3d(${x + x2}px, 0, 0)`,
                    }}/>
                    </div>
                   }
               </Motion>
           }
        </Motion>
        <Motion style={{y: spring((this.props.open) ? 0 : 700)}}>
            {({y}) =>
              <div className="demo0">
              <img src={water} className="water2" alt="Sup" style={{
                WebkitTransform: `translate3d(0, ${y}px, 0)`,
                transform: `translate3d(0, ${y}px, 0)`,
              }}/>
              </div>
            }
         </Motion>
  </div>
    );
  }
}
export default CheerHome;
