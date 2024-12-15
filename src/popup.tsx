import "~main.css";
import { Button } from "~components/ui/button";
import { Toaster } from "~components/ui/sonner"
import { toast } from "sonner"

function IndexPopup() {
  return (
    <div className='w-96 h-96 flex flex-col items-center justify-center space-y-4'>
      <Toaster />
      <Button onClick={() => toast("Hello World")}>Click me</Button>
    </div>
  )
}

export default IndexPopup
