import { ArianneImg, DerrickImg, JaivalImg, LucasImg } from "src/assets/img";
import { theme } from "src/styles";

interface Story {
  name: string;
  testimonial: string;
  image: HTMLImageElement;
  alt: string;
  color: string;
}

export const HackerTestimonialsCopy: Story[] = [
  {
    name: "Muskan Yadav, Winner of AceHack 2.0",
    testimonial:
      "Coming from Delhi, I have found the AceHack 2.0 to be a wonderful  and collaborative meeting that I have never seen before. It has allowed me to meet some amazing people. These have been some of my most rewarding experiences where IT Engineers have gathered in the same room preparing to contribute to the Core activities. With this I have learned and shared a lot of technical skills and learned some of the best ways on how to be more involved.",
    image: LucasImg,
    alt: "Hacker story image for Muskan",
    color: theme.colors.primary.cyan,
  },
  {
    name: "Subham Sinha, Beginner Hacker",
    testimonial:
      "First and foremost, I would like to say a big thank you to the entire AceHack team for the great organization and success of this AceHack 2.0. The organization has been great in sharing, developing and deepening experiences. We hope to see more of these Hackathons as they really allow people to know the deepen their knowledge. I am very happy to share this great experience with the community.",
    image: ArianneImg,
    alt: "Hacker story image for subham",
    color: theme.colors.primary.pink,
  },
  {
    name: "Dhruv Vyas, Beginner Hacker",
    testimonial:
      "I am happy to have been able to take part in this Hackathon at  University of Engineering & Management, Jaipur. I met new people and learned a lot many things . Thank you for this opportunity. I will speak to my community about everything I’ve learned.",
    image: DerrickImg,
    alt: "Hacker story image for Dhruv",
    color: theme.colors.primary.orange,
  },
  {
    name: "Khushi Khandelwal, Beginner Hacker",
    testimonial:
      "I am a fellow from University of Engineering & Management, Jaipur . The Hackathon was a very exceptional experience for me. This Hackathon is a synthesis of skills (System, Network and Programming). The workshop has helped me to learn and understand Software-defined storage as well as various tools to help network virtualization and deployment.",
    image: JaivalImg,
    alt: "Hacker story image for Khushi",
    color: theme.colors.primary.yellow,
  },
];
