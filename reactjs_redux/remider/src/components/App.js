import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { addRemider, deleteRemider, clearReminders } from '../actions';
import '../App.css';

class App extends Component {
    constructor(props) {
          super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addRemider() {
        console.log('this: ', this);
        this.props.addRemider(this.state.text, this.state.dueDate);
    }

    renderRemiders() {
        const { remiders } = this.props;
        console.log('remiders', remiders);
        return (
            <ul className="list-group col-sm-4">
                {
                    remiders.map(remider => {
                        return (
                            <li key={ remider.id } className="list-group-item">
                                <div className="list-item">
                                    <div>{ remider.text }</div>
                                    <div><em>{ moment(new Date(remider.dueDate)).fromNow() }</em></div>
                                </div>
                                <div 
                                    className="list-item delete-button"
                                    onClick={ () => this.deleteRemider(remider.id) }
                                >
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    deleteRemider(id) {
        this.props.deleteRemider(id);
    }

    render() {
        console.log('this.props', this.props)
        return (
            <div className="App">
                <div className="title">
                    Remider Pro
                </div>
                <div className="form-inline remider-form">
                    <div className="form-group">
                        <input 
                            className="form-control"
                            placeholder="I have to..."
                            onChange={event => this.setState({text: event.target.value})}
                        />
                        <input 
                            type="datetime-local"
                            className="form-control"
                            onChange={event => this.setState({dueDate: event.target.value})}
                        />
                    </div>
                    
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={ () => this.addRemider() }
                    >
                    Add Remider
                    </button>
                </div>

                { this.renderRemiders() }

                <div 
                    className="btn btn-danger"
                    onClick={ () => this.props.clearReminders() }
                >
                Clear All
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        remiders: state
    }
}

export default connect(mapStateToProps, { addRemider, deleteRemider, clearReminders })(App);