// NPM Modules
import React from 'react';

// Custom Modules
import './floating-request.scss';

export default class FloatingRequestButton extends React.Component {
  render() {
    return (
      <div id='floating-request-button'>
        <ul>
          <li>
            <a
              href='https://roadmap.veterandb.com'
              target='_blank'
              rel='noreferrer'
            >
              Feature Request
            </a>
          </li>
          <li>
            <a
              href='https://support.veterandb.com'
              target='_blank'
              rel='noreferrer'
            >
              Support Ticket
            </a>
          </li>
        </ul>
        <button>{'\u002B'}</button>
      </div>
    );
  }
}
