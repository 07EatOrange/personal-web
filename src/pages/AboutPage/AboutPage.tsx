import ProfileDetailSection from './ProfileDetailSection';
import SkillsDetailSection from './SkillsDetailSection';
import GamesDetailSection from './GamesDetailSection';
import TimelineSection from './TimelineSection';
import ProjectShowcaseSection from './ProjectShowcaseSection';

export default function AboutPage() {
  return (
    <>
      <ProfileDetailSection />
      <TimelineSection />
      <SkillsDetailSection />
      <ProjectShowcaseSection />
      <GamesDetailSection />
    </>
  );
}
