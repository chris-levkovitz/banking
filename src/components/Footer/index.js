import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink
} from './FooterEl'
import { SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconsLink } from "./FooterEl";



const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink To='/signin'>About Us</FooterLink>
                                <FooterLink To='/signin'>How it works</FooterLink>
                                <FooterLink To='/signin'>Testimonials</FooterLink>
                                <FooterLink To='/signin'>Careers</FooterLink>
                                <FooterLink To='/signin'>Terms of Service</FooterLink>                        
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink To='/signin'>Contact</FooterLink>
                                <FooterLink To='/signin'>Support</FooterLink>
                                <FooterLink To='/signin'>Destinations</FooterLink>
                                <FooterLink To='/signin'>Sponsorship</FooterLink>
                                <FooterLink To='/signin'>Investors</FooterLink>                        
                        </FooterLinkItems>                   
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Video</FooterLinkTitle>
                                <FooterLink To='/signin'>Submit Video</FooterLink>
                                <FooterLink To='/signin'>Ambassadors</FooterLink>
                                <FooterLink To='/signin'>Agency</FooterLink>
                                <FooterLink To='/signin'>Influencer</FooterLink>                        
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink To='/signin'>Instagram</FooterLink>
                                <FooterLink To='/signin'>Facebook</FooterLink>
                                <FooterLink To='/signin'>Youtube</FooterLink>
                                <FooterLink To='/signin'>Twitter</FooterLink>
                                <FooterLink To='/signin'>Linkedin</FooterLink>                        
                        </FooterLinkItems>                   
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            <WebsiteRights>
                                DollaDollaBillYoo © {new Date().getFullYear()}
                                All Rights Reserved.
                            </WebsiteRights>
                            <SocialIconsLink href='//www.facebook.com' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href='//www.Instagram.com' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href='https://www.youtube.com/' target="" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink href='//www.twitter.com' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink href='//www.Linkedin.com' target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconsLink>
                        </SocialLogo>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
