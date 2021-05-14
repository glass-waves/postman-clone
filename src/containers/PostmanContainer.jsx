import React, { Component } from 'react';
import Controls from '../components/presentational/Controls';
import Display from '../components/presentational/Display';
import History from '../components/presentational/History';
import { makeFetch } from '../services/makeFetch';
import styles from './Container.css'

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
            urlValue: target.value,
        });
    };
    handleRadioChange = ({ target }) => {
        this.setState({
            selectedRadio: target.value,
        });
    };
    handleBodyValueChange = ({ target }) => {
        this.setState({
            jsonBodyValue: target.value,
        });
    };
    handleHistoryClick = ({ method, url, body }) => {
        this.setState({
            urlValue: url,
            selectedRadio: method,
            body
        })
    }
    handleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await makeFetch({
            url: this.state.urlValue,
            method: this.state.selectedRadio,
            body: this.state.jsonBodyValue,
        });
        this.setState((prevState) => ({
            response,
            history: [
                ...prevState.history,
                {
                    id: Math.random() * 100000,
                    url: this.state.urlValue,
                    method: this.state.selectedRadio,
                    body: this.state.jsonBodyValue,
                },
            ],
        }));
    };
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.left}>
                    <Controls
                        urlValue={this.state.urlValue}
                        selectedRadio={this.state.selectedRadio}
                        jsonBodyValue={this.state.jsonBodyValue}
                        onRequestBarChange={this.handleRequestChange}
                        onRadioChange={this.handleRadioChange}
                        onBodyValueChange={this.handleBodyValueChange}
                        onFormSubmit={this.handleFormSubmit}
                    />
                    <Display response={this.state.response} />
                </div>
                <History className={styles.right} history={this.state.history} onHistoryClick={this.handleHistoryClick} />
            </div>
        );
    }
}
