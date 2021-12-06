import FirstImage from "../../assets/images/unsplash_8uZPynIu-rQ.png";
import SecondImage from "../../assets/images/unsplash_OlTjeydUpQw.png";
import ThirdImage from "../../assets/images/unsplash_pVq6YhmDPtk.png";
import FourthImage from "../../assets/images/unsplash_RnCPiXixooY.png";
import FifthImage from "../../assets/images/unsplash_tMbQpdguDVQ.png";
import SixthImage from "../../assets/images/unsplash_tZCrFpSNiIQ.png";
import SeventhImage from "../../assets/images/unsplash_VS_kFx4yF5g.png";
import EighthImage from "../../assets/images/Top.png";
import Arrow from "../../assets/images/akar-icons_chevron-down.png";
import Grid from "../../assets/images/Icon 1.png";
import Tiles from "../../assets/images/Icon 2.png";
import "./NFTMart.css";

function NFTMart() {
  return (
    <div className="nft__mart">
      <div className="nftmart__top mt-4">
        <h1 className="nftmart__title">Cryptographics</h1>
        <button className="nftcreate">Create Item</button>
      </div>
      <div className="nftmart__center mt-2">
        <div className="nftmart__btn">
          <button className="recent">
            Recent <img src={Arrow} alt="arrow" />
          </button>
          <button className="low">
            Low to High
            <img src={Arrow} alt="arrow" />
          </button>
          <button className="all">
            All
            <img src={Arrow} alt="arrow" />
          </button>
        </div>
        <div className="nftleft__btn">
          <img src={Tiles} alt="tiles" />
          <img src={Grid} alt="grid" />
        </div>
      </div>
      <div className="nftmart__body"></div>
    </div>
  );
}

export default NFTMart;
