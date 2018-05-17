import React from 'react'
import Page from '../layouts/main'

class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nose: '',
        overwingexits: '',
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    console.log('handleSubmit() just happened to event: ', event)
    console.log('this.state is: ', this.state)
    event.preventDefault();
  }

  render() {
    return (
      <Page>
        <div>
        <h1>Plane Finder</h1>
        <p>Answer the following questions to determine what your plane is.</p>

            <form onSubmit={this.handleSubmit}>
              <label>Is the nosecone pointy or rounded?
                <input type="text" value={this.state.nose} id="nose" onChange={(e) => this.handleChange(e)} /></label>
              <label>How many overwing exits are there per side?
                <input type="text" value={this.state.overwingexits} id="overwingexits" onChange={(e) => this.handleChange(e)} /></label>

              <input type="submit" value="Submit" />
            </form>


        </div>
      <style jsx>{`
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
       input {
         margin: 0.75rem 0;
         display: block;
       }
       input:nth-of-type(even) {
         margin-left: 1rem;
       }
       label {
         margin: 0.5rem 0 0 0.5rem;
         display: block;
       }
      `}</style>
    </Page>

    )
  }
}

Finder.getInitialProps = async function() {
  const data = await import('../data/planes.json')

  return {
    planes: data
  }
}

export default Finder
