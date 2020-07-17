import React, { Component } from 'react';

class AlertComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isActive: true,
    }
  }

  hideAlert() {
    this.setState({
      isActive: false,
    });
  }

  render() {
    if (this.state.isActive) {
      return (
          <div
            className={"alert alert-"+this.props.alert_state+" alert-dismissible"}
            role="alert"
          >
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => this.hideAlert()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            {this.props.content_alert}
          </div>
      );
    }
    return <div/>
  }
}

export default AlertComponent;