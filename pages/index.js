import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

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
      <p>{typeof(props.experiments)}</p>
      <p>{props.experiments.length}</p>
      <p>{props.experiments[44].id}</p>
        
       {/* {props.experiments.map(function(exp, i){
        return <span key={i}><b>Category Name:</b> {exp.description}</span>;
      })}  */}

      {props.experiments.map(function(exp, i){
        return <li key={i}>
          <Link as={`/p/${exp.id}`} href={`/post?id=${exp.id}`}>
            <a>{exp.description}</a>
          </Link>
        </li>;
      })} 
      
    </ul>
    </div>


  </main>
  </Layout>
)

Index.getInitialProps = async function() {
  // console.log("HIT!");
  var obj = {
    method: "GET",
    headers: {
      'Token': "a35c57d503334121476aa03dc6a1ece2d923c11a0fc8c7112096e50552a961c8:gZkVMq7n4"
    }
  };

  const experimentData = await fetch('https://www.optimizelyapis.com/experiment/v1/projects/1842140438/experiments/', obj);
  const data = await experimentData.json().then(function (exp) {
    var count = 0;
    var dataArray = [];
    exp.forEach(function (ind) {
      ind['id'] = count++;
      dataArray.push(ind);
    })
    return dataArray;
  })

  console.log(`Show data fetched. Count: ${data}`)

  return {
    experiments: data
  }
}



export default Index