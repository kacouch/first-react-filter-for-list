import * as React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createReactClass from 'create-react-class';



class FilteredList extends React.Component {

    constructor() {
        super()
        this.state = {
            initialItems: [
                "Applesss",
                "Broccoli",
                "Chickenasdf",
                "Baconujf",
                "Eggsasdfg",
                "Salmonasdg",
                "Granolatujh",
                "Bananasgj",
                "Beertew",
                "Wineqwesdry",
                "Yogurtaeryh",
                "Applesaerh",
                "Broccolissah",
                "Chickenasd",
                "Baconukj",
                "Eggsdj"
            ],
            items: []
        } //or whatever
    }


    filterList(event) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }

    componentWillMount() {
        this.setState({items: this.state.initialItems})
    }

    render() {
        return (
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filterList.bind(this)}/>
                <List items={this.state.items}/>
            </div>
        );
    }
};


class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        );
    }
};

ReactDOM.render(<FilteredList />, document.getElementById('root'));
registerServiceWorker();
