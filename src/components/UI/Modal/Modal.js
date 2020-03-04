import React from 'react'

import './Modal.css'
import If from '../../../hoc/If'
import { Close } from '@material-ui/icons'
import Loading from '../Loading/Loading'

const Modal = props => {
    let tableContent = []
    const uselessProps = ["id", "image", "url", "created", "episode"]

    /**
     * Loops for each property in the object in order to 
     * create each row inside the table.
     */
    for (let key in props.character) {
        /**
         * Checks if the property is not empty.
         * Eliminates some specific properties that are not used.
         */
        if (props.character[key] !== "" && 
            uselessProps.indexOf(key) === -1) {
                const value = props.character[key].name ? props.character[key].name : props.character[key]

                tableContent.push([
                    (
                        <tr key={key}>
                            <th style={{textTransform: 'capitalize'}}>
                                {key}
                            </th>
                            <td>{value}</td>
                        </tr>
                    )
                ])
        }
    }

    return (
        <If condition={props.show}>
            <div className="Modal">
                <div className="overlay"></div>

                <div className="content">
                    <div className="close">
                        <Close onClick={props.close} />
                    </div>
                    
                    {props.loading ? <Loading /> : (
                        <div className="details">
                            <div
                                style={{backgroundImage: `url(${props.character.image})`}} 
                                className="image" />

                            <div className="info">
                                <h2>{props.character.name}</h2>

                                <table>
                                    <tbody>
                                        {tableContent}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </If>
    )
}

export default Modal
