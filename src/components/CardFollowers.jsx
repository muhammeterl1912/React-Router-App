import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import loadingGif from "../assets/loading.gif";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardFollowers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="container ">
      {loading ? (
        <img src={loadingGif} className="text-center" />
      ) : (
        <div className="d-flex align-items-center mt-5">
          {data?.map((item, i) => (
            <Card style={{ width: "12rem" }} className=" m-3">
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
