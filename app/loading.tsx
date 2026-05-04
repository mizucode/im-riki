export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
      {/* Glow effect */}
      <div className="absolute top-0 left-0 h-full bg-blue-500 w-full animate-progress origin-left shadow-[0_0_10px_#3b82f6]"></div>
    </div>
  )
}
