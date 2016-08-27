import React, { Component } from 'react';

// import SearchBuy from './SearchBuy';
// import BuyActions from '../actions/BuyActions';
// import BuyStore from '../stores/BuyStore';
// import BuyList from './BuyList';
// import NewBuyForm from './NewBuyForm';
// import GetAllBuys from './GetAllBuys';


export default class BuysPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      Buys: []
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    BuyActions.getAllBuys();
    BuyStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    BuyStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      Buys: BuyStore.getAll()
    });
  }

  render() {
    let {Buys} = this.state;

    return (
      <div className="container">
        <h1 className='text-center'>Buys Information</h1>
        <NewBuyForm />
        <GetAllBuys Buys={Buys}/>
      </div>
    )
  }
}

// <SearchBuy />
// <BuyList Buys={Buys} />
