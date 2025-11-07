import { useEffect } from "react";
import DownloadForm from "../../components/DownloadForm/DownloadForm";

const Download = () => {
    useEffect(() => {
        document.title = "LiqX | Download"
    })
  return <main>
    <DownloadForm/>
  </main>;
};



export default Download