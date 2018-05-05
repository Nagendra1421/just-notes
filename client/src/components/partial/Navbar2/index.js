import React, { Component } from 'react';
import "./navbar.css";
import Drop from '../dropdown';
import SettingMenu from '../settings-menu';

const Btn = ({classes, children, ...props}) => (
  <button type="button" className={classes} {...props}>{children}</button>
)

const Brand = ({full}) => (
  <div className={`brand${full ? ' full': ''}`}>
    <a href="/">Just Notes</a>
  </div>
)
const BottomBar = ({toggleForm}) => (
  <div className="bottom-bar">
    <Btn classes="bar-btn"><i className="fas fa-search" onClick={toggleForm} /></Btn>
    <Btn classes="bar-btn cta"><i className="fas fa-plus" /></Btn>
    <Btn classes="bar-btn"><i className="fas fa-cog" /></Btn>
  </div>
)

export default class Navbar extends Component {
  constructor() {
    super();
    this.resize = this.resize.bind(this);
  }
  resize() {
    const nav = document.querySelector('.navbar-main');
    if(window.innerWidth >= 992 && nav.classList.contains('show-form')) {
      nav.classList.remove('show-form');
    }
  }
  toggleForm() {
    const nav = document.querySelector('.navbar-main');
    if(nav.classList.contains('show-form')) {
      nav.classList.remove('show-form');
    } else {
      nav.classList.add('show-form');
      document.querySelector('.navbar-form input').focus();
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
  render() {
    return (
      <nav className="navbar-main">
        <Brand />
        <form className="navbar-form">
          <i className="fas fa-search fa-lg form-icon" />
          <input type="text" placeholder="Search" />
          <i className="form-cls">&times;</i>
        </form>
        <div className="btns">
          <button type="button" className="nav-btn cta">
            <i className="fas fa-plus fa-lg" /> CREATE NEW
          </button>
          <Drop triger="nav-btn" icon="fas fa-cog fa-lg" right>
            <SettingMenu option="drop-item" />
          </Drop>
        </div>
        <BottomBar toggleForm={this.toggleForm} />
      </nav>
    )
  }
}

export {
  Brand,
  BottomBar
}
