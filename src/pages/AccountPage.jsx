import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb; /* Tailwind: bg-gray-50 */
  display: flex;
  justify-content: center;
  font-family: 'Rubik', sans-serif;
`

const Card = styled.div`
  width: 100%;
  max-width: 28rem; /* Tailwind: max-w-md */
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const Header = styled.h2`
  font-size: 1.5rem;
  color: #1f2937; /* Tailwind: text-gray-800 */
  margin-bottom: 1rem;
  background-color: white;
  padding: 1.25rem 1.375rem;
`

const ProfileSection = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1.25rem 1rem;
  align-items: flex-start;
`

const AvatarWrapper = styled.div`
  position: relative;
`

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 9999px;
  object-fit: cover;
  background-color: #e5e7eb; /* fallback bg */
`

const CameraIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #7c3aed; /* Tailwind: bg-violet-600 */
  border-radius: 9999px;
  padding: 0.25rem;
  color: white;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #6b21a8;
  }
`

const UserInfo = styled.div``

const Name = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827; /* Tailwind: text-gray-900 */
`

const Email = styled.p`
  font-size: 0.875rem;
  color: #4b5563; /* Tailwind: text-gray-600 */
`

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  color: #374151; /* Tailwind: text-gray-700 */
  margin-top: 1rem;
  padding: 0 1.25rem;
`

const Divider = styled.div`
  border-top: 1px dashed #d1d5db; /* Tailwind: border-dashed border-gray-300 */
  margin: ${(props) => (props.large ? '60vh 0' : '1.5rem 0')};
`

export default function AccountPage() {
  const [avatarSrc, setAvatarSrc] = useState('https://randomuser.me/api/portraits/women/44.jpg')
  const inputFileRef = useRef(null)

  const handleCameraClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click()
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatarSrc(imageUrl)
    }
  }

  return (
    <PageContainer>
      <Card>
        <Header>Account Settings</Header>

        <ProfileSection>
          <AvatarWrapper>
            <Avatar src={avatarSrc} alt="User" />
            <CameraIcon onClick={handleCameraClick} title="Take a photo">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="12"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path>
              </svg>
            </CameraIcon>
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              capture="environment"
              ref={inputFileRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </AvatarWrapper>

          <UserInfo>
            <Name>Marry Doe</Name>
            <Email>Marry@Gmail.Com</Email>
          </UserInfo>
        </ProfileSection>

        <Description>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </Description>

        <Divider />
        <Divider large />
      </Card>
    </PageContainer>
  )
}
