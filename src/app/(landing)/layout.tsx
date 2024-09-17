import LandingPageNavBar from "./_components/navbar"

type Props = {}

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col container relative">
            <LandingPageNavBar />
            {children}
        </div>
    )
}

export default LandingPageLayout
