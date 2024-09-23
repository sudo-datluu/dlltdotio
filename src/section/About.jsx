import React from 'react'

const About = () => {
    return (
        <section className='c-space my-20'>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="" className='w-full sm:h-[276px] h-fit object-contain' />

                        <div>
                            <p className="grid-headtext">Hi, I’m David Luu</p>
                            <p className="grid-subtext">
                                With 4+ years of experience, I have honed my skills in data engineering and web development, creating robust and scalable
                                applications.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in a variety of languages, frameworks, and tools and I am always looking to learn more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About