function Card({ children }) {
  return (
    <div className="p-10 w-3/6 shadow-[0_1px_8px_0_rgba(0,0,0,0.25)] rounded-2xl flex items-center flex-col gap-5">
        {children}
    </div>
  )
}

export default Card