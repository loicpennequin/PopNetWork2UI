/**
 * User search bar
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React            from 'react';
import UserModel        from '../../../../resources/models/UserModel.js';
import { Link }         from 'react-router-dom';

import Avatar           from '../../Avatar/Avatar.jsx';
import OnOutsideClick   from '../../OnOutsideClick/OnOutsideClick.jsx';


class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = { showResults: false, results: [], value: ''};

        this.container = React.createRef();
    }

    showResults(){
        this.setState({ showResults: true });
    }

    hideResults(){
        setTimeout(() =>{
            this.setState({ showResults: false });
        });
    }

    async getResults(e){
        this.setState({ value: e.target.value });
        if ( e.target.value.length > 0 ){
            let results = (await UserModel.getPaginated({
                limit: 3,
                like: e.target.value
            })).users;
            this.setState({ results });
        } else {
            this.setState({ results : [] });
        }
    }

    onNavigate(e){
        this.setState({ value: '' });
        this.hideResults();
    }

    render(){
        let results = this.state.results.map(result => (
            <Link className="searchbar-results_item"
                  to={'/profile/' + result.id}
                  onClick={e => this.onNavigate(e)}>
                <Avatar size="small" user={result} noLink={true}/>
                <p>{result.username}</p>
            </Link>
        ));

        return(
            <OnOutsideClick action={() => this.hideResults()}
                            element={this.container}>
                <div className="searchbar" ref={this.container}>
                    <div className="searchbar-input_container">
                        <input type="text" className="input" value={this.state.value}
                        placeholder="Search a user"
                        onFocus={() => this.showResults()}
                        onChange={e => this.getResults(e)}
                        />
                        <button className={`button ${this.state.showResults ? 'is-primary' : ''}`}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    {
                        this.state.showResults
                            ? <div className="searchbar-results">{results}</div>
                            : null
                    }
                </div>
            </OnOutsideClick>
        )
    }
}

export default Searchbar;
