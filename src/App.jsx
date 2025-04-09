import { 
  UserGroupIcon, 
  LightBulbIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Patterns */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="circle-pattern circle-1"></div>
          <div className="circle-pattern circle-2"></div>
          <div className="circle-pattern circle-3"></div>
          <div className="circle-pattern circle-4"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-radial"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-transparent py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop" 
              alt="Logo" 
              className="h-8"
            />
          </div>
          <div className="flex gap-4 items-center">
            <button className="px-6 py-2 text-white/80 hover:text-white font-medium transition-colors">
              Login
            </button>
            <button className="px-6 py-2 bg-transparent border border-[#FF6B6B] text-white rounded-full hover:bg-[#FF6B6B] transition-all duration-300 font-medium">
              Find a CoFounder
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center relative z-10 pt-20">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            The Startup Community
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold mb-8">
            <span className="text-[#FF6B6B]">Start.</span>{' '}
            <span className="text-[#0066FF]">Grow.</span>{' '}
            <span className="text-[#FF69B4]">Fund.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            CoFoundersLab Is The Largest Startup Community On The Internet. 
            Accelerate Your Business Today.
          </p>
          <button className="px-8 py-4 bg-[#0066FF] text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
            🚀 Join For Free
          </button>
        </div>

        {/* Floating Avatars */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
            alt="" 
            className="absolute w-16 h-16 rounded-full left-1/4 top-1/4 transform -translate-x-1/2 animate-float"
          />
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
            alt="" 
            className="absolute w-16 h-16 rounded-full right-1/4 top-1/3 transform translate-x-1/2 animate-float-delayed"
          />
          <img 
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" 
            alt="" 
            className="absolute w-16 h-16 rounded-full left-1/3 bottom-1/4 transform -translate-x-1/2 animate-float"
          />
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
            alt="" 
            className="absolute w-16 h-16 rounded-full right-1/3 bottom-1/3 transform translate-x-1/2 animate-float-delayed"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20 -mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <UserGroupIcon className="h-16 w-16 text-[#FF6B6B]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Find a CoFounder</h3>
            <p className="text-gray-300">
              Find Your Perfect Partner Based On Interests, Skills And Location.
            </p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <LightBulbIcon className="h-16 w-16 text-[#0066FF]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Get the Right Advice</h3>
            <p className="text-gray-300">
              Get Exclusive Access To Industry Leaders To Accelerate Your Growth
            </p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <CurrencyDollarIcon className="h-16 w-16 text-[#FF69B4]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Get Funded</h3>
            <p className="text-gray-300">
              Prepare And Perfect Your Pitch To Get Your Business Funded Today!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App