import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Card_1 = () => {
  return (
    <>
      <div className=" w-[350px] h-[470px] bg-white border border-gray-200 rounded-lg shadow-lg backdrop-md">
        <a href="#">
          <img
            className="rounded-t-lg w-[350px] h-[200px] object-cover"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQiERcsNxvTv7S_j8Dr7I2cU6RdnDLSYzEL0TP0ypJew4Ht9L4"
            alt=""
          />
        </a>
        <div className="p-5">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900">
            Alic Meyor
          </h3>

          <p className="mb-3 font-normal text-gray-700 text-center">
            PhotoGrafer
          </p>
          <p className=" items-center  text-sm font-md text-center text-gray-500 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            tempora sed in aperiam, quasi non beatae minima cupiditate enim
            recusandae autem illo, esse quo temporibus sunt voluptate sequi
            fugiat nam?
          </p>

          <div className="text-center space-x-10 mt-5">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_1;
