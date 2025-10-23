import {
  SwagContainer,
  TextCenter,
  HeadingContainer,
  SwagBoomer,
  Separator,
  SwagsHeading,
  SwagsSubHeading,
  LeadText,
  SwagRow,
  SwagColumn,
  SwagImage,
  SwagCard,
  NoteSection,
} from "./styledComponents";

import Header from "../Header";

import Footer from "../Footer";

const Swags = () => {
  return (
    <>
      <Header />
      <SwagContainer>
        <TextCenter>
          <HeadingContainer>
            <SwagBoomer
              src="https://cloud.google.com/developers/images/hero-left-graphics.svg"
              alt="left-boomers"
            />
            <SwagsHeading>
              Gen AI Study Jam <span>Swag Reveal</span>
            </SwagsHeading>
            <SwagBoomer
              src="https://cloud.google.com/developers/images/hero-right-graphics.svg"
              alt="right-boomers"
            />
          </HeadingContainer>

          <Separator
            src="https://cloud.google.com/static/developers/images/thick-divider-line.svg"
            alt="separator"
          />
        </TextCenter>

        <TextCenter>
          <SwagsSubHeading>Your Commitment, Our Reward</SwagsSubHeading>
          <LeadText>
            Each skill badge you earn brings us closer to Tier 1! Together, we
            have the power to unlock these exclusive swags. Let’s aim high and
            show what our college can achieve!
          </LeadText>
        </TextCenter>

        <SwagRow>
          <SwagColumn>
            <h3>
              <strong>Tier 1</strong>
            </h3>
            <SwagImage
              src="https://res.cloudinary.com/dn9sdbv1o/image/upload/v1731413519/tier-1_swags_k8uapq.png"
              alt="Tier 1"
            />
            <SwagCard>
              <p>Swags Include:</p>
              <ul>
                <li>
                  <strong>T-Shirt</strong> – Comfortable and stylish, ideal for
                  showing your Gen-AI spirit.
                </li>
                <li>
                  <strong>Water Bottle</strong> – Perfect for daily hydration.
                </li>
                <li>
                  <strong>Sticker Set</strong> – Great for laptops and gadgets.
                </li>
                <li>
                  <strong>Mug</strong> – Keeps you energized for coding or
                  studying.
                </li>
              </ul>
            </SwagCard>
          </SwagColumn>

          <SwagColumn>
            <h3>
              <strong>Tier 2</strong>
            </h3>
            <SwagImage
              src="https://res.cloudinary.com/dn9sdbv1o/image/upload/v1731414154/swag_tier-2_kol74v.png"
              alt="Tier 2"
            />
            <SwagCard>
              <p>Swags Include:</p>
              <ul>
                <li>
                  <strong>T-Shirt</strong> – Comfortable and stylish, ideal for
                  showing your Gen-AI spirit.
                </li>
                <li>
                  <strong>Water Bottle</strong> – Perfect for daily hydration.
                </li>
              </ul>
            </SwagCard>
          </SwagColumn>
        </SwagRow>

        <NoteSection>
          <p>
            <strong>Note:</strong>
          </p>
          <ol>
            <li>
              Complete 20 badges (19 Skill + 1 Arcade Game) as per the{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1_fBxUszSm1NqW_NxWqqcrwGMZDuo2jv8SqZAgnVqzAc/edit?gid=0#gid=0"
                target="_blank"
                rel="noreferrer"
              >
                Syllabus page
              </a>
              .
            </li>
            <li>Delivery may take up to 2 months.</li>
            <li>Swags distributed fairly if completions exceed kits.</li>
            <li>
              Incomplete participants won’t be eligible for further milestones.
            </li>
          </ol>
        </NoteSection>
      </SwagContainer>
      <Footer />
    </>
  );
};

export default Swags;
