// client/src/pages/Home.jsx
import useAuth from "../hooks/useAuth";

function Home() {
  const { auth, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-4 sm:px-6 border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center transition-all duration-300">
          <div className="flex items-center space-x-3 mb-4 md:mb-0 transform transition-all hover:scale-105">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <h1 className="text-2xl font-bold text-emerald-800">UmojaFund</h1>
          </div>

          <div className="flex items-center space-x-4">
            {auth ? (
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center">
                <span className="text-emerald-700 font-medium">
                  Welcome, {auth.name}
                </span>

                <a
                  href="/dashboard"
                  className="bg-gradient-to-r from-emerald-500 to-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  Dashboard
                </a>

                <button
                  onClick={logout}
                  className="text-emerald-600 hover:text-emerald-800 transition font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 text-center">
                <a
                  href="/login"
                  className="text-emerald-700 hover:text-amber-600 transition font-medium"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="bg-gradient-to-r from-emerald-500 to-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  Start Fundraising
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto fade-in">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow shadow-lg">
            <span className="text-white text-2xl">🤝</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-900 mb-6 leading-tight px-2">
            Fund Your Dreams,
            <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              {" "}
              Together We Rise
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-emerald-700 mb-8 leading-relaxed px-2">
            Join thousands of Africans transforming lives through community-powered crowdfunding.
            From education and healthcare to business startups – your support makes it possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {!auth && (
              <>
                <a
                  href="/register"
                  className="bg-gradient-to-r from-emerald-500 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  Start a Campaign ›
                </a>

                <a
                  href="/projects"
                  className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 hover:shadow-md transition-all"
                >
                  Explore Causes ›
                </a>
              </>
            )}

            {auth && (
              <a
                href="/dashboard"
                className="bg-gradient-to-r from-emerald-500 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Go to Dashboard ›
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Funds Raised", value: "$2.1M+" },
              { label: "Campaigns Funded", value: "5,247" },
              { label: "Community Backers", value: "48,912" },
              { label: "Success Rate", value: "82%" },
            ].map((item, i) => (
              <div
                key={i}
                className="transition-all hover:scale-105 hover:shadow-lg p-4 rounded-xl"
              >
                <div className="text-3xl font-bold text-amber-600">{item.value}</div>
                <div className="text-emerald-700">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-900 mb-4">
          Recently Funded Success Stories
        </h2>

        <p className="text-emerald-600 text-center text-lg mb-12 max-w-2xl mx-auto px-4">
          See how our community is making a real difference across Africa
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Mwangi's University Education", desc: "Raised $3,200 for engineering school fees", backers: 48, color: "from-emerald-400 to-emerald-600" },
            { title: "Nairobi Women's Bakery", desc: "Community bakery startup for single mothers", backers: 67, color: "from-amber-400 to-amber-600" },
            { title: "Medical Fund for Baby Aisha", desc: "Heart surgery for 6-month-old Aisha", backers: 89, color: "from-emerald-400 to-amber-500" }
          ].map((campaign, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100 hover:border-emerald-300"
            >
              <div
                className={`h-48 bg-gradient-to-r ${campaign.color} transition-all`}
              ></div>

              <div className="p-6">
                <span className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full font-medium mb-3 inline-block">
                  Fully Funded
                </span>

                <h3 className="text-xl font-bold text-emerald-900 mb-3">
                  {campaign.title}
                </h3>

                <p className="text-emerald-600 mb-4 leading-relaxed">
                  {campaign.desc}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-bold">125% Funded</span>
                  <span className="text-amber-600">{campaign.backers} backers</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-amber-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>

          <p className="text-emerald-100 text-lg sm:text-xl mb-8 leading-relaxed px-2">
            Join our community of changemakers. Whether you need support or want to support others,
            UmojaFund connects people who care with causes that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Start Your Campaign
            </a>

            <a
              href="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 hover:shadow-xl transition-all"
            >
              Browse Causes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
