import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb; /* Tailwind: bg-gray-50 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.5rem;
  font-family: 'Rubik', sans-serif;
`

const FormWrapper = styled.div`
  width: 100%;
  max-width: 24rem; /* Tailwind: max-w-sm */
`

const Title = styled.h1`
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700;
  color: #111827; /* Tailwind: text-gray-900 */
  margin-bottom: 0.5rem;
  width: 66.6%;
`

const SubTitle = styled.p`
  font-size: 1.125rem; /* text-lg */
  color: #6b7280; /* Tailwind: text-gray-500 */
  margin-bottom: 1.5rem;
  width: 66.6%;
`

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #7c3aed; /* Tailwind: text-violet-600 */
  position: relative;
  top: 0.875rem;
  left: 0.5rem;
  background-color: #f9fafb; /* Match container background */
  padding: 0 0.25rem;
  z-index: 10;
`

const Input = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db; /* Tailwind: border-gray-300 */
  border-radius: 0.375rem;
  outline: none;
  transition: 0.2s;
  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.4); /* Tailwind: focus:ring-violet-500 */
  }
`

const FormGroup = styled.div`
  margin-bottom: ${(props) => props.mb || '1.5rem'};
  position: relative;
`

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-weight: 600;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
  color: white;
  border-color: transparent;

  background-color: ${(props) =>
    props.disabled ? '#d1d5db' : '#7c3aed'}; /* gray-300 or violet-600 */
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? '#d1d5db' : '#6d28d9'}; /* violet-700 */
  }
`

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const isValid = email && password

  return (
    <Container>
      <FormWrapper>
        <Title>Signin to your PopX account</Title>
        <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</SubTitle>

        <FormGroup>
          <Label>Email Address</Label>
          <Input
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup mb="2rem">
          <Label>Password</Label>
          <Input
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <Button
          disabled={!isValid}
          onClick={() => navigate('/account')}
        >
          Login
        </Button>
      </FormWrapper>
    </Container>
  )
}
