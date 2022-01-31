import React, { PureComponent } from 'react';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MenuItem extends PureComponent {

    render() {
        return (
            <div className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100">

                {/* <!-- Nav Icon --> */}
                <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                    <FontAwesomeIcon icon={this.props.icon} className="mx-auto 
                            text-indigo-900 text-2xl md:text-3xl"/>
                </div>

                {/* <!-- Text --> */}
                <div className="grow flex flex-col pl-5 pt-2">
                    <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                        {this.props.title}
                    </div>

                    <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                        {this.props.text}
                    </div>
                </div>

                {/* <!-- Chevron --> */}
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 mdi-24px my-auto
                        group-hover:text-gray-700 transition-all duration-200 delay-100" />
            </div>
        );
    }
}

export default MenuItem;