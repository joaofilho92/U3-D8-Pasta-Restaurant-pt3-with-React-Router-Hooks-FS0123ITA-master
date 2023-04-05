import { Component } from "react";
import withRouter from "../helpers/withRouter";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        Sono un class component! ecco l'ID dinamico: {this.props.params.dynamicId}{" "}
        <p>il mio nome è {this.props.myName}</p>
      </div>
    );
  }
}

export default withRouter(ClassComponent);
