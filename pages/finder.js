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

  handleChange(e) {
    this.setState({[e.target.dataset.question]: e.target.value});
  }

  handleSubmit(event) {
    console.log('handleSubmit() called, they want their input back')
    event.preventDefault();
  }

  render() {
    return (
      <Page>
        <div>
        <h1>Plane Finder</h1>
        <p>Answer the following questions to determine what your plane is.</p>

            <form onSubmit={this.handleSubmit}>
              <h3>Is the nosecone pointy or rounded?</h3>
              <label>
                 <input type="radio" value="pointy" data-question="nose" checked={this.state.nose === "pointy"} onChange={(e) => this.handleChange(e)} />
                 Pointy
              </label>
              <label>
                 <input type="radio" value="rounded" data-question="nose" checked={this.state.nose === "rounded"} onChange={(e) => this.handleChange(e)} />
                 Rounded
              </label>

              <input type="submit" value="Submit" />
            </form>


        </div>
      <style jsx>{`
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
       input {
         margin: 0.75rem 0.75rem 0 0.75rem;
         display: inline-block;
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
