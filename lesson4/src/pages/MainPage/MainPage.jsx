import React from "react";

const MainPage = ({ user }) => {
  return (
    <div>
      <p>
        welcome {user.name} {user.lastName} мы тебя ждали
      </p>
    </div>
  );
};

export default MainPage;
