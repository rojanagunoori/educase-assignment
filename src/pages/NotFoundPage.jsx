import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9fafb; /* Tailwind gray-50 */
  padding: 0 1.5rem; /* px-6 */
  font-family: 'Rubik', sans-serif;
`

const Title = styled.h1`
  font-size: 4rem; /* text-6xl */
  font-weight: 700;
  color: #7c3aed; /* violet-600 */
  margin-bottom: 1rem; /* mb-4 */
`

const Subtitle = styled.h2`
  font-size: 1.5rem; /* text-2xl */
  font-weight: 600;
  margin-bottom: 0.5rem; /* mb-2 */
`

const Description = styled.p`
  color: #4b5563; /* text-gray-600 */
  margin-bottom: 1.5rem; /* mb-6 */
  text-align: center;
  max-width: 400px;
`

const Button = styled.button`
  background-color: #7c3aed; /* bg-violet-600 */
  color: white;
  padding: 0.5rem 1.5rem; /* py-2 px-6 */
  border-radius: 0.375rem; /* rounded-md */
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #6d28d9; /* hover:bg-violet-700 */
  }
`

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Description>
        Oops! Looks like you followed a broken link or entered a URL that doesn’t exist on this site.
      </Description>
      <Button onClick={() => navigate('/')}>Go Home</Button>
    </Container>
  )
}
