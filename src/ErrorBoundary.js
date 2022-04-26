import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

// must be a class component. Function components are not capable of being error boundaries
class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 3000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          Oh GOD It`s an error!!! We`re all gonna die!!
          <Link to="/">Click here</Link> within 5 seconds to avoid a most
          painful death
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
