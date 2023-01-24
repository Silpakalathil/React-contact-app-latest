import React,{Component} from "react";
import {useNavigate, Link} from "react-router-dom";


class AddContact extends Component{
   
    state = {
        name:'',
        email:'',
    }
    
    add =(e) => {
        console.log('adding')
       // const navigate = useNavigate();;
        e.preventDefault();
        if(this.state.name === '' || this.state.email === ''){
            alert('All the fields are mandatory')
            return;
        }
        this.props.addContactHandler(this.state);
        console.log(this.state);
       this.setState({
            name:"",email:""
        });
      //  navigate(-1)
        
    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Conatact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"
                        value={this.state.name} 
                        onChange={(e)=> this.setState({name: e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"
                        value={this.state.email} 
                        onChange={(e)=> this.setState({email: e.target.value})}></input>
                    </div>
                    
                    <button className="ui button blue">Add</button>
                    <Link to='/'>
                    <button className='ui button blue right'>back</button>
                </Link>

                    
                </form>
            </div>
        );
    }
}

export default AddContact;