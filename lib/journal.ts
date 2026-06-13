export interface ArticleBlock {
  type: 'paragraph' | 'heading' | 'list' | 'code' | 'quote'
  content: string | string[]
  level?: 2 | 3 | 4
  language?: string
}

export interface Article {
  slug: string
  title: string
  subtitle: string
  description: string
  date: string
  lastUpdated: string
  readTime: string
  category: string
  author: {
    name: string
    role: string
    avatar: string
  }
  heroImage: string
  blocks: ArticleBlock[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  faqs: { question: string; answer: string }[]
}

export const articles: Article[] = [
  {
    slug: 'model-context-protocol-ai-infrastructure',
    title: 'Model Context Protocol (MCP): Building Grounded AI Architectures',
    subtitle: 'Stop LLM hallucinations by establishing structured, context-rich pathways directly into your database and API layers.',
    description: 'An engineering deep-dive into Model Context Protocol (MCP). Learn how standardizing the database-to-LLM layer eliminates hallucinations and creates reliable, production-ready AI agents.',
    date: '2026-05-18',
    lastUpdated: '2026-05-22',
    readTime: '8 min read',
    category: 'AI Infrastructure',
    author: {
      name: 'Meghansh',
      role: 'Core AI Engineer',
      avatar: '/favicon.svg'
    },
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'heading',
        level: 2,
        content: 'The Context Chasm in Agentic AI'
      },
      {
        type: 'paragraph',
        content: 'For years, developers building AI applications have struggled with a persistent chasm: the space between the reasoning capabilities of Large Language Models (LLMs) and the proprietary, structured environments where real business data lives. While LLMs excel at language processing, their operational efficacy is strictly bound by the context they are fed.'
      },
      {
        type: 'paragraph',
        content: 'Traditional integrations rely on custom-coded glue—ad-hoc API fetch scripts, brittle RAG (Retrieval-Augmented Generation) pipelines, and hand-crafted JSON serialization helper classes. This approach creates high maintenance overhead and introduces massive latency. More importantly, it leaves the LLM operating on incomplete or misaligned state data, leading to the dreaded problem of hallucinations.'
      },
      {
        type: 'quote',
        content: 'The Model Context Protocol (MCP) solves this by defining a standardized, secure bidirectional protocol that allows LLMs to query databases, file systems, and internal APIs in a safe, schema-grounded fashion.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'What is Model Context Protocol?'
      },
      {
        type: 'paragraph',
        content: 'Originally conceptualized to unify how AI applications connect to external data sources, MCP is an open-standard JSON-RPC-based protocol. It establishes a client-server architecture where the LLM application acts as the client, and custom-engineered data connectors act as MCP servers.'
      },
      {
        type: 'paragraph',
        content: 'Through MCP, a server can safely expose three core primitives to the AI Client:'
      },
      {
        type: 'list',
        content: [
          '**Resources**: Read-only data sources like database tables, log streams, local files, or API payloads that supply grounding context to the model.',
          '**Tools**: Executable actions that the model can invoke to perform side-effects, such as updating a record in a CRM, creating a file, or sending an automated Slack notification.',
          '**Prompts**: Pre-structured templates that guide the LLM through complex processes, enforcing system alignment.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Inside an MCP Server: Schema Grounding'
      },
      {
        type: 'paragraph',
        content: 'By implementing an MCP server, you provide the model with a clear, machine-readable schema. Rather than guessing the structure of your internal databases, the AI queries the server, receives a precise TypeScript/JSON schema definition, and crafts its arguments accordingly. This eliminates parameter mismatches and guarantees execution safety.'
      },
      {
        type: 'code',
        language: 'typescript',
        content: `import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

const server = new Server({
  name: 'meghroop-studio-db-connector',
  version: '1.0.0'
}, {
  capabilities: { tools: {} }
});

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: 'fetch_customer_insights',
    description: 'Fetch grounded telemetry and purchasing habits for a client.',
    inputSchema: {
      type: 'object',
      properties: {
        customerId: { type: 'string', description: 'The unique UUID of the client' }
      },
      required: ['customerId']
    }
  }]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === 'fetch_customer_insights') {
    const { customerId } = request.params.arguments as { customerId: string };
    // Safe database operations occur here
    const insights = await db.query('SELECT * FROM customer_telemetry WHERE id = $1', [customerId]);
    return {
      content: [{ type: 'text', text: JSON.stringify(insights) }]
    };
  }
  throw new Error('Tool not found');
});

const transport = new StdioServerTransport();
await server.connect(transport);`
      },
      {
        type: 'heading',
        level: 2,
        content: 'Architecting for Production: Security and Latency'
      },
      {
        type: 'paragraph',
        content: 'Moving MCP servers to production requires a strict focus on security. Because MCP tools give LLMs the power to execute database queries and trigger API actions, you must implement strong sandboxing and strict authorization boundaries.'
      },
      {
        type: 'list',
        content: [
          '**Least Privilege Authorization**: Ensure the database credentials used by the MCP server only have read/write access to the specific tables needed for the task.',
          '**Input Sanitation & Validation**: Run all parameters received from the LLM through runtime validation schemas (e.g. Zod) to prevent SQL injection or system compromise.',
          '**Rate Limiting & Cost Gates**: Implement execution limits to protect internal networks from infinite agent loops, which can drive up API costs.'
        ]
      },
      {
        type: 'paragraph',
        content: 'At MeghRoop, we build bespoke [MCP infrastructure](/mcp-infrastructure) using ultra-lightweight deployments that compile directly to secure, edge-running environments. This ensures that when your AI agent is running, the context retrieval round-trip is measured in single-digit milliseconds, creating a seamless user experience.'
      }
    ],
    seo: {
      title: 'Model Context Protocol (MCP) AI Playbook',
      description: 'Stop LLM hallucinations by establishing structured, context-rich pathways directly into your database and API layers with custom MCP servers.',
      keywords: ['Model Context Protocol', 'MCP server development', 'AI grounding infrastructure', 'agentic AI systems', 'LLM databases integration', 'custom AI tools', 'production AI agents']
    },
    faqs: [
      {
        question: 'What is the main benefit of Model Context Protocol (MCP)?',
        answer: 'MCP standardizes how AI applications connect to external data sources and execution environments. This eliminates the need for custom, brittle integration code and provides LLMs with grounded, schema-validated context, which dramatically reduces hallucinations.'
      },
      {
        question: 'Is MCP secure enough for enterprise databases?',
        answer: 'Yes, when architected correctly. MCP servers act as a secure gateway, executing inside your VPC or serverless sandbox. By applying strict input validation (using tools like Zod) and minimal database permissions, you can prevent unauthorized access or injection attacks.'
      }
    ]
  },
  {
    slug: 'generative-engine-optimization-ai-search',
    title: 'Generative Engine Optimization (GEO): The Playbook for AI Search',
    subtitle: 'Traditional SEO is shifting. Here is how to optimize your digital footprint to rank inside ChatGPT, Perplexity, and Google AI Overviews.',
    description: 'A comprehensive engineering guide to Generative Engine Optimization (GEO). Learn how modern Retrieval-Augmented Generation engines parse the web and how to structure your website to maximize AI brand citations.',
    date: '2026-05-15',
    lastUpdated: '2026-05-22',
    readTime: '7 min read',
    category: 'AI Search Optimization',
    author: {
      name: 'Roop',
      role: 'Systems & SEO Architect',
      avatar: '/favicon.svg'
    },
    heroImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'heading',
        level: 2,
        content: 'The Shift from Links to Citations'
      },
      {
        type: 'paragraph',
        content: 'For nearly three decades, search engine optimization was defined by keywords, backlinks, and domain authority. If you wanted search traffic, you built a high-authority backlink profile and structured your pages so Google’s spiders could index them for search query matching.'
      },
      {
        type: 'paragraph',
        content: 'That era is quickly evolving. With the rise of Search Generative Experience (SGE), Perplexity AI, ChatGPT Search, and Claude Projects, users are no longer clicking through a list of ten blue links. Instead, they ask complex, multi-turn questions and receive synthesized, conversational answers populated with embedded citations.'
      },
      {
        type: 'quote',
        content: 'If your brand is not mentioned and cited within these AI-synthesized responses, you do not exist for a massive segment of modern internet users.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'How AI Search Engines Work: The RAG Pipeline'
      },
      {
        type: 'paragraph',
        content: 'To understand Generative Engine Optimization (GEO), we must understand the pipeline powering AI engines. They rely on a process called Retrieval-Augmented Generation (RAG):'
      },
      {
        type: 'list',
        content: [
          '**Query Expansion**: The AI search engine takes a user query and rewrites it into multiple semantic searches.',
          '**Web Retrieval**: High-speed crawlers scan index databases to retrieve the most semantically relevant text fragments from across the web.',
          '**Context Synthesis**: A large language model reads these retrieved snippets, summarizes the facts, and generates a conversational response.',
          '**Citation Mapping**: The model tags specific sentences with links to the source websites that provided the facts.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'The 4 Pillars of Generative Engine Optimization'
      },
      {
        type: 'paragraph',
        content: 'To optimize your site for this RAG pipeline, you must move beyond simple keyword stuffing. You need to structure your data to match how LLMs extract and synthesize facts.'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Semantic Wording and Direct Authority'
      },
      {
        type: 'paragraph',
        content: 'LLMs value clarity and directness. When indexing a page, they look for authoritative declarations of fact. Instead of writing long, conversational paragraphs, use clear, direct statements that clearly define key concepts.'
      },
      {
        type: 'paragraph',
        content: 'Example: Instead of saying "We have been working in the AI space for quite some time and our team specializes in building custom agents that can automate your operations," write: "**MeghRoop is an AI engineering studio that builds custom autonomous agents, [AI search optimization](/ai-search-optimization) engines, and [n8n workflow systems](/n8n-workflows).**"'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Structured JSON-LD Entity Graphs'
      },
      {
        type: 'paragraph',
        content: 'AI crawlers are highly efficient at parsing JSON-LD schema markup. By declaring clear relationship graphs in your schemas (specifying who you are, what services you offer, and what tools you build), you provide the AI with verified, unambiguous facts to store in its knowledge graph.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Entity Co-occurrence and Citations'
      },
      {
        type: 'paragraph',
        content: 'RAG models build associations between concepts. If your brand name co-occurs frequently in high-quality articles alongside terms like "Custom MCP Servers" or "Next.js Web Engineering," the LLM learns to associate your brand with those concepts. This makes your site a prime source for queries about those topics.'
      },
      {
        type: 'heading',
        level: 3,
        content: '4. Crawler-Friendly Technical Architecture'
      },
      {
        type: 'paragraph',
        content: 'If your site is slow, heavily relies on complex client-side JavaScript rendering, or blocks AI bots in its configurations, it will be skipped by high-speed RAG crawlers. Achieving sub-400ms server response times, pre-rendering all page text server-side, and explicitly configuring a crawler-friendly `robots.txt` are key technical requirements for GEO success.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Measuring GEO Success'
      },
      {
        type: 'paragraph',
        content: 'Unlike traditional SEO, which relies on tracking organic search impressions and keyword rankings, GEO success is measured by brand share-of-voice within AI answers.'
      },
      {
        type: 'paragraph',
        content: 'At MeghRoop, our [Generative Engine Optimization (GEO)](/ai-search-optimization) team runs ongoing search audits across platforms like Perplexity, ChatGPT Search, and Google Gemini. We track how often our clients appear in generative answers, helping them build authority and stay visible as search changes.'
      }
    ],
    seo: {
      title: 'Generative Engine Optimization Playbook',
      description: 'Traditional SEO is shifting. Learn the engineering playbook to make your brand visible to ChatGPT, Perplexity, and Google AI Overviews.',
      keywords: ['Generative Engine Optimization', 'GEO optimization', 'AI Search optimization', 'Perplexity SEO', 'ChatGPT search optimization', 'Semantic SEO', 'JSON-LD entity graph']
    },
    faqs: [
      {
        question: 'How is GEO different from traditional SEO?',
        answer: 'Traditional SEO focuses on optimizing for Google’s ranking algorithm to win a spot in a list of links. GEO focuses on structuring content so it can be easily read, verified, and cited by AI models generating conversational, synthesized answers.'
      },
      {
        question: 'Does schema markup help with AI search?',
        answer: 'Yes. Structured schemas (like JSON-LD Organization and Product data) tell AI crawlers exactly who you are and what you do. This eliminates ambiguity and makes it easy for AI models to index your brand as a trusted authority.'
      }
    ]
  },
  {
    slug: 'headless-shopify-nextjs-commerce',
    title: 'Headless Shopify: Achieving Sub-400ms Edge Delivery on Next.js',
    subtitle: 'Monolithic Shopify themes bleed conversion rate. Here is the engineering guide to globally-distributed, edge-cached, ultra-fast commerce.',
    description: 'Learn the engineering architecture required to build a headless Shopify storefront on Next.js. Discover strategies for sub-400ms page speeds, dynamic Incremental Static Regeneration (ISR), and flawless visual stability.',
    date: '2026-05-12',
    lastUpdated: '2026-05-22',
    readTime: '6 min read',
    category: 'Web Engineering',
    author: {
      name: 'Meghansh',
      role: 'Core Frontend Engineer',
      avatar: '/favicon.svg'
    },
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'heading',
        level: 2,
        content: 'The Cost of Slow Storefronts'
      },
      {
        type: 'paragraph',
        content: 'In modern e-commerce, speed is not just a technical metric—it directly impacts your bottom line. Mobile customers expect instant interactions. Telemetry studies show that every 100ms of latency above 1 second can decrease overall conversion rates by up to 7%.'
      },
      {
        type: 'paragraph',
        content: 'Standard Shopify themes, while convenient, are structurally limited. They are built on Liquid—Shopify’s proprietary templating engine—which renders pages on monolithic servers before sending them to users. Add in multiple third-party apps for marketing, tracking, and reviews, and you end up with heavy, slow pages that degrade the mobile shopping experience.'
      },
      {
        type: 'quote',
        content: 'Our custom [Shopify engineering](/shopify-engineering) framework solves this by decoupling the customer-facing frontend from Shopify’s backend. This gives you complete creative freedom and enables incredibly fast page speeds.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Headless E-Commerce Stack'
      },
      {
        type: 'paragraph',
        content: 'A high-performance headless architecture splits responsibilities across two layers:'
      },
      {
        type: 'list',
        content: [
          '**Backend Engine (Shopify)**: Manages inventory, processes checkouts, calculates shipping rates, and stores customer accounts.',
          '**Frontend Interface (Next.js)**: A globally-distributed storefront deployed to edge networks, built with React and optimized with TailwindCSS.'
        ]
      },
      {
        type: 'paragraph',
        content: 'By separating these layers, your frontend handles the visual layout, while communicating with Shopify’s backend via the secure Shopify Storefront GraphQL API.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Architecting for Sub-400ms Speeds with Next.js App Router'
      },
      {
        type: 'paragraph',
        content: 'To achieve sub-400ms loading speeds globally, we combine Next.js Server Components (RSC) with a hybrid caching strategy.'
      },
      {
        type: 'code',
        language: 'typescript',
        content: `// Next.js Server Component fetching product data directly at build/request time
import { storefrontQuery } from '@/lib/shopify';

interface ProductPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const products = await storefrontQuery(\`
    query GetProductsList {
      products(first: 100) {
        edges {
          node {
            handle
          }
        }
      }
    }
  \`);
  
  return products.data.products.edges.map(({ node }: any) => ({
    slug: node.handle,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const response = await storefrontQuery(\`
    query GetProductDetails($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        descriptionHtml
        priceRange {
          minVariantPrice { amount currencyCode }
        }
      }
    }
  \`, { handle: params.slug });

  const product = response.data.productByHandle;
  if (!product) return <div>Product not found</div>;

  return (
    <article className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-xl mt-4">\${product.priceRange.minVariantPrice.amount}</p>
      <div 
        className="mt-6 prose prose-invert"
        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} 
      />
    </article>
  );
}`
      },
      {
        type: 'heading',
        level: 3,
        content: 'Dynamic Incremental Static Regeneration'
      },
      {
        type: 'paragraph',
        content: 'Using generateStaticParams, Next.js pre-renders product pages as static HTML during the build process. When a user requests a product, the edge network delivers the pre-rendered page instantly, keeping response times under 100ms.'
      },
      {
        type: 'paragraph',
        content: 'To handle inventory changes, we implement Incremental Static Regeneration (ISR). By using Shopify Webhooks, whenever an inventory update or price change occurs, Shopify sends an automated POST request to a Next.js API endpoint, instantly revalidating only that specific product’s cache. This ensures customers always see accurate product details without needing a full site rebuild.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Flawless Visual Stability: Eliminating CLS'
      },
      {
        type: 'paragraph',
        content: 'A common issue with modern websites is layout shifts—where images or dynamic blocks load slowly, causing page content to jump. This is tracked by Lighthouse as Cumulative Layout Shift (CLS).'
      },
      {
        type: 'paragraph',
        content: 'To prevent this, our [headless Shopify storefronts](/shopify-engineering) enforce exact aspect ratio boxes for all product images. We use Next.js next/image to automatically generate modern WebP/AVIF formats, handle responsive sizing, and display solid color placeholders until the images load, keeping layouts perfectly stable.'
      }
    ],
    seo: {
      title: 'Headless Shopify Edge Architecture Playbook',
      description: 'Monolithic Shopify themes bleed conversion. Discover the complete technical playbook to build globally-distributed headless storefronts on Next.js.',
      keywords: ['Headless Shopify', 'Next.js e-commerce', 'Shopify Storefront API', 'headless commerce latency', 'Lighthouse web vitals', 'dynamic ISR', 'AVIF image optimization']
    },
    faqs: [
      {
        question: 'Does headless Shopify support standard Shopify apps?',
        answer: 'Headless storefronts do not support monolithic Liquid apps out-of-the-box. Instead, we connect modern e-commerce apps (like Klaviyo or Yotpo) directly via custom API integrations, keeping your pages clean, fast, and free of unnecessary code.'
      },
      {
        question: 'What is the speed difference with headless commerce?',
        answer: 'Traditional Shopify stores typically score 20–40 on mobile Lighthouse tests due to heavy code scripts. A headless Next.js storefront easily scores 90+, delivering pre-rendered HTML via edge servers in under 400ms.'
      }
    ]
  },
  {
    slug: 'n8n-workflows-autonomous-operations',
    title: 'Autonomous Workflow Automation: Resilient n8n Failovers',
    subtitle: 'Moving beyond simple triggers: how to build mission-critical, enterprise-grade AI automation pipelines that never fail.',
    description: 'An engineering blueprint to build resilient, self-healing workflow automation pipelines using n8n and advanced error-capturing architectures.',
    date: '2026-05-10',
    lastUpdated: '2026-05-22',
    readTime: '7 min read',
    category: 'Automation',
    author: {
      name: 'Roop',
      role: 'Automation & Systems Lead',
      avatar: '/favicon.svg'
    },
    heroImage: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=80',
    blocks: [
      {
        type: 'heading',
        level: 2,
        content: 'The Automation Reliability Challenge'
      },
      {
        type: 'paragraph',
        content: 'As businesses increasingly automate their operations, their workflows become mission-critical. Processes that once ran once a day—like syncs, notifications, and follow-ups—now run continuously as real-time pipelines handling lead generation, customer onboarding, and order fulfillment.'
      },
      {
        type: 'paragraph',
        content: 'However, many automation teams build their pipelines as simple, linear flows: a trigger occurs, a sequence of API calls executes, and the workflow ends. When a third-party service suffers an outage, or an API schema changes without warning, the workflow crashes. This causes broken data syncs, missed leads, and disrupted customer experiences.'
      },
      {
        type: 'quote',
        content: 'In production environments, workflow automation must be designed with the same resilience as core infrastructure—featuring robust error handling, automated retries, and self-healing systems.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Designing Resilient Workflows in n8n'
      },
      {
        type: 'paragraph',
        content: 'At MeghRoop, we construct custom [n8n workflows](/n8n-workflows)—leveraging this open, highly-extensible node-based workflow platform—to build advanced automation systems. To ensure these pipelines never fail silently, we use an architecture built around three core principles:'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Structured Error-Trigger Capture'
      },
      {
        type: 'paragraph',
        content: 'Every mission-critical workflow is paired with a global Error Trigger node. When any step fails, the workflow immediately halts and passes the execution data (including the error message, failing node, and input parameters) to a dedicated error-handling pipeline.'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Exponential Backoff and Retries'
      },
      {
        type: 'paragraph',
        content: 'For external API calls, we configure automatic retries using exponential backoff. If an API is temporarily down, the system waits (e.g. 5 seconds, then 30 seconds, then 5 minutes) before trying again, giving the external service time to recover and preventing system overload.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Human-in-the-Loop Fallbacks'
      },
      {
        type: 'paragraph',
        content: 'If an error persists after all retries, the workflow triggers a fallback action. It writes the failed payload to a secure queue (like a Google Sheet or Supabase table) and alerts our engineering team via a styled Slack or Discord webhook, providing a direct link to the exact step that failed so we can quickly resolve it.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Architecting Multi-Agent AI Orchestrations'
      },
      {
        type: 'paragraph',
        content: 'We also build resilient [AI agent automation](/ai-agents-automation) architectures to choreograph complex, multi-agent AI systems, utilizing [n8n workflow pipelines](/n8n-workflows) connected by state machines.'
      },
      {
        type: 'paragraph',
        content: 'For example, in a customer support workflow, one agent categorizes the incoming request, another fetches relevant database context, a third generates a draft response, and a final agent reviews the answer for quality and accuracy before sending it to a human team member for approval.'
      },
      {
        type: 'paragraph',
        content: 'By breaking these steps into distinct, observable nodes, we can easily track execution costs, monitor response quality, and quickly debug any issues, ensuring a highly reliable system.'
      }
    ],
    seo: {
      title: 'Autonomous n8n Workflow Automation Playbook',
      description: 'Discover how to build resilient, self-healing workflow automation pipelines using n8n and advanced error-capturing architectures.',
      keywords: ['n8n automation', 'workflow engineering', 'resilient API integration', 'error trigger failover', 'multi-agent orchestration', 'operational automation', 'enterprise automation']
    },
    faqs: [
      {
        question: 'Why choose n8n over tools like Zapier?',
        answer: 'Zapier is convenient for simple integrations, but quickly becomes expensive and difficult to manage for complex workflows. n8n is highly customizable, handles complex nested logic easily, runs securely in your own cloud infrastructure, and offers advanced options for integrating AI models directly.'
      },
      {
        question: 'How do you prevent workflows from losing data during an outage?',
        answer: 'We use a combination of automated retries with exponential backoff and a persistent state layer. If a service goes down, the execution data is saved, allowing the workflow to resume exactly where it paused once the service is restored.'
      }
    ]
  }
]

