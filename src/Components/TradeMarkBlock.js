import React from 'react';

function tradeMarkBlock(props) {
    return (
        <div className={props.tx ? "is-hidden" : "panel-block"}>
            <figure className="image">
                <img alt="metamask" className="meta-trademark" src="icons/metamask.png"></img>
            </figure>
        </div>
    )
}

export default tradeMarkBlock;