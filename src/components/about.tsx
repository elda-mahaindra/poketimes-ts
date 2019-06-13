import React, { FunctionComponent } from "react";
import Rainbow from "../hoc/rainbow";

const About: FunctionComponent = () => (
  <div className="container">
    <h4 className="center">About</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dicta iste,
      vero asperiores quam deleniti eligendi, impedit aperiam enim, perferendis
      qui. Et reprehenderit voluptatum fuga? Fugiat non debitis assumenda
      similique.
    </p>
  </div>
);

export default Rainbow(About);
