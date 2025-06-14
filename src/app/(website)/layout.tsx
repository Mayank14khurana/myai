import LandingPageNavbar from "./_components/navbar"

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex flex-col py-10 px-10 xl:px-0 mx-auto  2xl:max-w-[1400px]">
        <LandingPageNavbar/>
        {children}
    </div>
  )
}

export default layout
