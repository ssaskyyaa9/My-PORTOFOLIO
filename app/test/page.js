import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen bg-[#FEFBEE] text-[#930400] font-kurale selection:bg-[#930400] selection:text-[#FEFBEE]">
      <aside className="w-16 bg-[#930400] h-150 flex flex-col items-center py-8 rounded-r-2xl text-[#FEFBEE] shadow-lg self-start">
        <div className="flex flex-col items-center w-full h-full">
          <div className="text-xl mb-4 text-[#FEFBEE] z-10 relative">•</div>

          <div className="flex-1 w-full flex flex-col justify-between items-center py-2">
            <div className="flex flex-col items-center leading-none tracking-wider lowercase font-leckerli text-lg">
              <span>a</span><span>b</span><span>o</span><span>u</span><span>t</span>
              <span className="my-1"></span>
              <span>m</span><span>e</span>
            </div>

            <div className="w-[1px] h-10 bg-[#FEFBEE]/40"></div>
            <div className="flex flex-col items-center leading-none tracking-wider lowercase font-leckerli text-lg">
              <span>s</span><span>k</span><span>i</span><span>l</span><span>l</span>
            </div>

            <div className="w-[1px] h-10 bg-[#FEFBEE]/40"></div>
            <div className="flex flex-col items-center leading-none tracking-wider lowercase font-leckerli text-lg">
              <span>p</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span>
            </div>
          </div>
          <div className="text-xl mt-4 text-[#FEFBEE] z-10 relative">•</div>
        </div>

        <div className="flex flex-col items-center gap-15 w-full pt-17">
         <a href="#" className="group w-8 h-8 relative">
            <img src="/assets/github.png" alt="Github" className="group-hover:animate-float-icon w-full h-full object-contain transition-all duration-300 ease-out group-hover:scale-125 group-hover:-rotate-12 group-hover:-translate-y-2 group-hover:drop-shadow-xl" />
         </a>

         <a href="#" className="group w-8 h-8 relative">
            <img src="/assets/message.png" alt="Message" className=" group-hover:animate-float-icon w-full h-full object-contain transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-12 group-hover:-translate-y-2 group-hover:drop-shadow-xl" />
         </a>

         <a href="#" className="group w-8 h-8 relative">
            <img src="/assets/whatsapp.png" alt="Whatsapp" className="group-hover:animate-float-icon w-full h-full object-contain transition-all duration-300 ease-out group-hover:scale-125 group-hover:-rotate-12 group-hover:-translate-y-2 group-hover:drop-shadow-xl" />
         </a>

         <a href="#" className="group w-8 h-8 relative">
            <img src="/assets/telegram.png" alt="Telegram" className="group-hover:animate-float-icon w-full h-full object-contain transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-12 group-hover:-translate-y-2 group-hover:drop-shadow-xl" />
         </a>

         <a href="#" className="group w-8 h-8 relative">
            <img src="/assets/instagram.png" alt="Instagram" className="group-hover:animate-float-icon w-full h-full object-contain transition-all duration-300 ease-out group-hover:scale-125 group-hover:-rotate-12 group-hover:-translate-y-2 group-hover:drop-shadow-xl" />
         </a>
        </div>
      </aside>

      <main className="flex-1 pl-11 pr-11 py-10 relative overflow-hidden">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <h1 className="font-lavishly text-5xl text-[#930400] border-b border-[#930400]/30 pb-2 px-2"> My Portfolio </h1>
          </div>

          <a href="/cv-saskya.pdf" download="CV_Saskya_Tia_Ramadhani.pdf"
            className="inline-flex items-center gap-4 border border-merah pl-6 pr-1 py-1 rounded-full bg-transparent hover:scale-105 hover:shadow-md active:scale-98 transition-all duration-300 ease-out group cursor-pointer" >
            <span className="text-sm font-medium tracking-wide font-kurale text-merah select-none">
              Download CV
            </span>
            <div className="w-9 h-9 relative flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
              <img src="/assets/piw.png" alt="Download" className="w-7 h-7 object-contain" />
            </div>
          </a>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-medium">Hello! I'm</h3>
              <h2 className="text-5xl font-kurale tracking-wide text-[#930400]"> Saskya Tia Ramadhani </h2>
              <div className="inline-flex items-center gap-2 mt-3 border border-[#930400] px-4 py-1 rounded-full text-sm">
                <span className="w-2 h-2 bg-[#930400] rounded-full"></span>
                Software Engineering Student
              </div>
            </div>

            <hr className="border-[#930400]/30 w-full" />
            <div className="space-y-4">
              <div className="inline-flex rounded-xl items-center border border-[#930400] pl-5 pr-0 py-0 bg-[#FEFBEE] select-none h-9 overflow-hidden">
                <span className="text-sm font-medium text-[#930400] font-kurale"> About Me </span>
                <div className="w-10 h-10 bg-[#930400] rounded-xl flex items-center justify-center flex-shrink-0 ml-4">
                  <Image src="/assets/about.png" alt="About" width={14} height={14} className="brightness-0 invert object-contain" />
                </div>
              </div>

              <div className="bg-[#930400] text-[#FEFBEE] p-8 rounded-3xl shadow-xl relative min-h-355px w-150 flex flex-col justify-start gap-7">
                <div className="w-5 h-5 bg-[#FEFBEE] rounded-full"></div>
                <p className="text-lg leading-relaxed font-light tracking-wide text-justify text-[#FEFBEE] ">
                  Hello! I'm Saskya Tia Ramadhani, a Software Engineering student with a strong passion
                  for building modern web applications. I am particularly interested in Front-End
                  Development and enjoy creating responsive, user-friendly, and visually appealing digital
                  experiences.
                </p>
                <p className="text-lg leading-relaxed font-light tracking-wide text-justify text-[#FEFBEE] ">
                  I am always eager to learn new technologies, improve my technical skills, and continue
                  growing as a developer.
                </p>
              </div>
            </div>

            <div className="relative pt-3">
             <img src="/assets/pin.png" alt="Pin" className="absolute -top-9 -right-25 w-22 h-22 rotate-12" />
             <div className="bg-[#FEFBEE] border border-[#930400] rounded-3xl px-7 py-2 w-150" style={{ boxShadow: "6px 6px 0px #930400", }} >
                <div className="inline-block bg-[#930400] text-[#FEFBEE] px-7 py-1 rounded-xl font-kurale text-xl mb-3 mt-2"> Soft Skills </div>
                <div className="grid grid-cols-2 gap-y-3 gap-x-12 font-kurale text-[#930400] text-lg top-5 mb-2">
                  <div className="flex items-center gap-5">
                    <div className="w-4 h-4 rounded-full bg-[#FEFBEE]" style={{ boxShadow: "3px 3px 4px rgba(0,0,0,.25)" }} ></div> 
                        <span>Communication</span> 
                    </div>

                    <div>Teamwork</div>
                    <div className="flex items-center gap-5">
                    <div className="w-4 h-4 rounded-full bg-[#FEFBEE]" style={{ boxShadow: "3px 3px 4px rgba(0,0,0,.25)" }} ></div>
                     <span>Problem Solving</span>
                    </div>

                    <div>Adaptability</div>
                     <div className="flex items-center gap-5">
                      <div className="w-4 h-4 rounded-full bg-[#FEFBEE]" style={{ boxShadow: "3px 3px 4px rgba(0,0,0,.25)" }} ></div>
                         <span>Time Management</span>
                        </div>

                        <div>Responsibility</div>
                        <div className="flex items-center gap-5">
                         <div className="w-4 h-4 rounded-full bg-[#FEFBEE]" style={{ boxShadow: "3px 3px 4px rgba(0,0,0,.25)" }} ></div>
                           <span>Willingness to Learn</span>
                         </div>
                        <div>
                      </div>
                     </div>
                    </div>
                </div>
            </div>

          <div className="lg:col-span-6 flex flex-col items-end space-y-8 relative">
            <div className="relative w-[320px] h-[320px] mr-8">
              <Image src="/assets/foto.png" alt="Saskya" fill className="object-contain" priority />
            </div>

            <div className="absolute left-20 top-56 w-24 h-24 pointer-events-none select-none" style={{ animation: 'jalurTerbang 7s ease-in-out infinite' }} >
              <div className="w-full h-full flex items-center justify-center" style={{ animation: 'kepakSayap3D 0.5s ease-in-out infinite', transformOrigin: 'center' }} >
                <Image src="/assets/pukupu.png" alt="Butterfly Decoration" width={96} height={96} className="object-contain" />
              </div>
            </div>

            <div className="w-full max-w-[460px] space-y-4 pt-2 -mt-5">
              <div className="flex justify-end">
                <div className="inline-flex rounded-xl items-center border border-[#930400] pl-5 pr-0 py-0 bg-[#FEFBEE] select-none h-9 overflow-hidden">
                  <span className="text-sm font-medium text-[#930400] font-kurale">
                    Technical Skills
                  </span>

                 <div className="w-10 h-10 ml-4 bg-[#930400] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Image src="/assets/skill.png" alt="Skills" width={17} height={17} className="brightness-0 invert object-contain ml-1" />
                 </div>
                </div>
              </div>

              <div className="bg-[#930400] p-6 rounded-3xl shadow-xl">
                <div className="w-5 h-5 bg-[#FEFBEE] rounded-xl mb-6"></div>

                <div className="space-y-3">
                    <div className="overflow-hidden">
                     <div className="flex gap-4 ml-1 animate-skill-right">
                        <span className="bg-[#FEFBEE] text-[#930400] px-6 py-1.5 rounded-lg text-sm font-kurale shadow-sm">HTML</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-5 py-1.5 rounded-lg text-sm font-kurale shadow-sm">CSS</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-8 py-1.5 rounded-lg text-sm font-kurale shadow-sm">Tailwind</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-8 py-1.5 rounded-lg text-sm font-kurale shadow-sm">React</span>
                     </div>
                    </div>

                    <div className="overflow-hidden">
                     <div className="flex gap-4 ml-1 animate-skill-left">
                        <span className="bg-[#FEFBEE] text-[#930400] px-7 py-1.5 rounded-lg text-sm font-kurale shadow-sm">JavaScript</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-8 py-1.5 rounded-lg text-sm font-kurale shadow-sm">React Native</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-7 py-1.5 rounded-lg text-sm font-kurale shadow-sm">Express.js</span>
                     </div>
                    </div>

                    <div className="overflow-hidden">
                     <div className="flex gap-4 ml-1 animate-skill-right">
                        <span className="bg-[#FEFBEE] text-[#930400] px-7 py-1.5 rounded-lg text-sm font-kurale shadow-sm">Next.js</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-6 py-1.5 rounded-lg text-sm font-kurale shadow-sm">Python</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-6 py-1.5 rounded-lg text-sm font-kurale shadow-sm">MySQL</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-6 py-1.5 rounded-lg text-sm font-kurale shadow-sm">Expo</span>
                     </div>
                    </div>

                    <div className="overflow-hidden">
                     <div className="flex gap-4 ml-1 animate-skill-left">
                        <span className="bg-[#FEFBEE] text-[#930400] px-6 py-1.5 rounded-lg text-sm font-kurale shadow-sm">TypeScript</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-6 py-1.5 rounded-lg text-sm font-kurale shadow-sm">Node.js</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-6 py-1.5 rounded-lg text-sm font-kurale shadow-sm">Git</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-6 py-1.5 rounded-lg text-sm font-kurale shadow-sm">Github</span>
                     </div>
                    </div>

                    <div className="overflow-hidden">
                     <div className="flex gap-4 ml-1 animate-skill-right">
                        <span className="bg-[#FEFBEE] text-[#930400] px-10 py-1.5 rounded-lg text-sm font-kurale shadow-sm">Supabase</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-10 py-1.5 rounded-lg text-sm font-kurale shadow-sm">Docker</span>
                        <span className="bg-[#FEFBEE] text-[#930400] px-9 py-1.5 rounded-lg text-sm font-kurale shadow-sm">Figma</span>
                     </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="pt-3 relative w-full flex flex-col items-end">
              <img src="/assets/panah.png" alt="Arrow" className="animate-arrow absolute left-10 top-3 test-rotate w-43 select-none pointer-events-none" />
              <p className="font-lavishly mr-23 text-6xl text-[#930400] italic leading-none">
                Let's take a look at
              </p>
              <div className="flex items-center justify-end gap-2 -mt-4">
                <p className="font-lavishly mr-2 text-6xl text-[#930400] italic leading-none">
                  some of my projects!
                </p>
              </div>
            </div>

           <div className="flex items-center justify-center gap-8 mt-15 mb-20">
            <div className="flex items-center gap-8">
                <div className="w-16 h-1 bg-[#930400] rounded-full"></div>
                <div className="w-16 h-1 bg-[#930400] rounded-full"></div>
                <div className="w-16 h-1 bg-[#930400] rounded-full"></div>
                <div className="w-16 h-1 bg-[#930400] rounded-full"></div> 
                <div className="w-16 h-1 bg-[#930400] rounded-full"></div> 
            </div>

            <h2 className="font-kurela text-[#930400] text-6xl"> Projects </h2>

            <div className="flex items-center gap-8">
                <div className="w-16 h-1 bg-[#930400] rounded-full"></div>
                <div className="w-16 h-1 bg-[#930400] rounded-full"></div>
                <div className="w-16 h-1 bg-[#930400] rounded-full"></div>
                <div className="w-16 h-1 bg-[#930400] rounded-full"></div>
                <div className="w-16 h-1 bg-[#930400] rounded-full"></div>
            </div>
           </div>
          </div>
        </div>
      </main>
    </div>
  );
}