import Page from '../layouts/main'

const Plane = (props) => (
    <Page>
       <h1>{props.url.query.title}</h1>

      {props.planes.filter(function (characteristics) {
         return props.url.query.title === characteristics.url
       }).map(({characteristics}) => (
         <p key={characteristics.model}>
          The {characteristics.manufacturer} {characteristics.model} is a {characteristics.body}body aircraft with {characteristics.engines.toString()} {characteristics.engineloc} engines, a {characteristics.nose} nose, {characteristics.dorsalbump ? 'a ' : 'no'} dorsal bump ahead of the vertical stabilizer, and {characteristics.overwingexits.toString()} overwing exits.
         </p>
       ))}

    </Page>
)


Plane.getInitialProps = async function() {
  const data = await import('../data/planes.json')
  return { planes: data };
}

export default Plane
