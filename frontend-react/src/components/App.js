import React from 'react';
import VehicleContent from './vehicle/vehicleContent';
import DealerContent from './dealer/dealerContent';
import Filter from './filter/filter';
import { selectDealer } from '../actions/';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Dealer = () => {
    return <DealerContent />;
}

const Vehicle = () => {
    return (
        <div className="ui grid">
            <div className="four wide column">
            <Filter />
            </div>
            <div className="twelve wide column">
            <VehicleContent />
            </div>
        </div>
    );
}

const App = () => {
    return (
        <div>
        {/* BrowserRouter: /dealer
            HashRouter: /#/dealer
            MemoryRouter: / url will not change */}
            <BrowserRouter>
            {/* Error will be routed to index.html */}
                <div>
                    {/* exact : exactly equals to the path, exact equals exact={true} */}
                    <Route path="/" exact component={Dealer} />
                    <Route path="/vehicle" exact component={Vehicle} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;