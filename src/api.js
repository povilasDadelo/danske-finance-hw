export const handleResponseByStatus = async response => {
  if (!response.ok) {
    if (response.status === 400) {
      return Promise.reject(await response.json())
    }

    return Promise.reject(response)
  }

  return Promise.resolve(response)
}

export const json = response => response.json()

class Api {
  fetchPerson(id) {
    return fetch(`/person/${id}`)
      .catch(e => e)
      .then(handleResponseByStatus)
      .then(json)
  }

  fetchAffordability(id) {
    return fetch(`/affordability/${id}`)
      .catch(e => e)
      .then(handleResponseByStatus)
      .then(json)
  }

  fetchExposure(id) {
    return fetch(`/exposure/${id}`)
      .catch(e => e)
      .then(handleResponseByStatus)
      .then(json)
  }
}

export default new Api()
