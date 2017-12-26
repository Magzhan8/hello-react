import { observable } from 'mobx';

class Contacts {
    @observable all = [
      { id: 1, name: 'Magzhan Zhaksygeldi', email: 'magzhan@gmail.com' },
      { id: 2, name: 'Savika', email: 'savika@example.com' },
      { id: 3, name: 'Chad', email: 'chad@example.com' },
    ];
}

export default new Contacts();
