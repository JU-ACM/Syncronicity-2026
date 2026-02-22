function DesktopOnly({ children }: { children: React.ReactNode }) {
  if (typeof window === 'undefined') return null

  const isDesktop =
    window.matchMedia('(hover: hover)').matches &&
    window.matchMedia('(pointer: fine)').matches

  return isDesktop ? <>{children}</> : null
}
export default DesktopOnly;