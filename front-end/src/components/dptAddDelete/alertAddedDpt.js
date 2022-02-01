import React, { PureComponent } from 'react';

class alertAddedDptFunc extends PureComponent {
    render() {
        return (
            <div>
                <div role="alert">
                    <div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">
                        Dpt Added !
                    </div>
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                        <p>Department has been added succesfully ! </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default alertAddedDptFunc;