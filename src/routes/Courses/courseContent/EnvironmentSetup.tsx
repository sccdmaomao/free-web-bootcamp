import CoursePageLayout from '../components/CoursePageLayout'
import CourseSection from '../components/CourseSection'

const EnvironmentSetup = () => {
    return (
        <CoursePageLayout title={'Development Environment'}>
            <CourseSection sectionTitle="What is a development environment">
                <div>
                    Development Environment, short for environment is the setup
                    and configuration of tools, libraries, and dependencies
                    needed for developing, testing, and deploying React
                    applications `react-js-vsc image here`
                </div>

                <div>
                    it is essential first step before we dive into any learning,
                    setting up things correctly will boost our learning
                    experience significantly
                </div>
            </CourseSection>
            <CourseSection sectionTitle="Mac environments setup">
                <div>
                    things we need: (Hover to read more about what these tools
                    are)
                    <ol>
                        <li>Visual Studio Code</li>
                        <li>Node.js</li>
                        <li>npm</li>
                    </ol>
                </div>
            </CourseSection>
            <CourseSection sectionTitle="Windows environments setup">
                <div>
                    things we need: (Hover to read more about what these tools
                    are)
                    <ol>
                        <li>Visual Studio Code</li>
                        <li>Node.js</li>
                        <li>npm</li>
                    </ol>
                </div>
            </CourseSection>
        </CoursePageLayout>
    )
}

export default EnvironmentSetup
