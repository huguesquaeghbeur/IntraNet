import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';

class ButtonComponent extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <button id={this.props.id} onClick={this.props.onClickMethod} type={this.props.type} className={"m-2 w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-" + this.props.colorText + " bg-" + this.props.color + "-600 focus:ring-offset-2 focus:ring-" + this.props.color + "-500"}>
                    <div>
                        {this.props.body}
                        <div>
                            <FontAwesomeIcon icon={this.props.logo} />
                        </div>
                    </div>
                </button>
        );
    }
}

export default ButtonComponent;