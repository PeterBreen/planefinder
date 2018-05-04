import Page from '../layouts/main'

const Plane = (props) => (
    <Page>
       <h1>{props.url.query.title}</h1>

      {props.planes.filter(function (characteristics) {
         return characteristics.url === "Airbus-A319"
       }).map(({characteristics}) => (
         <p key={characteristics.model}>
          The {characteristics.manufacturer} {characteristics.model} is a {characteristics.body}body aircraft with {characteristics.engines.toString()} engines, a {characteristics.nosecone} nose, and {characteristics.overwingexits.toString()} overwing exits.
         </p>
       ))}

    </Page>
)


Plane.getInitialProps = async function() {
  const data = await import('../data/planes.json')
  return { planes: data };
}

export default Plane
