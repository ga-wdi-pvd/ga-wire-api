class HeaderLogo extends React.Component {
  render () {
    let {img} = this.props;
    return (
      <div className="header-logo">
        <img  src={img} alt="logo"/>
        <h6>WIRE</h6>
      </div>
    );
  }
}
