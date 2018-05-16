import Page from '../layouts/main'

export default () => (
    <Page>
      <div>
      <h1>Plane Finder</h1>
      <p>Answer the following questions to determine what your plane is.</p>
      <h3>Is the nosecone pointy or rounded?</h3>
        <div>
          <input type="radio" id="pointynose"
          name="nosecone" value="pointy" />
          <label for="pointynose">Pointy</label>
          <input type="radio" id="roundednose"
          name="nosecone" value="rounded" />
          <label for="roundednose">Rounded</label>
        </div>

      <h3>How many overwing exits are there per side?</h3>
        <div>
          <input type="radio" id="oneexit"
          name="overwing" value="oneexit" />
          <label for="oneexit">One</label>
          <input type="radio" id="twoexits"
          name="overwing" value="twoexits" />
          <label for="twoexits">Two</label>
        </div>

        <button type="submit" value="submit" id="findersubmit">Submit</button>

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
