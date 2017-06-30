import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

// Loading Images
import iceberg from './iceberg.svg';
import water from './water2.svg';
import boat from './boat.svg';
import cloud from './cloud.svg';

// Penguins
import cheerpenguin from './cheerpenguin.svg';

class Cheer extends Component {
  render() {
    return (
      <div className ="noOverflow">
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

        <Motion style={{x: spring((this.props.open) ? 0 : 900, {stiffness: 180, damping: 40})}}>
          {({x}) =>
            <div className="demo0">
            <img src={iceberg} className="iceberg" alt="Sup" style={{
              WebkitTransform: `translate3d(${x}px, 0, 0)`,
              transform: `translate3d(${x}px, 0, 0)`,
            }}/>
            </div>
           }
        </Motion>

        <Motion style={{x2: spring((this.props.open) ? 700 : 0, {stiffness: .6, damping: 26})}}>
          {({x2}) =>
            <Motion style={{x: spring((this.props.open) ? 0 : -200)}}>
              {({x}) =>
                <div className="demo0">
                <img src={boat} className="boat" alt="Sup" style={{
                  WebkitTransform: `translate3d(${x+x2}px, 0, 0)`,
                  transform: `translate3d(${x+x2}px, 0, 0)`,
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


         <Motion style={{x2: spring((this.props.open) ? 700 : 0, {stiffness: .15, damping: 26})}}>
           {({x2}) =>
                 <Motion style={{x: spring((this.props.open) ? 0 : -300)}}>
                   {({x}) =>
                     <div className="demo0">
                     <img src={cloud} className="cloud cloud1" alt="Sup" style={{
                       WebkitTransform: `translate3d(${x + x2}px, 0, 0)`,
                       transform: `translate3d(${x + x2}px, 0, 0)`,
                     }}/>
                     </div>
                    }
                </Motion>
            }
         </Motion>

         <Motion style={{x2: spring((this.props.open) ? 700 : 0, {stiffness: -.2, damping: 26})}}>
           {({x2}) =>
           <Motion style={{x: spring((this.props.open) ? 0 : -100)}}>
             {({x}) =>
               <div className="demo0">
               <img src={cloud} className="cloud cloud2" alt="Sup" style={{
                 WebkitTransform: `translate3d(${x+x2}px, 0, 0)`,
                 transform: `translate3d(${x+x2}px, 0, 0)`,
               }}/>
               </div>
              }
           </Motion>
         }
      </Motion>

      <Motion style={{x2: spring((this.props.open) ? 700 : 0, {stiffness: .1, damping: 26})}}>
        {({x2}) =>
         <Motion style={{x: spring((this.props.open) ? 0 : 400)}}>
           {({x}) =>
             <div className="demo0">
             <img src={cloud} className="cloud cloud3" alt="Sup" style={{
               WebkitTransform: `translate3d(${x+x2}px, 0, 0)`,
               transform: `translate3d(${x+x2}px, 0, 0)`,
             }}/>
             </div>
            }
         </Motion>
       }
    </Motion>

    <Motion style={{x2: spring((this.props.open) ? 700 : 0, {stiffness: -.1, damping: 26})}}>
      {({x2}) =>
        <Motion style={{x: spring((this.props.open) ? 0 : 700)}}>
          {({x}) =>
            <div className="demo0">
              <img src={cloud} className="cloud cloud4" alt="Sup" style={{
                WebkitTransform: `translate3d(${x+x2}px, 0, 0)`,
                transform: `translate3d(${x+x2}px, 0, 0)`,
              }}/>
            </div>
           }
        </Motion>
      }
   </Motion>
  </div>
    );
  }
}
export default Cheer;