// ─────────────────────────────────────────────────────────────
// Supabase-backed articles (auto-published via /api/journal)
// The curated `articles` above stay hardcoded; DB articles are
// merged in at request time with ISR so new posts appear without
// a redeploy. getSupabase is imported dynamically so this module
// stays safe to import from client components.
// ─────────────────────────────────────────────────────────────

/* eslint-disable @typescript-eslint/no-explicit-any */
function mapRowToArticle(r: any): Article {
  return {
    slug: r.slug,
    title: r.title,
    subtitle: r.subtitle ?? '',
    description: r.description ?? '',
    date: r.date,
    lastUpdated: r.last_updated ?? r.date,
    readTime: r.read_time ?? '5 min read',
    category: r.category ?? 'AI Infrastructure',
    author: r.author ?? { name: 'MeghRoop', role: 'AI Engineering Studio', avatar: '/favicon.svg' },
    // Fall back to the branded site OG image so every shared link has a preview
    heroImage: r.hero_image || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'}/og-image.jpg`,
    blocks: Array.isArray(r.blocks) ? r.blocks : [],
    seo: r.seo ?? { title: r.title, description: r.description ?? '', keywords: [] },
    faqs: Array.isArray(r.faqs) ? r.faqs : [],
  }
}

async function fetchDbArticles(): Promise<Article[]> {
  try {
    const { getSupabase } = await import('@/lib/supabase')
    const db = getSupabase()
    const { data, error } = await db
      .from('journal_articles')
      .select('*')
      .order('date', { ascending: false })
    if (error || !data) return []
    return data.map(mapRowToArticle)
  } catch {
    // Supabase not configured / unreachable — fall back to static articles only
    return []
  }
}

