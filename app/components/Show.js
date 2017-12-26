import React from 'react';

import data from './data';

class Show extends React.Component {
  componentWillMount() {
    this.setState({
       contact: data.filter(c => c.id === parseInt(this.props.match.params.contactId, 10)),
    });
  }

  render() {
      console.log(this.state.contact);
    return (
            <div id='Show'>
            </div>
    );
  }
}

export default Show;
