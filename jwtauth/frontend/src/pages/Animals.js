import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

class Animals extends Component {

    constructor() {
        super();
        this.state = {
            animal1: [],
            Type: '',
            Breed: '',
            Description: '',
            img: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/Animals');
    }

    componentDidMount() {
            this.props.history.push('/Animals');
        
    }

    componentWillReceiveProps() {
        this.props.history.push('/Animals')

        
    }

    render() {
        const {errors} = this.state;
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="Type"
                    placeholder="Type"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email
                    })}
                    name="Type"
                    onChange={ this.handleInputChange }
                    value={ this.state.Type }
                    />
                  
                </div>
                <div className="form-group">
                    <input
                    type="Breed"
                    placeholder="Breed"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })} 
                    name="Breed"
                    onChange={ this.handleInputChange }
                    value={ this.state.Breed }
                    />
                  
                </div>
                <div className="form-group">
                    <input
                    type="Description"
                    placeholder="Description"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })} 
                    name="Description"
                    onChange={ this.handleInputChange }
                    value={ this.state.Description }
                    />
                   
                </div>
                <div className="form-group">
                    <input
                    type="image"
                    placeholder="image"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })} 
                    name="img"
                    onChange={ this.handleInputChange }
                    value={ this.state.img }
                    />
                 
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Add Animal
                    </button>
                </div>
            </form>
        </div>
        )
    }
}


export default Animals;