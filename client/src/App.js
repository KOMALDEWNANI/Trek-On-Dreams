import "./App.css";
import Carousel1 from "./Components/Carousel1";
import Catalogue from "./Components/Catalogue";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Carousel2 from "./Components/Carousel2";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <div className="app bg-slate-200">
      <p className="text-red-700 text-3xl text-center bg-amber-200">
        Trek On Dreams in PROGRESS...
      </p>
      <Navbar />
      <Carousel1 />
      <Carousel2 />
      <div className="grid grid-cols-4 gap-10">
        <Catalogue
          link="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
          title="Trek Name"
          description="Trek description along side fees and perks."
        />
        <Catalogue
          link="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
          title="Trek Name"
          description="Trek description along side fees and perks."
        />
        <Catalogue
          link="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
          title="Trek Name"
          description="Trek description along side fees and perks."
        />
        <Catalogue
          link="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
          title="Trek Name"
          description="Trek description along side fees and perks."
        />
        <Catalogue
          link="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
          title="Trek Name"
          description="Trek description along side fees and perks."
        />
        <Catalogue
          link="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
          title="Trek Name"
          description="Trek description along side fees and perks."
        />
        <Catalogue
          link="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
          title="Trek Name"
          description="Trek description along side fees and perks."
        />
        <Catalogue
          link="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
          title="Trek Name"
          description="Trek description along side fees and perks."
        />
        <Catalogue
          link="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
          title="Trek Name"
          description="Trek description along side fees and perks."
        />
        <Catalogue
          link="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
          title="Trek Name"
          description="Trek description along side fees and perks."
        />
        <Catalogue
          link="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
          title="Trek Name"
          description="Trek description along side fees and perks."
        />
        <Catalogue
          link="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
          title="Trek Name"
          description="Trek description along side fees and perks."
        />
      </div>
      <Footer />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
