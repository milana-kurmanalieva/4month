import React from "react";

const ErrorPage = ({ user }) => {
  return (
    <div>
      <p>
        Тебе сюда нельзя - {user.name} <span>{user.lastName}</span>
      </p>
    </div>
  );
};

export default ErrorPage;
