import React, { useEffect, useRef } from "react";
import "./IsopodStats.css";

// Import icons
import { ReactComponent as EasyIcon } from '../../assets/icons/easy.svg';
import { ReactComponent as MediumIcon } from '../../assets/icons/medium.svg';
import { ReactComponent as HardIcon } from '../../assets/icons/hard.svg';
import { ReactComponent as HardyIcon } from '../../assets/icons/hardy.svg';
import { ReactComponent as FragileIcon } from '../../assets/icons/fragile.svg';
import { ReactComponent as ColorIcon } from '../../assets/icons/circle.svg';
import { ReactComponent as LowPriceIcon } from '../../assets/icons/lowprice.svg';
import { ReactComponent as AveragePriceIcon } from '../../assets/icons/averageprice.svg';
import { ReactComponent as HighPriceIcon } from '../../assets/icons/highprice.svg';
import { ReactComponent as IsopodLogo } from "../../assets/icons/isopod-ball-eyes.svg";

const IsopodStats = ({ difficulty, price, size, hardiness, color }) => {
  const isopodStatsRef = useRef(null);

  useEffect(() => {
    if (isopodStatsRef.current) {
      isopodStatsRef.current.style.setProperty('--isopodColor', color);
    }
  }, [color]);

  // Icons mapping with corresponding text
  const difficultyIcon = {
    "easy": <><EasyIcon className="default-color" /><span>Easy</span></>,
    "medium": <><MediumIcon className="default-color" /><span>Medium</span></>,
    "hard": <><HardIcon className="default-color" /><span>Hard</span></>,
  };

  const priceIcon = {
    "low": <><LowPriceIcon className="default-color" /><span>Low</span></>,
    "average": <><AveragePriceIcon className="default-color" /><span>Average</span></>,
    "high": <><HighPriceIcon className="default-color" /><span>High</span></>,
  };

  const sizeIcon = {
    "small": <><IsopodLogo className="default-color small" /><span>Small</span></>,
    "medium": <><IsopodLogo className="default-color medium" /><span>Medium</span></>,
    "large": <><IsopodLogo className="default-color large" /><span>Large</span></>,
  };

  const hardinessIcon = {
    "hardy": <><HardyIcon className="default-color" /><span>Hardy</span></>,
    "fragile": <><FragileIcon className="default-color" /><span>Fragile</span></>,
  };

  const colorIcon = {
    "color": <><ColorIcon className="color" /><span>{color}</span></>,
  };

  return (
    <div className="isopod-stats" ref={isopodStatsRef}>
      <ul>
        <li><div className="stat-label"><strong>Difficulty:</strong></div> <div className="stat-value">{difficultyIcon[difficulty] || <span>{difficulty}</span>}</div></li>
        <li><div className="stat-label"><strong>Price:</strong></div> <div className="stat-value">{priceIcon[price] || <span>{price}</span>}</div></li>
        <li><div className="stat-label"><strong>Size:</strong></div> <div className="stat-value">{sizeIcon[size] || <span>{size}</span>}</div></li>
        <li><div className="stat-label"><strong>Hardiness:</strong></div> <div className="stat-value">{hardinessIcon[hardiness] || <span>{hardiness}</span>}</div></li>
        <li><div className="stat-label"><strong>Color:</strong></div> <div className="stat-value">{colorIcon["color"] || <span>{color}</span>}</div></li>
      </ul>
    </div>
  );
};

export default IsopodStats;
