import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { serverUrl } from "../App";
import { useEffect } from "react";
import { useState } from "react";

const LiveSite = () => {
  const { id } = useParams();
  const [html, setHtml] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const handleGetWebsite = async () => {
      try {
        const website = await axios.get(
          `${serverUrl}/api/website/get-by-slug/${id}`
       
        );
        console.log(website);
        setHtml(website.data.latestCode);
      } catch (error) {
        console.log(error);
        setError("site not found");
      }
    };
    handleGetWebsite();
  }, [id]);
  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        {error}
      </div>
    );
  }
  return (
    <iframe
      title="LiveSite"
      srcDoc={html}
      className="w-screen h-screen border-none"
      sandbox="allow-scripts allow-forms allow-same-origin"
    />
  );
};

export default LiveSite;
