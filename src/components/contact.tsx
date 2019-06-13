import React, { FunctionComponent } from "react";
import {} from "react-router-dom";

type ContactProps = {
  history: {
    push: (path: string) => void;
  };
};

const Contact: FunctionComponent<ContactProps> = ({ history }) => {
  setTimeout(() => {
    history.push("/about");
  }, 2000);

  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dicta iste,
        vero asperiores quam deleniti eligendi, impedit aperiam enim,
        perferendis qui. Et reprehenderit voluptatum fuga? Fugiat non debitis
        assumenda similique.
      </p>
    </div>
  );
};

export default Contact;
