import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../components/presentational/Controls';
import Display from '../components/presentational/Display';
import { makeFetch } from '../services/makeFetch';

export default class PostmanContainer extends Component {
    state = {
        urlValue: '',
        selectedRadio: '',
        jsonBodyValue: '',
        history: [],
        response: '',
    };

    handleRequestChange = ({ target }) => {
        this.setState({
            urlValue: target.value
        })
    }
    handleRadioChange = ({ target }) => {
        this.setState({
            selectedRadio: target.value
        })
    }
    handleBodyValueChange = ({ target }) => {
        this.setState({
            jsonBodyValue: target.value
        })
    }
    handleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await makeFetch({
            url: this.state.urlValue,
            method: this.state.selectedRadio,
            body: this.state.jsonBodyValue
        });
    }
    render() {
        return (
            <div>
                <div className="left">
                    <Controls 
                        urlValue={this.state.urlValue} 
                        selectedRadio={this.state.selectedRadio}
                        jsonBodyValue={this.state.jsonBodyValue}
                        onRequestBarChange={this.handleRequestChange}
                        onRadioChange={this.handleRadioChange}
                        onBodyValueChange={this.handleBodyValueChange}
                        onFormSubmit={this.handleFormSubmit}
                        />
                    <Display 
                        response={this.state.response}
                    />
                </div>
                <History history={this.state.history}/>
            </div>
        );
    }
}
