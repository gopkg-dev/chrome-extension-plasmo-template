import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo";
import cssText from "data-text:~main.css";
import sonnerCssText from "data-text:~sonner.css"
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
        .replaceAll(":root", ":root,:host(plasmo-csui)")
        .concat(sonnerCssText)
    return style
}

const PlasmoInline = () => {
    return (
        <>
            <Button onClick={() => toast("Hello World")}>Click me</Button>
            <Button onClick={() => {
                toast('Dynamic Position', {
                    position: 'top-center',
                });
                toast.success('My success toast');
                toast.error('My error toast');
                toast('My action toast', {
                    action: {
                        label: 'Action',
                        onClick: () => console.log('Action!'),
                    },
                });
                toast('My cancel toast', {
                    cancel: {
                        label: 'Cancel',
                        onClick: () => console.log('Cancel!'),
                    },
                });
                toast.loading('Loading data', {
                    duration: 5000,
                });
                toast.promise(new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve({ name: 'Success' });
                    }, 1000);
                }), {
                    loading: 'Loading...',
                    success: (data) => {
                        return `${(data as { name: string }).name} toast has been added`;
                    },
                    error: 'Error',
                });
            }} className="ml-2">Click me</Button>
            <Toaster
                closeButton
                richColors
                toastOptions={{
                    // classNames: {
                    //     toast: "items-start leading-[20px]",
                    //     icon: "mt-[3px]",
                    //     title: "leading-[22px] text-[16px] break-all",
                    //     description:
                    //         "leading-[20px] max-h-[150px] overflow-y-auto break-all"
                    // }
                }}
                visibleToasts={Infinity}
                position="top-right"
                duration={Infinity}
                offset={20}
                gap={14}
                pauseWhenPageIsHidden={true}
                expand
            />
        </>
    )
}

export default PlasmoInline