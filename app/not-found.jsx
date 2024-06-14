import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
export default function NotFound() {
  return (
    <div className="notFound ">
      <div className="container-fluid ">
        <div className=" d-flex flex-column align-items-center">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Could not find requested resource</p>
          <button className="btn btn-success ">
            <Link href="/">
              <HomeIcon />
              Back to Home Page
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
