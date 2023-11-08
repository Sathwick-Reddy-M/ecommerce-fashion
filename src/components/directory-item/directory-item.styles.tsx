import styled from 'styled-components';

type BackgroundImageProps = {
  imageurl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  transition: transform 0.5s ease-in-out, filter 0.5s ease;
  filter: grayscale(50%) contrast(1);
  &:hover {
    filter: grayscale(0%) contrast(1.2);
    transform: scale(1.05);
  }
`;

export const Body = styled.div`
  height: 110px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(6, 6, 6, 0.85) 100%);
  color: #ffffff;
  transition: background 0.5s ease;

  h2 {
    font-weight: 700;
    margin: 0;
    font-size: 26px;
    color: #ffffff;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
    transition: text-shadow 0.5s ease;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    margin-top: 5px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
    transition: text-shadow 0.5s ease;
  }

  &:hover {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(10, 10, 10, 0.95) 100%);
    cursor: pointer;
  }
`;

export const DirectoryItemContainer = styled.div`
  position: relative;
  height: 340px;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.5s ease-in-out;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);

    ${BackgroundImage}, ${Body} {
      transition: all 0.5s ease-in-out;
    }

    ${Body} {
      h2, p {
        text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
      }
    }
  }
`;