import { Component } from "react";

interface SapaProps {
  name: string;
}

class Sapa extends Component<SapaProps> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default function App() {
  return (
    <> 
    <Sapa name="Dani" />
    <Sapa name="Budi" />
    <Sapa name="Ani" />
    </>
  );
}