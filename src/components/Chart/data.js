
// Data generator

const initialPrice = 100
const flipMultiple = 1.11
const initialDistributionRate = 0.1
const distributionReductionRate = 0.01

function getCurrentDistributionRate(round) {
  return initialDistributionRate - distributionReductionRate * (round)
}

function getCurrentPrice(round) {
  const multiplier = Math.pow(flipMultiple, round)
  return initialPrice * multiplier
}

function getRoyalty(round, discributionRate) {
  return getCurrentPrice(round) * discributionRate
}

const orders = ["1st", "2nd", "3rd", "4th", "5th", "6th"]
const owners = ["Alice", "Bob", "Cathy", "Darren", "Emily", "Frank"]

// Loop through
const arr = [];
for (const i in orders) {
  // Logging
  console.log(`-- round[${i}] --`)
  console.log("Current price", getCurrentPrice(i))
  console.log("Current distrubution rate", getCurrentDistributionRate(i))
  for (const j in owners) {
    console.log(`Royalty of ${owners[j]}`, getRoyalty(i, getCurrentDistributionRate(j)))
  }
  console.log("--")
  // Pushing
  const obj = owners.reduce((acc, elem, index) => {
    acc[elem] = getCurrentDistributionRate(index) // or what ever object you want inside
    return acc
  }, {})
  arr.push({
    "order": orders[i],
    ...obj
  })
}

console.log(arr)

const data = [
    {
      "order": "1st",
      "Alice": 100,
      "Bob": 0,
      "Cathy": 0,
      "Darren": 0,
      "Emily": 0,
      "Frank": 0,
    },
    {
      "order": "2nd",
      "Alice": 100,
      "Bob": 150,
      "Cathy": 0,
      "Darren": 0,
      "Emily": 0,
      "Frank": 0,
    },
    {
      "order": "3rd",
      "Alice": 100,
      "Bob": 150,
      "Cathy": 200,
      "Darren": 0,
      "Emily": 0,
      "Frank": 0,
    },
    {
      "order": "4th",
      "Alice": 100,
      "Bob": 150,
      "Cathy": 200,
      "Darren": 250,
      "Emily": 0,
      "Frank": 0,
    },
    {
      "order": "5th",
      "Alice": 100,
      "Bob": 150,
      "Cathy": 200,
      "Darren": 250,
      "Emily": 300,
      "Frank": 0,
    },
    {
      "order": "6th",
      "Alice": 100,
      "Bob": 150,
      "Cathy": 200,
      "Darren": 250,
      "Emily": 300,
      "Frank": 350,
    },
]

export default data
