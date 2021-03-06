import React, { useState } from 'react'
import Video from '../../video/video.mp4';
import { Button } from '../ButtonEl'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroEl';


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    VIRTUAL BANKING MADE EASY
                </HeroH1>
                <HeroP>
                    Start your journy with us.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                     onMouseEnter={onHover} 
                     onMouseLeave={onHover}
                     primary="true"
                     dark="true"
                     >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
