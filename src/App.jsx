import './App.css'
import {useState,useEffect } from "react";

import {Routes,Route} from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Home from "./Components/home/Home.jsx";
import Header from "./Components/header/Header.jsx";
import Trailer from "./Components/trailer/Trailer.jsx";
import Reviews from "./Components/reviews/Reviews.jsx";
// const base_url=import.meta.env.VITE_BASE_SERVER_URL

 const App = () => {


    const [movies, setMovies] = useState([]);
     const [movie, setMovie] = useState();
     const [reviews, setReviews] = useState([]);
    const getMovies=async()=>{

        try{
            const response=await fetch(`http://localhost:8080/api/v1/movies/all`);
            if(!response.ok){
                throw new Error("Failed to fetch movies from API!");
            }
            const data=await response.json();
            console.log(data)
            setMovies(data);
        }
        catch (error){
            console.log(error)
        }

    }

    useEffect(()=>{
        getMovies().then(r => console.log(r)).catch(err=>console.log(err));
    },[])


     const getMovieData=async(movieId)=>{
        try{
            const response=await fetch(`http://localhost:8080/api/v1/movies/movie/${movieId}`);
            const singleResponse=await response.json()
            console.log(singleResponse)
            setMovies(singleResponse)
            setReviews(singleResponse.reviews)
        }
        catch(error){
            console.error(error)
        }
     }


    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/"} element={<Home movies={movies}/>}></Route>
                    <Route path={"/Trailer/:ytTrailerId"} element={<Trailer/>}></Route>
                    <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>

                </Route>
            </Routes>
        </div>
    )
}

export default App;
