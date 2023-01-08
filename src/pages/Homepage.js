import React from 'react';
import { Wrapper, RightSection, LeftSection, MustafaPic, AboutMe, AboutMeDetails, AboutMeHeading, ActionWrapper, Button, ButtonWrapper, MustafaDetails, SocialMediaWrapper, EmailButton, Name, Profession, InstagramLogo, FacebookLogo, LinkedinLogo, ResumeAnchor } from './Homepage.styled';

export const HomePage = () => {

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
                    <EmailButton onClick={() => window.location = 'mailto:mustafa.asif15@gmail.com'}>
                        Email Me
                    </EmailButton>
                </ButtonWrapper>
                <SocialMediaWrapper>
                    <a href="https://www.instagram.com/mushti98/" target="_blank" rel="noopener noreferrer"><InstagramLogo /></a>
                    <a href="https://www.facebook.com/mustafaasif98" target="_blank" rel="noopener noreferrer"><FacebookLogo /></a>
                    <a href="https://www.linkedin.com/in/mustafaasif1/" target="_blank" rel="noopener noreferrer"><LinkedinLogo /></a>
                </SocialMediaWrapper>
            </MustafaPic>
        </LeftSection>
        <RightSection>
            <AboutMe>
                <AboutMeHeading>
                    About Me
                </AboutMeHeading>
                <AboutMeDetails>
                    I am currently pursuing M.Sc. Informatics at Technical University of Munich (TUM). With over 1.5 years of experience as a front-end developer, I am proficient in numerous languages, libraries, and frameworks, including but not limited to React, React Native, Angular, Javascript, and Python. 
                    I am eager to join a tech company that builds out-of-the-box solutions and makes a positive impact.
                </AboutMeDetails>
            </AboutMe>
            <ActionWrapper>
                <ButtonWrapper>
                    <Button>
                        <ResumeAnchor href="MustafaAsifCV.pdf" download="MustafaAsifCV.pdf">
                            Resume
                        </ResumeAnchor>
                    </Button>
                </ButtonWrapper>
            </ActionWrapper>
        </RightSection>
    </Wrapper>;
};