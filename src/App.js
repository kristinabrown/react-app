import React from 'react';

class App extends React.Component {
  render(){
    let txt = this.props.txt
    return (
      <div>
        <h1>{txt}</h1>
        <b>bold</b>
      </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "This is the default text"
}


export default App
