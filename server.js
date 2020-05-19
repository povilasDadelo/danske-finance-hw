const app = require('express')()
const bodyParser = require('body-parser')

const USERS = [{
  id: '10abc20', name: "Tom", last_name: "Tomson", affordability_id: 1
}, {
  id: '20abc10', name: "Smith", last_name: "Tomas", affordability_id: 2
}]

const AFFORDABILITIES = [{
  id: '1',
  values: {
    affordability_max: { value: 5, exposure_id: 1 },
    affordability_min: { value: 1.3, exposure_id: 2 }
  }
}, {
  id: '2',
  values: {
    affordability_max: { value: 3, exposure_id: 3 },
    affordability_min: { value: 1.5, exposure_id: 4 }
  }
}]

const EXPOSURES = [{
  id: '1', values: [3.4, 2, 0, -1]
}, {
  id: '2', values: [4.4, 2, 1, 2]
}, {
  id: '3', values: [1.9, 2, 0, -1]
}, {
  id: '4', values: [3.4, 2, 5, -1]
}]

app.use(bodyParser.json())

app.get('/person/:id', (req, res) => {
  const user = USERS.find(user => user.id === req.params.id)

  return res.json(user || null)
})

app.get('/affordability/:id', (req, res) => {
  const affordability = AFFORDABILITIES.find(affordability => affordability.id === req.params.id)

  return res.json(affordability || null)
})

app.get('/exposure/:id', (req, res) => {
  const exposure = EXPOSURES.find(exposure => exposure.id === req.params.id)

  return res.json(exposure || null)
})

app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 5000')
})
