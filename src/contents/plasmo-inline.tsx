import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo";
import cssText from "data-text:~main.css";
import { Button } from "~components/ui/button";
import { Toaster } from "~components/ui/sonner";
import { toast } from "sonner";

export const config: PlasmoCSConfig = {
    matches: ["https://www.plasmo.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
    document.querySelector(`[href="/#pricing"]`)

// Use this to optimize unmount lookups
export const getShadowHostId = () => "plasmo-inline-example-unique-id"

export const getStyle = () => {
    const style = document.createElement("style")
    style.textContent = cssText
    // style.textContent = cssText.replaceAll(':root', ':host(plasmo-csui)'); 
    return style
}

const PlasmoInline = () => {
    return (
        <>
            <Button onClick={() => toast("Hello World")} variant="destructive">Click me</Button>
            <Toaster />
        </>
    )
}

export default PlasmoInline