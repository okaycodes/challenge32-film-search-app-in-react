import React, {Component} from "react"


class MemeGenerator extends Component{
  constructor(){
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImages: []
    }
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => {
          return ({
          ...prevState,
          allMemeImages: data.data.memes
          })
        })
        console.log(data.data.memes)
  })
}


  render(){
    const memePics = this.state.allMemeImages.map(item =>{
      return (<img src={item.url} alt="" />)
    }).slice(0, 10)

    return(
      <div>
        {memePics}
      </div>
    )
  }
}

export default MemeGenerator
