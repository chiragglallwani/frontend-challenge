import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import { ImageList } from "@/utilities/constants";
import { searchApi, randomPhotosApi } from "@/pages/api/unsplash";
import React, { useState, useEffect } from "react";
import { style } from "typestyle";
import { Container, Image, Row, Spinner } from "react-bootstrap";

const imagePageHeader = style({
  margin: "100px auto 20px auto",
});

function Images() {
  const [searchText, setSearchText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [imageList, setImageList] = useState<ImageList>([]);

  useEffect(() => {
    setLoading(true);
    randomPhotosApi().then((res: ImageList) => {
      console.log(res);
      setImageList(res);
      setLoading(false);
    });
  }, []);

  const handleImageSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setLoading(true);
    setImageList([]);

    searchApi(searchText).then((res: ImageList) => {
      setImageList(res);
      setLoading(false);
    });
  };

  return (
    <div>
      <Header />
      <div className={imagePageHeader}>
        <Searchbar
          searchText={searchText}
          setSearchText={setSearchText}
          handleImageSubmit={handleImageSubmit}
        />
      </div>
      <Container fluid="md" className="py-5">
        {loading ? (
          <>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
          </>
        ) : (
          <Row>
            {imageList?.map((image) => (
              <Image
                className="col-sm-6 col-lg-4"
                fluid
                key={image.id}
                src={image.urls.regular}
                alt=""
              />
            ))}
          </Row>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default Images;
