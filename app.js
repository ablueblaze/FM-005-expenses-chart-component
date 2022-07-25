const graphBars = document.querySelectorAll('[data-graph-bar]')
const graph = document.querySelector('.graph')

const fetchSpendingData = async (location) => {
  const response = await fetch(location)
  const json = await response.json()
  return json
} 

const logAsyncData = async (data) => {
  const neededData = await data
  console.log(neededData)
}

// "./data.json"
logAsyncData(fetchSpendingData("./data.json"))

const setGraphHight = async (graphData) => {
  const data = await graphData;
  data.map(day => {
    const associatedGraph = document.querySelector(`[data-graph-bar="${day.day}"]`)
    let minHeightVal = Math.round(day.amount / 5)
    if (minHeightVal >= 13) {
      minHeightVal = 13
    }
    associatedGraph.style.minHeight = `${minHeightVal}em`
  })
}

setGraphHight(fetchSpendingData("./data.json"))

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
