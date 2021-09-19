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
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
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
    const memePics = this.state.allMemeImages.map(item =>{
      return (<img src={item.url} alt="" />)
    }).slice(0, 1)

    return(
      <div>
        {memePics}

        <form>
          <input
          type="text"
          name="topText"
          value= {this.state.topText}
          onChange = {this.handleChange}
          />

          <input
          type="text"
          name="bottomText"
          value= {this.state.bottomText}
          onChange = {this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default MemeGenerator
