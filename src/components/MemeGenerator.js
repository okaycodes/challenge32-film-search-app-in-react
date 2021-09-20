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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const memeUrls = this.state.allMemeImages.map(item => item.url)
    const random = Math.floor(Math.random() * this.state.allMemeImages.length)
    this.setState({randomImage: memeUrls[random]})
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        const {memes} = data.data
        this.setState({allMemeImages: memes})
    })
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          name="topText"
          value= {this.state.topText}
          onChange = {this.handleChange}
          placeholder = "top text"
          />

          <input
          type="text"
          name="bottomText"
          value= {this.state.bottomText}
          onChange = {this.handleChange}
          placeholder = "bottom text"
          />

          <button type="submit">GEN</button>
        </form>

        <div className="meme">
          <img src = {this.state.randomImage} alt="meme pic" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator
