import React, { useState, useEffect } from 'react'
import './tours.css'
import CommonSection from '../../components/CommonSection/CommonSection'
import SearchBar from '../../components/SearchBar/SearchBar'
import TourCard from '../../components/TourCard/TourCard'
import Newsletter from '../../components/Newsletter/Newsletter'
import { Container, Row, Col } from "reactstrap";
import tours from '../../assets/data/tours'

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const tourCount = tours.length

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <>
      <CommonSection title={"All Tours"} />

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0 mt-5">
        <Container>
          {/* { loading && <h4 className="text-center pt-5">Loading......</h4> }
                { error && <h4 className="text-center pt-5">{error}</h4> } */}
          {/* {
                    !loading && !error && */}
          <Row>
            {
              tours?.map(tour => (
                <Col lg='3' md='6' sm='6' className="mb-4" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            }

            <Col lg='12'>
              <div className="pagination d-flex align-items-center justify-content-center
                            mt-4 gap-3">
                {
                  [...Array(pageCount).keys()].map(number => (
                    <span key={number} onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}>
                      {number + 1}
                    </span>
                  ))
                }
              </div>
            </Col>
          </Row>
          {/* } */}
        </Container>
      </section>

      <Newsletter />
    </>
  )
}

export default Tours
