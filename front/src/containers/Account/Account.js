import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Input from '../../components/UI/Input/ProfileInput/ProfileInput';
import SaveBtn from '../../components/UI/Btn/SaveBtn/SaveBtn';
import { Link } from 'react-router-dom'
import classes from './Account.css';
import logo from '../../logo.svg';
import { FaRegMap, FaRegGrinAlt} from 'react-icons/fa';
import { RiMapPin2Line } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";

function Home() {
  return (
  <Aux>
      <form>
        <div className={classes.Container}>
          <div className={classes.MenuContainer}>
            <ul className={classes.MenuBar}>
              <li className={classes.MenuList}><Link to='/' className={classes.MenuLink}><span className={classes.MenuIcon}><FaRegMap /></span>Maps</Link></li>
              <li className={classes.MenuList}><Link to='/' className={classes.MenuLink}><span className={classes.MenuIcon}><RiMapPin2Line /></span>Spots</Link></li>
              <li className={classes.MenuList}><Link to='/' className={classes.MenuLink}><span className={classes.MenuIcon}><FiUsers /></span>Following</Link></li>
              <li className={classes.MenuList}><Link to='/' className={classes.MenuLink}><span className={classes.MenuIcon}><FaRegGrinAlt /></span>Profile</Link></li>
            </ul>
          </div>
          <div className={classes.ProfileContainer}>
            <div className={classes.PhotoContainer}>
              <div className={classes.Photo}>
                <img className={classes.PhotoContent}
                  src={logo}
                  alt=""
                />
              </div>
              <div className={classes.ProfileInfo}>
                <div className={classes.FisrInfo}>
                  <h2 className={classes.AccountName}>Kevin Costner</h2>
                  <div className={classes.NameEdit}>
                    <Link to='/'></Link>
                  </div>
                </div>
                <ul className={classes.SecondInfo}>
                  <li><span>Post<span className={classes.Num}>3</span></span></li>
                  <li><span>Good<span className={classes.Num}>3</span></span></li>
                </ul>
              </div>
            </div>
            <div className={classes.InputContainer}>
              <Input label='Email' elementType='input' />
              <Input label='Age' elementType='input' />
              <Input label='Country' elementType='input' />
              <Input label='Citys' elementType='input' />
              <SaveBtn>Save</SaveBtn>
            </div>
          </div>
        </div>
      </form>
    </Aux>
  )
}

export default Home;