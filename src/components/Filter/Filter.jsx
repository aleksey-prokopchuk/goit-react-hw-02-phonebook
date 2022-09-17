import { Component } from 'react';

class Filter extends Component {
  handleChange = event => {
    const { name, number } = event.target;
  };
  render() {
    return (
      <>
        {/* <label>Find contacts by name</label> */}
        <input type="text" />
      </>
    );
  }
}

export default Filter;
