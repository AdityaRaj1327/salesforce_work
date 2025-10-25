import TabWidget from '@/components/TabWidget'
import Gallery from '@/components/Gallery'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Empty but responsive */}
        <div className="hidden lg:block lg:w-1/2 bg-dark-bg">
          {/* This section is intentionally empty */}
        </div>

        {/* Right Side - Widgets */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 space-y-8">
          {/* Tab Widget */}
          <TabWidget />

          {/* Divider */}
          <div className="h-px bg-dark-border my-8"></div>

          {/* Gallery Widget */}
          <Gallery />
        </div>
      </div>
    </main>
  )
}
