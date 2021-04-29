import { Navbar, Footer } from "./components";
import { history } from "../../utils";

function PublicLayout(props) {
  const { children, withFooter = true } = props;
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="pl-60 py-16">{children}</div>
      <div>{withFooter && <Footer />}</div>
    </div>
  );
}

export default PublicLayout;
