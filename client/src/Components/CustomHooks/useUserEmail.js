import axios from "axios";
import { useState, useEffect } from "react";
import { getCookie } from "../Store/Utils";

export default function useUserEmail() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("Loading");
  const [error, setError] = useState("");
  useEffect(() => {
    let options = {
      method: "GET",
      url: "http://localhost:4040/userDetail",
      headers: {
        Accept: "*",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: getCookie("token"),
      },
    };
    axios(options)
      .then((response) => {
        setLoading("Success");
        setEmail(response.data);
      })
      .catch((error) => {
        setLoading("Failed");
        setError();
        setEmail(error);
      });

    return () => {
      setEmail("");
      setError("");
      setLoading("Loading");
    };
  }, []);

  return { loading, email, error };
}
