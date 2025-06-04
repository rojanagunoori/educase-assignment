import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Push children to the bottom */
  align-items: center;
  padding: 2.5rem 1.5rem; /* Add back padding if needed */
  font-family: 'Rubik', sans-serif;
  overflow: hidden;
`


const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  text-align: center;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937; /* text-gray-800 */
  margin-bottom: 0.75rem;
`

const Paragraph = styled.p`
  font-size: 1rem;
  color: #4b5563; /* text-gray-600 */
  margin-bottom: 2rem;
`

const PrimaryButton = styled.button`
  width: 100%;
  background-color: #7c3aed;
  color: white;
  font-weight: 600;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  transition: background-color 0.2s;
border-color: transparent;

  &:hover {
    background-color: #6d28d9;
  }
`

const SecondaryButton = styled.button`
  width: 100%;
  background-color: #ede9fe;
  color: #5b21b6;
  font-weight: 600;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 1rem;
border-color: transparent;

  transition: background-color 0.2s;

  &:hover {
    background-color: #ddd6fe;
  }
`

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <Container>
      <Wrapper>
        <Title>Welcome to PopX</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
        <PrimaryButton onClick={() => navigate('/register')}>Create Account</PrimaryButton>
        <SecondaryButton onClick={() => navigate('/login')}>Already Registered? Login</SecondaryButton>
      </Wrapper>
    </Container>
  )
}
