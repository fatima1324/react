import React, { Component} from "react";
import axios from "axios";



class Apif extends Component {
    constructor() {
        super()
        this.state=  {
            data:[],
          image:'',
          fullname:'',
          username:'',
          location:'',
          Emailaddress:'rizwfm@gmail.com',
    
         


        }
    }
    componentDidMount() {
        axios.get('http://api.github.com/users/fatima1324?client_id=f73ac3aafb72601ecfb4&client_secret=c4d2b0c28fc12267e2bb9bf3a99bdabb61596b30&sort=created')
            .then((response) => {
                // console.log(response.data.repos_url);
               this.setState({
                fullname:response.data.name,
                username:response.data.login,
                image:response.data.avatar_url,
                email: response.data.email,
                location: response.data.location,
               })
            })
    }
    


    render() {
        return (
        <div className="one">
           
             <div>
               <img src={this.state.image}alt="fatima"></img>
             
            </div>
        <div className="tow">
        <div>
             Fullname:{this.state.fullname}
            </div>
            <div>
             Username:{this.state.username}
            </div>
            <div> 
             Location:{this.state.location}
            </div>
            <div>
             Email:{this.state.email}
             </div> 
        </div>
        </div>    
        )
    }

}
export default Apif