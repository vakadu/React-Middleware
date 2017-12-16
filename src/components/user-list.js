import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component{

    componentWillMount(){
        this.props.fetchUsers();
    }

    renderUser(user){
        return(
            <div className="card card-block">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">{user.company.name}</p>
                <a className="btn btn-success">{user.website}</a>
            </div>
        );
    }

    render(){
        return(
            <div className="user-list">
                {this.props.users.map(this.renderUser)}
            </div>
        );
    }
}

function mapStateProps(state) {
    return { users: state.users }
}

export default connect(mapStateProps, actions)(UserList);
