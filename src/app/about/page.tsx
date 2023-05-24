import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About us',
  description: 'We are a social media company',
}

export default function () {
  return (
    <main>
      <h1>About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </main>
  )
}
