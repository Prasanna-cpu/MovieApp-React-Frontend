import React, {useEffect} from 'react';


import {useEffect,useRef} from "react";
import {useParams} from "react-router-dom";
import {Container,Row,Col} from "react-bootstrap";
import ReviewForm from "../reviewform/ReviewForm.jsx";


const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

    const revText=useRef();
    let params=useParams();
    const movieId=params.movieId;


    useEffect(() => {
        getMovieData(movieId);
    }, []);


    const addReview=async(e)=>{
        e.preventDefault();


        const rev=revText.current;
        const data={
            reviewBody:rev.value,
            imdbId:movieId,
        }

        try{
            const response=await fetch(`http://localhost:8080/api/v1/reviews`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json' // Set the headers
                },
                body:JSON.stringify(data)
            })

            if(!response.ok){
                throw new Error('Network response not ok:'+response.statusText)
            }

            const responseData = await response.json();
            const updateReviews=[...reviews,{body:rev.value}]
            console.log('Success:', responseData);
            setReviews(updateReviews);
            rev.value = '';
        }
        catch (e) {
            console.error("Something went wrong:", e);
        }

    }

    return (
        <Container>
            <Row>
                <Col>
                    <h4>Reviews</h4>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map((r) => {
                            return(
                                <>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;