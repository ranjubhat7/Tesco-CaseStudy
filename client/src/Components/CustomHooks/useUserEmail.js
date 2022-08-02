import axios from "axios";
import { useState, useEffect } from "react";

export default function useUserEmail() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    let options = {
      method: "POST",
      url: "http://localhost:4040/userDetails",
      headers: {
        Accept: "*",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: localStorage.getItem("token"),
      },
    };
    if (localStorage.getItem("userCredetntials")) {
      axios(options)
        .then((response) => {
          setEmail(response.data.email);
        })
        .catch(() => {
          setEmail("");
        });
    }
  });

  return email;
}
