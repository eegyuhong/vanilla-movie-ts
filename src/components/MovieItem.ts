import { Component } from '../core';
import { ISimpleMovie } from '../store/movie';

interface IProps {
  [key: string]: unknown
  movie: ISimpleMovie
}

export default class MovieItem extends Component {
  public props!: IProps;
  
  constructor(props: IProps) {
    super({
      props,
      tagName: 'a'
    });
  }
  render() {
    const { movie } = this.props;

    this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`);
    this.el.classList.add('movie');
    this.el.style.backgroundImage = `url(${movie.Poster})`;
    this.el.innerHTML = /* html */ `
      <div class="info">
        <div class="year">
          ${movie.Year}
        </div>
        <div class="title">
          ${movie.Title}
        </div>
      </div>
    `;
  }
}
