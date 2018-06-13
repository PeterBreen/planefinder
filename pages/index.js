import Page from '../layouts/main'
import Link from 'next/link'

const Index = (props) => (
  <Page>
    <h1>Planefinder</h1>
    <p>Use <Link prefetch href={`/finder`}><a>the Planefinder tool</a></Link> to determine what plane you are looking at.</p>
    <h2>List of Planes</h2>
    <ul>
      {props.planes.map(({characteristics}) => (
        <li key={characteristics.model}>
          <Link as={`/p/${characteristics.manufacturer}-${characteristics.model}`} href={`/${characteristics.manufacturer}-${characteristics.model}`}>
            <a>{characteristics.manufacturer} {characteristics.model}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      h1 {
        font-size: 2.5rem;
      }
      h2 {
        margin-top: 1rem;
        font-size: 2.25rem;
      }
      h1, h2 {
        margin-bottom: 1rem;
      }
      ul {
        list-style-type: disc;
        margin-left: 1rem;
        padding-left: 0.5rem;
      }
      li {
        line-height: 1.5;
        font-size: 1.5rem;
      }
      li a {
        text-decoration: none;
      }
      li a:hover {
        text-decoration: underline;
      }
    `}</style>
  </Page>


)

Index.getInitialProps = async function() {
  const data = await import('../data/planes.json')

  return {
    planes: data
  }
}

export default Index
