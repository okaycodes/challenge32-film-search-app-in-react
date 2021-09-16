import React, {Component} from "react"


class MemeGenerator extends Component{
  constructor(){
    super()
    this.state = {
      quote: ""
    }
  }

  componentDidMount(){
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data
        })
        console.log(data)
  })
}


  render(){
    return(
      <div>
        {this.state.quote.content}
      </div>
    )
  }
}

export default MemeGenerator
