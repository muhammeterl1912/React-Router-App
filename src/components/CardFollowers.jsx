import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import loadingGif from "../assets/loading.gif";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardFollowers = ({ setSpreadData }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  setSpreadData(data);
  useEffect(() => {
    const fetchData = async () => {
      const rowData = await axios.get(
        "https://api.github.com/users/muhammeterl1912/followers"
      );
      setData(rowData.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container" style={{ height: "100vh" }}>
      {loading ? (
        <img src={loadingGif} className="text-center" />
      ) : (
        <div
          className="d-flex justify-content-center mt-5  row"
          style={{ maxWidth: "1200px", maxHeight: "1800px" }}
        >
          {data?.map((item) => (
            <Card
              style={{ width: "12rem" }}
              className=" m-3 p-2 border border-black col-md-4"
            >
              <Card.Img variant="top" src={item.avatar_url} />
              <Card.Body>
                <Card.Title>{item.login}</Card.Title>

                <Link to={item.html_url}>
                  <Button variant="primary" value="Visit Profile">
                    Visit Profile
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardFollowers;
