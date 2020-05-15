import React, {Component} from 'react'

class App extends Component {

    constructor(){
        super()
        this.state ={
            peopleUpInSpace : []
        }
    }

    componentDidMount() {

        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                peopleUpInSpace : data.people
            })
        })
    }
  
      render(){
        return(
            <div>
                {this.state.peopleUpInSpace.map(person => <p>{person.name}</p>)}
            </div>
        )
    }


}
export default App