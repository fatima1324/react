import React, { Component } from 'react'
import axios from "axios";

 class Info extends Component {
    constructor() {
        super()
        this.state = {
            info: []
        }}
        componentDidMount() {
            axios.get('https://api.github.com/users/fatima1324/repos')
            .then((response) => {
              
                this.setState({
                    info: response.data,
                })

            })
    }
   

  render() {
    return (
        <div className='repo'>
        <h2>User Repositories</h2>
                {
                   this.state.info.map((repo, index) => {
                    return (
                        <div key={index} >
                           {repo.name}:{repo.description}
                           
                        </div>
                    )
                })
            }
    </div>

)
}}
 export default Info