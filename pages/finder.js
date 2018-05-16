import React from 'react'
import Page from '../layouts/main'

class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {characteristics: {
        nose: '',
        overwingexits: '',
      }};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Page>
        <div>
        <h1>Plane Finder</h1>
        <p>Answer the following questions to determine what your plane is.</p>
        <h3>Is the nosecone pointy or rounded?</h3>
        <h3>How many overwing exits are there per side?</h3>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>


        </div>
      <style jsx>{`
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        h3 {
         font-size: 1.25rem;
         margin: 0.75rem 0;
       }
       input {
         margin: 0.75rem 0;
         display: inline-block;
       }
       input:nth-of-type(even) {
         margin-left: 1rem;
       }
       label {
         margin-left: 0.5rem;
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
