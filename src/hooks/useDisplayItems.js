import { useState } from 'react';

export const useDisplayItems = () => {
  const [quantityDisplayItems, setQuantityDisplayItems] = useState({
    quantityLoad: null,
    quantityAdd: null,
  });
  const [displayWidth, setDisplayWidth] = useState(document.documentElement.clientWidth);
  const [buttonMoreActive, setButtonMoreActive] = useState(true);

  function checkDisplayWidth() {
    setTimeout(() => {
      setDisplayWidth(document.documentElement.clientWidth);
    }, 66);
  }
  const checkQuantityDisplayItems = () => {
    if (displayWidth > 1569) {
      setQuantityDisplayItems({
        quantityLoad: 15,
        quantityAdd: 5,
      });
    } else if (displayWidth > 1279 && displayWidth < 1570) {
      setQuantityDisplayItems({
        quantityLoad: 12,
        quantityAdd: 4,
      });
    } else if (displayWidth > 929 && displayWidth < 1280) {
      setQuantityDisplayItems({
        quantityLoad: 12,
        quantityAdd: 3,
      });
    } else if (displayWidth > 589 && displayWidth < 930) {
      setQuantityDisplayItems({
        quantityLoad: 8,
        quantityAdd: 2,
      });
    } else {
      setQuantityDisplayItems({
        quantityLoad: 5,
        quantityAdd: 2,
      });
    }
  };
  const checkButtonMoreActive = (moviesData) => {
    if (moviesData.length <= quantityDisplayItems.quantityLoad) {
      setButtonMoreActive(false);
    }
  };
  const handleButtonMore = () => {
    setQuantityDisplayItems({
      ...quantityDisplayItems,
      quantityLoad: quantityDisplayItems.quantityLoad + quantityDisplayItems.quantityAdd,
    });
  };

  return {
    checkDisplayWidth,
    displayWidth,
    checkQuantityDisplayItems,
    buttonMoreActive,
    checkButtonMoreActive,
    handleButtonMore,
    quantityDisplayItems,
  };
};
