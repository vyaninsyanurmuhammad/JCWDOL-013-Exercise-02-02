import styled from "styled-components";
import "./index.css";
import profilPhoto from "./assets/vyan_i.jpg";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

function App() {
  return (
    <>
      <Container>
        <Column>
          <BigestRow>
            <Column>
              <Row>
                <CaseSection>
                  <HireMeButton href="https://www.linkedin.com/in/vyaninsyanurmuhammad/">
                    <HireButtonText>Hire Me 👋</HireButtonText>
                  </HireMeButton>
                  <SlagText>
                    Bring Your Ideas To Life Through UI Design
                  </SlagText>
                </CaseSection>
              </Row>
              <Row>
                <OverviewRow>
                  <CardOverview bgColor="#00c39a" textColor="white">
                    <ColumnCardOverview>
                      <TitleOverview>1+</TitleOverview>
                      <SubTitleOverview>Years Experience</SubTitleOverview>
                    </ColumnCardOverview>
                  </CardOverview>
                  <CardOverview bgColor="#ffbf3c" textColor="black">
                    <ColumnCardOverview>
                      <TitleOverview>🐱‍🏍</TitleOverview>
                      <SubTitleOverview>Fullstack Developer</SubTitleOverview>
                    </ColumnCardOverview>
                  </CardOverview>
                  <CardOverview bgColor="#fe6d79" textColor="white">
                    <ColumnCardOverview>
                      <TitleOverview>50+</TitleOverview>
                      <SubTitleOverview>Repositories</SubTitleOverview>
                    </ColumnCardOverview>
                  </CardOverview>
                </OverviewRow>
              </Row>
            </Column>

            <Column>
              <Row>
                <CaseSection>
                  <NameText>
                    Vyan <NameSpanText>Insya Nur Muhammad</NameSpanText>
                  </NameText>
                </CaseSection>
              </Row>
              <LittleRow>
                <ImageFrame>
                  <ProfileImage src={profilPhoto} />
                </ImageFrame>
                <Column>
                  <Row>
                    <CaseSection>
                      <NameText>
                        1999 <NameSpanText>Pati</NameSpanText>
                      </NameText>
                    </CaseSection>
                  </Row>
                  <Row>
                    <Column>
                      <Row>
                        <CaseSection>
                          <Column>
                            <NameText>
                              Asempapan <NameSpanText>Pati</NameSpanText>
                            </NameText>
                            <MapIframe
                              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2458.7004069951895!2d111.1005213!3d-6.6696855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e772b2e67469f1d%3A0xb3db8d8e53efd835!2sAIDA%20BATIK!5e1!3m2!1sid!2sid!4v1708765771164!5m2!1sid!2sid"
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </Column>
                        </CaseSection>
                      </Row>
                    </Column>
                  </Row>
                  <Row>
                    <IconCaseSection>
                      <IconCase
                        bgColor="#2867b2"
                        href="https://www.linkedin.com/in/vyaninsyanurmuhammad/"
                        target="_blank"
                      >
                        <StyledLinkedinLogo size={32} weight="duotone" />
                      </IconCase>
                      <IconCase
                        href="https://github.com/vyaninsyanurmuhammad"
                        target="_blank"
                      >
                        <StyledGitlabLogo size={32} weight="duotone" />
                      </IconCase>
                      <IconCase
                        href="https://www.instagram.com/vyaninsyanurmuhammad/"
                        target="_blank"
                      >
                        <StyledInstagram size={32} weight="duotone" />
                      </IconCase>
                      <IconCase href="https://wa.link/5zk564" target="_blank">
                        <StyledWhatsappLogo size={32} weight="duotone" />
                      </IconCase>
                    </IconCaseSection>
                  </Row>
                </Column>
              </LittleRow>
            </Column>
          </BigestRow>

          <Row>
            <CaseSection>
              <NameText>
                Hello, I'm Vyan lnsya Nur Muhammad, a Bachelor of Information
                Technology graduate from Yogyakarta Muhammadiyah University. I
                have high motivation to continue learning and developing in
                Information Technology to make a positive impact on myself and
                the company
              </NameText>
            </CaseSection>
          </Row>
        </Column>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 48px 48px 48px 48px;

  @media (min-width: 1024px) {
    padding: 48px 120px 48px 120px;
  }

  @media (min-width: 1536px) {
    padding: 48px 240px 48px 240px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  gap: 18px;
  flex-grow: 1;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  width: 100%;
  height: fit-content;
  gap: 18px;
  flex-grow: 1;
`;

const BigestRow = styled(Column)`
  flex-direction: column;

  @media (min-width: 1536px) {
    flex-direction: row;
  }
`;

const LittleRow = styled(Row)`
  flex-direction: column;

  @media (min-width: 1536px) {
    flex-direction: row;
  }
`;

const OverviewRow = styled(Row)`
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ColumnCardOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  flex-grow: 1;
`;

const CaseSection = styled.div`
  position: relative;
  display: flex;
  background-color: #222021;
  width: 100%;
  height: fit-content;
  border-radius: 12px;
  padding: 24px;
  flex-shrink: 1;
`;

const SlagText = styled.p`
  position: relative;
  font-size: 48px;
  font-weight: 700;
  color: white;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 68px;
  }

  @media (min-width: 1024px) {
    font-size: 68px;
  }
`;

const HireMeButton = styled.a`
  position: absolute;
  color: white;
  font-size: x-large;
  font-weight: 700;
  background-color: #8325fd;
  border: 0;
  padding: 12px 24px 12px 24px;
  border-radius: 9999px;
  right: 0;
  bottom: 0;
  margin: 0 24px 24px 0;
  z-index: 20;
`;

const HireButtonText = styled.span`
  display: inline-block;
  text-align: center;
  vertical-align: top;
`;

const NameText = styled.p`
  font-size: large;
  width: fit-content;
  font-weight: 600;
  color: white;
  width: fit-content;
  margin: 0;
`;

const NameSpanText = styled.span`
  width: fit-content;
  color: #a5a4a5;
`;

const ImageFrame = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  height: 548px;
  width: 100%;
  display: block;
  position: relative;
  object-fit: cover;
`;

const CardOverview = styled.div<{
  bgColor?: "#00c39a" | "#ffbf3c" | "#fe6d79";
  textColor?: "white" | "black";
}>`
  /* width: 100%; */
  /* height: 240px; */
  border-radius: 8px;
  background-color: ${(props) => props.bgColor ?? "white"};
  color: ${(props) => props.textColor ?? "white"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const TitleOverview = styled.div`
  font-size: 32px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 72px;
  }
`;

const SubTitleOverview = styled.p`
  margin: 0;
  font-size: larger;
  font-weight: 700;
  text-align: center;

  /* @media (min-width: 768px) {
    font-size: larger;
  } */
`;

const MapIframe = styled.iframe`
  position: relative;
  display: block;
  border: 0;
  width: 100%;
  height: 240px;
  border-radius: 8px;
`;

const IconCase = styled.a<{ bgColor?: "#2867b2" | "#272427" }>`
  display: flex;
  background-color: ${(props) => props.bgColor ?? "#272427"};
  padding: 12px;
  border-radius: 100%;
`;

const IconCaseSection = styled(CaseSection)`
  justify-content: space-between;
`;

const StyledLinkedinLogo = styled(LinkedinLogo)`
  color: white;
`;

const StyledGitlabLogo = styled(GithubLogo)`
  color: white;
`;

const StyledInstagram = styled(InstagramLogo)`
  color: white;
`;

const StyledWhatsappLogo = styled(WhatsappLogo)`
  color: white;
`;

export default App;
