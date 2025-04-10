import { motion } from 'framer-motion';
import Header from './home/Header';
import Footer from './Footer';

const plans = [
    {
        name: 'Free',
        price: '$0',
        period: 'forever',
        description: 'Perfect for getting started',
        features: [
            'Basic profile',
            'Limited connections',
            'Community access',
            'Basic search filters'
        ],
        cta: 'Current Plan',
        popular: false
    },
    {
        name: 'Premium',
        price: '$29',
        period: 'per month',
        description: 'Most popular for active founders',
        features: [
            'Enhanced profile visibility',
            'Unlimited connections',
            'Advanced search filters',
            'Priority support',
            'Access to exclusive events',
            'Message read receipts',
            'Profile analytics'
        ],
        cta: 'Get Premium',
        popular: true
    },
    {
        name: 'Enterprise',
        price: '$99',
        period: 'per month',
        description: 'For serious entrepreneurs',
        features: [
            'All Premium features',
            'Dedicated account manager',
            'Custom branding',
            'API access',
            'Advanced analytics',
            'Team collaboration',
            'Priority matching'
        ],
        cta: 'Contact Sales',
        popular: false
    }
];

export default function Premium() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white">
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Upgrade to
                        <span className="bg-gradient-to-r from-[#0475DC] to-[#48AAFF] bg-clip-text text-transparent"> Premium</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Get access to exclusive features and connect with more founders worldwide
                    </motion.p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-2xl p-8 ${plan.popular
                                    ? 'bg-gradient-to-b from-[#0475DC] to-[#0475DC]/50 border-2 border-[#48AAFF]'
                                    : 'bg-[#1A1A1A] border border-gray-800'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-[#48AAFF] text-white text-sm font-medium px-3 py-1 rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-gray-400">/{plan.period}</span>
                                </div>
                                <p className="text-gray-400 mt-2">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#48AAFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular
                                        ? 'bg-white text-[#0475DC] hover:bg-gray-100'
                                        : 'bg-[#0475DC] text-white hover:bg-[#0475DC]/90'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Features Section */}
                <div className="mt-32">
                    <h2 className="text-3xl font-bold text-center mb-16">Why Go Premium?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🚀',
                                title: 'Enhanced Visibility',
                                description: 'Get featured at the top of search results and increase your chances of finding the perfect match.'
                            },
                            {
                                icon: '💬',
                                title: 'Unlimited Messaging',
                                description: 'Connect with as many founders as you want and build meaningful relationships.'
                            },
                            {
                                icon: '📊',
                                title: 'Advanced Analytics',
                                description: 'Get detailed insights about your profile views and engagement metrics.'
                            },
                            {
                                icon: '🎯',
                                title: 'Smart Matching',
                                description: 'Our AI-powered algorithm finds the most relevant connections for your needs.'
                            },
                            {
                                icon: '🔍',
                                title: 'Advanced Filters',
                                description: 'Fine-tune your search with advanced filters to find exactly what you\'re looking for.'
                            },
                            {
                                icon: '👥',
                                title: 'Priority Support',
                                description: 'Get faster responses and dedicated support for all your questions.'
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#1A1A1A] rounded-lg p-6"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-32">
                    <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                question: 'Can I cancel my subscription anytime?',
                                answer: 'Yes, you can cancel your subscription at any time. Your premium features will remain active until the end of your billing period.'
                            },
                            {
                                question: 'Is there a free trial?',
                                answer: 'We offer a 14-day free trial for our Premium plan. You can explore all premium features during this period.'
                            },
                            {
                                question: 'What payment methods do you accept?',
                                answer: 'We accept all major credit cards, PayPal, and bank transfers for business accounts.'
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#1A1A1A] rounded-lg p-6"
                            >
                                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                                <p className="text-gray-400">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}