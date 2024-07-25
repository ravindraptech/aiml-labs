import Chat from './chat'

export const runtime = 'edge'

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center my-8 text-2xl">ChatBot demo by Ravindra P.</h1>
      <Chat />
      <div><br/><br/><p>* Using Next.js, ChatGPT API deployed on Vercel (ref Ethan)</p></div>
    </main>
  )
}
