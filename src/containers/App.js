import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { range, calcIndex } from '../utils/index'
import Modal from '../components/Modal'

const Container = styled.div`
  display: flex;
`
const StyledButton = styled.button`
  margin-left: 10px;
`
const Line = styled.div`
  margin-bottom: 10px;
  display: flex;
  font-size: 14px;
`
const Title = styled.div`
  margin-right: 5px;
  font-weight: bold;
`

function App({ fetchUser, showModal, toggleModal, user, affordability, exposure }) {
  const [inputValue, setInputValue] = useState('')
  const [disabled, setDisable] = React.useState(true)
  const submit = useCallback(() => {
    fetchUser(inputValue)
  }, [fetchUser, inputValue])

  function handleInputChange(event) {
    setInputValue(event.target.value)
    disableSubmit(event.target.value)
  }
  function disableSubmit(value) {
    if (value.length > 1 && value.length < 11) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  return (
    <Container>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <StyledButton disabled={disabled} onClick={submit}>Submit</StyledButton>
      <Modal show={showModal} handleClose={toggleModal}>
        <Line>
          <Title>Name:</Title>
          {user && `${user.name} ${user.last_name}`}
        </Line>
        <Line>
          <Title>Affordability range:</Title>
          {affordability && range(affordability)}
        </Line>
        <Line>
          <Title>Result:</Title>
          {exposure && affordability && calcIndex(affordability, exposure)}
        </Line>
      </Modal>
    </Container>
  );
}

const mapState = ({ count: { showModal, user, affordability, exposure } }) => ({
  showModal,
  user,
  affordability,
  exposure
})
const mapDispatch = ({ count: { fetchUser, toggleModal } }) => ({
  fetchUser: (id) => fetchUser(id),
  toggleModal: () => toggleModal()
})

export default connect(
  mapState,
  mapDispatch
)(App)
