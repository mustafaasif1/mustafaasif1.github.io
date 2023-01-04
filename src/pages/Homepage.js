import React from 'react';
import { Wrapper, RightSection, LeftSection, MustafaPic, AboutMe, AboutMeDetails, AboutMeHeading, ActionWrapper, Button, ButtonWrapper, MustafaDetails, SocialMediaWrapper, EmailButton, Name, Profession, InstagramLogo, FacebookLogo, LinkedinLogo } from './Homepage.styled';
import facebook from '../icons/facebook.png';


export const HomePage = () => {

    const heading = 'About Me'

    return <Wrapper>
        <LeftSection>
            <MustafaPic>
                <MustafaDetails>
                    <Name>
                        MUSTAFA ASIF
                    </Name>
                    <Profession>
                        Software Engineer (he/him)
                    </Profession>
                </MustafaDetails>
                <ButtonWrapper>
                    <EmailButton>
                        Email Me
                    </EmailButton>
                </ButtonWrapper>
                <SocialMediaWrapper>
                    <InstagramLogo />
                    <FacebookLogo />
                    <LinkedinLogo />
                </SocialMediaWrapper>
            </MustafaPic>
        </LeftSection>
        <RightSection>
            <AboutMe>
                <AboutMeHeading>
                    {heading}
                </AboutMeHeading>
                <AboutMeDetails>
                    I am a diligent senior software engineer with 10 years of experience in business applications. I am eager to join a tech company that builds out-of-the-box solutions for regional clients. I am skilled in developing plans, managing projects, and user documentation.
                </AboutMeDetails>
            </AboutMe>
            <ActionWrapper>
                <ButtonWrapper>
                    <Button>
                        Resume
                    </Button>
                </ButtonWrapper>
                {/* <ButtonWrapper>
                    <Button>
                        Portfolio
                    </Button>
                </ButtonWrapper> */}
            </ActionWrapper>
        </RightSection>
    </Wrapper>;
};