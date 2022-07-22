const graphBars = document.querySelectorAll('[data-graph-bar]')
const graph = document.querySelector('.graph')

const test = fetch("./data.json")
  .then(response => response.json())
  .then(json => console.log(json));

function populate() {}

graph.addEventListener('click', (e) => {
  const target = e.target;
  if (target.dataset.graphBar) {
    const bar = target.dataset.graphBar
    console.log(bar)
  }
  console.log(target)
})

graphBars.forEach(graphBar => {
})