/** All articles: curated (hardcoded) + auto-published (Supabase), newest first. */
export async function getAllArticles(): Promise<Article[]> {
  const dbArticles = await fetchDbArticles()
  const curatedSlugs = new Set(articles.map((a) => a.slug))
  const merged = [...articles, ...dbArticles.filter((a) => !curatedSlugs.has(a.slug))]
  return merged.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

/** Single article by slug — curated first, then Supabase. */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const curated = articles.find((a) => a.slug === slug)
  if (curated) return curated
  try {
    const { getSupabase } = await import('@/lib/supabase')
    const db = getSupabase()
    const { data, error } = await db
      .from('journal_articles')
      .select('*')
      .eq('slug', slug)
      .single()
    if (error || !data) return null
    return mapRowToArticle(data)
  } catch {
    return null
  }
}

// ─────────────────────────────────────────────────────────────
// Markdown <-> structured blocks (shared by /api/journal + admin)
// Pure functions — safe to import anywhere.
// ─────────────────────────────────────────────────────────────

/** Convert a markdown article body into the journal's structured blocks. */
export function markdownToBlocks(md: string): ArticleBlock[] {
  const blocks: ArticleBlock[] = []
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  let i = 0
  let para: string[] = []
  let list: string[] = []

  const flushPara = () => {
    const text = para.join(' ').trim()
    if (text) blocks.push({ type: 'paragraph', content: text })
    para = []
  }
  const flushList = () => {
    if (list.length) blocks.push({ type: 'list', content: list.slice() })
    list = []
  }

  while (i < lines.length) {
    const trimmed = lines[i].trim()

    if (trimmed.startsWith('```')) {
      flushPara(); flushList()
      const language = trimmed.slice(3).trim() || 'typescript'
      const code: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) { code.push(lines[i]); i++ }
      i++
      blocks.push({ type: 'code', language, content: code.join('\n') })
      continue
    }

    if (trimmed === '') { flushPara(); flushList(); i++; continue }

    const h = trimmed.match(/^(#{1,4})\s+(.*)$/)
    if (h) {
      flushPara(); flushList()
      const level = h[1].length
      if (level > 1) blocks.push({ type: 'heading', level: Math.min(level, 4) as 2 | 3 | 4, content: h[2].trim() })
      i++; continue
    }

    if (trimmed.startsWith('>')) {
      flushPara(); flushList()
      const quote: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('>')) { quote.push(lines[i].trim().replace(/^>\s?/, '')); i++ }
      blocks.push({ type: 'quote', content: quote.join(' ').trim() })
      continue
    }

    const li = trimmed.match(/^(?:[-*]|\d+\.)\s+(.*)$/)
    if (li) { flushPara(); list.push(li[1].trim()); i++; continue }

    flushList()
    para.push(trimmed)
    i++
  }
  flushPara(); flushList()
  return blocks
}

/** Serialize structured blocks back to markdown (for the admin edit form). */
export function blocksToMarkdown(blocks: ArticleBlock[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case 'heading':
          return '#'.repeat(b.level ?? 2) + ' ' + (b.content as string)
        case 'paragraph':
          return b.content as string
        case 'quote':
          return '> ' + (b.content as string)
        case 'code':
          return '```' + (b.language ?? '') + '\n' + (b.content as string) + '\n```'
        case 'list':
          return (b.content as string[]).map((item) => '- ' + item).join('\n')
        default:
          return ''
      }
    })
    .filter(Boolean)
    .join('\n\n')
}

export function slugifyTitle(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80)
}
