import Big from 'big.js';

export const range = ({ values }) => (
  `${values.affordability_min.value} - ${values.affordability_max.value}`
)

export const calcIndex = (affordability, exposure) => {
  const sum = new Big(exposure.values.reduce((acc, val) => acc + val, 0))

  return Math.abs(sum.times(affordability.values.affordability_min.value))
}
