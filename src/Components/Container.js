import React, { Component } from 'react';
import AddressBar from './AddressBar';
import TokenBlock from './TokenBlock';
import TradeMarkBlock from './TradeMarkBlock';
import SortTokenBlock from './SortTokenBlock';
import TransferToken from './TransferToken';
import TransferHeader from './TransferHeader';
import SuccessTransaction from './SuccessTransaction';

class Container extends Component {

    // constructor(props){
    //     super(props)
    // }

    render(){
        return (
            <section className="container">
                <div className="columns">
                    <div className="is-half is-offset-one-quarter column">
                        <div className="panel">
                            {
                                this.props.tx ?
                                    <SuccessTransaction tx={this.props.tx} /> :
                                    ''
                            }

                            <AddressBar account={this.props.account} tx={this.props.tx}/>
                            {
                                this.props.transferDetail.hasOwnProperty('name') ?
                                    <div>
                                        <TransferHeader token={this.props.transferDetail} />
                                        <TransferToken closeTransfer={this.props.closeTransfer}
                                                       transferDetail={this.props.transferDetail}
                                                       fields={this.props.fields}
                                                       account={this.props.account}
                                                       Transfer={this.props.Transfer}
                                                       inProgress={this.props.inProgress}
                                                       defaultGasPrice={this.props.defaultGasPrice}
                                                       defaultGasLimit={this.props.defaultGasLimit}
                                                       onInputChangeUpdateField={this.props.onInputChangeUpdateField}/>
                                    </div> :
                                    <div className={this.props.tx ? 'is-hidden' : ''}>
                                        <SortTokenBlock />
                                        <TokenBlock newTransfer={this.props.newTransfer} tokens={this.props.tokens} />
                                    </div>
                            }
                            <TradeMarkBlock tx={this.props.tx}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Container;