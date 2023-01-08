import styled from 'styled-components';
import mustafa from '../images/mustafa-picture.jpg';
import facebook from '../icons/facebook.png';
import linkedin from '../icons/linkedin.png';
import instagram from '../icons/instagram.png';
import github from '../icons/github.png';


export const Wrapper = styled.div`
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: row;
    @media (max-width: 1146px) {
        flex-direction: column;
      }
    
`;

export const LeftSection = styled.div`
    width: 50vw;
    text-align: center;
    @media (max-width: 1146px) {
        width: 100vw;
      }
`;

export const RightSection = styled.div`
    background-color: #000000; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    min-height: 100vh;
    @media (max-width: 1146px) {
        width: 100vw;
      }
`;

export const MustafaPic = styled.div`
    height: 100vh;
    background-image: linear-gradient(black,
                    transparent 20%,
                    transparent 80%),
    url(${mustafa});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    filter: brightness(80%);
`

export const AboutMe = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
`;

export const AboutMeDetails = styled.div`
    font-family: 'Open Sans', sans-serif;
    padding-left: 50px;
    padding-right: 50px;
`;

export const AboutMeHeading = styled.div`
    padding-bottom: 50px;
    font-family: 'Space Mono', monospace;
    font-size: 40px;
`;

export const ActionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 541px) {
        flex-direction: column;
      }
    padding-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
    padding-right: 40px;
    padding-left: 40px;
    padding-top: 50px;
`;

export const Button = styled.div`
    background-color: white; 
    padding-right: 100px;
    padding-left: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer !important;
`;

export const EmailButton = styled.div`
    background-color: black; 
    padding-right: 100px;
    padding-left: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer !important;
`;

export const MustafaDetails = styled.div`
    padding-top: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const SocialMediaWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.div`
    font-family: 'Space Mono', monospace;
    font-size: 34px;
    font-weight: bold;
`;

export const Profession = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-size: 23px;
    font-weight: bold;
`;

export const Image = styled.img`
    font-family: 'Space Mono', monospace;
`;

export const InstagramLogo = styled.div`
    background-image: url(${instagram});
    width: 20px;
    height: 20px;
    margin: 20px;
    background-size: 100% 100%;
    cursor: pointer !important;
`;

export const FacebookLogo = styled.div`
    background-image: url(${facebook});
    width: 26px;
    height: 26px;
    margin: 20px;
    background-size: 100% 100%;
    cursor: pointer !important;
`;

export const GithubLogo = styled.div`
    background-image: url(${github});
    width: 32px;
    height: 32px;
    margin: 20px;
    background-size: 100% 100%;
    cursor: pointer !important;
`;

export const LinkedinLogo = styled.div`
    background-image: url(${linkedin});
    width: 22px;
    height: 22px;
    margin: 20px;
    background-size: 100% 100%;
    cursor: pointer !important;
`;

export const ResumeAnchor = styled.a`
    text-decoration: none;
    color: black;
`;

