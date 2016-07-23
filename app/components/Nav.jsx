var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Time App</li>
          <li>
            <IndexLink to="/timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://www.github.com/bertdawg76" target="_blank">Bert Coleman</a>
          </li>
        </ul>
      </div>
    </div>
  )
};



module.exports = Nav;