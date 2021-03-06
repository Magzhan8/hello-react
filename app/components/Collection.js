import React from 'react';
import { observer } from 'mobx-react';
import data from './data';
import Contact from './Contact';

import styles from './Collection.sass';

@observer(['contacts'])
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
        contacts: contacts.concat({
          id: newId,
          name: this.refs.name.value,
          email: this.refs.email.value,
        }),
      });

      this.refs.name.value = null;
      this.refs.email.value = null;
    }

    newContact = () =>
        <div className='pure-g'>
            <form className='pure-form' onSubmit={this.addContact}>
                <fieldset>
                    <legend>New Contact</legend>
                    <input ref='email' type='email' placeholder='example@example.com'/>
                    <input ref='name' type='text' placeholder='Name'/>
                    <button type="submit" className="pure-button pure-button-primary">Add</button>
                </fieldset>
            </form>
        </div>;

    render() {
      return (
            <div id='Collection' className={styles.main}>
                {this.newContact()}
                <div className='pure-g'>
                    {this.props.contacts.all.slice().map(info =>
                        <Contact key={info.id} {...info}/>)}
                </div>
            </div>
      );
    }
}

export default Layout;
