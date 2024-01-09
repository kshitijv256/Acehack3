import {
  CreateSomethingImg,
  GlobalCommunityImg,
  LastingMemoriesImg,
} from "src/assets/img";
import { theme } from "src/styles";

interface TalkingPoint {
  header: string;
  body: string;
  image: HTMLImageElement;
  alt: string;
  color: string;
}

const Tracks: TalkingPoint[] = [
  {
    header: "Blockchain & Crypto",
    body: "You can build some crazy Dapps on multiple chains and make some decentralized solutions for Society.",
    image: GlobalCommunityImg,
    alt: "A group of smiling hackers high-fiving",
    color: theme.colors.primary.cyan,
  },
  {
    header: "Data & Gen AI",
    body: "Dive into the Data & AI track at our hackathon—where innovators wield data and AI to forge tomorrow's solutions.",
    image: CreateSomethingImg,
    alt: "Hackers with their thumbs up building with hardware",
    color: theme.colors.primary.pink,
  },
  {
    header: "CTF & Cyber Security",
    body: "Join the CTF track at our hackathon where cybersecurity enthusiasts tackle challenges and defend against digital threats.",
    image: LastingMemoriesImg,
    alt: "A dancing group of hackers partying at the silent disco",
    color: theme.colors.primary.orange,
  },
  {
    header: "Internet of Things",
    body: "Embrace the IoT track at our hackathon where visionaries fuse technology and connectivity to shape the future of smart innovation.",
    image: LastingMemoriesImg,
    alt: "A dancing group of hackers partying at the silent disco",
    color: theme.colors.primary.yellow,
  },
  {
    header: "Augmented Reality and Virtual Reality",
    body: "Step into the AR/VR track at our hackathon where creators craft immersive experiences, pushing the boundaries of reality.",
    image: LastingMemoriesImg,
    alt: "A dancing group of hackers partying at the silent disco",
    color: theme.colors.primary.purple,
  },
  {
    header: "Cloud & DevOps",
    body: "Enter the Cloud & DevOps track at our hackathon where tech trailblazers optimize and innovate for seamless digital infrastructure.",
    image: LastingMemoriesImg,
    alt: "A dancing group of hackers partying at the silent disco",
    color: theme.colors.primary.blue,
  },
  {
    header: "Web & Mobile Development",
    body: "Embark on the Web & Mobile Development track at our hackathon where coding wizards craft user-centric digital experiences, shaping the future of tech.",
    image: LastingMemoriesImg,
    alt: "A dancing group of hackers partying at the silent disco",
    color: theme.colors.primary.purpleDark,
  },
  {
    header: "Open Innovation",
    body: "Join our Open Innovation track at the hackathon where diverse minds collaborate, share ideas, and spark groundbreaking solutions across all domains.",
    image: LastingMemoriesImg,
    alt: "A dancing group of hackers partying at the silent disco",
    color: theme.colors.primary.orange,
  },
];

const TracksLeft = Tracks.slice(0, 4);
const TracksRight = Tracks.slice(4, 8);

export { Tracks, TracksLeft, TracksRight };
