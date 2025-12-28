INSERT INTO blog_posts (title, slug, content, created_at, updated_at) VALUES
(
    'Welcome to KitsPlace',
    'welcome-to-kitsplace',
    'This is the first post on **KitsPlace**!  
We''re excited to launch this platform and share updates about development, new features, and more.

Stay tuned for upcoming articles!',
    NOW(),
    NOW()
),
(
    'Setting Up the Development Environment',
    'setting-up-the-development-environment',
    'In this post, we will walk through how to get your environment ready.

### Steps  
1. Install Node.js  
2. Install PostgreSQL  
3. Install Docker  
4. Run the backend and frontend  

Feel free to reach out if you need help!',
    NOW(),
    NOW()
),
(
    'Using Markdown in Blog Posts',
    'using-markdown-in-blog-posts',
    'Our blog engine supports **Markdown**, which means you can use:  

- Headings  
- Bold / italics  
- Lists  
- Code blocks  


This makes writing posts easier and more flexible.',
    NOW(),
    NOW()
),
(
    'Roadmap for Future Features',
    'roadmap-for-future-features',
    'Here''s what we plan to add soon:  
- User authentication  
- Image upload inside the Markdown editor  
- Comments section  
- Tags & categories  
- Search  

It''s going to be a great journey!',
    NOW(),
    NOW()
),
(
    'Deploying KitsPlace with Docker and Kubernetes',
    'deploying-kitsplace-with-docker-and-kubernetes',
    'When the project is ready, we''ll explore deployment strategies.  
We will cover topics such as:

### Docker
- Multi-stage builds  
- Using Docker Compose  

### Kubernetes  
- Deployments  
- Services  
- Ingress  
- Horizontal scaling  

Stay tuned!',
    NOW(),
    NOW()
);
