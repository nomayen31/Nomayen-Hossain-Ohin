import React from 'react'
import { Quote, Trophy, Users, Briefcase, TrendingUp, Award } from 'lucide-react'
import profileImg from '../../src/assets/pic2.jpg'

const Speaker = () => {
  return (
    <section className="bg-[#0b0b0b] py-20 px-4 md:px-10 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          {/* Left Side */}
          <div className="bg-[#1a1c23] rounded-[2.5rem] p-10 flex flex-col justify-between border border-white/5 shadow-2xl">
            <div>
              <h2 className="text-white text-5xl font-bold mb-6">
                About the <span className="text-blue-500">Developer</span>
              </h2>

              <div className="inline-block bg-[#ceff33] px-6 py-2 rounded-full mb-10">
                <span className="text-black font-bold text-lg">
                  Nomayen Hossain — Full Stack Developer
                </span>
              </div>

              <div className="space-y-8">
                <StatItem
                  icon={<Trophy className="w-6 h-6 text-[#ceff33]" />}
                  title="3+ Years"
                  desc="of hands-on experience in frontend and full-stack web development"
                />

                <StatItem
                  icon={<TrendingUp className="w-6 h-6 text-[#ceff33]" />}
                  title="10+ Live Projects"
                  desc="Production-ready websites and web applications deployed for real users"
                />

                <StatItem
                  icon={<Users className="w-6 h-6 text-[#ceff33]" />}
                  title="Global Clients"
                  desc="Worked with international clients through freelance and agency projects"
                />

                <StatItem
                  icon={<Briefcase className="w-6 h-6 text-[#ceff33]" />}
                  title="Industry Experience"
                  desc="Worked with PPC Rockers, Kodeeo, and Tahmid IT Park on real business products"
                />

                <StatItem
                  icon={<Award className="w-6 h-6 text-[#ceff33]" />}
                  title="Certified Developer"
                  desc="Completed professional certifications in web development and software engineering"
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6 h-full">

            {/* Image */}
            <div className="flex-grow bg-[#1a1c23] rounded-[2.5rem] overflow-hidden relative border border-white/5 shadow-2xl min-h-[400px]">
              <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-blue-500 blur-sm opacity-50"></div>
              <div className="absolute top-8 right-8 text-blue-500/30">
                <Award className="w-12 h-12" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-blue-600/20 rotate-12 -z-10 blur-2xl rounded-full"></div>
                  <img
                    src={profileImg}
                    alt="Nomayen Hossain"
                    className="w-full h-full object-cover rounded-[1.5rem] brightness-110 contrast-105"
                  />
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-blue-600 rounded-[2.5rem] p-10 relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-white/20 -rotate-12" />
              <p className="text-white text-2xl font-medium relative z-10 leading-relaxed italic">
                "I focus on building clean, fast, and scalable web applications that solve real problems and deliver real value."
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

const StatItem = ({ icon, title, desc }) => (
  <div className="flex gap-5">
    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="text-white text-xl font-bold">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{desc}</p>
    </div>
  </div>
)

export default Speaker
