import React from "react";
import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";

const ItemWrapper = styled.div`
  outline: 1px solid red;
  width: 270px;
  height: 270px;
`;
const ItemHeader = styled.div`
  outline: 1px solid red;
`;
const TypeIcon = styled(GoPrimitiveDot)`
  border: 1px solid;
`;
const ItemImage = styled.img`
  width: 100%;
  height: 60%;
`;
const ItemName = styled.div``;
const ItemFooter = styled.div``;
const ItemPrice = styled.div``;
const ItemCart = styled.div``;

const FeedItem = ({ item }) => {
  return (
    <>
      <ItemWrapper>
        <ItemHeader>
          <TypeIcon
            color={
              item.type === "Veg"
                ? "limegreen"
                : item.type === "Non Veg"
                ? "#d0021b"
                : "brown"
            }
          />
          {item.cuisine.toUpperCase()}
        </ItemHeader>
        <ItemImage src={item.image} />
        <ItemName>{item.name}</ItemName>
        <ItemFooter>
          <ItemPrice>{item.price}</ItemPrice>
          <ItemCart></ItemCart>
        </ItemFooter>
      </ItemWrapper>
    </>
  );
};

export default FeedItem;
