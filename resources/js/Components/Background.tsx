export default function Background({children}: Children) {
  return (
    <div 
        style={{backgroundImage: 'url("/background.webp")',}}
        className="min-h-screen  flex flex-col fixed inset-0 overflow-y-auto bg-cover bg-center bg-fixed"
      >     
      {children}
    </div>
  )
}

