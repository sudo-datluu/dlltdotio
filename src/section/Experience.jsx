import { workExperiences } from '../constants/index.js'

const Experience = () => {
  return (
    <section className='c-space my-20' id="experience">
      <div className="w-full text-white-600">
        <p className="head-text pb-8">
          My Experience
        </p>
          
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                {workExperiences.map((item, index) => (
                  <div
                    key={index}
                    className="work-content_container group">
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img className={index == (workExperiences.length - 1) ? "w-full h-full" : "w-full h-full p-2.5"}  src={item.icon} alt="" />
                      </div>

                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{item.name}</p>
                      <p className="text-sm mb-3">
                        {item.location} | <span>{item.duration}</span>
                      </p>
                      {item.bulletpoints.map((bulletpoint) => (
                        <p className="group-hover:text-white transition-all ease-in-out duration-500 py-1">{bulletpoint}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience