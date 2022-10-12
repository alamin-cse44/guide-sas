import { useEffect } from "react";
import { useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currrentUser = { email: email };
    if (email) {
      fetch(`https://lit-wave-92560.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currrentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          setToken(data);
          console.log("inside token", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
