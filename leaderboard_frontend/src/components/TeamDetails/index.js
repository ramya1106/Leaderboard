import {
  TeamContainer,
  ImgSet,
  Member,
  TeamImg,
  Name,
} from "./styledComponents";

import Header from "../Header";

import Footer from "../Footer";

const teamMembers = [
    {
    name: "Dr. C. Rama Mohan",
    role: "Faculty Coordinator",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1762613762/profile_v6faxh.jpg",
  },
  {
    name: "Vatsalya Jillellamudi",
    role: "Organizer",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1762613665/vat_wkllud.jpg",
  },
  {
    name: "Dasaradha Rama Murthy P",
    role: "Technical Lead",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1762613665/murthy_xjeijn.jpg",
  },
  {
    name: "Ramya Sree Mamidi",
    role: "Web/App Dev. Lead",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1762496274/ramya_wooutw.jpg",
  },
  {
    name: "Mohammed Sheema Sadiya",
    role: "Competitive Prog Lead",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1762613664/Sheema_dxkgcv.jpg",
  },
  {
    name: "Nindali Rupu Chandu",
    role: "AI/ML Lead",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1762613664/rupu_tqspbn.jpg",
  },
  {
    name: "Rahul Siddarth",
    role: "Designing Lead",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1762613665/rah_if3b9e.jpg",
  },
  {
    name: "vency raj",
    role: "Photography Lead",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1762613666/venc_unq46a.jpg",
  },
  {
    name: "Vishnu Priya Ravula",
    role: "PR/Out Reach Lead",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1762613665/vi_a3wft0.jpg",
  },
  {
    name: "Shaik Sameer",
    role: "Social-Network Lead",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1762613666/SHAIK.SAMEER_cxpv2v.jpg",
  },
  {
    name: "Jhansi Lakshmi",
    role: "Executive Lead",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1762613664/Jhansi_uuwhth.jpg",
  }, 
];

const TeamDetails = () => {
  return (
    <>
      <Header />
      <TeamContainer id="sectionTeam">
        <ImgSet>
          {teamMembers.map((member, index) => (
            <Member key={index}>
              <TeamImg src={member.img} alt={member.name} />
              <Name>
                {member.name}
                <br />
                {member.role}
              </Name>
            </Member>
          ))}
        </ImgSet>
      </TeamContainer>
      <Footer />
    </>
  );
};

export default TeamDetails;
