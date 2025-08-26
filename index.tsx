
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  :root {
    --background-color: #0a0a0a;
    --card-background: #141414;
    --text-color: #e0e0e0;
    --heading-color: #ffffff;
    --accent-color: #4A90E2;
    --border-color: #2a2a2a;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }

  main {
    max-width: 800px;
    width: 100%;
  }

  header {
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--heading-color);
    letter-spacing: -1px;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.25rem;
    color: var(--accent-color);
    font-weight: 600;
  }
  
  .meta-info {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    color: #a0a0a0;
  }

  .document-section {
    background-color: var(--card-background);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--heading-color);
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
  }
  
  h2 span {
    color: var(--accent-color);
    margin-right: 0.75rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #b8c1ec;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
  }

  li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.1;
  }

  strong {
    color: var(--heading-color);
    font-weight: 600;
  }
  
  code {
    background: #2a2a2a;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
  }
`;

const Section = ({ title, number, children }) => (
  <section className="document-section">
    <h2><span>{number}.</span> {title}</h2>
    {children}
  </section>
);

const App = () => {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <main>
      <header>
        <h1>Nexus AI Platform</h1>
        <p className="subtitle">CTO Onboarding & Engineering Blueprint</p>
        <div className="meta-info">
            <span>Version: 1.0</span>
            <span>For: Prospective CTO & Engineering Leads</span>
        </div>
      </header>
      
      <Section number={1} title="The Vision: Our North Star">
        <p><strong>Welcome to Nexus AI.</strong></p>
        <p>Our mission is to cure the "Chaos Tax"—the silent drain on time, focus, and revenue that plagues every modern business. We are not building features; we are building an <strong>autonomous AI workforce</strong> that handles the operational burden, allowing humans to do what they do best: create, strategize, and build relationships.</p>
        <p>We are creating a unified <strong>AI Operations Hub</strong> where a team of intelligent, specialized agents collaborate to manage scheduling, communications, sales pipelines, and internal knowledge. We are giving small and medium-sized businesses the operational leverage of a Fortune 500 company.</p>
      </Section>

      <Section number={2} title="The Product Architecture: A Unified Agentic System">
        <p>We are not building a collection of disconnected tools. We are building a single, cohesive platform built on a <strong>"Master Orchestrator + Specialized Agents"</strong> model.</p>
        <ul>
          <li><strong>Master Orchestrator:</strong> The central AI "brain" that receives all natural language commands. Its sole function is to analyze user intent and delegate tasks to the appropriate agent. This is the core of our IP.</li>
          <li><strong>Specialized Agents:</strong> A suite of modular, expert AI functions. Our initial agents form the "Personal Assistant Hub":
            <ul>
              <li><strong>Meeting Agent:</strong> Connects to user calendars (Google Calendar) to read schedules and create new events based on natural language. (Status: Deployed & Functional)</li>
              <li><strong>AI Callback Agent:</strong> Connects to a phone provider (Twilio) to handle missed calls, send intelligent SMS responses, and capture lost leads. (Status: Deployed & Functional)</li>
              <li><strong>Email Agent:</strong> Connects to user inboxes (Gmail) to read, categorize, and summarize emails. (Status: Deployed & Functional)</li>
            </ul>
          </li>
          <li><strong>Shared Knowledge Layer (The Future):</strong> Our long-term vision is a unified knowledge graph (likely powered by a vector database) that allows agents to share context and learn from each other, creating a network effect of intelligence.</li>
        </ul>
      </Section>
      
      <Section number={3} title="The Technology Stack: Modern, Scalable, and Fast">
        <p>We have made pragmatic, professional choices to prioritize speed to market and infinite scalability.</p>
        <ul>
          <li><strong>Framework:</strong> Next.js (App Router) - For a tightly integrated full-stack application.</li>
          <li><strong>Deployment:</strong> Vercel - For seamless, git-based deployments, global CDN, and serverless functions that scale automatically.</li>
          <li><strong>Database:</strong> Supabase (PostgreSQL) - For a robust, secure, and scalable relational database with built-in authentication and real-time capabilities.</li>
          <li><strong>Core AI:</strong> OpenAI API (GPT-3.5/4) - For all natural language understanding, classification, and generation tasks.</li>
          <li><strong>Key Integrations:</strong>
            <ul>
                <li>Google APIs (OAuth 2.0): For secure, user-consented access to Calendar and Gmail.</li>
                <li>Twilio API: For programmatic voice and SMS functionalities.</li>
            </ul>
          </li>
        </ul>
      </Section>

      <Section number={4} title="The Current State: Live & Operational">
        <p>We are not at the idea stage. We have a live, deployed, and functional MVP.</p>
        <ul>
            <li><strong>Deployment URL:</strong> <code>https://nexus-production-v1.vercel.app/</code></li>
            <li><strong>GitHub Repository:</strong> <code>github.com/colmeta/nexus-production-v1</code></li>
            <li><strong>Live Features:</strong>
                <ul>
                    <li>Functional UI: Homepage with command input and dashboards for Email & Callbacks.</li>
                    <li>Google OAuth 2.0 Flow: Secure, working connection to Google for user permissions.</li>
                    <li>Database Integration: User tokens are securely stored in Supabase.</li>
                    <li>Live Meeting Agent: Can successfully connect to a user's calendar and create events.</li>
                    <li>Live Email Agent: Can successfully connect to a user's inbox and list recent emails.</li>
                    <li>Live Callback Agent Backend: API is deployed and connected to Twilio.</li>
                </ul>
            </li>
        </ul>
      </Section>

      <Section number={5} title="The Engineering Roadmap: Your Mission">
        <p>Your role as CTO will be to take this powerful MVP and lead the charge to build a world-class SaaS platform. Here is the immediate roadmap.</p>
        <h3>Q3 (Immediate Priorities):</h3>
        <ul>
            <li><strong>Solidify Production Foundation:</strong> Implement robust logging, error monitoring (e.g., Sentry), and a formal dev/staging/prod environment strategy.</li>
            <li><strong>Full User Authentication:</strong> Replace our testUserId system with a complete Supabase email/password and Google SSO sign-up/login flow.</li>
            <li><strong>Token Management:</strong> Implement a secure, automated system for refreshing expired Google OAuth tokens using the <code>refresh_token</code>.</li>
            <li><strong>AI Categorization:</strong> Implement the final AI logic for the Email Agent to move beyond simple fetching and provide intelligent categorization.</li>
        </ul>
        <h3>Q4 (Revenue & Growth):</h3>
        <ul>
            <li><strong>Launch "Pro" Tier:</strong> Build out the Research Agent and Content Creation Agent.</li>
            <li><strong>Implement Metering & Billing:</strong> Integrate a payment provider (Stripe) and build the logic to track API usage and manage subscriptions.</li>
            <li><strong>Build Team/Workspace Functionality:</strong> Architect the database changes required to support multi-user accounts.</li>
        </ul>
        <h3>Year 2 (Scale & Dominance):</h3>
        <ul>
            <li><strong>Launch "Business" Tier:</strong> Build the Workflow Automation Hub, starting with the Sales Outreach Agent.</li>
            <li><strong>Build the Custom Agent Creator (RAG):</strong> Implement the core IP of our Knowledge Management Hub.</li>
            <li><strong>Scale the Team:</strong> Hire and mentor a world-class engineering team.</li>
        </ul>
      </Section>

      <Section number={6} title="Why This is an Outstanding Opportunity">
        <ul>
            <li><strong>We are Post-MVP:</strong> The hardest technical hurdles (OAuth, deployments, core AI logic) are already solved. You are not starting from zero; you are starting with a rocket on the launchpad.</li>
            <li><strong>Clear Product-Market Fit:</strong> We are solving a universal, high-value problem for a massive market (SMBs and enterprises).</li>
            <li><strong>Modern, Enjoyable Stack:</strong> You will be working with the best tools in the industry, with no legacy code.</li>
            <li><strong>Founder-Level Impact:</strong> You will be the technical visionary, shaping the product, the architecture, and the culture from the ground up.</li>
        </ul>
        <p>We are looking for a partner, a leader, and a builder to join us on this journey. We believe we have the foundation to build a defining company in the AI space. <strong>We are looking for you to help us build the skyscraper.</strong></p>
      </Section>

    </main>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
