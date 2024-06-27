import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import { style } from '../../node_modules/@mui/system/esm/Stack/createStack';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CTASection />
        </div>
    );
};

const HeroSection = () => (
    <section className="hero-section">
        <div className="container">
            <h1>Manage Your Social Media with Ease</h1>
            <p>All-in-one platform for social media management.</p>
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
        </div>
    </section>
);

const FeaturesSection = () => (
    <section className="features-section">
        <div className="container">
            <h2>Features</h2>
            <div className="features">
                <Feature
                    title="Schedule Posts"
                    description="Plan and schedule your social media posts in advance."
                />
                <Feature
                    title="Analytics"
                    description="Track the performance of your social media posts."
                />
                <Feature
                    title="Engage"
                    description="Interact with your audience from a single platform."
                />
            </div>
        </div>
    </section>
);

const Feature = ({ title, description }) => (
    <div className="feature">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const TestimonialsSection = () => (
    <section className="testimonials-section">
        <div className="container">
            <h2>What Our Users Say</h2>
            <div className="testimonials">
                <Testimonial
                    quote="This tool has transformed the way we manage our social media."
                    author="John Doe, Social Media Manager"
                />
                <Testimonial
                    quote="Easy to use and very effective."
                    author="Jane Smith, Marketing Specialist"
                />
            </div>
        </div>
    </section>
);

const Testimonial = ({ quote, author }) => (
    <div className="testimonial">
        <p>"{quote}"</p>
        <p><strong>{author}</strong></p>
    </div>
);

const CTASection = () => (
    <section className="cta-section">
        <div className="container">
            <h2>Ready to Boost Your Social Media?</h2>
            <Link to="/signup" className="btn btn-primary">Start Your Free Trial</Link>
        </div>
    </section>
);

export default LandingPage;
