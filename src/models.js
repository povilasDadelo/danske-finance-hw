import Api from './api'

export const count = {
  state: {
    user: null,
    affordability: null,
    exposure: null,
    showModal: false
  },
  reducers: {
    setUser(state, payload) {
      return {
        ...state,
        user: payload
      }
    },
    setAffordabitlity(state, payload) {
      return {
        ...state,
        affordability: payload
      }
    },
    setExposure(state, payload) {
      return {
        ...state,
        exposure: payload
      }
    },
    toggleModal(state) {
      return {
        ...state,
        showModal: !state.showModal
      }
    }
  },
  effects: (dispatch) => ({
    async fetchUser(payload) {
      const response = await Api.fetchPerson(payload)

      if (response) {
        dispatch.count.setUser(response)

        await this.fetchAffordability(response.affordability_id)
      } else {
        alert('User not found!')
      }
    },
    async fetchAffordability(payload) {
      const response = await Api.fetchAffordability(payload)

      dispatch.count.setAffordabitlity(response)
      await this.fetchExposure(response.values.affordability_min.exposure_id)
    },
    async fetchExposure(payload) {
      const response = await Api.fetchExposure(payload)

      dispatch.count.setExposure(response)
      dispatch.count.toggleModal()
    }
  })
}
