import React, { useEffect, useState } from "react";
import { getUserProfile, getuserAccount } from "./util";

const UserTransaction = () => {
  return <div>user txns</div>;
};

const UserAccount = (props) => {
  console.log("props", props);

  const [userAccountData, setUserAccountData] = useState();

  useEffect(() => {
    getuserAccount(props.userid)
      .then((data) => {
        setUserAccountData(data);
      })
      .catch((err) => {});
  }, []);

  if (userAccountData) {
    return (
      <div>got the user account data : {JSON.stringify(userAccountData)}</div>
    );
  }

  return <div>it is loading user account data...</div>;
};

export function Example1Container() {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUseProfile] = useState();

  useEffect(() => {
    setLoading(true);

    getUserProfile()
      .then((data) => {
        console.log(data);
        setUseProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  console.log("user profile", userProfile);

  if (loading) {
    return <div>hey data is loading...</div>;
  }

  return (
    <div>
      <div>userid: {userProfile.id}</div>
      <div>user name: {userProfile.name}</div>
      <br></br>
      <br></br>
      <div>user account component</div>
      <UserAccount userid={userProfile.id} />
      <br></br>
      <br></br>
      <div>user txn component</div>
      <UserTransaction />
    </div>
  );
}
