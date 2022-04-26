import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

// this is not a function now - its a class. Pretty much no one uses this anymore
// You can not useX with Class components

class Details extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { loading: true };
  // }
  // setting a class property below is much easier way. Need Babel to make this work
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading ..... </h2>;
    }

    const { animal, city, state, description, name, images } = this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} 🐾 ${city}, ${state} 🐾`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// create a wrapping component so that we can use hooks
const WrappedDetails = () => {
  const params = useParams();
  return (
    // ErrorBoundary needs placed here. The error occurs in Details so the handler needs to the parent
    <ErrorBoundary>
      <Details params={params} />;
    </ErrorBoundary>
  );
};
export default WrappedDetails;
