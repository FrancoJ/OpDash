import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'


const Index = (props) => (
  <Layout>
  <main>
    <h1>Hackaton Projectzz</h1>

    <div>
      <canvas
        className="ex-line-graph"
        width="600" height="400"
        data-chart="bar"
        data-scale-line-color="transparent"
        data-scale-grid-line-color="rgba(255,255,255,.05)"
        data-scale-font-color="#a2a2a2"
        data-labels="['August','September','October','November','December','January','February']"
        data-value="[{ label: 'First dataset', data: [65, 59, 80, 81, 56, 55, 40] }, { label: 'Second dataset', data: [28, 48, 40, 19, 86, 27, 90] }]">
      </canvas>
    </div>

    <div>
      <h1>Optimizely Experiments</h1>
    <ul>
      {props.experiments.map(({experiment}) => (
        <li key={experiment.id}>
          {/* <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link> */}
          <p>{experiment.description}</p>
        </li>
      ))}
    </ul>
    </div>


  </main>
  </Layout>
)

Index.getInitialProps = async function() {
  // console.log("HIT!");
  // var obj = {
  //   method: "GET",
  //   headers: {
  //     'Token': "a35c57d503334121476aa03dc6a1ece2d923c11a0fc8c7112096e50552a961c8:gZkVMq7n4"
  //   }
  // };

  // const experimentData = await fetch('https://www.optimizelyapis.com/experiment/v1/projects/1842140438/experiments/', obj);

  // .then((response) => response.json()).then(function(data) {
  //   console.log("HEY!", data[1]);
  //   return data;
  // }).catch(function(err) {
  //   console.log("Error getting data: ", err);
  // })

  // const data = await experimentData.json();

  // var experimentData = data.then(function (expData) {
  //   return expData;
  // });
  // var stringData = JSON.stringify(data);
  // console.log(`Show data fetched. ${data}`);
  // console.log("HTTTIITTITIITITITITTI");
  // return {
  //   experiments: JSON.parse(stringData)
  // }

  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data}`)

  return {
    shows: data
  }
}



export default Index