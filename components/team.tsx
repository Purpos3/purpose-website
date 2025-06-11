import Image from 'next/image'
import bg from '@/public/images/team/bg2.png'
import gk from '@/public/images/team/gk.jpeg'
import gt from '@/public/images/team/gt.png'
import lf from '@/public/images/team/lf.jpeg'
import mc from '@/public/images/team/mc.jpeg'
import wf from '@/public/images/team/wf.jpeg'
import TeamMember from './team-member'

const TEAM_MEMBERS = [
  {
    name: 'Gregor Kobilarov',
    title: 'Business (Tech)',
    imageSrc: gk,
  },
  {
    name: 'Lukas Faber',
    title: 'Business (Ops)',
    imageSrc: lf,
  },
  {
    name: 'Mieszko Chowaniec',
    title: 'Backend',
    imageSrc: mc,
  },
  {
    name: 'Wael Feriz',
    title: 'AI',
    imageSrc: wf,
  },
  {
    name: 'Gaby Tatters',
    title: 'Design',
    imageSrc: gt,
  },
]

export default function Team() {
  return (
    <div className="relative">
      <Image
        className="absolute object-cover top-0 left-0 w-full h-full"
        src={bg}
        alt="background"
      />
      <div className="z-10 relative text-center p-8">
        <h3 className="text-slate-50 font-bold text-xl md:text-4xl">
          Founding Team
        </h3>
      </div>
      <div className="p-8 md:p-16 z-10 relative grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:max-w-9/12">
        {TEAM_MEMBERS.map((t) => (
          <TeamMember
            name={t.name}
            title={t.title}
            imageSrc={t.imageSrc}
            key={t.name + t.title}
          />
        ))}
      </div>
    </div>
  )
}
