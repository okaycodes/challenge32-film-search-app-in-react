import React, {Component} from "react"


class MemeGenerator extends Component{
  constructor(){
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImages: ""
    }
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => {
          return ({
          ...prevState,
          allMemeImages: data.memes
          })
        })
        console.log(data.memes)
  })
}


  render(){
    return(
      <div>
        {this.state.allMemeImages}
      </div>
    )
  }
}

export default MemeGenerator
