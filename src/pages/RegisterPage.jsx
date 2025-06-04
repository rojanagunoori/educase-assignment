import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.5rem;
  font-family: 'Rubik', sans-serif;
`

const FormWrapper = styled.div`
  width: 100%;
  max-width: 24rem;
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  width: 60%;
`

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #7c3aed;
  position: relative;
  top: 0.875rem;
  left: 0.5rem;
  background-color: #f9fafb;
  padding: 0 0.25rem;
  z-index: 10;
`

const Input = styled.input`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
`

const FormGroup = styled.div`
  margin-bottom: 1rem;
  position: relative;
`

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-weight: 600;
  border-radius: 0.375rem;
  border-color: transparent;

  transition: background-color 0.2s;
  color: white;
  background-color: ${(props) =>
    props.disabled ? '#d1d5db' : '#7c3aed'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? '#d1d5db' : '#6d28d9'};
  }
`

const ErrorAsterisk = styled.span`
  color: #ef4444;
`

const Paragraph = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  })

  const navigate = useNavigate()

  const isFormValid =
    form.fullName &&
    form.phone &&
    form.email &&
    form.password &&
    form.isAgency

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <Container>
      <FormWrapper>
        <Title>Create your PopX account</Title>

        <FormGroup>
          <Label>
            Full Name<ErrorAsterisk>*</ErrorAsterisk>
          </Label>
          <Input
            placeholder="Enter your name"
            value={form.fullName}
            onChange={handleChange}
            name="fullName"
          />
        </FormGroup>

        <FormGroup>
          <Label>
            Phone number<ErrorAsterisk>*</ErrorAsterisk>
          </Label>
          <Input
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
            name="phone"
          />
        </FormGroup>

        <FormGroup>
          <Label>
            Email address<ErrorAsterisk>*</ErrorAsterisk>
          </Label>
          <Input
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            name="email"
          />
        </FormGroup>

        <FormGroup>
          <Label>
            Password<ErrorAsterisk>*</ErrorAsterisk>
          </Label>
          <Input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            name="password"
          />
        </FormGroup>

        <FormGroup>
          <Label>Company name</Label>
          <Input
            placeholder="Enter company name"
            value={form.company}
            onChange={handleChange}
            name="company"
          />
        </FormGroup>

        <div>
          <Paragraph>
            Are you an Agency?<ErrorAsterisk>*</ErrorAsterisk>
          </Paragraph>
          <RadioGroup>
            <RadioLabel>
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === 'yes'}
                onChange={handleChange}
              />
              Yes
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === 'no'}
                onChange={handleChange}
              />
              No
            </RadioLabel>
          </RadioGroup>
        </div>

        <Button
          disabled={!isFormValid}
          onClick={() => navigate('/login')}
        >
          Create Account
        </Button>
      </FormWrapper>
    </Container>
  )
}
