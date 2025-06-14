const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="container h-screen justify-center flex">
      {children}
    </div>
  )
}

export default layout
