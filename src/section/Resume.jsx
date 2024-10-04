import Button from "../components/Button"
import ResumeFile from "../components/ResumeFile"

const Resume = () => {
    return (
        <section className="c-space mt-20" id="resume">
            <p className="head-text pb-8">View my Resume</p>

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />
                <ResumeFile />
            </div>
        </section>
    )
    }

export default Resume