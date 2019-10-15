var React = require('react');
var ReactDOM = require('react-dom');
var style = require('./app.css');
class Test extends React.PureComponent{
  componentDidMount(){
  }
  render(){
    return (
      <div>
        <h1 className={style.h1}>Hello World</h1>
        <h2 className="h2">Hello Webpack</h2>
      </div>
    );
  }
}

ReactDOM.render(<Test />,
  document.getElementById('example')
);
