import Heading from "@/components/Heading"
import Button from "@/components/Button"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-3 p-24">
      <Heading className="text-primary">
           WishSomeone
      </Heading>
      <Button className="shadow-btn-primary">Click me☺</Button>
      <Button className="shadow-btn-primary" outline={true}>Click me☺</Button>
    </main>
  )
}
