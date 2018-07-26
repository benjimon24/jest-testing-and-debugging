import React, { Component } from 'react';
import Single from './Single';

export default class Grid extends Component {
  renderList() {
    const { items } = this.props;
    return items.map(item => <Single key={item.id} item={item} />);
  }

  render() {
    return (
      <div>
        <div className="row">
          <ul>
            {this.renderList()}
          </ul>
        </div>
      </div>
    );
  }
}
