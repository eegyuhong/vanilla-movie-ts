import { Store } from '../core';
import photoImg from '../images/avata.png';

interface IState {
  photo: string
  name: string
  email: string
  github: string
  repository: string
}

export default new Store<IState>({
  photo: photoImg,
  name: 'LeeGyuHong',
  email: 'ee.gyuhong@gmail.com',
  github: 'https://github.com/eegyuhong',
  repository: 'https://github.com/eegyuhong/vanillajs-movie-app'
});
