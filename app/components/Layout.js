import React from 'react';
import data from './data';
import Contact from './Contact';

class Layout extends React.Component {
  componentWillMount() {
    this.setState({
      contacts: data,
    });
  }

    addContact = (e) => {
      e.preventDefault();

      const contacts = this.state.contacts;
      const newId = contacts[contacts.length - 1].id + 1;

      this.setState({
        contacts: contacts.concat({ id: newId, name: `New Contact ${newId}`, email: `${newId}@example.com` }),
      });
    }

    render() {
      return (
            <div id='Layout'>
                <a className="pure-button" href="#" onClick={this.addContact}>Add Contact</a>
                <div className='pure-g'>
                    {this.state.contacts.map(info =>
                        <Contact key={info.id} {...info}/>)}
                </div>
            </div>
      );
    }
}

export default Layout;
