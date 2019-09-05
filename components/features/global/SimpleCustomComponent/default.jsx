/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* React */
import React, { Fragment, PureComponent } from 'react'
import PropTypes from "fusion:prop-types";

/* Fusion */
import Consumer from "fusion:consumer";


@Consumer
class SimpleCustomComponent extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      articles: []
    };
    this.fetch(props);
  }
  fetch (props) {
    this.fetchContent({
      articles: {
        source: 'tn'
      }
    })
  }
  render () {
      const articles = this.state.articles;
      return (
          <Fragment>
            <h2>Articles</h2>
            <div>
              {articles && articles.map((article, idx) =>
                  <div key={`article-${idx}`}>
                    <h4>{article.content.title.main}</h4>
                  </div>
              )}
            </div>
          </Fragment>
      )
  }
}

export default SimpleCustomComponent;