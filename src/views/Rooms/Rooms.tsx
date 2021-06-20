import { Component } from 'react';
import { connect } from 'react-redux';
//store
import { showSnackbar } from '../../store/base';
//ui
import { Room, RoomList, RoomListItem } from './style';
//types
import { IProps, IState } from './Rooms-types';
//http
import { $axios } from '../../http/axios-config';

class Rooms extends Component<IProps, IState> {
  async componentWillMount() {
    try {
      const { data } = await $axios.get('/room/rooms/');
      const snack = {
        message: 'Ну здарова',
        show: true,
        type: 'message',
      };

      this.props.showSnackbar(snack);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <Room>
        <h1>Rooms</h1>
        <RoomList>
          <RoomListItem></RoomListItem>
          <RoomListItem></RoomListItem>
        </RoomList>
      </Room>
    );
  }
}

const mapDispatchProps = {
  showSnackbar,
};

export default connect(null, mapDispatchProps)(Rooms);
