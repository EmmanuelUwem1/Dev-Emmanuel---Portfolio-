import React from "react";
import Link from "next/link";

function Error({ statusCode }) {
  return (
    <div >
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </h1>
      <p>
        <Link href="/">
          <a>Go back to Home</a>
        </Link>
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
