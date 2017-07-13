// import Layout from '../components/MyLayout.js';
// import ListView from "../components/ListView";

// export default () => (
//   <Layout>
//     <h1>This is the List View</h1>
//   <ListView />
//   </Layout>
// )

import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/MyLayout.js'


const ListView = (props) => (
  <Layout>
	<section className="table-responsive">
    <table className="table" data-sort="table">
      <thead>
        <tr>
          <th className="header"><input type="checkbox" className="buz" id="selectAll" /> </th>
          <th className="header headerSortDown">Experiment</th>
          <th className="header">Description</th>
          <th className="header">Created Date</th>
          <th className="header">Last Modified Date</th>
          <th className="header">Active</th>
        </tr>
      </thead>
      <tbody>
      {props.experiments.map(function(exp, i){
        return <tr key={i}>
          <td><input type="checkbox" className="bva" /></td>
          <td>
		  	  <Link as={`/item/${exp.id}`} href={`/item/${exp.id}`}>
          		<a>View Results</a>
          </Link>
          </td>
          <td>{exp.description}</td>
          <td>{exp.created}</td>
          <td>{exp.last_modified}</td>
          <td>{exp.active}</td>
        </tr>;
      })} 
     
        </tbody>
    </table>
    </section>
</Layout>
   
);

ListView.getInitialProps = async function() {
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
    var dataArrayActive = [];
    exp.forEach(function (ind) {
      console.log(ind.status);
      if (ind.status == 'Running') {
        ind.active = 'true';
      } else {
        ind.active = 'false';
      }
      if (ind.status == 'Running') {
          dataArrayActive.push(ind);
      }
    })
    return dataArrayActive;
  })

  console.log(`Show data fetched. Count: ${data}`)

  return {
    experiments: data
  }
}

export default ListView




