import * as React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createReactClass from 'create-react-class';



class FilteredList extends React.Component {

    filterList(event) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }




    getInitialState() {
        return {
            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Bacon",
                "Eggs",
                "Salmon",
                "Granola",
                "Bananas",
                "Beer",
                "Wine",
                "Yogurt"
            ],
            items: []
        }
    }

    componentWillMount() {
        this.setState({items: this.state.initialItems})
    }

    render() {
        return (
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filterList}/>
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
