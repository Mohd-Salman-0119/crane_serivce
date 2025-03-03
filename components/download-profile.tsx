import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react";

const DownloadProfile = () => {
    const openPDF = () => {
        const pdfUrl = "https://drive.google.com/file/d/1kNUSEp0j30nfNMhtSgaWQoWsf0PR8YSD/view?usp=sharing"; // Ensure this file exists in the public folder
        window.open(pdfUrl, "_blank");
    };
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <Button
                className="bg-primary hover:bg-primary/90"
                onClick={openPDF}
            >
                <FileDown className="mr-2 h-4 w-4" /> Download Company Profile
            </Button>
        </div>
    )
}

export default DownloadProfile