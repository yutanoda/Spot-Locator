import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Home.css';
import JoinBtn from '../../components/UI/Btn/JoinBtn/JoinBtn';

function Home() {
  return (
    <Aux>
      <div className={classes.Container}>
        <JoinBtn />
        <div className={classes.SubContent}>
          <div className={classes.Box1}>
            <div className={classes.Box1Content}>
              <h3 className={classes.Box1Title}>Quick Tutorial</h3>
              <p className={classes.Box1Sentence}>The Spots is a web platform that enables you to publish favorite spots easily  </p>
            </div>
          </div>
          <div className={classes.Box2}>aaa</div>
        </div>
      </div>
    </Aux>
  )
}

export default Home;