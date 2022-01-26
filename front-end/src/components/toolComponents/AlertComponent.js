import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { PureComponent } from 'react';

class AlertComponent extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className={this.props.color + " border-t-4 " + this.props.borderColor + " rounded-b " + this.props.textColor + " px-4 py-3 shadow-md"} role="alert">
                    <div className="flex">
                        <div className="py-1 px-4">
                            <FontAwesomeIcon icon={this.props.logo} />
                        </div>
                        <div>
                            <p className="font-bold">{this.props.title}</p>
                            <p className="text-sm">{this.props.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlertComponent;