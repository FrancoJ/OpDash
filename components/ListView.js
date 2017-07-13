import Link from 'next/link'


const ListView = () => (
	<section className="table-responsive">
    <table className="table" data-sort="table">
      <thead>
        <tr>
          <th className="header"><input type="checkbox" className="buz" id="selectAll" /> </th>
          <th className="header headerSortDown">Order</th>
          <th className="header">Experiment Name</th>
          <th className="header">Description</th>
          <th className="header">Date</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td><input type="checkbox" className="bva" /></td>
          <td>
		  	<Link href="/item">
          		<a href="#">#10001</a>
          	</Link>
          </td>
          <td>Experiment Name</td>
          <td>Admin theme, marketing theme</td>
          <td>01/01/2015</td>
        </tr>
        </tbody>
    </table>
    </section>
);

export default ListView




