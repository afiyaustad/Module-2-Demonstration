import CardComponent from "./CardComponent";
import StyledComponent from "./StyledComponent";

const LandingPage = () => {
    return (
      <div>
        {/* Hero Section */}
        <header className="hero-section text-center text-white">
          <div className="hero-content">
            <h1>Welcome to Our Website</h1>
            <p>Your One-Stop Solution for Web Excellence</p>
            <a href="#features" className="btn btn-primary">Get Started</a>
          </div>
        </header>
        {/* Features Section */}
      <section id="features" className="container mt-5">
        <h2 className="text-center mb-4">Our Features</h2>
        <div className="row">
          <div className="col-md-4">
            <CardComponent title="Fast & Responsive" text="Our websites are lightning fast and mobile-friendly." />
          </div>
          <div className="col-md-4">
            <CardComponent title="Secure & Reliable" text="We use the latest security measures to protect your data." />
          </div>
          <div className="col-md-4">
            <CardComponent title="Modern UI/UX" text="Our designs are visually appealing and easy to navigate." />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer text-center mt-5 p-3">
        <p>&copy; 2025 MyWebsite. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
export default LandingPage;