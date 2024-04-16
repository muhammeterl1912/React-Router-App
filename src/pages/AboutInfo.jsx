const AboutInfo = ({ spreadData }) => {
 
  return (
    <div className="container w-50 mt-5 ">
      <h4>
        Welcome to our community! We're a group of passionate developers who
        thrive on collaboration and innovation. Our journey is fueled by our
        dedication to open-source projects and our vibrant community of
        followers...
      </h4>
      <ul className="mt-5">
        {spreadData?.map((item, i) => (
          <li key={i} className="li-name text-start ">{item.login} : {item.html_url}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutInfo;
