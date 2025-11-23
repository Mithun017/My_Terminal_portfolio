import { FileSystem } from '@/types';

export const fileSystem: FileSystem = {
    "about": {
        type: "text",
        content: `
NAME: M Mithun
ROLE: AI & Data Science Undergraduate
STATUS: Online
LOCATION: Sri Eshwar College of Engineering

> DATA_PACKET:
Driven by data, powered by AI. I bridge the gap between theoretical innovation 
and practical application. With 30+ certifications and 35+ projects, I don't 
just build models; I engineer systems that solve real-world problems.

> MISSION:
To leverage Generative AI and Agentic Workflows to build the next generation 
of intelligent software.
    `
    },
    "skills": {
        type: "text",
        content: `
[LANGUAGES]  :: Python, C++, R, JavaScript
[AI / ML]    :: TensorFlow, PyTorch, LangChain, OpenAI, Hugging Face
[BACKEND]    :: FastAPI, Streamlit, Docker, MongoDB
[CLOUD/OPS]  :: AWS, Git, GitHub Actions
    `
    },
    "experience": {
        type: "text",
        content: `
[2025] CosmicIT :: AI & Software Engineering Intern
       > Developing autonomous AI agents.
       > Optimizing software architectures for scale.

[2024] ULN Tech :: Data Analysis & Backend Intern
       > Engineered robust data pipelines.
       > Built backend logic for data-driven apps.
    `
    },
    "projects": {
        type: "list",
        items: [
            {
                id: "agentic",
                title: "Agentic AI",
                description: "AI Agent-Based Response System",
                details: `
> "The Autonomous Brain"
> Problem: Standard chatbots lack reasoning capabilities for complex, multi-step tasks.
> Solution: Designed an autonomous agent framework using LangChain and GPT-4. Implemented a ReAct pattern allowing the agent to decompose queries, call external APIs, and synthesize answers dynamically.
> Impact: 40% improvement in complex query resolution.
> Stack: Python, LangChain, FastAPI, Streamlit.
        `
            },
            {
                id: "codecred",
                title: "CodeCred",
                description: "Research Guidance System",
                details: `
> "Research, Simplified"
> Problem: "Citation chaos" makes finding credible research papers time-consuming.
> Solution: An NLP-powered research assistant. Uses cosine similarity on abstract embeddings to recommend high-impact papers based on user drafts.
> Impact: Reduced literature review time by 60%.
> Stack: Python, NLTK, Scikit-learn, MongoDB.
        `
            },
            {
                id: "impact",
                title: "Impact Scope",
                description: "Collateral Damage Prediction",
                details: `
> "Predicting the Unseen"
> Problem: Reactive decision-making in conflict zones leads to avoidable collateral damage.
> Solution: A predictive model using geospatial data and deep learning to estimate damage radius before events occur.
> Impact: 85% accuracy in validation; highlighted ethical AI use in defense.
> Stack: TensorFlow, Keras, GeoPandas.
        `
            }
        ]
    },
    "contact": {
        type: "text",
        content: `
EMAIL: [Insert Email]
LINKEDIN: [Insert LinkedIn]
GITHUB: [Insert GitHub]
    `
    },
    "help": {
        type: "system",
        content: "Available commands: about, projects, skills, experience, contact, run <project_id>, clear, theme"
    }
};
