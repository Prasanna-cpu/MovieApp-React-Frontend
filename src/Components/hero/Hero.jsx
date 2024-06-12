import React from 'react';
import './Hero.css'
import Carousel from "react-material-ui-carousel";
import { SiYoutube } from "react-icons/si";
import {Link} from "react-router-dom";

import {Paper} from "@mui/material";

const Hero = ({movies}) => {
    return (
        <div>
            <Carousel>
                {
                    movies.map((movie)=>{
                        return(
                            <Paper>
                                <div className={'movie-card-container'} key={movie.id}>
                                    <div className={"movie-card"} style={{"--img":`url(${movie.backdrops[0]})`}}>
                                        <div className={"movie-title"}>
                                            <div className={"movie-poster"}>
                                                <img src={movie.poster} alt="movie-poster"/>
                                            </div>
                                            <div className={'movie-title'}>
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className={"movie-button-container"}>
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length-11)}`}>
                                                    <div className={"play-button-icon-container"}>
                                                        <SiYoutube className={'play-button-icon'}></SiYoutube>
                                                    </div>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default Hero;