import Header from '../components/header';


const Index = () => (
  <main>
  	<Header />
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


  </main>
)

export default Index