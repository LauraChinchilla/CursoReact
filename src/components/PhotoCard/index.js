import React, {Fragment, useEffect, useRef, useState} from "react";
import { Article, ImgWrapper, Img } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";


const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"



export const PhotoCard = ({ id, likes =0,
src = DEFAULT_IMAGE }) => {

    const [show, element] = useNearScreen()
    
    
    const key = `like-${id}`
    const [liked, setLiked] = useLocalStorage(key, false)

    

    console.log(liked)
    
    useEffect(function(){
        Promise.resolve(
        typeof window.IntersectionObserver !=
        'undefined'
            ? window.IntersectionObserver
            : import('intersection-observer')
            ).then(()=>{
                const observer = new
                window.IntersectionObserver(function
            (entries){
                const { isIntersecting } = entries[0]
                
                if (isIntersecting) {
                   
                    setShow(true)
                    observer.disconnect()
                }
                console.log({ isIntersecting })
            })
            observer.observe(element.current)


            })
        
    }, [element])

    
    const handleFavClick = () => setLiked(!liked) 

    return (
        <Article ref={element}>
            {
                show &&  <Fragment>
                    <a href={`/?detail=${id}`}>
                    <ImgWrapper>
                    <Img src= {src}/>
                    </ImgWrapper>
                     </a>


                    <FavButton liked ={liked} likes= {likes} onClick=
                    {handleFavClick}/>


                </Fragment>
            }
            

        </Article>
    )
}