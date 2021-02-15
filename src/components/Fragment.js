import React from 'react'
import Tcontent from "./Tcontent";
function Fragment() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <Tcontent></Tcontent>
                </tbody>
            </table>
        </div>
    )
}

export default Fragment
