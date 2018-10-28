import React, { Component } from 'react';

class NewsOptionsContainer extends Component {
  constructor(props) {
    super(props);
    this.changeCountry = this.changeCountry.bind(this);
  }

  changeCountry(e) {
    this.props.fetchNews(e.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="newsCountry">Top Headlines</label>
          <select name="country" id="newsCountry" onChange={this.changeCountry} value={this.props.country}>
            <option value="" disabled>---</option>
            <option value="tw">Taiwan</option>
            <option value="jp">Japan</option>
            <option value="us">USA</option>
          </select>
        </form>
      </div>
    );
  }
}

export default NewsOptionsContainer;