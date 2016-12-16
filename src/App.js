import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "this is the state txt",
      cat: 0
    }
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render(){
    let txt = this.props.txt
    return (
      <div>
        <input type='text' onChange={this.update.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}

// props are meant to remain static
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//   txt: "This is the default text"
// }


export default App
