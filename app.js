const graphBars = document.querySelectorAll('[data-graph-bar]')
const barModals = document.querySelectorAll(`[data-spent-modal`)
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
    const spentModal = document.querySelector(`[data-spent-modal="${day.day}"]`)
    const spentModalVal = (Math.round(day.amount * 100) / 100).toFixed(2);
    let minHeightVal = Math.round(day.amount / 5) 
    if (minHeightVal >= 12) {
      minHeightVal = 12
    }
    associatedGraph.style.minHeight = `${minHeightVal}em`
    spentModal.textContent = `$${spentModalVal}`;
  })
}

setGraphHight(fetchSpendingData("./data.json"))

graph.addEventListener('click', (e) => {
  const target = e.target;
  if (target.dataset.graphBar) {
    graphBars.forEach(bar => bar.classList.remove('active'))
    barModals.forEach(modal => modal.classList.remove('active'))
    target.classList.add('active')
    const barDay = target.dataset.graphBar
    const barModal = document.querySelector(`[data-spent-modal=${barDay}]`)
    barModal.classList.add('active')
    console.log(barModal)
  }
  console.log(target)
})
